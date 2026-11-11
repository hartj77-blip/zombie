# GRAVE SHIFT

### [▶ Play GRAVE SHIFT in your browser](https://hartj77-blip.github.io/zombie/)

[![First-person view down a rain-soaked street at night, pistol raised, zombies ahead](./docs/screenshot.jpg)](https://hartj77-blip.github.io/zombie/)

A browser zombie **rail shooter** in the spirit of the classic arcade light-gun games: the camera moves you through the level on rails while you aim and shoot with the mouse. It combines three influences:

- **Rail shooting and dismemberment** (House of the Dead style): headshots, severed limbs, survivors to rescue, bosses with glowing weak points
- **Cover and a countdown timer** (Time Crisis style): hold a key to duck behind cover, reload, and dodge attacks while a timer counts down
- **Survival horror atmosphere** (Resident Evil style): a flashlight, an ECG "condition" health monitor, green herbs, and a creepy hospital and underground lab

The look aims for the PS2/PS3 era: smooth characters, real-time flashlight shadows, bloom, wet reflective streets, fake light shafts and a film-grain color grade. Everything is generated in code: textures are painted on canvases, sounds and music are synthesized with the Web Audio API, and there are no image or audio files.

## Play

**Online:** https://hartj77-blip.github.io/zombie/ (best in a desktop browser: Chrome, Edge, Firefox or Safari).

**Offline:** download or clone this repo and open `index.html`. No server or install needed; the game is pre-built into `dist/game.js`.

The online link is served by **GitHub Pages**. If it shows a 404, Pages hasn't been switched on yet: in the repo go to Settings → Pages, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save. The site is live a minute or two later.

## Controls

| Action | Mouse / keyboard | Touch |
| --- | --- | --- |
| Aim | Move the mouse | Tap where you want to shoot |
| Shoot | Left click (hold for SMG) | Tap |
| Reload | Right click or `R` | RELOAD button |
| Take cover (reloads all weapons, blocks attacks) | Hold `Space` (or `Shift` / `C`) | Hold the COVER button |
| Switch weapon | `1`–`4`, mouse wheel, `Q` / `E` | WEAPON button |
| Pause / mute | `Esc` / `M` | ❚❚ button |

## How to play

- **Headshots** kill instantly (and take the head off). Body shots knock zombies back.
- **Shoot limbs off**: one pistol round to the forearm cuts it off at the elbow, two to the upper arm take the whole arm at the shoulder, and the same goes for shins (knee) and thighs (hip). A zombie that loses a leg drops and crawls after you. Shotgun blasts at close range can tear a zombie apart entirely.
- A zombie that **flashes red** with a **"!"** marker over it is about to hit you. Shoot it to interrupt the attack, or take cover.
- **Thrown objects** (bottles, cleavers, acid) can be shot out of the air.
- **Survivors**: kill the zombies chasing them to earn an extra life. Don't shoot the survivors.
- **Crates** hold green herbs (+1 life) and weapons: shotgun, SMG and magnum. **Red barrels** explode.
- In fights, the **TIME** counter runs down. If it reaches zero, you lose a life.
- Each boss has a **glowing weak point**. Shooting anything else barely hurts it.
- When you run out of lives you can continue, but your credits used are shown on your score.

## The campaign

1. **Nightfall** — rain-soaked downtown streets. Boss: *The Butcher*.
2. **Mercy General** — a hospital overrun by its own patients. Boss: *The Warden*.
3. **Sublevel 4** — the underground lab where it began. Boss: *Subject Zero*.

## Development

```bash
npm install
```

```bash
npm run dev
```

`npm run dev` rebuilds on change and serves the game at http://localhost:8000.

```bash
npm run build
```

`npm run build` writes the minified bundle to `dist/game.js`. Commit it, since `index.html` loads it directly.

### Project layout

| File | What it does |
| --- | --- |
| `src/game.js` | Renderer and post-processing, game state machine, scoring, the player |
| `src/director.js` | The "rail": runs each stage's scripted beats (camera moves, fights, bosses) |
| `src/stages.js` | Level geometry and beat scripts for the three chapters |
| `src/entities.js` | Zombies (6 types) and their AI, survivors, projectiles, pickups, barrels, crates |
| `src/bosses.js` | The three bosses |
| `src/rig.js` | Procedurally generated skinned humanoids (lofted bodies, sculpted heads, hitboxes), outfits and severed-limb pieces |
| `src/weapons.js` | Hitscan weapons, reloading, cover reload |
| `src/builder.js` | Level construction kit: materials, batching, props |
| `src/effects.js` | Particles, blood decals, debris, fire, rain, pooled dynamic lights |
| `src/textures.js` | Procedurally painted canvas textures |
| `src/audio.js` | Synthesized sound effects and step-sequenced music |
| `src/hud.js` | Crosshair, health monitor, ammo, timer, boss bar, blood on screen |

### Debug URL parameters

| Parameter | Effect |
| --- | --- |
| `?stage=1` | Start at a given stage (0-based) |
| `?beat=5` | Start at a given beat within the stage |
| `?god` | Player can't die |
| `?bot` | Autoplay: the game aims and shoots by itself (used for testing) |
| `?quality=low` | Force low graphics (no shadows, bloom or MSAA) |
| `?norender&speed=6` | Skip rendering and run the simulation 6× faster (for automated test runs with `?bot&god`) |

Example: `index.html?stage=2&beat=10&god` jumps to the final boss.
