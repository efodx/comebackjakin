# Jakin, pridi nazaj

A dependency-free cinematic story for Bobo, Miki, Kevin, Pipej, and Jakin. Seven scenes cut between friends on League voice, move through the empty fifth slot and Kevin's invitation, and end with the hoped-for reunion. Scrolling drives character gestures, camera movement, and extended voice transitions. Reduced-motion preferences and browsers without JavaScript show complete static panels.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. The page has no build step or third-party runtime dependency.

## GitHub Pages

The repository is configured to publish the root directory with GitHub Pages through the workflow in `.github/workflows/pages.yml`. Push to `main`, then enable GitHub Pages with **GitHub Actions** as the source in the repository settings. The workflow supports project-site paths and deploys the static files as-is.

## Contents

- `index.html` — the seven-scene Slovenian story, gaming rooms, and SVG character rigs, complete without JavaScript.
- `styles.css` — base typography and cinematic scenery.
- `story.css` — responsive comic panels, character styling, and reduced-motion presentation.
- `cinematic.css` — the selected character close-ups, gaming setups, speech bubbles, reunion montage, and static fallbacks.
- `script.js` — optional voice-call cuts, character gestures, and speech-tail positioning.
- `docs/specs/jakin-comeback.md` — the agreed project specification.
