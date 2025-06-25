let IS_PROD = "local"; // Mets true pour la prod, false pour local
const BASE_PATH = '/la_marque_du_battant_frontend'; // à changer si le repo change

export function getImagePath(path: string) {
  if (!path) return '';
  let cleanPath = path.replace(/^\/+/, '');
  if (IS_PROD === "prod") {
    return `/${BASE_PATH.replace(/^\/+|\/+$/g, '')}/${cleanPath}`;
  } else {
    return `/${cleanPath}`;
  }
} 