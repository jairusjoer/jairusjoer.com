import { config } from '@keystatic/core';
// Collections
import { Awards } from './src/collections/Awards';
import { Pages } from './src/collections/Pages';
import { WorkExperience } from './src/collections/WorkExperience';
// Singletons
import { General } from './src/singletons/General';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    Awards: await Awards.keystatic(),
    Pages: await Pages.keystatic(),
    WorkExperience: await WorkExperience.keystatic(),
  },
  singletons: {
    General: await General.keystatic(),
  },
});
