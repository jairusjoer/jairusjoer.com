// Collections
import { Awards } from './collections/Awards';
import { Pages } from './collections/Pages';
import { WorkExperience } from './collections/WorkExperience';
// Singletons
import { General } from './singletons/General';

export const collections = {
  Awards: Awards.astro,
  Pages: Pages.astro,
  WorkExperience: WorkExperience.astro,
};

export const singletons = {
  General: General.astro,
};
