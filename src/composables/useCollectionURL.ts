import type { DataEntryMap } from 'astro:content';

export const useCollectionURL = (string: keyof DataEntryMap) => {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
