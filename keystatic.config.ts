import { config } from '@keystatic/core';
// Collections
import { Awards } from './src/collections/Awards';
import { Certifications } from './src/collections/Certifications';
import { Contact } from './src/collections/Contact';
import { Exhibitions } from './src/collections/Exhibitions';
import { Features } from './src/collections/Features';
import { Pages } from './src/collections/Pages';
import { Projects } from './src/collections/Projects';
import { SideProjects } from './src/collections/SideProjects';
import { Speaking } from './src/collections/Speaking';
import { Volunteering } from './src/collections/Volunteering';
import { WorkExperience } from './src/collections/WorkExperience';
import { Writing } from './src/collections/Writing';
// Singletons
import { General } from './src/singletons/General';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    Awards: await Awards.keystatic(),
    Certifications: await Certifications.keystatic(),
    Contact: await Contact.keystatic(),
    Exhibitions: await Exhibitions.keystatic(),
    Features: await Features.keystatic(),
    Pages: await Pages.keystatic(),
    Projects: await Projects.keystatic(),
    SideProjects: await SideProjects.keystatic(),
    Speaking: await Speaking.keystatic(),
    Volunteering: await Volunteering.keystatic(),
    WorkExperience: await WorkExperience.keystatic(),
    Writing: await Writing.keystatic(),
  },
  singletons: {
    General: await General.keystatic(),
  },
});
