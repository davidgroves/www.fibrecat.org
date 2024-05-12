import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { mermaid } from "./src/plugins/mermaid";
import remarkMath from 'remark-math';
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fibrecat.org/',
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [mermaid, remarkMath]
  },
  output: "hybrid",
  adapter: node({
    mode: 'standalone'
  }),
  head: [
    {
      title: 'Fibrecat.org: David Groves Site',
    },
    {
      meta: [
        {
          name: 'robots',
          content: 'noodp,nofollow,noindex',
        },
        {
          property: 'og:title',
          content: 'Fibrecat.org: David Groves Site',
        },
        {
          property: 'og:image',
          content: 'https://www.fibreat.org/social-splash.png', 
        },
        {
          property: 'og:description',
          content: 'Fibrecat.org: The personal homepage of David Groves, a nerd, photographer and houndfather.',
        },
      ],
    },
  ],
});
