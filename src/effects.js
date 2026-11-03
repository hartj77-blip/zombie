// Particles, decals, debris (gibs), fire, rain and the dynamic light pool.
import * as THREE from 'three';
import { T } from './textures.js';
import { rand, randi, pick, clamp } from './util.js';

const VERT = `
attribute float size;
attribute float alpha;
attribute vec3 pcolor;
uniform float uScale;
varying float vAlpha;
varying vec3 vColor;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.05, -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  vAlpha = alpha;
  vColor = pcolor;
  #include <fog_vertex>
}`;
const FRAG = `
varying float vAlpha;
varying vec3 vColor;
uniform float uSoft;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = vAlpha * smoothstep(0.5, uSoft, d);
  gl_FragColor = vec4(vColor, a);
  #include <fog_fragment>
}`;

class Particles {
  constructor(scene, count, additive, soft = 0.25) {
    this.n = count;
    this.pos = new Float32Array(count * 3);
    this.vel = new Float32Array(count * 3);
    this.col = new Float32Array(count * 3);
    this.size = new Float32Array(count);
    this.alpha = new Float32Array(count);
    this.life = new Float32Array(count);
    this.maxLife = new Float32Array(count);
    this.size0 = new Float32Array(count);
    this.size1 = new Float32Array(count);
    this.a0 = new Float32Array(count);
    this.grav = new Float32Array(count);
    this.drag = new Float32Array(count);
    this.flags = new Uint8Array(count); // 1 = blood (leaves decal on floor)
    this.next = 0;
    this.active = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo = g;
    this.mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uScale: { value: 500 }, uSoft: { value: soft } }]),
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      fog: true,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 6 : 5;
    scene.add(this.points);
  }

  spawn(x, y, z, vx, vy, vz, o) {
    const i = this.next;
    this.next = (this.next + 1) % this.n;
    const i3 = i * 3;
    this.pos[i3] = x;
    this.pos[i3 + 1] = y;
    this.pos[i3 + 2] = z;
    this.vel[i3] = vx;
    this.vel[i3 + 1] = vy;
    this.vel[i3 + 2] = vz;
    const c = o.color;
    this.col[i3] = c.r;
    this.col[i3 + 1] = c.g;
    this.col[i3 + 2] = c.b;
    this.life[i] = this.maxLife[i] = o.life;
    this.size0[i] = o.size;
    this.size1[i] = o.sizeEnd ?? o.size;
    this.a0[i] = o.alpha ?? 1;
    this.grav[i] = o.grav ?? 0;
    this.drag[i] = o.drag ?? 0;
    this.flags[i] = o.blood ? 1 : 0;
  }

  update(dt, fx) {
    const { pos, vel, life } = this;
    for (let i = 0; i < this.n; i++) {
      if (life[i] <= 0) {
        if (this.alpha[i] !== 0) {
          this.alpha[i] = 0;
          this.size[i] = 0;
        }
        continue;
      }
      life[i] -= dt;
      const i3 = i * 3;
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      vel[i3] *= dr;
      vel[i3 + 1] = vel[i3 + 1] * dr - this.grav[i] * dt;
      vel[i3 + 2] *= dr;
      pos[i3] += vel[i3] * dt;
      pos[i3 + 1] += vel[i3 + 1] * dt;
      pos[i3 + 2] += vel[i3 + 2] * dt;
      if (this.flags[i] === 1 && pos[i3 + 1] < 0.02) {
        // blood drop landed: maybe leave a splat on the floor
        if (Math.random() < 0.18) fx.splat(pos[i3], pos[i3 + 2], rand(0.2, 0.55));
        life[i] = 0;
        continue;
      }
      const t = 1 - life[i] / this.maxLife[i];
      this.size[i] = this.size0[i] + (this.size1[i] - this.size0[i]) * t;
      this.alpha[i] = this.a0[i] * (t < 0.1 ? t / 0.1 : 1 - Math.max(0, (t - 0.5) / 0.5));
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true;
    this.geo.attributes.alpha.needsUpdate = true;
    this.geo.attributes.pcolor.needsUpdate = true;
  }
}

class DecalPool {
  constructor(scene, tex, count, size = 1) {
    const geo = new THREE.PlaneGeometry(size, size);
    geo.rotateX(-Math.PI / 2);
    this.mat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      roughness: 0.3,
    });
    this.mesh = new THREE.InstancedMesh(geo, this.mat, count);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < count; i++) this.mesh.setMatrixAt(i, zero);
    this.count = count;
    this.next = 0;
    scene.add(this.mesh);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._q2 = new THREE.Quaternion();
    this._s = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
  }

  add(pos, normal, scale) {
    this._q.setFromUnitVectors(this._up, normal);
    this._q2.setFromAxisAngle(this._up, rand(0, Math.PI * 2));
    this._q.multiply(this._q2);
    this._s.set(scale, scale, scale);
    this._m.compose(pos, this._q, this._s);
    this.mesh.setMatrixAt(this.next, this._m);
    this.next = (this.next + 1) % this.count;
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  clear() {
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < this.count; i++) this.mesh.setMatrixAt(i, zero);
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

const C = (hex) => new THREE.Color(hex);
const BLOOD = [C(0x6a0000), C(0x8a0505), C(0x4a0000), C(0x9a1010)];
const SPARK = [C(0xffd080), C(0xffaa40), C(0xfff0c0)];
const FIRE = [C(0xff7a1a), C(0xffa030), C(0xff5010), C(0xffd060)];
const SMOKE = [C(0x202020), C(0x2a2a2a), C(0x181818)];
const DUST = [C(0x5a5650), C(0x4a4640), C(0x6a6660)];
const ACID = [C(0x60ff40), C(0x40c020), C(0x90ff60)];

const _v = new THREE.Vector3();
const _n = new THREE.Vector3();

export class Effects {
  constructor(game) {
    this.game = game;
    const scene = game.scene;
    this.scene = scene;
    this.soft = new Particles(scene, 2600, false, 0.15);
    this.glow = new Particles(scene, 1600, true, 0.0);
    this.splats = new DecalPool(scene, T.bloodDecal(), 140, 1);
    this.holes = new DecalPool(scene, T.bulletHole(), 120, 0.12);
    this.debris = [];
    this.emitters = [];
    this.rain = null;
  }

  setScale(px) {
    this.soft.mat.uniforms.uScale.value = px;
    this.glow.mat.uniforms.uScale.value = px;
  }

  clear() {
    this.splats.clear();
    this.holes.clear();
    for (const d of this.debris) this.scene.remove(d.mesh);
    this.debris.length = 0;
    this.emitters.length = 0;
    for (const p of [this.soft, this.glow]) p.life.fill(0);
    this.setRain(false);
  }

  // ----------------------------------------------------------- spawners

  blood(pos, dir, n = 14, speed = 3, spread = 0.7, size = 0.09) {
    for (let i = 0; i < n; i++) {
      const s = speed * rand(0.3, 1);
      this.soft.spawn(
        pos.x,
        pos.y,
        pos.z,
        (dir.x + rand(-spread, spread)) * s,
        (dir.y + rand(-spread * 0.5, spread * 1.2)) * s + rand(0, 1.5),
        (dir.z + rand(-spread, spread)) * s,
        { color: pick(BLOOD), life: rand(0.5, 1.1), size: size * rand(0.6, 1.6), sizeEnd: size * 0.5, grav: 9.8, drag: 0.5, blood: true }
      );
    }
    // a soft mist puff
    for (let i = 0; i < 3; i++)
      this.soft.spawn(pos.x, pos.y, pos.z, dir.x * 0.6 + rand(-0.3, 0.3), rand(-0.1, 0.4), dir.z * 0.6 + rand(-0.3, 0.3), {
        color: BLOOD[1],
        life: rand(0.25, 0.45),
        size: 0.25,
        sizeEnd: 0.6,
        alpha: 0.5,
        drag: 3,
      });
  }

  acid(pos, n = 16) {
    for (let i = 0; i < n; i++)
      this.glow.spawn(pos.x, pos.y, pos.z, rand(-2, 2), rand(0, 3), rand(-2, 2), { color: pick(ACID), life: rand(0.3, 0.7), size: rand(0.06, 0.14), sizeEnd: 0.02, grav: 8 });
  }

  sparks(pos, normal, n = 8) {
    for (let i = 0; i < n; i++) {
      const s = rand(2, 6);
      this.glow.spawn(pos.x, pos.y, pos.z, (normal.x + rand(-0.7, 0.7)) * s, (normal.y + rand(-0.3, 0.9)) * s, (normal.z + rand(-0.7, 0.7)) * s, {
        color: pick(SPARK),
        life: rand(0.12, 0.35),
        size: rand(0.03, 0.06),
        sizeEnd: 0.01,
        grav: 9,
      });
    }
    this.glow.spawn(pos.x, pos.y, pos.z, 0, 0, 0, { color: SPARK[0], life: 0.06, size: 0.35, sizeEnd: 0.1 });
  }

  dust(pos, normal, n = 5, color = DUST) {
    for (let i = 0; i < n; i++)
      this.soft.spawn(pos.x, pos.y, pos.z, normal.x * rand(0.3, 1.2) + rand(-0.3, 0.3), normal.y * rand(0.3, 1.2) + rand(0, 0.5), normal.z * rand(0.3, 1.2) + rand(-0.3, 0.3), {
        color: pick(color),
        life: rand(0.4, 0.9),
        size: rand(0.08, 0.16),
        sizeEnd: 0.35,
        alpha: 0.6,
        drag: 2,
      });
  }

  splat(x, z, s) {
    _v.set(x, 0.012 + Math.random() * 0.004, z);
    _n.set(0, 1, 0);
    this.splats.add(_v, _n, s);
  }

  bulletHole(pos, normal) {
    _v.copy(pos).addScaledVector(normal, 0.01);
    this.holes.add(_v, normal, rand(0.8, 1.3));
  }

  explosion(pos, scale = 1) {
    for (let i = 0; i < 60 * scale; i++) {
      const s = rand(2, 8) * scale;
      const a = rand(0, Math.PI * 2);
      const e = rand(-0.2, 1);
      this.glow.spawn(pos.x, pos.y, pos.z, Math.cos(a) * s * (1 - e * 0.5), e * s, Math.sin(a) * s * (1 - e * 0.5), {
        color: pick(FIRE),
        life: rand(0.3, 0.8),
        size: rand(0.3, 0.8) * scale,
        sizeEnd: 0.05,
        grav: 2,
        drag: 2.5,
      });
    }
    for (let i = 0; i < 25 * scale; i++)
      this.soft.spawn(pos.x + rand(-0.5, 0.5), pos.y + rand(0, 1), pos.z + rand(-0.5, 0.5), rand(-1.5, 1.5), rand(0.5, 2.5), rand(-1.5, 1.5), {
        color: pick(SMOKE),
        life: rand(1.2, 2.4),
        size: rand(0.6, 1.0) * scale,
        sizeEnd: 2.4 * scale,
        alpha: 0.7,
        drag: 1.2,
      });
    for (let i = 0; i < 30; i++) this.glow.spawn(pos.x, pos.y, pos.z, rand(-9, 9), rand(2, 10), rand(-9, 9), { color: SPARK[1], life: rand(0.4, 1.0), size: 0.05, sizeEnd: 0.01, grav: 9 });
    this.game.lights.flash(pos, 0xff8a30, 80 * scale, 0.35);
  }

  muzzle(pos) {
    this.game.lights.flash(pos, 0xffc070, 18, 0.05);
  }

  // A continuous emitter (fires, smoke columns, neck fountains).
  addEmitter(o) {
    const e = { acc: 0, life: Infinity, ...o, pos: o.pos ? o.pos.clone() : new THREE.Vector3() };
    this.emitters.push(e);
    return e;
  }

  fire(pos, size = 1, life = Infinity) {
    this.game.lights.addAnchor({ pos: pos.clone().add(new THREE.Vector3(0, 0.8, 0)), color: new THREE.Color(0xff7a2a), intensity: 25 * size, distance: 10, flicker: 0.6, temp: life < Infinity ? life : undefined });
    return this.addEmitter({ pos, kind: 'fire', rate: 40 * size, size, life });
  }

  // Convert a set of meshes into physics debris (severed limbs, gibs).
  addDebris(mesh, vel, spin, life = 4, bleed = true, radius = 0.1) {
    this.scene.add(mesh);
    mesh.traverse((o) => o.isMesh && o.layers.disable(1));
    this.debris.push({ mesh, vel, spin, life, maxLife: life, bleed, radius, bounced: 0 });
    if (this.debris.length > 70) {
      const d = this.debris.shift();
      this.scene.remove(d.mesh);
    }
  }

  setRain(on) {
    if (on && !this.rain) {
      const N = 1400;
      const pos = new Float32Array(N * 6);
      this.rainSpeed = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        const x = rand(-15, 15);
        const y = rand(-2, 14);
        const z = rand(-15, 15);
        pos.set([x, y, z, x + 0.02, y - 0.45, z + 0.04], i * 6);
        this.rainSpeed[i] = rand(14, 20);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
      const m = new THREE.LineBasicMaterial({ color: 0x8090a8, transparent: true, opacity: 0.32, fog: true, depthWrite: false });
      this.rain = new THREE.LineSegments(g, m);
      this.rain.frustumCulled = false;
      this.scene.add(this.rain);
    } else if (!on && this.rain) {
      this.scene.remove(this.rain);
      this.rain.geometry.dispose();
      this.rain = null;
    }
  }

  // ----------------------------------------------------------- update

  update(dt) {
    this.soft.update(dt, this);
    this.glow.update(dt, this);

    for (let i = this.emitters.length - 1; i >= 0; i--) {
      const e = this.emitters[i];
      e.life -= dt;
      if (e.life <= 0) {
        this.emitters.splice(i, 1);
        continue;
      }
      e.acc += e.rate * dt;
      const p = e.follow ? e.follow.getWorldPosition(_v) : e.pos;
      while (e.acc >= 1) {
        e.acc -= 1;
        if (e.kind === 'fire') {
          const s = e.size;
          this.glow.spawn(p.x + rand(-0.4, 0.4) * s, p.y + rand(0, 0.3), p.z + rand(-0.4, 0.4) * s, rand(-0.2, 0.2), rand(1.0, 2.2) * s, rand(-0.2, 0.2), {
            color: pick(FIRE),
            life: rand(0.4, 0.9),
            size: rand(0.35, 0.7) * s,
            sizeEnd: 0.05,
            drag: 0.5,
          });
          if (Math.random() < 0.35)
            this.soft.spawn(p.x + rand(-0.3, 0.3), p.y + 1.2 * s, p.z + rand(-0.3, 0.3), rand(-0.2, 0.2), rand(0.8, 1.4), rand(-0.2, 0.2), {
              color: pick(SMOKE),
              life: rand(1.5, 2.5),
              size: 0.5 * s,
              sizeEnd: 1.8 * s,
              alpha: 0.5,
              drag: 0.3,
            });
        } else if (e.kind === 'fountain') {
          const d = e.dir || _n.set(0, 1, 0);
          this.soft.spawn(p.x, p.y, p.z, d.x * 2 + rand(-0.5, 0.5), d.y * 2 + rand(1, 2.5), d.z * 2 + rand(-0.5, 0.5), {
            color: pick(BLOOD),
            life: rand(0.5, 0.9),
            size: rand(0.05, 0.1),
            sizeEnd: 0.03,
            grav: 9.8,
            blood: true,
          });
        } else if (e.kind === 'smoke') {
          this.soft.spawn(p.x + rand(-0.3, 0.3), p.y, p.z + rand(-0.3, 0.3), rand(-0.2, 0.2), rand(0.4, 0.9), rand(-0.2, 0.2), {
            color: pick(e.colors || SMOKE),
            life: rand(2, 3.5),
            size: 0.6,
            sizeEnd: 2.4,
            alpha: e.alpha ?? 0.35,
            drag: 0.2,
          });
        } else if (e.kind === 'drip') {
          this.soft.spawn(p.x + rand(-0.05, 0.05), p.y, p.z + rand(-0.05, 0.05), 0, -0.5, 0, { color: pick(BLOOD), life: 1.5, size: 0.05, grav: 9.8, blood: true });
        }
      }
    }

    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.life -= dt;
      const m = d.mesh;
      d.vel.y -= 9.8 * dt;
      m.position.addScaledVector(d.vel, dt);
      m.rotation.x += d.spin.x * dt;
      m.rotation.y += d.spin.y * dt;
      m.rotation.z += d.spin.z * dt;
      if (m.position.y < d.radius) {
        m.position.y = d.radius;
        if (d.vel.y < -1) {
          d.vel.y *= -0.3;
          if (d.bleed && d.bounced < 2) this.splat(m.position.x, m.position.z, rand(0.3, 0.6));
          d.bounced++;
        } else d.vel.y = 0;
        d.vel.x *= 0.6;
        d.vel.z *= 0.6;
        d.spin.multiplyScalar(0.5);
      }
      if (d.bleed && d.life > d.maxLife - 1.2 && Math.random() < 0.3) {
        this.soft.spawn(m.position.x, m.position.y, m.position.z, rand(-0.3, 0.3), rand(0, 0.5), rand(-0.3, 0.3), { color: pick(BLOOD), life: 0.8, size: 0.06, grav: 9.8, blood: true });
      }
      if (d.life < 1) m.position.y -= dt * 0.3; // sink into the floor
      if (d.life <= 0) {
        this.scene.remove(m);
        this.debris.splice(i, 1);
      }
    }

    if (this.rain) {
      const cam = this.game.camera.position;
      this.rain.position.set(Math.round(cam.x), 0, Math.round(cam.z));
      const p = this.rain.geometry.attributes.position.array;
      for (let i = 0, n = this.rainSpeed.length; i < n; i++) {
        const dy = this.rainSpeed[i] * dt;
        const k = i * 6;
        p[k + 1] -= dy;
        p[k + 4] -= dy;
        if (p[k + 4] < 0) {
          p[k + 1] += 16;
          p[k + 4] += 16;
          if (Math.random() < 0.08) this.soft.spawn(this.rain.position.x + p[k], 0.02, this.rain.position.z + p[k + 2], 0, 0.4, 0, { color: C(0x8090a8), life: 0.15, size: 0.06, alpha: 0.5 });
        }
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
  }
}

// ---------------------------------------------------------------------------
// A fixed pool of point lights assigned each frame to the nearest "anchors".
// Keeping the light count constant avoids shader recompiles (stutter).

export class LightPool {
  constructor(scene, count = 8) {
    this.scene = scene;
    this.lights = [];
    for (let i = 0; i < count; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 10, 2);
      scene.add(l);
      this.lights.push(l);
    }
    this.anchors = [];
    // Flash lights (muzzle, explosions) are separate so they never steal anchors.
    this.flashes = [];
    for (let i = 0; i < 3; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 14, 2);
      scene.add(l);
      this.flashes.push({ light: l, t: 0, dur: 1, peak: 0 });
    }
    this.nextFlash = 0;
    this.time = 0;
  }

  clear() {
    this.anchors.length = 0;
  }

  addAnchor(a) {
    a.seed = Math.random() * 100;
    this.anchors.push(a);
    return a;
  }

  flash(pos, color, intensity, dur) {
    const f = this.flashes[this.nextFlash];
    this.nextFlash = (this.nextFlash + 1) % this.flashes.length;
    f.light.position.copy(pos);
    f.light.color.set(color);
    f.peak = intensity;
    f.t = dur;
    f.dur = dur;
  }

  update(dt, camPos, camDir) {
    this.time += dt;
    const t = this.time;
    // Expire temporary anchors.
    for (let i = this.anchors.length - 1; i >= 0; i--) {
      const a = this.anchors[i];
      if (a.temp !== undefined) {
        a.temp -= dt;
        if (a.temp <= 0) this.anchors.splice(i, 1);
      }
    }
    // Score anchors by distance from a point a little ahead of the camera.
    const fx = camPos.x + camDir.x * 6;
    const fz = camPos.z + camDir.z * 6;
    const scored = this.anchors.map((a) => ({ a, d: (a.pos.x - fx) ** 2 + (a.pos.z - fz) ** 2 + (a.pos.y - camPos.y) ** 2 }));
    scored.sort((p, q) => p.d - q.d);
    for (let i = 0; i < this.lights.length; i++) {
      const L = this.lights[i];
      const s = scored[i];
      if (!s || s.d > 45 * 45) {
        L.intensity = 0;
        continue;
      }
      const a = s.a;
      L.position.copy(a.pos);
      L.color.copy(a.color);
      L.distance = a.distance;
      let k = 1;
      if (a.flicker) {
        const n = Math.sin(t * 13 + a.seed) * Math.sin(t * 7.3 + a.seed * 2) * Math.sin(t * 23 + a.seed);
        k = 1 - a.flicker * (n > 0.15 ? 1 : 0.2 * Math.random());
      }
      if (a.pulse) k *= 0.15 + 0.85 * Math.max(0, Math.sin(t * a.pulse + a.seed));
      if (a.strobe !== undefined) k *= Math.sin(t * 9 + a.strobe) > 0 ? 1 : 0.05;
      if (a.temp !== undefined) k *= clamp(a.temp, 0, 1);
      // fade lights near the end of the range so swaps are less visible
      const fade = clamp(1 - (Math.sqrt(s.d) - 30) / 15, 0, 1);
      L.intensity = a.intensity * k * fade;
    }
    for (const f of this.flashes) {
      if (f.t > 0) {
        f.t -= dt;
        f.light.intensity = f.peak * Math.max(0, f.t / f.dur);
      } else f.light.intensity = 0;
    }
  }
}
