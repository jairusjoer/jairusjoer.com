// Collections
import { Blog } from './collections/Blog';
import { Pages } from './collections/Pages';
// Singletons
import { Site } from './singletons/Site';

export const collections = {
  Blog: await Blog.astro(),
  Pages: await Pages.astro(),
};

export const singletons = {
  Site: await Site.astro(),
};
