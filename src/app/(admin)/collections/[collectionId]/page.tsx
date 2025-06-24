import React from "react";
import CollectionForm from "@/components/admin/collections/CollectionForm";
import { collectionsData } from "@/lib/data"; // Supposons que ceci est un fichier de données local ou mocké

/**
 * Génère les chemins statiques pour les collections individuelles.
 * Utilisé par Next.js pour le pré-rendu des pages avec des routes dynamiques.
 * Dans une application réelle, ces IDs viendraient d'une base de données.
 */
export function generateStaticParams() {
  // Mappe les données des collections pour extraire leurs IDs et créer les paramètres de route
  return collectionsData.map((item) => ({
    collectionId: `${item.id}`, // L'ID de la collection est utilisé comme paramètre de route
  }));
}

/**
 * Composant de la page de détails/édition d'une collection spécifique dans la section d'administration.
 * Il récupère l'ID de la collection depuis les paramètres de l'URL et affiche le formulaire de collection.
 */
export default function CollectionDetails({ params }: any) {
  // params.collectionId contiendrait l'ID de la collection à éditer ou afficher.
  // Dans une application réelle, vous utiliseriez cet ID pour charger les données de la collection.
  return <CollectionForm />; // Rend le formulaire de création/édition de collection
}
