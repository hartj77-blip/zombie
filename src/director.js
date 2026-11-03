// The "rail": runs a stage's scripted beats - camera moves, fights, boss fights.
import * as THREE from 'three';
import { damp, clamp } from './util.js';

const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);

export class Director {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.lookTarget = new THREE.Vector3();
    this.moving = 0;
    this.beat = null;
    this.fight = null;
  }

  load(stage, startBeat = 0) {
    this.stage = stage;
    this.beats = stage.beats;
    this.pos.copy(v3(stage.start));
    this.look.copy(v3(stage.lookStart));
    this.lookTarget.copy(this.look);
    this.i = startBeat - 1;
    this.fight = null;
    this.beat = null;
    this.done = false;
    // fast-forward the camera if starting mid-stage (debug)
    for (let k = 0; k < startBeat; k++) {
      const b = this.beats[k];
      if (b.move) this.pos.copy(v3(b.move[b.move.length - 1]));
      if (b.look) this.look.copy(v3(b.look));
    }
    this.lookTarget.copy(this.look);
  }

  next() {
    this.i++;
    const b = this.beats[this.i];
    this.beat = b;
    this.bt = 0;
    this.fight = null;
    if (!b) {
      this.done = true;
      this.game.stageClear();
      return;
    }
    const g = this.game;
    if (b.move) {
      const pts = [this.pos.clone(), ...b.move.map(v3)];
      this.curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal', 0.5);
      this.len = this.curve.getLength();
      this.u = 0;
      this.events = (b.events || []).map((e) => ({ ...e, fired: false }));
    }
    if (b.look) this.lookTarget.copy(v3(b.look));
    if (b.fight) {
      const f = b.fight;
      this.fight = {
        waves: f.waves,
        wi: -1,
        queue: [],
        members: [],
        clearT: -1,
        def: f,
      };
      g.fightTimer = (f.time || 30) * g.diff.timeMul;
      g.fightTimerMax = g.fightTimer;
      if (f.music) g.audio.music(f.music);
      this.nextWave();
      if (f.msg) g.message(f.msg, '#ffd060', 1.6);
    }
    if (b.boss) {
      g.startBoss(b.boss, v3(b.at));
    }
    if (b.call) b.call(g);
    if (b.msg) g.message(b.msg, b.color || '#ffd060', b.dur || 2);
    if (b.spawn) b.spawn.forEach((s) => g.spawn(s, null));
  }

  nextWave() {
    const f = this.fight;
    f.wi++;
    const w = f.waves[f.wi];
    if (!w) return false;
    const spawns = Array.isArray(w) ? w : w.spawns;
    f.wave = Array.isArray(w) ? { spawns: w } : w;
    f.waveMembers = [];
    for (const s of spawns) f.queue.push({ spec: s, t: s.delay || 0 });
    return true;
  }

  update(dt) {
    const g = this.game;
    const b = this.beat;
    this.moving = damp(this.moving, 0, 6, dt);
    if (!b) return;
    this.bt += dt;

    if (b.move) {
      const speed = b.speed || 3;
      // ease in over the first metre so the camera doesn't jerk
      const ease = clamp(0.35 + (this.u * this.len) / 1.5, 0, 1) * clamp(0.35 + ((1 - this.u) * this.len) / 1.2, 0, 1);
      this.u = Math.min(1, this.u + (speed * ease * dt) / this.len);
      this.curve.getPointAt(this.u, this.pos);
      this.moving = speed * ease;
      if (!b.look) {
        const ahead = Math.min(1, this.u + 4 / this.len);
        this.curve.getPointAt(ahead, this.lookTarget);
        if (this.u > 0.97) {
          // keep looking along the final direction
          const t = this.curve.getTangentAt(1);
          this.lookTarget.copy(this.pos).addScaledVector(t, 6);
        }
        this.lookTarget.y = this.pos.y - 0.15;
      }
      for (const e of this.events) {
        if (!e.fired && this.u >= e.at) {
          e.fired = true;
          if (e.spawn) e.spawn.forEach((s) => g.spawn(s, null));
          if (e.call) e.call(g);
          if (e.msg) g.message(e.msg, e.color || '#ffd060', e.dur || 2);
          if (e.look) this.lookTarget.copy(v3(e.look));
        }
      }
      if (this.u >= 1) this.next();
    } else if (b.fight) {
      this.updateFight(dt);
    } else if (b.boss) {
      // keep the boss loosely framed
      if (g.boss && !g.boss.dead) {
        const ap = g.boss.aimPoint();
        this.lookTarget.set(b.look[0], b.look[1], b.look[2]).lerp(ap, 0.35);
      }
      if (g.boss && g.boss.finished) {
        g.boss = null;
        this.next();
      }
    } else {
      // wait / turn / message beats
      if (this.bt >= (b.wait ?? 0.01)) this.next();
    }

    this.look.x = damp(this.look.x, this.lookTarget.x, b.lookSpeed || 3.2, dt);
    this.look.y = damp(this.look.y, this.lookTarget.y, b.lookSpeed || 3.2, dt);
    this.look.z = damp(this.look.z, this.lookTarget.z, b.lookSpeed || 3.2, dt);
  }

  updateFight(dt) {
    const g = this.game;
    const f = this.fight;
    for (let i = f.queue.length - 1; i >= 0; i--) {
      const q = f.queue[i];
      q.t -= dt;
      if (q.t <= 0) {
        f.queue.splice(i, 1);
        const ents = g.spawn(q.spec, f);
        for (const e of ents) {
          if (e.kind === 'zombie') {
            f.members.push(e);
            f.waveMembers.push(e);
          }
        }
      }
    }
    const alive = f.members.filter((e) => !e.dead).length;
    const waveAlive = f.waveMembers.filter((e) => !e.dead).length;
    const left = f.wave.left ?? 1;
    if (f.queue.length === 0 && waveAlive <= left && f.wi < f.waves.length - 1) {
      this.nextWave();
      return;
    }
    if (f.queue.length === 0 && alive === 0 && f.wi >= f.waves.length - 1) {
      if (f.clearT < 0) {
        f.clearT = 0.9;
        g.areaClear();
      }
      f.clearT -= dt;
      if (f.clearT <= 0) this.next();
      return;
    }
    // Time Crisis style countdown
    g.fightTimer -= dt;
    if (g.fightTimer <= 0) {
      g.timeUp();
      g.fightTimer = 12;
    }
  }
}
