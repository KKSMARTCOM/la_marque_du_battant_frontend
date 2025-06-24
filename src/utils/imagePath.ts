export function getImagePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return '';
  // On retire un éventuel slash initial sur path
  const cleanPath = path.replace(/^\//, '');
  return `${basePath ? basePath + '/' : '/'}${cleanPath}`.replace(/\/+/g, '/');
} 