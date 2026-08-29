import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const imageFields = {
  image: z.string().optional().default(""),
  imageAlt: z.string(),
  assetSpec: z.string(),
};

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    lang: z.enum(["ko", "en"]),
    slug: z.string(),
    title: z.string(),
    tagline: z.string(),
    type: z.string(),
    excerpt: z.string(),
    order: z.number(),
    info: z.array(z.object({ label: z.string(), value: z.string() })),
    core: z.array(
      z.object({
        title: z.string(),
        heading: z.string(),
        body: z.string(),
      }),
    ),
    highlights: z.array(z.string()),
    opportunities: z.array(z.string()),
    ...imageFields,
  }),
});

const news = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/news",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    lang: z.enum(["ko", "en"]),
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(["hev", "bandclub", "clicktoon"]),
    categoryLabel: z.string(),
    order: z.number(),
    ...imageFields,
  }),
});

export const collections = { projects, news };
