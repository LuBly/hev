import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserSite = repository.endsWith(".github.io");
const base = repository && !isUserSite ? `/${repository}` : "/";
const site = owner ? `https://${owner}.github.io` : undefined;

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
