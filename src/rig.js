// Humanoid character rig built from smooth primitives (capsules / spheres),
// arranged as a joint hierarchy so it can be animated procedurally.
import * as THREE from 'three';
import { T } from './textures.js';
import { rand, randi, pick, chance } from './util.js';

const geoCache = new Map();
function cached(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}
const cap = (r, len, seg = 12) => cached(`c${r}:${len}:${seg}`, () => new THREE.CapsuleGeometry(r, len, 5, seg));
const sph = (r, ws = 18, hs = 14) => cached(`s${r}:${ws}:${hs}`, () => new THREE.SphereGeometry(r, ws, hs));
const box = (w, h, d) => cached(`b${w}:${h}:${d}`, () => new THREE.BoxGeometry(w, h, d, 1, 1, 1));

const matCache = new Map();
export function charMat(tex, rough = 0.8, o = {}) {
  const key = tex.uuid + rough + (o.emissive || '');
  if (!matCache.has(key)) {
    const m = new THREE.MeshStandardMaterial({ map: tex, roughness: rough, metalness: 0, bumpMap: tex, bumpScale: 1.2 });
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

export const BUILDS = {
  normal: { hipY: 0.98, pr: 0.13, pw: 0.36, tr: 0.19, tl: 0.14, tsx: 1.12, tsz: 0.66, hr: 0.13, ar: 0.055, ua: 0.29, fa: 0.28, lr: 0.075, th: 0.42, sh: 0.42 },
  thin: { hipY: 0.98, pr: 0.11, pw: 0.3, tr: 0.16, tl: 0.18, tsx: 1.08, tsz: 0.62, hr: 0.12, ar: 0.045, ua: 0.31, fa: 0.3, lr: 0.062, th: 0.42, sh: 0.42 },
  fat: { hipY: 0.9, pr: 0.2, pw: 0.5, tr: 0.31, tl: 0.06, tsx: 1.08, tsz: 0.82, hr: 0.14, ar: 0.085, ua: 0.31, fa: 0.29, lr: 0.1, th: 0.38, sh: 0.38 },
};

function part(geo, mat, x, y, z, partName, owner, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  m.userData.ent = owner;
  m.userData.part = partName;
  m.userData.base = mat;
  m.layers.enable(1);
  return m;
}

/**
 * Build a humanoid.
 * outfit: { head, skin, shirt, pants, shoes, sleeves, longPants, eyes }
 * Returns joints + a list of meshes. The model faces +Z.
 */
export function buildRig(outfit, owner, buildName = 'normal') {
  const B = BUILDS[buildName];
  const root = new THREE.Group();
  const meshes = [];
  const add = (parent, m) => {
    parent.add(m);
    meshes.push(m);
    return m;
  };
  const skin = outfit.skin;
  const shirt = outfit.shirt;
  const pants = outfit.pants;
  const shoes = outfit.shoes || colorMat(0x151210, 0.7);

  const hips = new THREE.Group();
  hips.position.y = B.hipY;
  root.add(hips);
  add(hips, part(cap(B.pr, Math.max(0.01, B.pw - B.pr * 2)), pants, 0, 0, 0, 'torso', owner, 1, 1, 0.8)).rotation.z = Math.PI / 2;

  const torso = new THREE.Group();
  torso.position.y = 0.06;
  hips.add(torso);
  const tH = B.tl + B.tr * 2;
  add(torso, part(cap(B.tr, B.tl), shirt, 0, tH / 2, 0, 'torso', owner, B.tsx, 1, B.tsz));
  if (outfit.belly) add(torso, part(sph(B.tr * 0.9), shirt, 0, tH * 0.32, B.tr * 0.35, 'torso', owner, 1.1, 0.9, 0.9));

  const neck = new THREE.Group();
  neck.position.y = tH - 0.04;
  torso.add(neck);
  add(neck, part(cap(B.hr * 0.38, 0.06, 8), skin, 0, 0.04, 0, 'head', owner));
  const head = part(sph(B.hr), outfit.head, 0, B.hr * 1.05 + 0.05, 0, 'head', owner, 0.86, 1.06, 0.96);
  head.rotation.y = 0;
  add(neck, head);
  // brow ridge + nose give the sphere a face silhouette
  add(head, part(box(B.hr * 1.2, B.hr * 0.2, B.hr * 0.3), skin, 0, B.hr * 0.33, B.hr * 0.8, 'head', owner));
  add(head, part(box(B.hr * 0.18, B.hr * 0.32, B.hr * 0.25), skin, 0, B.hr * 0.05, B.hr * 0.98, 'head', owner));
  const jaw = new THREE.Group();
  jaw.position.set(0, -B.hr * 0.45, B.hr * 0.25);
  head.add(jaw);
  add(jaw, part(sph(B.hr * 0.55, 12, 8), skin, 0, -B.hr * 0.12, B.hr * 0.2, 'head', owner, 1.25, 0.6, 1.1));
  const eyes = [];
  if (outfit.eyes) {
    for (const s of [-1, 1]) {
      const e = new THREE.Mesh(sph(B.hr * 0.13, 8, 6), eyeMat(outfit.eyes));
      e.position.set(s * B.hr * 0.4, B.hr * 0.2, B.hr * 0.86);
      e.userData.ent = owner;
      e.userData.part = 'head';
      e.layers.enable(1);
      head.add(e);
      eyes.push(e);
      meshes.push(e);
    }
  }

  const arms = {};
  for (const [side, s] of [
    ['L', -1],
    ['R', 1],
  ]) {
    const name = 'arm' + side;
    const shoulder = new THREE.Group();
    shoulder.position.set(s * (B.tr * B.tsx * 0.92 + B.ar * 0.6), tH - B.tr * 0.55, 0);
    torso.add(shoulder);
    add(shoulder, part(sph(B.ar * 1.35, 10, 8), outfit.sleeves ? shirt : skin, 0, 0, 0, name, owner));
    add(shoulder, part(cap(B.ar, B.ua - B.ar * 2), outfit.sleeves ? shirt : skin, 0, -B.ua / 2, 0, name, owner));
    const elbow = new THREE.Group();
    elbow.position.y = -B.ua;
    shoulder.add(elbow);
    add(elbow, part(cap(B.ar * 0.86, B.fa - B.ar * 1.7), outfit.longSleeves ? shirt : skin, 0, -B.fa / 2, 0, name, owner));
    const hand = part(sph(B.ar * 1.05, 10, 8), skin, 0, -B.fa - B.ar * 0.5, 0.01, name, owner, 0.85, 1.35, 0.6);
    add(elbow, hand);
    // claw-like fingers
    for (let f = -1; f <= 1; f++) add(elbow, part(cap(B.ar * 0.22, B.ar * 0.9, 5), skin, f * B.ar * 0.35, -B.fa - B.ar * 1.5, 0.02, name, owner));
    arms[side] = { shoulder, elbow, hand, name };
  }

  const legs = {};
  for (const [side, s] of [
    ['L', -1],
    ['R', 1],
  ]) {
    const name = 'leg' + side;
    const hip = new THREE.Group();
    hip.position.set(s * B.pw * 0.27, -0.06, 0);
    hips.add(hip);
    add(hip, part(cap(B.lr, B.th - B.lr * 2), pants, 0, -B.th / 2, 0, name, owner, 1, 1, 1.05));
    const knee = new THREE.Group();
    knee.position.y = -B.th;
    hip.add(knee);
    add(knee, part(cap(B.lr * 0.84, B.sh - B.lr * 1.7), outfit.longPants ? pants : skin, 0, -B.sh / 2, 0, name, owner));
    add(knee, part(box(B.lr * 1.5, 0.08, B.lr * 3.0), outfit.barefoot ? skin : shoes, 0, -B.sh - 0.02, 0.05, name, owner));
    legs[side] = { hip, knee, name };
  }

  return { root, hips, torso, neck, head, jaw, eyes, arms, legs, meshes, B };
}

// ------------------------------------------------------------------ outfits

const HAIR = ['#1a1410', '#3a2a1a', '#5a4630', '#6e6e6e', '#2a1a10', '#8a6a3a'];

export function zombieOutfit(theme, type) {
  const sv = randi(0, 4);
  const hair = chance(0.7) ? pick(HAIR) : null;
  const o = {
    skin: charMat(T.skin(sv), 0.5),
    head: charMat(T.zombieHead(sv, hair), 0.5),
    sleeves: true,
    longSleeves: chance(0.3),
    longPants: true,
    eyes: theme === 'lab' ? '#7aff9a' : theme === 'hospital' ? '#cfe8ff' : '#ffd27a',
  };
  if (type === 'runner' || type === 'leaper') o.eyes = '#ff3a1a';
  if (type === 'brute') {
    o.eyes = '#ff8a1a';
    o.belly = true;
  }
  const cloth = (c, k, b = 0.7) => charMat(T.cloth(c, k, b), 0.85);
  if (theme === 'hospital') {
    const r = Math.random();
    if (r < 0.6) {
      o.shirt = cloth(pick(['#8fb0c0', '#a3b8a0', '#b0b0c0']), 'gown', 0.9);
      o.pants = o.shirt;
      o.sleeves = false;
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
      o.longSleeves = true;
    } else if (r < 0.75) {
      o.shirt = cloth('#b89a20', 'hazmat', 0.6);
      o.pants = o.shirt;
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

// Swap all meshes to an override material (hit flash / attack warning) or back.
export function setRigMat(rig, mat) {
  for (const m of rig.meshes) {
    if (m.userData.part === undefined) continue;
    const target = mat || m.userData.base;
    if (m.material !== target && m.userData.base) m.material = target;
  }
}
