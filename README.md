# studenta.bremlo.uk

A curated directory of student benefits — free, freemium, and discounted tools, services, and offers you can claim with your student status. Built with React, TypeScript, Vite, and Tailwind CSS. Available in English and German.

## Development

```bash
bun install
bun run dev       # start dev server
bun run build     # production build to dist/
bun run typecheck
```

## Deployment (Cloudflare Pages)

- **Framework preset:** Vite
- **Build command:** `bun run build` (or `npm run build` — Vite runs the same)
- **Build output directory:** `dist`
- SPA fallback and asset cache headers are configured via `public/_redirects` and `public/_headers`.

Connect the GitHub repository in the Cloudflare Pages dashboard and the site deploys on every push to `main`.

## Structure

- `src/data/benefits.ts` — all offers and categories
- `src/i18n/` — locale context and German translations
- `src/pages/legal.tsx` — imprint and privacy policy (German legal requirements)
- `public/_redirects`, `public/_headers` — Cloudflare Pages config
