# Jakin, pridi nazaj

A tiny, dependency-free illustrated story page for Bobo, Miki, Kevin, Pipej, and Jakin. Six comic panels move from a familiar League voice lobby through an empty slot and back to a warm invitation. Scrolling drives gentle character gestures, camera movement, and panel transitions; reduced-motion preferences show static panels.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. The page has no build step or third-party runtime dependency.

## GitHub Pages

The repository is configured to publish the root directory with GitHub Pages through the workflow in `.github/workflows/pages.yml`. Push to `main`, then enable GitHub Pages with **GitHub Actions** as the source in the repository settings. The workflow supports project-site paths and deploys the static files as-is.

## Contents

- `index.html` — the six-scene Slovenian story and SVG character rigs, complete without JavaScript.
- `styles.css` — base typography and cinematic scenery.
- `story.css` — responsive comic panels, character styling, and reduced-motion presentation.
- `script.js` — optional scroll-driven panel and character animation.
- `docs/specs/jakin-comeback.md` — the agreed project specification.
