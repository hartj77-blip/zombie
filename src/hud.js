// 2D overlay drawn on its own canvas: crosshair, health monitor, ammo, timer,
// score popups, threat markers, boss bar and on-screen blood.
import * as THREE from 'three';
import { rand, clamp, pad } from './util.js';
import { ORDER, WEAPONS } from './weapons.js';

const F = '"Oswald", "Arial Narrow", Impact, sans-serif';
const _v = new THREE.Vector3();

export class HUD {
  constructor(game, canvas) {
    this.g = game;
    this.c = canvas;
    this.ctx = canvas.getContext('2d');
    this.splats = [];
    this.popups = [];
    this.msgs = [];
    this.reloadFlash = 0;
    this.hitT = 0;
    this.killT = 0;
    this.ecg = new Array(120).fill(0);
    this.ecgT = 0;
    this.ecgPhase = 0;
    this.card = null;
    this.coverFlash = 0;
    this.lastCover = false;
    this.time = 0;
    this.dmgFlash = 0;
    this.healFlash = 0;
    this.resize();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.c.width = Math.floor(this.w * dpr);
    this.c.height = Math.floor(this.h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.ui = clamp(Math.min(this.w / 1280, this.h / 720), 0.6, 1.5);
  }

  clear() {
    this.splats.length = 0;
    this.popups.length = 0;
    this.msgs.length = 0;
    this.card = null;
  }

  // ------------------------------------------------------------ events

  toScreen(p) {
    _v.copy(p).project(this.g.camera);
    return { x: (_v.x * 0.5 + 0.5) * this.w, y: (-_v.y * 0.5 + 0.5) * this.h, behind: _v.z > 1 };
  }

  popup(text, pos, color = '#fff', size = 1) {
    const s = this.toScreen(pos);
    if (s.behind) return;
    this.popups.push({ text, x: s.x + rand(-10, 10), y: s.y, t: 0, color, size });
  }

  message(text, color = '#ffd060', dur = 2) {
    this.msgs = this.msgs.filter((m) => m.text !== text);
    this.msgs.push({ text, color, t: 0, dur });
    if (this.msgs.length > 3) this.msgs.shift();
  }

  flashReload() {
    this.reloadFlash = 1.2;
  }

  hitMarker(kill = false) {
    this.hitT = 0.15;
    if (kill) this.killT = 0.25;
  }

  damage() {
    this.dmgFlash = 1;
  }

  heal() {
    this.healFlash = 1;
  }

  bossIntro(title, name) {
    this.card = { title, name, t: 0, dur: 3.2 };
  }

  // Pre-rendered blood splatter that slides and fades on the "lens".
  splat(kind = 'blood') {
    const size = rand(160, 300) * this.ui;
    const cv = document.createElement('canvas');
    cv.width = cv.height = Math.ceil(size * 1.4);
    const g = cv.getContext('2d');
    const cx = cv.width / 2;
    const col = kind === 'acid' ? [80, 220, 40] : [110, 0, 0];
    const n = 18;
    for (let i = 0; i < n; i++) {
      const a = rand(0, Math.PI * 2);
      const d = rand(0, size * 0.28);
      const r = rand(size * 0.05, size * 0.2);
      const x = cx + Math.cos(a) * d;
      const y = cx + Math.sin(a) * d;
      const grd = g.createRadialGradient(x, y, 0, x, y, r);
      grd.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},0.95)`);
      grd.addColorStop(0.7, `rgba(${col[0] * 0.7},${col[1] * 0.7},${col[2] * 0.7},0.85)`);
      grd.addColorStop(1, `rgba(${col[0] * 0.5},0,0,0)`);
      g.fillStyle = grd;
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }
    for (let i = 0; i < 30; i++) {
      const a = rand(0, Math.PI * 2);
      const d = rand(size * 0.3, size * 0.6);
      g.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},0.9)`;
      g.beginPath();
      g.arc(cx + Math.cos(a) * d, cx + Math.sin(a) * d, rand(2, 7), 0, Math.PI * 2);
      g.fill();
    }
    // glossy highlight
    g.fillStyle = 'rgba(255,255,255,0.12)';
    g.beginPath();
    g.ellipse(cx - size * 0.08, cx - size * 0.1, size * 0.1, size * 0.04, -0.5, 0, Math.PI * 2);
    g.fill();
    const drips = [];
    for (let i = 0; i < 4; i++) drips.push({ x: rand(-size * 0.25, size * 0.25), w: rand(4, 9), len: 0, speed: rand(20, 60) });
    this.splats.push({ cv, x: rand(0.15, 0.85) * this.w, y: rand(0.15, 0.7) * this.h, t: 0, life: 3.2, size, drips, col });
    if (this.splats.length > 6) this.splats.shift();
  }

  // ------------------------------------------------------------ draw

  draw(dt) {
    const g = this.g;
    const ctx = this.ctx;
    this.time += dt;
    ctx.clearRect(0, 0, this.w, this.h);
    const playing = g.state === 'play' || g.state === 'continue';
    if (!playing) {
      if (g.state === 'intro') this.drawMsgs(dt);
      return;
    }
    this.drawSplats(dt);
    this.drawVignettes(dt);
    this.drawThreats();
    this.drawPopups(dt);
    this.drawCondition(dt);
    this.drawScore();
    this.drawTimerOrBoss();
    this.drawAmmo(dt);
    this.drawCover(dt);
    this.drawMsgs(dt);
    this.drawCard(dt);
    if (g.state === 'play' && !g.paused) this.drawCrosshair(dt);
  }

  drawSplats(dt) {
    const ctx = this.ctx;
    for (let i = this.splats.length - 1; i >= 0; i--) {
      const s = this.splats[i];
      s.t += dt;
      if (s.t > s.life) {
        this.splats.splice(i, 1);
        continue;
      }
      const a = clamp(1 - (s.t - s.life * 0.55) / (s.life * 0.45), 0, 1);
      ctx.globalAlpha = a;
      const slide = s.t * 12;
      ctx.drawImage(s.cv, s.x - s.cv.width / 2, s.y - s.cv.height / 2 + slide);
      ctx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},0.85)`;
      for (const d of s.drips) {
        d.len += d.speed * dt;
        d.speed *= 0.995;
        ctx.fillRect(s.x + d.x - d.w / 2, s.y + slide, d.w, s.size * 0.2 + d.len);
        ctx.beginPath();
        ctx.arc(s.x + d.x, s.y + slide + s.size * 0.2 + d.len, d.w * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  drawVignettes(dt) {
    const g = this.g;
    const ctx = this.ctx;
    const w = this.w;
    const h = this.h;
    this.dmgFlash = Math.max(0, this.dmgFlash - dt * 2.2);
    this.healFlash = Math.max(0, this.healFlash - dt * 1.5);
    let red = this.dmgFlash * 0.55;
    if (g.lives === 1) red = Math.max(red, 0.18 + 0.14 * Math.max(0, Math.sin(this.time * 6)));
    if (red > 0.01) {
      const grd = ctx.createRadialGradient(w / 2, h / 2, h * 0.25, w / 2, h / 2, Math.max(w, h) * 0.75);
      grd.addColorStop(0, 'rgba(160,0,0,0)');
      grd.addColorStop(1, `rgba(160,0,0,${red})`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    }
    if (this.healFlash > 0.01) {
      const grd = ctx.createRadialGradient(w / 2, h / 2, h * 0.25, w / 2, h / 2, Math.max(w, h) * 0.75);
      grd.addColorStop(0, 'rgba(40,255,90,0)');
      grd.addColorStop(1, `rgba(40,255,90,${this.healFlash * 0.35})`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    }
  }

  drawThreats() {
    const g = this.g;
    const ctx = this.ctx;
    const pulse = 0.5 + 0.5 * Math.sin(this.time * 18);
    for (const e of g.entities) {
      if (e.dead) continue;
      let p = null;
      let warn = e.warn || 0;
      if (e.kind === 'zombie' && warn > 0.35 && !e.chase) {
        e.rig.headTarget.getWorldPosition(_v);
        p = _v;
        p.y += 0.35 * e.scale;
      } else if (e.kind === 'boss' && warn > 0.35) {
        p = e.aimPoint();
        p.y += 0.6;
      } else if (e.kind === 'tentacle' && warn > 0) {
        p = e.tip.getWorldPosition(_v);
      } else if (e.kind === 'projectile') {
        const s = this.toScreen(e.root.position);
        if (s.behind) continue;
        const r = (36 - e.t * 22) * this.ui;
        ctx.strokeStyle = `rgba(255,40,20,${0.5 + pulse * 0.5})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, Math.max(10, r), 0, Math.PI * 2);
        ctx.stroke();
        for (let k = 0; k < 4; k++) {
          const a = (k * Math.PI) / 2 + this.time * 3;
          ctx.beginPath();
          ctx.moveTo(s.x + Math.cos(a) * (r + 4), s.y + Math.sin(a) * (r + 4));
          ctx.lineTo(s.x + Math.cos(a) * (r + 12), s.y + Math.sin(a) * (r + 12));
          ctx.stroke();
        }
        continue;
      }
      if (!p) continue;
      const s = this.toScreen(p);
      if (s.behind) continue;
      const size = 16 * this.ui * (1 + warn * 0.4);
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.fillStyle = `rgba(255,${Math.floor(40 + pulse * 60)},20,${0.65 + pulse * 0.35})`;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.9, size * 0.6);
      ctx.lineTo(-size * 0.9, size * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#100';
      ctx.font = `bold ${size}px ${F}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('!', 0, size * 0.12);
      ctx.restore();
    }
  }

  drawPopups(dt) {
    const ctx = this.ctx;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = this.popups.length - 1; i >= 0; i--) {
      const p = this.popups[i];
      p.t += dt;
      if (p.t > 1.1) {
        this.popups.splice(i, 1);
        continue;
      }
      const a = clamp(1.4 - p.t * 1.3, 0, 1);
      const s = (p.t < 0.1 ? 0.6 + p.t * 4 : 1) * p.size * this.ui;
      ctx.globalAlpha = a;
      ctx.font = `bold ${Math.round(22 * s)}px ${F}`;
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      const y = p.y - p.t * 50;
      ctx.strokeText(p.text, p.x, y);
      ctx.fillStyle = p.color;
      ctx.fillText(p.text, p.x, y);
    }
    ctx.globalAlpha = 1;
  }

  panel(x, y, w, h) {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(5,8,10,0.55)';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = 'rgba(200,210,200,0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  }

  // RE-style ECG "condition" monitor + life pips.
  drawCondition(dt) {
    const g = this.g;
    const ctx = this.ctx;
    const u = this.ui;
    const x = 18 * u;
    const y = 18 * u;
    const w = 250 * u;
    const h = 92 * u;
    this.panel(x, y, w, h);
    const ratio = g.lives / g.maxLives;
    let col = '#3aff6a';
    let label = 'FINE';
    if (ratio < 0.35 || g.lives <= 1) {
      col = '#ff3a2a';
      label = 'DANGER';
    } else if (ratio < 0.65) {
      col = '#ffc23a';
      label = 'CAUTION';
    }
    // heartbeat waveform
    const bpm = label === 'FINE' ? 70 : label === 'CAUTION' ? 105 : 150;
    this.ecgT += dt;
    const step = 1 / 60;
    while (this.ecgT > step) {
      this.ecgT -= step;
      this.ecgPhase += (step * bpm) / 60;
      const ph = this.ecgPhase % 1;
      let v = 0;
      if (ph < 0.04) v = ph / 0.04 * 0.15;
      else if (ph < 0.08) v = 0.15 - ((ph - 0.04) / 0.04) * 0.35;
      else if (ph < 0.11) v = -0.2 + ((ph - 0.08) / 0.03) * 1.2;
      else if (ph < 0.15) v = 1 - ((ph - 0.11) / 0.04) * 1.4;
      else if (ph < 0.18) v = -0.4 + ((ph - 0.15) / 0.03) * 0.4;
      else if (ph > 0.3 && ph < 0.42) v = Math.sin(((ph - 0.3) / 0.12) * Math.PI) * 0.22;
      this.ecg.push(v + rand(-0.02, 0.02));
      this.ecg.shift();
    }
    ctx.font = `${Math.round(11 * u)}px ${F}`;
    ctx.fillStyle = 'rgba(220,230,220,0.6)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('CONDITION', x + 10 * u, y + 7 * u);
    ctx.font = `bold ${Math.round(20 * u)}px ${F}`;
    ctx.fillStyle = col;
    ctx.textAlign = 'right';
    ctx.fillText(label, x + w - 10 * u, y + 3 * u);
    const gx = x + 10 * u;
    const gy = y + 48 * u;
    const gw = w - 20 * u;
    ctx.strokeStyle = 'rgba(80,120,90,0.25)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(gx + (gw * i) / 10, gy - 16 * u);
      ctx.lineTo(gx + (gw * i) / 10, gy + 12 * u);
      ctx.stroke();
    }
    ctx.strokeStyle = col;
    ctx.shadowColor = col;
    ctx.shadowBlur = 8;
    ctx.lineWidth = 2 * u;
    ctx.beginPath();
    for (let i = 0; i < this.ecg.length; i++) {
      const px = gx + (gw * i) / (this.ecg.length - 1);
      const py = gy - this.ecg[i] * 18 * u;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
    // lives
    const pw = Math.min(26 * u, (gw - (g.maxLives - 1) * 5 * u) / g.maxLives);
    for (let i = 0; i < g.maxLives; i++) {
      const px = gx + i * (pw + 5 * u);
      const py = y + h - 20 * u;
      ctx.fillStyle = i < g.lives ? col : 'rgba(255,255,255,0.08)';
      ctx.fillRect(px, py, pw, 10 * u);
    }
  }

  drawScore() {
    const g = this.g;
    const ctx = this.ctx;
    const u = this.ui;
    const w = 230 * u;
    const x = this.w - w - 18 * u;
    const y = 18 * u;
    this.panel(x, y, w, 62 * u);
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.font = `${Math.round(11 * u)}px ${F}`;
    ctx.fillStyle = 'rgba(220,230,220,0.6)';
    ctx.fillText(g.credits > 0 ? `SCORE   CREDITS USED ${g.credits}` : 'SCORE', x + w - 10 * u, y + 6 * u);
    ctx.font = `bold ${Math.round(30 * u)}px ${F}`;
    ctx.fillStyle = '#f0e6c8';
    ctx.fillText(pad(g.scoreShown, 8), x + w - 10 * u, y + 20 * u);
    const mult = g.comboMult;
    if (g.combo >= 5) {
      ctx.font = `bold ${Math.round(16 * u)}px ${F}`;
      ctx.fillStyle = mult >= 3 ? '#ff6a3a' : mult >= 2 ? '#ffc23a' : '#9adfff';
      ctx.fillText(`${g.combo} HIT COMBO  x${mult.toFixed(1)}`, x + w, y + 68 * u);
    }
  }

  drawTimerOrBoss() {
    const g = this.g;
    const ctx = this.ctx;
    const u = this.ui;
    const cx = this.w / 2;
    if (g.boss && !g.boss.finished && g.boss.state !== 'intro') {
      const b = g.boss;
      const w = Math.min(560 * u, this.w * 0.5);
      const x = cx - w / 2;
      const y = 22 * u;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.font = `bold ${Math.round(16 * u)}px ${F}`;
      ctx.fillStyle = '#ff8a5a';
      ctx.fillText(`${b.title}  ·  ${b.name}`, cx, y + 16 * u);
      this.panel(x, y + 20 * u, w, 14 * u);
      const r = clamp(b.hp / b.maxHp, 0, 1);
      const grd = ctx.createLinearGradient(x, 0, x + w, 0);
      grd.addColorStop(0, '#7a0a0a');
      grd.addColorStop(1, '#ff3a1a');
      ctx.fillStyle = grd;
      ctx.fillRect(x + 2, y + 22 * u, (w - 4) * r, 10 * u);
      return;
    }
    const f = g.director.fight;
    if (!f || f.clearT >= 0) return;
    const t = Math.max(0, g.fightTimer);
    const low = t < 5;
    const y = 16 * u;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.font = `${Math.round(12 * u)}px ${F}`;
    ctx.fillStyle = 'rgba(220,230,220,0.7)';
    ctx.fillText('TIME', cx, y);
    const s = Math.floor(t);
    const cs = Math.floor((t - s) * 100);
    ctx.font = `bold ${Math.round(46 * u)}px ${F}`;
    ctx.fillStyle = low ? (Math.floor(this.time * 6) % 2 ? '#ff3a2a' : '#ffd0c0') : '#ffe08a';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 6;
    ctx.fillText(`${pad(s, 2)}:${pad(cs, 2)}`, cx, y + 12 * u);
    ctx.shadowBlur = 0;
  }

  drawAmmo(dt) {
    const g = this.g;
    const ctx = this.ctx;
    const u = this.ui;
    const ars = g.arsenal;
    const s = ars.slot;
    const def = s.def;
    const w = 250 * u;
    const h = 78 * u;
    const x = this.w - w - 18 * u;
    const y = this.h - h - 18 * u;
    this.panel(x, y, w, h);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = `bold ${Math.round(17 * u)}px ${F}`;
    ctx.fillStyle = '#f0e6c8';
    ctx.fillText(def.name, x + 10 * u, y + 6 * u);
    ctx.textAlign = 'right';
    ctx.font = `${Math.round(14 * u)}px ${F}`;
    ctx.fillStyle = 'rgba(220,230,220,0.7)';
    ctx.fillText(s.reserve === Infinity ? '∞' : `${s.reserve}`, x + w - 10 * u, y + 8 * u);
    // rounds in the magazine
    const n = def.mag;
    const big = n <= 8;
    const bw = big ? 12 * u : (w - 20 * u) / n;
    const bh = big ? 30 * u : 22 * u;
    for (let i = 0; i < n; i++) {
      const bx = x + 10 * u + i * (big ? 18 * u : bw);
      const by = y + h - bh - 10 * u;
      const full = i < s.ammo;
      if (big) {
        ctx.fillStyle = full ? (def.id === 'shotgun' ? '#c8321e' : '#d9b44a') : 'rgba(255,255,255,0.1)';
        ctx.fillRect(bx, by + 6 * u, bw, bh - 6 * u);
        ctx.beginPath();
        ctx.arc(bx + bw / 2, by + 6 * u, bw / 2, Math.PI, 0);
        ctx.fill();
        if (full) {
          ctx.fillStyle = '#8a6a20';
          ctx.fillRect(bx, by + bh - 6 * u, bw, 6 * u);
        }
      } else {
        ctx.fillStyle = full ? '#d9b44a' : 'rgba(255,255,255,0.1)';
        ctx.fillRect(bx, by, Math.max(1, bw - 2), bh);
      }
    }
    // owned weapons
    ctx.textAlign = 'left';
    ctx.font = `${Math.round(11 * u)}px ${F}`;
    let ox = x;
    ORDER.forEach((id, i) => {
      if (!ars.slots[id]) return;
      const label = `${i + 1} ${WEAPONS[id].name}`;
      ctx.fillStyle = id === ars.cur ? '#ffe08a' : 'rgba(220,230,220,0.45)';
      ctx.fillText(label, ox, y - 16 * u);
      ox += ctx.measureText(label).width + 12 * u;
    });
    // reload prompt
    this.reloadFlash = Math.max(0, this.reloadFlash - dt);
    const cx = this.w / 2;
    const cy = this.h * 0.78;
    if (ars.reloading) {
      const p = 1 - ars.reloadT / def.reload;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(cx - 80 * u, cy, 160 * u, 8 * u);
      ctx.fillStyle = '#ffe08a';
      ctx.fillRect(cx - 80 * u, cy, 160 * u * p, 8 * u);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.font = `bold ${Math.round(14 * u)}px ${F}`;
      ctx.fillText('RELOADING', cx, cy - 4 * u);
    } else if (s.ammo === 0 && g.state === 'play') {
      if (Math.floor(this.time * 5) % 2 === 0 || this.reloadFlash > 0) {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `bold ${Math.round(46 * u)}px ${F}`;
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'rgba(0,0,0,0.85)';
        ctx.strokeText('RELOAD!', cx, cy);
        ctx.fillStyle = '#ff3a2a';
        ctx.fillText('RELOAD!', cx, cy);
        ctx.font = `${Math.round(13 * u)}px ${F}`;
        ctx.fillStyle = 'rgba(255,230,220,0.8)';
        ctx.fillText(g.input.touch ? 'TAP RELOAD OR TAKE COVER' : 'RIGHT-CLICK / R   ·   OR HOLD SPACE FOR COVER', cx, cy + 34 * u);
      }
    }
  }

  drawCover(dt) {
    const g = this.g;
    const ctx = this.ctx;
    const u = this.ui;
    const c = g.coverAmt;
    if (g.cover !== this.lastCover) {
      this.lastCover = g.cover;
      this.coverFlash = 0.7;
      this.coverText = g.cover ? 'WAIT' : 'ACTION!';
    }
    this.coverFlash = Math.max(0, this.coverFlash - dt);
    if (c > 0.05) {
      ctx.fillStyle = `rgba(0,0,0,${c * 0.25})`;
      ctx.fillRect(0, 0, this.w, this.h);
    }
    if (this.coverFlash > 0 && g.director.fight) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `bold italic ${Math.round(40 * u)}px ${F}`;
      ctx.globalAlpha = Math.min(1, this.coverFlash * 2);
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.strokeText(this.coverText, this.w / 2, this.h * 0.32);
      ctx.fillStyle = this.coverText === 'WAIT' ? '#7ac8ff' : '#ffd23a';
      ctx.fillText(this.coverText, this.w / 2, this.h * 0.32);
      ctx.globalAlpha = 1;
    }
    // cover hint panel
    const x = 18 * u;
    const y = this.h - 48 * u;
    this.panel(x, y, 170 * u, 30 * u);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${Math.round(13 * u)}px ${F}`;
    ctx.fillStyle = g.cover ? '#7ac8ff' : 'rgba(220,230,220,0.6)';
    ctx.fillText(g.cover ? '■ IN COVER' : g.input.touch ? 'HOLD ⛨ TO TAKE COVER' : 'HOLD SPACE: COVER', x + 10 * u, y + 15 * u);
  }

  drawMsgs(dt) {
    const ctx = this.ctx;
    const u = this.ui;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let y = this.h * 0.4;
    for (let i = this.msgs.length - 1; i >= 0; i--) {
      const m = this.msgs[i];
      m.t += dt;
      if (m.t > m.dur) {
        this.msgs.splice(i, 1);
        continue;
      }
    }
    for (const m of this.msgs) {
      const a = clamp(Math.min(m.t * 6, (m.dur - m.t) * 3), 0, 1);
      const s = m.t < 0.12 ? 1.3 - m.t * 2.5 : 1;
      ctx.globalAlpha = a;
      ctx.font = `bold ${Math.round(34 * u * s)}px ${F}`;
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.strokeText(m.text, this.w / 2, y);
      ctx.fillStyle = m.color;
      ctx.fillText(m.text, this.w / 2, y);
      y += 44 * u;
    }
    ctx.globalAlpha = 1;
  }

  drawCard(dt) {
    if (!this.card) return;
    const ctx = this.ctx;
    const c = this.card;
    const u = this.ui;
    c.t += dt;
    if (c.t > c.dur) {
      this.card = null;
      return;
    }
    const a = clamp(Math.min(c.t * 4, (c.dur - c.t) * 3), 0, 1);
    const h = 150 * u;
    const y = this.h * 0.62 - h / 2;
    ctx.globalAlpha = a;
    const grd = ctx.createLinearGradient(0, y, 0, y + h);
    grd.addColorStop(0, 'rgba(60,0,0,0)');
    grd.addColorStop(0.2, 'rgba(40,0,0,0.85)');
    grd.addColorStop(0.8, 'rgba(40,0,0,0.85)');
    grd.addColorStop(1, 'rgba(60,0,0,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, y, this.w, h);
    const slide = (1 - clamp(c.t * 3, 0, 1)) * 200;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${Math.round(18 * u)}px ${F}`;
    ctx.fillStyle = '#ff9a7a';
    ctx.fillText(c.title, this.w / 2 - slide, y + 40 * u);
    ctx.font = `${Math.round(64 * u)}px "Creepster", ${F}`;
    ctx.fillStyle = '#f2e6d0';
    ctx.shadowColor = '#ff2a0a';
    ctx.shadowBlur = 20;
    ctx.fillText(c.name, this.w / 2 + slide, y + 92 * u);
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }

  drawCrosshair(dt) {
    const g = this.g;
    const ctx = this.ctx;
    const u = this.ui;
    const x = g.input.px;
    const y = g.input.py;
    this.hitT = Math.max(0, this.hitT - dt);
    this.killT = Math.max(0, this.killT - dt);
    const over = g.aimTarget;
    const hostile = over && (over.kind === 'zombie' || over.kind === 'boss' || over.kind === 'projectile' || over.kind === 'tentacle');
    const friendly = over && over.kind === 'survivor';
    const item = over && (over.kind === 'pickup' || over.kind === 'barrel' || over.kind === 'crate');
    let col = hostile ? '#ff3a2a' : friendly ? '#5aff7a' : item ? '#ffd23a' : '#f2f2e6';
    if (g.cover) col = 'rgba(120,180,255,0.6)';
    const r = (14 + g.recoil * 30) * u;
    ctx.strokeStyle = 'rgba(0,0,0,0.7)';
    ctx.lineWidth = 4;
    this.reticle(x, y, r);
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
    this.reticle(x, y, r);
    ctx.fillStyle = col;
    ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
    if (this.hitT > 0) {
      ctx.strokeStyle = this.killT > 0 ? '#ff3a2a' : '#ffffff';
      ctx.lineWidth = 2.5;
      const s = 8 * u;
      const o = 5 * u;
      ctx.beginPath();
      for (const [dx, dy] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]) {
        ctx.moveTo(x + dx * o, y + dy * o);
        ctx.lineTo(x + dx * (o + s), y + dy * (o + s));
      }
      ctx.stroke();
    }
    if (friendly) {
      ctx.font = `bold ${Math.round(12 * u)}px ${F}`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#5aff7a';
      ctx.fillText("DON'T SHOOT", x, y + r + 16 * u);
    }
  }

  reticle(x, y, r) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      ctx.moveTo(x + dx * (r - 5), y + dy * (r - 5));
      ctx.lineTo(x + dx * (r + 7), y + dy * (r + 7));
    }
    ctx.stroke();
  }
}
