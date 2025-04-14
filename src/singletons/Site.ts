import _ from 'lodash';
import { presets } from '../content.presets';

const singletonKey = 'site';

const keystatic = async () => {
  const { fields, singleton } = await import('@keystatic/core');
  const fieldPresets = await presets.fields();

  // General
  const general = fields.object({
    image: fieldPresets.image(singletonKey),
    title: fieldPresets.titleString,
    description: fieldPresets.description,
    navigation: fields.array(
      fields.object({
        title: fieldPresets.titleString,
        href: fieldPresets.url,
      }),
      {
        label: 'Navigation',
        itemLabel: (props) => props.fields.title.value,
      },
    ),
    about: fieldPresets.content(singletonKey),
  });

  // Sections
  const sections = fields.object({
    draft: fieldPresets.draft,
    title: fieldPresets.titleString,
    entries: fields.array(
      fields.object({
        draft: fieldPresets.draft,
        time: fields.text({ label: 'Time' }),
        title: fieldPresets.titleString,
        description: fieldPresets.description,
        url: fieldPresets.url,
        content: fieldPresets.content(singletonKey),
        page: fields.relationship({
          label: 'Page',
          collection: 'pages',
        }),
      }),
      {
        label: 'Entries',
        itemLabel: (props) => {
          const string = `${props.fields.time.value} • ${props.fields.title.value}`;

          if (props.fields.draft.value) {
            return `Draft • ${string}`;
          }

          return string;
        },
      },
    ),
  });

  return singleton({
    label: _.startCase(singletonKey),
    path: `src/content/${singletonKey}/`,
    schema: {
      general,
      sections: fields.array(sections, {
        label: 'Sections',
        itemLabel: (props) => {
          const string = `${props.fields.title.value} • ${props.fields.entries.elements.length}`;

          if (props.fields.draft.value) {
            return `Draft • ${string}`;
          }

          return string;
        },
      }),
      footer: fields.array(
        fields.object({
          title: fieldPresets.titleString,
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
  const zPresets = await presets.z();

  return defineCollection({
    loader: glob({
      base: `./src/content/${singletonKey}`,
      pattern: '**/*.{yml,yaml}',
    }),
    schema: ({ image }) =>
      z.object({
        general: z.object({
          image: image().optional(),
          title: zPresets.title,
          description: zPresets.description,
          navigation: z.array(
            z.object({
              title: zPresets.title,
              href: z.string(),
            }),
          ),
        }),
        sections: z.array(
          z.object({
            draft: zPresets.draft,
            title: zPresets.title,
            entries: z.array(
              z.object({
                draft: zPresets.draft,
                time: z.string(),
                title: zPresets.title,
                description: zPresets.description,
                url: z.string().optional(),
                page: z.string().optional(),
              }),
            ),
          }),
        ),
        footer: z.array(
          z.object({
            title: zPresets.title,
            href: z.string(),
          }),
        ),
      }),
  });
};

export const site = { keystatic, astro };
