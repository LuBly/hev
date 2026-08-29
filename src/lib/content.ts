import { getCollection } from "astro:content";
import type { Lang } from "../config/site";

export async function getProjects(lang: Lang) {
  const entries = await getCollection("projects", ({ data }) => data.lang === lang);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getProject(lang: Lang, slug: string) {
  const projects = await getProjects(lang);
  return projects.find((entry) => entry.data.slug === slug);
}

export async function getNews(lang: Lang) {
  const entries = await getCollection("news", ({ data }) => data.lang === lang);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getNewsEntry(lang: Lang, slug: string) {
  const entries = await getNews(lang);
  return entries.find((entry) => entry.data.slug === slug);
}
