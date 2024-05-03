import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { mermaid } from "./src/plugins/mermaid";
import remarkMath from 'remark-math';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fibrecat.org/',
  integrations: [
    mdx(), 
    sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [mermaid, remarkMath]
  },
  output: "static",
  adapter: node(
    {
      mode: 'standalone',
    }
  ),
});
