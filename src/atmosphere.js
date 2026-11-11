// Sky dome, lightning, moonlight shadows, drifting ground mist and the
// flashlight's haze: everything that makes the air feel thick.
import * as THREE from 'three';
import { T } from './textures.js';
import { rand, clamp, damp } from './util.js';

const _v = new THREE.Vector3();
const MOON_DIR = new THREE.Vector3(-28, 60, 26);

export class Atmosphere {
  constructor(game) {
    this.g = game;
    const scene = game.scene;
    this.sky = new THREE.Mesh(
      new THREE.SphereGeometry(190, 32, 16),
      new THREE.MeshBasicMaterial({ map: T.sky(), side: THREE.BackSide, fog: false, depthWrite: false })
    );
    this.sky.renderOrder = -10;
    this.sky.rotation.y = 2.2; // puts the moon ahead and to the right on Main Street
    this.sky.visible = false;
    scene.add(this.sky);

    // mist: big soft sprites that drift around the camera
    this.mistMat = new THREE.SpriteMaterial({ map: T.glow(), color: 0x8a96a8, transparent: true, opacity: 0.05, depthWrite: false, fog: true });
    this.mist = [];
    for (let i = 0; i < 34; i++) {
      const s = new THREE.Sprite(this.mistMat);
      s.userData = { x: rand(-16, 16), y: rand(0.2, 1.5), z: rand(-16, 16), vx: rand(-0.25, 0.25), vz: rand(-0.15, 0.15), s: rand(5, 10) };
      s.scale.set(s.userData.s, s.userData.s * 0.45, 1);
      s.renderOrder = 4;
      scene.add(s);
      this.mist.push(s);
    }
    // haze lit up by the flashlight beam
    this.halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow(), color: 0xfff0d0, transparent: true, opacity: 0.06, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false }));
    this.halo.renderOrder = 8;
    scene.add(this.halo);
    this.moteColor = new THREE.Color(0xfff2d8);
    this.flash = 0;
    this.nextStrike = 6;
    this.strikeT = -1;
    this.fogBase = new THREE.Color();
    this.fogFlash = new THREE.Color(0x56607a);
  }

  setup(st) {
    const g = this.g;
    this.st = st;
    this.sky.visible = !!st.sky;
    g.scene.background = st.sky ? null : new THREE.Color(st.fog);
    this.fogBase.set(st.fog);
    this.mistMat.opacity = st.mist ?? 0.04;
    this.mistMat.color.set(st.mistColor ?? 0x8a96a8);
    this.moonBase = st.moon || 0;
    this.hemiBase = st.hemi[2];
    g.moon.castShadow = g.settings.quality === 'high' && !!st.sky;
    this.flash = 0;
    this.strikeT = -1;
    this.nextStrike = rand(5, 9);
  }

  update(dt) {
    const g = this.g;
    const cam = g.camera.position;
    this.sky.position.copy(cam);

    // lightning: a double flash, then thunder
    if (this.st && this.st.lightning && g.state !== 'title') {
      this.nextStrike -= dt;
      if (this.nextStrike <= 0) {
        this.nextStrike = rand(9, 22);
        this.strikeT = 0;
        setTimeout(() => g.audio.play('thunder'), rand(300, 1100));
      }
    }
    let f = 0;
    if (this.strikeT >= 0) {
      this.strikeT += dt;
      const t = this.strikeT;
      f = Math.max(Math.exp(-t * 14), t > 0.16 ? Math.exp(-(t - 0.16) * 7) * 0.8 : 0, t > 0.5 && t < 0.56 ? 0.5 : 0);
      if (t > 1.4) this.strikeT = -1;
    }
    this.flash = f;
    g.moon.intensity = this.moonBase + f * 7;
    g.hemi.intensity = (this.hemiBase || 0.3) + f * 1.6;
    this.sky.material.color.setScalar(1 + f * 5);
    if (g.scene.fog) g.scene.fog.color.copy(this.fogBase).lerp(this.fogFlash, f * 0.55);

    // moonlight follows the camera so its shadow map stays sharp
    _v.set(Math.round(cam.x / 4) * 4, 0, Math.round(cam.z / 4) * 4).addScaledVector(g.camFwd, 12);
    g.moon.target.position.copy(_v);
    g.moon.position.copy(_v).add(MOON_DIR);

    for (const s of this.mist) {
      const u = s.userData;
      u.x += u.vx * dt;
      u.z += u.vz * dt;
      // wrap around the camera
      let dx = u.x - cam.x;
      let dz = u.z - cam.z;
      if (dx > 18) u.x -= 36;
      else if (dx < -18) u.x += 36;
      if (dz > 18) u.z -= 36;
      else if (dz < -18) u.z += 36;
      s.position.set(u.x, u.y, u.z);
    }

    // flashlight haze + dust motes drifting through the beam
    const fa = g.flashAim;
    this.halo.position.copy(g.flashlight.position).lerp(fa, 0.4);
    const k = 1 - g.coverAmt;
    this.halo.material.opacity = 0.055 * k * (this.st && this.st.sky ? 1 : 1.25);
    this.halo.scale.setScalar(6.5);
    if (Math.random() < dt * 14 * k) {
      const t = rand(0.08, 0.5);
      _v.copy(g.flashlight.position).lerp(fa, t);
      const r = t * 4;
      g.fx.glow.spawn(_v.x + rand(-r, r), _v.y + rand(-r, r) * 0.6, _v.z + rand(-r, r), rand(-0.05, 0.05), rand(-0.06, 0.02), rand(-0.05, 0.05), { color: this.moteColor, life: rand(1.2, 2.4), size: rand(0.012, 0.022), alpha: 0.5 });
    }
  }
}
