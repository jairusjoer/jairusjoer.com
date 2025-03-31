// Collections
import { Awards } from './collections/Awards';
import { Certifications } from './collections/Certifications';
import { Pages } from './collections/Pages';
import { Projects } from './collections/Projects';
import { SideProjects } from './collections/SideProjects';
import { Speaking } from './collections/Speaking';
import { WorkExperience } from './collections/WorkExperience';
import { Writing } from './collections/Writing';
import { Contact } from './collections/Contact';
import { Exhibitions } from './collections/Exhibitions';
import { Features } from './collections/Features';
import { Volunteering } from './collections/Volunteering';
// Singletons
import { General } from './singletons/General';

export const collections = {
  Awards: await Awards.astro(),
  Certifications: await Certifications.astro(),
  Pages: await Pages.astro(),
  Projects: await Projects.astro(),
  SideProjects: await SideProjects.astro(),
  Speaking: await Speaking.astro(),
  WorkExperience: await WorkExperience.astro(),
  Writing: await Writing.astro(),
  Contact: await Contact.astro(),
  Exhibitions: await Exhibitions.astro(),
  Features: await Features.astro(),
  Volunteering: await Volunteering.astro(),
};

export const singletons = {
  General: await General.astro(),
};
