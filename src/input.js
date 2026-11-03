// Mouse / keyboard / touch input. The cursor is the gun sight (light-gun style).
export class Input {
  constructor(game, el) {
    this.g = game;
    this.el = el;
    this.aim = { x: 0, y: 0 }; // normalised device coords
    this.px = window.innerWidth / 2;
    this.py = window.innerHeight / 2;
    this.coverKeys = new Set();
    this.coverTouch = false;
    this.touch = false;
    this.botDriven = false;

    const setAim = (cx, cy) => {
      this.px = cx;
      this.py = cy;
      this.aim.x = (cx / window.innerWidth) * 2 - 1;
      this.aim.y = -(cy / window.innerHeight) * 2 + 1;
    };
    this.setAim = setAim;

    el.addEventListener('pointermove', (e) => {
      if (this.botDriven) return;
      setAim(e.clientX, e.clientY);
    });
    el.addEventListener('pointerdown', (e) => {
      game.audio.init();
      if (this.botDriven) return;
      if (e.pointerType === 'touch') {
        this.touch = true;
        document.body.classList.add('touch');
      }
      setAim(e.clientX, e.clientY);
      if (e.button === 2) game.input_reload();
      else if (e.button === 0) game.input_fire(true);
    });
    window.addEventListener('pointerup', (e) => {
      if (e.button === 0) game.input_fire(false);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener(
      'wheel',
      (e) => {
        game.arsenal.cycle(e.deltaY > 0 ? 1 : -1);
      },
      { passive: true }
    );

    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      game.audio.init();
      const k = e.code;
      if (k === 'Space' || k === 'ShiftLeft' || k === 'ShiftRight' || k === 'KeyC' || k === 'ControlLeft') {
        this.coverKeys.add(k);
        e.preventDefault();
      } else if (k === 'KeyR') game.input_reload();
      else if (k.startsWith('Digit')) {
        const n = parseInt(k.slice(5), 10);
        game.input_weapon(n - 1);
      } else if (k === 'KeyQ') game.arsenal.cycle(-1);
      else if (k === 'KeyE') game.arsenal.cycle(1);
      else if (k === 'Escape' || k === 'KeyP') game.togglePause();
      else if (k === 'KeyM') game.toggleMute();
      else if (k === 'Enter') game.input_confirm();
    });
    window.addEventListener('keyup', (e) => {
      this.coverKeys.delete(e.code);
    });
    window.addEventListener('blur', () => {
      this.coverKeys.clear();
      game.input_fire(false);
    });

    // on-screen touch buttons
    const btn = (id, down, up) => {
      const b = document.getElementById(id);
      if (!b) return;
      b.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        e.preventDefault();
        game.audio.init();
        down();
      });
      b.addEventListener('pointerup', (e) => {
        e.stopPropagation();
        up && up();
      });
      b.addEventListener('pointerleave', () => up && up());
    };
    btn(
      'btn-cover',
      () => (this.coverTouch = true),
      () => (this.coverTouch = false)
    );
    btn('btn-reload', () => game.input_reload());
    btn('btn-weapon', () => game.arsenal.cycle(1));
    btn('btn-pause', () => game.togglePause());
  }

  get cover() {
    return this.coverKeys.size > 0 || this.coverTouch;
  }
}
