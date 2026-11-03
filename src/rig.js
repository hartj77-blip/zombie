// Procedurally generated, skinned humanoid characters.
//
// Each body is a single continuous SkinnedMesh lofted along a skeleton: the
// torso, arms and legs are tubes whose cross-sections follow anatomical
// profiles (chest, waist, deltoids, biceps, calves...). The head is a sculpted
// sphere skinned to head + jaw bones so the mouth can open. Hands, feet, ears
// and eyes are rigid meshes parented to bones. Shots are detected against
// invisible capsule hitboxes attached to the bones, which also tell us which
// body part was hit.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { T } from './textures.js';
import { rand, randi, pick, chance, clamp, lerp } from './util.js';

const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const gauss = (d, s) => Math.exp(-(d * d) / (s * s));
const gauss2 = (dx, dy, sx, sy) => Math.exp(-(dx * dx) / (sx * sx) - (dy * dy) / (sy * sy));

// bone indices
const HIPS = 0;
const SPINE = 1;
const NECK = 2;
const HEAD = 3;
const JAW = 4;
const SH = { L: 5, R: 7 };
const EL = { L: 6, R: 8 };
const HIP = { L: 9, R: 11 };
const KN = { L: 10, R: 12 };
const SIDES = [
  ['L', -1],
  ['R', 1],
];

export const BUILDS = {
  normal: { h: 1, tw: 1, td: 1, limb: 1, belly: 0, leg: 1, arm: 1, head: 1 },
  thin: { h: 1.03, tw: 0.86, td: 0.84, limb: 0.8, belly: 0, leg: 1.02, arm: 1.06, head: 0.97 },
  fat: { h: 0.96, tw: 1.42, td: 1.5, limb: 1.32, belly: 1, leg: 0.92, arm: 0.98, head: 1.08 },
};

function layout(name) {
  const P = BUILDS[name];
  const hipY = 0.98 * P.leg;
  const spineY = hipY + 0.06;
  const tH = 0.47 * P.h;
  const neckY = spineY + tH;
  const headY = neckY + 0.085;
  const chestW = 0.172 * P.tw;
  const chestD = 0.108 * P.td;
  const S = { w: 0.074 * P.head, h: 0.112 * P.head, d: 0.098 * P.head };
  return {
    name,
    P,
    hipY,
    spineY,
    tH,
    neckY,
    headY,
    chestW,
    chestD,
    S,
    headC: new THREE.Vector3(0, headY + 0.1 * P.head, 0.012),
    shX: chestW + 0.03 * P.limb,
    shY: neckY - 0.065,
    ua: 0.29 * P.arm,
    fa: 0.27 * P.arm,
    legX: 0.093 * Math.sqrt(P.tw),
    kneeDrop: 0.43 * P.leg,
    ankleDrop: 0.405 * P.leg,
    hipJ: hipY - 0.06,
    limb: P.limb,
    crotchY: hipY - 0.12,
    neckTopY: neckY + 0.12,
  };
}

// Catmull-Rom through keyframes [[t, ...values]] (t ascending).
function interp(keys, t, k) {
  if (t <= keys[0][0]) return keys[0][k];
  const n = keys.length;
  if (t >= keys[n - 1][0]) return keys[n - 1][k];
  let i = 0;
  while (t > keys[i + 1][0]) i++;
  const p0 = keys[Math.max(0, i - 1)][k];
  const p1 = keys[i][k];
  const p2 = keys[i + 1][k];
  const p3 = keys[Math.min(n - 1, i + 2)][k];
  const u = (t - keys[i][0]) / (keys[i + 1][0] - keys[i][0]);
  const u2 = u * u;
  const u3 = u2 * u;
  return 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
}

// ------------------------------------------------------------------ profiles

// t: 0 = crotch, 1 = top of the neck.  [t, half-width, half-depth, z offset]
const TORSO = [
  [0.0, 0.095, 0.075, 0.0],
  [0.07, 0.16, 0.108, -0.006],
  [0.15, 0.172, 0.114, -0.014],
  [0.24, 0.16, 0.104, -0.004],
  [0.33, 0.146, 0.097, 0.008],
  [0.43, 0.15, 0.1, 0.014],
  [0.53, 0.163, 0.106, 0.018],
  [0.63, 0.175, 0.11, 0.018],
  [0.72, 0.18, 0.106, 0.01],
  [0.79, 0.16, 0.096, 0.0],
  [0.84, 0.105, 0.08, -0.006],
  [0.885, 0.066, 0.062, 0.0],
  [0.94, 0.054, 0.054, 0.006],
  [1.0, 0.05, 0.05, 0.01],
];

function torsoRing(L, t) {
  const P = L.P;
  const neckness = smoothstep(0.82, 0.9, t);
  const sw = lerp(P.tw, Math.sqrt(P.tw), neckness);
  const sd = lerp(P.td, Math.sqrt(P.td), neckness);
  let rx = interp(TORSO, t, 1) * sw;
  let rz = interp(TORSO, t, 2) * sd;
  let z = interp(TORSO, t, 3) * sd;
  if (P.belly) {
    const b = gauss(t - 0.4, 0.15) * P.belly;
    rz += 0.05 * b;
    z += 0.055 * b;
    rx += 0.02 * b;
  }
  const y = lerp(L.crotchY, L.neckTopY, t);
  const pec = gauss(t - 0.64, 0.07);
  return {
    x: 0,
    y,
    z,
    rx,
    rz,
    n: 2.25,
    bulge: (c, s) => (s > 0 ? 0.012 * pec * s * s * P.td : -0.006 * gauss(t - 0.66, 0.08) * s * s), // pecs / shoulder blades
  };
}

// d: distance down the arm from the shoulder joint.
function armRing(L, s, d) {
  const { ua, fa } = L;
  let r;
  let xo = 0;
  if (d < 0) {
    r = lerp(0.026, 0.06, smoothstep(-0.065, 0, d));
    xo = -s * 0.025 * smoothstep(0, -0.065, d);
  } else if (d <= ua) {
    r = interp(
      [
        [0, 0.06],
        [0.2, 0.057],
        [0.5, 0.049],
        [0.83, 0.042],
        [1, 0.038],
      ],
      d / ua,
      1
    );
  } else {
    r = interp(
      [
        [0, 0.038],
        [0.17, 0.043],
        [0.48, 0.037],
        [1, 0.027],
      ],
      (d - ua) / fa,
      1
    );
  }
  r *= L.limb;
  return { x: s * L.shX + xo, y: L.shY - d, z: 0, rx: r, rz: r * 0.92, n: 2 };
}

function legRing(L, s, d) {
  const { kneeDrop: K, ankleDrop: A } = L;
  let r;
  let xo = 0;
  let z = 0;
  if (d < 0) {
    r = lerp(0.06, 0.093, smoothstep(-0.085, 0, d));
    xo = -s * 0.02 * smoothstep(0, -0.085, d);
  } else if (d <= K) {
    r = interp(
      [
        [0, 0.093],
        [0.25, 0.088],
        [0.6, 0.072],
        [0.88, 0.058],
        [1, 0.055],
      ],
      d / K,
      1
    );
  } else {
    const f = (d - K) / A;
    r = interp(
      [
        [0, 0.055],
        [0.2, 0.062],
        [0.45, 0.054],
        [0.75, 0.04],
        [1, 0.033],
      ],
      f,
      1
    );
    z = -0.012 * gauss(f - 0.22, 0.2); // calf
  }
  r *= Math.pow(L.limb, 0.9);
  return { x: s * L.legX + xo, y: L.hipJ - d, z, rx: r, rz: r * 1.04, n: 2 };
}

// ------------------------------------------------------------------ geometry builder

class GeoBuilder {
  constructor() {
    this.pos = [];
    this.uv = [];
    this.si = [];
    this.sw = [];
    this.idx = [[], [], []];
    this.seams = [];
  }
  get count() {
    return this.pos.length / 3;
  }
  vert(x, y, z, u, v, w) {
    this.pos.push(x, y, z);
    this.uv.push(u, v);
    const e = Object.entries(w || { 0: 1 })
      .map(([b, v2]) => [+b, v2])
      .filter((p) => p[1] > 0.001)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);
    const sum = e.reduce((a, p) => a + p[1], 0) || 1;
    for (let i = 0; i < 4; i++) {
      this.si.push(e[i] ? e[i][0] : 0);
      this.sw.push(e[i] ? e[i][1] / sum : 0);
    }
  }

  // A closed tube through rings sampled at `samples` (ordered top -> bottom).
  tube({ samples, seg, ring, weights, mat, cloth = 0.4, theta0 = -Math.PI / 2, flare }) {
    const base = this.count;
    const rings = samples.map((s) => ring(s));
    let maxC = 0;
    for (const r of rings) maxC = Math.max(maxC, Math.PI * (r.rx + r.rz));
    const tilesU = Math.max(1, Math.round(maxC / cloth));
    let vAcc = 0;
    for (let k = 0; k < rings.length; k++) {
      const R = rings[k];
      if (k > 0) vAcc += Math.abs(rings[k - 1].y - R.y);
      const f = flare ? flare(samples[k]) : 1;
      const e = 2 / (R.n || 2);
      for (let j = 0; j <= seg; j++) {
        const th = theta0 + (j / seg) * Math.PI * 2;
        const c = Math.cos(th);
        const sn = Math.sin(th);
        const ex = Math.sign(c) * Math.pow(Math.abs(c), e);
        const ez = Math.sign(sn) * Math.pow(Math.abs(sn), e);
        const x = R.x + ex * R.rx * f;
        const z = R.z + ez * R.rz * f + (R.bulge ? R.bulge(c, sn) : 0);
        this.vert(x, R.y, z, (j / seg) * tilesU, vAcc / cloth, weights ? weights(samples[k], x, R.y, z) : null);
      }
      this.seams.push([base + k * (seg + 1), base + k * (seg + 1) + seg]);
    }
    for (let k = 0; k < rings.length - 1; k++) {
      const m = mat((samples[k] + samples[k + 1]) / 2);
      for (let j = 0; j < seg; j++) {
        const a = base + k * (seg + 1) + j;
        const b = a + 1;
        const c = a + seg + 1;
        const d = c + 1;
        this.idx[m].push(a, b, c, b, d, c);
      }
    }
  }

  build(skinned = true) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    if (skinned) {
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(this.si, 4));
      g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(this.sw, 4));
    }
    const all = [];
    this.idx.forEach((list, m) => {
      if (!list.length) return;
      g.addGroup(all.length, list.length, m);
      all.push(...list);
    });
    g.setIndex(all);
    g.computeVertexNormals();
    // smooth the normals across each tube's texture seam
    const n = g.attributes.normal;
    for (const [a, b] of this.seams) {
      const x = n.getX(a) + n.getX(b);
      const y = n.getY(a) + n.getY(b);
      const z = n.getZ(a) + n.getZ(b);
      const l = Math.hypot(x, y, z) || 1;
      n.setXYZ(a, x / l, y / l, z / l);
      n.setXYZ(b, x / l, y / l, z / l);
    }
    g.computeBoundingSphere();
    return g;
  }
}

// Sample positions from a to b (a<b) with extra rings around clothing edges.
function sampling(a, b, step, edges = []) {
  const s = [];
  for (let v = a; v < b; v += step) s.push(v);
  s.push(b);
  for (const e of edges) if (e > a + 0.006 && e < b - 0.006) s.push(e - 0.012, e - 0.002, e + 0.002);
  return [...new Set(s.map((v) => Math.round(v * 10000) / 10000))].sort((p, q) => p - q);
}

// clothing layout -> where sleeves / trousers end
function clothing(L, outfit) {
  const sleeve = outfit.sleeves ? (outfit.longSleeves ? L.ua + L.fa - 0.035 : L.ua * 0.5) : -1;
  const trouser = outfit.longPants ? L.kneeDrop + L.ankleDrop + 1 : L.kneeDrop * 0.7;
  return { sleeve, trouser, belt: L.spineY + 0.02, key: `${sleeve.toFixed(3)}|${trouser.toFixed(3)}` };
}

function addArm(gb, L, side, s, C, d0, d1, skinned) {
  const ds = sampling(d0, d1, 0.02, [C.sleeve]);
  gb.tube({
    samples: ds,
    seg: 16,
    theta0: s > 0 ? Math.PI : 0, // seam on the inner side
    ring: (d) => armRing(L, s, d),
    flare: (d) => (C.sleeve > 0 && d <= C.sleeve && d > C.sleeve - 0.014 ? 1.13 : 1),
    weights: skinned
      ? (d) => {
          const shw = smoothstep(-0.06, 0.03, d);
          const elw = smoothstep(L.ua - 0.035, L.ua + 0.035, d);
          return { [SPINE]: 1 - shw, [SH[side]]: shw * (1 - elw), [EL[side]]: shw * elw };
        }
      : null,
    mat: (d) => (d <= C.sleeve ? 0 : 2),
    cloth: 0.3,
  });
}

function addLeg(gb, L, side, s, C, d0, d1, skinned) {
  const ds = sampling(d0, d1, 0.025, [C.trouser]);
  gb.tube({
    samples: ds,
    seg: 18,
    theta0: s > 0 ? Math.PI : 0,
    ring: (d) => legRing(L, s, d),
    flare: (d) => (d <= C.trouser && d > C.trouser - 0.014 ? 1.12 : 1),
    weights: skinned
      ? (d) => {
          const hw = smoothstep(-0.08, 0.03, d);
          const kw = smoothstep(L.kneeDrop - 0.035, L.kneeDrop + 0.035, d);
          return { [HIPS]: 1 - hw, [HIP[side]]: hw * (1 - kw), [KN[side]]: hw * kw };
        }
      : null,
    mat: (d) => (d <= C.trouser ? 1 : 2),
    cloth: 0.35,
  });
}

function bodyGeometry(L, C) {
  const gb = new GeoBuilder();
  // torso (sampled top -> bottom)
  const span = L.neckTopY - L.crotchY;
  const beltT = (C.belt - L.crotchY) / span;
  const neckT = (L.neckY - 0.02 - L.crotchY) / span;
  const ts = sampling(0, 1, 1 / 34, [beltT]).reverse();
  gb.tube({
    samples: ts,
    seg: 28,
    ring: (t) => torsoRing(L, t),
    flare: (t) => (t > beltT - 0.03 && t < beltT + 0.012 ? 1.035 : 1),
    weights: (t, x, y) => {
      const spw = smoothstep(L.spineY - 0.05, L.spineY + 0.07, y);
      const nw = smoothstep(L.neckY - 0.035, L.neckY + 0.03, y);
      const w = { [HIPS]: 1 - spw, [SPINE]: spw * (1 - nw), [NECK]: spw * nw };
      // shoulders follow the arms a little
      const sw = 0.4 * smoothstep(L.chestW * 0.55, L.chestW, Math.abs(x)) * gauss(y - L.shY, 0.07);
      if (sw > 0.01) {
        for (const k in w) w[k] *= 1 - sw;
        w[x < 0 ? SH.L : SH.R] = sw;
      }
      return w;
    },
    mat: (t) => (t > neckT ? 2 : t > beltT ? 0 : 1),
    cloth: 0.38,
  });
  for (const [side, s] of SIDES) {
    addArm(gb, L, side, s, C, -0.065, L.ua + L.fa, true);
    addLeg(gb, L, side, s, C, -0.085, L.kneeDrop + L.ankleDrop, true);
  }
  return gb.build(true);
}

// Push a unit-sphere direction out to a sculpted head surface (head space).
function sculpt(x, y, z, S, zombie) {
  let px = x * S.w;
  let py = y * S.h;
  let pz = z * S.d;
  const low = smoothstep(0.15, -0.95, y);
  px *= 1 - 0.36 * low; // jaw narrows to the chin
  if (z < 0) pz *= 1 - 0.25 * low; // back of the skull tucks into the neck
  if (z < 0 && y > -0.1) pz *= 1.07; // occipital bulge
  const f = smoothstep(0.3, 0.85, z);
  if (f > 0) {
    let push = 0;
    push -= (zombie ? 0.016 : 0.011) * (gauss2(x + 0.34, y - 0.14, 0.16, 0.11) + gauss2(x - 0.34, y - 0.14, 0.16, 0.11)); // eye sockets
    push += 0.01 * gauss(y - 0.29, 0.07) * gauss(x, 0.55); // brow ridge
    push += 0.024 * gauss(x, 0.1) * smoothstep(0.24, 0.02, y) * smoothstep(-0.26, -0.1, y); // nose
    push += 0.008 * (gauss2(x + 0.5, y + 0.06, 0.16, 0.12) + gauss2(x - 0.5, y + 0.06, 0.16, 0.12)); // cheekbones
    push -= (zombie ? 0.009 : 0.003) * (gauss2(x + 0.45, y + 0.3, 0.14, 0.14) + gauss2(x - 0.45, y + 0.3, 0.14, 0.14)); // hollow cheeks
    push -= 0.005 * gauss2(x, y + 0.42, 0.3, 0.04); // mouth line
    push += 0.004 * gauss2(x, y + 0.48, 0.22, 0.05); // lower lip
    push += 0.009 * gauss2(x, y + 0.78, 0.26, 0.12); // chin
    pz += push * f;
  }
  return [px, py, pz];
}

function headGeometry(L, zombie) {
  // phiStart = -PI/2 puts the sphere's seam at the back of the head and the
  // face at u = 0.5 (see textures.js head painters)
  const g = new THREE.SphereGeometry(1, 64, 48, -Math.PI / 2);
  const pos = g.attributes.position;
  const n = pos.count;
  const si = new Uint16Array(n * 4);
  const sw = new Float32Array(n * 4);
  const C = L.headC;
  for (let i = 0; i < n; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const [px, py, pz] = sculpt(x, y, z, L.S, zombie);
    pos.setXYZ(i, C.x + px, C.y + py, C.z + pz);
    const jw = smoothstep(-0.36, -0.52, y) * smoothstep(-0.55, 0.1, z);
    si[i * 4] = HEAD;
    si[i * 4 + 1] = JAW;
    sw[i * 4] = 1 - jw;
    sw[i * 4 + 1] = jw;
  }
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}

// Small rigid parts would otherwise squeeze a whole texture tile into a few
// centimetres, which makes the bump mapping far too strong.
function scaleUV(geo, k) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * k, uv.getY(i) * k);
  return geo;
}

function placed(geo, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  return geo.applyMatrix4(m);
}

// Claw-like hand in elbow-bone space (wrist at y = -fa).
function handGeometry(L, s) {
  const k = L.limb;
  const w = -L.fa;
  const parts = [placed(new THREE.SphereGeometry(1, 12, 10), 0, w - 0.045 * k, 0.004, 0, 0, 0, 0.04 * k, 0.05 * k, 0.021 * k)];
  for (let i = 0; i < 4; i++) {
    const fx = (-0.026 + i * 0.0175) * k;
    const len = [0.026, 0.03, 0.029, 0.023][i] * k;
    const c1 = 0.4 + i * 0.05;
    const c2 = 0.9;
    let px = fx;
    let py = w - 0.088 * k;
    let pz = 0.004;
    for (const [c, l] of [
      [c1, len],
      [c1 + c2, len * 0.85],
    ]) {
      const dy = -Math.cos(c) * l;
      const dz = -Math.sin(c) * l;
      parts.push(placed(new THREE.CapsuleGeometry(0.0082 * k, l, 3, 6), px, py + dy / 2, pz + dz / 2, c));
      py += dy;
      pz += dz;
    }
  }
  // thumb
  parts.push(placed(new THREE.CapsuleGeometry(0.009 * k, 0.03 * k, 3, 6), -s * 0.032 * k, w - 0.05 * k, -0.012, 0.5, 0, s * 0.5));
  return scaleUV(mergeGeometries(parts.map((p) => p.toNonIndexed())), 0.25);
}

// Shoe (or bare foot) in knee-bone space (ankle at y = -ankleDrop).
function footGeometry(L, bare) {
  const k = Math.pow(L.limb, 0.7);
  const a = -L.ankleDrop;
  if (bare) {
    return scaleUV(mergeGeometries([
      placed(new THREE.CapsuleGeometry(0.034 * k, 0.15, 4, 10), 0, a - 0.05, 0.05, Math.PI / 2, 0, 0, 1, 0.75, 1).toNonIndexed(),
      placed(new THREE.SphereGeometry(0.036 * k, 10, 8), 0, a - 0.035, -0.01).toNonIndexed(),
    ]), 0.35);
  }
  return mergeGeometries([
    placed(new THREE.CapsuleGeometry(0.042 * k, 0.16, 4, 10), 0, a - 0.048, 0.05, Math.PI / 2, 0, 0, 1.05, 0.72, 1).toNonIndexed(),
    placed(new THREE.BoxGeometry(0.088 * k, 0.018, 0.26), 0, a - 0.072, 0.05).toNonIndexed(),
    placed(new THREE.CylinderGeometry(0.04 * k, 0.045 * k, 0.07, 12), 0, a - 0.03, -0.005).toNonIndexed(),
  ]);
}

// A limb on its own (bind pose, joint at the origin) for severed-limb debris.
function limbGeometry(L, side, kind, C) {
  const s = side === 'L' ? -1 : 1;
  const gb = new GeoBuilder();
  const isArm = kind === 'arm' || kind === 'upperArm' || kind === 'foreArm';
  let d0;
  let d1;
  if (kind === 'arm') [d0, d1] = [0.0, L.ua + L.fa];
  else if (kind === 'upperArm') [d0, d1] = [0.0, L.ua + 0.01];
  else if (kind === 'foreArm') [d0, d1] = [L.ua - 0.01, L.ua + L.fa];
  else if (kind === 'leg') [d0, d1] = [0.0, L.kneeDrop + L.ankleDrop];
  else if (kind === 'thigh') [d0, d1] = [0.0, L.kneeDrop + 0.01];
  else [d0, d1] = [L.kneeDrop - 0.01, L.kneeDrop + L.ankleDrop];
  if (isArm) addArm(gb, L, side, s, C, d0, d1, false);
  else addLeg(gb, L, side, s, C, d0, d1, false);
  const g = gb.build(false);
  const top = isArm ? armRing(L, s, d0) : legRing(L, s, d0);
  g.translate(-top.x, -top.y, -top.z);
  return { geo: g, r: top.rx, len: d1 - d0 };
}

// ------------------------------------------------------------------ materials

const matCache = new Map();
export function charMat(tex, rough = 0.8, o = {}) {
  const key = tex.uuid + rough + (o.emissive || '');
  if (!matCache.has(key)) {
    const m = new THREE.MeshStandardMaterial({ map: tex, roughness: rough, metalness: 0, bumpMap: tex, bumpScale: 1.4 });
    matCache.set(key, m);
  }
  return matCache.get(key);
}
export function colorMat(hex, rough = 0.6, metal = 0, emissive = 0x000000, ei = 1) {
  const key = 'col' + hex + rough + metal + emissive + ei;
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshStandardMaterial({ color: hex, roughness: rough, metalness: metal, emissive, emissiveIntensity: ei }));
  return matCache.get(key);
}
const eyeMat = (hex) => {
  const key = 'eye' + hex;
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(3) }));
  return matCache.get(key);
};

export const FLASH_MAT = new THREE.MeshBasicMaterial({ color: 0xffffff });
export const RED_MAT = new THREE.MeshStandardMaterial({ color: 0x400000, emissive: 0xff1a00, emissiveIntensity: 2.2, roughness: 0.5 });
const HITBOX_MAT = new THREE.MeshBasicMaterial({ visible: false });

// ------------------------------------------------------------------ caches

const geoCache = new Map();
function cachedGeo(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}

// ------------------------------------------------------------------ rig

/**
 * Build a humanoid.
 * outfit: { head, skin, shirt, pants, shoes, sleeves, longSleeves, longPants, barefoot, eyes, human }
 * The model faces +Z with its feet at y = 0.
 */
export function buildRig(outfit, owner, buildName = 'normal') {
  const L = layout(buildName);
  const C = clothing(L, outfit);
  const zombie = !outfit.human;
  const key = `${buildName}|${C.key}`;
  const bodyGeo = cachedGeo('body|' + key, () => bodyGeometry(L, C));
  const headGeo = cachedGeo(`head|${buildName}|${zombie}`, () => headGeometry(L, zombie));

  // skeleton
  const bone = (parent, x, y, z) => {
    const b = new THREE.Bone();
    b.position.set(x, y, z);
    if (parent) parent.add(b);
    return b;
  };
  const hips = bone(null, 0, L.hipY, 0);
  const spine = bone(hips, 0, 0.06, 0);
  const neck = bone(spine, 0, L.tH, 0);
  const head = bone(neck, 0, 0.085, 0);
  const jawPos = L.headC.clone().add(new THREE.Vector3(0, -0.32 * L.S.h, -0.25 * L.S.d));
  const jaw = bone(head, 0, jawPos.y - L.headY, jawPos.z);
  const bones = [hips, spine, neck, head, jaw];
  const arms = {};
  const legs = {};
  for (const [side, s] of SIDES) {
    const sh = bone(spine, s * L.shX, L.shY - L.spineY, 0);
    const el = bone(sh, 0, -L.ua, 0);
    arms[side] = { shoulder: sh, elbow: el, name: 'arm' + side };
  }
  for (const [side, s] of SIDES) {
    const hp = bone(hips, s * L.legX, -0.06, 0);
    const kn = bone(hp, 0, -L.kneeDrop, 0);
    legs[side] = { hip: hp, knee: kn, name: 'leg' + side };
  }
  bones.push(arms.L.shoulder, arms.L.elbow, arms.R.shoulder, arms.R.elbow, legs.L.hip, legs.L.knee, legs.R.hip, legs.R.knee);

  const root = new THREE.Group();
  root.add(hips);
  const meshes = [];
  const mats = { shirt: outfit.shirt, pants: outfit.pants, skin: outfit.skin, shoes: outfit.shoes || colorMat(0x16120e, 0.55), head: outfit.head };
  const visual = (m, base) => {
    m.castShadow = true;
    m.receiveShadow = true;
    m.userData.ent = owner;
    m.userData.part = 'visual';
    m.userData.base = base;
    meshes.push(m);
    return m;
  };

  const body = visual(new THREE.SkinnedMesh(bodyGeo, [mats.shirt, mats.pants, mats.skin]), [mats.shirt, mats.pants, mats.skin]);
  const headMesh = visual(new THREE.SkinnedMesh(headGeo, mats.head), mats.head);
  body.frustumCulled = false;
  headMesh.frustumCulled = false;
  root.add(body, headMesh);

  // rigid parts
  const hc = new THREE.Vector3(0, L.headC.y - L.headY, L.headC.z); // head centre in head-bone space
  for (const [side, s] of SIDES) {
    const hand = visual(new THREE.Mesh(cachedGeo(`hand|${buildName}|${side}`, () => handGeometry(L, s)), mats.skin), mats.skin);
    arms[side].elbow.add(hand);
    arms[side].hand = hand;
    const foot = visual(new THREE.Mesh(cachedGeo(`foot|${buildName}|${!!outfit.barefoot}`, () => footGeometry(L, outfit.barefoot)), outfit.barefoot ? mats.skin : mats.shoes), outfit.barefoot ? mats.skin : mats.shoes);
    legs[side].knee.add(foot);
    const ear = visual(new THREE.Mesh(cachedGeo('ear', () => scaleUV(new THREE.SphereGeometry(0.028, 10, 8), 0.2)), mats.skin), mats.skin);
    ear.scale.set(0.32 * L.P.head, 1 * L.P.head, 0.62 * L.P.head);
    ear.position.set(s * (L.S.w * 0.93), hc.y + 0.004, hc.z - 0.012);
    ear.rotation.y = s * 0.35;
    head.add(ear);
  }
  const eyes = [];
  if (outfit.eyes) {
    for (const s of [-1, 1]) {
      const d = new THREE.Vector3(s * 0.34, 0.14, 0.93).normalize();
      const [px, py, pz] = sculpt(d.x, d.y, d.z, L.S, zombie);
      const e = new THREE.Mesh(cachedGeo('eye', () => new THREE.SphereGeometry(0.0115, 10, 8)), eyeMat(outfit.eyes));
      e.position.set(hc.x + px * 0.97, hc.y + py, hc.z + pz - 0.009);
      head.add(e);
      eyes.push(e);
    }
  }
  const headTarget = new THREE.Object3D();
  headTarget.position.copy(hc);
  head.add(headTarget);

  // invisible hitboxes (the only things bullets can hit)
  const hitboxes = [];
  const hb = (parent, geo, part, x, y, z, sx = 1, sy = 1, sz = 1) => {
    const m = new THREE.Mesh(geo, HITBOX_MAT);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    m.userData.ent = owner;
    m.userData.part = part;
    m.layers.enable(1);
    parent.add(m);
    hitboxes.push(m);
    return m;
  };
  const capG = (r, len) => cachedGeo(`cap${r.toFixed(3)}:${len.toFixed(3)}`, () => new THREE.CapsuleGeometry(r, Math.max(0.01, len), 2, 8));
  hb(head, cachedGeo('hbHead', () => new THREE.SphereGeometry(1, 10, 8)), 'head', hc.x, hc.y, hc.z, L.S.w * 1.25, L.S.h * 1.08, L.S.d * 1.15);
  hb(spine, capG(L.chestW * 0.95, L.tH - 0.12), 'torso', 0, L.tH * 0.45, 0.01, 1, 1, (L.chestD / L.chestW) * 1.3);
  hb(hips, capG(0.12 * L.P.tw, 0.04), 'torso', 0, -0.04, 0, 1.3, 1, 0.9);
  for (const [side] of SIDES) {
    hb(arms[side].shoulder, capG(0.062 * L.limb, L.ua - 0.08), 'arm' + side, 0, -L.ua / 2, 0);
    hb(arms[side].elbow, capG(0.056 * L.limb, L.fa + 0.02), 'forearm' + side, 0, -(L.fa + 0.1) / 2, 0);
    hb(legs[side].hip, capG(0.092 * L.limb, L.kneeDrop - 0.12), 'leg' + side, 0, -L.kneeDrop / 2, 0);
    hb(legs[side].knee, capG(0.068 * L.limb, L.ankleDrop - 0.06), 'shin' + side, 0, -L.ankleDrop / 2 - 0.02, 0.01);
  }

  root.updateMatrixWorld(true);
  const skeleton = new THREE.Skeleton(bones);
  body.bind(skeleton);
  headMesh.bind(skeleton);

  const rig = {
    root,
    hips,
    torso: spine,
    neck,
    head,
    headTarget,
    jaw,
    jawScale: 0.38,
    eyes,
    arms,
    legs,
    meshes,
    hitboxes,
    body,
    headMesh,
    mats,
    B: L,
    makeDebris: (kind, side) => makeDebris(L, C, key, buildName, mats, outfit, kind, side),
    makeHead: () => {
      const g = new THREE.Group();
      const m = new THREE.Mesh(headGeo, mats.head);
      m.position.copy(L.headC).negate();
      m.castShadow = true;
      g.add(m);
      return g;
    },
  };
  return rig;
}

// Collapse a bone (and everything below it) to hide a severed part.
export function collapseBone(b) {
  b.scale.setScalar(0.0001);
  b.traverse((o) => {
    if (o.isMesh) o.layers.disable(1);
  });
}

// Bloody stump with a bit of bone, placed where a severed bone used to attach.
export function addStump(bone, radius) {
  const g = new THREE.Group();
  const flesh = new THREE.Mesh(cachedGeo('stump', () => new THREE.SphereGeometry(1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.6)), charMat(T.flesh(), 0.3));
  flesh.scale.set(radius, radius * 0.7, radius);
  flesh.rotation.x = Math.PI;
  const b = new THREE.Mesh(cachedGeo('boneStub', () => new THREE.CylinderGeometry(0.011, 0.014, 0.05, 8)), colorMat(0xdcd0b4, 0.5));
  b.position.y = -0.02;
  g.add(flesh, b);
  g.traverse((o) => o.isMesh && (o.castShadow = true));
  g.position.copy(bone.position);
  bone.parent.add(g);
  return g;
}

function makeDebris(L, C, key, buildName, mats, outfit, kind, side) {
  const { geo, r, len } = cachedGeo(`limb|${key}|${kind}|${side}`, () => limbGeometry(L, side, kind, C));
  const g = new THREE.Group();
  const limb = new THREE.Mesh(geo, [mats.shirt, mats.pants, mats.skin]);
  g.add(limb);
  // the cut end: raw flesh and bone
  const cap = new THREE.Mesh(cachedGeo('cutCap', () => new THREE.CircleGeometry(1, 14)), charMat(T.flesh(), 0.3));
  cap.rotation.x = -Math.PI / 2;
  cap.scale.setScalar(r * 0.98);
  cap.position.y = -0.001;
  g.add(cap);
  const bn = new THREE.Mesh(cachedGeo('boneStub', () => new THREE.CylinderGeometry(0.011, 0.014, 0.05, 8)), colorMat(0xdcd0b4, 0.5));
  bn.position.y = 0.015;
  g.add(bn);
  const s = side === 'L' ? -1 : 1;
  if (kind === 'arm' || kind === 'foreArm') {
    const hand = new THREE.Mesh(cachedGeo(`hand|${buildName}|${side}`, () => handGeometry(L, s)), mats.skin);
    hand.position.y = -len + L.fa;
    g.add(hand);
  }
  if (kind === 'leg' || kind === 'shin') {
    const foot = new THREE.Mesh(cachedGeo(`foot|${buildName}|${!!outfit.barefoot}`, () => footGeometry(L, outfit.barefoot)), outfit.barefoot ? mats.skin : mats.shoes);
    foot.position.y = -len + L.ankleDrop;
    g.add(foot);
  }
  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.userData.base = o.material;
    }
  });
  return g;
}

// ------------------------------------------------------------------ outfits

const HAIR = ['#1a1410', '#3a2a1a', '#5a4630', '#6e6e6e', '#2a1a10', '#8a6a3a'];

export function zombieOutfit(theme, type) {
  const sv = randi(0, 4);
  const hair = chance(0.75) ? pick(HAIR) : null;
  const o = {
    skin: charMat(T.skin(sv), 0.48),
    head: charMat(T.zombieHead(sv, hair), 0.5),
    sleeves: chance(0.85),
    longSleeves: chance(0.35),
    longPants: true,
    eyes: theme === 'lab' ? '#7aff9a' : theme === 'hospital' ? '#cfe8ff' : '#ffd27a',
  };
  if (type === 'runner' || type === 'leaper') o.eyes = '#ff3a1a';
  if (type === 'brute') o.eyes = '#ff8a1a';
  const cloth = (c, k, b = 0.7) => charMat(T.cloth(c, k, b), 0.85);
  if (theme === 'hospital') {
    const r = Math.random();
    if (r < 0.6) {
      o.shirt = cloth(pick(['#8fb0c0', '#a3b8a0', '#b0b0c0']), 'gown', 0.9);
      o.pants = o.shirt;
      o.sleeves = true;
      o.longSleeves = false;
      o.longPants = false;
      o.barefoot = true;
    } else if (r < 0.85) {
      o.shirt = cloth(pick(['#3e7a78', '#4a6a8a']), 'shirt', 0.8);
      o.pants = o.shirt;
    } else {
      o.shirt = cloth('#c8c8c0', 'shirt', 1);
      o.pants = cloth('#2a2a30', 'denim', 0.3);
      o.longSleeves = true;
    }
  } else if (theme === 'lab') {
    const r = Math.random();
    if (r < 0.45) {
      o.shirt = cloth('#c9c9c2', 'shirt', 0.9);
      o.pants = cloth('#3a3a40', 'denim', 0.4);
      o.sleeves = true;
      o.longSleeves = true;
    } else if (r < 0.75) {
      o.shirt = cloth('#b89a20', 'hazmat', 0.6);
      o.pants = o.shirt;
      o.sleeves = true;
      o.longSleeves = true;
    } else {
      o.shirt = cloth('#2a2e36', 'uniform', 0.6);
      o.pants = cloth('#22252b', 'denim', 0.3);
    }
  } else {
    o.shirt = cloth(pick(['#4a5a6a', '#7a2a2a', '#2a3a2a', '#8a7a5a', '#5a5a5a', '#6a4a2a']), pick(['shirt', 'plaid', 'shirt']), 0.7);
    if (chance(0.15)) o.shirt = cloth('#1e2a44', 'uniform', 0.6);
    o.pants = cloth(pick(['#2a3550', '#3a3226', '#222222', '#4a4030']), 'denim', 0.4);
  }
  return o;
}

export function survivorOutfit() {
  const sv = randi(0, 3);
  const hair = pick(HAIR);
  return {
    human: true,
    skin: charMat(T.humanSkin(sv), 0.6),
    head: charMat(T.humanHead(sv, hair), 0.6),
    shirt: charMat(T.cloth(pick(['#b03a2a', '#2a6a9a', '#d0a040', '#e0e0d8', '#5a8a4a']), 'shirt', 0.15), 0.85),
    pants: charMat(T.cloth(pick(['#2a3550', '#5a4a3a', '#1a1a1a']), 'denim', 0), 0.85),
    sleeves: true,
    longSleeves: chance(0.5),
    longPants: true,
    eyes: null,
  };
}

// Swap all visual meshes to an override material (hit flash / attack warning) or back.
export function setRigMat(rig, mat) {
  for (const m of rig.meshes) {
    const base = m.userData.base;
    if (!base) continue;
    const target = mat || base;
    if (m.material !== target) m.material = target;
  }
}
