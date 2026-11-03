// Game orchestration: renderer + post-processing, state machine, scoring, player.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { AudioEngine } from './audio.js';
import { Effects, LightPool } from './effects.js';
import { Builder } from './builder.js';
import { Zombie, Survivor, Barrel, Crate, Pickup, Projectile, ZTYPES, PICKUPS } from './entities.js';
import { FLASH_MAT, RED_MAT } from './rig.js';
import { BOSSES } from './bosses.js';
import { Arsenal, probe, ORDER } from './weapons.js';
import { Director } from './director.js';
import { HUD } from './hud.js';
import { Input } from './input.js';
import { STAGES } from './stages.js';
import { rand, clamp, damp, pad } from './util.js';

const DIFFS = {
  easy: { name: 'EASY', lives: 7, hp: 0.8, speed: 0.85, windup: 1.35, timeMul: 1.4, bossHp: 0.75, bossDmg: 1 },
  normal: { name: 'NORMAL', lives: 5, hp: 1, speed: 1, windup: 1, timeMul: 1, bossHp: 1, bossDmg: 1 },
  hard: { name: 'HARD', lives: 4, hp: 1.25, speed: 1.15, windup: 0.8, timeMul: 0.85, bossHp: 1.3, bossDmg: 1 },
};

// Film-look colour grade: chromatic aberration, split toning, vignette, grain.
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uDamage: { value: 0 },
    uCover: { value: 0 },
    uGrain: { value: 0.045 },
    uSat: { value: 0.82 },
    uAberr: { value: 0.006 },
    uTint: { value: new THREE.Vector3(1, 1, 1) },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uDamage, uCover, uGrain, uSat, uAberr; uniform vec3 uTint;
    varying vec2 vUv;
    float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      vec2 off = c * (uAberr + uDamage * 0.02) * (0.5 + r2 * 4.0);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      vec3 shadowTint = vec3(0.86, 0.97, 1.12);
      vec3 highTint = vec3(1.1, 1.0, 0.86);
      col *= mix(shadowTint, highTint, smoothstep(0.0, 0.5, l)) * uTint;
      col = mix(col, vec3(l * 1.4, l * 0.2, l * 0.15), uDamage * 0.6);
      float vig = smoothstep(0.75, 0.12, r2 * (1.0 + uCover * 1.2));
      col *= mix(0.18, 1.0, vig);
      float n = rnd(vUv * vec2(1733.0, 977.0) + fract(uTime * 7.31)) - 0.5;
      col += n * uGrain * (0.35 + (1.0 - smoothstep(0.0, 0.4, l)) * 0.65);
      col = max(col, 0.0);
      gl_FragColor = vec4(col, 1.0);
    }`,
};

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

function load(key, def) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? def : JSON.parse(v);
  } catch {
    return def;
  }
}
function save(key, v) {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {}
}

export class Game {
  constructor() {
    const P = new URLSearchParams(location.search);
    this.debug = {
      bot: P.has('bot'),
      god: P.has('god'),
      stage: P.has('stage') ? parseInt(P.get('stage'), 10) : null,
      beat: P.has('beat') ? parseInt(P.get('beat'), 10) : 0,
      autostart: P.has('autostart') || P.has('bot'),
      dtmax: P.has('dtmax') ? parseFloat(P.get('dtmax')) : 0.05,
    };
    const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
    this.settings = load('graveshift.settings', { difficulty: 'normal', quality: mobile ? 'low' : 'high', muted: false });
    if (P.has('quality')) this.settings.quality = P.get('quality');
    this.highScore = load('graveshift.hiscore', 0);
    this.autoReload = false;

    this.container = document.getElementById('game');
    this.initRenderer();

    this.audio = new AudioEngine();
    this.audio.muted = this.settings.muted;
    this.lights = new LightPool(this.scene, 8);
    this.fx = new Effects(this);
    this.arsenal = new Arsenal(this);
    this.director = new Director(this);
    this.hud = new HUD(this, document.getElementById('hud'));
    this.input = new Input(this, this.container);

    this.entities = [];
    this.zombies = [];
    this.playerPos = new THREE.Vector3();
    this.camFwd = new THREE.Vector3(0, 0, -1);
    this.state = 'boot';
    this.paused = false;
    this.lives = 5;
    this.maxLives = 5;
    this.score = 0;
    this.scoreShown = 0;
    this.combo = 0;
    this.credits = 0;
    this.cover = false;
    this.coverAmt = 0;
    this.invuln = 0;
    this.shakeAmt = 0;
    this.recoil = 0;
    this.bobT = 0;
    this.timeScale = 1;
    this.fightTimer = 0;
    this.boss = null;
    this.stageIndex = 0;
    this.time = 0;
    this.heartT = 0;
    this.totals = this.newStats();
    this.stats = this.newStats();
    this.diff = DIFFS[this.settings.difficulty];

    this.setupUI();
    window.addEventListener('resize', () => this.resize());
    this.resize();
    window.GAME = this;
    // debug helper: render one frame and return it as a PNG data URL
    window.SNAPSHOT = () => {
      this.composer.render(0.016);
      this.hud.draw(0.016);
      const c = document.createElement('canvas');
      c.width = this.renderer.domElement.width;
      c.height = this.renderer.domElement.height;
      const x = c.getContext('2d');
      x.drawImage(this.renderer.domElement, 0, 0);
      x.drawImage(this.hud.c, 0, 0, c.width, c.height);
      return c.toDataURL('image/png');
    };

    this.last = performance.now();
    this.toTitle();
    requestAnimationFrame((t) => this.loop(t));
  }

  newStats() {
    return { shots: 0, hits: 0, kills: 0, headshots: 0, rescues: 0, lost: 0, civilians: 0, damage: 0, projectiles: 0, time: 0, score: 0 };
  }

  // ---------------------------------------------------------------- renderer

  initRenderer() {
    const high = this.settings.quality === 'high';
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false }));
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, high ? 1.5 : 1));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.15;
    r.shadowMap.enabled = high;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.prepend(r.domElement);
    r.domElement.id = 'view';

    const scene = (this.scene = new THREE.Scene());
    this.camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.05, 220);
    scene.add(this.camera);
    this.levelRoot = new THREE.Group();
    this.entityRoot = new THREE.Group();
    scene.add(this.levelRoot, this.entityRoot);
    this.hitRoots = [this.levelRoot, this.entityRoot];

    const pmrem = new THREE.PMREMGenerator(r);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.12;

    this.hemi = new THREE.HemisphereLight(0x3a4a6a, 0x16120e, 0.5);
    scene.add(this.hemi);
    this.moon = new THREE.DirectionalLight(0x8aa0d0, 0.0);
    this.moon.position.set(-30, 60, 20);
    scene.add(this.moon);

    // the player's flashlight follows the crosshair
    const fl = (this.flashlight = new THREE.SpotLight(0xfff0d8, 22, 45, 0.44, 0.55, 1.5));
    fl.castShadow = high;
    fl.shadow.mapSize.set(1024, 1024);
    fl.shadow.camera.near = 0.3;
    fl.shadow.camera.far = 42;
    fl.shadow.bias = -0.0004;
    fl.shadow.normalBias = 0.03;
    scene.add(fl, fl.target);
    this.flashAim = new THREE.Vector3();

    const w = window.innerWidth;
    const h = window.innerHeight;
    const rt = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, samples: high ? 4 : 0 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.55, 0.55, 0.82);
    this.bloom.enabled = high;
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 1 ? 80 : 68;
    this.camera.updateProjectionMatrix();
    // pixel budget + dynamic resolution scale
    const high = this.settings.quality === 'high';
    const budget = high ? 3.2e6 : 1.3e6;
    const pr = Math.min(window.devicePixelRatio || 1, high ? 1.5 : 1, Math.sqrt(budget / (w * h))) * (this.resScale || 1);
    this.renderer.setPixelRatio(Math.max(0.4, pr));
    this.renderer.setSize(w, h);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(w, h);
    this.hud.resize();
    const px = h * this.renderer.getPixelRatio();
    this.fx.setScale(px / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2)));
  }

  // ---------------------------------------------------------------- UI / menus

  $(id) {
    return document.getElementById(id);
  }

  show(id, on = true) {
    const el = this.$(id);
    if (el) el.classList.toggle('show', on);
  }

  setupUI() {
    const opt = (group, key, values) => {
      const el = this.$(group);
      el.innerHTML = '';
      values.forEach(([v, label]) => {
        const b = document.createElement('button');
        b.textContent = label;
        b.className = this.settings[key] === v ? 'on' : '';
        b.onclick = (e) => {
          e.stopPropagation();
          this.audio.init();
          this.settings[key] = v;
          save('graveshift.settings', this.settings);
          this.audio.play('blip');
          if (key === 'quality') {
            location.reload();
            return;
          }
          opt(group, key, values);
        };
        el.appendChild(b);
      });
    };
    opt('opt-diff', 'difficulty', [
      ['easy', 'EASY'],
      ['normal', 'NORMAL'],
      ['hard', 'HARD'],
    ]);
    opt('opt-quality', 'quality', [
      ['high', 'HIGH'],
      ['low', 'LOW'],
    ]);
    this.$('btn-start').onclick = (e) => {
      e.stopPropagation();
      this.audio.init();
      this.startGame(0);
    };
    this.$('btn-resume').onclick = (e) => {
      e.stopPropagation();
      this.togglePause();
    };
    this.$('btn-quit').onclick = (e) => {
      e.stopPropagation();
      this.paused = false;
      this.show('pause', false);
      this.toTitle();
    };
    this.$('continue').onclick = (e) => {
      e.stopPropagation();
      this.continueGame();
    };
    this.$('results').onclick = (e) => {
      e.stopPropagation();
      if (this.resultsT > 1.2) this.afterResults();
    };
    this.$('gameover').onclick = (e) => {
      e.stopPropagation();
      if (this.overT > 1.5) this.toTitle();
    };
    this.$('victory').onclick = (e) => {
      e.stopPropagation();
      if (this.overT > 2.5) this.toTitle();
    };
    this.$('btn-mute').onclick = (e) => {
      e.stopPropagation();
      this.toggleMute();
    };
    this.updateMuteBtn();
  }

  updateMuteBtn() {
    const b = this.$('btn-mute');
    if (b) b.textContent = this.audio.muted ? 'SOUND: OFF' : 'SOUND: ON';
  }

  toggleMute() {
    this.audio.init();
    this.audio.setMuted(!this.audio.muted);
    this.settings.muted = this.audio.muted;
    save('graveshift.settings', this.settings);
    this.updateMuteBtn();
  }

  togglePause() {
    if (this.state !== 'play') return;
    this.paused = !this.paused;
    this.show('pause', this.paused);
    this.arsenal.release();
    document.body.classList.toggle('menu', this.paused);
  }

  input_fire(down) {
    if (this.state === 'continue' && down) {
      this.continueGame();
      return;
    }
    if (this.state !== 'play' || this.paused) return;
    if (down) this.arsenal.pull();
    else this.arsenal.release();
  }

  input_reload() {
    if (this.state === 'play' && !this.paused) this.arsenal.reload();
  }

  input_weapon(i) {
    if (ORDER[i]) this.arsenal.select(ORDER[i]);
  }

  input_confirm() {
    if (this.state === 'title') this.startGame(0);
    else if (this.state === 'results' && this.resultsT > 1.2) this.afterResults();
    else if (this.state === 'continue') this.continueGame();
    else if ((this.state === 'gameover' && this.overT > 1.5) || (this.state === 'victory' && this.overT > 2.5)) this.toTitle();
  }

  // ---------------------------------------------------------------- flow

  toTitle() {
    this.state = 'title';
    this.paused = false;
    ['pause', 'continue', 'results', 'gameover', 'victory', 'card'].forEach((id) => this.show(id, false));
    this.show('title', true);
    document.body.classList.add('menu');
    this.$('hiscore').textContent = `HIGH SCORE  ${pad(this.highScore, 8)}`;
    this.loadStage(0, true);
    this.audio.music('title');
    if (this.debug.autostart) setTimeout(() => this.state === 'title' && this.startGame(this.debug.stage || 0), 300);
  }

  startGame(stage = 0) {
    this.diff = DIFFS[this.settings.difficulty];
    this.maxLives = this.diff.lives;
    this.lives = this.maxLives;
    this.score = 0;
    this.scoreShown = 0;
    this.combo = 0;
    this.credits = 0;
    this.totals = this.newStats();
    this.arsenal.reset();
    this.show('title', false);
    this.loadStage(this.debug.stage ?? stage, false);
  }

  clearLevel() {
    this.tanks = [];
    for (const e of this.entities) this.entityRoot.remove(e.root);
    this.entities.length = 0;
    this.zombies.length = 0;
    this.levelRoot.traverse((o) => {
      if (o.isMesh && o.geometry) o.geometry.dispose();
    });
    this.levelRoot.clear();
    this.lights.clear();
    this.fx.clear();
    this.hud.clear();
    this.boss = null;
  }

  loadStage(i, attract) {
    this.clearLevel();
    this.stageIndex = i;
    const st = STAGES[i];
    this.stage = st;
    this.theme = st.theme;
    this.scene.fog = new THREE.FogExp2(st.fog, st.fogDensity);
    this.scene.background = new THREE.Color(st.fog);
    this.hemi.color.set(st.hemi[0]);
    this.hemi.groundColor.set(st.hemi[1]);
    this.hemi.intensity = st.hemi[2];
    this.moon.intensity = st.moon || 0;
    this.scene.environmentIntensity = st.env ?? 0.12;
    this.grade.uniforms.uTint.value.set(...(st.tint || [1, 1, 1]));
    const b = new Builder(this, this.levelRoot);
    st.build(b, this);
    b.finish();
    this.fx.setRain(!!st.rain);
    this.director.load(st, attract ? 0 : this.debug.beat || 0);
    this.updateCamera(0.016);
    this.warmup();
    if (attract) return;

    this.stats = this.newStats();
    this.stats.score = this.score;
    this.state = 'intro';
    this.introT = 0;
    this.cover = false;
    this.coverAmt = 0;
    this.combo = 0;
    this.$('card-chapter').textContent = st.chapter;
    this.$('card-title').textContent = st.title;
    this.$('card-sub').textContent = st.subtitle;
    this.show('card', true);
    document.body.classList.remove('menu');
    this.audio.music(null);
    this.audio.play('stinger');
  }

  // Compile every shader we will need up-front to avoid hitches mid-fight.
  warmup() {
    const tmp = [];
    const pp = this.director.pos;
    const add = (e) => {
      e.root.position.set(pp.x, -50, pp.z);
      this.entityRoot.add(e.root);
      tmp.push(e);
    };
    try {
      for (const t of ['shambler', 'runner', 'brute']) add(new Zombie(this, { type: t, at: [pp.x, pp.z] }));
      for (const k of Object.keys(PICKUPS)) add(new Pickup(this, { kind: k, pos: new THREE.Vector3(pp.x, -50, pp.z) }));
      add(new Barrel(this, { at: [pp.x, pp.z] }));
      add(new Crate(this, { at: [pp.x, pp.z] }));
      const m1 = new THREE.Mesh(new THREE.BoxGeometry(), FLASH_MAT);
      const m2 = new THREE.Mesh(new THREE.BoxGeometry(), RED_MAT);
      m1.position.y = m2.position.y = -50;
      this.scene.add(m1, m2);
      this.renderer.compile(this.scene, this.camera);
      this.scene.remove(m1, m2);
    } catch (err) {
      console.warn(err);
    }
    for (const e of tmp) this.entityRoot.remove(e.root);
  }

  beginPlay() {
    this.state = 'play';
    this.show('card', false);
    this.audio.music(this.stage.music || 'stage');
    this.director.next();
    this.invuln = 1;
  }

  stageClear() {
    if (this.state !== 'play') return;
    this.state = 'results';
    this.resultsT = 0;
    this.arsenal.release();
    this.cover = false;
    this.audio.music('clear');
    const s = this.stats;
    const acc = s.shots ? s.hits / s.shots : 0;
    const timeBonus = Math.max(0, Math.round(600 - s.time) * 10);
    const accBonus = Math.round(acc * 10000);
    const noDmg = s.damage === 0 ? 10000 : 0;
    this.score += timeBonus + accBonus + noDmg;
    for (const k in s) if (k !== 'score') this.totals[k] += s[k];
    const rank = this.rank(acc, s.damage);
    const rows = [
      ['KILLS', s.kills],
      ['HEADSHOTS', s.headshots],
      ['ACCURACY', `${Math.round(acc * 100)}%`],
      ['SURVIVORS RESCUED', `${s.rescues}`],
      ['PROJECTILES SHOT DOWN', s.projectiles],
      ['DAMAGE TAKEN', s.damage],
      ['TIME', `${Math.floor(s.time / 60)}:${pad(s.time % 60, 2)}`],
      ['TIME BONUS', `+${timeBonus}`],
      ['ACCURACY BONUS', `+${accBonus}`],
    ];
    if (noDmg) rows.push(['NO DAMAGE BONUS', `+${noDmg}`]);
    this.$('res-title').textContent = `${this.stage.chapter} CLEAR`;
    this.$('res-rows').innerHTML = rows.map(([a, b]) => `<div><span>${a}</span><b>${b}</b></div>`).join('');
    this.$('res-score').textContent = pad(this.score, 8);
    this.$('res-rank').textContent = rank;
    this.$('res-rank').className = 'rank r' + rank;
    this.show('results', true);
    document.body.classList.add('menu');
  }

  rank(acc, dmg) {
    if (acc >= 0.75 && dmg === 0) return 'S';
    if (acc >= 0.65 && dmg <= 1) return 'A';
    if (acc >= 0.5 && dmg <= 3) return 'B';
    if (acc >= 0.35) return 'C';
    return 'D';
  }

  afterResults() {
    this.show('results', false);
    if (this.stageIndex + 1 < STAGES.length) {
      this.debug.beat = 0;
      this.loadStage(this.stageIndex + 1, false);
    } else this.victory();
  }

  victory() {
    this.state = 'victory';
    this.overT = 0;
    this.audio.music('title');
    const t = this.totals;
    const acc = t.shots ? t.hits / t.shots : 0;
    this.$('vic-score').textContent = pad(this.score, 8);
    this.$('vic-rank').textContent = this.rank(acc, t.damage);
    this.$('vic-stats').textContent = `${t.kills} KILLS · ${t.headshots} HEADSHOTS · ${Math.round(acc * 100)}% ACCURACY · ${t.rescues} RESCUED · ${this.credits} CONTINUES`;
    this.saveHigh();
    this.show('victory', true);
    document.body.classList.add('menu');
  }

  saveHigh() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      save('graveshift.hiscore', this.highScore);
    }
  }

  toContinue() {
    this.state = 'continue';
    this.contT = 10;
    this.arsenal.release();
    this.cover = false;
    this.show('continue', true);
    document.body.classList.add('menu');
    this.audio.music(null);
    this.audio.play('timeup');
  }

  continueGame() {
    if (this.state !== 'continue') return;
    this.credits++;
    this.lives = this.maxLives;
    this.invuln = 2.5;
    this.state = 'play';
    this.show('continue', false);
    document.body.classList.remove('menu');
    this.audio.music(this.boss ? 'boss' : this.stage.music || 'stage');
    this.hud.message('GET BACK IN THERE!', '#ffd060', 1.6);
  }

  gameOver() {
    this.state = 'gameover';
    this.overT = 0;
    this.show('continue', false);
    this.$('go-score').textContent = pad(this.score, 8);
    this.saveHigh();
    this.show('gameover', true);
    this.audio.music('gameover');
  }

  // ---------------------------------------------------------------- spawning

  addEntity(e) {
    this.entities.push(e);
    this.entityRoot.add(e.root);
    if (e.kind === 'zombie') this.zombies.push(e);
    return e;
  }

  spawn(spec, fight) {
    const out = [];
    const t = spec.type;
    if (ZTYPES[t]) {
      if (spec.burst) this.burstTank(spec.at);
      out.push(this.addEntity(new Zombie(this, { ...spec, fight })));
    } else if (t === 'survivor') {
      const s = this.addEntity(new Survivor(this, spec));
      for (const c of spec.chasers || []) {
        const z = this.addEntity(new Zombie(this, { ...c, chase: s, fight }));
        s.chasers.push(z);
        out.push(z);
      }
      out.push(s);
    } else if (t === 'barrel') out.push(this.addEntity(new Barrel(this, spec)));
    else if (t === 'crate') out.push(this.addEntity(new Crate(this, spec)));
    else if (t === 'pickup') out.push(this.addEntity(new Pickup(this, { kind: spec.kind, pos: new THREE.Vector3(spec.at[0], 0, spec.at[1]), y: spec.y })));
    return out;
  }

  // A specimen smashes out of its tank.
  burstTank(at) {
    const tanks = this.tanks || [];
    let best = null;
    let bd = 4;
    for (const t of tanks) {
      const d = Math.hypot(t.x - at[0], t.z - at[1]);
      if (d < bd && !t.broken) {
        bd = d;
        best = t;
      }
    }
    if (!best) return;
    best.broken = true;
    best.meshes.forEach((m) => (m.visible = false));
    const p = new THREE.Vector3(best.x, 1.4, best.z);
    this.audio.play('glass', { pan: this.panFor(p) });
    this.audio.play('splash', { pan: this.panFor(p) });
    this.fx.acid(p, 40);
    this.fx.sparks(p, _v.set(0, 0.5, 0), 20);
    for (let i = 0; i < 3; i++) this.fx.splat(best.x + rand(-1, 1), best.z + rand(-1, 1), rand(0.8, 1.5));
    this.shake(0.3);
  }

  startBoss(name, at) {
    const B = BOSSES[name];
    const b = this.addEntity(new B(this, at));
    this.boss = b;
    this.hud.bossIntro(b.title, b.name);
    this.audio.play('stinger');
    this.audio.music('boss');
  }

  // ---------------------------------------------------------------- player & scoring

  get comboMult() {
    return 1 + Math.min(3, Math.floor(this.combo / 10) * 0.5);
  }

  canShoot() {
    return this.state === 'play' && !this.paused && !this.cover && this.coverAmt < 0.35;
  }

  addScore(points, pos, label, color) {
    const p = Math.round(points);
    this.score += p;
    if (pos) this.hud.popup(label ? `${label} +${p}` : `+${p}`, pos, color || (label ? '#ffd23a' : '#f2f2e6'), label ? 1.1 : 0.8);
  }

  onFire(def) {
    this.recoil = Math.min(1, this.recoil + def.kick);
    this.shake(def.kick * 0.25);
    _v.set(0.35, -0.25, -0.6);
    this.camera.localToWorld(_v);
    this.fx.muzzle(_v);
  }

  onKill(z, info) {
    this.stats.kills++;
    let pts = z.def.score * this.comboMult;
    let label = null;
    if (info.head) {
      pts += 150;
      this.stats.headshots++;
      label = 'HEADSHOT';
      this.timeScale = 0.35;
    } else if (info.gib) label = info.explosive ? 'BOOM' : 'SPLATTER';
    const p = info.point ? info.point.clone() : z.root.position.clone().setY(1.5);
    this.addScore(pts, p, label, info.head ? '#ff6a3a' : undefined);
    this.hud.hitMarker(true);
  }

  onRescue(s) {
    this.stats.rescues++;
    this.audio.play('thanks');
    this.addScore(500, s.root.position.clone().setY(2), 'RESCUED', '#5aff7a');
    if (this.lives < this.maxLives) {
      this.lives++;
      this.hud.heal();
      this.hud.message('SURVIVOR RESCUED  ·  +1 LIFE', '#5aff7a', 2);
    } else {
      this.addScore(1000, null);
      this.hud.message('SURVIVOR RESCUED  ·  +1000', '#5aff7a', 2);
    }
  }

  onCivilianShot(s) {
    this.stats.civilians++;
    this.hud.message("DON'T SHOOT SURVIVORS!", '#ff3a2a', 2);
    this.hurtPlayer(null, 1, true);
  }

  collect(kind, pos) {
    const P = PICKUPS[kind];
    this.audio.play(kind === 'herb' ? 'heal' : 'pickup');
    this.fx.sparks(pos, _v.set(0, 1, 0), 16);
    if (kind === 'herb') {
      if (this.lives < this.maxLives) {
        this.lives++;
        this.hud.heal();
        this.hud.message('GREEN HERB  ·  +1 LIFE', '#5aff7a', 1.6);
      } else this.addScore(1000, pos, 'HERB');
    } else if (kind === 'gem') {
      this.addScore(2000, pos, 'BONUS');
    } else {
      const id = kind === 'shells' ? 'shotgun' : kind;
      this.arsenal.give(id);
      this.hud.message(`${P.label} ACQUIRED`, '#9adfff', 1.6);
    }
  }

  hurtPlayer(src, amount = 1, force = false) {
    if (this.state !== 'play') return false;
    if (!force && this.coverAmt > 0.45) {
      this.audio.play('block');
      return false;
    }
    if (this.invuln > 0 && !force) return false;
    this.invuln = 1.1;
    this.combo = 0;
    this.stats.damage++;
    this.hud.damage();
    this.hud.splat(src && src.type === 'acid' ? 'acid' : 'blood');
    if (Math.random() < 0.5) this.hud.splat('blood');
    this.audio.play('hurt');
    this.shake(0.9);
    if (!this.debug.god) this.lives -= amount;
    if (this.lives <= 0) {
      this.lives = 0;
      this.toContinue();
    }
    return true;
  }

  screenSplat(kind) {
    this.hud.splat(kind);
  }

  timeUp() {
    this.hud.message('TIME UP!', '#ff3a2a', 1.6);
    this.audio.play('timeup');
    this.hurtPlayer(null, 1, true);
  }

  areaClear() {
    const bonus = Math.round(Math.max(0, this.fightTimer)) * 20;
    this.score += bonus;
    this.hud.message('AREA CLEAR', '#ffd060', 1.4);
    if (bonus) this.hud.message(`TIME BONUS +${bonus}`, '#9adfff', 1.4);
    this.audio.play('blip', { freq: 880 });
  }

  onBossDefeated(b) {
    this.addScore(5000 * (this.diff.bossHp || 1), b.aimPoint(), 'SPECIMEN TERMINATED', '#ff6a3a');
    this.hud.message(`${b.name} DESTROYED`, '#ff8a5a', 3);
    this.audio.play('roar', { pitch: 0.7 });
    this.audio.play('explode');
    this.shake(1.2);
    this.timeScale = 0.2;
    this.audio.music(null);
    this.fx.blood(b.aimPoint(), _v.set(0, 1, 0), 60, 6, 1.2, 0.14);
    // everything else in the arena collapses
    for (const e of this.entities) {
      if (e === b || e.dead) continue;
      if (e.kind === 'zombie') e.die('normal', _v.set(0, 0, 1), e.root.position.clone().setY(1));
      else if (e.kind === 'projectile' || e.kind === 'tentacle') {
        e.dead = true;
        e.remove = true;
      }
    }
  }

  explode(pos, radius, dmg) {
    this.fx.explosion(pos, 1);
    this.fx.fire(pos.clone().setY(0.1), 0.6, 4);
    this.audio.play('explode', { pan: this.panFor(pos) });
    this.shake(0.9);
    for (const e of [...this.entities]) {
      if (e.dead) continue;
      const d = e.root.position.distanceTo(pos);
      if (d < radius) e.blast(dmg * (1 - (d / radius) * 0.5), pos);
    }
  }

  shake(a) {
    this.shakeAmt = Math.min(1.5, this.shakeAmt + a);
  }

  message(text, color, dur) {
    this.hud.message(text, color, dur);
  }

  panFor(pos) {
    _v2.copy(pos).project(this.camera);
    return clamp(_v2.x, -1, 1) * 0.8;
  }

  isBehind(pos, margin = 0) {
    const c = this.camera.position;
    return (pos.x - c.x) * this.camFwd.x + (pos.z - c.z) * this.camFwd.z < -margin;
  }

  // ---------------------------------------------------------------- frame

  updateCamera(dt) {
    const d = this.director;
    const cam = this.camera;
    this.bobT += dt * d.moving * 2.4;
    const mv = clamp(d.moving / 2.5, 0, 1);
    const bob = Math.sin(this.bobT * 2) * 0.035 * mv;
    const sway = Math.sin(this.bobT) * 0.025 * mv;
    this.coverAmt = damp(this.coverAmt, this.cover ? 1 : 0, 14, dt);
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.8);
    this.recoil = damp(this.recoil, 0, 10, dt);
    const s = this.shakeAmt * this.shakeAmt * 0.12;

    cam.position.copy(d.pos);
    _v.subVectors(d.look, d.pos).setY(0).normalize();
    this.camFwd.copy(_v);
    cam.position.x += -_v.z * sway + rand(-s, s);
    cam.position.z += _v.x * sway + rand(-s, s);
    cam.position.y += bob - this.coverAmt * 0.78 + rand(-s, s);
    _v2.copy(d.look);
    _v2.y += this.recoil * 0.35 - this.coverAmt * 0.6;
    _v2.x += rand(-s, s) * 3;
    _v2.y += rand(-s, s) * 3;
    cam.lookAt(_v2);
    cam.rotateZ(sway * 0.4 + this.coverAmt * 0.05);
    this.playerPos.set(d.pos.x, 0, d.pos.z);

    // flashlight from the right shoulder towards the crosshair
    _v.set(0.28, -0.22, 0.05);
    cam.localToWorld(_v);
    this.flashlight.position.copy(_v);
    _v.set(this.input.aim.x, this.input.aim.y, 0.5).unproject(cam).sub(cam.position).normalize();
    _v.multiplyScalar(14).add(cam.position);
    if (dt === 0.016 && this.flashAim.lengthSq() === 0) this.flashAim.copy(_v);
    this.flashAim.x = damp(this.flashAim.x, _v.x, 14, dt);
    this.flashAim.y = damp(this.flashAim.y, _v.y, 14, dt);
    this.flashAim.z = damp(this.flashAim.z, _v.z, 14, dt);
    this.flashlight.target.position.copy(this.flashAim);
  }

  attract(dt) {
    // slow drift for the title screen backdrop
    const st = this.stage;
    const t = performance.now() / 1000;
    const a = st.attract || { pos: st.start, look: st.lookStart };
    this.director.pos.set(a.pos[0] + Math.sin(t * 0.1) * 1.5, a.pos[1] + Math.sin(t * 0.13) * 0.2, a.pos[2] + Math.cos(t * 0.08) * 1.0);
    this.director.look.set(a.look[0] + Math.sin(t * 0.15) * 2, a.look[1], a.look[2]);
    this.input.aim.x = Math.sin(t * 0.4) * 0.3;
    this.input.aim.y = Math.sin(t * 0.33) * 0.15 - 0.1;
    this.updateCamera(dt);
  }

  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    if (this.frozen) return; // debug: stop updating/rendering (used by screenshot tooling)
    const rawDt = (now - this.last) / 1000;
    let dt = Math.min(this.debug.dtmax, rawDt);
    this.last = now;
    this.fps = this.fps ? this.fps * 0.95 + (1 / Math.max(0.001, rawDt)) * 0.05 : 60;
    // dynamic resolution: trade sharpness for frame rate on slower GPUs
    this.resT = (this.resT || 0) + rawDt;
    if (this.resT > 2 && (this.state === 'play' || this.state === 'title')) {
      this.resT = 0;
      const r = this.resScale || 1;
      if (this.fps < 40 && r > 0.55) {
        this.resScale = r * 0.85;
        this.resize();
      } else if (this.fps > 57 && r < 1) {
        this.resScale = Math.min(1, r * 1.1);
        this.resize();
      }
    }
    if (dt <= 0) dt = 0.001;
    this.time += dt;
    this.audio.update();
    this.timeScale = damp(this.timeScale, 1, 3.5, dt);
    const sdt = dt * this.timeScale;

    switch (this.state) {
      case 'title':
        this.attract(dt);
        break;
      case 'intro':
        this.introT += dt;
        this.updateCamera(dt);
        if (this.introT > 3.4) this.beginPlay();
        break;
      case 'play':
        if (!this.paused) this.updatePlay(sdt);
        break;
      case 'continue': {
        this.contT -= dt;
        const n = Math.max(0, Math.ceil(this.contT - 1));
        if (this.$('cont-n').textContent !== String(n)) {
          this.$('cont-n').textContent = n;
          this.audio.play('tick');
        }
        if (this.debug.bot && this.contT < 9) this.continueGame();
        if (this.contT <= 0) this.gameOver();
        this.updateCamera(dt);
        break;
      }
      case 'results':
        this.resultsT += dt;
        if (this.debug.bot && this.resultsT > 2) this.afterResults();
        this.updateEntities(dt);
        break;
      case 'gameover':
      case 'victory':
        this.overT += dt;
        break;
    }

    if (!this.paused) {
      this.lights.update(dt, this.camera.position, this.camFwd);
      this.fx.update(this.state === 'play' ? sdt : dt);
    }
    this.scoreShown = this.scoreShown < this.score ? Math.min(this.score, this.scoreShown + Math.max(10, (this.score - this.scoreShown) * 8 * dt)) : this.score;

    const gu = this.grade.uniforms;
    gu.uTime.value = this.time;
    gu.uDamage.value = damp(gu.uDamage.value, this.hud.dmgFlash * 0.8, 10, dt);
    gu.uCover.value = this.coverAmt;
    this.composer.render(dt);
    this.hud.draw(dt);
  }

  updatePlay(dt) {
    this.stats.time += dt;
    this.invuln -= dt;
    const want = this.input.cover && !this.debug.bot;
    if (want && !this.cover) {
      this.cover = true;
      this.arsenal.release();
      this.arsenal.coverReload();
    } else if (!want && this.cover) this.cover = false;

    this.director.update(dt);
    this.updateCamera(dt);
    this.arsenal.update(dt);
    this.updateEntities(dt);
    this.aimTarget = probe(this, this.input.aim);
    if (this.debug.bot) this.botUpdate(dt);

    if (this.lives === 1) {
      this.heartT -= dt;
      if (this.heartT <= 0) {
        this.heartT = 0.85;
        this.audio.play('heartbeat');
      }
    }
  }

  updateEntities(dt) {
    for (let i = 0; i < this.entities.length; i++) this.entities[i].update(dt);
    let removed = false;
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const e = this.entities[i];
      if (e.remove) {
        this.entityRoot.remove(e.root);
        this.entities.splice(i, 1);
        removed = true;
      }
    }
    if (removed) this.zombies = this.zombies.filter((z) => !z.remove);
  }

  // ---------------------------------------------------------------- autoplay bot (testing)

  botUpdate(dt) {
    this.input.botDriven = true;
    let best = null;
    let bestS = -Infinity;
    let bestP = null;
    const cam = this.camera.position;
    for (const e of this.entities) {
      if (e.dead) continue;
      let p = null;
      let s = 0;
      if (e.kind === 'projectile') {
        p = e.root.position.clone();
        s = 1000 + e.t * 100;
      } else if (e.kind === 'tentacle' && (e.state === 'rise' || e.state === 'rear')) {
        p = e.tip.getWorldPosition(new THREE.Vector3());
        s = 900;
      } else if (e.kind === 'boss' && e.state !== 'intro') {
        p = e.aimPoint();
        s = 400;
      } else if (e.kind === 'zombie' && e.root.position.y > -1) {
        p = e.rig.head.getWorldPosition(new THREE.Vector3());
        if (!e.rig.head.visible) p = e.root.position.clone().setY(1);
        s = 300 - p.distanceTo(cam) * 5 + (e.warn || 0) * 400 + (e.chase ? 200 : 0);
      } else if (e.kind === 'pickup') {
        p = e.root.position.clone();
        s = 150;
      }
      if (!p) continue;
      _v.copy(p).project(this.camera);
      if (_v.z > 1 || Math.abs(_v.x) > 0.95 || Math.abs(_v.y) > 0.95) continue;
      if (s > bestS) {
        bestS = s;
        best = e;
        bestP = { x: _v.x, y: _v.y };
      }
    }
    const a = this.input.aim;
    if (bestP) {
      const k = 1 - Math.exp(-18 * dt);
      a.x += (bestP.x - a.x) * k;
      a.y += (bestP.y - a.y) * k;
      this.input.px = (a.x * 0.5 + 0.5) * window.innerWidth;
      this.input.py = (-a.y * 0.5 + 0.5) * window.innerHeight;
      const close = Math.hypot((bestP.x - a.x) * window.innerWidth, (bestP.y - a.y) * window.innerHeight) < 30;
      if (close && this.arsenal.cool <= 0) {
        if (this.arsenal.slot.ammo <= 0) this.arsenal.reload();
        else {
          this.arsenal.pull();
          this.arsenal.release();
        }
      }
    } else if (this.arsenal.slot.ammo < this.arsenal.def.mag) this.arsenal.reload();
  }
}
