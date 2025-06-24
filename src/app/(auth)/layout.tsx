import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { ToasterProvider } from "@/lib/ToasterProvider";

// Configuration de la police de caractères Montserrat pour cette section
const inter = Montserrat({ subsets: ["latin"] });

// Métadonnées spécifiques à la section d'authentification
export const metadata: Metadata = {
  title: "LBM - Admin Login Page", // Titre de la page de connexion admin
  description: "Admin login page to manage LBM data", // Description de la page
};

/**
 * Composant de layout pour les pages d'authentification (login, register, etc.).
 * Il enveloppe les pages d'authentification avec un fournisseur de toasts.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Le contenu de la page enfant (ex: page de connexion)
}>) {
  return (
    <html lang="fr"> {/* Langue de la page définie en français pour l'accessibilité */}
      <body className={inter.className}> {/* Application de la police de caractères */}
        <ToasterProvider /> {/* Fournisseur pour afficher les notifications (messages de succès/erreur) */}
        <div>{children}</div> {/* Conteneur pour le contenu des pages d'authentification */}
      </body>
    </html>
  );
}
