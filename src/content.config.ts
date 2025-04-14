// Collections
import { blog } from './collections/blog';
import { pages } from './collections/pages';

export const collections = {
  blog: await blog.astro(),
  pages: await pages.astro(),
};
