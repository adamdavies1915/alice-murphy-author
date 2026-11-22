# Alice Murphy author website

Static HTML, CSS, and JavaScript. GitHub Pages publishes the root of the `main` branch. No build or GitHub Actions workflow is needed.

## Preview

Run `python3 -m http.server 8080` and visit http://localhost:8080.

## Edit

- `index.html`: content and links
- `style.css`: layout and responsive styles
- `app.js`: mobile navigation
- `images/`: selected Instagram photographs and responsive variants
- `assets/`: motion utilities

Push changes to `main` to publish. The newsletter link opens Alice’s existing website; this site has no backend.

If the hosting domain changes, update the `og:url` and `og:image` metadata in `index.html`. Relative asset paths support repository URLs and custom domains.
