import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Integrations
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Plugins
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [keystatic(), markdoc(), mdx(), react(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  output: 'static',
  site: 'https://jairusjoer.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
