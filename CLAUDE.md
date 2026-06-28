# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Dim Sum Games** — the public-facing website for the Dim Sum Games gaming brand.

This is a static website with no build step. It is served directly as plain HTML/CSS/JS, which keeps deployment trivial (any static host or GitHub Pages will work).

## Tech Stack

- **HTML5** — hand-authored, semantic markup.
- **Tailwind CSS** — **compiled to a static `styles.css`** (no runtime CDN). Custom
  theme (brand `coral`/`ink` colors, `display`/`body` fonts) lives in the build
  config, not an inline `tailwind.config` block. See "Regenerating CSS" below.
- **Fonts** — Baloo 2 + Nunito via Google Fonts `<link>`.
- **Vanilla JS** — only when needed; keep it inline and minimal.

No npm/package manager is committed. The only build artifact is `styles.css`,
generated on demand with the standalone Tailwind CLI (a single downloaded binary).

## Project Structure

```
.
├── CLAUDE.md            # This file
├── index.html           # Landing page (single-page entry point)
├── termsofservice.html  # /termsofservice
├── privacypolicy.html   # /privacypolicy
├── 404.html             # GitHub Pages custom 404
├── styles.css           # Compiled Tailwind (generated — see below)
├── app-ads.txt          # Authorized digital sellers (IAB)
├── CNAME                # Custom domain: dimsumgames.com
└── assets/              # Logo, favicon, game icons + source originals
```

## Regenerating CSS

`styles.css` is generated from the class names used across the HTML files. After
editing markup (adding/removing Tailwind classes), rebuild it:

```bash
# 1) Get the standalone CLI once (no npm needed)
curl -sSL -o tailwindcss \
  https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-linux-x64
chmod +x tailwindcss

# 2) Build (scans all *.html via tailwind.config.js → content)
./tailwindcss -i tailwind.input.css -o styles.css --minify
```

where `tailwind.input.css` is just the three `@tailwind base/components/utilities`
directives, and `tailwind.config.js` lists the HTML files as `content` with the
brand `coral`/`ink` colors and `display`/`body` fonts under `theme.extend`.
Per-page custom rules (e.g. the `.legal` typography) stay in inline `<style>`
blocks and are not part of the Tailwind build.

## Conventions

- **Mobile-first, responsive.** Author base styles for small screens, then layer `sm:`, `md:`, `lg:` Tailwind breakpoints upward.
- **Tailwind utility-first.** Prefer utility classes over custom CSS. If a custom value is unavoidable, add it to the brand theme in the build config (then rebuild `styles.css`). After any markup change that touches classes, **rebuild `styles.css`**.
- **Accessibility.** Use semantic elements, `alt` text on images, sufficient color contrast, and visible focus states.
- **Keep it dependency-light.** No npm/bundler. The only tooling is the standalone Tailwind binary used to regenerate `styles.css` (not committed).

## Local Development

Serve the folder (don't open via `file://` — pages reference `/styles.css` and
`/assets/...` with root-absolute paths):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

If styling looks broken after editing markup, rebuild `styles.css` (see
"Regenerating CSS").

## Deployment

The site is static — deploy the repository root to any static host. `app-ads.txt` must remain reachable at the site root (`/app-ads.txt`) for ad-network verification.
