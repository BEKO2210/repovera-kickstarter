# Repovera — Pre-Launch Site

The official pre-launch landing page for **Repovera**, a global code hosting and collaboration platform built from Germany with privacy, transparency, and trust at its core.

## Tech Stack

- [Astro 5](https://astro.build) — Static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) — Type safety
- [MDX](https://mdxjs.com) — Content authoring

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy

This site outputs static files to `dist/` and is configured for GitHub Pages deployment.

The `astro.config.mjs` has `site` and `base` set for GitHub Pages. Update these if deploying elsewhere.

## Configuration — What to Replace

### Kickstarter URL
Update the placeholder Kickstarter link in:
- `src/consts/site.ts` → `KICKSTARTER_URL`

### GitHub URL
Already set to this repository. Update in:
- `src/consts/site.ts` → `GITHUB_URL`

### Legal Details (Imprint)
Update placeholder fields in:
- `src/consts/site.ts` → `FOUNDER_NAME_PLACEHOLDER`, `COMPANY_NAME_PLACEHOLDER`, `COMPANY_ADDRESS_PLACEHOLDER`, `VAT_ID_PLACEHOLDER`

### Contact & Waitlist Emails
Update in:
- `src/consts/site.ts` → `CONTACT_EMAIL`, `WAITLIST_EMAIL`

### Site URL
Update for your deployment target in:
- `src/consts/site.ts` → `SITE_URL`
- `astro.config.mjs` → `site` and `base`

## Project Structure

```
src/
  consts/         # Site constants, navigation links
  data/           # Feature lists, FAQ, roadmap, comparison data
  layouts/        # Base HTML layout with SEO
  components/
    ui/           # Reusable UI primitives (Button, Badge, Container, etc.)
    site/         # Page-level sections (Header, Hero, Footer, etc.)
  content/        # MDX content (manifesto)
  pages/          # Astro pages (/, /manifesto, /privacy, /imprint, /roadmap, /404)
  styles/         # Global CSS and Tailwind theme
  scripts/        # Lightweight client-side JS (scroll reveal)
public/           # Static assets (favicon, OG image, grid pattern)
```

## License

All rights reserved. Content and code are proprietary to the Repovera project.
