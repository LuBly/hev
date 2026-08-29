# HEV image assets

The site works without image files. Empty slots show the filename and recommended dimensions until official assets are ready.

## Required folders and files

| Page | File | Recommended size | Ratio |
| --- | --- | ---: | ---: |
| Home hero | `hero/hev-studio.webp` | 2400 x 1350 | 16:9 |
| About | `about/hev-studio-wide.webp` | 2400 x 1000 | 12:5 |
| BandClub! project | `projects/bandclub-cover.webp` | 2400 x 1350 | 16:9 |
| Clicktoon project | `projects/clicktoon-cover.webp` | 2400 x 1350 | 16:9 |
| BandClub! Steam news | `news/bandclub-steam-demo.webp` | 1600 x 1000 | 16:10 |
| BandClub! crowdfunding news | `news/bandclub-crowdfunding.webp` | 1600 x 1000 | 16:10 |
| BandClub! TGS news | `news/bandclub-tgs-2026.webp` | 1600 x 1000 | 16:10 |
| Clicktoon development news | `news/clicktoon-development.webp` | 1600 x 1000 | 16:10 |

## Connecting images

1. Create the folders shown above under `public/images/`.
2. Add optimized WebP files.
3. For the home and about images, set the paths in `src/config/site.ts`:

```ts
images: {
  homeHero: "/images/hero/hev-studio.webp",
  aboutStudio: "/images/about/hev-studio-wide.webp",
}
```

4. For project and news images, set the `image` value in the matching Markdown frontmatter:

```yaml
image: "/images/projects/bandclub-cover.webp"
```

Keep each image below about 500 KB where possible. Export at 80 to 86 percent WebP quality and check text legibility on mobile.
