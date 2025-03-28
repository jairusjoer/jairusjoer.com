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
    Awards: Awards.keystatic,
    Pages: Pages.keystatic,
    WorkExperience: WorkExperience.keystatic,
  },
  singletons: {
    General: General.keystatic,
  },
});
