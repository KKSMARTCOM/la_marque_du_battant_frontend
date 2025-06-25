# 🛍️ La Marque du Battant - E-commerce

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.7.0-2D3748?style=for-the-badge&logo=prisma)

**Une boutique en ligne moderne et complète pour "La Marque du Battant"**

[🚀 Démo Live](#) • [📖 Documentation](#) • [🐛 Signaler un Bug](#) • [💡 Demander une Fonctionnalité](#)

</div>

---

## 📋 Table des Matières

- [🎯 À Propos](#-à-propos)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [🚀 Installation Rapide](#-installation-rapide)
- [⚙️ Configuration](#️-configuration)
- [🗄️ Base de Données](#️-base-de-données)
- [📁 Architecture](#-architecture)
- [🔧 Scripts](#-scripts)
- [🌍 Variables d'Environnement](#-variables-denvironnement)
- [🎨 Interface Utilisateur](#-interface-utilisateur)
- [🔒 Sécurité](#-sécurité)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Déploiement](#-déploiement)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)
- [📞 Contact](#-contact)
- [📅 Gestion des Événements](#-gestion-des-événements)
- [🖼️ Gestion des images et configuration du chemin (GitHub Pages)](#️-gestion-des-images-et-configuration-du-chemin-github-pages)

---

## 🎯 À Propos

**La Marque du Battant** est une plateforme e-commerce moderne construite avec les technologies les plus récentes. Cette application offre une expérience utilisateur fluide et une interface d'administration robuste pour la gestion complète d'une boutique en ligne.

### 🎯 Objectifs du Projet

- ✅ **Performance optimale** avec Next.js 14 et App Router
- ✅ **Interface utilisateur moderne** avec Tailwind CSS et Radix UI
- ✅ **Gestion complète des produits** et des commandes
- ✅ **Système de paiement sécurisé** adapté au marché africain
- ✅ **Administration intuitive** pour la gestion du contenu
- ✅ **Design responsive** pour tous les appareils

---

## ✨ Fonctionnalités

### 🛒 Boutique en Ligne
- **Catalogue de produits** avec filtres avancés et recherche
- **Gestion des collections** et catégories
- **Système de favoris** pour sauvegarder les produits préférés
- **Panier d'achat** avec gestion des quantités et tailles
- **Paiement sécurisé** via KkiaPay (spécialisé Afrique)

### 👤 Gestion des Utilisateurs
- **Inscription/Connexion** avec authentification sécurisée
- **Profils utilisateurs** personnalisables
- **Historique des commandes** détaillé
- **Gestion des événements** et inscriptions

### 🎛️ Interface d'Administration
- **Tableau de bord** avec statistiques en temps réel
- **Gestion des produits** (CRUD complet)
- **Gestion des commandes** et suivi des statuts
- **Gestion des utilisateurs** et des rôles
- **Gestion des collections** et événements
- **Upload d'images** avec Cloudinary

### 📊 Fonctionnalités Avancées
- **Système de rôles** (CLIENT, USER, ADMIN, SUPER_ADMIN)
- **Gestion des stocks** en temps réel
- **Notifications** avec React Hot Toast
- **Optimisation SEO** intégrée
- **Carrousels interactifs** pour les produits

## 📅 Gestion des Événements

### Pages Événements

- **Liste des événements** : accessible via `/events-page`, cette page affiche tous les événements à venir sous forme de cartes responsives.
- **Détail d'un événement** : accessible via `/events-page/[eventId]`, cette page affiche toutes les informations détaillées d'un événement (nom, image, description, organisateur, lieu, date, prix, etc.) de façon dynamique selon l'id dans l'URL.

### Fonctionnement

- Les données des événements sont actuellement mockées dans le fichier `src/lib/data.ts` (tableau `eventsData`).
- Chaque carte événement redirige vers la page de détails correspondante au clic (plus de preview/drawer).
- La page de détails est 100% responsive et reprend fidèlement le design fourni.
- Le bouton "Je participe" est animé et occupe toute la largeur sur mobile et desktop.
- Si l'id de l'événement n'existe pas, une page 404 s'affiche.

### Suppression du Preview

- L'ancien système de prévisualisation rapide (drawer/wrapper au clic sur l'icône œil) a été supprimé pour simplifier l'expérience utilisateur.
- Désormais, toute l'interaction se fait via la navigation classique (clic sur la carte = accès à la page de détails).

### Personnalisation

- Pour modifier ou enrichir les événements, éditez simplement le tableau `eventsData` dans `src/lib/data.ts`.
- Pour connecter à une vraie base de données, adaptez la récupération des données dans la page dynamique.

---

## 🛠️ Technologies

### 🎨 Frontend
- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router
- **[React 18](https://react.dev/)** - Bibliothèque UI
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utilitaire

### 🎯 Composants UI
- **[Radix UI](https://www.radix-ui.com/)** - Composants primitifs accessibles
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[React Hook Form](https://react-hook-form.com/)** - Gestion des formulaires
- **[TanStack Table](https://tanstack.com/table)** - Tables avancées

### 🎠 Carrousels & Animations
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrousels performants
- **[React Slick](https://react-slick.neostack.com/)** - Carrousels supplémentaires
- **[Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animations CSS

### 💾 Base de Données & ORM
- **[SQLite](https://www.sqlite.org/)** - Base de données locale
- **[Prisma 6.7.0](https://www.prisma.io/)** - ORM moderne

### 💳 Paiement & Services
- **[KkiaPay](https://docs.kkiapay.me/)** - Solution de paiement africaine
- **[Cloudinary](https://cloudinary.com/)** - Gestion d'images cloud
- **[Next Cloudinary](https://next-cloudinary.spacejelly.dev/)** - Intégration Next.js

### 🔧 Outils de Développement
- **[ESLint](https://eslint.org/)** - Linting du code
- **[PostCSS](https://postcss.org/)** - Traitement CSS
- **[ts-node](https://github.com/TypeStrong/ts-node)** - Exécution TypeScript

---

## 🚀 Installation Rapide

### Prérequis
- **Node.js** 18+ 
- **npm** ou **yarn** ou **pnpm**
- **Git**

### Étapes d'Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/KKSMARTCOM/la_marque_du_battant_frontend.git
   cd la_marque_du_battant_frontend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configurer l'environnement**
   ```bash
   # Créer le fichier .env.local
   cp .env.example .env.local
   # Éditer .env.local avec vos clés
   ```

4. **Configurer la base de données**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

6. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuration

### Fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet :

```env
# Base de données
DATABASE_URL="file:./dev.db"

# KkiaPay (Paiement)
NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY="votre_clé_publique_kkiapay"
KKIAPAY_PRIVATE_KEY="votre_clé_privée_kkiapay"

# Cloudinary (Images)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="votre_cloud_name"
CLOUDINARY_API_KEY="votre_api_key"
CLOUDINARY_API_SECRET="votre_api_secret"

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 🔑 Obtenir les Clés API

#### KkiaPay
1. Créez un compte sur [KkiaPay](https://kkiapay.me/)
2. Accédez à votre dashboard
3. Récupérez vos clés publique et privée

#### Cloudinary
1. Créez un compte sur [Cloudinary](https://cloudinary.com/)
2. Accédez à votre dashboard
3. Récupérez votre Cloud Name, API Key et API Secret

---

## 🗄️ Base de Données

### Modèles Prisma

```prisma
// Utilisateurs avec rôles
User {
  id, email, password, role (CLIENT|USER|ADMIN|SUPER_ADMIN)
  lastname, firstname, avatar, birthday, phone, address, city
}

// Produits avec gestion des stocks
Product {
  id, name, description, price, size (JSON), color
  quantity, main_image, additional_images (JSON), status
  categoryId, collectionId
}

// Collections saisonnières
Collection {
  id, name, image, description, start_date, end_date
}

// Catégories de produits
Category {
  id, name, description
}

// Événements
Event {
  id, name, description, image, price, country, address
  start_date, end_date
}

// Panier d'achat
CartItem {
  id, orderNo, quantity, size, color, userId, productId
}

// Commandes
Order {
  id, userId, orderNo, transactionId, price, status
}

// Favoris
Favorite {
  id, userId, productId, sizeSelected
}
```

### Commandes Prisma Utiles

```bash
# Générer le client Prisma
npx prisma generate

# Pousser le schéma vers la DB
npx prisma db push

# Exécuter les seeders
npx prisma db seed

# Ouvrir Prisma Studio
npx prisma studio

# Réinitialiser la base de données
npx prisma db push --force-reset
```

---

## 📁 Architecture

```
src/
├── app/                          # App Router Next.js 14
│   ├── (store)/                 # Pages publiques
│   │   ├── page.tsx            # Accueil
│   │   ├── products/           # Catalogue produits
│   │   ├── cart/               # Panier
│   │   ├── account/            # Espace client
│   │   └── events-page/        # Événements
│   ├── (auth)/                 # Authentification
│   │   ├── login/              # Connexion
│   │   └── register/           # Inscription
│   └── (admin)/                # Administration
│       ├── dashboard/          # Tableau de bord
│       ├── products/           # Gestion produits
│       ├── orders/             # Gestion commandes
│       ├── users/              # Gestion utilisateurs
│       └── events/             # Gestion événements
├── components/                  # Composants React
│   ├── ui/                     # Composants UI (shadcn/ui)
│   ├── store/                  # Composants boutique
│   ├── admin/                  # Composants admin
│   └── auth/                   # Composants auth
├── lib/                        # Utilitaires et config
├── hooks/                      # Hooks personnalisés
├── context/                    # Contextes React
└── generated/                  # Code généré (Prisma)
```

---

## 🔧 Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement avec hot-reload |
| `npm run build` | Build de production optimisé |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification du code avec ESLint |
| `npx prisma studio` | Interface graphique pour la base de données |
| `npx prisma generate` | Générer le client Prisma |
| `npx prisma db push` | Synchroniser le schéma avec la DB |
| `npx prisma db seed` | Exécuter les données de test |

---

## 🌍 Variables d'Environnement

| Variable | Description | Requis |
|----------|-------------|--------|
| `DATABASE_URL` | URL de connexion à la base de données | ✅ |
| `NEXT_PUBLIC_KKIAPAY_PUBLIC_KEY` | Clé publique KkiaPay (frontend) | ✅ |
| `KKIAPAY_PRIVATE_KEY` | Clé privée KkiaPay (backend) | ✅ |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Nom du cloud Cloudinary | ✅ |
| `CLOUDINARY_API_KEY` | Clé API Cloudinary | ✅ |
| `CLOUDINARY_API_SECRET` | Secret API Cloudinary | ✅ |
| `NEXT_PUBLIC_APP_URL` | URL de base de l'application | ✅ |

---

## 🎨 Interface Utilisateur

### 🎯 Design System
- **Tailwind CSS** pour un design cohérent
- **Radix UI** pour l'accessibilité
- **Lucide React** pour les icônes
- **Animations fluides** avec Tailwind CSS Animate

### 📱 Composants Principaux
- **Header** avec navigation et recherche
- **Product Cards** avec images et informations
- **Cart Modal** pour le panier d'achat
- **Admin Dashboard** avec tableaux de données
- **Forms** avec validation React Hook Form

### 🎨 Thème et Couleurs
- Design moderne et épuré
- Palette de couleurs cohérente
- Typographie optimisée pour la lisibilité
- Espacement et hiérarchie visuelle claire

---

## 🔒 Sécurité

### 🔐 Authentification
- **Bcrypt** pour le hachage des mots de passe
- **JWT** pour les tokens d'authentification
- **Rôles utilisateurs** avec permissions granulaires
- **Protection des routes** sensibles

### 🛡️ Sécurité des Données
- **Validation** côté client et serveur
- **Sanitisation** des entrées utilisateur
- **Protection CSRF** intégrée
- **Headers de sécurité** configurés

### 💳 Sécurité des Paiements
- **KkiaPay** certifié et sécurisé
- **Validation** des transactions
- **Chiffrement** des données sensibles
- **Logs** de sécurité détaillés

---

## 📱 Responsive Design

### 📱 Mobile First
- Design optimisé pour mobile
- Navigation adaptative
- Images responsives
- Touch-friendly interactions

### 💻 Multi-Écrans
- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

### 🎯 Breakpoints Tailwind
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

---

## 🚀 Déploiement

### 📦 Build de Production
```bash
npm run build
npm run start
```

### 🌐 Plateformes Recommandées
- **[Vercel](https://vercel.com/)** - Optimisé pour Next.js
- **[Netlify](https://netlify.com/)** - Déploiement simple
- **[Railway](https://railway.app/)** - Backend et base de données

### 🔧 Variables d'Environnement en Production
- Configurez toutes les variables d'environnement
- Utilisez une base de données de production (PostgreSQL/MySQL)
- Activez HTTPS et les domaines personnalisés

---

## 🤝 Contribution

Nous accueillons toutes les contributions ! Voici comment participer :

### 📋 Processus de Contribution

1. **Fork** le projet
2. **Clone** votre fork localement
3. **Créez** une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```
4. **Commitez** vos changements
   ```bash
   git commit -m 'feat: ajouter ma nouvelle fonctionnalité'
   ```
5. **Poussez** vers votre fork
   ```bash
   git push origin feature/ma-nouvelle-fonctionnalite
   ```
6. **Ouvrez** une Pull Request

### 📝 Standards de Code
- **TypeScript** strict
- **ESLint** pour la qualité du code
- **Prettier** pour le formatage
- **Conventional Commits** pour les messages

### 🐛 Signaler un Bug
- Utilisez les [Issues GitHub](https://github.com/KKSMARTCOM/la_marque_du_battant_frontend/issues)
- Décrivez clairement le problème
- Incluez les étapes de reproduction
- Ajoutez des captures d'écran si nécessaire

---

## 📄 Licence

Ce projet est distribué sous la licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License

Copyright (c) 2024 La Marque du Battant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact

### 🌐 Informations de Contact
- **Site Web** : [https://lamarquedubattant.com](https://lamarquedubattant.com)
- **Email** : [contact@lamarquedubattant.com](mailto:contact@lamarquedubattant.com)
- **Téléphone** : +225 0123456789

### 📍 Réseaux Sociaux
- **Facebook** : [La Marque du Battant](https://facebook.com/lamarquedubattant)
- **Instagram** : [@lamarquedubattant](https://instagram.com/lamarquedubattant)
- **Twitter** : [@lamarquedubattant](https://twitter.com/lamarquedubattant)

### 💼 Support Commercial
- **Heures d'ouverture** : Lundi - Vendredi, 9h - 18h (GMT)
- **Support technique** : [support@lamarquedubattant.com](mailto:support@lamarquedubattant.com)

---

## 🖼️ Gestion des images et configuration du chemin (GitHub Pages)

### Utilisation de getImagePath

Pour garantir que les images s'affichent correctement en local **et** en production (notamment sur GitHub Pages), toutes les images doivent être référencées via la fonction utilitaire :

```js
import { getImagePath } from "@/utils/imagePath";

<img src={getImagePath("fakeimg/monimage.jpg")} />
```

### Configuration du chemin de base

Dans le fichier `src/utils/imagePath.ts`, deux constantes contrôlent le comportement :

```js
let IS_PROD = "local"; // Mets "prod" pour la prod, "local" pour le développement
const BASE_PATH = '/la_marque_du_battant_frontend'; // à changer si le nom du repo change
```
- **En local** : laisse `IS_PROD = "local"` → les images seront accessibles via `/fakeimg/monimage.jpg`
- **En production** : mets `IS_PROD = "prod"` **avant de builder/déployer** → les images seront accessibles via `/la_marque_du_battant_frontend/fakeimg/monimage.jpg`

**⚠️ N'oublie pas de modifier `IS_PROD` avant chaque build/déploiement !**

### Bonnes pratiques
- Ne jamais mettre de `/` devant le nom d'image passé à `getImagePath`.
- Toutes les images doivent être dans le dossier `public/` ou ses sous-dossiers.
- Si tu changes de nom de repo, adapte la constante `BASE_PATH`.

---

<div align="center">

**⭐ Si ce projet vous plaît, n'oubliez pas de lui donner une étoile !**

[⬆️ Retour en haut](#-la-marque-du-battant---e-commerce)

</div> 