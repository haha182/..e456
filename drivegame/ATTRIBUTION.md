# Drive Game environment integration

This folder contains source code copied from:

- Project: https://github.com/esc5221/drive-game
- Copyright: Copyright (c) 2026 bwchoi
- Source-code license: MIT (see [LICENSE](./LICENSE))

Copied modules:
- `world.js` — road mesh construction, asphalt/rubber textures, curbs, guardrails, forest, signs, road furniture and streetlights.
- `track.js` — sampled track geometry and road-frame helpers.
- `terrain.js` — procedural terrain and ground-height helpers.
- `raceline.js` — racing-line calculations used by the world renderer.
- `track_data.js` — Nürburgring track geometry.

## Track-data attribution

The bundled Nürburgring track geometry is derived from OpenStreetMap data and is licensed under the Open Database License (ODbL) 1.0. © OpenStreetMap contributors. See https://www.openstreetmap.org/copyright and https://opendatacommons.org/licenses/odbl/1-0/.

The MIT license applies to the source code, not the OpenStreetMap-derived track data.
