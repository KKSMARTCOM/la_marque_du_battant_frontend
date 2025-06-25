import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "../globals.css";
import Header from "@/components/store/layouts/Header";
import Footer from "@/components/store/layouts/Footer";
import { ToasterProvider } from "@/lib/ToasterProvider";
import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/ProductContext";

// Configuration de la police de caractères Montserrat
const fontSans = FontSans({ subsets: ["latin"] });

// Permet aux paramètres dynamiques d'être réévalués à chaque requête
export const dynamicParams = true;

// Métadonnées pour le référencement (SEO) et le partage sur les réseaux sociaux
export const metadata: Metadata = {
  title: "La marque du battant",
  description: "La marque du battant est une boutique en ligne.",
};

/**
 * Composant de layout racine pour la section "store" de l'application.
 * Il enveloppe toutes les pages de la boutique avec un en-tête, un pied de page
 * et des fournisseurs de contexte globaux (panier, produits, toasts).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> {/* Définition de la langue de la page pour l'accessibilité */}
      <body className={`h-full ${fontSans.className}`}> {/* Application de la police et hauteur complète */}
        {/* Conteneur principal qui centre le contenu et limite sa largeur sur les grands écrans */}
        <div className="w-full mx-auto">
          {/* Fournisseurs de contexte pour gérer l'état global de l'application */}
          <ProductProvider> {/* Contexte pour la gestion des produits */}
            <CartProvider> {/* Contexte pour la gestion du panier d'achat */}
              <ToasterProvider /> {/* Fournisseur pour les notifications (toasts) */}
              <Header /> {/* En-tête de la boutique */}
              {/* Contenu principal de la page, rendu par les pages enfants */}
              <div className="min-h-[600px]">{children}</div> {/* Hauteur minimale pour le contenu */}
              <Footer /> {/* Pied de page de la boutique */}
            </CartProvider>
          </ProductProvider>
        </div>
      </body>
    </html>
  );
}
