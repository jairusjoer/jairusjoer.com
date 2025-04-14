import { defineConfig } from 'astro/config';

// Integrations
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Plugins
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  site: 'https://jairusjoer.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
