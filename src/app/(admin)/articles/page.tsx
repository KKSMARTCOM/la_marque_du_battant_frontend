"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Loader from "@/components/custom ui/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/admin/articles/ProductColumns";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";

/**
 * Composant de la page d'administration des articles (produits).
 * Affiche une liste de produits avec des options pour ajouter de nouveaux produits
 * et une table de données pour les gérer.
 */
export default function Articles() {
  const router = useRouter(); // Hook de Next.js pour la navigation

  // États locaux pour gérer le chargement et la liste des produits
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement
  const [products, setProducts] = useState<ProductType[]>([]); // Stocke la liste des produits

  /**
   * Fonction asynchrone pour récupérer les produits depuis l'API.
   * Gère les états de chargement et affiche des messages d'erreur en cas de problème.
   */
  const fetchProducts = async () => {
    try {
      setLoading(true); // Active l'état de chargement
      const res = await fetchClient("/products"); // Appelle l'API pour récupérer les produits
      setProducts(res.data); // Met à jour l'état avec les produits récupérés
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error); // Log l'erreur pour le débogage
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer."); // Affiche un message d'erreur à l'utilisateur
    } finally {
      setLoading(false); // Désactive l'état de chargement, que la requête ait réussi ou échoué
    }
  };

  // Effet de bord pour charger les produits au montage du composant
  useEffect(() => {
    fetchProducts();
  }, []); // Le tableau de dépendances vide assure que l'effet ne s'exécute qu'une seule fois au montage

  // Affichage conditionnel: un loader pendant le chargement, sinon la page des articles
  return loading ? (
    <Loader /> // Composant de chargement
  ) : (
    <div className="px-10 py-5"> {/* Conteneur principal avec padding */}
      {/* En-tête de la page avec titre et bouton d'ajout */}
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Produits</p> {/* Titre de la section */}
        <Button
          className="bg-black text-white" // Styles du bouton
          onClick={() => router.push("/articles/new")} // Redirection vers la page d'ajout de produit
        >
          <Plus className="h-4 w-4 mr-2" /> {/* Icône Plus */}
          Ajouter produit
        </Button>
      </div>
      <Separator className="bg-black my-4" /> {/* Séparateur visuel */}
      {/* Table de données pour afficher les produits */}
      <DataTable 
        columns={columns} // Définition des colonnes de la table
        data={products} // Données à afficher dans la table
        searchKey="title" // Clé pour la recherche (le titre du produit dans ce cas)
      />
    </div>
  );
}
