// Collections
import { Awards } from './collections/Awards';
import { Pages } from './collections/Pages';
import { WorkExperience } from './collections/WorkExperience';
// Singletons
import { General } from './singletons/General';

export const collections = {
  Awards: await Awards.astro(),
  Pages: await Pages.astro(),
  WorkExperience: await WorkExperience.astro(),
};

export const singletons = {
  General: await General.astro(),
};
