import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { getLanguages } from "./src/plugins/languages";
import sitemap from '@astrojs/sitemap';
import { mermaid } from "./src/plugins/mermaid";
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fibrecat.org/',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "vitesse-light",
      langs: getLanguages()
    },
    remarkPlugins: [mermaid, remarkMath]
  }
});