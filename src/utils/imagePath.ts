export function getImagePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return '';
  // On retire les slashs inutiles
  let cleanPath = path.replace(/^\/+/, '');
  let cleanBase = basePath.replace(/\/$/, '');
  // Si basePath est vide (local), on veut /image.jpg
  // Si basePath est défini (prod), on veut /la_marque_du_battant_frontend/image.jpg
  return `/${cleanBase ? cleanBase + '/' : ''}${cleanPath}`;
} 