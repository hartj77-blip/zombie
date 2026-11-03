// Boss fights. Each boss has an armoured body and a glowing weak point.
import * as THREE from 'three';
import { T } from './textures.js';
import { Entity, Zombie, Projectile, setHittable } from './entities.js';
import { buildRig, charMat, colorMat, setRigMat, FLASH_MAT, RED_MAT } from './rig.js';
import { rand, randi, pick, chance, clamp, damp, lerp, angleLerp, smooth, easeIn } from './util.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

function poseRig(r, P, k, dt) {
  const D = (o, prop, v, kk = k) => (o.rotation[prop] = damp(o.rotation[prop], v, kk, dt));
  r.hips.position.y = damp(r.hips.position.y, P.hipsY ?? r.B.hipY, k, dt);
  D(r.hips, 'x', P.hipsX || 0);
  D(r.torso, 'x', P.torsoX ?? 0.2);
  D(r.torso, 'y', P.torsoY || 0);
  D(r.torso, 'z', P.torsoZ || 0);
  D(r.neck, 'x', P.neckX || 0);
  D(r.neck, 'z', P.neckZ || 0);
  D(r.jaw, 'x', (P.jaw ?? 0.15) * r.jawScale);
  ['L', 'R'].forEach((s, i) => {
    D(r.arms[s].shoulder, 'x', P.shX[i]);
    D(r.arms[s].shoulder, 'z', P.shZ ? P.shZ[i] : (i ? 0.15 : -0.15));
    D(r.arms[s].elbow, 'x', P.elX ? P.elX[i] : -0.2);
    D(r.legs[s].hip, 'x', P.hipX ? P.hipX[i] : 0);
    D(r.legs[s].knee, 'x', P.knX ? P.knX[i] : 0.05);
  });
}

function walkPose(p, sw, t) {
  return {
    hipX: [-Math.sin(p) * sw, Math.sin(p) * sw],
    knX: [(0.5 + 0.5 * Math.sin(p + 1.6)) * sw * 1.4, (0.5 + 0.5 * Math.sin(p + Math.PI + 1.6)) * sw * 1.4],
    shX: [-0.3 + Math.sin(p) * 0.3, -0.3 - Math.sin(p) * 0.3],
    torsoX: 0.25,
    torsoZ: Math.sin(p) * 0.06,
    neckX: 0.1 + Math.sin(t) * 0.05,
  };
}

export class Boss extends Entity {
  constructor(game, at) {
    super(game);
    this.kind = 'boss';
    this.at = at.clone();
    this.t = 0;
    this.stateT = 0;
    this.state = 'intro';
    this.finished = false;
    this.flashT = 0;
    this.matMode = 0;
    this.warn = 0;
  }
  setState(s) {
    this.state = s;
    this.stateT = 0;
  }
  mult() {
    return 0.2;
  }
  onShot(hits, def, dir) {
    if (this.dead) return false;
    const g = this.game;
    if (this.state === 'intro') {
      g.fx.sparks(hits[0].point, dir.clone().negate(), 4);
      return true;
    }
    let dmg = 0;
    let weak = 0;
    for (const h of hits) {
      const m = this.mult(h.part);
      dmg += h.dmg * m;
      if (m >= 1) weak += h.dmg * m;
      if (m === 0) {
        g.fx.sparks(h.point, dir.clone().negate(), 6);
        g.audio.play('clang', { pan: g.panFor(h.point) });
      } else g.fx.blood(h.point, dir, m >= 1 ? 14 : 4, m >= 1 ? 3.5 : 2);
    }
    if (weak > 0) g.addScore(Math.round(weak * 30), hits[0].point, null);
    this.hp -= dmg * g.diff.bossDmg;
    this.flashT = weak > 0 ? 0.08 : 0.04;
    this.onDamage(dmg, weak, hits, dir);
    if (weak > 0) g.audio.play('hit', { pan: g.panFor(hits[0].point) });
    if (this.hp <= 0) this.defeat();
    return true;
  }
  blast(dmg) {
    if (this.dead || this.state === 'intro') return;
    this.hp -= dmg * 0.4;
    this.onDamage(dmg * 0.4, dmg * 0.2, [], UP);
    if (this.hp <= 0) this.defeat();
  }
  onDamage() {}
  defeat() {
    if (this.dead) return;
    this.dead = true;
    this.hp = 0;
    this.setState('death');
    setHittable(this.root, false);
    this.game.onBossDefeated(this);
  }
  updateMat(rig) {
    if (this.flashT > 0) this.flashT -= 0.016;
    let mode = 0;
    if (this.flashT > 0) mode = 1;
    else if (this.warn > 0.4 && Math.floor(this.t * 12) % 2 === 0) mode = 2;
    if (mode !== this.matMode) {
      this.matMode = mode;
      setRigMat(rig, mode === 1 ? FLASH_MAT : mode === 2 ? RED_MAT : null);
    }
  }
  playerDist() {
    const p = this.game.playerPos;
    return Math.hypot(p.x - this.root.position.x, p.z - this.root.position.z);
  }
  faceYaw() {
    const p = this.game.playerPos;
    return Math.atan2(p.x - this.root.position.x, p.z - this.root.position.z);
  }
}

function tagWeak(mesh, owner) {
  mesh.userData.ent = owner;
  mesh.userData.part = 'weak';
  mesh.layers.enable(1);
  mesh.castShadow = true;
  return mesh;
}

// =====================================================================
// SPECIMEN 01 - THE BUTCHER: a hulking cleaver-wielder with a tumour weak point.

export class Butcher extends Boss {
  constructor(game, at) {
    super(game, at);
    this.title = 'SPECIMEN 01';
    this.name = 'THE BUTCHER';
    this.maxHp = this.hp = 45 * game.diff.bossHp;
    const outfit = {
      skin: charMat(T.skin(3), 0.45),
      head: charMat(T.zombieHead(3, null), 0.45),
      shirt: charMat(T.cloth('#cfc6b4', 'apron', 1.0), 0.6),
      pants: charMat(T.cloth('#2a2620', 'denim', 0.6), 0.85),
      sleeves: false,
      longPants: true,
      belly: true,
      eyes: '#ff5a10',
    };
    const r = (this.rig = buildRig(outfit, this, 'fat'));
    this.root.add(r.root);
    this.root.scale.setScalar(1.9);
    // the cleaver
    const cleaver = new THREE.Group();
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.32), colorMat(0x8a8f94, 0.3, 1));
    blade.position.set(0, -0.32, 0.1);
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.55, 0.04), colorMat(0x5a0a0a, 0.4, 0.5));
    edge.position.set(0, -0.32, 0.27);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.22, 8), colorMat(0x2a1a0a, 0.7));
    handle.position.y = -0.02;
    cleaver.add(blade, edge, handle);
    cleaver.position.set(0, -r.B.fa - 0.06, 0.02);
    cleaver.traverse((m) => {
      if (m.isMesh) {
        m.userData.ent = this;
        m.userData.part = 'armR';
        m.userData.base = m.material;
        m.layers.enable(1);
        m.castShadow = true;
        r.meshes.push(m);
      }
    });
    r.arms.R.elbow.add(cleaver);
    // pulsing tumour cluster = weak point
    this.weakMat = new THREE.MeshStandardMaterial({ map: T.flesh(), color: 0xff9a60, emissive: 0xff3a0a, emissiveIntensity: 1.5, roughness: 0.3 });
    this.tumor = new THREE.Group();
    this.tumor.position.set(-0.12, r.B.tH * 0.62, r.B.chestD * 1.15 + 0.03);
    for (const [x, y, z, s] of [
      [0, 0, 0, 0.13],
      [0.09, 0.07, 0.02, 0.08],
      [-0.07, -0.08, 0.03, 0.07],
      [0.05, -0.1, 0.0, 0.06],
    ]) {
      const m = tagWeak(new THREE.Mesh(new THREE.SphereGeometry(s, 14, 10), this.weakMat), this);
      m.position.set(x, y, z);
      this.tumor.add(m);
    }
    r.torso.add(this.tumor);

    this.root.position.set(at.x + 7, 0, at.z);
    this.root.rotation.y = -Math.PI / 2;
    this.phase = 0;
    this.enraged = false;
    this.summoned = false;
    this.throws = 0;
    this.acc = 0;
    this.kb = new THREE.Vector3();
  }

  mult(part) {
    if (part === 'weak') return this.state === 'stagger' ? 1.5 : 1;
    if (part === 'head') return 0.35;
    return 0.12;
  }

  onDamage(dmg, weak) {
    this.acc += weak;
    if ((this.state === 'windup' && this.acc >= 3) || (this.state === 'charge' && this.acc >= 4.5)) {
      this.setState('stagger');
      this.game.audio.play('roar', { pitch: 1.2, vol: 0.8 });
      this.game.message('STAGGERED!', '#ffd060', 0.9);
      this.kb.copy(this.root.position).sub(this.game.playerPos).setY(0).normalize().multiplyScalar(4);
    }
    if (!this.summoned && this.hp < this.maxHp * 0.5) {
      this.summoned = true;
      this.enraged = true;
      this.setState('summon');
    }
  }

  aimPoint() {
    return this.tumor.getWorldPosition(new THREE.Vector3());
  }

  update(dt) {
    const g = this.game;
    this.t += dt;
    this.stateT += dt;
    const r = this.rig;
    const pos = this.root.position;
    const pp = g.playerPos;
    const dist = this.playerDist();
    const speed = this.enraged ? 1.9 : 1.35;
    let P = null;
    let moving = 0;
    let k = 10;
    this.warn = 0;
    if (this.kb.lengthSq() > 0.001) {
      pos.addScaledVector(this.kb, dt);
      this.kb.multiplyScalar(Math.exp(-4 * dt));
    }
    // pulse the weak point
    this.weakMat.emissiveIntensity = 1.2 + Math.sin(this.t * 6) * 0.6;
    const s = 1 + Math.sin(this.t * 6) * 0.06;
    this.tumor.scale.set(s, s, s);

    switch (this.state) {
      case 'intro':
        if (this.stateT < 0.1) {
          g.audio.play('door');
        }
        if (this.stateT > 0.5 && !this.roared) {
          this.roared = true;
          g.audio.play('roar');
          g.shake(0.4);
        }
        pos.x = damp(pos.x, this.at.x, 1.2, dt);
        moving = 1;
        if (this.stateT > 3.2) this.setState('approach');
        break;
      case 'approach': {
        const yaw = this.faceYaw();
        const side = Math.sin(this.t * 1.3) * 0.8;
        const dx = Math.sin(yaw);
        const dz = Math.cos(yaw);
        pos.x += (dx * speed + -dz * side) * dt;
        pos.z += (dz * speed + dx * side) * dt;
        moving = speed;
        if (dist < 3.0) {
          this.setState('windup');
          this.acc = 0;
          g.audio.play('roar', { pitch: 1.1, vol: 0.6 });
        }
        break;
      }
      case 'windup': {
        const T = this.enraged ? 0.95 : 1.15;
        this.warn = this.stateT / T;
        const w = clamp(this.stateT / T, 0, 1);
        P = { shX: [-0.6, lerp(-0.5, -3.0, w)], elX: [-0.4, -0.6], torsoX: lerp(0.2, -0.3, w), neckX: -0.3, jaw: 0.6, hipX: [-0.3, 0.3], knX: [0.3, 0.2] };
        if (this.stateT >= T) {
          g.audio.play('swipe');
          if (dist < 4.2) g.hurtPlayer(this);
          this.setState('recover');
        }
        break;
      }
      case 'recover':
        P = { shX: [-0.6, -0.6], elX: [-0.3, -0.2], torsoX: 0.8, neckX: 0.3, jaw: 0.4, hipX: [-0.4, 0.4], knX: [0.4, 0.2] };
        k = this.stateT < 0.2 ? 30 : 8;
        if (this.stateT > 0.8) this.setState('retreat');
        break;
      case 'stagger':
        P = { shX: [-0.3, -0.5], shZ: [-0.8, 0.8], torsoX: -0.3, neckX: -0.6, jaw: 0.9, hipX: [-1.0, -1.0], knX: [1.6, 1.6], hipsY: r.B.hipY - 0.35 };
        if (this.stateT > 2.2) this.setState('retreat');
        break;
      case 'retreat': {
        _v.copy(pos).sub(pp).setY(0).normalize();
        const tx = pp.x + _v.x * 9.5;
        const tz = pp.z + _v.z * 9.5;
        const dx = tx - pos.x;
        const dz = tz - pos.z;
        const d = Math.hypot(dx, dz);
        const sp = 2.6;
        if (d > 0.3) {
          pos.x += (dx / d) * Math.min(d, sp * dt);
          pos.z += (dz / d) * Math.min(d, sp * dt);
          moving = -sp;
        }
        if (d < 0.4 || this.stateT > 4) {
          this.throws = 0;
          this.setState(chance(this.enraged ? 0.45 : 0.6) ? 'throw' : 'chargeup');
        }
        break;
      }
      case 'throw': {
        const T = 0.7;
        const w = clamp(this.stateT / T, 0, 1);
        this.warn = w;
        P = { shX: [-0.4, w < 0.85 ? lerp(-0.4, -3.0, w / 0.85) : -0.5], elX: [-0.2, w < 0.85 ? -1.3 : -0.1], torsoY: w < 0.85 ? -0.5 * w : 0.4, torsoX: 0.1 };
        k = w < 0.85 ? 10 : 30;
        if (this.stateT >= T) {
          r.arms.R.hand.getWorldPosition(_v);
          const to = g.camera.position.clone();
          to.y -= 0.1;
          to.x += rand(-0.25, 0.25);
          g.addEntity(new Projectile(g, { from: _v.clone(), to, kind: 'cleaver', time: this.enraged ? 1.25 : 1.5, points: 80 }));
          this.throws++;
          this.stateT = -0.25;
          if (this.throws >= (this.enraged ? 4 : 3)) this.setState('approach');
        }
        break;
      }
      case 'chargeup':
        this.warn = this.stateT / 0.8;
        P = { shX: [-0.2, -0.2], shZ: [-0.6, 0.6], torsoX: -0.2, neckX: -0.5, jaw: 1.0, hipX: [-0.5, 0.3], knX: [0.6, 0.2] };
        if (this.stateT < dt * 1.5) g.audio.play('roar', { pitch: 0.9 });
        if (this.stateT > 0.8) {
          this.setState('charge');
          this.acc = 0;
        }
        break;
      case 'charge': {
        this.warn = 1;
        const yaw = this.faceYaw();
        const sp = this.enraged ? 7 : 6;
        pos.x += Math.sin(yaw) * sp * dt;
        pos.z += Math.cos(yaw) * sp * dt;
        moving = sp;
        this.phase += sp * dt * 2.5;
        if (Math.random() < 0.3) g.shake(0.1);
        if (dist < 2.8) {
          g.audio.play('swipe');
          g.hurtPlayer(this);
          this.setState('recover');
        }
        break;
      }
      case 'summon':
        P = { shX: [-2.8, -2.8], shZ: [-0.5, 0.5], elX: [-0.3, -0.3], torsoX: -0.4, neckX: -0.8, jaw: 1.1 };
        if (this.stateT < dt * 1.5) {
          g.audio.play('roar', { pitch: 0.8 });
          g.shake(0.5);
          g.message('IT CALLS FOR HELP!', '#ff6a3a', 1.5);
        }
        if (this.stateT > 0.6 && !this.spawnedHelp) {
          this.spawnedHelp = true;
          const c = this.at;
          for (const [x, z] of [
            [4, -9],
            [5, 9],
            [9, 0],
          ])
            g.spawn({ type: 'shambler', at: [c.x + x, c.z + z] }, g.director.fight);
        }
        if (this.stateT > 1.4) this.setState('approach');
        break;
      case 'death': {
        const f = clamp(this.stateT / 2.5, 0, 1);
        if (this.stateT < 1) {
          P = { shX: [-0.2, -0.2], shZ: [-0.4, 0.4], torsoX: 0.2, neckX: -0.6, jaw: 1.2, hipX: [-1.4, -1.4], knX: [2.2, 2.2], hipsY: r.B.hipY - 0.5 };
          k = 6;
        } else {
          P = { shX: [-2.8, -2.8], torsoX: 0.4, neckX: 0.2, hipsX: easeIn(clamp((this.stateT - 1) / 0.6, 0, 1)) * 1.4, hipsY: 0.3, hipX: [-1.4, -1.4], knX: [1.0, 1.0] };
          k = 7;
          if (!this.thud && this.stateT > 1.6) {
            this.thud = true;
            g.shake(0.7);
            g.audio.play('block');
            g.fx.dust(_v.copy(pos).setY(0.2), UP, 20);
            g.fx.splat(pos.x, pos.z, 3);
          }
        }
        if (Math.random() < 0.3) g.fx.blood(this.tumor.getWorldPosition(_v), UP, 4, 3);
        if (f >= 1 && this.stateT > 4) this.finished = true;
        if (this.stateT > 3) pos.y -= dt * 0.25;
        break;
      }
    }

    if (this.state !== 'death') {
      this.root.rotation.y = angleLerp(this.root.rotation.y, this.faceYaw(), 1 - Math.exp(-5 * dt));
      // stay in the arena
      pos.x = clamp(pos.x, this.at.x - 13, this.at.x + 9);
      pos.z = clamp(pos.z, this.at.z - 13, this.at.z + 13);
    }
    if (!P) {
      if (moving) this.phase += Math.abs(moving) * dt * 3.2 * (moving < 0 ? -1 : 1);
      P = moving ? walkPose(this.phase, this.state === 'charge' ? 0.8 : 0.45, this.t) : { shX: [-0.3, -0.4], torsoX: 0.25, neckX: 0.1 + Math.sin(this.t) * 0.05, jaw: 0.3 };
      if (this.state === 'charge') {
        P.torsoX = 0.6;
        P.shX = [-1.0, -1.6];
      }
      if (this.state !== 'charge') P.shX[1] = -0.6 + Math.sin(this.phase) * 0.2; // cleaver held ready
    }
    poseRig(r, P, k, dt);
    this.updateMat(r);
  }
}

// =====================================================================
// SPECIMEN 02 - THE WARDEN: a lanky clawed stalker that leaps between ledges.

export class Warden extends Boss {
  constructor(game, at) {
    super(game, at);
    this.title = 'SPECIMEN 02';
    this.name = 'THE WARDEN';
    this.maxHp = this.hp = 50 * game.diff.bossHp;
    const jacket = charMat(T.cloth('#bdb5a2', 'shirt', 1.0), 0.8);
    const outfit = {
      skin: charMat(T.skin(1), 0.4),
      head: charMat(T.zombieHead(1, '#3a3a3a'), 0.4),
      shirt: jacket,
      pants: jacket,
      sleeves: true,
      longSleeves: false,
      longPants: false,
      barefoot: true,
      eyes: '#ff2a1a',
    };
    const r = (this.rig = buildRig(outfit, this, 'thin'));
    this.root.add(r.root);
    this.root.scale.setScalar(1.45);
    // grotesquely long arms and bone claws
    const bone = colorMat(0xd8ccb0, 0.4);
    for (const s of ['L', 'R']) {
      r.arms[s].shoulder.scale.set(1, 1.55, 1);
      for (let i = -1; i <= 1; i++) {
        const claw = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.3, 6), bone);
        claw.position.set(i * 0.03, -r.B.fa - 0.2, 0.02);
        claw.rotation.x = Math.PI;
        claw.userData.ent = this;
        claw.userData.part = 'arm' + s;
        claw.userData.base = bone;
        claw.layers.enable(1);
        claw.castShadow = true;
        r.arms[s].elbow.add(claw);
        r.meshes.push(claw);
      }
    }
    // straitjacket straps
    const strap = colorMat(0x3a2a1a, 0.6);
    for (const y of [0.3, 0.55]) {
      const m = new THREE.Mesh(new THREE.TorusGeometry(r.B.chestW * 1.02, 0.015, 6, 24), strap);
      m.rotation.x = Math.PI / 2;
      m.scale.set(1, (r.B.chestD / r.B.chestW) * 1.25, 1);
      m.position.set(0, r.B.tH * y, 0.012);
      r.torso.add(m);
    }
    // glowing growths on the skull = weak point
    this.weakMat = new THREE.MeshStandardMaterial({ color: 0x80ff60, emissive: 0x40ff20, emissiveIntensity: 1.6, roughness: 0.3 });
    this.growths = new THREE.Group();
    r.headTarget.add(this.growths);
    for (const [x, y, z, s] of [
      [0.05, 0.1, -0.05, 0.06],
      [-0.06, 0.08, -0.07, 0.05],
      [0.0, 0.12, 0.03, 0.045],
      [0.08, 0.02, -0.08, 0.04],
    ]) {
      const m = tagWeak(new THREE.Mesh(new THREE.SphereGeometry(s, 12, 8), this.weakMat), this);
      m.position.set(x, y, z);
      this.growths.add(m);
    }
    // perches around the atrium (relative to arena centre; player is on -x side)
    this.perches = [
      [0, 0, 0],
      [-1, 0, -6.5],
      [-1, 0, 6.5],
      [5, 4.2, -8.8],
      [5, 4.2, 8.8],
      [11, 4.2, 0],
      [3, 0, 0],
    ].map(([x, y, z]) => new THREE.Vector3(at.x + x, y, at.z + z));
    this.root.position.set(at.x + 2, 9, at.z);
    this.vy = 0;
    this.acc = 0;
    this.summoned = false;
    this.perchI = 0;
  }

  mult(part) {
    const down = this.state === 'down' ? 1.5 : 1;
    if (part === 'weak') return 1.2 * down;
    if (part === 'head') return 1 * down;
    return 0.25 * down;
  }

  onDamage(dmg, weak) {
    this.acc += dmg + weak;
    if (this.state === 'lunge' && this.acc >= 3) {
      this.setState('fall');
      this.vy = 2;
      this.game.audio.play('shriek', { pitch: 0.7 });
      this.game.message('KNOCKED DOWN!', '#ffd060', 0.9);
    }
    if (!this.summoned && this.hp < this.maxHp * 0.5) {
      this.summoned = true;
      this.pendingSummon = true;
    }
  }

  aimPoint() {
    return this.growths.getWorldPosition(new THREE.Vector3());
  }

  hopTo(i) {
    this.perchI = i;
    this.hopFrom = this.root.position.clone();
    this.hopTo_ = this.perches[i].clone();
    this.setState('hop');
    this.game.audio.play('swipe');
  }

  update(dt) {
    const g = this.game;
    this.t += dt;
    this.stateT += dt;
    const r = this.rig;
    const pos = this.root.position;
    const pp = g.playerPos;
    let P = null;
    let k = 12;
    this.warn = 0;
    this.weakMat.emissiveIntensity = 1.3 + Math.sin(this.t * 7) * 0.6;
    const crouchP = { hipX: [-1.1, -1.1], knX: [1.8, 1.8], hipsY: r.B.hipY - 0.45, torsoX: 0.9, neckX: -0.7, shX: [-0.6, -0.6], shZ: [-0.6, 0.6], elX: [-0.4, -0.4], jaw: 0.5 };

    switch (this.state) {
      case 'intro':
        this.vy -= 12 * dt;
        pos.y = Math.max(0, pos.y + this.vy * dt);
        P = crouchP;
        if (pos.y === 0 && !this.landed) {
          this.landed = true;
          g.shake(0.5);
          g.audio.play('block');
          g.fx.dust(_v.copy(pos).setY(0.1), UP, 16);
          g.audio.play('shriek');
        }
        if (this.stateT > 3) this.setState('perch');
        break;
      case 'perch':
        P = { ...crouchP, neckZ: Math.sin(this.t * 3) * 0.4, jaw: 0.3 + Math.sin(this.t * 9) * 0.2, shX: [-1.2 + Math.sin(this.t * 4) * 0.2, -1.2 - Math.sin(this.t * 4) * 0.2] };
        if (this.pendingSummon) {
          this.pendingSummon = false;
          this.setState('summon');
          break;
        }
        if (this.stateT > (this.hp < this.maxHp * 0.5 ? 0.9 : 1.5)) {
          const roll = Math.random();
          if (roll < 0.5) {
            this.setState('crouch');
            g.audio.play('shriek', { pitch: 1.1 });
          } else if (roll < 0.75) this.setState('throw');
          else {
            let i;
            do i = randi(0, this.perches.length - 1);
            while (i === this.perchI);
            this.hopTo(i);
          }
        }
        break;
      case 'hop': {
        const T = 0.85;
        const f = clamp(this.stateT / T, 0, 1);
        pos.lerpVectors(this.hopFrom, this.hopTo_, smooth(f));
        pos.y += Math.sin(Math.PI * f) * 2.5;
        P = { hipX: [-1.4, -0.6], knX: [1.6, 0.6], torsoX: 0.6, shX: [-2.6, -2.4], shZ: [-0.5, 0.5], elX: [-0.2, -0.2], neckX: -0.4, jaw: 0.6 };
        if (f >= 1) {
          g.audio.play('block', { pan: g.panFor(pos) });
          this.setState('perch');
        }
        break;
      }
      case 'crouch': {
        const T = this.hp < this.maxHp * 0.5 ? 0.55 : 0.75;
        this.warn = this.stateT / T;
        P = crouchP;
        if (this.stateT > T) {
          this.setState('lunge');
          this.acc = 0;
          this.lFrom = pos.clone();
          _v.copy(pos).sub(pp).setY(0).normalize();
          this.lTo = new THREE.Vector3(pp.x + _v.x * 1.4, 0, pp.z + _v.z * 1.4);
        }
        break;
      }
      case 'lunge': {
        this.warn = 1;
        const f = clamp(this.stateT / 0.8, 0, 1);
        pos.lerpVectors(this.lFrom, this.lTo, f);
        pos.y += Math.sin(Math.PI * f) * 1.2 + (1 - f) * 0;
        P = { hipX: [-1.0, -0.4], knX: [1.0, 0.3], torsoX: 0.3, shX: [-2.4, -2.4], shZ: [-0.6, 0.6], elX: [-0.3, -0.3], neckX: -0.5, jaw: 1.2 };
        k = 20;
        if (f >= 1) {
          g.audio.play('swipe');
          g.hurtPlayer(this);
          this.hopTo(randi(1, this.perches.length - 1));
        }
        break;
      }
      case 'fall':
        this.vy -= 14 * dt;
        pos.y = Math.max(0, pos.y + this.vy * dt);
        _v.copy(pos).sub(pp).setY(0).normalize();
        pos.addScaledVector(_v, 3 * dt);
        P = { hipsX: -1.2, hipsY: 0.3, shX: [-2.5, -2.0], shZ: [-1, 1], torsoX: 0, neckX: -0.6, jaw: 1 };
        if (pos.y === 0) {
          g.shake(0.4);
          g.audio.play('block');
          this.setState('down');
        }
        break;
      case 'down':
        P = { hipsX: -1.45, hipsY: 0.2, shX: [-2.8 + Math.sin(this.t * 10) * 0.3, -2.6], shZ: [-1.1, 1.1], torsoX: 0, neckX: -0.3 + Math.sin(this.t * 14) * 0.15, jaw: 1, hipX: [0.3, -0.2], knX: [0.6, 1.0] };
        k = 8;
        if (this.stateT > 2.4) this.hopTo(randi(3, 5));
        break;
      case 'throw': {
        const T = 0.9;
        const w = clamp(this.stateT / T, 0, 1);
        this.warn = w;
        P = { ...crouchP, hipsY: r.B.hipY - 0.2, shX: [-0.6, w < 0.85 ? lerp(-1, -3.0, w / 0.85) : -0.3], elX: [-0.3, w < 0.85 ? -1.0 : 0], torsoY: w < 0.85 ? -0.6 * w : 0.5, torsoX: 0.4 };
        k = w < 0.85 ? 10 : 30;
        if (this.stateT >= T) {
          r.arms.R.hand.getWorldPosition(_v);
          const to = g.camera.position.clone();
          to.y -= 0.2;
          const big = chance(0.4);
          g.addEntity(new Projectile(g, { from: _v.clone(), to, kind: big ? 'gurney' : 'cleaver', time: big ? 1.7 : 1.3, arc: big ? 1.8 : 1.0, points: big ? 150 : 60 }));
          if (!big && chance(0.5)) {
            const to2 = to.clone();
            to2.x += rand(-0.4, 0.4);
            g.addEntity(new Projectile(g, { from: _v.clone().add(new THREE.Vector3(0, 0.2, 0)), to: to2, kind: 'cleaver', time: 1.6, arc: 1.4, points: 60 }));
          }
          this.setState('perch');
        }
        break;
      }
      case 'summon':
        P = { ...crouchP, torsoX: -0.3, neckX: -1.0, jaw: 1.2, shX: [-2.8, -2.8], shZ: [-0.8, 0.8] };
        if (this.stateT < dt * 1.5) {
          g.audio.play('shriek', { pitch: 0.6 });
          g.message('THE INMATES ANSWER!', '#ff6a3a', 1.5);
          const c = this.at;
          for (const [x, z, type] of [
            [6, -7, 'leaper'],
            [6, 7, 'leaper'],
            [2, -9, 'crawler'],
            [2, 9, 'crawler'],
          ])
            g.spawn({ type, at: [c.x + x, c.z + z] }, g.director.fight);
        }
        if (this.stateT > 1.4) this.setState('perch');
        break;
      case 'death':
        this.vy = (this.vy || 0) - 12 * dt;
        pos.y = Math.max(0, pos.y + this.vy * dt);
        P = { hipsX: -1.45, hipsY: 0.2, shX: [-2.6, -2.8], shZ: [-1.2, 1.2], torsoX: 0, neckX: -0.4, jaw: 1.2, hipX: [0.2, -0.3], knX: [0.4, 0.8] };
        k = 6;
        if (Math.random() < 0.2) g.fx.blood(this.growths.getWorldPosition(_v), UP, 6, 2.5);
        if (this.stateT > 4) this.finished = true;
        if (this.stateT > 3) pos.y -= dt * 0.3;
        break;
    }
    if (this.state !== 'death' && this.state !== 'fall' && this.state !== 'down') {
      this.root.rotation.y = angleLerp(this.root.rotation.y, this.faceYaw(), 1 - Math.exp(-8 * dt));
    }
    poseRig(r, P || crouchP, k, dt);
    this.updateMat(r);
  }
}

// =====================================================================
// SPECIMEN 00 - SUBJECT ZERO: a towering mass with an armoured heart and
// tentacles that burst out of the floor at the player.

class GroundTentacle extends Entity {
  constructor(game, boss, pos) {
    super(game);
    this.kind = 'tentacle';
    this.boss = boss;
    this.segs = [];
    this.mat = charMat(T.flesh(), 0.35);
    this.tipMat = new THREE.MeshStandardMaterial({ map: T.flesh(), emissive: 0xff2a0a, emissiveIntensity: 0, roughness: 0.3 });
    let parent = this.root;
    const N = 9;
    for (let i = 0; i < N; i++) {
      const r = lerp(0.28, 0.07, i / (N - 1));
      const seg = new THREE.Group();
      seg.position.y = i === 0 ? 0 : 0.42;
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), i === N - 1 ? this.tipMat : this.mat);
      m.scale.set(1, 1.7, 1);
      m.position.y = 0.2;
      m.castShadow = true;
      m.userData.ent = this;
      m.userData.part = i >= N - 3 ? 'tip' : 'body';
      m.layers.enable(1);
      seg.add(m);
      parent.add(seg);
      this.segs.push(seg);
      parent = seg;
    }
    this.tip = this.segs[N - 1];
    this.root.position.copy(pos);
    this.root.position.y = -4;
    this.face = Math.atan2(game.playerPos.x - pos.x, game.playerPos.z - pos.z);
    this.root.rotation.y = this.face;
    this.state = 'rise';
    this.t = 0;
    this.acc = 0;
    this.warnT = boss.phase2 ? 1.0 : 1.3;
    game.audio.play('break', { pan: game.panFor(pos) });
    game.fx.dust(pos.clone().setY(0.1), UP, 14);
    game.shake(0.25);
  }

  onShot(hits, def, dir) {
    if (this.dead) return false;
    const g = this.game;
    let d = 0;
    for (const h of hits) {
      d += h.dmg * (h.part === 'tip' ? 1.5 : 1);
      g.fx.blood(h.point, dir, 6, 2.5);
    }
    this.acc += d;
    this.boss.hp -= d * 0.35 * g.diff.bossDmg;
    this.boss.flashT = 0.04;
    g.audio.play('hit', { pan: g.panFor(this.root.position) });
    if (this.boss.hp <= 0) this.boss.defeat();
    if (this.acc >= 3 && (this.state === 'rise' || this.state === 'rear')) {
      this.state = 'retract';
      this.t = 0;
      g.addScore(150, hits[0].point, 'REPELLED');
      g.audio.play('roar', { pitch: 1.6, vol: 0.5 });
    }
    return true;
  }

  get warn() {
    return this.state === 'rear' ? this.t / this.warnT : this.state === 'slam' ? 1 : 0;
  }

  update(dt) {
    const g = this.game;
    this.t += dt;
    const segs = this.segs;
    const n = segs.length;
    let curl = 0;
    let sway = Math.sin(this.t * 3) * 0.12;
    if (this.state === 'rise') {
      this.root.position.y = lerp(-4, 0, smooth(clamp(this.t / 0.6, 0, 1)));
      if (this.t > 0.6) {
        this.state = 'rear';
        this.t = 0;
      }
    } else if (this.state === 'rear') {
      curl = -0.22 * clamp(this.t / this.warnT, 0, 1); // bend back away from the player
      this.tipMat.emissiveIntensity = Math.floor(this.t * 10) % 2 ? 2.5 : 0.4;
      if (this.t >= this.warnT) {
        this.state = 'slam';
        this.t = 0;
        g.audio.play('swipe');
      }
    } else if (this.state === 'slam') {
      curl = lerp(-0.22, 0.2, clamp(this.t / 0.22, 0, 1));
      if (this.t >= 0.22 && !this.hit) {
        this.hit = true;
        g.hurtPlayer(this);
        g.shake(0.5);
      }
      if (this.t > 0.5) {
        this.state = 'retract';
        this.t = 0;
      }
    } else if (this.state === 'retract') {
      this.tipMat.emissiveIntensity = 0;
      this.root.position.y -= dt * 7;
      curl = 0.1;
      if (this.root.position.y < -4.5) {
        this.remove = true;
        this.dead = true;
      }
    }
    for (let i = 1; i < n; i++) {
      segs[i].rotation.x = curl * 1.0 + Math.sin(this.t * 4 + i * 0.6) * 0.06;
      segs[i].rotation.z = sway * Math.sin(i * 0.5 + this.t * 2) * 0.6;
    }
  }
}

export class SubjectZero extends Boss {
  constructor(game, at) {
    super(game, at);
    this.title = 'SPECIMEN 00';
    this.name = 'SUBJECT ZERO';
    this.maxHp = this.hp = 80 * game.diff.bossHp;
    const flesh = charMat(T.flesh(), 0.32);
    const skin = charMat(T.skin(2), 0.45);
    const tag = (m, part = 'body') => {
      m.userData.ent = this;
      m.userData.part = part;
      m.userData.base = m.material;
      m.layers.enable(1);
      m.castShadow = true;
      m.receiveShadow = true;
      this.meshes.push(m);
      return m;
    };
    this.meshes = [];
    const body = new THREE.Group();
    this.body = body;
    this.root.add(body);
    const mass = tag(new THREE.Mesh(new THREE.SphereGeometry(2.2, 28, 20), flesh));
    mass.scale.set(1.4, 0.75, 1.2);
    mass.position.y = 0.3;
    body.add(mass);
    // bulging growths on the mass
    for (let i = 0; i < 10; i++) {
      const a = rand(0, Math.PI * 2);
      const b = tag(new THREE.Mesh(new THREE.SphereGeometry(rand(0.4, 0.8), 14, 10), i % 3 ? flesh : skin));
      b.position.set(Math.cos(a) * 2.4, rand(0.3, 1.2), Math.sin(a) * 2.0);
      body.add(b);
    }
    const torso = new THREE.Group();
    torso.position.y = 1.5;
    body.add(torso);
    this.torso = torso;
    const chest = tag(new THREE.Mesh(new THREE.CapsuleGeometry(1.15, 1.3, 8, 20), skin));
    chest.scale.set(1.15, 1, 0.8);
    chest.position.y = 1.3;
    torso.add(chest);
    // heart (weak point) set into the chest
    this.heartMat = new THREE.MeshStandardMaterial({ map: T.flesh(), color: 0xff8070, emissive: 0xff2010, emissiveIntensity: 2, roughness: 0.25 });
    this.heart = tagWeak(new THREE.Mesh(new THREE.SphereGeometry(0.48, 20, 14), this.heartMat), this);
    this.heart.position.set(0, 1.45, 0.78);
    this.meshes.push(this.heart);
    this.heart.userData.base = this.heartMat;
    torso.add(this.heart);
    // armour plates bolted over the heart
    const plateMat = charMat(T.metal(), 0.4);
    this.plates = [];
    for (const s of [-1, 1]) {
      const hinge = new THREE.Group();
      hinge.position.set(s * 0.85, 1.45, 0.82);
      const p = tag(new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.4, 0.16), plateMat), 'armor');
      p.position.x = -s * 0.42;
      hinge.add(p);
      for (const y of [-0.5, 0, 0.5]) {
        const bolt = tag(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 8), colorMat(0x6a6a6a, 0.3, 1)), 'armor');
        bolt.rotation.x = Math.PI / 2;
        bolt.position.set(-s * 0.72, y, 0.09);
        hinge.add(bolt);
      }
      torso.add(hinge);
      this.plates.push({ hinge, s, mesh: p });
    }
    // head with a cluster of glowing eyes
    const neck = new THREE.Group();
    neck.position.set(0, 2.75, 0.3);
    torso.add(neck);
    this.neck = neck;
    const head = tag(new THREE.Mesh(new THREE.SphereGeometry(0.7, 22, 16), skin), 'head');
    head.scale.set(1, 0.9, 1.05);
    head.position.y = 0.55;
    neck.add(head);
    this.head = head;
    const eyeM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd040).multiplyScalar(3) });
    for (let i = 0; i < 9; i++) {
      const e = tag(new THREE.Mesh(new THREE.SphereGeometry(rand(0.05, 0.11), 8, 6), eyeM), 'head');
      const a = rand(-0.9, 0.9);
      const b = rand(-0.2, 0.6);
      e.position.set(Math.sin(a) * 0.62, b * 0.6, Math.cos(a) * 0.62 + 0.05);
      head.add(e);
    }
    const jaw = new THREE.Group();
    jaw.position.set(0, -0.15, 0.25);
    head.add(jaw);
    this.jaw = jaw;
    const jm = tag(new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), flesh), 'head');
    jm.scale.set(1.1, 0.8, 1.1);
    jaw.add(jm);
    const mouth = new THREE.Mesh(new THREE.CircleGeometry(0.42, 16), new THREE.MeshBasicMaterial({ color: 0x1a0000 }));
    mouth.rotation.x = -Math.PI / 2;
    mouth.position.y = -0.01;
    jaw.add(mouth);
    // huge arms
    this.arms = [];
    for (const s of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(s * 1.45, 2.3, 0);
      torso.add(sh);
      const up = tag(new THREE.Mesh(new THREE.CapsuleGeometry(0.38, 1.4, 6, 14), skin), 'arm');
      up.position.y = -0.85;
      sh.add(up);
      const el = new THREE.Group();
      el.position.y = -1.7;
      sh.add(el);
      const fo = tag(new THREE.Mesh(new THREE.CapsuleGeometry(0.33, 1.4, 6, 14), flesh), 'arm');
      fo.position.y = -0.8;
      el.add(fo);
      for (let f = -1; f <= 1; f++) {
        const c = tag(new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.6, 8), colorMat(0xd8ccb0, 0.4)), 'arm');
        c.position.set(f * 0.15, -1.8, 0.1);
        c.rotation.x = Math.PI;
        el.add(c);
      }
      this.arms.push({ sh, el, s });
    }
    // writhing back tentacles (decorative)
    this.tails = [];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.3;
      let parent = new THREE.Group();
      parent.position.set(Math.cos(a) * 2.2, 0.6, Math.sin(a) * 1.8 - 0.6);
      parent.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.9);
      body.add(parent);
      const chain = [parent];
      for (let j = 0; j < 7; j++) {
        const seg = new THREE.Group();
        seg.position.y = j === 0 ? 0 : 0.5;
        const m = tag(new THREE.Mesh(new THREE.SphereGeometry(lerp(0.3, 0.08, j / 6), 10, 8), flesh));
        m.scale.y = 1.6;
        m.position.y = 0.25;
        seg.add(m);
        parent.add(seg);
        chain.push(seg);
        parent = seg;
      }
      this.tails.push(chain);
    }
    this.root.position.set(at.x, -7, at.z);
    this.platesOpen = 0;
    this.phase2 = false;
    this.attackT = 2.5;
    this.openT = 0;
    this.spits = 0;
    this.summons = 0;
  }

  // compatibility with updateMat()
  get rigLike() {
    return { meshes: this.meshes };
  }

  mult(part) {
    if (part === 'weak') return this.platesOpen > 0.6 ? 1 : 0;
    if (part === 'armor') return 0;
    if (part === 'head') return 0.25;
    return 0.08;
  }

  onDamage() {
    if (!this.phase2 && this.hp < this.maxHp * 0.45) {
      this.phase2 = true;
      this.setState('phase2');
    }
  }

  aimPoint() {
    const t = this.game.entities.find((e) => e.kind === 'tentacle' && !e.dead && (e.state === 'rear' || e.state === 'rise'));
    if (t) return t.tip.getWorldPosition(new THREE.Vector3());
    if (this.platesOpen > 0.6) return this.heart.getWorldPosition(new THREE.Vector3());
    return this.head.getWorldPosition(new THREE.Vector3());
  }

  spawnTentacle() {
    const g = this.game;
    const pp = g.playerPos;
    _v.copy(this.root.position).sub(pp).setY(0).normalize();
    const side = new THREE.Vector3(-_v.z, 0, _v.x);
    const p = pp.clone().addScaledVector(_v, rand(2.6, 3.4)).addScaledVector(side, rand(-1.6, 1.6));
    p.y = 0;
    g.addEntity(new GroundTentacle(g, this, p));
  }

  spit() {
    const g = this.game;
    this.head.getWorldPosition(_v);
    _v.y -= 0.3;
    const to = g.camera.position.clone();
    to.x += rand(-0.3, 0.3);
    to.y -= 0.15;
    g.addEntity(new Projectile(g, { from: _v.clone(), to, kind: 'acid', time: rand(1.2, 1.5), arc: 1.5, points: 60 }));
    g.audio.play('splash', { pan: g.panFor(_v) });
  }

  update(dt) {
    const g = this.game;
    this.t += dt;
    this.stateT += dt;
    const pos = this.root.position;
    this.warn = 0;
    this.heartMat.emissiveIntensity = 1.5 + Math.max(0, Math.sin(this.t * 7)) * 2.5;
    const hb = 1 + Math.max(0, Math.sin(this.t * 7)) * 0.12;
    this.heart.scale.setScalar(hb);
    let openTarget = this.phase2 ? 1 : 0;
    let jawT = 0.1 + Math.sin(this.t * 2) * 0.05;
    let armRaise = 0;

    switch (this.state) {
      case 'intro':
        pos.y = lerp(-7, 0, smooth(clamp(this.stateT / 3, 0, 1)));
        if (Math.random() < 0.6) g.fx.dust(_v.set(pos.x + rand(-3, 3), 0.1, pos.z + rand(-3, 3)), UP, 2);
        if (Math.random() < 0.2) g.shake(0.15);
        if (this.stateT > 2.2 && !this.roared) {
          this.roared = true;
          g.audio.play('roar', { pitch: 0.6 });
          g.shake(0.8);
        }
        jawT = this.stateT > 2.2 ? 0.8 : 0.1;
        armRaise = this.stateT > 2.2 ? 1 : 0;
        if (this.stateT > 4) this.setState('idle');
        break;
      case 'idle':
        this.attackT -= dt;
        if (this.attackT <= 0) {
          const r = Math.random();
          const fast = this.phase2 ? 0.65 : 1;
          if (!this.phase2 && r < 0.38) {
            this.setState('open');
          } else if (r < 0.72) {
            this.spawnTentacle();
            if (this.phase2 && chance(0.45)) setTimeout(() => !this.dead && this.spawnTentacle(), 450);
            this.attackT = rand(2.6, 3.4) * fast;
          } else {
            this.setState('spit');
            this.spits = this.phase2 ? 3 : 2;
          }
        }
        break;
      case 'open':
        openTarget = 1;
        if (this.stateT < dt * 1.5) g.audio.play('door');
        if (this.stateT > 1.0 && !this.openSpawned) {
          this.openSpawned = true;
          if (chance(0.5)) this.spawnTentacle();
        }
        if (this.stateT > 4.5) {
          this.openSpawned = false;
          this.setState('idle');
          this.attackT = rand(1.2, 2);
        }
        break;
      case 'spit': {
        jawT = 0.9;
        this.warn = (this.stateT % 0.8) / 0.8;
        if (this.stateT >= 0.8) {
          this.spit();
          this.spits--;
          this.stateT = 0;
          if (this.spits <= 0) {
            this.setState('idle');
            this.attackT = rand(1.8, 2.6) * (this.phase2 ? 0.7 : 1);
          }
        }
        break;
      }
      case 'phase2':
        jawT = 1;
        armRaise = 1;
        openTarget = 1;
        if (this.stateT < dt * 1.5) {
          g.audio.play('roar', { pitch: 0.5 });
          g.audio.play('explode');
          g.shake(1.0);
          g.message('ITS HEART IS EXPOSED!', '#ff6a3a', 2);
          for (const p of this.plates) {
            const c = new THREE.Mesh(p.mesh.geometry, p.mesh.userData.base);
            p.hinge.updateWorldMatrix(true, true);
            p.mesh.matrixWorld.decompose(c.position, c.quaternion, c.scale);
            g.fx.addDebris(c, new THREE.Vector3(p.s * rand(3, 5), rand(4, 6), rand(2, 4)), new THREE.Vector3(rand(-6, 6), rand(-6, 6), rand(-6, 6)), 6, false, 0.1);
            p.hinge.visible = false;
            setHittable(p.hinge, false);
          }
          this.heart.getWorldPosition(_v);
          g.fx.explosion(_v, 0.6);
          g.fx.blood(_v, UP, 40, 5);
          const c = this.at;
          for (const [x, z] of [
            [-4, -10],
            [-4, 10],
          ])
            g.spawn({ type: 'runner', at: [c.x + x, c.z + z] }, g.director.fight);
        }
        if (this.stateT > 2) {
          this.setState('idle');
          this.attackT = 1;
        }
        break;
      case 'death':
        jawT = 1.1;
        armRaise = Math.sin(this.t * 8) * 0.5 + 0.5;
        openTarget = 1;
        if (Math.random() < 0.5) g.fx.blood(this.heart.getWorldPosition(_v), _v2.set(rand(-1, 1), 1, 1), 10, 5);
        if (Math.random() < 0.1) g.fx.explosion(_v.copy(pos).add(new THREE.Vector3(rand(-2, 2), rand(1, 4), rand(-1, 2))), 0.5);
        if (this.stateT > 2.5) pos.y -= dt * 2.2;
        this.body.rotation.z = Math.sin(this.t * 20) * 0.05;
        if (this.stateT > 6) this.finished = true;
        break;
    }

    // plates
    this.platesOpen = damp(this.platesOpen, openTarget, 4, dt);
    for (const p of this.plates) p.hinge.rotation.y = p.s * this.platesOpen * 1.6;
    // body motion
    this.torso.rotation.x = 0.1 + Math.sin(this.t * 0.9) * 0.06;
    this.torso.rotation.z = Math.sin(this.t * 0.7) * 0.05;
    this.neck.rotation.x = 0.15 + Math.sin(this.t * 1.3) * 0.08;
    this.neck.rotation.y = Math.sin(this.t * 0.5) * 0.25;
    this.jaw.rotation.x = damp(this.jaw.rotation.x, jawT, 8, dt);
    for (const a of this.arms) {
      const rx = lerp(-0.4 + Math.sin(this.t * 1.1 + a.s) * 0.15, -2.6, armRaise);
      a.sh.rotation.x = damp(a.sh.rotation.x, rx, 4, dt);
      a.sh.rotation.z = damp(a.sh.rotation.z, a.s * lerp(0.35, 0.8, armRaise), 4, dt);
      a.el.rotation.x = damp(a.el.rotation.x, lerp(-0.9, -0.4, armRaise), 4, dt);
    }
    this.tails.forEach((chain, i) => {
      for (let j = 1; j < chain.length; j++) {
        chain[j].rotation.x = Math.sin(this.t * 2 + i + j * 0.7) * 0.25;
        chain[j].rotation.z = Math.cos(this.t * 1.6 + i * 2 + j * 0.5) * 0.25;
      }
    });
    this.updateMat(this.rigLike);
  }
}

export const BOSSES = { butcher: Butcher, warden: Warden, zero: SubjectZero };
