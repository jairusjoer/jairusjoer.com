import { config } from '@keystatic/core';
// Collections
import { Blog } from './src/collections/Blog';
import { Pages } from './src/collections/Pages';
// Singletons
import { Site } from './src/singletons/Site';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    Blog: await Blog.keystatic(),
    Pages: await Pages.keystatic(),
  },
  singletons: {
    Site: await Site.keystatic(),
  },
});
