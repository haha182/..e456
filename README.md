# Horizon Remade — hosted from this repository

This repository now hosts the upstream **Horizon Remade** browser game at the existing GitHub Pages address.

The exact upstream project is included as a pinned Git submodule at `horizon-remade/`:
- Upstream: https://github.com/Henry-fan88/horizon-remade
- Pinned source commit: `ec4ce49a8f781329d51ee14ea7fa8d4d2a42b5d4`
- The upstream MIT license covers its original source; third-party models, textures, fonts and dependencies retain their own licenses. See `horizon-remade/LICENSE` and `horizon-remade/THIRD_PARTY_NOTICES.md`.

GitHub Actions checks out the submodule, runs its tests and production build, then publishes the generated `dist/` directory to this repository's existing GitHub Pages site.

To update the game version, update the submodule pointer to a reviewed upstream commit and preserve all upstream notices.
