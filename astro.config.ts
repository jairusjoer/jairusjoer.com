import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  srcDir: ".",
  site: "https://jairusjoer.com",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    alpinejs({
     entrypoint: 'scripts/alpine.ts'
    })
  ]
});