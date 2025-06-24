import About from "@/components/store/pages/About";
import Banner from "@/components/store/pages/Banner";
import Collections from "@/components/store/pages/Collections";
import Events from "@/components/store/pages/Events";
import Products from "@/components/store/pages/Product";
import { Metadata } from "next";

// Métadonnées spécifiques à la page d'accueil pour le SEO et le partage
export const metadata: Metadata = {
  title: "La Marque du Battant - Boutique en ligne de vêtements",
  description: "Découvrez notre collection exclusive de vêtements. Jusqu\'à 50% de réduction sur une sélection d\'articles. Livraison gratuite.",
  keywords: "vêtements, mode, boutique, réduction, collection",
  openGraph: {
    title: "La Marque du Battant",
    description: "Boutique en ligne de vêtements",
    type: "website",
    // Vous pouvez ajouter des images spécifiques pour Open Graph ici
    // images: ["/images/og-home.jpg"],
  },
};

/**
 * Composant de la page d'accueil du site e-commerce.
 * Il agrège différentes sections pour présenter le contenu principal de la boutique.
 */
export default function Home() {
  return (
    <main className="min-h-screen"> {/* Le conteneur principal de la page, prenant au moins toute la hauteur de l'écran */}
      {/* Section de la bannière principale avec promotions */}
      <Banner />
      
      {/* Section présentant les produits en vedette ou les nouveautés */}
      <Products />
      
      {/* Section "À propos" pour la présentation de la marque ou de l'entreprise */}
      <About />
      
      {/* Section affichant les différentes collections de produits */}
      <Collections />
      
      {/* Section dédiée aux événements spéciaux ou promotions éphémères */}
      <Events />
    </main>
  );
}
