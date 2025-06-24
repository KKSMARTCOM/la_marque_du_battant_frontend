export const siteConfig = {
  name: "La Marque du Battant",
  description: "Boutique en ligne de vêtements exclusifs",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/lamarquedubattant",
    github: "https://github.com/lamarquedubattant",
  },
  contact: {
    email: "contact@lamarquedubattant.com",
    phone: "+225 0123456789",
  },
  social: {
    facebook: "https://facebook.com/lamarquedubattant",
    instagram: "https://instagram.com/lamarquedubattant",
  },
};

export const productConfig = {
  maxQuantity: 10,
  defaultPageSize: 12,
  categories: ["Hommes", "Femmes", "Enfants", "Accessoires"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Noir", "Blanc", "Rouge", "Bleu", "Vert", "Jaune"],
};

export const paymentConfig = {
  currency: "XOF",
  kkiapayPublicKey: process.env.NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY,
  kkiapayPrivateKey: process.env.KKIAPAY_PRIVATE_KEY,
};

export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: 10000,
};

export const seoConfig = {
  defaultTitle: "La Marque du Battant - Boutique en ligne",
  defaultDescription: "Découvrez notre collection exclusive de vêtements. Qualité et style au meilleur prix.",
  keywords: ["vêtements", "mode", "boutique", "collection", "style", "fashion"],
}; 