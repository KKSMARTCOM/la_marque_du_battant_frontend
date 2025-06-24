import AuthLayout from "@/components/auth/AuthLayout";
import SalesChart from "@/components/custom ui/SalesChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { CircleDollarSign, ShoppingBag, UserRound } from "lucide-react";

/**
 * Composant de la page du tableau de bord administrateur.
 * Affiche un aperçu des métriques clés comme le revenu total, le nombre de commandes et le nombre de clients,
 * ainsi qu'un graphique des ventes.
 */
export default async function Dashboard() {
  // Les données sont actuellement des valeurs statiques (placeholders).
  // Dans une application réelle, ces données seraient récupérées depuis une API ou une base de données.
  const totalRevenue = 1000; // Exemple de revenu total
  const totalOrders = 100;    // Exemple de nombre total de commandes
  const totalCustomers = 20;  // Exemple de nombre total de clients

  // Données pour le graphique des ventes (mensuel, par exemple)
  const salesData = [
    // { name: 'Jan', sales: 10 },
    // { name: 'Fév', sales: 50 },
    // { name: 'Mar', sales: 60 },
    // { name: 'Avr', sales: 30 },
    // ... (exemple de données réelles)
    10, 50, 60, 30 // Données simplifiées pour l'exemple
  ];

  return (
    <AuthLayout> {/* Le layout d'authentification enveloppe le tableau de bord */}
      <div className="px-8 py-10"> {/* Conteneur principal avec padding */}
        <p className="text-heading2-bold">Dashboard</p> {/* Titre du tableau de bord */}
        <Separator className="bg-black my-5" /> {/* Séparateur visuel */}

        {/* Grille des cartes de statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Carte: Revenu Total */}
          <Card>
            <CardHeader className="flex flex-row justify-between items-center"> {/* En-tête de la carte avec titre et icône */}
              <CardTitle>Total Revenue</CardTitle>
              <CircleDollarSign className="max-sm:hidden" /> {/* Icône de dollar (cachée sur très petits écrans) */}
            </CardHeader>
            <CardContent>
              <p className="text-body-bold">$ {totalRevenue}</p> {/* Affichage du revenu total */}
            </CardContent>
          </Card>

          {/* Carte: Total des Commandes */}
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Total Orders</CardTitle>
              <ShoppingBag className="max-sm:hidden" /> {/* Icône de sac d'achat */}
            </CardHeader>
            <CardContent>
              <p className="text-body-bold">{totalOrders}</p> {/* Affichage du nombre de commandes */}
            </CardContent>
          </Card>

          {/* Carte: Total des Clients */}
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Total Customer</CardTitle>
              <UserRound className="max-sm:hidden" /> {/* Icône d'utilisateur */}
            </CardHeader>
            <CardContent>
              <p className="text-body-bold">{totalCustomers}</p> {/* Affichage du nombre de clients */}
            </CardContent>
          </Card>
        </div>

        {/* Carte: Graphique des ventes */}
        <Card className="mt-10"> {/* Marge supérieure pour espacer du contenu précédent */}
          <CardHeader>
            <CardTitle>Sales Chart ($)</CardTitle> {/* Titre du graphique */}
          </CardHeader>
          <CardContent>
            <SalesChart data={salesData} /> {/* Composant du graphique des ventes, avec les données */}
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
