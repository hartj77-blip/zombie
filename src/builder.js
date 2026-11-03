// Level construction helpers: materials, world-UV boxes, batching and props.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { T } from './textures.js';
import { rand, randi, pick, chance } from './util.js';

// ------------------------------------------------------------------ materials

let MATS = null;
function std(map, scale = 2, o = {}) {
  const m = new THREE.MeshStandardMaterial({
    map,
    color: o.color ?? 0xffffff,
    roughness: o.rough ?? 0.9,
    metalness: o.metal ?? 0.0,
    emissive: o.emissive ?? 0x000000,
    emissiveIntensity: o.ei ?? 1,
    emissiveMap: o.emissiveMap ?? null,
    transparent: o.transparent ?? false,
    opacity: o.opacity ?? 1,
    side: o.side ?? THREE.FrontSide,
  });
  m.userData.scale = scale;
  if (o.depthWrite === false) m.depthWrite = false;
  // Re-use the colour map as a bump map: darker grout/mortar/cracks read as recessed.
  if (o.bump && map) {
    m.bumpMap = map;
    m.bumpScale = o.bump;
  }
  return m;
}
const flat = (color, o = {}) => std(null, 1, { color, ...o });
const glow = (color, ei = 2) => std(null, 1, { color: 0x000000, emissive: color, ei, rough: 1 });

export function mats() {
  if (MATS) return MATS;
  const fac = (v) => {
    const f = T.facade(v);
    return std(f.map, 6, { emissive: 0xffffff, emissiveMap: f.emissive, ei: 0.55, bump: 1.5 });
  };
  MATS = {
    asphalt: std(T.asphalt(), 5, { rough: 0.38, bump: 2.5 }), // rain-slick road
    sidewalk: std(T.sidewalk(), 2, { rough: 0.55, bump: 2 }),
    brick: std(T.brick(), 3, { rough: 0.85, bump: 4 }),
    plaster: std(T.plaster(), 3, { bump: 1.5 }),
    wood: std(T.wood(), 1.5, { rough: 0.75, bump: 2 }),
    crate: std(T.crate(), 1, { rough: 0.8, bump: 3 }),
    metal: std(T.metal(), 1.5, { metal: 0.6, rough: 0.45, bump: 1.5 }),
    rust: std(T.rust(), 1.5, { metal: 0.4, rough: 0.7, bump: 3 }),
    hospFloor: std(T.hospFloor(), 4, { rough: 0.22, bump: 1.5 }), // polished linoleum
    hospWall: std(T.hospWall(), 3.2, { rough: 0.6, bump: 1 }),
    ceiling: std(T.ceiling(), 1.2, { bump: 1.5 }),
    plate: std(T.plate(), 1.5, { metal: 0.7, rough: 0.35, bump: 4 }),
    labWall: std(T.labWall(), 4, { metal: 0.5, rough: 0.4, bump: 2 }),
    hazard: std(T.hazard(), 1, { rough: 0.6, bump: 1 }),
    facade: [fac(0), fac(1), fac(2), fac(3)],
    concrete: std(T.sidewalk(), 4, { color: 0x9a9a9a }),
    darkMetal: flat(0x1e2226, { metal: 0.6, rough: 0.5 }),
    black: flat(0x0b0b0c, { rough: 0.6 }),
    glass: flat(0x0d1318, { metal: 0.8, rough: 0.05 }),
    white: flat(0xc8c6be, { rough: 0.6 }),
    offwhite: flat(0x9d9a90),
    green: flat(0x2f4a36),
    teal: flat(0x3e6f6c),
    red: flat(0x8a1a14, { rough: 0.5 }),
    yellow: flat(0xc79a14),
    blue: flat(0x1c2c52),
    chrome: flat(0x9aa2aa, { metal: 1.0, rough: 0.18 }),
    rubber: flat(0x111111, { rough: 1 }),
    curtain: flat(0x6f8f8a, { side: THREE.DoubleSide }),
    mattress: flat(0xb8b4a2),
    blanket: flat(0x55708a),
    lineWhite: flat(0xbdbdb2, { rough: 0.7 }),
    lineYellow: flat(0xb08a1a, { rough: 0.7 }),
    trash: flat(0x151515, { rough: 0.4 }),
    dirt: flat(0x2a2218),
    bark: flat(0x2b241e),
    lampWarm: glow(0xffc070, 3),
    lampCold: glow(0xd8f0ff, 3),
    lampRed: glow(0xff2a1a, 3),
    lampBlue: glow(0x2a55ff, 3),
    lampGreen: glow(0x50ff90, 2.5),
    screen: std(T.screen(), 1, { emissive: 0xffffff, emissiveMap: T.screen(), ei: 1.2 }),
    tankGlass: std(null, 1, { color: 0x88ccaa, transparent: true, opacity: 0.18, rough: 0.1, metal: 0.2, depthWrite: false }),
    tankFluid: std(null, 1, { color: 0x103020, emissive: 0x2aff7a, ei: 0.35, transparent: true, opacity: 0.45, depthWrite: false }),
    flesh: std(T.flesh(), 1, { rough: 0.35 }),
    bloodPool: std(T.bloodDecal(), 1, { transparent: true, depthWrite: false, rough: 0.1 }),
    puddle: std(null, 1, { color: 0x05070a, metal: 0.9, rough: 0.02, transparent: true, opacity: 0.75, depthWrite: false }),
  };
  MATS.bloodPool.polygonOffset = true;
  MATS.bloodPool.polygonOffsetFactor = -2;
  MATS.puddle.polygonOffset = true;
  MATS.puddle.polygonOffsetFactor = -1;
  return MATS;
}

// ------------------------------------------------------------------ geometry

// Box whose UVs are scaled to world size so textures tile at a constant density.
export function boxGeo(w, h, d, s = 1) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [
    [d, h],
    [d, h],
    [w, d],
    [w, d],
    [w, h],
    [w, h],
  ];
  for (let f = 0; f < 6; f++)
    for (let i = 0; i < 4; i++) {
      const k = f * 4 + i;
      uv.setXY(k, (uv.getX(k) * dims[f][0]) / s, (uv.getY(k) * dims[f][1]) / s);
    }
  return g;
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);

export class Builder {
  constructor(game, root) {
    this.game = game;
    this.root = root;
    this.batches = new Map();
    this.M = mats();
  }

  _add(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
    _e.set(rx, ry, rz);
    _q.setFromEuler(_e);
    _p.set(x, y, z);
    _m.compose(_p, _q, _s);
    geo.applyMatrix4(_m);
    if (!this.batches.has(mat)) this.batches.set(mat, []);
    this.batches.get(mat).push(geo);
    return geo;
  }

  // Box with its BOTTOM at y (convenient for level layout).
  box(mat, w, h, d, x, y, z, ry = 0, rx = 0, rz = 0) {
    return this._add(boxGeo(w, h, d, mat.userData.scale || 1), mat, x, y + h / 2, z, rx, ry, rz);
  }

  // Box centred at (x,y,z).
  cbox(mat, w, h, d, x, y, z, ry = 0, rx = 0, rz = 0) {
    return this._add(boxGeo(w, h, d, mat.userData.scale || 1), mat, x, y, z, rx, ry, rz);
  }

  cyl(mat, rt, rb, h, x, y, z, seg = 10, rx = 0, ry = 0, rz = 0) {
    const g = new THREE.CylinderGeometry(rt, rb, h, seg);
    return this._add(g, mat, x, y, z, rx, ry, rz);
  }

  ico(mat, r, x, y, z, sx = 1, sy = 1, sz = 1) {
    const g = new THREE.IcosahedronGeometry(r, 0);
    g.deleteAttribute('normal');
    const g2 = g.index ? g : g;
    g2.scale(sx, sy, sz);
    const ng = mergeVerticesSafe(g2);
    return this._add(ng, mat, x, y, z);
  }

  // A standalone (non-batched) mesh, e.g. for transparent or unique materials.
  mesh(geo, mat, x, y, z, ry = 0, hittable = false) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.y = ry;
    if (hittable) m.layers.enable(1);
    this.root.add(m);
    return m;
  }

  // Fake volumetric light: an additive, fogged cone hanging below a lamp.
  cone(x, y, z, radius = 1.8, height = 4.5, color = 0xffc070, opacity = 0.07) {
    const key = color + ':' + opacity;
    this._cones = this._cones || {};
    if (!this._cones[key])
      this._cones[key] = new THREE.MeshBasicMaterial({
        color,
        map: T.beam(),
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
        fog: true,
      });
    const g = new THREE.CylinderGeometry(0.15, radius, height, 20, 1, true);
    const m = this.mesh(g, this._cones[key], x, y - height / 2, z);
    m.renderOrder = 7;
    return m;
  }

  // Mirror-like rain puddle.
  puddle(x, z, sx = rand(1, 2.5), sz = rand(0.8, 2)) {
    const g = new THREE.CircleGeometry(0.5, 18);
    g.scale(sx, sz, 1);
    const m = this.mesh(g, this.M.puddle, x, 0.008, z);
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = rand(0, 3);
    m.receiveShadow = true;
  }

  light(x, y, z, color = 0xffc070, intensity = 12, distance = 14, o = {}) {
    this.game.lights.addAnchor({ pos: new THREE.Vector3(x, y, z), color: new THREE.Color(color), intensity, distance, ...o });
  }

  finish() {
    // Merge per material AND per 16m cell, so frustum culling, shadow culling and
    // bullet raycasts (which test bounding spheres first) only touch nearby chunks.
    const CELL = 16;
    const box = new THREE.Box3();
    const c = new THREE.Vector3();
    for (const [mat, geos] of this.batches) {
      const cells = new Map();
      for (const g of geos) {
        g.computeBoundingBox();
        box.copy(g.boundingBox).getCenter(c);
        // very large pieces (long floors and walls) go in their own bucket
        const size = box.getSize(new THREE.Vector3());
        const key = Math.max(size.x, size.z) > CELL * 2 ? 'big' : `${Math.floor(c.x / CELL)},${Math.floor(c.z / CELL)}`;
        if (!cells.has(key)) cells.set(key, []);
        cells.get(key).push(g);
      }
      for (const [key, list] of cells) {
        if (key === 'big') {
          list.forEach((g) => this._emit(g, mat));
          continue;
        }
        const merged = mergeGeometries(list, false);
        list.forEach((g) => g.dispose());
        if (merged) this._emit(merged, mat);
      }
    }
    this.batches.clear();
  }

  _emit(geo, mat) {
    geo.computeBoundingSphere();
    const mesh = new THREE.Mesh(geo, mat);
    mesh.layers.enable(1); // static geometry blocks bullets
    mesh.receiveShadow = true;
    mesh.castShadow = !mat.transparent && !mat.userData.noShadow;
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    this.root.add(mesh);
  }

  // ---------------------------------------------------------------- structure

  floor(mat, x0, z0, x1, z1, y = 0, t = 0.2) {
    this.box(mat, Math.abs(x1 - x0), t, Math.abs(z1 - z0), (x0 + x1) / 2, y - t, (z0 + z1) / 2);
  }

  ceiling(mat, x0, z0, x1, z1, y = 3.2, t = 0.2) {
    this.box(mat, Math.abs(x1 - x0), t, Math.abs(z1 - z0), (x0 + x1) / 2, y, (z0 + z1) / 2);
  }

  // Wall segment between two points on the ground. Doors: [{at, w, h}] measured along the wall.
  wall(mat, x0, z0, x1, z1, h = 3.2, t = 0.25, doors = [], y = 0) {
    const dx = x1 - x0;
    const dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    const ux = dx / len;
    const uz = dz / len;
    const ry = Math.atan2(dx, dz);
    const segs = [];
    let cur = 0;
    const sorted = [...doors].sort((a, b) => a.at - b.at);
    for (const d of sorted) {
      segs.push([cur, d.at - d.w / 2]);
      // lintel above the doorway
      const dh = d.h ?? 2.3;
      if (dh < h) {
        const mid = d.at;
        this.box(mat, t, h - dh, d.w, x0 + ux * mid, y + dh, z0 + uz * mid, ry);
      }
      cur = d.at + d.w / 2;
    }
    segs.push([cur, len]);
    for (const [a, b] of segs) {
      const l = b - a;
      if (l <= 0.01) continue;
      const mid = (a + b) / 2;
      this.box(mat, t, h, l, x0 + ux * mid, y, z0 + uz * mid, ry);
    }
  }

  // Simple street building: block with facade texture.
  building(x0, z0, x1, z1, h, variant = randi(0, 3)) {
    const M = this.M;
    const w = Math.abs(x1 - x0);
    const d = Math.abs(z1 - z0);
    this.box(M.facade[variant % 4], w, h, d, (x0 + x1) / 2, 0, (z0 + z1) / 2);
    // roof ledge
    this.box(M.darkMetal, w + 0.3, 0.3, d + 0.3, (x0 + x1) / 2, h, (z0 + z1) / 2);
  }

  sign(text, x, y, z, ry, w = 3, h = 0.75, bg = '#1a1010', fg = '#ffcf6a', lightIt = true) {
    const tex = T.sign(text, bg, fg, Math.round(Math.min(1024, Math.max(256, (128 * w) / h))), 128);
    const mat = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.9, roughness: 0.8 });
    const m = this.mesh(new THREE.PlaneGeometry(w, h), mat, x, y, z, ry);
    if (lightIt) {
      const c = new THREE.Color(fg);
      this.light(x + Math.sin(ry) * 0.8, y, z + Math.cos(ry) * 0.8, c.getHex(), 5, 7, { flicker: 0.15 });
    }
    return m;
  }

  // ---------------------------------------------------------------- props: street

  car(x, z, ry = 0, color = pick([0x5a1e1e, 0x1e2f4a, 0x3a3a3a, 0x4a4a2a, 0x6a6a6a, 0x26402c]), wrecked = false) {
    const M = this.M;
    const body = this._colorMat(color);
    const tilt = wrecked ? rand(-0.08, 0.08) : 0;
    const sx = Math.sin(ry);
    const cz = Math.cos(ry);
    const P = (lx, lz) => [x + lx * cz + lz * sx, z - lx * sx + lz * cz];
    let [px, pz] = P(0, 0);
    this.box(body, 1.85, 0.62, 4.3, px, 0.3, pz, ry, 0, tilt);
    [px, pz] = P(0, -0.2);
    this.box(body, 1.65, 0.5, 2.1, px, 0.92, pz, ry, 0, tilt);
    this.box(M.glass, 1.68, 0.4, 2.0, px, 0.96, pz, ry, 0, tilt);
    for (const [lx, lz] of [
      [-0.85, 1.35],
      [0.85, 1.35],
      [-0.85, -1.35],
      [0.85, -1.35],
    ]) {
      [px, pz] = P(lx, lz);
      this.cyl(M.rubber, 0.34, 0.34, 0.24, px, 0.34, pz, 10, 0, ry, Math.PI / 2);
    }
    if (!wrecked) {
      for (const lx of [-0.6, 0.6]) {
        [px, pz] = P(lx, 2.16);
        this.box(M.lampWarm, 0.3, 0.12, 0.05, px, 0.6, pz, ry);
        [px, pz] = P(lx, -2.16);
        this.box(M.lampRed, 0.3, 0.12, 0.05, px, 0.65, pz, ry);
      }
    }
  }

  policeCar(x, z, ry = 0) {
    const M = this.M;
    const sx = Math.sin(ry);
    const cz = Math.cos(ry);
    const P = (lx, lz) => [x + lx * cz + lz * sx, z - lx * sx + lz * cz];
    let [px, pz] = P(0, 0);
    this.box(M.black, 1.85, 0.62, 4.4, px, 0.3, pz, ry);
    this.box(M.white, 1.87, 0.3, 1.6, px, 0.55, pz, ry);
    [px, pz] = P(0, -0.2);
    this.box(M.white, 1.65, 0.5, 2.1, px, 0.92, pz, ry);
    this.box(M.glass, 1.68, 0.4, 2.0, px, 0.96, pz, ry);
    this.box(M.lampRed, 0.6, 0.14, 0.3, P(-0.35, -0.2)[0], 1.42, P(-0.35, -0.2)[1], ry);
    this.box(M.lampBlue, 0.6, 0.14, 0.3, P(0.35, -0.2)[0], 1.42, P(0.35, -0.2)[1], ry);
    for (const [lx, lz] of [
      [-0.85, 1.35],
      [0.85, 1.35],
      [-0.85, -1.35],
      [0.85, -1.35],
    ]) {
      [px, pz] = P(lx, lz);
      this.cyl(M.rubber, 0.34, 0.34, 0.24, px, 0.34, pz, 10, 0, ry, Math.PI / 2);
    }
    [px, pz] = P(0, -0.2);
    this.light(px - 0.6, 1.7, pz, 0xff2010, 10, 10, { strobe: 0 });
    this.light(px + 0.6, 1.7, pz, 0x2040ff, 10, 10, { strobe: Math.PI });
  }

  bus(x, z, ry = 0) {
    const M = this.M;
    const body = this._colorMat(0x8a7020);
    const c = Math.cos(ry);
    const s = Math.sin(ry);
    this.box(body, 2.6, 2.6, 11, x, 0.5, z, ry);
    this.box(M.glass, 2.66, 0.95, 10.2, x, 1.75, z, ry);
    // window pillars
    for (let i = -4; i <= 4; i++) this.box(body, 2.7, 0.95, 0.12, x + s * i * 1.15, 1.75, z + c * i * 1.15, ry);
    this.box(M.glass, 2.2, 1.0, 0.06, x + s * 5.5, 1.7, z + c * 5.5, ry);
    this.box(M.black, 2.64, 0.35, 11.04, x, 0.45, z, ry);
    this.box(M.offwhite, 2.62, 0.08, 11.02, x, 2.7, z, ry);
    for (const [lx, lz] of [
      [-1.2, 3.6],
      [1.2, 3.6],
      [-1.2, -3.4],
      [1.2, -3.4],
    ])
      this.cyl(M.rubber, 0.5, 0.5, 0.3, x + lx * c + lz * s, 0.5, z - lx * s + lz * c, 12, 0, ry, Math.PI / 2);
    this.box(M.lampWarm, 0.4, 0.15, 0.05, x + s * 5.52 + c * 0.9, 0.9, z + c * 5.52 - s * 0.9, ry);
    this.light(x + s * 6.5, 1.0, z + c * 6.5, 0xffd8a0, 6, 8);
  }

  lamp(x, z, ry = 0, color = 0xffb35a, flicker = 0, on = true) {
    const M = this.M;
    this.cyl(M.darkMetal, 0.07, 0.1, 5.2, x, 2.6, z, 6);
    const ax = Math.sin(ry);
    const az = Math.cos(ry);
    this.box(M.darkMetal, 0.1, 0.1, 1.2, x + ax * 0.6, 5.1, z + az * 0.6, ry);
    this.box(on ? M.lampWarm : M.darkMetal, 0.5, 0.12, 0.3, x + ax * 1.15, 4.98, z + az * 1.15, ry);
    if (on) {
      this.light(x + ax * 1.15, 4.6, z + az * 1.15, color, 30, 16, { flicker });
      this.cone(x + ax * 1.15, 4.95, z + az * 1.15, 2.0, 4.95, color, 0.06);
    }
  }

  barrel(x, z, mat = this.M.rust) {
    this.cyl(mat, 0.3, 0.3, 0.9, x, 0.45, z, 10);
  }

  crate(x, z, s = 1, ry = 0, y = 0) {
    this.box(this.M.crate, s, s, s, x, y, z, ry);
  }

  dumpster(x, z, ry = 0) {
    const mat = this._colorMat(0x1f3a26);
    this.box(mat, 1.8, 1.2, 1.1, x, 0.1, z, ry);
    this.box(this.M.darkMetal, 1.85, 0.08, 1.15, x, 1.3, z, ry, -0.15);
    this.trash(x + rand(-1, 1), z + rand(-1, 1));
  }

  trash(x, z, n = randi(2, 4)) {
    for (let i = 0; i < n; i++) this.ico(this.M.trash, rand(0.25, 0.4), x + rand(-0.6, 0.6), 0.2, z + rand(-0.6, 0.6), 1, 0.7, 1);
  }

  barricade(x, z, ry = 0, w = 2.4) {
    const M = this.M;
    const ax = Math.cos(ry);
    const az = -Math.sin(ry);
    for (const s of [-1, 1]) this.box(M.wood, 0.08, 1.0, 0.5, x + ax * s * (w / 2 - 0.1), 0, z + az * s * (w / 2 - 0.1), ry);
    this.box(M.hazard, w, 0.22, 0.05, x, 0.72, z, ry);
    this.box(M.hazard, w, 0.22, 0.05, x, 0.38, z, ry);
  }

  hydrant(x, z) {
    const mat = this._colorMat(0x8a1a14);
    this.cyl(mat, 0.13, 0.15, 0.7, x, 0.35, z, 8);
    this.cyl(mat, 0.15, 0.15, 0.1, x, 0.75, z, 8);
  }

  bench(x, z, ry = 0) {
    const M = this.M;
    this.box(M.wood, 1.6, 0.06, 0.45, x, 0.45, z, ry);
    this.box(M.wood, 1.6, 0.4, 0.05, x - Math.sin(ry) * 0.22, 0.55, z - Math.cos(ry) * 0.22, ry);
    this.box(M.darkMetal, 1.5, 0.45, 0.4, x, 0, z, ry);
  }

  deadTree(x, z, h = rand(3.5, 5)) {
    const M = this.M;
    this.cyl(M.bark, 0.1, 0.2, h, x, h / 2, z, 6);
    for (let i = 0; i < 5; i++) {
      const a = rand(0, Math.PI * 2);
      const y = rand(h * 0.45, h * 0.95);
      const l = rand(0.8, 1.6);
      this.cyl(M.bark, 0.03, 0.07, l, x + Math.cos(a) * l * 0.35, y + l * 0.3, z + Math.sin(a) * l * 0.35, 5, Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9);
    }
  }

  fence(x0, z0, x1, z1, h = 1.8) {
    const len = Math.hypot(x1 - x0, z1 - z0);
    const n = Math.ceil(len / 0.25);
    const ry = Math.atan2(x1 - x0, z1 - z0);
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      if (chance(0.06)) continue; // missing boards
      this.box(this.M.wood, 0.03, h * rand(0.85, 1), 0.2, x0 + (x1 - x0) * t, 0, z0 + (z1 - z0) * t, ry, 0, rand(-0.04, 0.04));
    }
    this.box(this.M.wood, 0.05, 0.1, len, (x0 + x1) / 2, h * 0.7, (z0 + z1) / 2, ry);
  }

  roadLines(x, z0, z1, mat = this.M.lineYellow) {
    for (let z = Math.min(z0, z1); z < Math.max(z0, z1); z += 4) this.box(mat, 0.15, 0.02, 2, x, 0, z + 1);
  }

  bloodPool(x, z, s = rand(0.8, 1.8)) {
    const m = this.mesh(new THREE.PlaneGeometry(s, s), this.M.bloodPool, x, 0.015, z);
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = rand(0, 6);
    m.renderOrder = 1;
  }

  // ---------------------------------------------------------------- props: hospital

  bed(x, z, ry = 0) {
    const M = this.M;
    this.box(M.chrome, 0.95, 0.06, 2.0, x, 0.55, z, ry);
    this.box(M.mattress, 0.9, 0.16, 1.9, x, 0.61, z, ry);
    this.box(M.blanket, 0.92, 0.06, 1.1, x - Math.sin(ry) * 0.35, 0.74, z - Math.cos(ry) * 0.35, ry);
    this.box(M.chrome, 0.95, 0.7, 0.05, x + Math.sin(ry) * 1.0, 0.3, z + Math.cos(ry) * 1.0, ry);
    for (const [lx, lz] of [
      [-0.42, -0.9],
      [0.42, -0.9],
      [-0.42, 0.9],
      [0.42, 0.9],
    ]) {
      const c = Math.cos(ry);
      const s = Math.sin(ry);
      this.box(M.chrome, 0.04, 0.55, 0.04, x + lx * c + lz * s, 0, z - lx * s + lz * c, ry);
    }
  }

  gurney(x, z, ry = 0, bloody = true) {
    const M = this.M;
    this.box(M.chrome, 0.65, 0.05, 1.9, x, 0.85, z, ry);
    this.box(M.white, 0.6, 0.08, 1.85, x, 0.9, z, ry);
    this.box(M.chrome, 0.5, 0.75, 0.04, x, 0.1, z, ry);
    if (bloody) this.box(M.red, 0.4, 0.01, 0.6, x, 0.99, z, ry);
  }

  desk(x, z, w = 3, ry = 0, d = 0.8) {
    const M = this.M;
    this.box(M.wood, w, 1.05, d, x, 0, z, ry);
    this.box(M.offwhite, w + 0.1, 0.05, d + 0.1, x, 1.05, z, ry);
  }

  curtain(x, z, w = 2, ry = 0) {
    this.box(this.M.curtain, w, 2.1, 0.03, x, 0.2, z, ry);
    this.box(this.M.chrome, w, 0.04, 0.04, x, 2.32, z, ry);
  }

  cabinet(x, z, ry = 0) {
    this.box(this.M.white, 0.9, 1.9, 0.45, x, 0, z, ry);
    this.box(this.M.glass, 0.8, 0.8, 0.02, x + Math.sin(ry) * 0.23, 1.0, z + Math.cos(ry) * 0.23, ry);
  }

  wheelchair(x, z, ry = 0) {
    const M = this.M;
    this.box(M.blue, 0.5, 0.06, 0.5, x, 0.5, z, ry);
    this.box(M.blue, 0.5, 0.5, 0.05, x - Math.sin(ry) * 0.25, 0.55, z - Math.cos(ry) * 0.25, ry, -0.15);
    for (const s of [-1, 1]) this.cyl(M.chrome, 0.3, 0.3, 0.03, x + Math.cos(ry) * 0.28 * s, 0.3, z - Math.sin(ry) * 0.28 * s, 14, 0, ry, Math.PI / 2);
  }

  ceilingLight(x, z, y = 3.18, on = true, flicker = 0, ry = 0) {
    this.box(on ? this.M.lampCold : this.M.offwhite, 0.5, 0.04, 1.4, x, y - 0.04, z, ry);
    if (on) {
      this.light(x, y - 0.3, z, 0xd8eeff, 9, 10, { flicker });
      this.cone(x, y - 0.06, z, 1.4, y - 0.06, 0xbfe0ff, 0.035);
    }
  }

  door(x, z, ry = 0, mat = this.M.wood, open = 0) {
    const ax = Math.cos(ry);
    const az = -Math.sin(ry);
    // hinge on one side; open rotates the panel
    this.box(mat, 1.0, 2.2, 0.06, x - ax * 0.5 + Math.cos(ry + open) * 0.5, 0, z - az * 0.5 - Math.sin(ry + open) * 0.5, ry + open);
  }

  // ---------------------------------------------------------------- props: lab

  tank(x, z, r = 0.7, h = 2.6, specimen = true, broken = false) {
    const M = this.M;
    this.cyl(M.darkMetal, r + 0.1, r + 0.15, 0.35, x, 0.175, z, 14);
    this.cyl(M.darkMetal, r + 0.1, r + 0.1, 0.3, x, h + 0.2, z, 14);
    const out = { x, z, meshes: [] };
    if (!broken) {
      const fl = this.mesh(new THREE.CylinderGeometry(r * 0.95, r * 0.95, h - 0.4, 16), M.tankFluid, x, 0.35 + (h - 0.4) / 2, z);
      fl.renderOrder = 2;
      const gl = this.mesh(new THREE.CylinderGeometry(r, r, h - 0.1, 16, 1, true), M.tankGlass, x, 0.35 + (h - 0.1) / 2, z);
      gl.renderOrder = 3;
      out.meshes.push(fl, gl);
      this.light(x, h * 0.6, z, 0x40ff80, 4, 5, { flicker: 0.05 });
    } else {
      for (let i = 0; i < 5; i++) {
        const a = rand(0, 6.28);
        this.box(M.tankGlass, 0.3, rand(0.2, 0.8), 0.02, x + Math.cos(a) * r, 0.35, z + Math.sin(a) * r, a);
      }
    }
    if (specimen && !broken) {
      const sm = M.flesh;
      this.box(sm, 0.35, 0.6, 0.25, x, 1.1, z);
      this.box(sm, 0.22, 0.25, 0.22, x, 1.75, z, 0.4, 0.3);
      this.box(sm, 0.1, 0.55, 0.1, x - 0.25, 1.0, z, 0, 0, 0.3);
      this.box(sm, 0.1, 0.55, 0.1, x + 0.25, 1.05, z, 0, 0, -0.4);
      this.box(sm, 0.12, 0.6, 0.12, x - 0.1, 0.45, z);
      this.box(sm, 0.12, 0.6, 0.12, x + 0.1, 0.5, z, 0, 0.2);
    }
    return out;
  }

  pipe(x0, y0, z0, x1, y1, z1, r = 0.12, mat = this.M.rust) {
    const a = new THREE.Vector3(x0, y0, z0);
    const b = new THREE.Vector3(x1, y1, z1);
    const len = a.distanceTo(b);
    const g = new THREE.CylinderGeometry(r, r, len, 8);
    const dir = b.clone().sub(a).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    const mid = a.add(b).multiplyScalar(0.5);
    _m.compose(mid, q, _s);
    g.applyMatrix4(_m);
    if (!this.batches.has(mat)) this.batches.set(mat, []);
    this.batches.get(mat).push(g);
  }

  console(x, z, ry = 0) {
    const M = this.M;
    this.box(M.darkMetal, 1.4, 0.95, 0.7, x, 0, z, ry);
    this.box(M.screen, 1.2, 0.6, 0.05, x - Math.sin(ry) * 0.1, 1.05, z - Math.cos(ry) * 0.1, ry, -0.3);
    this.light(x + Math.sin(ry) * 0.6, 1.3, z + Math.cos(ry) * 0.6, 0x30ff80, 2, 3);
  }

  alarm(x, y, z) {
    this.cbox(this.M.lampRed, 0.25, 0.25, 0.25, x, y, z);
    this.light(x, y - 0.3, z, 0xff1a0a, 14, 12, { pulse: 3 });
  }

  _colorMat(hex) {
    this._cm = this._cm || {};
    if (!this._cm[hex]) this._cm[hex] = flat(hex, { rough: 0.45, metal: 0.3 });
    return this._cm[hex];
  }
}

// IcosahedronGeometry is non-indexed; give it an index so it can merge with boxes.
function mergeVerticesSafe(g) {
  const pos = g.attributes.position;
  const n = pos.count;
  const idx = [];
  for (let i = 0; i < n; i++) idx.push(i);
  g.setIndex(idx);
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(n * 2), 2));
  g.computeVertexNormals();
  return g;
}
