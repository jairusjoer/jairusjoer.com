type ModuleType = {
  [K in 'astro' | 'keystatic']: () => Promise<any>;
};

export const useContent = async (key: 'astro' | 'keystatic') => {
  const collections = import.meta.glob<ModuleType>(`../collections/*.ts`);
  const singletons = import.meta.glob<ModuleType>(`../singletons/*.ts`);
  const entries = [];

  for (const [path, module] of Object.entries({ ...collections, ...singletons })) {
    const name = path.split('/').pop()?.replace('.ts', '');
    if (!name) continue;

    const content = await module();
    entries.push([name, { [key]: content[key]() }]);
  }

  return Object.fromEntries(entries);
};
