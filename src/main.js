import { Game } from './game.js';

function start() {
  try {
    new Game();
  } catch (err) {
    console.error(err);
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#f0e6d0;font:18px sans-serif;text-align:center;padding:20px;background:#000;z-index:99';
    el.textContent = 'Could not start the game. A browser with WebGL 2 support is required. (' + err.message + ')';
    document.body.appendChild(el);
  }
}

// Wait for the web fonts (if online) so canvas text renders with them.
if (document.fonts && document.fonts.ready) {
  Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]).then(start);
} else start();
