# HEV website

A bilingual static portfolio and news site for HEV. Built with Astro and designed for GitHub Pages deployment.

## Local development

```bash
pnpm install
pnpm dev
```

Open the local URL shown in the terminal. The default route redirects to Korean. English pages are under `/en/`.

## Content editing

- Projects: `src/content/projects/{ko,en}/`
- News: `src/content/news/{ko,en}/`
- Shared interface copy: `src/i18n/copy.ts`
- Business email and global image paths: `src/config/site.ts`
- Image guide: `public/images/README.md`

The website intentionally uses visible asset placeholders. Add official images later by following the image guide.

## Build

```bash
pnpm build
pnpm preview
```

The generated static site is written to `dist/`. GitHub Actions deployment will be added after the local site and repository settings are confirmed.
