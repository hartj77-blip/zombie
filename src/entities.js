// Game actors: zombies, survivors, thrown projectiles, pickups and destructibles.
import * as THREE from 'three';
import { T } from './textures.js';
import { buildRig, zombieOutfit, survivorOutfit, setRigMat, FLASH_MAT, RED_MAT, charMat, colorMat, collapseBone, addStump } from './rig.js';
import { rand, randi, pick, chance, clamp, damp, lerp, angleLerp, smooth, easeIn } from './util.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0);

export class Entity {
  constructor(game) {
    this.game = game;
    this.dead = false;
    this.remove = false;
    this.root = new THREE.Group();
    this.kind = 'entity';
  }
  get pos() {
    return this.root.position;
  }
  update() {}
  onShot() {
    return false;
  }
  blast() {}
}

export function setHittable(obj, on) {
  obj.traverse((o) => {
    if (o.isMesh) on ? o.layers.enable(1) : o.layers.disable(1);
  });
}

function tagAll(obj, ent, part) {
  obj.traverse((o) => {
    if (o.isMesh) {
      o.userData.ent = ent;
      o.userData.part = part;
      o.layers.enable(1);
      o.castShadow = true;
    }
  });
}

// ---------------------------------------------------------------- zombie types

export const ZTYPES = {
  shambler: { hp: 3, speed: [0.75, 1.15], build: 'normal', windup: 1.0, range: 1.45, score: 100, pitch: 1 },
  runner: { hp: 2, speed: [3.0, 3.6], build: 'thin', windup: 0.7, range: 1.5, score: 150, pitch: 1.35, run: true },
  brute: { hp: 14, speed: [0.8, 0.95], build: 'fat', scale: 1.28, windup: 1.3, range: 1.95, score: 400, pitch: 0.6, heavy: true },
  thrower: { hp: 4, speed: [0.9, 1.1], build: 'normal', windup: 0.9, range: 1.45, score: 200, throws: true, keep: [7, 11], pitch: 0.9 },
  crawler: { hp: 2, speed: [0.55, 0.75], build: 'normal', crawl: true, windup: 0.9, range: 1.35, score: 80, pitch: 1.1 },
  leaper: { hp: 2, speed: [2.4, 2.9], build: 'thin', windup: 0.55, range: 1.5, score: 200, leaps: true, pitch: 1.5 },
};

const CHUNK_GEO = new THREE.IcosahedronGeometry(1, 1);
const PART_MULT = { head: 3, torso: 1, armL: 0.5, armR: 0.5, forearmL: 0.4, forearmR: 0.4, legL: 0.5, legR: 0.5, shinL: 0.4, shinR: 0.4 };
// damage needed to cut each part off (a pistol round does 1)
const LIMB_HP = { armL: 1.5, armR: 1.5, forearmL: 1.0, forearmR: 1.0, legL: 2.0, legR: 2.0, shinL: 1.4, shinR: 1.4 };

export class Zombie extends Entity {
  constructor(game, o) {
    super(game);
    this.kind = 'zombie';
    this.type = o.type || 'shambler';
    const D = (this.def = ZTYPES[this.type]);
    const diff = game.diff;
    this.maxHp = this.hp = D.hp * diff.hp * (o.hpMul || 1);
    this.speed = rand(D.speed[0], D.speed[1]) * diff.speed * (o.speedMul || 1);
    this.windupTime = D.windup * diff.windup;
    this.range = D.range;
    this.keep = D.keep ? rand(D.keep[0], D.keep[1]) : 0;
    this.scale = (D.scale || 1) * rand(0.94, 1.06);
    this.rig = buildRig(zombieOutfit(game.theme, this.type), this, D.build);
    this.root.add(this.rig.root);
    this.root.scale.setScalar(this.scale);
    this.root.position.set(o.at[0], o.y || 0, o.at[1]);
    const pp = game.playerPos;
    this.root.rotation.y = o.face ?? Math.atan2(pp.x - o.at[0], pp.z - o.at[1]);
    this.path = (o.path || []).map((p) => new THREE.Vector3(p[0], 0, p[1]));
    this.chase = o.chase || null;
    this.fight = o.fight || null;
    this.ambient = !this.fight;
    this.limbHp = { ...LIMB_HP };
    this.severed = {};
    this.crawling = !!D.crawl;
    this.phase = rand(0, 6.28);
    this.t = rand(0, 10);
    this.kb = new THREE.Vector3();
    this.groanT = rand(0.5, 4);
    this.cool = rand(1.0, 2.5);
    this.armHang = [chance(0.2), chance(0.2)];
    this.limp = chance(0.4) ? rand(0.3, 0.7) : 1;
    this.headTilt = rand(-0.35, 0.35);
    this.flinch = 0;
    this.headFlinch = 0;
    this.warn = 0;
    this.atk = 0;
    this.matMode = 0;
    this.flashT = 0;
    this.state = 'walk';
    if (this.crawling) {
      // crawlers have already lost their legs (one at the hip, one at the knee)
      const cut = chance(0.5) ? ['L', 'R'] : ['R', 'L'];
      collapseBone(this.rig.legs[cut[0]].hip);
      addStump(this.rig.legs[cut[0]].hip, 0.085);
      collapseBone(this.rig.legs[cut[1]].knee);
      addStump(this.rig.legs[cut[1]].knee, 0.055);
      for (const k of ['leg', 'shin']) for (const sd of ['L', 'R']) this.severed[k + sd] = true;
    }
    const em = o.emerge || 'walk';
    if (em === 'rise') {
      this.state = 'rise';
      this.emergeT = -(o.riseDelay || 0);
      this.root.position.y = -2;
    } else if (em === 'drop') {
      this.state = 'drop';
      this.vy = 0;
    } else if (em === 'getup') {
      this.state = 'getup';
      this.emergeT = -(o.lie ?? rand(0.2, 0.8));
      this.rig.hips.rotation.x = -1.45;
      this.rig.hips.position.y = 0.22;
    } else if (em === 'idle') {
      this.state = 'idle';
      this.wake = o.wake || 11;
    }
    if (o.door) game.audio.play('door', { pan: game.panFor(this.root.position) });
  }

  get alive() {
    return !this.dead;
  }

  targetPos() {
    if (this.chase && (this.chase.dead || this.chase.safe)) this.chase = null;
    return this.chase ? this.chase.root.position : this.game.playerPos;
  }

  update(dt) {
    this.t += dt;
    if (this.flashT > 0) this.flashT -= dt;
    if (this.state === 'dying') return this.updateDying(dt);

    const g = this.game;
    const pos = this.root.position;
    const tgt = this.targetPos();
    let tdx = tgt.x - pos.x;
    let tdz = tgt.z - pos.z;
    const tdist = Math.hypot(tdx, tdz) || 0.001;
    let faceYaw = null;
    let moving = 0;

    // knockback
    if (this.kb.lengthSq() > 1e-4) {
      pos.addScaledVector(this.kb, dt);
      this.kb.multiplyScalar(Math.exp(-7 * dt));
    }
    this.flinch = Math.max(0, this.flinch - dt * 4);
    this.headFlinch = Math.max(0, this.headFlinch - dt * 4);
    this.cool -= dt;
    this.warn = 0;

    switch (this.state) {
      case 'idle':
        faceYaw = Math.atan2(tdx, tdz);
        if (tdist < this.wake) {
          this.state = 'walk';
          this.groan(1.2);
        }
        break;
      case 'rise':
        this.emergeT += dt;
        if (this.emergeT > 0) {
          pos.y = lerp(-2, 0, smooth(clamp(this.emergeT / 1.5, 0, 1)));
          if (Math.random() < 0.5) g.fx.dust(_v.set(pos.x, 0.05, pos.z), UP, 1, undefined);
          if (this.emergeT >= 1.5) {
            pos.y = 0;
            this.state = 'walk';
            this.groan();
          }
        }
        faceYaw = Math.atan2(tdx, tdz);
        break;
      case 'drop':
        this.vy -= 14 * dt;
        pos.y += this.vy * dt;
        if (pos.y <= 0) {
          pos.y = 0;
          this.state = 'land';
          this.landT = 0.4;
          g.audio.play('block', { pan: g.panFor(pos) });
          g.fx.dust(_v.set(pos.x, 0.1, pos.z), UP, 8);
        }
        faceYaw = Math.atan2(tdx, tdz);
        break;
      case 'land':
        this.landT -= dt;
        if (this.landT <= 0) this.state = 'walk';
        faceYaw = Math.atan2(tdx, tdz);
        break;
      case 'getup':
        this.emergeT += dt;
        if (this.emergeT > 1.6) {
          this.state = 'walk';
          this.groan();
        }
        faceYaw = Math.atan2(tdx, tdz);
        break;
      case 'walk': {
        // Zombies coming for the player must be on screen before they can
        // attack, throw or leap; off screen they circle round into view.
        const onScreen = this.chase ? true : g.inView(pos);
        let goal = tgt;
        if (this.path.length) {
          goal = this.path[0];
          if (Math.hypot(goal.x - pos.x, goal.z - pos.z) < 0.5) {
            this.path.shift();
            goal = this.path.length ? this.path[0] : tgt;
          }
        } else if (!onScreen) {
          goal = this.approachPoint(this.def.throws ? this.keep : this.range * 0.92);
        }
        const gx = goal.x - pos.x;
        const gz = goal.z - pos.z;
        const gd = Math.hypot(gx, gz) || 0.001;
        if (!this.path.length && onScreen && tdist <= this.range) {
          this.startAttack();
        } else if (this.def.throws && !this.path.length && onScreen && tdist <= this.keep) {
          faceYaw = Math.atan2(tdx, tdz);
          if (this.cool <= 0 && !this.chase) {
            this.state = 'throw';
            this.atk = 0;
          }
        } else if (this.def.leaps && !this.path.length && onScreen && tdist < 7.5 && tdist > 2.6 && this.cool <= 0 && !this.chase) {
          this.state = 'crouch';
          this.atk = 0;
          g.audio.play('shriek', { pan: g.panFor(pos), pitch: rand(0.9, 1.2) });
        } else {
          let sp = this.speed;
          if (this.crawling) sp = this.def.crawl ? this.speed : 0.5;
          const step = Math.min(sp * dt, gd);
          pos.x += (gx / gd) * step;
          pos.z += (gz / gd) * step;
          faceYaw = gd > 0.05 ? Math.atan2(gx, gz) : Math.atan2(tdx, tdz);
          moving = gd > 0.05 ? sp : 0;
          this.phase += moving * dt * (this.def.run ? 4.2 : this.crawling ? 7 : 5.5);
        }
        if (pos.y > 0 && this.state === 'walk') pos.y = damp(pos.y, 0, 5, dt);
        break;
      }
      case 'windup':
        this.atk += dt;
        this.warn = this.atk / this.windupTime;
        faceYaw = Math.atan2(tdx, tdz);
        if (this.atk >= this.windupTime) this.strike(tdist);
        break;
      case 'recover':
        this.rec -= dt;
        faceYaw = Math.atan2(tdx, tdz);
        if (this.rec <= 0) this.state = 'walk';
        break;
      case 'stagger':
        this.rec -= dt;
        if (this.rec <= 0) this.state = 'walk';
        break;
      case 'throw':
        this.atk += dt;
        this.warn = this.atk / 0.9;
        faceYaw = Math.atan2(tdx, tdz);
        if (this.atk >= 0.9) this.throwProjectile();
        break;
      case 'crouch':
        this.atk += dt;
        this.warn = this.atk / this.windupTime;
        faceYaw = Math.atan2(tdx, tdz);
        if (this.atk >= this.windupTime) {
          this.state = 'leap';
          this.leapT = 0;
          this.leapFrom = pos.clone();
          this.leapTo = _v.set(-tdx, 0, -tdz).normalize().multiplyScalar(1.0).add(tgt).clone();
          this.leapTo.y = 0;
        }
        break;
      case 'leap':
        this.leapT += dt / 0.7;
        this.warn = 1;
        pos.lerpVectors(this.leapFrom, this.leapTo, Math.min(1, this.leapT));
        pos.y = Math.sin(Math.PI * Math.min(1, this.leapT)) * 1.3;
        faceYaw = Math.atan2(tdx, tdz);
        if (this.leapT >= 1) {
          pos.y = 0;
          this.cool = rand(3, 5);
          this.strike(Math.hypot(tgt.x - pos.x, tgt.z - pos.z));
        }
        break;
    }

    // separation from other zombies
    if (this.state !== 'leap' && this.state !== 'rise') {
      for (const z of g.zombies) {
        if (z === this || z.dead) continue;
        const dx = pos.x - z.root.position.x;
        const dz = pos.z - z.root.position.z;
        const d2 = dx * dx + dz * dz;
        const min = 0.5 * (this.scale + z.scale);
        if (d2 < min * min && d2 > 1e-5) {
          const d = Math.sqrt(d2);
          const push = (min - d) * 0.5;
          pos.x += (dx / d) * push;
          pos.z += (dz / d) * push;
        }
      }
      // never get inside the camera
      if (!this.chase) {
        const pdx = pos.x - g.playerPos.x;
        const pdz = pos.z - g.playerPos.z;
        const pd = Math.hypot(pdx, pdz);
        const minD = this.range * 0.72;
        if (pd < minD && pd > 0.001) {
          pos.x = g.playerPos.x + (pdx / pd) * minD;
          pos.z = g.playerPos.z + (pdz / pd) * minD;
        }
      }
    }

    if (faceYaw !== null) this.root.rotation.y = angleLerp(this.root.rotation.y, faceYaw, 1 - Math.exp(-7 * dt));

    // groans
    this.groanT -= dt;
    if (this.groanT <= 0) {
      this.groanT = rand(3, 8);
      if (tdist < 18) this.groan();
    }

    // despawn ambient zombies the camera has passed
    if (this.ambient && g.isBehind(pos, 6)) this.remove = true;

    // material: flash white when hit, blink red during an attack wind-up
    let mode = 0;
    if (this.flashT > 0) mode = 1;
    else if (this.warn > 0.45 && Math.floor(this.t * 12) % 2 === 0) mode = 2;
    if (mode !== this.matMode) {
      this.matMode = mode;
      setRigMat(this.rig, mode === 1 ? FLASH_MAT : mode === 2 ? RED_MAT : null);
    }

    this.animate(dt, moving);
  }

  // A spot in front of the camera, on the side the zombie is already on.
  approachPoint(dist) {
    const g = this.game;
    const f = g.camFwd;
    const pp = g.playerPos;
    const dx = this.root.position.x - pp.x;
    const dz = this.root.position.z - pp.z;
    const side = (dx * -f.z + dz * f.x) / Math.max(1, Math.hypot(dx, dz));
    const lat = clamp(side * 1.5, -1, 1) * dist * g.viewTan * 0.6;
    return _v2.set(pp.x + f.x * dist - f.z * lat, 0, pp.z + f.z * dist + f.x * lat);
  }

  groan(vol = 1) {
    const g = this.game;
    const d = g.playerPos.distanceTo(this.root.position);
    g.audio.play('groan', { pan: g.panFor(this.root.position), vol: clamp(1.4 - d / 14, 0.15, 1) * vol, pitch: this.def.pitch * rand(0.9, 1.1) });
  }

  startAttack() {
    this.state = 'windup';
    this.atk = 0;
    this.windupHits = 0;
    if (Math.random() < 0.6) this.groan(1.2);
  }

  strike(dist) {
    const g = this.game;
    g.audio.play('swipe', { pan: g.panFor(this.root.position) });
    if (this.chase) {
      if (dist < this.range + 1.2) this.chase.grabbed(this);
    } else if (dist < this.range + 1.2) {
      g.hurtPlayer(this);
    }
    this.state = 'recover';
    this.rec = 0.9;
    this.atk = 0;
  }

  throwProjectile() {
    const g = this.game;
    const hand = this.rig.arms.R.hand;
    hand.getWorldPosition(_v);
    const to = g.camera.position.clone();
    to.y -= 0.15;
    to.x += rand(-0.2, 0.2);
    const kind = g.theme === 'lab' ? 'acid' : g.theme === 'hospital' ? 'cleaver' : 'bottle';
    g.addEntity(new Projectile(g, { from: _v.clone(), to, kind, time: rand(1.3, 1.6) }));
    this.state = 'recover';
    this.rec = 0.6;
    this.cool = rand(2.6, 4.2);
  }

  stagger(t = 0.4) {
    if (this.state === 'leap') {
      // knocked out of the air
      this.root.position.y = 0;
    }
    this.state = 'stagger';
    this.rec = t;
    this.atk = 0;
  }

  // hits: [{part, point, dmg}] from a single trigger pull
  onShot(hits, weapon, dir) {
    if (this.dead) return false;
    const g = this.game;
    let total = 0;
    let head = false;
    let mainPoint = hits[0].point;
    for (const h of hits) {
      let m = PART_MULT[h.part] ?? 1;
      if (h.part === 'head' && this.def.heavy) m = 2;
      if (this.state === 'leap') m *= 2;
      total += h.dmg * m;
      if (h.part === 'head') {
        head = true;
        mainPoint = h.point;
      }
      if (this.limbHp[h.part] !== undefined && !this.severed[h.part]) {
        this.limbHp[h.part] -= h.dmg;
        if (this.limbHp[h.part] <= 0) this.sever(h.part, dir);
      }
      g.fx.blood(h.point, dir, h.part === 'head' ? 10 : 6, 2.5);
    }
    this.hp -= total;
    this.flashT = 0.06;
    this.flinch = Math.min(1, this.flinch + 0.6);
    if (head) this.headFlinch = 1;
    if (this.state === 'idle' || this.state === 'getup') this.state = 'walk';
    const kbAmt = (this.def.heavy ? 0.6 : 2.2) * Math.min(2, total);
    this.kb.x += dir.x * kbAmt;
    this.kb.z += dir.z * kbAmt;

    if (this.state === 'windup' || this.state === 'throw' || this.state === 'crouch' || this.state === 'leap') {
      this.windupHits = (this.windupHits || 0) + 1;
      if (!this.def.heavy || head || this.windupHits >= 3) this.stagger(this.def.heavy ? 0.5 : 0.35);
    } else if (this.state === 'walk' && !this.def.heavy && total >= 0.9) {
      this.stagger(0.18);
    }

    if (this.hp <= 0) {
      const gib = total >= 4.5 || (weapon && weapon.gib && total >= this.maxHp);
      this.die(head ? 'head' : gib ? 'gib' : 'normal', dir, mainPoint);
    } else {
      g.audio.play('hit', { pan: g.panFor(this.root.position) });
    }
    return true;
  }

  blast(dmg, from) {
    if (this.dead) return;
    _v.subVectors(this.root.position, from).setY(0.6).normalize();
    this.hp -= dmg;
    if (this.hp <= 0) this.die('gib', _v, this.root.position.clone().setY(1), true);
    else {
      this.kb.addScaledVector(_v, 5);
      this.stagger(0.6);
    }
  }

  // Cut a limb off at the joint above the part that was hit:
  // forearm -> elbow, upper arm -> shoulder, shin -> knee, thigh -> hip.
  sever(part, dir) {
    const g = this.game;
    const side = part.slice(-1);
    const isArm = part.startsWith('arm') || part.startsWith('forearm');
    const lower = part.startsWith('forearm') || part.startsWith('shin');
    const upperKey = (isArm ? 'arm' : 'leg') + side;
    const lowerKey = (isArm ? 'forearm' : 'shin') + side;
    if (this.severed[upperKey] || (lower && this.severed[lowerKey])) return;
    const limb = isArm ? this.rig.arms[side] : this.rig.legs[side];
    const pivot = lower ? (isArm ? limb.elbow : limb.knee) : isArm ? limb.shoulder : limb.hip;
    let kind;
    if (lower) kind = isArm ? 'foreArm' : 'shin';
    else if (this.severed[lowerKey]) kind = isArm ? 'upperArm' : 'thigh';
    else kind = isArm ? 'arm' : 'leg';
    this.severed[lower ? lowerKey : upperKey] = true;
    if (!lower) this.severed[lowerKey] = true;

    setRigMat(this.rig, null);
    this.matMode = 0;
    // the severed piece keeps the limb's current pose as it flies off
    pivot.updateWorldMatrix(true, false);
    const piece = this.rig.makeDebris(kind, side);
    pivot.matrixWorld.decompose(piece.position, piece.quaternion, piece.scale);
    collapseBone(pivot);
    const r = (isArm ? (lower ? 0.04 : 0.058) : lower ? 0.056 : 0.088) * this.rig.B.limb;
    addStump(pivot, r);
    g.fx.addDebris(piece, new THREE.Vector3(dir.x * 3 + rand(-1, 1), rand(1.5, 3.5), dir.z * 3 + rand(-1, 1)), new THREE.Vector3(rand(-8, 8), rand(-8, 8), rand(-8, 8)), 6, true, 0.06);
    piece.getWorldPosition(_v);
    g.fx.blood(_v, dir, 22, 3);
    g.fx.addEmitter({ follow: pivot, kind: 'fountain', rate: 45, life: 1.2 });
    g.audio.play('sever', { pan: g.panFor(_v) });
    g.addScore(lower ? 20 : 40, _v, isArm ? 'ARM OFF' : 'LEG OFF');
    if (!isArm && !this.crawling) {
      // losing a leg drops the zombie to the floor
      this.crawling = true;
      this.range = 1.35;
      this.stagger(0.8);
    }
  }

  die(kind, dir, point, explosive = false) {
    if (this.dead) return;
    const g = this.game;
    this.dead = true;
    this.state = 'dying';
    this.dyingT = 0;
    this.warn = 0;
    setRigMat(this.rig, null);
    setHittable(this.root, false);
    this.fallDir = this.crawling ? 0 : chance(0.75) ? -1 : 1;
    this.fallStart = this.rig.hips.rotation.x;
    g.onKill(this, { head: kind === 'head', gib: kind === 'gib', point, explosive });
    if (kind === 'gib') {
      this.gib(dir);
      this.remove = true;
      return;
    }
    if (kind === 'head') this.blowHead(dir);
    else {
      g.audio.play('hit', { pan: g.panFor(this.root.position) });
      if (Math.random() < 0.5) this.groan(0.8);
    }
  }

  blowHead(dir) {
    const g = this.game;
    const r = this.rig;
    r.headTarget.getWorldPosition(_v);
    this.headless = true;
    collapseBone(r.head);
    const st = addStump(r.head, 0.055);
    st.rotation.x = Math.PI; // stump faces up out of the neck
    g.fx.blood(_v, dir, 45, 4.5, 0.9, 0.11);
    const flesh = charMat(T.flesh(), 0.4);
    for (let i = 0; i < 7; i++) {
      const chunk = new THREE.Mesh(CHUNK_GEO, i < 3 ? r.mats.skin : flesh);
      chunk.scale.set(rand(0.02, 0.045), rand(0.015, 0.035), rand(0.02, 0.04)).multiplyScalar(this.scale);
      chunk.position.copy(_v);
      g.fx.addDebris(chunk, new THREE.Vector3(dir.x * 3 + rand(-2, 2), rand(2, 5), dir.z * 3 + rand(-2, 2)), new THREE.Vector3(rand(-9, 9), rand(-9, 9), rand(-9, 9)), 4, true, 0.03);
    }
    g.fx.addEmitter({ follow: r.neck, kind: 'fountain', rate: 55, life: 1.6 });
    g.audio.play('headshot', { pan: g.panFor(_v) });
  }

  // Blown apart: limbs and head fly off whole, the torso bursts into chunks.
  gib(dir) {
    const g = this.game;
    const r = this.rig;
    r.root.updateWorldMatrix(true, true);
    const center = this.root.position.clone().setY(1 * this.scale);
    const fling = (obj) => {
      const v = obj.position.clone().sub(center).setY(0).normalize().multiplyScalar(rand(2, 5));
      v.x += dir.x * 3;
      v.z += dir.z * 3;
      v.y = rand(2, 5);
      g.fx.addDebris(obj, v, new THREE.Vector3(rand(-12, 12), rand(-12, 12), rand(-12, 12)), rand(4, 6), true, 0.06);
    };
    for (const side of ['L', 'R']) {
      for (const [isArm, upperKey, lowerKey, top, bottom] of [
        [true, 'arm' + side, 'forearm' + side, r.arms[side].shoulder, r.arms[side].elbow],
        [false, 'leg' + side, 'shin' + side, r.legs[side].hip, r.legs[side].knee],
      ]) {
        if (this.severed[upperKey]) continue;
        const kind = this.severed[lowerKey] ? (isArm ? 'upperArm' : 'thigh') : isArm ? 'arm' : 'leg';
        const piece = r.makeDebris(kind, side);
        top.matrixWorld.decompose(piece.position, piece.quaternion, piece.scale);
        fling(piece);
      }
    }
    if (!this.headless) {
      const h = r.makeHead();
      r.headTarget.getWorldPosition(h.position);
      r.head.getWorldQuaternion(h.quaternion);
      h.scale.setScalar(this.scale);
      fling(h);
    }
    const flesh = charMat(T.flesh(), 0.35);
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(CHUNK_GEO, i % 3 === 0 ? r.mats.shirt : flesh);
      m.scale.set(rand(0.04, 0.09), rand(0.03, 0.07), rand(0.04, 0.08)).multiplyScalar(this.scale);
      m.position.copy(center).add(_v.set(rand(-0.2, 0.2), rand(-0.3, 0.4), rand(-0.2, 0.2)));
      m.castShadow = true;
      fling(m);
    }
    g.fx.blood(center, dir, 80, 6, 1.1, 0.13);
    g.fx.splat(center.x, center.z, rand(1.5, 2.2));
    g.audio.play('gib', { pan: g.panFor(center) });
    this.root.visible = false;
  }

  updateDying(dt) {
    this.dyingT += dt;
    const r = this.rig;
    const f = easeIn(clamp(this.dyingT / 0.6, 0, 1));
    if (this.fallDir !== 0) {
      r.hips.rotation.x = lerp(this.fallStart, this.fallDir * 1.45, f);
      r.hips.position.y = lerp(r.B.hipY, 0.17, f);
    } else {
      r.hips.position.y = damp(r.hips.position.y, 0.14, 6, dt);
    }
    const k = 8;
    r.torso.rotation.x = damp(r.torso.rotation.x, 0, k, dt);
    r.neck.rotation.x = damp(r.neck.rotation.x, this.fallDir * -0.4, k, dt);
    for (const [side, s] of [
      ['L', -1],
      ['R', 1],
    ]) {
      const a = r.arms[side];
      a.shoulder.rotation.x = damp(a.shoulder.rotation.x, this.fallDir < 0 ? -2.6 : -0.4, k, dt);
      a.shoulder.rotation.z = damp(a.shoulder.rotation.z, s * 0.9, k, dt);
      a.elbow.rotation.x = damp(a.elbow.rotation.x, -0.3, k, dt);
      const l = r.legs[side];
      l.hip.rotation.x = damp(l.hip.rotation.x, s * 0.1, k, dt);
      l.hip.rotation.z = damp(l.hip.rotation.z, s * 0.15, k, dt);
      l.knee.rotation.x = damp(l.knee.rotation.x, this.dyingT < 0.3 ? 0.9 : 0.1, k, dt);
    }
    if (this.dyingT > 2.6) this.root.position.y -= dt * 0.35;
    if (this.dyingT > 4.2) this.remove = true;
  }

  // Procedural animation: compute target joint angles and ease toward them.
  animate(dt, moving) {
    const r = this.rig;
    const p = this.phase;
    const t = this.t;
    const B = r.B;
    let hipsY = B.hipY - 0.02 + Math.abs(Math.cos(p)) * 0.035;
    let hipsX = 0;
    let torsoX = 0.28;
    let torsoY = Math.sin(p) * 0.1;
    let torsoZ = Math.sin(p) * 0.07;
    let neckX = 0.1 + Math.sin(t * 1.3) * 0.08;
    let neckZ = this.headTilt + Math.sin(t * 0.8) * 0.12;
    let shX = [-1.3 + Math.sin(p) * 0.15, -1.3 - Math.sin(p) * 0.15];
    let shZ = [-0.12, 0.12];
    let elX = [-0.15, -0.15];
    const sw = this.def.run ? 0.85 : 0.42;
    let hipX = [-Math.sin(p) * sw, Math.sin(p) * sw * this.limp];
    let knX = [(0.5 + 0.5 * Math.sin(p + 1.6)) * sw * 1.5, (0.5 + 0.5 * Math.sin(p + Math.PI + 1.6)) * sw * 1.5 * this.limp];
    let jaw = 0.15 + Math.sin(t * 4) * 0.12;
    let k = 12;

    if (this.def.run && this.state === 'walk') {
      torsoX = 0.55;
      shX = [-1.0 + Math.sin(p) * 0.6, -1.0 - Math.sin(p) * 0.6];
      elX = [-0.6, -0.6];
      jaw = 0.5;
    }
    if (!moving && (this.state === 'walk' || this.state === 'idle')) {
      hipX = [0, 0];
      knX = [0.05, 0.05];
      torsoY = Math.sin(t * 0.7) * 0.15;
      torsoZ = Math.sin(t * 0.9) * 0.06;
    }
    for (let i = 0; i < 2; i++) {
      if (this.armHang[i] && this.state === 'walk') {
        shX[i] = Math.sin(p + i * 3) * 0.25;
        shZ[i] = (i ? 1 : -1) * 0.08;
        elX[i] = -0.1;
      }
    }

    switch (this.state) {
      case 'idle':
        torsoX = 0.6;
        neckX = 0.5 + Math.sin(t * 6) * 0.08; // hunched over, feeding
        shX = [-0.9 + Math.sin(t * 5) * 0.2, -0.8 + Math.sin(t * 5 + 1) * 0.2];
        elX = [-1.2, -1.0];
        hipX = [-0.5, -0.5];
        knX = [1.0, 1.0];
        hipsY = B.hipY - 0.25;
        jaw = 0.3 + Math.sin(t * 8) * 0.25;
        break;
      case 'rise':
        shX = [-2.8 + Math.sin(t * 6) * 0.2, -2.7 + Math.sin(t * 6 + 2) * 0.2];
        elX = [-0.3, -0.3];
        torsoX = 0.1;
        jaw = 0.6;
        break;
      case 'getup': {
        const e = clamp(this.emergeT / 1.4, 0, 1);
        k = 5;
        hipsX = e <= 0 ? -1.45 : lerp(-1.45, 0, smooth(e));
        hipsY = e <= 0 ? 0.22 : lerp(0.22, B.hipY, smooth(e));
        shX = [-1.6, -1.4];
        torsoX = e > 0.3 ? 0.5 : 0;
        hipX = [e > 0 ? -1.0 * (1 - e) : 0, e > 0 ? -0.6 * (1 - e) : 0];
        knX = [e > 0 ? 1.4 * (1 - e) : 0, e > 0 ? 1.0 * (1 - e) : 0];
        break;
      }
      case 'drop':
      case 'land':
        hipX = [-0.9, -0.9];
        knX = [1.4, 1.4];
        hipsY = B.hipY - 0.3;
        shX = [-2.2, -2.2];
        shZ = [-0.6, 0.6];
        torsoX = 0.6;
        break;
      case 'windup': {
        const w = clamp(this.atk / this.windupTime, 0, 1);
        shX = [lerp(-1.4, -2.7, w), lerp(-1.4, -2.75, w)];
        shZ = [lerp(-0.1, -0.35, w), lerp(0.1, 0.35, w)];
        elX = [-0.5 * w, -0.5 * w];
        torsoX = lerp(0.3, -0.25, w);
        neckX = lerp(0.1, -0.35, w);
        jaw = 0.4 + w * 0.5;
        hipX = [-0.2, 0.25];
        knX = [0.3, 0.1];
        k = 14;
        break;
      }
      case 'recover': {
        const s = this.rec > 0.6;
        shX = s ? [-0.6, -0.7] : [-1.2, -1.2];
        torsoX = s ? 0.75 : 0.35;
        neckX = s ? 0.3 : 0.1;
        k = s ? 25 : 8;
        jaw = 0.7;
        hipX = [-0.35, 0.3];
        break;
      }
      case 'stagger':
        torsoX = -0.35;
        neckX = -0.5;
        shX = [-0.4 + Math.sin(t * 20) * 0.3, -0.6];
        shZ = [-0.6, 0.7];
        k = 18;
        break;
      case 'throw': {
        const w = clamp(this.atk / 0.9, 0, 1);
        shX = [-1.0, w < 0.85 ? lerp(-1.2, -3.0, w / 0.85) : -0.6];
        elX = [-0.3, w < 0.85 ? -1.4 : -0.2];
        torsoY = w < 0.85 ? -0.5 * w : 0.4;
        torsoX = 0.1;
        k = w < 0.85 ? 10 : 30;
        break;
      }
      case 'crouch':
        hipX = [-1.0, -1.0];
        knX = [1.6, 1.6];
        hipsY = B.hipY - 0.35;
        torsoX = 0.9;
        shX = [-0.4, -0.4];
        shZ = [-0.7, 0.7];
        neckX = -0.6;
        jaw = 0.9;
        break;
      case 'leap':
        hipX = [-1.2, -0.8];
        knX = [1.6, 1.2];
        torsoX = 0.4;
        shX = [-2.4, -2.4];
        shZ = [-0.4, 0.4];
        elX = [-0.6, -0.6];
        neckX = -0.4;
        jaw = 1.0;
        k = 20;
        break;
    }

    if (this.crawling) {
      // dragging itself along the floor
      hipsY = 0.2;
      hipsX = 1.42;
      torsoX = -0.1;
      torsoZ = 0;
      torsoY = Math.sin(p) * 0.15;
      neckX = -0.9;
      shX = [-2.3 + Math.sin(p) * 0.55, -2.3 - Math.sin(p) * 0.55];
      shZ = [-0.2, 0.2];
      elX = [-0.3 + Math.max(0, Math.cos(p)) * 0.6, -0.3 + Math.max(0, -Math.cos(p)) * 0.6];
      hipX = [0.15, 0.25];
      knX = [0.3, 0.1];
      if (this.state === 'windup') {
        const w = clamp(this.atk / this.windupTime, 0, 1);
        shX = [-3.0 + w * 0.3, -3.0 + w * 0.3];
        neckX = -1.2;
        hipsX = 1.42 - w * 0.4;
        hipsY = 0.2 + w * 0.15;
      }
      jaw = 0.6 + Math.sin(t * 7) * 0.2;
    }

    // hit reactions layered on top
    torsoX -= this.flinch * 0.5;
    neckX -= this.headFlinch * 0.7;

    const D = (o, prop, v, kk = k) => (o.rotation[prop] = damp(o.rotation[prop], v, kk, dt));
    r.hips.position.y = damp(r.hips.position.y, hipsY, k, dt);
    D(r.hips, 'x', hipsX, this.state === 'getup' ? 6 : k);
    D(r.torso, 'x', torsoX);
    D(r.torso, 'y', torsoY);
    D(r.torso, 'z', torsoZ);
    D(r.neck, 'x', neckX);
    D(r.neck, 'z', neckZ);
    D(r.jaw, 'x', jaw * r.jawScale);
    const sides = ['L', 'R'];
    for (let i = 0; i < 2; i++) {
      const a = r.arms[sides[i]];
      D(a.shoulder, 'x', shX[i]);
      D(a.shoulder, 'z', shZ[i]);
      D(a.elbow, 'x', elX[i]);
      const l = r.legs[sides[i]];
      D(l.hip, 'x', hipX[i]);
      D(l.knee, 'x', knX[i]);
    }
  }
}

// ---------------------------------------------------------------- survivors

export class Survivor extends Entity {
  constructor(game, o) {
    super(game);
    this.kind = 'survivor';
    this.rig = buildRig(survivorOutfit(), this, 'normal');
    this.root.add(this.rig.root);
    this.root.position.set(o.at[0], 0, o.at[1]);
    this.path = (o.path || []).map((p) => new THREE.Vector3(p[0], 0, p[1]));
    this.exit = (o.exit || []).map((p) => new THREE.Vector3(p[0], 0, p[1]));
    this.speed = o.speed || 3.2;
    this.state = 'run';
    this.chasers = [];
    this.phase = 0;
    this.t = 0;
    this.safe = false;
    this.flashT = 0;
    this.screamT = 0.2;
  }

  update(dt) {
    const g = this.game;
    this.t += dt;
    const r = this.rig;
    const pos = this.root.position;
    if (this.flashT > 0) {
      this.flashT -= dt;
      if (this.flashT <= 0) setRigMat(r, null);
    }
    this.screamT -= dt;
    if (this.screamT <= 0 && (this.state === 'run' || this.state === 'cower')) {
      g.audio.play('scream', { pan: g.panFor(pos) });
      this.screamT = rand(2.5, 4);
    }

    if (this.state === 'dead') {
      this.deadT += dt;
      r.hips.rotation.x = damp(r.hips.rotation.x, 1.45, 8, dt);
      r.hips.position.y = damp(r.hips.position.y, 0.17, 8, dt);
      if (this.deadT > 3) pos.y -= dt * 0.3;
      if (this.deadT > 4.5) this.remove = true;
      return;
    }

    if ((this.state === 'run' || this.state === 'cower') && this.chasers.length && this.chasers.every((z) => z.dead)) {
      this.state = 'rescued';
      this.safe = true;
      g.onRescue(this);
      setHittable(this.root, false);
    }

    let moving = false;
    const list = this.state === 'rescued' ? this.exit : this.state === 'run' ? this.path : null;
    if (list) {
      if (list.length) {
        const w = list[0];
        const dx = w.x - pos.x;
        const dz = w.z - pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.4) list.shift();
        else {
          const s = Math.min(d, this.speed * dt);
          pos.x += (dx / d) * s;
          pos.z += (dz / d) * s;
          this.root.rotation.y = angleLerp(this.root.rotation.y, Math.atan2(dx, dz), 1 - Math.exp(-10 * dt));
          moving = true;
          this.phase += dt * 13;
        }
      } else if (this.state === 'run') {
        this.state = 'cower';
      } else {
        this.remove = true;
      }
    }

    // pose
    const p = this.phase;
    const k = 12;
    const D = (o, prop, v) => (o.rotation[prop] = damp(o.rotation[prop], v, k, dt));
    if (moving) {
      D(r.torso, 'x', 0.3);
      r.hips.position.y = r.B.hipY + Math.abs(Math.sin(p)) * 0.05;
      for (const [i, side] of [
        [0, 'L'],
        [1, 'R'],
      ]) {
        const s = i ? 1 : -1;
        D(r.legs[side].hip, 'x', s * Math.sin(p) * 0.9);
        D(r.legs[side].knee, 'x', 0.6 + s * Math.cos(p) * 0.6);
        D(r.arms[side].shoulder, 'x', -s * Math.sin(p) * 0.9 - (this.state === 'run' ? 1.2 : 0));
        D(r.arms[side].shoulder, 'z', s * 0.3);
        D(r.arms[side].elbow, 'x', -1.2);
      }
      D(r.neck, 'x', this.state === 'run' ? -0.3 : 0);
    } else if (this.state === 'cower') {
      // crouched, hands up shielding the face
      r.hips.position.y = damp(r.hips.position.y, r.B.hipY - 0.35, k, dt);
      D(r.torso, 'x', 0.5);
      D(r.neck, 'x', 0.4);
      const tgt = this.chasers.find((z) => !z.dead);
      if (tgt) this.root.rotation.y = angleLerp(this.root.rotation.y, Math.atan2(tgt.root.position.x - pos.x, tgt.root.position.z - pos.z), 0.1);
      for (const [i, side] of [
        [0, 'L'],
        [1, 'R'],
      ]) {
        D(r.legs[side].hip, 'x', -1.0);
        D(r.legs[side].knee, 'x', 1.7);
        D(r.arms[side].shoulder, 'x', -2.2 + Math.sin(this.t * 20 + i) * 0.08);
        D(r.arms[side].shoulder, 'z', (i ? 1 : -1) * -0.3);
        D(r.arms[side].elbow, 'x', -1.6);
      }
    }
  }

  grabbed() {
    if (this.state === 'dead' || this.safe) return;
    const g = this.game;
    this.die();
    g.fx.blood(_v.copy(this.root.position).setY(1.3), UP, 30, 3, 1.2);
    g.message('SURVIVOR LOST', '#ff5a3a', 1.6);
  }

  die() {
    this.state = 'dead';
    this.deadT = 0;
    this.dead = true;
    setHittable(this.root, false);
    this.game.audio.play('scream', { pan: this.game.panFor(this.root.position) });
  }

  onShot(hits, weapon, dir) {
    if (this.dead || this.safe) return false;
    this.game.fx.blood(hits[0].point, dir, 12, 2.5);
    setRigMat(this.rig, FLASH_MAT);
    this.flashT = 0.08;
    this.die();
    this.game.onCivilianShot(this);
    return false;
  }
}

// ---------------------------------------------------------------- projectiles

const projGeo = {
  hit: new THREE.SphereGeometry(0.38, 8, 6),
};
const HITBOX_MAT = new THREE.MeshBasicMaterial({ visible: false });

export class Projectile extends Entity {
  constructor(game, o) {
    super(game);
    this.kind = 'projectile';
    this.from = o.from.clone();
    this.to = o.to.clone();
    this.time = o.time || 1.4;
    this.arc = o.arc ?? 1.2;
    this.t = 0;
    this.type = o.kind || 'bottle';
    this.dmg = o.dmg || 1;
    this.points = o.points ?? 50;
    const model = new THREE.Group();
    if (this.type === 'bottle') {
      const glass = colorMat(0x1d4a20, 0.1, 0.3);
      model.add(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.22, 10), glass));
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.05, 0.12, 8), glass);
      neck.position.y = 0.16;
      model.add(neck);
      const rag = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 4), colorMat(0x000000, 1, 0, 0xff8a20, 4));
      rag.position.y = 0.24;
      model.add(rag);
      this.flame = rag;
    } else if (this.type === 'cleaver' || this.type === 'axe') {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.015), colorMat(0x9aa0a6, 0.25, 1));
      blade.position.x = 0.08;
      model.add(blade);
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.16, 6), colorMat(0x3a2412, 0.7));
      handle.rotation.z = Math.PI / 2;
      handle.position.x = -0.1;
      model.add(handle);
      model.scale.setScalar(this.type === 'axe' ? 2.2 : 1.6);
    } else if (this.type === 'acid') {
      const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 2), colorMat(0x205010, 0.2, 0, 0x3aff3a, 1.6));
      model.add(blob);
      this.blob = blob;
    } else if (this.type === 'rock') {
      model.add(new THREE.Mesh(new THREE.DodecahedronGeometry(0.35, 0), colorMat(0x4a4640, 0.9)));
    } else if (this.type === 'gurney') {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.15, 1.8), colorMat(0xb0b0b0, 0.3, 0.9));
      model.add(m);
      this.big = true;
    }
    model.traverse((m) => {
      if (m.isMesh) {
        m.castShadow = true;
        m.userData.ent = this;
        m.userData.part = 'proj';
        m.layers.enable(1);
      }
    });
    this.model = model;
    this.root.add(model);
    // generous invisible hitbox so fast objects are fair to shoot
    const hb = new THREE.Mesh(projGeo.hit, HITBOX_MAT);
    hb.userData.ent = this;
    hb.userData.part = 'proj';
    hb.layers.enable(1);
    if (this.big) hb.scale.setScalar(2.2);
    this.root.add(hb);
    this.root.position.copy(this.from);
    this.spin = new THREE.Vector3(rand(6, 12), rand(-4, 4), rand(-3, 3));
    game.audio.play('whoosh', { pan: game.panFor(this.from) });
  }

  update(dt) {
    this.t += dt / this.time;
    const t = Math.min(1, this.t);
    this.root.position.lerpVectors(this.from, this.to, t);
    this.root.position.y += Math.sin(Math.PI * t) * this.arc;
    this.model.rotation.x += this.spin.x * dt;
    this.model.rotation.y += this.spin.y * dt;
    this.model.rotation.z += this.spin.z * dt;
    if (this.flame && Math.random() < 0.6) {
      this.flame.getWorldPosition(_v);
      this.game.fx.glow.spawn(_v.x, _v.y, _v.z, rand(-0.2, 0.2), rand(0.3, 0.8), rand(-0.2, 0.2), { color: new THREE.Color(0xff8a20), life: 0.3, size: 0.12, sizeEnd: 0.02 });
    }
    if (this.blob) this.blob.scale.set(1 + Math.sin(this.t * 40) * 0.15, 1 - Math.sin(this.t * 40) * 0.15, 1);
    this.warn = t;
    if (this.t >= 1) {
      this.remove = true;
      this.dead = true;
      const hurt = this.game.hurtPlayer(this, this.dmg);
      if (!hurt) this.game.audio.play(this.type === 'acid' ? 'splash' : 'block');
      if (this.type === 'acid') this.game.screenSplat('acid');
    }
  }

  onShot(hits, weapon, dir) {
    if (this.dead) return false;
    const g = this.game;
    this.dead = true;
    this.remove = true;
    const p = this.root.position;
    if (this.type === 'bottle') {
      g.audio.play('glass', { pan: g.panFor(p) });
      g.fx.explosion(p, 0.35);
    } else if (this.type === 'acid') {
      g.audio.play('splash', { pan: g.panFor(p) });
      g.fx.acid(p, 24);
    } else {
      g.audio.play('clang', { pan: g.panFor(p) });
      g.fx.sparks(p, dir.clone().negate(), 14);
    }
    g.addScore(this.points, p.clone(), 'SHOT DOWN');
    g.stats.projectiles++;
    return true;
  }
}

// ---------------------------------------------------------------- pickups

export const PICKUPS = {
  herb: { label: 'GREEN HERB', color: 0x3aff6a },
  shells: { label: 'SHOTGUN', color: 0xff8a3a },
  smg: { label: 'SMG', color: 0x6ab8ff },
  magnum: { label: 'MAGNUM', color: 0xffe06a },
  gem: { label: 'BONUS', color: 0xffd040 },
};

export class Pickup extends Entity {
  constructor(game, o) {
    super(game);
    this.kind = 'pickup';
    this.type = o.kind;
    this.life = o.life || 14;
    this.t = rand(0, 5);
    this.baseY = o.y ?? 1.0;
    const model = new THREE.Group();
    const P = PICKUPS[this.type];
    if (this.type === 'herb') {
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.16, 12), colorMat(0x7a4a2a, 0.8));
      model.add(pot);
      const leafMat = colorMat(0x1a8a2a, 0.5, 0, 0x0a4a10, 1);
      for (let i = 0; i < 6; i++) {
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), leafMat);
        leaf.scale.set(0.5, 1.6, 0.25);
        const a = (i / 6) * Math.PI * 2;
        leaf.position.set(Math.cos(a) * 0.05, 0.17, Math.sin(a) * 0.05);
        leaf.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5);
        model.add(leaf);
      }
    } else if (this.type === 'shells') {
      model.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.14, 0.18), colorMat(0x8a1a10, 0.6)));
      for (let i = 0; i < 4; i++) {
        const s = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 8), colorMat(0xc02a1a, 0.4));
        s.position.set(-0.1 + i * 0.065, 0.12, 0);
        model.add(s);
        const brass = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.03, 8), colorMat(0xc8a040, 0.25, 1));
        brass.position.set(-0.1 + i * 0.065, 0.06, 0);
        model.add(brass);
      }
    } else if (this.type === 'smg') {
      const m = colorMat(0x1a1c20, 0.4, 0.8);
      model.add(new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.06), m));
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.05), m);
      grip.position.set(-0.05, -0.1, 0);
      model.add(grip);
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.2, 0.04), m);
      mag.position.set(0.08, -0.13, 0);
      model.add(mag);
    } else if (this.type === 'magnum') {
      const m = colorMat(0xb0b4b8, 0.2, 1);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.3, 10), m);
      barrel.rotation.z = Math.PI / 2;
      barrel.position.x = 0.1;
      model.add(barrel);
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.08, 10), m);
      cyl.rotation.z = Math.PI / 2;
      model.add(cyl);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.15, 0.05), colorMat(0x4a2a14, 0.6));
      grip.position.set(-0.08, -0.08, 0);
      grip.rotation.z = 0.3;
      model.add(grip);
    } else {
      model.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.15, 0), colorMat(0xd4a020, 0.15, 1, 0x6a4a00, 1)));
    }
    model.traverse((m) => m.isMesh && (m.castShadow = true));
    tagAll(model, this, 'pickup');
    this.model = model;
    this.root.add(model);
    const hb = new THREE.Mesh(projGeo.hit, HITBOX_MAT);
    hb.userData.ent = this;
    hb.userData.part = 'pickup';
    hb.layers.enable(1);
    this.root.add(hb);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: P.color, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.6 }));
    halo.scale.setScalar(0.9);
    this.halo = halo;
    this.root.add(halo);
    this.root.position.set(o.pos.x, this.baseY, o.pos.z);
  }

  update(dt) {
    this.t += dt;
    this.life -= dt;
    this.root.position.y = this.baseY + Math.sin(this.t * 2.5) * 0.08;
    this.model.rotation.y += dt * 2;
    this.halo.material.opacity = 0.45 + Math.sin(this.t * 6) * 0.15;
    this.root.visible = this.life > 3 || Math.floor(this.t * 8) % 2 === 0;
    if (this.life <= 0 || this.game.isBehind(this.root.position, 3)) {
      this.remove = true;
      this.halo.material.dispose();
    }
  }

  onShot() {
    if (this.dead) return false;
    this.dead = true;
    this.remove = true;
    this.halo.material.dispose();
    this.game.collect(this.type, this.root.position.clone());
    return true;
  }
}

// ---------------------------------------------------------------- destructibles

export class Barrel extends Entity {
  constructor(game, o) {
    super(game);
    this.kind = 'barrel';
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.95, 16), colorMat(0x9a1a10, 0.45, 0.5));
    body.position.y = 0.475;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.325, 0.325, 0.2, 16), colorMat(0xd0a010, 0.5, 0.3));
    band.position.y = 0.55;
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 16), colorMat(0x3a3a3a, 0.5, 0.8));
    top.position.y = 0.96;
    this.root.add(body, band, top);
    tagAll(this.root, this, 'barrel');
    this.root.position.set(o.at[0], 0, o.at[1]);
    this.fuse = -1;
  }
  update(dt) {
    if (this.fuse > 0) {
      this.fuse -= dt;
      if (Math.random() < 0.5) this.game.fx.sparks(_v.copy(this.root.position).setY(1), UP, 2);
      if (this.fuse <= 0) this.explode();
    }
  }
  onShot() {
    if (this.dead) return false;
    this.light(0.08);
    return true;
  }
  blast() {
    this.light(0.15);
  }
  light(t) {
    if (this.dead || this.fuse > 0) return;
    this.fuse = t;
    this.game.audio.play('clang', { pan: this.game.panFor(this.root.position) });
  }
  explode() {
    this.dead = true;
    this.remove = true;
    const p = this.root.position.clone().setY(0.8);
    this.game.explode(p, 4.5, 14);
    this.game.addScore(100, p, 'BOOM');
  }
}

export class Crate extends Entity {
  constructor(game, o) {
    super(game);
    this.kind = 'crate';
    const s = o.size || 0.8;
    this.size = s;
    const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), charMat(T.crate(), 0.8));
    m.position.y = s / 2;
    m.castShadow = m.receiveShadow = true;
    this.root.add(m);
    tagAll(this.root, this, 'crate');
    this.root.position.set(o.at[0], o.y || 0, o.at[1]);
    this.root.rotation.y = o.ry || rand(-0.3, 0.3);
    this.hp = 2;
    this.drop = o.drop;
  }
  onShot(hits) {
    if (this.dead) return false;
    this.hp -= hits.reduce((a, h) => a + h.dmg, 0);
    this.game.fx.dust(hits[0].point, _v.set(0, 0.5, 0), 4, undefined);
    this.game.audio.play('impact', { pan: this.game.panFor(this.root.position) });
    if (this.hp <= 0) this.smash();
    return true;
  }
  blast() {
    this.smash();
  }
  smash() {
    if (this.dead) return;
    const g = this.game;
    this.dead = true;
    this.remove = true;
    const c = this.root.position.clone().setY(this.root.position.y + this.size / 2);
    const mat = charMat(T.wood(), 0.8);
    for (let i = 0; i < 7; i++) {
      const plank = new THREE.Mesh(new THREE.BoxGeometry(this.size * rand(0.5, 1), 0.04, 0.12), mat);
      plank.position.copy(c).add(_v.set(rand(-0.3, 0.3), rand(-0.3, 0.3), rand(-0.3, 0.3)));
      plank.castShadow = true;
      g.fx.addDebris(plank, new THREE.Vector3(rand(-3, 3), rand(2, 5), rand(-3, 3)), new THREE.Vector3(rand(-10, 10), rand(-10, 10), rand(-10, 10)), 3, false, 0.02);
    }
    g.fx.dust(c, UP, 12);
    g.audio.play('break', { pan: g.panFor(c) });
    if (this.drop) g.addEntity(new Pickup(g, { kind: this.drop, pos: c, y: Math.max(0.7, c.y) }));
  }
}
