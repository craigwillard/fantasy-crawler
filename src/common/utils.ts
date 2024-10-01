export function transformNormalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(' ', '-')
    .replace('ii', '')
    .replace('iii', '')
    .replace('iv', '')
    .replace('jr', '')
    .replace('sr', '')
    .trim();
}

export function getNestedProperty(obj, path: string) {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (!current[key]) return undefined;
    current = current[key];
  }

  return current;
}
