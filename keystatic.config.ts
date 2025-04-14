import { config } from '@keystatic/core';
// Collections
import { blog } from './src/collections/blog';
import { pages } from './src/collections/pages';
// Singletons
import { site } from './src/singletons/site';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: await blog.keystatic(),
    pages: await pages.keystatic(),
  },
  singletons: {
    site: await site.keystatic(),
  },
});
