// Collections
import { blog } from './collections/blog';
import { pages } from './collections/pages';
// Singletons
import { site } from './singletons/site';

export const collections = {
  blog: await blog.astro(),
  pages: await pages.astro(),
};

export const singletons = {
  site: await site.astro(),
};
