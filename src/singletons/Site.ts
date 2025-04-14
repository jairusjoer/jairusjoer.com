import _ from 'lodash';
import { Presets } from '../collections/Presets';

const singletonKey = 'Site';

const keystatic = async () => {
  const { fields, singleton } = await import('@keystatic/core');
  const presets = await Presets.fields();

  // General
  const general = fields.object({
    image: presets.image(singletonKey),
    title: presets.titleString,
    description: presets.description,
    navigation: fields.array(
      fields.object({
        title: presets.titleString,
        href: presets.url,
      }),
      {
        label: 'Navigation',
        itemLabel: (props) => props.fields.title.value,
      },
    ),
    about: presets.content(singletonKey),
  });

  // Sections
  const sections = fields.object({
    draft: presets.draft,
    title: presets.titleString,
    entries: fields.array(
      fields.object({
        draft: presets.draft,
        time: fields.text({ label: 'Time' }),
        title: presets.titleString,
        description: presets.description,
        url: presets.url,
        content: presets.content(singletonKey),
        page: fields.relationship({
          label: 'Page',
          collection: 'Pages'
        })
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
          title: presets.titleString,
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
        title: presets.title,
        description: presets.description,
        navigation: z.array(z.string()),
        sections: z.array(z.string()),
        footer: z.array(z.string()),
      }),
  });
};

export const Site = { keystatic, astro };
