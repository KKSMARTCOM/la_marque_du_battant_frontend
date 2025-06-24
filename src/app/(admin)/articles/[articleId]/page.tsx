import ProductForm from "@/components/admin/articles/ProductForm";
import React from "react";
import { productsData } from "@/lib/data"; // Supposons que ceci est un fichier de données local ou mocké

/**
 * Génère les chemins statiques pour les articles individuels.
 * Utilisé par Next.js pour le pré-rendu des pages avec des routes dynamiques.
 * Dans une application réelle, ces IDs viendraient d'une base de données.
 */
export function generateStaticParams() {
  // Mappe les données des produits pour extraire leurs IDs et créer les paramètres de route
  return productsData.map((item) => ({
    articleId: `${item.id}`, // L'ID de l'article est utilisé comme paramètre de route
  }));
}

/**
 * Composant de la page de détails/édition d'un article spécifique dans la section d'administration.
 * Il récupère l'ID de l'article depuis les paramètres de l'URL et affiche le formulaire de produit.
 */
export default function ArticleDetails({ params }: any) {
  // params.articleId contiendrait l'ID de l'article à éditer ou afficher.
  // Dans une application réelle, vous utiliseriez cet ID pour charger les données de l'article.
  return <ProductForm />; // Rend le formulaire de création/édition de produit
}
