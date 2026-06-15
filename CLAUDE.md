# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Dim Sum Games** — the public-facing website for the Dim Sum Games gaming brand.

This is a static website with no build step. It is served directly as plain HTML/CSS/JS, which keeps deployment trivial (any static host or GitHub Pages will work).

## Tech Stack

- **HTML5** — hand-authored, semantic markup.
- **Tailwind CSS** — loaded via the CDN (`<script src="https://cdn.tailwindcss.com"></script>`). No PostCSS/npm build pipeline.
- **Vanilla JS** — only when needed; keep it inline and minimal.

There is intentionally **no package manager, bundler, or build tooling**. Edit the HTML and refresh the browser.

## Project Structure

```
.
├── CLAUDE.md       # This file
├── index.html      # Landing page (single-page entry point)
└── app-ads.txt     # Authorized digital sellers declaration (placeholder)
```

## Conventions

- **Mobile-first, responsive.** Author base styles for small screens, then layer `sm:`, `md:`, `lg:` Tailwind breakpoints upward.
- **Tailwind utility-first.** Prefer utility classes over custom CSS. If a custom value is unavoidable, configure it through the inline `tailwind.config` block in `index.html`.
- **Accessibility.** Use semantic elements, `alt` text on images, sufficient color contrast, and visible focus states.
- **Keep it dependency-light.** Do not introduce a build step or npm dependencies without a clear reason.

## Local Development

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site is static — deploy the repository root to any static host. `app-ads.txt` must remain reachable at the site root (`/app-ads.txt`) for ad-network verification.
