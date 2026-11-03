// Every sound in the game is synthesized with the Web Audio API: no audio files.
import { rand, pick, clamp } from './util.js';

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.track = null;
    this.groanBudget = 0;
  }

  // Must be called from a user gesture (browsers block audio until then).
  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.85;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 10;
    comp.ratio.value = 5;
    comp.attack.value = 0.003;
    comp.release.value = 0.2;
    this.master.connect(comp).connect(ctx.destination);

    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(this.master);
    this.mus = ctx.createGain();
    this.mus.gain.value = 0.42;
    this.mus.connect(this.master);

    // Generated impulse response for a dark, roomy reverb.
    this.reverb = ctx.createConvolver();
    const len = Math.floor(ctx.sampleRate * 2.4);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    }
    this.reverb.buffer = ir;
    this.revGain = ctx.createGain();
    this.revGain.gain.value = 0.32;
    this.reverb.connect(this.revGain).connect(this.master);

    const nlen = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, nlen, ctx.sampleRate);
    const nd = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < nlen; i++) nd[i] = Math.random() * 2 - 1;

    this.distCurve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const x = (i / 1023) * 2 - 1;
      this.distCurve[i] = Math.tanh(x * 4);
    }
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.85, this.ctx.currentTime, 0.05);
  }

  get now() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  // ---- low level building blocks -------------------------------------------------

  _out(pan = 0, send = 0.2, dest = null) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    let node = g;
    if (ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = clamp(pan, -1, 1);
      g.connect(p);
      node = p;
    }
    node.connect(dest || this.sfx);
    if (send > 0) {
      const s = ctx.createGain();
      s.gain.value = send;
      g.connect(s).connect(this.reverb);
    }
    return g;
  }

  _noise(t, dur, o = {}) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = o.rate || 1;
    const f = ctx.createBiquadFilter();
    f.type = o.type || 'lowpass';
    f.frequency.setValueAtTime(o.freq || 2000, t);
    if (o.freqEnd) f.frequency.exponentialRampToValueAtTime(o.freqEnd, t + dur);
    f.Q.value = o.q || 0.7;
    const g = ctx.createGain();
    const peak = o.gain ?? 0.5;
    const a = o.attack || 0.002;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(o.out || this._out(o.pan, o.send ?? 0.15, o.dest));
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.05);
  }

  _tone(t, dur, o = {}) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(o.freq || 440, t);
    if (o.freqEnd) osc.frequency.exponentialRampToValueAtTime(o.freqEnd, t + (o.glide || dur));
    if (o.detune) osc.detune.value = o.detune;
    const g = ctx.createGain();
    const peak = o.gain ?? 0.3;
    const a = o.attack || 0.004;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    if (o.hold) g.gain.setValueAtTime(peak, t + a + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = osc;
    if (o.filter) {
      const f = ctx.createBiquadFilter();
      f.type = o.filter;
      f.frequency.value = o.ffreq || 1000;
      f.Q.value = o.fq || 1;
      node.connect(f);
      node = f;
    }
    if (o.dist) {
      const ws = ctx.createWaveShaper();
      ws.curve = this.distCurve;
      node.connect(ws);
      node = ws;
    }
    node.connect(g).connect(o.out || this._out(o.pan, o.send ?? 0.15, o.dest));
    osc.start(t);
    osc.stop(t + dur + 0.05);
    return osc;
  }

  // ---- sound effects -------------------------------------------------------------

  play(name, o = {}) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + 0.005;
    const pan = o.pan || 0;
    const v = o.vol ?? 1;
    switch (name) {
      case 'pistol':
        this._noise(t, 0.16, { type: 'bandpass', freq: 1800, freqEnd: 500, q: 0.6, gain: 0.9 * v, send: 0.35 });
        this._noise(t, 0.04, { type: 'highpass', freq: 4000, gain: 0.5 * v, send: 0 });
        this._tone(t, 0.14, { freq: 160, freqEnd: 45, gain: 0.9 * v, send: 0.1 });
        break;
      case 'shotgun':
        this._noise(t, 0.45, { type: 'lowpass', freq: 3200, freqEnd: 300, gain: 1.0 * v, send: 0.45 });
        this._noise(t, 0.06, { type: 'highpass', freq: 3000, gain: 0.6 * v, send: 0 });
        this._tone(t, 0.3, { freq: 110, freqEnd: 30, gain: 1.0 * v, send: 0.1 });
        this._noise(t + 0.38, 0.05, { type: 'bandpass', freq: 1400, q: 3, gain: 0.35, send: 0.05 });
        this._noise(t + 0.5, 0.06, { type: 'bandpass', freq: 1000, q: 3, gain: 0.4, send: 0.05 });
        break;
      case 'smg':
        this._noise(t, 0.09, { type: 'bandpass', freq: 2200, freqEnd: 700, q: 0.7, gain: 0.6 * v, send: 0.2 });
        this._tone(t, 0.07, { freq: 190, freqEnd: 60, gain: 0.55 * v, send: 0 });
        break;
      case 'magnum':
        this._noise(t, 0.5, { type: 'lowpass', freq: 2500, freqEnd: 200, gain: 1.0 * v, send: 0.6 });
        this._noise(t, 0.05, { type: 'highpass', freq: 3500, gain: 0.7 * v, send: 0 });
        this._tone(t, 0.35, { freq: 90, freqEnd: 28, gain: 1.0 * v, send: 0.2 });
        break;
      case 'empty':
        this._tone(t, 0.03, { type: 'square', freq: 2400, gain: 0.12, send: 0 });
        this._noise(t, 0.03, { type: 'highpass', freq: 3000, gain: 0.2, send: 0 });
        break;
      case 'reload':
        this._noise(t, 0.04, { type: 'bandpass', freq: 900, q: 4, gain: 0.5, send: 0.05 });
        this._noise(t + 0.08, 0.12, { type: 'bandpass', freq: 1500, freqEnd: 3000, q: 2, gain: 0.25, send: 0.05 });
        this._noise(t + 0.24, 0.04, { type: 'bandpass', freq: 1200, q: 5, gain: 0.6, send: 0.05 });
        this._tone(t + 0.24, 0.05, { type: 'square', freq: 1800, gain: 0.05, send: 0 });
        break;
      case 'shellIn':
        this._noise(t, 0.05, { type: 'bandpass', freq: 700, q: 4, gain: 0.5, send: 0.05 });
        break;
      case 'hit':
        this._noise(t, 0.14, { type: 'lowpass', freq: 1100, freqEnd: 200, gain: 0.7 * v, pan, send: 0.1 });
        this._tone(t, 0.08, { freq: 120, freqEnd: 50, gain: 0.4 * v, pan, send: 0 });
        break;
      case 'headshot':
        this._noise(t, 0.3, { type: 'lowpass', freq: 1600, freqEnd: 150, gain: 0.9, pan, send: 0.2 });
        this._noise(t, 0.12, { type: 'bandpass', freq: 400, q: 2, gain: 0.8, pan, send: 0 });
        this._tone(t + 0.02, 0.18, { type: 'triangle', freq: 1320, freqEnd: 1760, gain: 0.08, send: 0.2 });
        break;
      case 'sever':
        this._noise(t, 0.2, { type: 'bandpass', freq: 600, freqEnd: 250, q: 1.5, gain: 0.8, pan, send: 0.1 });
        this._noise(t + 0.03, 0.06, { type: 'highpass', freq: 2500, gain: 0.4, pan, send: 0 });
        break;
      case 'gib':
        this._noise(t, 0.5, { type: 'lowpass', freq: 900, freqEnd: 100, gain: 1.0, pan, send: 0.3 });
        this._noise(t + 0.05, 0.25, { type: 'bandpass', freq: 500, q: 1, gain: 0.6, pan, send: 0.1 });
        break;
      case 'groan':
        this.groan(pan, v, o.pitch || 1);
        break;
      case 'roar':
        this.roar(v, o.pitch || 1);
        break;
      case 'shriek': {
        const dur = 0.7;
        this._tone(t, dur, { type: 'sawtooth', freq: 900 * (o.pitch || 1), freqEnd: 1400, gain: 0.18, filter: 'bandpass', ffreq: 1800, fq: 3, send: 0.4, pan });
        this._tone(t, dur, { type: 'square', freq: 1310 * (o.pitch || 1), freqEnd: 600, gain: 0.08, filter: 'bandpass', ffreq: 2400, fq: 4, send: 0.4, pan });
        this._noise(t, dur, { type: 'bandpass', freq: 2500, q: 2, gain: 0.25, send: 0.3, pan });
        break;
      }
      case 'scream': {
        const osc = this._tone(t, 0.9, { type: 'triangle', freq: 750, freqEnd: 1250, glide: 0.25, gain: 0.22, attack: 0.04, hold: 0.4, filter: 'bandpass', ffreq: 1400, fq: 2, send: 0.4, pan });
        osc.frequency.exponentialRampToValueAtTime(650, t + 0.9);
        this._noise(t, 0.9, { type: 'bandpass', freq: 2200, q: 3, gain: 0.08, send: 0.3, pan });
        break;
      }
      case 'thanks':
        this._tone(t, 0.12, { type: 'triangle', freq: 523, gain: 0.2, send: 0.2 });
        this._tone(t + 0.1, 0.12, { type: 'triangle', freq: 659, gain: 0.2, send: 0.2 });
        this._tone(t + 0.2, 0.3, { type: 'triangle', freq: 784, gain: 0.2, send: 0.3 });
        break;
      case 'hurt':
        this._tone(t, 0.25, { freq: 90, freqEnd: 40, gain: 1.0, send: 0 });
        this._noise(t, 0.3, { type: 'lowpass', freq: 1500, freqEnd: 300, gain: 0.8, send: 0.1 });
        this._tone(t + 0.02, 0.35, { type: 'sawtooth', freq: 150, freqEnd: 95, gain: 0.35, filter: 'bandpass', ffreq: 700, fq: 3, send: 0.2 });
        break;
      case 'swipe':
        this._noise(t, 0.25, { type: 'bandpass', freq: 500, freqEnd: 2500, q: 2, gain: 0.5, pan, send: 0.1 });
        break;
      case 'block':
        this._noise(t, 0.12, { type: 'bandpass', freq: 300, q: 1, gain: 0.7, pan, send: 0.1 });
        this._tone(t, 0.1, { freq: 70, freqEnd: 40, gain: 0.6, send: 0 });
        break;
      case 'explode':
        this._noise(t, 1.6, { type: 'lowpass', freq: 1400, freqEnd: 60, gain: 1.0, pan, send: 0.6 });
        this._tone(t, 0.9, { freq: 70, freqEnd: 22, gain: 1.0, send: 0.2 });
        this._noise(t + 0.1, 0.9, { type: 'bandpass', freq: 400, q: 0.8, gain: 0.5, pan, send: 0.4 });
        break;
      case 'pickup':
        this._tone(t, 0.12, { type: 'square', freq: 880, gain: 0.12, send: 0.2, filter: 'lowpass', ffreq: 3000 });
        this._tone(t + 0.08, 0.25, { type: 'square', freq: 1320, gain: 0.12, send: 0.3, filter: 'lowpass', ffreq: 3000 });
        break;
      case 'heal':
        [523, 659, 784, 1047].forEach((f, i) => this._tone(t + i * 0.07, 0.3, { type: 'triangle', freq: f, gain: 0.16, send: 0.4 }));
        break;
      case 'clang':
        [820, 1270, 1930, 2640].forEach((f, i) => this._tone(t, 0.5 - i * 0.08, { freq: f * rand(0.97, 1.03), gain: 0.16, send: 0.3, pan }));
        this._noise(t, 0.05, { type: 'highpass', freq: 3000, gain: 0.4, send: 0, pan });
        break;
      case 'ricochet':
        this._tone(t, 0.25, { freq: rand(2500, 3800), freqEnd: rand(900, 1500), gain: 0.06, send: 0.3, pan });
        this._noise(t, 0.04, { type: 'highpass', freq: 3500, gain: 0.25, send: 0, pan });
        break;
      case 'impact':
        this._noise(t, 0.06, { type: 'bandpass', freq: rand(900, 1600), q: 1.5, gain: 0.3 * v, send: 0.05, pan });
        break;
      case 'whoosh':
        this._noise(t, 0.6, { type: 'bandpass', freq: 300, freqEnd: 1800, q: 3, gain: 0.35, pan, send: 0.1, attack: 0.3 });
        break;
      case 'break':
        for (let i = 0; i < 4; i++) this._noise(t + i * 0.035, 0.12, { type: 'bandpass', freq: rand(500, 1400), q: 2, gain: 0.5, pan, send: 0.1 });
        break;
      case 'glass':
        for (let i = 0; i < 6; i++) this._tone(t + i * 0.02, 0.3, { freq: rand(2500, 6000), gain: 0.05, send: 0.3, pan });
        this._noise(t, 0.3, { type: 'highpass', freq: 4000, gain: 0.35, send: 0.2, pan });
        break;
      case 'heartbeat':
        this._tone(t, 0.12, { freq: 62, freqEnd: 45, gain: 0.7, send: 0 });
        this._tone(t + 0.18, 0.12, { freq: 58, freqEnd: 42, gain: 0.5, send: 0 });
        break;
      case 'blip':
        this._tone(t, 0.06, { type: 'square', freq: o.freq || 660, gain: 0.08, send: 0.05, filter: 'lowpass', ffreq: 2500 });
        break;
      case 'tick':
        this._tone(t, 0.05, { type: 'square', freq: 1046, gain: 0.07, send: 0, filter: 'lowpass', ffreq: 3000 });
        break;
      case 'timeup':
        this._tone(t, 0.6, { type: 'sawtooth', freq: 300, freqEnd: 120, gain: 0.2, filter: 'lowpass', ffreq: 1500, send: 0.2 });
        break;
      case 'stinger':
        // Horror-movie sting for boss intros and jump scares.
        [0, 1, 6, 11].forEach((s) => this._tone(t, 2.2, { type: 'sawtooth', freq: mtof(45 + s), gain: 0.07, filter: 'lowpass', ffreq: 1800, send: 0.6, attack: 0.01 }));
        this._noise(t, 1.2, { type: 'lowpass', freq: 600, freqEnd: 80, gain: 0.8, send: 0.5 });
        this._tone(t, 1.0, { freq: 55, freqEnd: 30, gain: 0.9, send: 0.3 });
        break;
      case 'door':
        this._noise(t, 0.35, { type: 'lowpass', freq: 500, freqEnd: 120, gain: 0.9, pan, send: 0.3 });
        this._noise(t + 0.02, 0.15, { type: 'bandpass', freq: 1200, q: 2, gain: 0.4, pan, send: 0.2 });
        break;
      case 'splash':
        this._noise(t, 0.4, { type: 'bandpass', freq: 900, freqEnd: 300, q: 1, gain: 0.5, pan, send: 0.2 });
        break;
    }
  }

  groan(pan = 0, vol = 1, pitch = 1) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + 0.01;
    const dur = rand(0.9, 1.7);
    const base = rand(70, 115) * pitch;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(base * rand(1.0, 1.25), t);
    osc.frequency.exponentialRampToValueAtTime(base * rand(0.65, 0.85), t + dur);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = rand(4, 9);
    const lfoG = ctx.createGain();
    lfoG.gain.value = base * 0.08;
    lfo.connect(lfoG).connect(osc.frequency);

    const f1 = ctx.createBiquadFilter();
    f1.type = 'bandpass';
    f1.frequency.value = rand(450, 700);
    f1.Q.value = 4;
    const f2 = ctx.createBiquadFilter();
    f2.type = 'bandpass';
    f2.frequency.value = rand(1000, 1400);
    f2.Q.value = 6;
    const g = ctx.createGain();
    const peak = 0.55 * vol;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + 0.18);
    g.gain.setValueAtTime(peak * 0.8, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const out = this._out(pan, 0.3);
    osc.connect(f1).connect(g);
    osc.connect(f2).connect(g);
    g.connect(out);
    osc.start(t);
    lfo.start(t);
    osc.stop(t + dur + 0.1);
    lfo.stop(t + dur + 0.1);
    this._noise(t, dur * 0.8, { type: 'bandpass', freq: 600, q: 2, gain: 0.1 * vol, pan, send: 0.2, attack: 0.15 });
  }

  roar(vol = 1, pitch = 1) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + 0.01;
    const dur = 1.6;
    this._tone(t, dur, { type: 'sawtooth', freq: 70 * pitch, freqEnd: 42 * pitch, gain: 0.5 * vol, dist: true, filter: 'lowpass', ffreq: 900, send: 0.5, attack: 0.1, hold: 0.6 });
    this._tone(t, dur, { type: 'square', freq: 105 * pitch, freqEnd: 60 * pitch, gain: 0.18 * vol, filter: 'bandpass', ffreq: 600, fq: 3, send: 0.5, attack: 0.1, hold: 0.6 });
    this._noise(t, dur, { type: 'bandpass', freq: 700, freqEnd: 250, q: 1, gain: 0.5 * vol, send: 0.5, attack: 0.1 });
  }

  // ---- music: a tiny step sequencer --------------------------------------------

  music(name) {
    if (!this.ctx) {
      this.pendingTrack = name;
      return;
    }
    if (this.track && this.track.name === name) return;
    this.track = name ? TRACKS[name] : null;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    if (this.track) this.track.name = name;
  }

  update() {
    if (!this.ctx) return;
    if (this.pendingTrack !== undefined) {
      const p = this.pendingTrack;
      this.pendingTrack = undefined;
      this.music(p);
    }
    const tr = this.track;
    if (!tr) return;
    const stepDur = 60 / tr.bpm / 4;
    // Avoid scheduling a burst of notes after the tab was in the background.
    if (this.nextTime < this.ctx.currentTime - 0.2) this.nextTime = this.ctx.currentTime + 0.05;
    while (this.nextTime < this.ctx.currentTime + 0.15) {
      if (!this.muted) tr.play(this, this.step, this.nextTime, stepDur);
      this.nextTime += stepDur;
      this.step++;
      if (tr.once && this.step >= tr.length) {
        this.track = null;
        break;
      }
    }
  }

  // Instruments used by the tracks.
  kick(t, g = 0.9) {
    this._tone(t, 0.3, { freq: 140, freqEnd: 38, glide: 0.12, gain: g, send: 0, dest: this.mus });
  }
  snare(t, g = 0.5) {
    this._noise(t, 0.18, { type: 'highpass', freq: 1200, gain: g, send: 0.3, dest: this.mus });
    this._tone(t, 0.1, { freq: 220, freqEnd: 140, gain: g * 0.6, send: 0, dest: this.mus });
  }
  hat(t, g = 0.12, open = false) {
    this._noise(t, open ? 0.2 : 0.04, { type: 'highpass', freq: 7000, gain: g, send: 0, dest: this.mus });
  }
  bass(t, note, dur, g = 0.35, dist = false) {
    this._tone(t, dur, { type: 'sawtooth', freq: mtof(note), gain: g, filter: 'lowpass', ffreq: dist ? 900 : 420, fq: 4, dist, send: 0.05, dest: this.mus, attack: 0.005 });
  }
  pad(t, notes, dur, g = 0.06) {
    notes.forEach((n) => {
      this._tone(t, dur, { type: 'sawtooth', freq: mtof(n), detune: rand(-12, 12), gain: g, filter: 'lowpass', ffreq: 700, attack: dur * 0.3, hold: dur * 0.3, send: 0.5, dest: this.mus });
    });
  }
  bell(t, note, g = 0.1) {
    this._tone(t, 1.6, { freq: mtof(note), gain: g, send: 0.7, dest: this.mus });
    this._tone(t, 0.9, { freq: mtof(note) * 2.76, gain: g * 0.3, send: 0.7, dest: this.mus });
  }
  stab(t, notes, g = 0.08) {
    notes.forEach((n) => this._tone(t, 0.35, { type: 'square', freq: mtof(n), gain: g, filter: 'lowpass', ffreq: 1600, send: 0.4, dest: this.mus }));
  }
}

// D minor flavoured horror themes.
const TRACKS = {
  title: {
    bpm: 70,
    play(a, s, t, sd) {
      const bar = Math.floor(s / 16) % 4;
      const roots = [50, 46, 43, 45];
      if (s % 16 === 0) a.pad(t, [roots[bar] - 12, roots[bar] - 5, roots[bar] + 3], sd * 16, 0.05);
      const mel = [62, 65, 69, 70, 69, 65, 62, 61];
      if (s % 4 === 0 && Math.random() < 0.55) a.bell(t, mel[(s / 4) % mel.length] + 12, 0.07);
      if (s % 16 === 8 && bar === 3) a.bell(t, 73, 0.06);
    },
  },
  stage: {
    bpm: 96,
    play(a, s, t, sd) {
      const bar = Math.floor(s / 16) % 8;
      const prog = [38, 38, 34, 34, 31, 31, 33, 37];
      const root = prog[bar];
      const st = s % 16;
      if ([0, 3, 6, 8, 11, 14].includes(st)) a.bass(t, root, sd * 1.8, 0.28);
      if (st === 0 || st === 8) a.kick(t, 0.7);
      if (st === 12 && bar % 2 === 1) a.snare(t, 0.25);
      if (st % 2 === 0) a.hat(t, st % 4 === 2 ? 0.08 : 0.04);
      if (st === 0 && bar % 2 === 0) a.pad(t, [root + 12, root + 19, root + 24], sd * 32, 0.035);
      if (Math.random() < 0.07) a.bell(t, pick([62, 65, 69, 70, 74, 77]) + 12, 0.05);
    },
  },
  boss: {
    bpm: 144,
    play(a, s, t, sd) {
      const bar = Math.floor(s / 16) % 4;
      const roots = [38, 38, 41, 37];
      const root = roots[bar];
      const st = s % 16;
      if (st % 4 === 0) a.kick(t, 0.85);
      if (st === 4 || st === 12) a.snare(t, 0.45);
      a.hat(t, st % 2 ? 0.05 : 0.09, st === 14);
      const bl = [0, 0, 12, 0, 0, 13, 0, 12, 0, 0, 12, 0, 15, 13, 12, 7];
      a.bass(t, root + bl[st], sd * 0.9, 0.22, true);
      if (st === 0) a.stab(t, [root + 24, root + 27, root + 31], 0.05);
      if (st === 10 && bar === 3) a.stab(t, [root + 25, root + 28, root + 32], 0.05);
    },
  },
  clear: {
    bpm: 120,
    once: true,
    length: 24,
    play(a, s, t) {
      const mel = { 0: 62, 2: 65, 4: 69, 6: 74, 8: 72, 10: 74, 12: 77 };
      if (mel[s] !== undefined) a.stab(t, [mel[s], mel[s] - 12], 0.07);
      if (s === 12) a.pad(t, [50, 57, 62, 65], 2.5, 0.05);
    },
  },
  gameover: {
    bpm: 60,
    once: true,
    length: 16,
    play(a, s, t) {
      const mel = { 0: 62, 2: 61, 4: 58, 6: 57, 8: 50 };
      if (mel[s] !== undefined) a.bell(t, mel[s], 0.12);
      if (s === 0) a.pad(t, [38, 45, 50], 4, 0.05);
    },
  },
};
