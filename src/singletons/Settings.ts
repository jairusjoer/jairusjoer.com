import _ from 'lodash';
import { Presets } from '../collections/Presets';

const singletonKey: string = 'Settings';

const keystatic = async () => {
  const { fields, singleton } = await import('@keystatic/core');
  const presets = await Presets.fields();

  return singleton({
    label: _.startCase(singletonKey),
    path: `src/content/${singletonKey}/`,
    schema: {
      favicon: fields.image({
        label: 'Favicon',
        directory: `public`,
        publicPath: `/`,
      }),
      title: fields.text({
        label: 'Title',
        description: 'The default title of the page, which is appended to other page names.',
        validation: { isRequired: true },
      }),
      description: presets.description,
      // Navigation
      navigation: fields.array(
        fields.object({
          title: fields.text({ label: 'Title' }),
          href: fields.url({ label: 'URL' }),
        }),
        {
          label: 'Navigation',
          itemLabel: (props) => props.fields.title.value,
        },
      ),
      // Sections
      sections: fields.array(
        fields.select({
          label: 'Collection',
          options: [
            { label: 'Awards', value: 'Awards' },
            { label: 'Certifications', value: 'Certifications' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Education', value: 'Education' },
            { label: 'Exhibitions', value: 'Exhibitions' },
            { label: 'Features', value: 'Features' },
            { label: 'Projects', value: 'Projects' },
            { label: 'Side Projects', value: 'SideProjects' },
            { label: 'Speaking', value: 'Speaking' },
            { label: 'Volunteering', value: 'Volunteering' },
            { label: 'Work Experience', value: 'WorkExperience' },
            { label: 'Writing', value: 'Writing' },
          ],
          defaultValue: 'WorkExperience',
        }),
        {
          label: 'Sections',
          itemLabel: (props) => _.startCase(props.value),
        },
      ),
      // Footer
      footer: fields.array(
        fields.object({
          title: fields.text({ label: 'Title' }),
          href: fields.url({ label: 'URL' }),
        }),
        {
          label: 'Footer',
          itemLabel: (props) => props.fields.title.value,
        },
      ),
    },
  });
};

const astro = async () => {
  const { defineCollection, z } = await import('astro:content');
  const { glob } = await import('astro/loaders');
  const presets = await Presets.z();

  return defineCollection({
    loader: glob({
      base: `./src/content/${singletonKey}`,
      pattern: '**/*.{yml,yaml}',
    }),
    schema: ({ image }) =>
      z.object({
        favicon: image().optional(),
        title: z.string(),
        description: presets.description,
        navigation: z.array(z.string()),
        sections: z.array(z.string()),
        footer: z.array(z.string()),
      }),
  });
};

export const Settings = { keystatic, astro };
