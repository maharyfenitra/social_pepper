# 🧩 Partie 1 – Intégration front des contenus "Pepper" dans un Back Office React

## 🎯 Objectif

Ce projet simule l’intégration des contenus d’un site WordPress externe dans un back-office React.  
L’objectif est de fournir une interface professionnelle, responsive et intuitive pour consulter des newsletters.

---

## ⚙️ Stack utilisée

- 🧱 Framework : [React 19](https://react.dev)
- ⚡️ Bundler : [Vite](https://vitejs.dev)
- 💄 UI : [MUI (Material UI + Joy UI)](https://mui.com)
- 🌐 Routing : [React Router DOM v7](https://reactrouter.com)
- 📦 Gestion de paquets : [pnpm](https://pnpm.io)
- 🔧 API Fetch : [Axios](https://axios-http.com)
- 🧠 State + Caching : [TanStack React Query](https://tanstack.com/query)
- 📊 Bonus : [Recharts](https://recharts.org/) pour d’éventuelles représentations graphiques
- ✅ Linting : ESLint

---

## 🛠 Fonctionnalités

- 📥 Récupération simulée de contenus WordPress via une fausse API (`jsonplaceholder.typicode.com`)
- 🗂 Affichage des newsletters dans un tableau avec :
  - Titre
  - Date de publication
  - Auteur
- 🧭 Navigation via React Router :
  - Accueil
  - Mon Compte
  - Support Réseau
- 🎨 Base de charte graphique professionnelle responsive (MUI)
- 🔎 **NOUVEAU : Détail d’une newsletter**
  - Affichage de la newsletter complète au clic sur une ligne
  - Informations complètes sur l’auteur (nom, email…)
- ➕ Bonus :
  - 🔔 Notifications simulées (console et UI)
  - 🎯 Filtrage dynamique des newsletters par type (ex. : Actualités, En bref)

---

## ▶️ Lancer le projet localement

### Prérequis
- Node.js ≥ 18
- [pnpm](https://pnpm.io) installé globalement : `npm install -g pnpm`

### Étapes

```bash
pnpm install
pnpm dev
