// Light-gun style weapons: hitscan rays from the camera through the cursor.
import * as THREE from 'three';
import { rand, clamp } from './util.js';

export const WEAPONS = {
  pistol: { id: 'pistol', name: 'PISTOL', dmg: 1, mag: 6, rate: 0.12, reload: 0.5, pellets: 1, spread: 0, sound: 'pistol', kick: 0.1, infinite: true },
  shotgun: { id: 'shotgun', name: 'SHOTGUN', dmg: 0.75, mag: 6, rate: 0.6, reload: 0.95, pellets: 8, spread: 0.045, sound: 'shotgun', kick: 0.45, gib: true, pickup: 18, falloff: true },
  smg: { id: 'smg', name: 'SMG', dmg: 0.6, mag: 30, rate: 0.075, reload: 0.9, pellets: 1, spread: 0.012, auto: true, sound: 'smg', kick: 0.06, pickup: 90 },
  magnum: { id: 'magnum', name: 'MAGNUM', dmg: 5, mag: 6, rate: 0.45, reload: 1.0, pellets: 1, spread: 0, sound: 'magnum', kick: 0.6, gib: true, pierce: true, pickup: 12 },
};
export const ORDER = ['pistol', 'shotgun', 'smg', 'magnum'];

const ray = new THREE.Raycaster();
ray.layers.set(1);
ray.far = 120;
const _n = new THREE.Vector3();
const _d = new THREE.Vector3();
const _p = new THREE.Vector2();

export class Arsenal {
  constructor(game) {
    this.game = game;
    this.reset();
  }

  reset() {
    this.slots = { pistol: { def: WEAPONS.pistol, ammo: 6, reserve: Infinity } };
    this.cur = 'pistol';
    this.cool = 0;
    this.reloadT = 0;
    this.trigger = false;
  }

  get slot() {
    return this.slots[this.cur];
  }
  get def() {
    return this.slot.def;
  }
  get reloading() {
    return this.reloadT > 0;
  }
  get empty() {
    return this.slot.ammo <= 0;
  }

  give(id) {
    const def = WEAPONS[id];
    const s = this.slots[id];
    if (s) s.reserve += def.pickup;
    else this.slots[id] = { def, ammo: def.mag, reserve: def.pickup - def.mag };
    this.select(id);
  }

  select(id) {
    if (!this.slots[id] || id === this.cur) return;
    this.cur = id;
    this.reloadT = 0;
    this.cool = 0.15;
    this.game.audio.play('reload');
  }

  cycle(dir) {
    const owned = ORDER.filter((id) => this.slots[id]);
    const i = owned.indexOf(this.cur);
    this.select(owned[(i + dir + owned.length) % owned.length]);
  }

  reload() {
    const s = this.slot;
    if (this.reloadT > 0 || s.ammo >= s.def.mag || s.reserve <= 0) return;
    this.reloadT = s.def.reload;
    this.game.audio.play('reload');
  }

  finishReload(s = this.slot) {
    const need = s.def.mag - s.ammo;
    const take = Math.min(need, s.reserve);
    s.ammo += take;
    if (s.reserve !== Infinity) s.reserve -= take;
  }

  // Taking cover instantly refills every weapon (Time Crisis style).
  coverReload() {
    let did = false;
    for (const id in this.slots) {
      const s = this.slots[id];
      if (s.ammo < s.def.mag && s.reserve > 0) {
        this.finishReload(s);
        did = true;
      }
    }
    if (did) this.game.audio.play('reload');
    this.reloadT = 0;
  }

  pull() {
    this.trigger = true;
    this.fire();
  }

  release() {
    this.trigger = false;
  }

  update(dt) {
    this.cool -= dt;
    if (this.reloadT > 0) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) this.finishReload();
    }
    if (this.trigger && this.def.auto) this.fire();
    // out of special ammo: fall back to the pistol
    const s = this.slot;
    if (s.ammo <= 0 && s.reserve <= 0 && this.cur !== 'pistol' && this.cool <= 0) {
      delete this.slots[this.cur];
      this.cur = 'pistol';
    }
  }

  fire() {
    const g = this.game;
    if (!g.canShoot()) return;
    if (this.cool > 0 || this.reloadT > 0) return;
    const s = this.slot;
    if (s.ammo <= 0) {
      g.audio.play('empty');
      g.hud.flashReload();
      this.cool = 0.2;
      return;
    }
    s.ammo--;
    this.cool = s.def.rate;
    g.audio.play(s.def.sound);
    g.onFire(s.def);
    const hit = this.shoot(s.def, g.input.aim);
    g.stats.shots++;
    if (hit) {
      g.stats.hits++;
      g.combo++;
      g.hud.hitMarker();
    } else g.combo = 0;
    if (s.ammo === 0 && g.autoReload) this.reload();
  }

  // Cast one ray per pellet. Damage is gathered per entity so a shotgun
  // blast counts as a single (possibly gibbing) hit.
  shoot(def, aim) {
    const g = this.game;
    const cam = g.camera;
    const byEnt = new Map();
    let dir = null;
    for (let i = 0; i < def.pellets; i++) {
      _p.set(aim.x, aim.y);
      ray.setFromCamera(_p, cam);
      if (def.spread) {
        const a = rand(0, Math.PI * 2);
        const r = Math.sqrt(Math.random()) * def.spread;
        _d.set(Math.cos(a) * r, Math.sin(a) * r, 0).applyQuaternion(cam.quaternion);
        ray.ray.direction.add(_d).normalize();
      }
      if (!dir) dir = ray.ray.direction.clone();
      const list = ray.intersectObjects(g.hitRoots, true);
      if (i < 4) {
        const first = list.find((it) => !(it.object.userData.ent && it.object.userData.ent.dead));
        g.view.tracer(first ? first.point : ray.ray.at(60, _n));
      }
      for (const it of list) {
        const ent = it.object.userData.ent;
        if (ent) {
          if (ent.dead) continue;
          let dmg = def.dmg;
          if (def.falloff) dmg *= clamp(1.5 - it.distance / 9, 0.3, 1.5);
          if (!byEnt.has(ent)) byEnt.set(ent, []);
          byEnt.get(ent).push({ part: it.object.userData.part, point: it.point.clone(), dmg, object: it.object, distance: it.distance });
          if (def.pierce && ent.kind === 'zombie') continue;
          break;
        }
        // level geometry
        _n.copy(it.face.normal).transformDirection(it.object.matrixWorld);
        const metal = it.object.material && it.object.material.metalness > 0.3;
        g.fx.bulletHole(it.point, _n);
        if (metal) {
          g.fx.sparks(it.point, _n, 6);
          if (Math.random() < 0.3) g.audio.play('ricochet', { pan: g.panFor(it.point) });
        } else {
          g.fx.dust(it.point, _n, 3);
          g.fx.sparks(it.point, _n, 2);
        }
        if (i === 0) g.audio.play('impact', { pan: g.panFor(it.point), vol: 0.6 });
        break;
      }
    }
    let counted = false;
    for (const [ent, hits] of byEnt) {
      if (ent.onShot(hits, def, dir)) counted = true;
    }
    return counted;
  }
}

// Ray probe used for the crosshair (is an enemy under the cursor?).
export function probe(game, aim) {
  _p.set(aim.x, aim.y);
  ray.setFromCamera(_p, game.camera);
  const list = ray.intersectObjects(game.hitRoots, true);
  for (const it of list) {
    const e = it.object.userData.ent;
    if (e && e.dead) continue;
    return e || null;
  }
  return null;
}
