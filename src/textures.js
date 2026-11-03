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

const cache = {};
function cached(key, fn) {
  if (!cache[key]) cache[key] = fn();
  return cache[key];
}

// ---------------------------------------------------------------- environment

export const T = {
  asphalt: () =>
    cached('asphalt', () => {
      const cv = mk(256);
      cv.g.fillStyle = '#262628';
      cv.g.fillRect(0, 0, 256, 256);
      speckle(cv, 5000, ['#1c1c1e', '#303033', '#38383a', '#222'], 1, 2);
      blobs(cv, 8, 'rgba(0,0,0,A)', 10, 40, 0.35);
      cracks(cv, 6, 'rgba(10,10,10,0.8)', 60);
      return toTex(cv.c);
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
      bloodSmears(cv, 2, 0.5);
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
      const bases = ['#7d8a6e', '#8f8b7a', '#6b7562', '#9a8f80', '#77806e'];
      g.fillStyle = bases[variant % bases.length];
      g.fillRect(0, 0, 64, 64);
      speckle(cv, 500, ['rgba(40,50,30,0.4)', 'rgba(120,40,40,0.3)', 'rgba(255,255,255,0.08)'], 1, 2);
      blobs(cv, 5, 'rgba(60,30,40,A)', 4, 10, 0.5);
      g.strokeStyle = 'rgba(50,40,70,0.5)';
      for (let i = 0; i < 4; i++) {
        g.beginPath();
        let x = rand(0, 64);
        let y = rand(0, 64);
        g.moveTo(x, y);
        for (let s = 0; s < 5; s++) g.lineTo((x += rand(-6, 6)), (y += rand(2, 8)));
        g.stroke();
      }
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
  zombieHead: (variant = 0, hair = null) =>
    cached('zhead' + variant + hair, () => {
      const cv = mk(128, 64);
      const g = cv.g;
      g.drawImage(T.skin(variant).image, 0, 0, 64, 64);
      g.drawImage(T.skin(variant).image, 64, 0, 64, 64);
      const fx = 32;
      // sunken eye sockets
      for (const s of [-1, 1]) {
        const grd = g.createRadialGradient(fx + s * 8, 27, 0, fx + s * 8, 27, 8);
        grd.addColorStop(0, 'rgba(10,0,0,0.95)');
        grd.addColorStop(0.6, 'rgba(30,10,15,0.7)');
        grd.addColorStop(1, 'rgba(40,20,30,0)');
        g.fillStyle = grd;
        g.fillRect(fx + s * 8 - 8, 19, 16, 16);
      }
      // nose cavity
      g.fillStyle = 'rgba(25,5,5,0.85)';
      g.fillRect(fx - 3, 33, 2, 4);
      g.fillRect(fx + 1, 33, 2, 4);
      // torn mouth with teeth
      const mw = variant % 2 ? 16 : 12;
      g.fillStyle = '#160404';
      g.beginPath();
      g.ellipse(fx, 44, mw / 2, 4.5, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#cfc6a0';
      for (let x = fx - mw / 2 + 1.5; x < fx + mw / 2 - 1; x += 2.2) {
        g.fillRect(x, 40.5, 1.6, rand(1.5, 2.6));
        g.fillRect(x + 0.6, 47.5 - rand(1, 2.5), 1.6, 2);
      }
      g.fillStyle = 'rgba(120,0,0,0.85)';
      for (let i = 0; i < 5; i++) g.fillRect(fx - mw / 2 + rand(0, mw), 46, 1.2, rand(3, 12));
      // bruising and wounds
      blobs(cv, 4, 'rgba(70,20,40,A)', 3, 7, 0.6);
      if (hair) {
        g.fillStyle = hair;
        g.fillRect(0, 0, 128, 11);
        for (let x = 0; x < 128; x += 2) {
          const back = x > 52 && x < 140;
          g.fillRect(x, 10, 2, back ? rand(16, 30) : rand(0, 5));
        }
        speckle(cv, 300, ['rgba(0,0,0,0.3)'], 1, 1);
      }
      return toTex(cv.c);
    }),

  humanHead: (variant = 0, hair = '#2a1d14') =>
    cached('hhead' + variant + hair, () => {
      const cv = mk(128, 64);
      const g = cv.g;
      g.drawImage(T.humanSkin(variant).image, 0, 0, 64, 64);
      g.drawImage(T.humanSkin(variant).image, 64, 0, 64, 64);
      const fx = 32;
      for (const s of [-1, 1]) {
        g.fillStyle = '#f2efe6';
        g.beginPath();
        g.ellipse(fx + s * 7, 28, 3.2, 2, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#2b1a10';
        g.beginPath();
        g.arc(fx + s * 7, 28, 1.5, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = hair;
        g.fillRect(fx + s * 7 - 4, 23.5, 8, 1.6);
      }
      g.fillStyle = 'rgba(0,0,0,0.18)';
      g.fillRect(fx - 1, 30, 2, 6);
      g.fillStyle = '#5a1c18';
      g.beginPath();
      g.ellipse(fx, 42, 4, 2.6, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = hair;
      g.fillRect(0, 0, 128, 13);
      for (let x = 0; x < 128; x += 2) {
        const back = x > 52;
        g.fillRect(x, 12, 2, back ? rand(22, 34) : rand(0, 7));
      }
      speckle(cv, 300, ['rgba(0,0,0,0.25)', 'rgba(255,255,255,0.06)'], 1, 1);
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
      if (bloody > 0) bloodSmears(cv, Math.round(bloody * 3), 0.75);
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
