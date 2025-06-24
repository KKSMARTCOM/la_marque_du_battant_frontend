"use client";

import { columns } from "@/components/admin/customers/CustomerColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import Loader from "@/components/custom ui/Loader";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

/**
 * Composant de la page d'administration des clients.
 * Affiche une liste de clients et une table de données pour les gérer.
 */
export default function Customers() {
  // États locaux pour gérer le chargement et la liste des clients
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement
  const [customers, setCustomers] = useState<CustomerType[]>([]); // Stocke la liste des clients

  /**
   * Fonction asynchrone pour récupérer les clients depuis l'API.
   * Actuellement, elle simule un chargement et initialise une liste vide.
   * Dans une application réelle, cette fonction ferait un appel API réel.
   */
  const getCustomers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simule un délai de chargement d'1 seconde
    setCustomers([]); // Initialise la liste des clients à vide (à remplacer par des données réelles)
    setLoading(false); // Désactive l'état de chargement
  };

  // Effet de bord pour charger les clients au montage du composant
  useEffect(() => {
    getCustomers();
  }, []); // Le tableau de dépendances vide assure que l'effet ne s'exécute qu'une seule fois au montage

  // Affichage conditionnel: un loader pendant le chargement, sinon la page des clients
  return loading ? (
    <Loader /> // Composant de chargement
  ) : (
    <div className="px-10 py-5"> {/* Conteneur principal avec padding */}
      <p className="text-heading2-bold">Clients</p> {/* Titre de la section */}
      <Separator className="bg-black my-5" /> {/* Séparateur visuel */}
      {/* Table de données pour afficher les clients */}
      <DataTable 
        columns={columns} // Définition des colonnes de la table
        data={customers} // Données à afficher dans la table (actuellement vide)
        searchKey="name" // Clé pour la recherche (le nom du client dans ce cas)
      />
    </div>
  );
}

// Force le rendu dynamique de la page pour éviter la mise en cache statique
export const dynamic = "force-dynamic";
