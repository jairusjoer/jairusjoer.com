// Collections
import { Awards } from './collections/Awards';
import { Blog } from './collections/Blog';
import { Certifications } from './collections/Certifications';
import { Contact } from './collections/Contact';
import { Education } from './collections/Education';
import { Exhibitions } from './collections/Exhibitions';
import { Features } from './collections/Features';
import { Pages } from './collections/Pages';
import { Projects } from './collections/Projects';
import { SideProjects } from './collections/SideProjects';
import { Speaking } from './collections/Speaking';
import { Volunteering } from './collections/Volunteering';
import { WorkExperience } from './collections/WorkExperience';
import { Writing } from './collections/Writing';
// Singletons
import { General } from './singletons/General';
import { Settings } from './singletons/Settings';

export const collections = {
  // Collections
  Awards: await Awards.astro(),
  Blog: await Blog.astro(),
  Certifications: await Certifications.astro(),
  Contact: await Contact.astro(),
  Education: await Education.astro(),
  Exhibitions: await Exhibitions.astro(),
  Features: await Features.astro(),
  Pages: await Pages.astro(),
  Projects: await Projects.astro(),
  SideProjects: await SideProjects.astro(),
  Speaking: await Speaking.astro(),
  Volunteering: await Volunteering.astro(),
  WorkExperience: await WorkExperience.astro(),
  Writing: await Writing.astro(),
};

export const singletons = {
  General: await General.astro(),
  Settings: await Settings.astro(),
};
