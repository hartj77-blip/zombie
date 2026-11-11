// First-person weapon: the gun in your hand, muzzle flash, tracers and brass.
import * as THREE from 'three';
import { T } from './textures.js';
import { rand, damp, clamp } from './util.js';

const steel = new THREE.MeshStandardMaterial({ color: 0x17191c, metalness: 0.85, roughness: 0.34 });
const polymer = new THREE.MeshStandardMaterial({ color: 0x0c0c0d, metalness: 0.1, roughness: 0.7 });
const chrome = new THREE.MeshStandardMaterial({ color: 0xb4b8be, metalness: 1, roughness: 0.2 });
const wood = new THREE.MeshStandardMaterial({ color: 0x4a2c16, metalness: 0, roughness: 0.55 });
const glove = new THREE.MeshStandardMaterial({ color: 0x2a2018, metalness: 0, roughness: 0.6 });
const sleeve = new THREE.MeshStandardMaterial({ color: 0x1a2030, metalness: 0, roughness: 0.9 });
const lens = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff0d0).multiplyScalar(2.5) });
const brass = new THREE.MeshStandardMaterial({ color: 0xc9a040, metalness: 1, roughness: 0.3 });
const shellRed = new THREE.MeshStandardMaterial({ color: 0xb02a1a, metalness: 0, roughness: 0.5 });

const B = (m, w, h, d, x, y, z, rx = 0) => {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, y, z);
  o.rotation.x = rx;
  return o;
};
const C = (m, r, len, x, y, z, seg = 12) => {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, seg), m);
  o.rotation.x = Math.PI / 2;
  o.position.set(x, y, z);
  return o;
};

// Every model points down -Z with the grip at the origin.
function hand(g) {
  const palm = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 10), glove);
  palm.scale.set(0.026, 0.044, 0.036);
  palm.position.set(0, -0.062, 0.022);
  g.add(palm);
  for (let i = 0; i < 4; i++) {
    const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.0095, 0.03, 3, 6), glove);
    f.rotation.z = Math.PI / 2;
    f.position.set(0, -0.036 - i * 0.02, -0.024 + i * 0.003);
    g.add(f);
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.0105, 0.04, 3, 6), glove);
  thumb.rotation.x = Math.PI / 2 - 0.3;
  thumb.position.set(-0.024, -0.02, -0.005);
  g.add(thumb);
  const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.036, 0.5, 4, 10), sleeve);
  const dir = new THREE.Vector3(0.2, -0.42, 0.88).normalize();
  arm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  arm.position.set(0, -0.085, 0.045).addScaledVector(dir, 0.3);
  g.add(arm);
  const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.039, 0.039, 0.03, 10), glove);
  cuff.quaternion.copy(arm.quaternion);
  cuff.position.set(0, -0.085, 0.045).addScaledVector(dir, 0.045);
  g.add(cuff);
}

function torch(g, y, z) {
  g.add(C(polymer, 0.014, 0.07, 0, y, z));
  g.add(C(steel, 0.017, 0.016, 0, y, z - 0.035));
  const l = new THREE.Mesh(new THREE.CircleGeometry(0.013, 12), lens);
  l.position.set(0, y, z - 0.0435);
  l.rotation.y = Math.PI;
  g.add(l);
  const p = new THREE.Object3D();
  p.position.set(0, y, z - 0.06);
  g.add(p);
  return p;
}

function build(kind) {
  const g = new THREE.Group();
  let muzzle;
  let light;
  let eject = [0.02, 0.03, -0.04];
  if (kind === 'pistol') {
    g.add(B(steel, 0.03, 0.036, 0.2, 0, 0.02, -0.085));
    g.add(B(polymer, 0.028, 0.022, 0.15, 0, -0.01, -0.065));
    g.add(B(polymer, 0.03, 0.105, 0.046, 0, -0.065, 0.012, 0.22));
    g.add(B(polymer, 0.008, 0.006, 0.05, 0, -0.042, -0.045));
    g.add(B(steel, 0.006, 0.008, 0.008, 0, 0.042, -0.175));
    g.add(B(steel, 0.016, 0.008, 0.008, 0, 0.042, 0.008));
    g.add(B(polymer, 0.031, 0.02, 0.05, 0, 0.022, -0.04)); // ejection port
    g.add(C(polymer, 0.0085, 0.01, 0, 0.022, -0.186));
    light = torch(g, -0.036, -0.105);
    muzzle = [0, 0.022, -0.2];
  } else if (kind === 'magnum') {
    g.add(C(chrome, 0.016, 0.24, 0, 0.022, -0.17));
    g.add(B(chrome, 0.012, 0.016, 0.24, 0, 0.002, -0.17));
    g.add(B(chrome, 0.008, 0.012, 0.24, 0, 0.042, -0.17));
    g.add(C(chrome, 0.027, 0.055, 0, 0.012, -0.022, 6));
    g.add(B(chrome, 0.026, 0.06, 0.07, 0, 0.004, 0.02));
    g.add(B(wood, 0.032, 0.11, 0.045, 0, -0.07, 0.03, 0.3));
    g.add(B(chrome, 0.008, 0.02, 0.012, 0, 0.045, 0.045, -0.5));
    light = torch(g, -0.03, -0.16);
    muzzle = [0, 0.022, -0.3];
    eject = null;
  } else if (kind === 'shotgun') {
    g.add(C(steel, 0.014, 0.6, 0, 0.03, -0.33));
    g.add(C(steel, 0.013, 0.42, 0, 0.0, -0.26));
    g.add(B(wood, 0.042, 0.04, 0.17, 0, -0.002, -0.3)); // pump
    g.add(B(steel, 0.034, 0.06, 0.2, 0, 0.012, 0.0));
    g.add(B(wood, 0.032, 0.055, 0.26, 0, -0.03, 0.2, -0.16));
    g.add(B(polymer, 0.03, 0.09, 0.04, 0, -0.06, 0.04, 0.35));
    light = torch(g, -0.035, -0.47);
    muzzle = [0, 0.03, -0.64];
    eject = [0.03, 0.02, -0.02];
  } else {
    g.add(B(steel, 0.036, 0.06, 0.28, 0, 0.012, -0.1));
    g.add(C(steel, 0.011, 0.1, 0, 0.012, -0.285));
    g.add(C(polymer, 0.017, 0.07, 0, 0.012, -0.34));
    g.add(B(polymer, 0.026, 0.19, 0.036, 0, -0.11, -0.1, -0.08)); // magazine
    g.add(B(polymer, 0.03, 0.1, 0.044, 0, -0.065, 0.02, 0.22));
    g.add(B(steel, 0.012, 0.012, 0.22, 0, -0.005, 0.14)); // wire stock
    g.add(B(steel, 0.008, 0.014, 0.012, 0, 0.05, -0.2));
    light = torch(g, -0.036, -0.2);
    muzzle = [0, 0.012, -0.38];
  }
  hand(g);
  const mz = new THREE.Object3D();
  mz.position.fromArray(muzzle);
  g.add(mz);
  g.userData = { muzzle: mz, light, eject };
  g.traverse((o) => {
    if (o.isMesh) o.frustumCulled = false;
  });
  return g;
}

const _d = new THREE.Vector3();
const _p = new THREE.Vector3();
const _q = new THREE.Quaternion();
const FWD = new THREE.Vector3(0, 0, -1);
const UP = new THREE.Vector3(0, 1, 0);

export class ViewModel {
  constructor(game) {
    this.g = game;
    this.root = new THREE.Group();
    game.camera.add(this.root);
    this.models = {};
    for (const k of ['pistol', 'shotgun', 'smg', 'magnum']) {
      const m = build(k);
      m.visible = false;
      this.root.add(m);
      this.models[k] = m;
    }
    this.cur = this.models.pistol;
    // a faint fill so the weapon reads in the dark (too short-ranged to light the scene)
    this.fill = new THREE.PointLight(0xaab4c8, 0.35, 1.0, 1.5);
    this.fill.position.set(-0.1, 0.15, -0.1);
    game.camera.add(this.fill);
    this.flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.muzzle(), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, fog: false }));
    this.flash.visible = false;
    this.flash.renderOrder = 9;
    game.scene.add(this.flash);
    this.flashT = 0;
    this.kick = 0;
    this.swap = 0;
    this.t = 0;
    // tracer pool
    this.tracers = [];
    const tg = new THREE.CylinderGeometry(1, 1, 1, 5, 1, true);
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      m.visible = false;
      m.frustumCulled = false;
      game.scene.add(m);
      this.tracers.push({ m, t: 0 });
    }
    this.nextTracer = 0;
    this.shellGeo = new THREE.CylinderGeometry(0.0045, 0.0045, 0.02, 6);
    this.shotShellGeo = new THREE.CylinderGeometry(0.009, 0.009, 0.055, 8);
  }

  muzzleWorld(out) {
    return this.cur.userData.muzzle.getWorldPosition(out);
  }

  lightWorld(out) {
    return this.cur.userData.light.getWorldPosition(out);
  }

  fire(def) {
    const g = this.g;
    this.kick = Math.min(1.4, this.kick + 0.55 + def.kick);
    this.muzzleWorld(_p);
    this.flash.position.copy(_p);
    this.flash.material.rotation = rand(0, 6.28);
    const s = def.id === 'shotgun' || def.id === 'magnum' ? 0.5 : def.id === 'smg' ? 0.26 : 0.32;
    this.flash.scale.setScalar(s * rand(0.8, 1.2));
    this.flash.visible = true;
    this.flashT = 0.045;
    g.fx.muzzle(_p);
    for (let i = 0; i < 4; i++) g.fx.soft.spawn(_p.x, _p.y, _p.z, rand(-0.3, 0.3), rand(0.1, 0.6), rand(-0.3, 0.3), { color: new THREE.Color(0x9a9a9a), life: rand(0.3, 0.7), size: 0.05, sizeEnd: 0.28, alpha: 0.22, drag: 2 });
    // eject a casing
    const e = this.cur.userData.eject;
    if (e) {
      const shot = def.id === 'shotgun';
      const c = new THREE.Mesh(shot ? this.shotShellGeo : this.shellGeo, shot ? shellRed : brass);
      this.cur.localToWorld(c.position.fromArray(e));
      _d.set(rand(1.2, 2.2), rand(1.5, 2.6), rand(-0.3, 0.6)).applyQuaternion(g.camera.quaternion);
      g.fx.addDebris(c, _d.clone(), new THREE.Vector3(rand(-30, 30), rand(-30, 30), rand(-30, 30)), 2.2, false, 0.008);
    }
  }

  tracer(end) {
    const tr = this.tracers[this.nextTracer];
    this.nextTracer = (this.nextTracer + 1) % this.tracers.length;
    this.muzzleWorld(_p);
    _d.subVectors(end, _p);
    const len = _d.length();
    if (len < 0.5) return;
    tr.m.position.copy(_p).addScaledVector(_d, 0.5);
    tr.m.quaternion.setFromUnitVectors(UP, _d.normalize());
    tr.m.scale.set(0.006, len, 0.006);
    tr.m.visible = true;
    tr.t = 0.07;
  }

  update(dt) {
    const g = this.g;
    const cam = g.camera;
    this.t += dt;
    const want = this.models[g.arsenal.cur] || this.models.pistol;
    if (want !== this.cur) {
      this.cur.visible = false;
      this.cur = want;
      this.swap = 1;
    }
    const playing = g.state === 'play' || g.state === 'continue' || g.state === 'results';
    this.cur.visible = playing;
    this.kick = damp(this.kick, 0, 13, dt);
    this.swap = damp(this.swap, 0, 7, dt);
    const reload = g.arsenal.reloading ? Math.sin(clamp(1 - g.arsenal.reloadT / g.arsenal.def.reload, 0, 1) * Math.PI) : 0;
    this.lower = damp(this.lower || 0, Math.max(g.coverAmt, this.swap, reload * 0.55), 16, dt);

    // point the barrel at whatever the crosshair is over
    const tv = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    const a = g.input.aim;
    const long = this.cur === this.models.shotgun || this.cur === this.models.smg;
    const bob = Math.sin(g.bobT * 2) * 0.006 * clamp(g.director.moving / 2.5, 0, 1);
    this.root.position.set(0.17 + a.x * 0.07 + Math.sin(this.t * 0.9) * 0.002, -0.17 + a.y * 0.045 + bob - this.lower * 0.3 + Math.sin(this.t * 1.3) * 0.002, (long ? -0.36 : -0.43) + this.kick * 0.035);
    _d.set(a.x * tv * cam.aspect * 12, a.y * tv * 12, -12).sub(this.root.position).normalize();
    _q.setFromUnitVectors(FWD, _d);
    this.root.quaternion.slerp(_q, 1 - Math.exp(-22 * dt));
    this.cur.rotation.set(this.kick * 0.2 - this.lower * 0.9 + reload * 0.3, 0, -reload * 0.5);

    if (this.flashT > 0) {
      this.flashT -= dt;
      if (this.flashT <= 0) this.flash.visible = false;
    }
    for (const tr of this.tracers) {
      if (tr.t > 0) {
        tr.t -= dt;
        tr.m.material.opacity = Math.max(0, tr.t / 0.07) * 0.7;
        if (tr.t <= 0) tr.m.visible = false;
      }
    }
  }
}
