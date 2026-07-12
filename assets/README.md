# Site assets

Only web-ready files the site actually serves live here. High-res source
originals (logos, App Store screenshots, header art) are kept in the team's
Google Drive, not the repo.

```
assets/
├── logo-icon.png        # studio mark (nav, hero, footer)
├── favicon.png          # browser / apple-touch icon
├── dsq-icon.png         # Dim Sum Queens app icon (home card, OG)
├── ttg-icon.png         # Tiny Tactics GO! app icon (home card, OG)
├── og-image.png         # 1200×630 social share card
├── dsq/web/             # Dim Sum Queens page: logo, mockups, screenshots
└── ttg/web/             # Tiny Tactics GO! page: logo, hero, mockups, screenshots
```

The `web/` images are downscaled/compressed from the Drive originals. To refresh
them, re-optimize the source and drop the result into the matching `web/` folder
using the same filename.
