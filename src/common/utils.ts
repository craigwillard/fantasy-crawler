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
