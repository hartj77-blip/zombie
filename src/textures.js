// Procedurally painted canvas textures. Everything is generated at load time.
import * as THREE from 'three';
import { rand, randi, pick } from './util.js';

// Textures are painted in "logical" pixels and rendered at RES x resolution
// so edges stay crisp with smooth (linear) filtering.
const RES = 2;
function mk(w, h = w, res = RES) {
  const c = document.createElement('canvas');
  c.width = w * res;
  c.height = h * res;
  const g = c.getContext('2d');
  g.scale(res, res);
  return { c, g, w, h };
}

function toTex(c, { nearest = false, color = true, repeat = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = nearest ? THREE.NearestFilter : THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.anisotropy = 8;
  return t;
}

// Draw something at all 9 wrap offsets so textures tile without seams.
function wrap(cv, x, y, r, fn) {
  for (let ox = -1; ox <= 1; ox++)
    for (let oy = -1; oy <= 1; oy++) {
      const px = x + ox * cv.w;
      const py = y + oy * cv.h;
      if (px + r < 0 || py + r < 0 || px - r > cv.w || py - r > cv.h) continue;
      fn(px, py);
    }
}

function speckle(cv, n, colors, smin = 1, smax = 2, alpha = 1) {
  const { g } = cv;
  g.globalAlpha = alpha;
  for (let i = 0; i < n; i++) {
    g.fillStyle = pick(colors);
    const s = randi(smin, smax);
    g.fillRect(randi(0, cv.w - 1), randi(0, cv.h - 1), s, s);
  }
  g.globalAlpha = 1;
}

function blobs(cv, n, color, rmin, rmax, alpha) {
  const { g } = cv;
  for (let i = 0; i < n; i++) {
    const x = rand(0, cv.w);
    const y = rand(0, cv.h);
    const r = rand(rmin, rmax);
    wrap(cv, x, y, r, (px, py) => {
      const grd = g.createRadialGradient(px, py, 0, px, py, r);
      grd.addColorStop(0, color.replace('A', alpha));
      grd.addColorStop(1, color.replace('A', 0));
      g.fillStyle = grd;
      g.fillRect(px - r, py - r, r * 2, r * 2);
    });
  }
}

function cracks(cv, n, color, len = 40) {
  const { g } = cv;
  g.strokeStyle = color;
  g.lineWidth = 1;
  for (let i = 0; i < n; i++) {
    let x = rand(0, cv.w);
    let y = rand(0, cv.h);
    let a = rand(0, Math.PI * 2);
    g.beginPath();
    g.moveTo(x, y);
    for (let s = 0; s < len / 4; s++) {
      a += rand(-0.6, 0.6);
      x += Math.cos(a) * 4;
      y += Math.sin(a) * 4;
      g.lineTo(x, y);
    }
    g.stroke();
  }
}

function bloodSmears(cv, n, alpha = 0.6) {
  const { g } = cv;
  for (let i = 0; i < n; i++) {
    const x = rand(0, cv.w);
    const y = rand(0, cv.h);
    g.fillStyle = `rgba(${randi(70, 110)},0,0,${alpha})`;
    for (let k = 0; k < 14; k++) {
      const r = rand(1, 5);
      g.beginPath();
      g.arc(x + rand(-12, 12), y + rand(-12, 12), r, 0, Math.PI * 2);
      g.fill();
    }
    // drips
    for (let k = 0; k < 4; k++) g.fillRect(x + rand(-10, 10), y, 2, rand(5, 25));
  }
}

// Torn holes in clothing with raw flesh showing through.
function rips(cv, n) {
  const { g } = cv;
  for (let i = 0; i < n; i++) {
    const x = rand(6, cv.w - 6);
    const y = rand(6, cv.h - 6);
    const r = rand(3, 7);
    g.beginPath();
    for (let k = 0; k <= 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const rr = r * rand(0.5, 1.2);
      const px = x + Math.cos(a) * rr * 1.3;
      const py = y + Math.sin(a) * rr * 0.8;
      k ? g.lineTo(px, py) : g.moveTo(px, py);
    }
    g.closePath();
    g.fillStyle = '#5c1d1a';
    g.fill();
    g.lineWidth = 1.2;
    g.strokeStyle = 'rgba(20,10,5,0.9)';
    g.stroke();
    g.fillStyle = 'rgba(150,60,50,0.6)';
    g.fillRect(x - r * 0.4, y - 1, r * 0.8, 1.2);
    for (let k = 0; k < 4; k++) g.fillRect(x + rand(-r, r), y + r * 0.6, 1, rand(3, 9)); // dangling threads / drips
  }
}

// Maps a head-space direction to the sphere UV layout used in rig.js.
function headUV(W, H) {
  return (x, y, z) => {
    const l = Math.hypot(x, y, z);
    return [(0.5 + Math.atan2(x / l, z / l) / (Math.PI * 2)) * W, (Math.acos(y / l) / Math.PI) * H];
  };
}

function paintHair(g, P, W, H, color, patchy) {
  g.fillStyle = color;
  // crown and back of the head; hairline is higher at the forehead
  for (let x = 0; x <= W; x += 1) {
    const u = x / W - 0.5; // -0.5..0.5, 0 = face
    const front = Math.cos(u * Math.PI * 2); // 1 at the face, -1 at the back
    const line = front > 0 ? lerpN(H * 0.36, H * 0.47, 1 - front) : lerpN(H * 0.47, H * 0.62, -front);
    if (patchy && Math.random() < 0.25) continue;
    const jag = patchy ? Math.random() * 6 : Math.random() * 2;
    g.fillRect(x, 0, 1.2, line + jag);
  }
  g.fillStyle = 'rgba(0,0,0,0.25)';
  for (let i = 0; i < 300; i++) g.fillRect(Math.random() * W, Math.random() * H * 0.5, 0.6, 2.5);
  g.fillStyle = 'rgba(255,255,255,0.06)';
  for (let i = 0; i < 150; i++) g.fillRect(Math.random() * W, Math.random() * H * 0.45, 0.5, 2);
  if (patchy) {
    // bald patches with scalp showing
    for (let i = 0; i < 3; i++) {
      const [x, y] = P(Math.random() * 2 - 1, 0.75, Math.random() * 2 - 1);
      const grd = g.createRadialGradient(x, y, 0, x, y, 7);
      grd.addColorStop(0, 'rgba(130,125,105,0.9)');
      grd.addColorStop(1, 'rgba(130,125,105,0)');
      g.fillStyle = grd;
      g.fillRect(x - 7, y - 7, 14, 14);
    }
  }
}
const lerpN = (a, b, t) => a + (b - a) * t;

const cache = {};
function cached(key, fn) {
  if (!cache[key]) cache[key] = fn();
  return cache[key];
}

// ---------------------------------------------------------------- environment

export const T = {
  // Rain-slick road: colour map plus a roughness map with mirror-like puddles.
  asphalt: () => T.wetAsphalt().map,
  wetAsphalt: () =>
    cached('wetAsphalt', () => {
      const cv = mk(256);
      const ro = mk(256);
      cv.g.fillStyle = '#242426';
      cv.g.fillRect(0, 0, 256, 256);
      speckle(cv, 7000, ['#1a1a1c', '#2e2e31', '#39393b', '#202022', '#444446'], 1, 2);
      blobs(cv, 8, 'rgba(0,0,0,A)', 10, 40, 0.3);
      // patched repairs and tyre-worn lanes
      cv.g.fillStyle = 'rgba(10,10,12,0.35)';
      cv.g.fillRect(40, 0, 26, 256);
      cv.g.fillRect(170, 0, 26, 256);
      cv.g.fillStyle = 'rgba(60,60,64,0.25)';
      cv.g.fillRect(90, 60, 50, 34);
      cracks(cv, 9, 'rgba(8,8,8,0.85)', 70);
      // roughness: green channel. damp everywhere, standing water in the dips
      ro.g.fillStyle = 'rgb(0,118,0)';
      ro.g.fillRect(0, 0, 256, 256);
      speckle(ro, 3000, ['rgb(0,150,0)', 'rgb(0,95,0)'], 1, 3);
      for (let i = 0; i < 9; i++) {
        const x = rand(0, 256);
        const y = rand(0, 256);
        const r = rand(14, 38);
        const sx = rand(0.6, 1.6);
        for (const [c2, col, a] of [
          [ro, '0,10,0', 1],
          [cv, '4,5,8', 0.55],
        ]) {
          wrap(c2, x, y, r * 2, (px, py) => {
            c2.g.save();
            c2.g.translate(px, py);
            c2.g.scale(sx, 1);
            const grd = c2.g.createRadialGradient(0, 0, r * 0.45, 0, 0, r);
            grd.addColorStop(0, `rgba(${col},${a})`);
            grd.addColorStop(1, `rgba(${col},0)`);
            c2.g.fillStyle = grd;
            c2.g.fillRect(-r, -r, r * 2, r * 2);
            c2.g.restore();
          });
        }
      }
      return { map: toTex(cv.c), rough: toTex(ro.c, { color: false }) };
    }),

  // Night sky: cloud bank lit by the moon and the glow of the town.
  sky: () =>
    cached('sky', () => {
      const cv = mk(1024, 512, 1);
      const g = cv.g;
      const grd = g.createLinearGradient(0, 0, 0, 512);
      grd.addColorStop(0, '#02030a');
      grd.addColorStop(0.3, '#070b18');
      grd.addColorStop(0.47, '#141a2c');
      grd.addColorStop(0.5, '#1c2030');
      grd.addColorStop(1, '#0a0e16');
      g.fillStyle = grd;
      g.fillRect(0, 0, 1024, 512);
      g.fillStyle = '#cfd6e6';
      for (let i = 0; i < 260; i++) {
        g.globalAlpha = rand(0.2, 0.9);
        g.fillRect(rand(0, 1024), rand(0, 220), rand(0.6, 1.6), rand(0.6, 1.6));
      }
      g.globalAlpha = 1;
      // moon and halo
      const mx = 640;
      const my = 150;
      let h = g.createRadialGradient(mx, my, 0, mx, my, 150);
      h.addColorStop(0, 'rgba(190,205,235,0.55)');
      h.addColorStop(0.2, 'rgba(120,140,190,0.22)');
      h.addColorStop(1, 'rgba(60,80,130,0)');
      g.fillStyle = h;
      g.fillRect(mx - 150, my - 150, 300, 300);
      g.fillStyle = '#e8e6da';
      g.beginPath();
      g.arc(mx, my, 17, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = 'rgba(150,150,140,0.45)';
      for (let i = 0; i < 7; i++) {
        g.beginPath();
        g.arc(mx + rand(-10, 10), my + rand(-10, 10), rand(1.5, 4.5), 0, Math.PI * 2);
        g.fill();
      }
      // cloud layers (wrapped horizontally)
      for (let i = 0; i < 150; i++) {
        const x = rand(0, 1024);
        const y = rand(30, 270);
        const r = rand(30, 110);
        const near = Math.max(0, 1 - Math.hypot(x - mx, y - my) / 320);
        const c = Math.round(18 + near * 95);
        const a = rand(0.08, 0.3);
        for (const ox of [-1024, 0, 1024]) {
          g.save();
          g.translate(x + ox, y);
          g.scale(2.4, 0.55);
          h = g.createRadialGradient(0, 0, 0, 0, 0, r);
          h.addColorStop(0, `rgba(${c},${c + 6},${c + 20},${a})`);
          h.addColorStop(1, `rgba(${c},${c + 6},${c + 20},0)`);
          g.fillStyle = h;
          g.fillRect(-r, -r, r * 2, r * 2);
          g.restore();
        }
      }
      return toTex(cv.c, { repeat: false });
    }),

  // Star-shaped muzzle flash.
  muzzle: () =>
    cached('muzzle', () => {
      const cv = mk(128, 128, 1);
      const g = cv.g;
      g.translate(64, 64);
      const core = g.createRadialGradient(0, 0, 0, 0, 0, 40);
      core.addColorStop(0, 'rgba(255,255,240,1)');
      core.addColorStop(0.3, 'rgba(255,210,120,0.8)');
      core.addColorStop(1, 'rgba(255,120,20,0)');
      g.fillStyle = core;
      g.fillRect(-64, -64, 128, 128);
      for (let i = 0; i < 7; i++) {
        g.rotate((Math.PI * 2) / 7 + rand(-0.2, 0.2));
        const len = rand(34, 62);
        const sp = g.createLinearGradient(0, 0, len, 0);
        sp.addColorStop(0, 'rgba(255,240,200,0.95)');
        sp.addColorStop(1, 'rgba(255,140,30,0)');
        g.fillStyle = sp;
        g.beginPath();
        g.moveTo(0, -7);
        g.lineTo(len, 0);
        g.lineTo(0, 7);
        g.fill();
      }
      return toTex(cv.c, { repeat: false });
    }),

  sidewalk: () =>
    cached('sidewalk', () => {
      const cv = mk(256);
      cv.g.fillStyle = '#5c5a56';
      cv.g.fillRect(0, 0, 256, 256);
      speckle(cv, 4000, ['#4e4c48', '#6a6862', '#57554f'], 1, 2);
      blobs(cv, 10, 'rgba(20,18,15,A)', 15, 45, 0.3);
      cv.g.fillStyle = '#2e2c29';
      cv.g.fillRect(0, 0, 256, 3);
      cv.g.fillRect(0, 0, 3, 256);
      cv.g.fillRect(0, 127, 256, 2);
      cv.g.fillRect(127, 0, 2, 256);
      cracks(cv, 4, 'rgba(30,28,25,0.8)', 40);
      return toTex(cv.c);
    }),

  brick: () =>
    cached('brick', () => {
      const cv = mk(256);
      const g = cv.g;
      g.fillStyle = '#2b2522';
      g.fillRect(0, 0, 256, 256);
      const bh = 16;
      const bw = 48;
      for (let row = 0; row < 256 / bh; row++) {
        const off = row % 2 ? bw / 2 : 0;
        for (let x = -bw; x < 256 + bw; x += bw) {
          const r = randi(85, 120);
          g.fillStyle = `rgb(${r},${randi(38, 52)},${randi(28, 38)})`;
          g.fillRect(x + off + 1, row * bh + 1, bw - 3, bh - 3);
        }
      }
      speckle(cv, 3000, ['rgba(0,0,0,0.3)', 'rgba(255,255,255,0.06)'], 1, 2);
      blobs(cv, 10, 'rgba(10,8,6,A)', 20, 50, 0.4);
      return toTex(cv.c);
    }),

  plaster: () =>
    cached('plaster', () => {
      const cv = mk(256);
      const g = cv.g;
      g.fillStyle = '#5b574e';
      g.fillRect(0, 0, 256, 256);
      speckle(cv, 4000, ['#514d45', '#66615a', '#4a463f'], 1, 3);
      for (let i = 0; i < 18; i++) {
        g.fillStyle = 'rgba(30,25,15,0.18)';
        g.fillRect(rand(0, 256), 0, rand(2, 10), 256);
      }
      blobs(cv, 12, 'rgba(25,22,15,A)', 20, 60, 0.35);
      cracks(cv, 5, 'rgba(20,18,15,0.7)', 50);
      return toTex(cv.c);
    }),

  wood: () =>
    cached('wood', () => {
      const cv = mk(128);
      const g = cv.g;
      for (let p = 0; p < 4; p++) {
        g.fillStyle = `rgb(${randi(80, 100)},${randi(56, 66)},${randi(34, 42)})`;
        g.fillRect(0, p * 32, 128, 32);
        g.fillStyle = 'rgba(20,10,5,0.8)';
        g.fillRect(0, p * 32, 128, 2);
        for (let i = 0; i < 10; i++) {
          g.fillStyle = 'rgba(40,25,10,0.35)';
          g.fillRect(0, p * 32 + rand(3, 30), 128, 1);
        }
      }
      speckle(cv, 600, ['rgba(0,0,0,0.25)'], 1, 2);
      return toTex(cv.c);
    }),

  crate: () =>
    cached('crate', () => {
      const cv = mk(128);
      const g = cv.g;
      g.fillStyle = '#7a5a34';
      g.fillRect(0, 0, 128, 128);
      for (let i = 0; i < 40; i++) {
        g.fillStyle = 'rgba(50,30,10,0.3)';
        g.fillRect(0, rand(0, 128), 128, 1);
      }
      g.fillStyle = '#5a3f20';
      g.fillRect(0, 0, 128, 14);
      g.fillRect(0, 114, 128, 14);
      g.fillRect(0, 0, 14, 128);
      g.fillRect(114, 0, 14, 128);
      g.save();
      g.translate(64, 64);
      g.rotate(Math.PI / 4);
      g.fillRect(-90, -7, 180, 14);
      g.restore();
      speckle(cv, 300, ['rgba(0,0,0,0.4)'], 1, 2);
      return toTex(cv.c);
    }),

  metal: () =>
    cached('metal', () => {
      const cv = mk(128);
      const g = cv.g;
      g.fillStyle = '#4a4f55';
      g.fillRect(0, 0, 128, 128);
      speckle(cv, 1500, ['#3f444a', '#555a60', '#474c52'], 1, 2);
      blobs(cv, 6, 'rgba(90,45,15,A)', 8, 25, 0.5);
      g.strokeStyle = 'rgba(160,165,170,0.25)';
      for (let i = 0; i < 25; i++) {
        g.beginPath();
        const x = rand(0, 128);
        const y = rand(0, 128);
        g.moveTo(x, y);
        g.lineTo(x + rand(-20, 20), y + rand(-4, 4));
        g.stroke();
      }
      g.fillStyle = '#26292d';
      g.fillRect(0, 0, 128, 2);
      g.fillRect(0, 0, 2, 128);
      g.fillStyle = '#6a7076';
      [8, 120].forEach((x) => [8, 120].forEach((y) => g.fillRect(x - 2, y - 2, 4, 4)));
      return toTex(cv.c);
    }),

  rust: () =>
    cached('rust', () => {
      const cv = mk(128);
      cv.g.fillStyle = '#5a3a24';
      cv.g.fillRect(0, 0, 128, 128);
      speckle(cv, 2000, ['#6b4528', '#4a2c18', '#7a5030', '#3b2414'], 1, 3);
      blobs(cv, 10, 'rgba(20,10,5,A)', 10, 30, 0.5);
      return toTex(cv.c);
    }),

  hospFloor: () =>
    cached('hospFloor', () => {
      const cv = mk(256);
      const g = cv.g;
      const s = 32;
      for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
          const v = (x + y) % 2 ? randi(150, 165) : randi(110, 122);
          g.fillStyle = `rgb(${v},${v + 2},${v - 6})`;
          g.fillRect(x * s, y * s, s, s);
        }
      g.fillStyle = 'rgba(40,40,35,0.6)';
      for (let i = 0; i <= 8; i++) {
        g.fillRect(i * s, 0, 1, 256);
        g.fillRect(0, i * s, 256, 1);
      }
      blobs(cv, 14, 'rgba(50,45,30,A)', 15, 50, 0.4);
      speckle(cv, 2000, ['rgba(0,0,0,0.15)'], 1, 2);
      return toTex(cv.c);
    }),

  hospWall: () =>
    cached('hospWall', () => {
      const cv = mk(256);
      const g = cv.g;
      g.fillStyle = '#869c8c';
      g.fillRect(0, 0, 256, 256);
      g.fillStyle = '#3d5648';
      g.fillRect(0, 160, 256, 96);
      g.fillStyle = '#b9c4b4';
      g.fillRect(0, 152, 256, 8);
      speckle(cv, 3000, ['rgba(0,0,0,0.12)', 'rgba(255,255,255,0.06)'], 1, 2);
      for (let i = 0; i < 14; i++) {
        g.fillStyle = 'rgba(60,50,20,0.15)';
        g.fillRect(rand(0, 256), 0, rand(3, 12), rand(60, 200));
      }
      blobs(cv, 8, 'rgba(40,35,20,A)', 20, 50, 0.3);
      cracks(cv, 4, 'rgba(30,30,25,0.6)', 50);
      return toTex(cv.c);
    }),

  ceiling: () =>
    cached('ceiling', () => {
      const cv = mk(128);
      const g = cv.g;
      g.fillStyle = '#9a978c';
      g.fillRect(0, 0, 128, 128);
      speckle(cv, 1500, ['#8c897e', '#a5a296', '#7f7c72'], 1, 2);
      g.fillStyle = '#55534c';
      g.fillRect(0, 0, 128, 3);
      g.fillRect(0, 0, 3, 128);
      blobs(cv, 3, 'rgba(90,70,30,A)', 10, 30, 0.4);
      return toTex(cv.c);
    }),

  plate: () =>
    cached('plate', () => {
      const cv = mk(128);
      const g = cv.g;
      g.fillStyle = '#3c4044';
      g.fillRect(0, 0, 128, 128);
      for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
          const ox = x * 16 + (y % 2) * 8;
          const oy = y * 16;
          g.save();
          g.translate(ox + 4, oy + 8);
          g.rotate(y % 2 ? 0.7 : -0.7);
          g.fillStyle = '#5b6066';
          g.fillRect(-5, -1.5, 10, 3);
          g.restore();
        }
      speckle(cv, 1200, ['rgba(0,0,0,0.25)', 'rgba(255,255,255,0.05)'], 1, 2);
      blobs(cv, 5, 'rgba(10,10,10,A)', 10, 30, 0.4);
      return toTex(cv.c);
    }),

  labWall: () =>
    cached('labWall', () => {
      const cv = mk(256);
      const g = cv.g;
      g.fillStyle = '#3d444c';
      g.fillRect(0, 0, 256, 256);
      speckle(cv, 3000, ['#353b42', '#464e57', '#3a4048'], 1, 2);
      g.fillStyle = '#1e2226';
      for (let i = 0; i <= 4; i++) g.fillRect(i * 64, 0, 2, 256);
      g.fillRect(0, 0, 256, 2);
      g.fillRect(0, 128, 256, 2);
      g.fillStyle = '#5c646d';
      for (let x = 0; x < 4; x++)
        for (let y = 0; y < 2; y++) {
          [6, 58].forEach((ox) => [6, 122].forEach((oy) => g.fillRect(x * 64 + ox, y * 128 + oy - (oy > 64 ? 2 : 0), 3, 3)));
        }
      g.fillStyle = '#c8a400';
      g.fillRect(0, 230, 256, 6);
      blobs(cv, 6, 'rgba(10,15,10,A)', 20, 40, 0.3);
      return toTex(cv.c);
    }),

  hazard: () =>
    cached('hazard', () => {
      const cv = mk(64);
      const g = cv.g;
      g.fillStyle = '#d9a400';
      g.fillRect(0, 0, 64, 64);
      g.fillStyle = '#111';
      for (let i = -64; i < 128; i += 32) {
        g.beginPath();
        g.moveTo(i, 0);
        g.lineTo(i + 16, 0);
        g.lineTo(i + 16 + 64, 64);
        g.lineTo(i + 64, 64);
        g.closePath();
        g.fill();
      }
      speckle(cv, 400, ['rgba(0,0,0,0.3)'], 1, 2);
      return toTex(cv.c);
    }),

  // Building facade with windows; second texture is the emissive (lit windows) map.
  facade: (variant = 0) =>
    cached('facade' + variant, () => {
      const base = mk(256);
      const em = mk(256);
      const g = base.g;
      const palettes = [
        ['#4f3a2e', '#5a4334'],
        ['#3b3f45', '#454a50'],
        ['#55503f', '#5f5a48'],
        ['#3d2f2f', '#4a3838'],
      ];
      const pal = palettes[variant % palettes.length];
      g.fillStyle = pal[0];
      g.fillRect(0, 0, 256, 256);
      speckle(base, 3000, [pal[1], 'rgba(0,0,0,0.2)'], 1, 2);
      em.g.fillStyle = '#000';
      em.g.fillRect(0, 0, 256, 256);
      // 4 bays x 2 storeys per tile (tile = 6m), so windows are ~0.85m x 1.4m
      for (let y = 0; y < 2; y++) {
        g.fillStyle = 'rgba(0,0,0,0.25)';
        g.fillRect(0, y * 128 + 118, 256, 4);
        for (let x = 0; x < 4; x++) {
          const wx = x * 64 + 14;
          const wy = y * 128 + 34;
          const ww = 36;
          const wh = 60;
          g.fillStyle = '#16120e';
          g.fillRect(wx - 4, wy - 4, ww + 8, wh + 8);
          const lit = Math.random() < 0.22;
          const broken = !lit && Math.random() < 0.25;
          g.fillStyle = lit ? pick(['#d8a85a', '#c88a40', '#a8b4bf', '#d0b070']) : '#0a0d12';
          g.fillRect(wx, wy, ww, wh);
          if (lit) {
            const grd = em.g.createLinearGradient(0, wy, 0, wy + wh);
            grd.addColorStop(0, g.fillStyle);
            grd.addColorStop(1, '#3a2a14');
            em.g.fillStyle = grd;
            em.g.fillRect(wx, wy, ww, wh);
            // drawn blinds / curtains
            const cw = rand(6, 16);
            g.fillStyle = 'rgba(40,20,10,0.75)';
            g.fillRect(wx, wy, cw, wh);
            em.g.fillStyle = '#000';
            em.g.fillRect(wx, wy, cw, wh);
            if (Math.random() < 0.3) {
              // a silhouette in the window
              em.g.fillRect(wx + ww * 0.5, wy + 18, 10, 42);
              em.g.beginPath();
              em.g.arc(wx + ww * 0.5 + 5, wy + 14, 6, 0, Math.PI * 2);
              em.g.fill();
            }
          } else {
            g.fillStyle = 'rgba(90,110,130,0.18)';
            g.fillRect(wx + 3, wy + 3, 10, wh - 6);
            if (broken) {
              g.strokeStyle = '#4a4a4a';
              g.beginPath();
              g.moveTo(wx + 8, wy + 8);
              g.lineTo(wx + 22, wy + 30);
              g.lineTo(wx + 14, wy + 52);
              g.stroke();
            }
          }
          g.fillStyle = '#1e1913';
          g.fillRect(wx + ww / 2 - 1.5, wy, 3, wh);
          g.fillRect(wx, wy + wh * 0.45, ww, 3);
          g.fillStyle = '#6b655c';
          g.fillRect(wx - 6, wy + wh + 3, ww + 12, 5);
        }
      }
      blobs(base, 6, 'rgba(0,0,0,A)', 20, 60, 0.35);
      return { map: toTex(base.c), emissive: toTex(em.c) };
    }),

  // Shop / building signs with text.
  sign: (text, bg = '#1a1a1a', fg = '#e8d9a8', w = 512, h = 128, font = 'bold 72px Impact, "Arial Black", sans-serif') =>
    cached('sign' + text + bg + fg, () => {
      const cv = mk(w, h);
      const g = cv.g;
      g.fillStyle = bg;
      g.fillRect(0, 0, w, h);
      g.strokeStyle = fg;
      g.lineWidth = 6;
      g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = fg;
      g.font = font;
      // shrink the font until the text fits the sign
      let size = 72;
      while (g.measureText(text).width > w - 48 && size > 20) {
        size -= 4;
        g.font = font.replace('72px', size + 'px');
      }
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.shadowColor = fg;
      g.shadowBlur = 12;
      g.fillText(text, w / 2, h / 2 + 4);
      g.shadowBlur = 0;
      speckle(cv, 1500, ['rgba(0,0,0,0.35)'], 1, 3);
      return toTex(cv.c, { nearest: false, repeat: false });
    }),

  glow: () =>
    cached('glow', () => {
      const cv = mk(64);
      const grd = cv.g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, 'rgba(255,255,255,1)');
      grd.addColorStop(0.25, 'rgba(255,255,255,0.5)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      cv.g.fillStyle = grd;
      cv.g.fillRect(0, 0, 64, 64);
      return toTex(cv.c, { nearest: false, repeat: false });
    }),

  moon: () =>
    cached('moon', () => {
      const cv = mk(128);
      const g = cv.g;
      const grd = g.createRadialGradient(64, 64, 30, 64, 64, 64);
      grd.addColorStop(0, 'rgba(220,210,190,0.5)');
      grd.addColorStop(1, 'rgba(220,210,190,0)');
      g.fillStyle = grd;
      g.fillRect(0, 0, 128, 128);
      g.fillStyle = '#e9e1cc';
      g.beginPath();
      g.arc(64, 64, 36, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = 'rgba(150,140,120,0.5)';
      for (let i = 0; i < 9; i++) {
        g.beginPath();
        g.arc(64 + rand(-25, 25), 64 + rand(-25, 25), rand(3, 9), 0, Math.PI * 2);
        g.fill();
      }
      return toTex(cv.c, { nearest: false, repeat: false });
    }),

  bloodDecal: () =>
    cached('bloodDecal', () => {
      const cv = mk(128);
      const g = cv.g;
      g.fillStyle = 'rgb(90,0,0)';
      for (let i = 0; i < 26; i++) {
        const a = rand(0, Math.PI * 2);
        const d = rand(0, 30);
        g.beginPath();
        g.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, rand(6, 18), 0, Math.PI * 2);
        g.fill();
      }
      for (let i = 0; i < 30; i++) {
        const a = rand(0, Math.PI * 2);
        const d = rand(35, 60);
        g.beginPath();
        g.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, rand(1, 4), 0, Math.PI * 2);
        g.fill();
      }
      g.fillStyle = 'rgba(40,0,0,0.6)';
      g.beginPath();
      g.arc(64, 64, 14, 0, Math.PI * 2);
      g.fill();
      return toTex(cv.c, { nearest: false, repeat: false });
    }),

  bulletHole: () =>
    cached('bulletHole', () => {
      const cv = mk(32);
      const g = cv.g;
      const grd = g.createRadialGradient(16, 16, 0, 16, 16, 16);
      grd.addColorStop(0, 'rgba(0,0,0,1)');
      grd.addColorStop(0.25, 'rgba(10,10,10,0.95)');
      grd.addColorStop(0.45, 'rgba(40,40,40,0.5)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grd;
      g.fillRect(0, 0, 32, 32);
      return toTex(cv.c, { nearest: false, repeat: false });
    }),

  // ------------------------------------------------------------ characters

  skin: (variant = 0) =>
    cached('skin' + variant, () => {
      const cv = mk(64);
      const g = cv.g;
      const bases = ['#7b876f', '#8d897b', '#6a7564', '#978c7f', '#74806c'];
      g.fillStyle = bases[variant % bases.length];
      g.fillRect(0, 0, 64, 64);
      // mottled, uneven dead skin
      blobs(cv, 16, 'rgba(95,120,80,A)', 5, 14, 0.3);
      blobs(cv, 12, 'rgba(120,70,95,A)', 4, 11, 0.32);
      blobs(cv, 10, 'rgba(150,140,110,A)', 4, 10, 0.25);
      blobs(cv, 8, 'rgba(50,40,30,A)', 3, 8, 0.35);
      // veins showing through
      g.lineWidth = 0.6;
      for (let i = 0; i < 7; i++) {
        g.strokeStyle = `rgba(${randi(50, 80)},${randi(40, 60)},${randi(80, 110)},0.55)`;
        let x = rand(0, 64);
        let y = rand(0, 64);
        let a = rand(0, Math.PI * 2);
        g.beginPath();
        g.moveTo(x, y);
        for (let k = 0; k < 9; k++) {
          a += rand(-0.7, 0.7);
          x += Math.cos(a) * 2.5;
          y += Math.sin(a) * 2.5;
          g.lineTo(x, y);
          if (Math.random() < 0.2) {
            g.moveTo(x, y);
          }
        }
        g.stroke();
      }
      // open sores
      for (let i = 0; i < 3; i++) {
        const x = rand(4, 60);
        const y = rand(4, 60);
        const r = rand(1.2, 2.8);
        const grd = g.createRadialGradient(x, y, 0, x, y, r * 1.8);
        grd.addColorStop(0, 'rgba(60,5,5,0.95)');
        grd.addColorStop(0.5, 'rgba(120,30,30,0.8)');
        grd.addColorStop(1, 'rgba(140,90,70,0)');
        g.fillStyle = grd;
        g.fillRect(x - r * 2, y - r * 2, r * 4, r * 4);
      }
      speckle(cv, 700, ['rgba(40,50,30,0.35)', 'rgba(120,40,40,0.25)', 'rgba(255,255,255,0.07)'], 1, 1);
      bloodSmears(cv, 1, 0.5);
      return toTex(cv.c);
    }),

  humanSkin: (variant = 0) =>
    cached('hskin' + variant, () => {
      const cv = mk(32);
      const tones = ['#d2a07c', '#8d5a3b', '#e6bf9e', '#b07a55'];
      cv.g.fillStyle = tones[variant % tones.length];
      cv.g.fillRect(0, 0, 32, 32);
      speckle(cv, 60, ['rgba(0,0,0,0.06)'], 1, 2);
      return toTex(cv.c);
    }),

  // Wrap-around head textures for sphere heads: the face is centred at u=0.25
  // (the +z side of a THREE.SphereGeometry), hair covers the top and back.
  // Head textures for the sculpted sphere heads in rig.js. Canvas x maps to
  // longitude (face at the centre), canvas y to latitude (crown at the top).
  zombieHead: (variant = 0, hair = null) =>
    cached('zhead2' + variant + hair, () => {
      const W = 160;
      const H = 128;
      const cv = mk(W, H);
      const g = cv.g;
      const P = headUV(W, H);
      for (let x = 0; x < W; x += 64) for (let y = 0; y < H; y += 64) g.drawImage(T.skin(variant).image, x, y, 64, 64);
      const shade = (x, y, r, rgb, a, sy = 1) => {
        g.save();
        g.translate(x, y);
        g.scale(1, sy);
        const grd = g.createRadialGradient(0, 0, 0, 0, 0, r);
        grd.addColorStop(0, `rgba(${rgb},${a})`);
        grd.addColorStop(1, `rgba(${rgb},0)`);
        g.fillStyle = grd;
        g.fillRect(-r, -r, r * 2, r * 2);
        g.restore();
      };
      // sunken temples and cheeks
      for (const sx of [-1, 1]) {
        const [tx, ty] = P(sx * 0.72, 0.25, 0.6);
        shade(tx, ty, 9, '40,30,40', 0.35);
        const [cx, cy] = P(sx * 0.45, -0.3, 0.84);
        shade(cx, cy, 8, '40,20,30', 0.4);
      }
      // dark, bruised eye sockets with a dull eye in each
      for (const sx of [-1, 1]) {
        const [ex, ey] = P(sx * 0.34, 0.14, 0.93);
        shade(ex, ey + 0.6, 8.5, '45,10,25', 0.9, 0.8);
        shade(ex, ey, 4.2, '10,0,0', 0.95, 0.75);
        g.fillStyle = 'rgba(200,190,150,0.55)';
        g.beginPath();
        g.ellipse(ex, ey, 2.1, 1.3, 0, 0, Math.PI * 2);
        g.fill();
      }
      // nostrils
      const [nx, ny] = P(0, -0.2, 0.98);
      g.fillStyle = 'rgba(25,5,5,0.9)';
      for (const sx of [-1, 1]) {
        g.beginPath();
        g.ellipse(nx + sx * 2.2, ny, 1.3, 0.9, 0, 0, Math.PI * 2);
        g.fill();
      }
      // torn mouth: cracked lips, gums and teeth
      const [mx, my] = P(0, -0.43, 0.9);
      const mw = variant % 2 ? 8.5 : 7;
      g.fillStyle = 'rgba(85,35,40,0.9)';
      g.beginPath();
      g.ellipse(mx, my + 0.8, mw + 1.2, 3.6, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#140303';
      g.beginPath();
      g.ellipse(mx, my + 0.9, mw, 2.1, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#d2c79e';
      for (let x = mx - mw + 1; x < mx + mw - 1; x += 1.6) {
        if (Math.random() < 0.15) continue; // missing teeth
        g.fillRect(x, my - 0.9, 1.2, rand(1.1, 1.9));
        g.fillRect(x + 0.4, my + 2.4 - rand(0.8, 1.6), 1.2, 1.5);
      }
      g.fillStyle = 'rgba(110,0,0,0.85)';
      for (let i = 0; i < 6; i++) g.fillRect(mx - mw + rand(0, mw * 2), my + 2.5, rand(0.8, 1.6), rand(4, 18));
      // bite wounds / gashes
      for (let i = 0; i < 2; i++) {
        const [wx, wy] = P(rand(-0.8, 0.8), rand(-0.3, 0.5), rand(0.2, 1));
        shade(wx, wy, rand(3, 5), '90,5,5', 0.9);
        shade(wx, wy, 1.6, '30,0,0', 0.9);
      }
      // ears
      for (const ux of [0.25, 0.75]) shade(W * ux, P(0, 0.0, 1)[1], 7, '50,30,35', 0.4);
      if (hair) paintHair(g, P, W, H, hair, true);
      speckle(cv, 250, ['rgba(0,0,0,0.25)'], 1, 1);
      return toTex(cv.c);
    }),

  humanHead: (variant = 0, hair = '#2a1d14') =>
    cached('hhead2' + variant + hair, () => {
      const W = 160;
      const H = 128;
      const cv = mk(W, H);
      const g = cv.g;
      const P = headUV(W, H);
      for (let x = 0; x < W; x += 32) for (let y = 0; y < H; y += 32) g.drawImage(T.humanSkin(variant).image, x, y, 32, 32);
      for (const sx of [-1, 1]) {
        const [ex, ey] = P(sx * 0.34, 0.14, 0.93);
        g.fillStyle = 'rgba(0,0,0,0.18)';
        g.beginPath();
        g.ellipse(ex, ey - 0.8, 4, 2.6, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#f2eee4';
        g.beginPath();
        g.ellipse(ex, ey, 2.6, 1.4, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#3a2614';
        g.beginPath();
        g.arc(ex + sx * 0.2, ey, 1.1, 0, Math.PI * 2);
        g.fill();
        const [bx, by] = P(sx * 0.34, 0.3, 0.9);
        g.fillStyle = hair;
        g.fillRect(bx - 3.5, by - 0.6, 7, 1.3);
      }
      const [nx, ny] = P(0, -0.2, 0.98);
      g.fillStyle = 'rgba(60,20,10,0.5)';
      for (const sx of [-1, 1]) {
        g.beginPath();
        g.ellipse(nx + sx * 2, ny, 1.1, 0.7, 0, 0, Math.PI * 2);
        g.fill();
      }
      const [mx, my] = P(0, -0.43, 0.9);
      g.fillStyle = '#9a4a42';
      g.beginPath();
      g.ellipse(mx, my + 0.8, 5.5, 2.2, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#3a1210';
      g.beginPath();
      g.ellipse(mx, my + 0.8, 4.2, 1.1, 0, 0, Math.PI * 2); // frightened, open mouth
      g.fill();
      paintHair(g, P, W, H, hair, false);
      speckle(cv, 200, ['rgba(0,0,0,0.06)'], 1, 1);
      return toTex(cv.c);
    }),

  // Vertical gradient used for fake volumetric light cones.
  beam: () =>
    cached('beam', () => {
      const cv = mk(16, 128, 1);
      const grd = cv.g.createLinearGradient(0, 0, 0, 128);
      grd.addColorStop(0, 'rgba(255,255,255,0.9)');
      grd.addColorStop(0.35, 'rgba(255,255,255,0.35)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      cv.g.fillStyle = grd;
      cv.g.fillRect(0, 0, 16, 128);
      return toTex(cv.c, { repeat: false });
    }),

  hair: (color = '#2a1d14') =>
    cached('hair' + color, () => {
      const cv = mk(32);
      cv.g.fillStyle = color;
      cv.g.fillRect(0, 0, 32, 32);
      speckle(cv, 200, ['rgba(0,0,0,0.3)', 'rgba(255,255,255,0.08)'], 1, 2);
      return toTex(cv.c);
    }),

  cloth: (color, kind = 'shirt', bloody = 0.6) =>
    cached('cloth' + color + kind + bloody, () => {
      const cv = mk(64);
      const g = cv.g;
      g.fillStyle = color;
      g.fillRect(0, 0, 64, 64);
      if (kind === 'plaid') {
        g.fillStyle = 'rgba(0,0,0,0.3)';
        for (let i = 0; i < 64; i += 12) {
          g.fillRect(i, 0, 4, 64);
          g.fillRect(0, i, 64, 4);
        }
      } else if (kind === 'gown') {
        g.fillStyle = 'rgba(255,255,255,0.25)';
        for (let y = 2; y < 64; y += 8) for (let x = (y / 8) % 2 ? 4 : 0; x < 64; x += 8) g.fillRect(x, y, 2, 2);
      } else if (kind === 'denim') {
        g.fillStyle = 'rgba(255,255,255,0.08)';
        for (let i = 0; i < 64; i += 2) g.fillRect(0, i, 64, 1);
      } else if (kind === 'uniform') {
        g.fillStyle = '#c9a43a';
        g.fillRect(8, 10, 6, 6);
        g.fillStyle = 'rgba(255,255,255,0.15)';
        g.fillRect(30, 0, 2, 64);
      } else if (kind === 'apron') {
        g.fillStyle = 'rgba(0,0,0,0.15)';
        g.fillRect(0, 0, 64, 3);
      } else if (kind === 'hazmat') {
        g.fillStyle = 'rgba(0,0,0,0.25)';
        g.fillRect(0, 30, 64, 4);
        g.fillStyle = '#222';
        g.fillRect(24, 10, 16, 12);
      }
      speckle(cv, 400, ['rgba(0,0,0,0.2)', 'rgba(255,255,255,0.05)'], 1, 2);
      blobs(cv, 5, 'rgba(30,25,15,A)', 5, 14, 0.4);
      if (bloody > 0) {
        rips(cv, Math.round(bloody * 3));
        bloodSmears(cv, Math.round(bloody * 3), 0.75);
        blobs(cv, Math.round(bloody * 4), 'rgba(70,0,0,A)', 6, 14, 0.45);
      }
      return toTex(cv.c);
    }),

  // Wet organic flesh used on mutated bosses.
  flesh: () =>
    cached('flesh', () => {
      const cv = mk(128);
      const g = cv.g;
      g.fillStyle = '#6e2a2a';
      g.fillRect(0, 0, 128, 128);
      blobs(cv, 30, 'rgba(150,60,60,A)', 4, 14, 0.6);
      blobs(cv, 20, 'rgba(30,5,10,A)', 4, 12, 0.6);
      g.strokeStyle = 'rgba(40,10,40,0.6)';
      g.lineWidth = 2;
      for (let i = 0; i < 12; i++) {
        g.beginPath();
        let x = rand(0, 128);
        let y = rand(0, 128);
        g.moveTo(x, y);
        for (let s = 0; s < 8; s++) g.lineTo((x += rand(-10, 10)), (y += rand(-10, 10)));
        g.stroke();
      }
      speckle(cv, 600, ['rgba(255,200,200,0.15)'], 1, 2);
      return toTex(cv.c);
    }),

  screen: () =>
    cached('screen', () => {
      const cv = mk(64);
      const g = cv.g;
      g.fillStyle = '#031a08';
      g.fillRect(0, 0, 64, 64);
      g.fillStyle = '#2bd46a';
      for (let y = 6; y < 60; y += 6) g.fillRect(4, y, rand(10, 54), 2);
      g.fillStyle = 'rgba(0,0,0,0.3)';
      for (let y = 0; y < 64; y += 2) g.fillRect(0, y, 64, 1);
      return toTex(cv.c);
    }),
};
