import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { ToasterProvider } from "@/lib/ToasterProvider";
import LeftSideBar from "@/components/admin/layout/LeftSideBar";
import TopBar from "@/components/admin/layout/TopBar";
import { AuthProvider } from "@/context/AuthContext";

// Configuration de la police de caractères Montserrat pour le tableau de bord admin
const inter = Montserrat({ subsets: ["latin"] });

// Métadonnées spécifiques au tableau de bord administrateur
export const metadata: Metadata = {
  title: "LBM - Admin Dashboard", // Titre de la page du tableau de bord
  description: "Admin dashboard to manage LBM data", // Description de la page
};

/**
 * Composant de layout racine pour la section d'administration de l'application.
 * Il fournit une structure commune avec une barre latérale, une barre supérieure
 * et des fournisseurs de contexte pour l'authentification et les notifications.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Le contenu de la page enfant (ex: dashboard, gestion des produits)
}>) {
  return (
    <html lang="fr"> {/* Langue de la page définie en français pour l'accessibilité */}
      <body> {/* Application de la police de caractères à tout le corps */}
        {/* Fournisseur d'authentification pour gérer l'état de l'utilisateur admin */}
        <AuthProvider>
          <ToasterProvider /> {/* Fournisseur pour afficher les notifications (messages de succès/erreur) */}
          {/* Conteneur flex pour organiser la barre latérale et le contenu principal */}
          <div className="flex max-lg:flex-col bg-gray-50 text-grey-1"> {/* Disposition en colonne sur les petits écrans */}
            <LeftSideBar /> {/* Composant de la barre latérale de navigation */}
            <TopBar /> {/* Composant de la barre supérieure (en-tête) */}
            {/* Zone principale où le contenu des pages enfants sera rendu */}
            <div className="flex-1 z-0">{children}</div> {/* Prend l'espace disponible et gère le z-index */}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
