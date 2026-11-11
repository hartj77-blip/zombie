// Stage layouts and scripted beats.
// Beat types: { move: [[x,y,z]...] }, { fight: {...} }, { boss }, { wait }.
// Spawn spec: { type, at: [x,z], delay, path: [[x,z]], emerge: 'walk'|'rise'|'drop'|'getup'|'idle', y, door }
import * as THREE from 'three';
import { T } from './textures.js';
import { rand, randi, pick, chance } from './util.js';

const E = 1.65; // eye height

// Axis-aligned room. doors: { zMin|zMax|xMin|xMax: [{ c, w, h }] } with c = world coord along the wall.
function room(b, o) {
  const [xa, xb] = o.x;
  const [za, zb] = o.z;
  const h = o.h ?? 3.2;
  const d = o.doors || {};
  const conv = (list, start) => (list || []).map((q) => ({ at: q.c - start, w: q.w ?? 1.4, h: q.h ?? 2.4 }));
  if (o.floor) b.floor(o.floor, xa, za, xb, zb);
  if (o.ceil) b.ceiling(o.ceil, xa, za, xb, zb, h);
  const w = o.wall;
  if (!o.skip?.includes('zMin')) b.wall(w, xa, za, xb, za, h, 0.25, conv(d.zMin, xa));
  if (!o.skip?.includes('zMax')) b.wall(w, xa, zb, xb, zb, h, 0.25, conv(d.zMax, xa));
  if (!o.skip?.includes('xMin')) b.wall(w, xa, za, xa, zb, h, 0.25, conv(d.xMin, za));
  if (!o.skip?.includes('xMax')) b.wall(w, xb, za, xb, zb, h, 0.25, conv(d.xMax, za));
  // trim: baseboards, a ceiling cove, optional handrails and door frames
  const M = b.M;
  const sides = [
    ['zMin', xa, za, xb, za, xa],
    ['zMax', xa, zb, xb, zb, xa],
    ['xMin', xa, za, xa, zb, za],
    ['xMax', xb, za, xb, zb, za],
  ];
  for (const [key, ax, az, bx, bz, start] of sides) {
    if (o.skip?.includes(key)) continue;
    const doors = conv(d[key], start);
    const base = o.base ?? M.frame;
    b.wall(base, ax, az, bx, bz, 0.13, 0.33, doors);
    b.wall(o.cove ?? M.trim, ax, az, bx, bz, 0.09, 0.35, [], h - 0.09);
    if (o.rail) b.wall(M.chrome, ax, az, bx, bz, 0.05, 0.39, doors, 0.92);
    if (o.band) b.wall(o.band, ax, az, bx, bz, 0.22, 0.29, doors, 1.15);
    const horiz = key[0] === 'z';
    for (const q of d[key] || []) {
      const dw = q.w ?? 1.4;
      const dh = q.h ?? 2.4;
      for (const sgn of [-1, 1]) {
        const c = q.c + sgn * (dw / 2 + 0.04);
        b.box(base, horiz ? 0.1 : 0.37, dh + 0.1, horiz ? 0.37 : 0.1, horiz ? c : ax, 0, horiz ? az : c);
      }
      b.box(base, horiz ? dw + 0.18 : 0.37, 0.1, horiz ? 0.37 : dw + 0.18, horiz ? q.c : ax, dh, horiz ? az : q.c);
    }
  }
}

function moonAndSky() {} // the sky dome lives in atmosphere.js

// =====================================================================
// CHAPTER 1 - the town at night

const stage1 = {
  chapter: 'CHAPTER 1',
  title: 'NIGHTFALL',
  subtitle: 'Ashgrove, 11:47 PM. The 911 lines went dead an hour ago.',
  theme: 'street',
  fog: 0x0a0e16,
  fogDensity: 0.034,
  hemi: [0x5a6a90, 0x1a140e, 0.42],
  moon: 0.85,
  env: 0.4,
  rain: true,
  sky: true,
  lightning: true,
  mist: 0.055,
  tint: [1.0, 1.0, 1.04],
  start: [0, E, 4],
  lookStart: [0, 1.4, -20],
  attract: { pos: [1.2, 2.4, 3], look: [-1, 1.7, -30] },

  build(b) {
    const M = b.M;
    // roads, sidewalks and curbs
    b.floor(M.asphalt, -5, 14, 5, -106);
    b.floor(M.sidewalk, -9, 14, -5, -106);
    b.floor(M.sidewalk, 5, 14, 9, -106);
    for (const x of [-5.08, 5.08]) b.box(M.concrete, 0.16, 0.13, 120, x, 0, -46);
    b.floor(M.asphalt, -42, -46, -9, -54);
    b.floor(M.asphalt, 9, -46, 42, -54);
    b.floor(M.asphalt, 9, -86, 44, -94);
    b.floor(M.sidewalk, 42, -68, 74, -112);
    b.roadLines(0, 12, -104);
    for (const z of [-44.5, -55.5]) for (let x = -4.5; x < 5; x += 1.2) b.box(M.lineWhite, 0.6, 0.02, 0.4, x, 0, z);

    // left buildings (x -22..-9) with gaps for alleys at z -20..-24 and -57..-61
    b.building(-24, 14, -9, -20, 14, 0);
    b.building(-24, -24, -9, -46, 11, 1);
    b.building(-24, -54, -9, -57, 12, 2);
    b.building(-24, -61, -9, -104, 15, 3);
    b.building(-44, -32, -24, -46, 10, 2);
    b.building(-44, -54, -24, -70, 13, 0);
    // left alley interiors
    b.floor(M.asphalt, -24, -20, -9, -24);
    b.wall(M.brick, -24, -20, -24, -24, 8);
    b.floor(M.asphalt, -24, -57, -9, -61);
    b.wall(M.brick, -24, -57, -24, -61, 8);
    // right buildings (x 9..22), gap for the plaza alley at z -86..-94
    b.building(9, 14, 24, -46, 12, 1);
    b.building(9, -54, 24, -86, 14, 0);
    b.building(9, -94, 44, -112, 13, 2);
    b.building(24, -32, 44, -46, 10, 3);
    b.building(24, -54, 44, -86, 11, 1);
    // end of the main street
    b.building(-24, -106, 9, -120, 16, 1);
    // plaza ring
    b.building(44, -56, 80, -68, 12, 3);
    b.building(74, -68, 88, -112, 10, 0);
    b.building(44, -112, 88, -124, 12, 2);

    // fire escape on the right building
    for (const y of [3.6, 7.0]) {
      b.box(M.darkMetal, 1.2, 0.08, 4, 8.4, y, -27);
      b.box(M.darkMetal, 0.05, 0.9, 4, 7.82, y, -27);
    }
    b.box(M.darkMetal, 0.08, 3.4, 0.08, 7.82, 0.2, -25);

    // signs
    b.sign('DINER', -8.68, 3.9, -9, Math.PI / 2, 3.2, 0.9, '#2a0808', '#ff5a4a');
    b.sign('PHARMACY', 8.68, 3.9, -35, -Math.PI / 2, 4, 0.9, '#04140a', '#5aff8a');
    b.sign('ROXY BAR', -8.68, 3.9, -66, Math.PI / 2, 3.6, 0.9, '#140418', '#ff5ad8');
    b.sign('HOTEL', 8.68, 6.9, -70, -Math.PI / 2, 3, 0.8, '#101010', '#ffd27a');
    b.sign('MILLER & SONS  BUTCHER', 73.68, 4.4, -90, -Math.PI / 2, 7, 1.2, '#1a0606', '#ff8a3a');
    // butcher shop doorway (dark)
    b.box(M.black, 0.1, 2.8, 2.4, 73.9, 0, -90);
    b.light(70, 2.5, -90, 0xff6a2a, 10, 10, { flicker: 0.4 });

    // street lamps
    for (const z of [2, -18, -36, -72, -90]) b.lamp(-7.2, z, Math.PI / 2, 0xffb35a, z === -36 ? 0.5 : 0);
    for (const z of [-9, -27, -63, -81]) b.lamp(7.2, z, -Math.PI / 2, 0xffb35a, z === -63 ? 0.6 : 0, z !== -81);
    b.lamp(56, -72, Math.PI, 0xffa040, 0.3);
    b.lamp(56, -108, 0, 0xffa040);
    b.lamp(26, -87, Math.PI, 0xffc070, 0.7);

    // vehicles
    b.policeCar(3.2, 6.5, 0.35);
    b.car(-3.1, -13, 0.35, 0x5a1e1e, true);
    b.car(3.4, -31, -0.15);
    b.car(-2.9, -41, 2.7, 0x3a3a3a, true);
    b.game.fx.fire(new THREE.Vector3(-2.9, 0.9, -41), 1.0);
    b.bus(3.7, -66, 0.22);
    b.car(-3.3, -77, -0.25, 0x26402c);
    b.car(-6.5, -50.5, 1.57, 0x1e2f4a, true);
    b.car(30, -50, 1.4, 0x4a4a2a, true);
    b.car(62, -76, 0.9, 0x6a6a6a, true);
    b.game.fx.fire(new THREE.Vector3(62, 0.8, -76), 0.8);

    // street clutter
    b.barricade(-2.2, -84, 0.2);
    b.barricade(-6.8, -45.5, 0);
    b.hydrant(6, -16);
    b.hydrant(-6, -60);
    b.bench(-7.8, -30, Math.PI / 2);
    b.bench(7.8, -55, -Math.PI / 2);
    b.dumpster(-14, -22.8);
    b.dumpster(-16, -59.5, 0.1);
    b.dumpster(15, -87.2);
    b.dumpster(33, -92.8);
    b.trash(-10, -21);
    b.trash(19, -92.5);
    b.trash(-7, -86);
    b.trash(7, -40);
    b.barrel(-12.5, -61);
    b.barrel(36.5, -92.9);
    b.crate(17, -93, 0.9, 0.3);
    b.crate(17.4, -92.6, 0.6, 0.8, 0.9);
    for (const [x, z] of [
      [-1.5, -6],
      [2, -21],
      [-2, -33],
      [1, -47],
      [-1.2, -58],
      [2.2, -73],
      [-0.5, -92],
      [20, -90],
      [50, -96],
      [58, -84],
    ])
      b.puddle(x, z);
    for (const [x, z] of [
      [-2, -16],
      [1.5, -38],
      [3, -52],
      [-4, -88],
      [24, -89],
      [52, -92],
    ])
      b.bloodPool(x, z, rand(1, 2));

    // plaza
    b.deadTree(50, -74);
    b.deadTree(66, -106);
    b.deadTree(48, -106);
    b.bench(52, -70, Math.PI);
    b.cyl(M.concrete, 2.2, 2.4, 0.6, 64, 0.3, -76, 20);
    moonAndSky(b);
  },

  beats: [
    {
      wait: 1.0,
      spawn: [
        { type: 'barrel', at: [-3.6, -24] },
        { type: 'barrel', at: [4.3, -51] },
        { type: 'barrel', at: [-3.9, -64] },
        { type: 'barrel', at: [40, -91.8] },
        { type: 'barrel', at: [52, -84] },
        { type: 'crate', at: [-4.6, -19.5], drop: 'shells' },
        { type: 'crate', at: [5.6, -38], drop: 'herb' },
        { type: 'crate', at: [-5.5, -90], drop: 'herb' },
        { type: 'crate', at: [35.5, -87.2], drop: 'smg' },
        { type: 'crate', at: [54, -99], drop: 'herb' },
      ],
      msg: 'SECURE THE STREET',
    },
    { move: [[0, E, -2], [0.4, E, -9]], speed: 2.6, events: [{ at: 0.1, spawn: [{ type: 'shambler', at: [3.5, -17], emerge: 'idle', wake: 9 }] }] },
    {
      look: [0, 1.3, -24],
      fight: {
        time: 35,
        waves: [
          [
            { type: 'survivor', at: [-11, -21.5], path: [[-6, -21], [-2.4, -17.5]], exit: [[-4, -12], [-6.6, -6], [-6.6, 6]], chasers: [{ type: 'shambler', at: [-13.5, -22.5] }, { type: 'shambler', at: [-15, -21], speedMul: 1.3 }] },
            { type: 'shambler', at: [3, -30], delay: 1 },
            // "dead" bodies in the road that get back up (shoot them before they do)
            { type: 'shambler', at: [2.2, -20], emerge: 'getup', lie: 10 },
            { type: 'shambler', at: [-2.5, -22], emerge: 'getup', lie: 13 },
          ],
          { left: 1, spawns: [{ type: 'shambler', at: [-2, -36] }, { type: 'shambler', at: [1.5, -39], delay: 0.6 }, { type: 'shambler', at: [4, -34], delay: 1.2 }, { type: 'runner', at: [0, -48], delay: 2.5 }] },
          [{ type: 'shambler', at: [3, -40] }, { type: 'runner', at: [-2, -45], delay: 0.8 }, { type: 'crawler', at: [-4, -26], delay: 1 }],
        ],
      },
    },
    {
      move: [[0.6, E, -18], [0, E, -28]],
      speed: 3,
      events: [
        { at: 0.25, spawn: [{ type: 'shambler', at: [8.4, -27], y: 3.7, emerge: 'drop' }] },
        { at: 0.5, spawn: [{ type: 'shambler', at: [-3.5, -38], emerge: 'idle', wake: 8 }] },
      ],
    },
    {
      look: [0, 1.3, -48],
      fight: {
        time: 40,
        waves: [
          [
            { type: 'shambler', at: [-16, -49], path: [[-4, -50]] },
            { type: 'shambler', at: [-18, -51], path: [[-3, -51]], delay: 0.8 },
            { type: 'shambler', at: [16, -50], path: [[3, -50]], delay: 0.4 },
            { type: 'thrower', at: [-2, -59], delay: 1 },
          ],
          { left: 1, spawns: [{ type: 'runner', at: [-20, -50], path: [[-3, -49]] }, { type: 'runner', at: [20, -51], path: [[3, -49]], delay: 0.7 }, { type: 'brute', at: [-1.5, -64], delay: 1.5 }] },
          [{ type: 'shambler', at: [-3, -42] }, { type: 'shambler', at: [3, -44], delay: 0.5 }, { type: 'crawler', at: [0, -40], delay: 1 }, { type: 'thrower', at: [-3, -58], delay: 1.2 }],
        ],
      },
    },
    { move: [[0, E, -40], [-0.5, E, -52]], speed: 3, events: [{ at: 0.4, spawn: [{ type: 'crawler', at: [-2.5, -47.5] }] }] },
    {
      look: [-12, 1.4, -59],
      lookSpeed: 6,
      fight: {
        time: 22,
        msg: 'AMBUSH!',
        waves: [[{ type: 'runner', at: [-13, -58] }, { type: 'runner', at: [-15, -60], delay: 0.6 }, { type: 'shambler', at: [-12, -59.5], delay: 1.2 }, { type: 'shambler', at: [-17, -58.5], delay: 2 }]],
      },
    },
    { move: [[0, E, -60], [-1, E, -71], [0, E, -79]], speed: 3, events: [{ at: 0.5, spawn: [{ type: 'shambler', at: [-4, -82], emerge: 'idle', wake: 7 }] }] },
    {
      look: [0, 1.3, -92],
      fight: {
        time: 40,
        waves: [
          [
            { type: 'survivor', at: [8, -90], speed: 3.4, path: [[3, -88], [1.4, -85.5]], exit: [[-3, -84], [-6.6, -80], [-6.6, -66]], chasers: [{ type: 'runner', at: [13, -90] }, { type: 'shambler', at: [10.5, -91.5] }] },
            { type: 'shambler', at: [-3, -95], delay: 1 },
          ],
          { left: 1, spawns: [{ type: 'thrower', at: [-4, -100] }, { type: 'shambler', at: [2, -99], delay: 0.5 }, { type: 'shambler', at: [-1, -101], delay: 1 }, { type: 'brute', at: [3, -102], delay: 2 }] },
          [
            { type: 'shambler', at: [14, -89], path: [[4, -89]] },
            { type: 'shambler', at: [16, -91], path: [[4, -90]], delay: 0.6 },
            { type: 'runner', at: [21, -90], path: [[4, -90]], delay: 1.2 },
            { type: 'shambler', at: [12, -92], path: [[4, -91]], delay: 1.8 },
          ],
        ],
      },
    },
    {
      move: [[1.5, E, -86], [6, E, -90], [14, E, -90], [24, E, -90]],
      speed: 3,
      events: [
        { at: 0.4, spawn: [{ type: 'shambler', at: [20, -88.2], emerge: 'idle', wake: 8 }, { type: 'crawler', at: [22, -91.5] }] },
        { at: 0.62, spawn: [{ type: 'shambler', at: [29, -92.6], y: 4, emerge: 'drop' }] },
      ],
    },
    {
      look: [40, 1.3, -90],
      fight: {
        time: 30,
        waves: [
          [
            { type: 'shambler', at: [40, -89] },
            { type: 'shambler', at: [42, -91.5], delay: 0.6 },
            { type: 'runner', at: [46, -90], delay: 1.4 },
            { type: 'shambler', at: [35, -88.5], emerge: 'getup', lie: 7 },
            { type: 'shambler', at: [38, -92], emerge: 'getup', lie: 9 },
          ],
          [{ type: 'runner', at: [44, -88] }, { type: 'shambler', at: [43, -90.5], delay: 0.6 }, { type: 'thrower', at: [46, -91], delay: 1 }],
        ],
      },
    },
    { move: [[34, E, -90], [44, E, -90]], speed: 2.5 },
    { look: [60, 1.8, -90], wait: 0.8 },
    { boss: 'butcher', at: [60, 0, -90], look: [57, 2.0, -90] },
    { wait: 3, msg: 'THE OUTBREAK STARTED AT MERCY GENERAL...', dur: 3 },
  ],
};

// =====================================================================
// CHAPTER 2 - the hospital

function hospitalLights(b, x, z0, z1, step = 5, flickerChance = 0.3, y = 2.98) {
  for (let z = z0; z > z1; z -= step) b.ceilingLight(x, z, y, chance(0.88), chance(flickerChance) ? rand(0.4, 0.9) : 0);
}

const stage2 = {
  chapter: 'CHAPTER 2',
  title: 'MERCY GENERAL',
  subtitle: 'The first patients were admitted three days ago. None were discharged.',
  theme: 'hospital',
  fog: 0x0b100e,
  fogDensity: 0.045,
  mist: 0.03,
  mistColor: 0x9ab0a4,
  hemi: [0x6a7a70, 0x1a1a16, 0.32],
  env: 0.3,
  tint: [0.96, 1.04, 0.98],
  start: [0, E, 2],
  lookStart: [0, 1.4, -10],
  attract: { pos: [0, 2.2, 2], look: [0, 1.6, -20] },

  build(b, g) {
    const M = b.M;
    // lobby
    room(b, { x: [-10, 10], z: [-20, 5], h: 4.5, wall: M.hospWall, floor: M.hospFloor, ceil: M.ceiling, doors: { zMin: [{ c: 0, w: 3.6, h: 3 }], xMin: [{ c: -14, w: 1.6 }], xMax: [{ c: -6, w: 1.6 }] } });
    for (const [x, z] of [
      [-5, -4],
      [5, -4],
      [-5, -14],
      [5, -14],
      [0, -9],
    ])
      b.ceilingLight(x, z, 4.48, true, x === 5 && z === -14 ? 0.8 : 0);
    b.desk(-6.5, -10, 5, Math.PI / 2, 1.0);
    b.sign('RECEPTION', -9.85, 2.6, -10, Math.PI / 2, 2.4, 0.5, '#0a1a1a', '#9affee', false);
    b.sign('MERCY GENERAL HOSPITAL', 0, 3.7, -19.85, 0, 6, 0.7, '#081410', '#c8ffe0');
    for (let i = 0; i < 3; i++) b.bench(6.5, -9 - i * 2.2, -Math.PI / 2);
    b.cabinet(9.5, -16, -Math.PI / 2);
    b.wheelchair(3.5, -15, 0.8);
    b.gurney(-3, -17, 0.4);
    b.trash(7, -1);
    // glass entrance behind the start
    b.box(M.glass, 6, 3, 0.1, 0, 0, 4.8);
    // side rooms off the lobby
    room(b, { x: [-15, -10], z: [-17, -11], h: 3.2, wall: M.plaster, floor: M.hospFloor, ceil: M.ceiling, skip: ['xMax'] });
    room(b, { x: [10, 15], z: [-9, -3], h: 3.2, wall: M.plaster, floor: M.hospFloor, ceil: M.ceiling, skip: ['xMin'] });

    // corridor 1 with side rooms
    const doors1L = [-26, -42];
    const doors1R = [-34, -50];
    room(b, {
      x: [-1.8, 1.8],
      z: [-60, -20],
      h: 3.0,
      wall: M.hospWall,
      floor: M.hospFloor,
      ceil: M.ceiling,
      rail: true,
      skip: ['zMin', 'zMax'],
      doors: { xMin: doors1L.map((c) => ({ c, w: 1.3 })), xMax: doors1R.map((c) => ({ c, w: 1.3 })) },
    });
    hospitalLights(b, 0, -22, -60, 5, 0.45);
    for (const z of doors1L) {
      room(b, { x: [-6, -1.8], z: [z - 2.5, z + 2.5], h: 3.0, wall: M.plaster, floor: M.hospFloor, ceil: M.ceiling, skip: ['xMax'] });
      b.bed(-4.5, z + 1.2, Math.PI / 2);
      b.door(-1.85, z, Math.PI / 2, M.wood, 1.2);
    }
    for (const z of doors1R) {
      room(b, { x: [1.8, 6], z: [z - 2.5, z + 2.5], h: 3.0, wall: M.plaster, floor: M.hospFloor, ceil: M.ceiling, skip: ['xMin'] });
      b.bed(4.5, z - 1.2, -Math.PI / 2);
      b.door(1.85, z, -Math.PI / 2, M.wood, -1.2);
    }
    b.gurney(-1.3, -31, 0.05);
    b.wheelchair(1.3, -45, -0.4);
    b.gurney(1.25, -55, -0.08, false);
    b.sign('WARD C  →', 0, 2.55, -59.6, 0, 1.6, 0.35, '#0a1a14', '#9affc8', false);

    // ward
    room(b, { x: [-8, 8], z: [-82, -60], h: 3.4, wall: M.hospWall, floor: M.hospFloor, ceil: M.ceiling, doors: { zMax: [{ c: 0, w: 3.6, h: 3 }], xMax: [{ c: -76, w: 4, h: 3 }] } });
    for (const z of [-64, -68, -72, -76, -80]) {
      b.bed(-6.2, z, Math.PI / 2);
      if (z > -78) b.curtain(-6, z - 2, 3.4, 0);
    }
    for (const z of [-64, -68]) b.bed(6.2, z, -Math.PI / 2);
    b.curtain(6, -70, 3.4, 0);
    for (const [x, z] of [
      [-3, -64],
      [3, -64],
      [-3, -72],
      [3, -72],
      [0, -79],
    ])
      b.ceilingLight(x, z, 3.38, chance(0.85), chance(0.4) ? 0.7 : 0);
    b.cabinet(7.5, -80.5, -Math.PI / 2);
    for (const [x, z] of [
      [-3, -66],
      [2, -74],
      [-1, -62],
    ])
      b.bloodPool(x, z, rand(1, 1.8));

    // corridor 2 to the atrium
    room(b, { x: [8, 30], z: [-78, -74], h: 3.0, rail: true, wall: M.hospWall, floor: M.hospFloor, ceil: M.ceiling, skip: ['xMin', 'xMax'] });
    for (let x = 11; x < 30; x += 5) b.ceilingLight(x, -76, 2.98, chance(0.8), chance(0.5) ? 0.8 : 0, Math.PI / 2);
    b.gurney(22, -74.6, Math.PI / 2 + 0.1);

    // atrium (boss arena) with balconies used as perches
    room(b, { x: [30, 58], z: [-92, -60], h: 10, wall: M.hospWall, floor: M.hospFloor, ceil: M.ceiling, doors: { xMin: [{ c: -76, w: 4, h: 3 }] } });
    b.box(M.concrete, 22, 0.3, 6, 47, 4.0, -65);
    b.box(M.concrete, 22, 0.3, 6, 47, 4.0, -87);
    b.box(M.concrete, 4, 0.3, 16, 56, 4.0, -76);
    for (const z of [-68, -84]) b.box(M.chrome, 22, 0.06, 0.06, 47, 5.0, z);
    b.box(M.chrome, 0.06, 0.06, 16, 54, 5.0, -76);
    for (const [x, z] of [
      [37, -68],
      [45, -68],
      [53, -68],
      [37, -84],
      [45, -84],
      [53, -84],
    ])
      b.cyl(M.white, 0.3, 0.3, 4, x, 2, z, 12);
    b.box(M.lampCold, 10, 0.1, 6, 44, 9.9, -76);
    b.light(44, 8, -76, 0xbfd8ff, 70, 30);
    b.light(44, 3.5, -70, 0xd8e8ff, 14, 12, { flicker: 0.3 });
    b.cone(44, 9.85, -76, 6, 9.85, 0x9ab8ff, 0.03);
    b.ceilingLight(36, -80, 3.95, true, 0.6);
    b.ceilingLight(50, -72, 3.95, true);
    b.light(56, 6, -76, 0xff4a3a, 8, 10, { pulse: 2 });
    b.sign('ICU', 57.85, 6.5, -76, -Math.PI / 2, 1.6, 0.6, '#1a0606', '#ff4a3a', false);
    b.gurney(40, -64, 0.6);
    b.gurney(50, -88, -0.4);
    b.wheelchair(36, -89, 2);
    for (const [x, z] of [
      [42, -79],
      [47, -72],
      [38, -73],
    ])
      b.bloodPool(x, z, rand(1.5, 2.5));
  },

  beats: [
    {
      wait: 1.0,
      spawn: [
        { type: 'crate', at: [8, -18], drop: 'herb' },
        { type: 'crate', at: [-1.2, -47], drop: 'shells', size: 0.6 },
        { type: 'barrel', at: [-7, -79] },
        { type: 'crate', at: [20, -77.2], drop: 'smg', size: 0.7 },
        { type: 'barrel', at: [41, -83] },
        { type: 'barrel', at: [41, -69] },
        { type: 'crate', at: [40, -71.5], drop: 'herb' },
      ],
      msg: 'FIND THE SOURCE OF THE OUTBREAK',
    },
    { move: [[0, E, -3]], speed: 2 },
    {
      look: [0, 1.2, -14],
      fight: {
        time: 38,
        waves: [
          [{ type: 'shambler', at: [-3, -12], emerge: 'getup' }, { type: 'shambler', at: [3.5, -14], emerge: 'getup' }, { type: 'shambler', at: [0, -19.5], delay: 1 }],
          {
            left: 1,
            spawns: [
              { type: 'survivor', at: [12, -6], path: [[7, -6.5], [3.5, -8.5]], exit: [[5, -3], [8, 2]], chasers: [{ type: 'shambler', at: [13.5, -5], door: true }, { type: 'runner', at: [14, -7.5], delay: 1.5, path: [[9, -6]] }] },
              { type: 'shambler', at: [-12.5, -14], path: [[-8, -14]], door: true, delay: 1 },
            ],
          },
          [{ type: 'runner', at: [0, -27] }, { type: 'shambler', at: [-1, -24], delay: 0.5 }, { type: 'crawler', at: [1, -22], delay: 1 }],
        ],
      },
    },
    { move: [[0, E, -12], [0, E, -23]], speed: 3, events: [{ at: 0.7, spawn: [{ type: 'shambler', at: [-3.5, -26], path: [[-0.8, -26]], door: true }] }] },
    {
      look: [0, 1.3, -45],
      fight: {
        time: 38,
        waves: [
          [{ type: 'shambler', at: [3.5, -34], path: [[0.8, -34]], door: true }, { type: 'shambler', at: [0, -48] }, { type: 'shambler', at: [0.6, -53], delay: 1 }],
          { left: 1, spawns: [{ type: 'runner', at: [-3.5, -42], path: [[-0.8, -42]], door: true }, { type: 'runner', at: [0, -58], delay: 0.8 }, { type: 'leaper', at: [0, -55], delay: 1.6 }] },
          [{ type: 'brute', at: [0, -57] }, { type: 'shambler', at: [3.5, -50], path: [[0.8, -50]], door: true, delay: 0.5 }, { type: 'crawler', at: [-0.5, -38], emerge: 'drop', y: 2.8, delay: 1.4 }],
        ],
      },
    },
    { move: [[0, E, -40], [0, E, -56]], speed: 3, events: [{ at: 0.35, spawn: [{ type: 'leaper', at: [0.3, -50], y: 2.8, emerge: 'drop' }] }] },
    {
      look: [0, 1.2, -70],
      fight: {
        time: 42,
        waves: [
          [
            { type: 'shambler', at: [-6, -64], y: 0.75, emerge: 'getup' },
            { type: 'shambler', at: [6, -68], y: 0.75, emerge: 'getup' },
            { type: 'shambler', at: [-6, -72], y: 0.75, emerge: 'getup' },
            { type: 'crawler', at: [2, -66], delay: 1 },
          ],
          { left: 1, spawns: [{ type: 'leaper', at: [-3, -78] }, { type: 'leaper', at: [3, -79], delay: 1 }, { type: 'shambler', at: [6, -64], y: 0.75, emerge: 'getup' }] },
          [{ type: 'runner', at: [12, -76], path: [[5, -76]] }, { type: 'shambler', at: [-6, -80], y: 0.75, emerge: 'getup' }, { type: 'thrower', at: [0, -80] }, { type: 'shambler', at: [14, -75], path: [[5, -76]], delay: 1.5 }],
        ],
      },
    },
    { move: [[0, E, -66], [2, E, -73.5], [8, E, -76], [16, E, -76]], speed: 3 },
    {
      look: [30, 1.3, -76],
      fight: {
        time: 38,
        waves: [
          [{ type: 'shambler', at: [30, -75] }, { type: 'shambler', at: [32, -77], delay: 0.5 }, { type: 'thrower', at: [34, -76], delay: 1.0 }],
          { left: 1, spawns: [{ type: 'brute', at: [36, -76] }, { type: 'runner', at: [33, -74.6], delay: 1 }, { type: 'runner', at: [33, -77.4], delay: 1.5 }] },
          [{ type: 'leaper', at: [28, -76], y: 2.8, emerge: 'drop' }, { type: 'shambler', at: [31, -77], delay: 0.6 }, { type: 'crawler', at: [27, -75], delay: 1 }],
        ],
      },
    },
    { move: [[24, E, -76], [32, E, -76]], speed: 2.6 },
    { look: [44, 2, -76], wait: 0.6 },
    { boss: 'warden', at: [44, 0, -76], look: [44, 2.4, -76] },
    { wait: 3, msg: 'THE TRAIL LEADS UNDERGROUND...', dur: 3 },
  ],
};

// =====================================================================
// CHAPTER 3 - the lab

const stage3 = {
  chapter: 'CHAPTER 3',
  title: 'SUBLEVEL 4',
  subtitle: 'Ashgrove Biomedical. Project ZERO. Containment status: FAILED.',
  theme: 'lab',
  fog: 0x080a0e,
  fogDensity: 0.04,
  mist: 0.045,
  mistColor: 0x8a9ab0,
  hemi: [0x50607a, 0x100c0c, 0.3],
  env: 0.45,
  tint: [0.98, 1.0, 1.06],
  start: [0, E, 1],
  lookStart: [0, 1.4, -12],
  attract: { pos: [0, 2.0, 0], look: [0, 1.6, -30] },

  build(b, g) {
    const M = b.M;
    g.tanks = [];
    // elevator landing + corridor A
    room(b, { x: [-3, 3], z: [-6, 4], h: 3.5, wall: M.labWall, floor: M.plate, ceil: M.darkMetal, base: M.darkMetal, cove: M.darkMetal, doors: { zMin: [{ c: 0, w: 4.4, h: 3.2 }] } });
    b.box(M.darkMetal, 5, 3.2, 0.2, 0, 0, 3.7);
    for (let x = -2.2; x <= 2.2; x += 0.4) b.box(M.chrome, 0.04, 3.2, 0.04, x, 0, 3.4);
    room(b, { x: [-2.2, 2.2], z: [-38, -6], h: 3.2, wall: M.labWall, floor: M.plate, ceil: M.darkMetal, base: M.darkMetal, cove: M.darkMetal, skip: ['zMin', 'zMax'] });
    b.box(M.hazard, 0.35, 0.012, 32, -1.95, 0, -22);
    b.box(M.hazard, 0.35, 0.012, 32, 1.95, 0, -22);
    b.pipe(-1.6, 2.85, -6, -1.6, 2.85, -38, 0.12);
    b.pipe(-1.2, 2.95, -6, -1.2, 2.95, -38, 0.07, M.chrome);
    b.pipe(1.7, 2.75, -6, 1.7, 2.75, -38, 0.15);
    for (const z of [-10, -18, -26, -34]) b.alarm(z % 16 === 0 ? 2.05 : -2.05, 2.6, z);
    for (const z of [-13, -22, -31]) b.ceilingLight(0, z, 3.18, chance(0.7), 0.6, Math.PI / 2);
    b.sign('SUBLEVEL 4  ·  BIOHAZARD', 0, 2.6, -5.85, Math.PI, 3.6, 0.5, '#1a1400', '#ffd23a', false);

    // specimen hall
    room(b, { x: [-11, 11], z: [-72, -38], h: 6, wall: M.labWall, floor: M.plate, ceil: M.darkMetal, base: M.darkMetal, cove: M.darkMetal, doors: { zMax: [{ c: 0, w: 4.4, h: 3.2 }], zMin: [{ c: 0, w: 4, h: 3.2 }] } });
    const burstAt = [
      [-6.5, -44],
      [6.5, -50],
      [-6.5, -56],
      [6.5, -62],
    ];
    for (const z of [-44, -50, -56, -62])
      for (const x of [-6.5, 6.5]) {
        const burst = burstAt.some(([bx, bz]) => bx === x && bz === z);
        const t = b.tank(x, z, 0.75, 2.8, !burst, false);
        if (burst) g.tanks.push(t);
      }
    b.tank(-9.3, -68, 0.7, 2.8, false, true);
    b.tank(9.3, -41, 0.7, 2.8, false, true);
    b.console(-9.5, -48, Math.PI / 2);
    b.console(9.5, -58, -Math.PI / 2);
    b.console(-9.5, -60, Math.PI / 2);
    for (const z of [-42, -54, -66]) {
      b.light(0, 5.2, z, 0xbfd8ff, 14, 14, { flicker: z === -54 ? 0.5 : 0 });
      b.box(M.lampCold, 1.6, 0.06, 0.4, 0, 5.94, z);
      b.cone(0, 5.9, z, 2.6, 5.9, 0xbfd8ff, 0.03);
    }
    b.alarm(-10.85, 4.5, -55);
    b.alarm(10.85, 4.5, -45);
    b.pipe(-10.6, 5.5, -38, -10.6, 5.5, -72, 0.2);
    b.pipe(10.6, 5.2, -38, 10.6, 5.2, -72, 0.2);
    b.box(M.hazard, 4.4, 0.012, 0.4, 0, 0, -38.3);

    // corridor B
    room(b, { x: [-2, 2], z: [-84, -72], h: 3.2, wall: M.labWall, floor: M.plate, ceil: M.darkMetal, base: M.darkMetal, cove: M.darkMetal, skip: ['zMax'], doors: { xMin: [{ c: -82, w: 3.6, h: 3 }] } });
    b.alarm(1.85, 2.6, -77);
    b.ceilingLight(0, -78, 3.18, true, 0.8);
    // corridor C
    room(b, { x: [-34, -2], z: [-84, -80], h: 3.2, wall: M.labWall, floor: M.plate, ceil: M.darkMetal, base: M.darkMetal, cove: M.darkMetal, skip: ['xMin', 'xMax'] });
    for (const x of [-8, -16, -24]) b.alarm(x, 2.6, -80.15);
    for (const x of [-12, -20, -28]) b.ceilingLight(x, -82, 3.18, chance(0.7), 0.7, Math.PI / 2);
    b.pipe(-2, 2.85, -83.5, -34, 2.85, -83.5, 0.12);

    // containment chamber + pit
    room(b, { x: [-64, -34], z: [-98, -66], h: 12, wall: M.labWall, floor: M.plate, ceil: M.darkMetal, base: M.darkMetal, cove: M.darkMetal, doors: { xMax: [{ c: -82, w: 4, h: 3.2 }] } });
    b.cyl(M.black, 5.5, 5.5, 0.05, -48, 0.01, -82, 32);
    b.cyl(M.hazard, 6.2, 6.2, 0.2, -48, -0.02, -82, 32);
    b.cyl(M.black, 5.5, 5.5, 0.4, -48, 0.06, -82, 32);
    // support pillars only on the far side of the pit so they never block the boss
    for (let a = Math.PI / 2; a <= Math.PI * 1.5 + 0.01; a += Math.PI / 4) {
      b.cyl(M.darkMetal, 0.25, 0.3, 12, -48 + Math.cos(a) * 9, 6, -82 + Math.sin(a) * 9, 10);
    }
    b.box(M.glass, 0.1, 2.2, 10, -63.8, 5, -82);
    b.light(-60, 6, -82, 0x40ff80, 10, 16);
    for (const [x, z] of [
      [-40, -68],
      [-56, -68],
      [-40, -96],
      [-56, -96],
    ])
      b.alarm(x, 8, z === -68 ? -66.2 : -97.8);
    b.light(-48, 10, -82, 0xff3020, 30, 30, { pulse: 1.6 });
    b.light(-36, 3, -82, 0xbfd8ff, 10, 12);
    b.cone(-48, 11.9, -82, 7, 11.9, 0xff4a2a, 0.025);
    for (const [x, z] of [
      [-38, -72],
      [-38, -92],
      [-60, -90],
    ])
      b.console(x, z, x > -50 ? -Math.PI / 2 : Math.PI / 2);
    b.sign('CONTAINMENT  ·  SUBJECT 00', -48, 9, -66.2, Math.PI, 6, 0.8, '#1a0404', '#ff4a3a', false);
  },

  beats: [
    {
      wait: 1.2,
      spawn: [
        { type: 'crate', at: [1.4, -19], drop: 'shells', size: 0.6 },
        { type: 'barrel', at: [-1.5, -30] },
        { type: 'crate', at: [9, -45], drop: 'magnum' },
        { type: 'barrel', at: [-8.5, -64] },
        { type: 'crate', at: [1.4, -76], drop: 'herb', size: 0.6 },
        { type: 'crate', at: [-28, -80.7], drop: 'smg', size: 0.6 },
        { type: 'barrel', at: [-44, -74] },
        { type: 'barrel', at: [-40, -88] },
        { type: 'crate', at: [-42, -78.5], drop: 'herb' },
      ],
      msg: 'FIND SUBJECT ZERO',
    },
    { move: [[0, E, -8]], speed: 2.4 },
    {
      look: [0, 1.3, -28],
      fight: {
        time: 38,
        waves: [
          [{ type: 'shambler', at: [0, -26] }, { type: 'shambler', at: [1, -30], delay: 0.7 }, { type: 'runner', at: [-0.5, -36], delay: 1.5 }],
          { left: 1, spawns: [{ type: 'thrower', at: [0, -32] }, { type: 'shambler', at: [-1, -24], emerge: 'drop', y: 2.9 }, { type: 'shambler', at: [1, -20], emerge: 'drop', y: 2.9, delay: 1.2 }] },
          [{ type: 'runner', at: [0, -36] }, { type: 'runner', at: [1, -37], delay: 0.4 }, { type: 'brute', at: [0, -38], delay: 1.5 }],
        ],
      },
    },
    { move: [[0, E, -20], [0, E, -34]], speed: 3, events: [{ at: 0.5, spawn: [{ type: 'leaper', at: [0.5, -31], y: 2.9, emerge: 'drop' }] }] },
    {
      look: [0, 1.5, -55],
      fight: {
        time: 48,
        waves: [
          [{ type: 'shambler', at: [-3, -50] }, { type: 'shambler', at: [3, -52], delay: 0.5 }, { type: 'thrower', at: [0, -66], delay: 1 }],
          { left: 1, spawns: [{ type: 'runner', at: [-6.5, -44], burst: true }, { type: 'runner', at: [6.5, -50], burst: true, delay: 0.8 }, { type: 'leaper', at: [-6.5, -56], burst: true, delay: 1.6 }] },
          { left: 1, spawns: [{ type: 'brute', at: [0, -68] }, { type: 'shambler', at: [-4, -60], delay: 0.5 }, { type: 'shambler', at: [4, -62], delay: 1 }, { type: 'runner', at: [6.5, -62], burst: true, delay: 2 }] },
          [{ type: 'leaper', at: [-3, -58] }, { type: 'leaper', at: [3, -60], delay: 0.8 }, { type: 'thrower', at: [0, -68], delay: 1.2 }],
        ],
      },
    },
    { move: [[0, E, -50], [0, E, -66]], speed: 3, events: [{ at: 0.5, spawn: [{ type: 'crawler', at: [-2, -61] }, { type: 'crawler', at: [2.5, -63] }] }] },
    {
      look: [0, 1.3, -80],
      fight: {
        time: 32,
        waves: [
          [{ type: 'shambler', at: [0, -80] }, { type: 'shambler', at: [-1, -82], path: [[0, -80]], delay: 0.6 }, { type: 'runner', at: [-6, -82], path: [[0, -81]], delay: 1.2 }],
          [{ type: 'brute', at: [-8, -82], path: [[0, -81]] }, { type: 'leaper', at: [0.5, -76], y: 2.9, emerge: 'drop', delay: 1 }, { type: 'thrower', at: [0, -82.5], delay: 1.5 }],
        ],
      },
    },
    { move: [[0, E, -76], [-0.8, E, -81], [-8, E, -82], [-20, E, -82]], speed: 3 },
    {
      look: [-34, 1.3, -82],
      fight: {
        time: 35,
        waves: [
          [{ type: 'runner', at: [-36, -81] }, { type: 'runner', at: [-38, -83], delay: 0.5 }, { type: 'shambler', at: [-34, -82], delay: 1 }],
          { left: 1, spawns: [{ type: 'brute', at: [-38, -82] }, { type: 'thrower', at: [-36, -80.8], delay: 0.8 }, { type: 'leaper', at: [-28, -82], y: 2.9, emerge: 'drop', delay: 1.5 }] },
        ],
      },
    },
    { move: [[-26, E, -82], [-35, E, -82]], speed: 2.5, msg: 'CONTAINMENT BREACH', color: '#ff4a3a' },
    { look: [-46, 3, -82], wait: 1.0 },
    { boss: 'zero', at: [-48, 0, -82], look: [-47, 3.2, -82] },
    { wait: 2, msg: 'SUBJECT ZERO ELIMINATED', dur: 2.5 },
    { move: [[-26, E, -82], [-14, E, -82]], speed: 4, msg: 'GET TO THE SURFACE!', color: '#ffd060' },
  ],
};

export const STAGES = [stage1, stage2, stage3];
