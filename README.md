# Eduardo Legal Static Site

Static marketing site built with Astro, React, and Tailwind, focused on top-tier SEO, bilingual content, and fast static delivery.

## Highlights
- Astro SSG with React islands
- Bilingual content (es/en) with route-level variants
- Advanced SEO: JSON-LD graph, OG/Twitter, canonical, hreflang
- Zod runtime validation for content and forms
- Framer Motion for subtle, accessible animations

## Tech Stack
- Astro 5, React 19, Vite 6
- TailwindCSS, Framer Motion
- Nanostores (global i18n state)
- Zod + React Hook Form

## Requirements
- Node.js ^24.1.0
- pnpm ^10.26.2
- just (Optional command runner)

## Quick Start
```bash
just setup
just dev
```

## Core Commands
```bash
just dev         # Start Astro dev server
just lint        # ESLint
just format      # Prettier check + fix
just type        # astro check
just test        # vitest
just build       # Astro SSG build
just verify      # Full pipeline: format, lint, type, test, build, scan
```

## SEO and i18n
- SEO metadata is generated from `frontend/src/data/estrada-legal.ts`.
- JSON-LD graph connects `Organization` (LegalService), `WebSite`, and `WebPage`.
- Canonical and `hreflang` links are emitted for `es`, `en`, and `x-default`.
- `PUBLIC_SITE_URL` overrides the default site URL in metadata.
- Language routes:
  - Spanish: `/`
  - English: `/en/`

## Environment Variables
```bash
PUBLIC_SITE_URL=https://estradalegal.com
ENABLE_IMAGE_OPTIMIZER=true
```

## Project Structure
```text
frontend/
  src/
    components/
      estrada/       # Main landing UI
      seo/           # SEO head component
    data/            # i18n + SEO content
    lib/             # runtime schemas and seo builder
    layouts/         # Base layout
    pages/           # / and /en routes
    stores/          # nanostores
  public/
    images/          # static assets
```

## Output
Static build output is generated at `frontend/dist`.

## Troubleshooting
- Warning: `baseline-browser-mapping` data is out of date.
  - Fix: `pnpm --dir frontend add -D baseline-browser-mapping@latest`

## Notes
- This is a static-only site (no backend).
- All copy and SEO fields should be edited in `frontend/src/data/estrada-legal.ts`.
