"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Loader from "@/components/custom ui/Loader";
import { columns } from "@/components/admin/collections/CollectionColumns";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";

/**
 * Composant de la page d'administration des collections.
 * Affiche une liste de collections avec des options pour ajouter de nouvelles collections
 * et une table de données pour les gérer.
 */
export default function Collections() {
  const router = useRouter(); // Hook de Next.js pour la navigation

  // États locaux pour gérer le chargement et la liste des collections
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement
  const [collections, setCollections] = useState<CollectionType[]>([]); // Stocke la liste des collections

  /**
   * Fonction asynchrone pour récupérer les collections depuis l'API.
   * Gère les états de chargement et affiche des messages d'erreur en cas de problème.
   */
  const getCollections = async () => {
    try {
      setLoading(true); // Active l'état de chargement
      const res = await fetchClient("/collections"); // Appelle l'API pour récupérer les collections
      if (res) {
        setCollections(res.data); // Met à jour l'état avec les collections récupérées
      }
    } catch (error) {
      console.error(error); // Log l'erreur pour le débogage
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer."); // Affiche un message d'erreur à l'utilisateur
    } finally {
      setLoading(false); // Désactive l'état de chargement, que la requête ait réussi ou échoué
    }
  };

  // Effet de bord pour charger les collections au montage du composant
  useEffect(() => {
    getCollections();
  }, []); // Le tableau de dépendances vide assure que l'effet ne s'exécute qu'une seule fois au montage

  // Affichage conditionnel: un loader pendant le chargement, sinon la page des collections
  return loading ? (
    <Loader /> // Composant de chargement
  ) : (
    <div className="px-10 py-5"> {/* Conteneur principal avec padding */}
      {/* En-tête de la page avec titre et bouton d'ajout */}
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p> {/* Titre de la section */}
        <Button
          className="bg-black text-white" // Styles du bouton
          onClick={() => router.push("/collections/new")} // Redirection vers la page d'ajout de collection
        >
          <Plus className="h-4 w-4 mr-2" /> {/* Icône Plus */}
          Create Collection
        </Button>
      </div>
      <Separator className="bg-black my-4" /> {/* Séparateur visuel */}
      {/* Table de données pour afficher les collections */}
      <DataTable 
        columns={columns} // Définition des colonnes de la table
        data={collections} // Données à afficher dans la table
        searchKey="title" // Clé pour la recherche (le titre de la collection dans ce cas)
      />
    </div>
  );
}
