import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  prefetch: true,
  integrations: [tailwind(), icon(), react(), sitemap(), mdx()],
  site: 'https://4ephyr.codes'
});