import Image from "next/image";
import AdminLoginForm from "@/components/auth/AdminLoginForm";
import { getImagePath } from "@/utils/imagePath";

/**
 * Composant de la page de connexion pour l'interface d'administration.
 * Cette page présente un formulaire de connexion et une image d'illustration.
 */
export default function Login() {
  return (
    <div className="flex h-screen"> {/* Conteneur principal qui prend toute la hauteur de l'écran et utilise flexbox */}
      {/* Section de gauche: Formulaire de connexion */}
      <div className="lg:w-[35rem] w-full flex flex-col items-center justify-center gap-8"> 
        {/* Logo de l'application */}
        <div className="w-20 h-20">
          <Image
            src={getImagePath("battant.png")} // Chemin de l'image du logo
            alt="Logo La Marque du Battant" // Texte alternatif pour l'accessibilité
            width={100} // Largeur de l'image
            height={100} // Hauteur de l'image
            className="object-cover" // Style pour s'assurer que l'image couvre l'espace alloué
          />
        </div>
        {/* Titre et sous-titre de la page de connexion */}
        <div className="text-center text-[14px]">
          <h1 className="text-heading2-bold mb-2 font-bold">Bienvenue</h1>
          <p>Entrez vos informations pour vous connecter</p>
        </div>
        {/* Composant du formulaire de connexion pour les administrateurs */}
        <AdminLoginForm />
      </div>
      {/* Section de droite: Image d'illustration (visible uniquement sur les écrans moyens et plus grands) */}
      <div className="flex-1 bg-gray-50 md:flex hidden justify-center items-center">
        <div className="h-[20rem] w-[30rem] flex justify-center items-center">
          <Image
            src={getImagePath("login.png")} // Chemin de l'image d'illustration
            alt="Illustration de connexion administrative" // Texte alternatif pour l'accessibilité
            width={1000} // Largeur de l'image
            height={1000} // Hauteur de l'image
            className="object-cover" // Style pour s'assurer que l'image couvre l'espace alloué
          />
        </div>
      </div>
    </div>
  );
}
