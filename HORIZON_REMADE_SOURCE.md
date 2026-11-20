# Website game source

The GitHub Pages website is built from **Horizon Remade**, an independently developed open-source browser driving game:

- Upstream repository: https://github.com/Henry-fan88/horizon-remade
- Upstream revision deployed by this site: `ec4ce49a8f781329d51ee14ea7fa8d4d2a42b5d4`
- Upstream code license: MIT
- Third-party vehicle models, textures, fonts and libraries retain their own licenses and attribution requirements. The upstream `THIRD_PARTY_NOTICES.md` and bundled license pages are included in the production build.

## How deployment works

The Pages workflow checks out the upstream source at the pinned revision, installs its locked npm dependencies, runs its automated tests, builds the static website, and publishes the resulting `dist/` folder to this repository's existing GitHub Pages address.

The old custom game source remains in the repository history and in the backup branch `pre-horizon-remade-backup-2026-11-20`. The published website is replaced by Horizon Remade after the deployment workflow succeeds.

## Important hosting limitation

GitHub Pages serves static files. Horizon Remade's solo driving mode works on static hosting, but its multiplayer WebSocket server is not hosted by GitHub Pages. Multiplayer requires a separately hosted compatible server.

## Updating the game

To update the website to a newer upstream version, review the upstream changes and licenses, update the pinned commit in `.github/workflows/pages.yml`, and run the Pages workflow. Do not blindly follow the upstream default branch without checking the change first.
