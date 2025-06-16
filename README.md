# 🛍️ La Marque du Battant - E-commerce

Une boutique en ligne moderne et complète, construite avec **Next.js 14**, **TypeScript** et **Tailwind CSS**, offrant une expérience utilisateur fluide et une interface d'administration robuste. Ce projet représente une plateforme e-commerce pour "La Marque du Battant", axée sur la performance, la réactivité et la facilité de gestion.

## 🚀 Fonctionnalités Clés

- **Boutique en ligne dynamique** : Catalogue de produits riche avec filtres intuitifs et recherche performante.
- **Système d'authentification sécurisé** : Inscription et connexion des utilisateurs avec gestion des différents rôles (client, administrateur).
- **Panier d'achat avancé** : Gestion des articles, mise à jour des quantités, et calcul automatique des totaux.
- **Paiement en ligne intégré** : Solution de paiement (via KkiaPay) adaptée pour le marché africain, facilitant les transactions.
- **Interface d'administration complète** : Tableau de bord dédié pour la gestion des produits, commandes, utilisateurs, collections et événements.
- **Gestion des événements** : Création, modification et suivi des événements spéciaux et promotions.
- **Système de favoris** : Permet aux utilisateurs de sauvegarder leurs produits préférés pour un accès rapide.
- **Design responsive** : Optimisé pour une expérience utilisateur impeccable sur tous les appareils (mobile, tablette, desktop).
- **Optimisation SEO** : Métadonnées et structure de page optimisées pour un meilleur référencement naturel.

## 🛠️ Technologies Utilisées

- **Framework Frontend** : [Next.js 14](https://nextjs.org/) (avec App Router), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling & UI** : [Tailwind CSS](https://tailwindcss.com/) (pour un design system rapide), [Radix UI](https://www.radix-ui.com/) (composants UI sans style), [Lucide React](https://lucide.dev/) (icônes)
- **Base de Données & ORM** : [SQLite](https://www.sqlite.org/index.html) (pour le développement local), [Prisma ORM](https://www.prisma.io/) (pour une interaction simplifiée avec la base de données)
- **Paiement** : [KkiaPay](https://docs.kkiapay.me/) (pour les transactions sécurisées en Afrique)
- **Gestion d'Images** : [Cloudinary](https://cloudinary.com/) (pour l'optimisation et la livraison d'images), [Next.js Image Component](https://nextjs.org/docs/app/building-your-application/optimizing/images) (pour l'optimisation des images locales)
- **Gestion de Formulaires** : [React Hook Form](https://react-hook-form.com/) (avec validation pour des formulaires performants)
- **Composants Carousel** : [Embla Carousel](https://www.embla-carousel.com/) et [React Slick](https://react-slick.neostack.com/) (pour les carrousels de produits et bannières)
- **Notifications** : [React Hot Toast](https://react-hot-toast.com/) (pour des messages de notification élégants et simples)

## 📦 Installation et Démarrage

Suivez ces étapes pour configurer et lancer le projet sur votre machine locale.

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/KKSMARTCOM/la_marque_du_battant_frontend.git
    cd la-marque-du-battant
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```

3.  **Configuration de l'environnement**
    Créez un fichier `.env.local` à la racine du projet en copiant le contenu de `.env.example` et en remplissant les variables nécessaires :
    ```bash
    cp .env.example .env.local
    ```
    Exemple de `.env.local` (ajustez les valeurs avec vos clés réelles) :
    ```env
    # Base de données
    DATABASE_URL="file:./dev.db"

    # KkiaPay (remplacez par vos clés réelles)
    NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY="votre_clé_publique_kkiapay"
    KKIAPAY_PRIVATE_KEY="votre_clé_privée_kkiapay"

    # Cloudinary (remplacez par vos informations de compte)
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="votre_cloud_name_cloudinary"
    CLOUDINARY_API_KEY="votre_api_key_cloudinary"
    CLOUDINARY_API_SECRET="votre_api_secret_cloudinary"

    # URL de l'application
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    ```

4.  **Configuration et migration de la base de données (Prisma)**
    Initialisez Prisma Client, poussez le schéma vers la base de données et exécutez les seeders si disponibles :
    ```bash
    npx prisma generate
    npx prisma db push
    npx prisma db seed
    ```

5.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

    Ouvrez votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000) pour voir l'application en action.

## 🗄️ Structure de la Base de Données (Prisma Schema)

Le schéma de base de données est défini dans `prisma/schema.prisma` et inclut les modèles suivants :

-   **`User`** : Gestion des utilisateurs avec différents rôles (`CLIENT`, `USER`, `ADMIN`, `SUPER_ADMIN`).
-   **`Product`** : Détails des articles (nom, description, prix, tailles, couleurs, images, quantité).
-   **`Category`** : Catégories de produits pour une meilleure organisation.
-   **`Collection`** : Regroupement de produits en collections saisonnières ou thématiques.
-   **`Event`** : Informations sur les événements organisés (nom, description, prix, dates).
-   **`CartItem`** : Articles présents dans le panier d'un utilisateur.
-   **`Order`** : Détails des commandes passées (utilisateur, numéro de commande, transaction, prix, statut).
-   **`Favorite`** : Liste des produits qu'un utilisateur a marqués comme favoris.

## 📁 Architecture du Projet

L'application suit une structure modulaire basée sur l'App Router de Next.js, organisée comme suit :

```
src/
├── app/                    # Points d'entrée principaux de l'application (App Router Next.js 14)
│   ├── (store)/           # Pages publiques de la boutique (accueil, produits, collections, etc.)
│   ├── (auth)/            # Pages d'authentification (connexion, inscription, etc.)
│   └── (admin)/           # Interface d'administration (tableau de bord, gestion des données)
├── components/            # Composants React réutilisables
│   ├── store/            # Composants spécifiques à la boutique
│   ├── admin/            # Composants spécifiques à l'administration
│   ├── auth/             # Composants liés à l'authentification
│   └── ui/               # Composants d'interface utilisateur génériques (shadcn/ui)
├── lib/                  # Utilitaires, fonctions d'aide et configurations globales (ex: `config.ts`, `ToasterProvider.tsx`)
├── hooks/                # Hooks React personnalisés pour la logique réutilisable
├── context/              # Contextes React pour la gestion de l'état global (ex: `CartContext.tsx`, `ProductContext.tsx`, `AuthContext.tsx`)
└── generated/            # Code généré automatiquement (principalement par Prisma Client)
```

## 🔧 Scripts Disponibles

Liste des commandes utiles pour le développement et la gestion du projet :

-   `npm run dev` : Lance le serveur de développement de Next.js en mode hot-reloading.
-   `npm run build` : Crée une version optimisée pour la production de l'application.
-   `npm run start` : Démarre le serveur de production (après avoir exécuté `npm run build`).
-   `npm run lint` : Exécute ESLint pour analyser le code et identifier les problèmes potentiels.
-   `npx prisma studio` : Ouvre une interface graphique pour visualiser et gérer les données de votre base de données locale (nécessite que la base de données soit configurée).

## 🌍 Variables d'Environnement

Le fichier `.env.local` contient des variables d'environnement cruciales. Assurez-vous de les configurer correctement pour le bon fonctionnement de l'application :

-   `DATABASE_URL` : URL de connexion à votre base de données Prisma (pour SQLite, c'est un chemin de fichier).
-   `NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY` : Clé publique de l'API KkiaPay pour les transactions (frontend).
-   `KKIAPAY_PRIVATE_KEY` : Clé privée de l'API KkiaPay (utilisée côté serveur pour des opérations sécurisées).
-   `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` : Nom de votre cloud Cloudinary pour l'hébergement d'images.
-   `CLOUDINARY_API_KEY` et `CLOUDINARY_API_SECRET` : Clés d'API pour l'accès sécurisé à Cloudinary.
-   `NEXT_PUBLIC_APP_URL` : URL de base de votre application (utile pour les redirections et les liens absolus).

## 🎯 Améliorations Futures / Optimisations Possibles

Voici quelques pistes pour améliorer et étendre ce projet :

-   **Récupération de Données Réelles** : Remplacer les données mockées (`productsData`, `collectionsData`, clients, etc.) par des appels API réels vers le backend pour dynamiser toutes les sections.
-   **Gestion des Erreurs et Logging** : Mettre en place un système de gestion des erreurs plus robuste (ex: Sentry) et un logging détaillé pour le débogage en production.
-   **Tests Automatisés** : Ajouter des tests unitaires (ex: Jest, React Testing Library) et des tests d'intégration pour garantir la fiabilité et la stabilité du code.
-   **CI/CD (Intégration Continue/Déploiement Continu)** : Configurer des pipelines CI/CD (ex: GitHub Actions, Vercel) pour automatiser les tests et les déploiements.
-   **Optimisation des Performances** : Continuer l'optimisation des images, envisager le lazy loading pour les composants non critiques, et implémenter des stratégies de cache côté serveur.
-   **Amélioration de l'Expérience Utilisateur (UX)** : Affiner les animations, les transitions, et le feedback utilisateur pour une navigation encore plus agréable.
-   **Fonctionnalités Admin Approfondies** : Développer davantage les pages d'administration (ex: gestion des stocks, statistiques avancées, gestion des codes promo).
-   **Internationalisation (i18n)** : Implémenter la prise en charge de plusieurs langues si l'audience cible est globale.
-   **Webhooks pour KkiaPay** : Mettre en place des webhooks pour une confirmation de paiement asynchrone et plus fiable.

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer au projet :

1.  Fork le dépôt.
2.  Créez une branche pour votre fonctionnalité (`git checkout -b feature/nom-de-la-fonctionnalite`).
3.  Commitez vos modifications (`git commit -m 'feat: ajouter ma nouvelle fonctionnalité'`).
4.  Poussez vers la branche (`git push origin feature/nom-de-la-fonctionnalite`).
5.  Ouvrez une Pull Request détaillée.

## 📄 Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` (si existant) ou la [licence MIT](https://opensource.org/licenses/MIT) pour plus de détails.

## 📞 Contact

Pour toute question ou demande de renseignements, vous pouvez me contacter :

-   **Email** : [contact@lamarquedubattant.com](mailto:contact@lamarquedubattant.com)
-   **Téléphone** : +225 0123456789
-   **Site web** : [https://lamarquedubattant.com](https://lamarquedubattant.com)
