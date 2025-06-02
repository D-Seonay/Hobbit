# Hobbit Frontend

Ce projet est le frontend d'une application de gestion de tâches, développé avec React, Vite et Tailwind CSS.

## Fonctionnalités principales
- Affichage de la liste des tâches
- Visualisation des détails d'une tâche
- Ajout de nouvelles tâches
- Authentification utilisateur
- Classement (Leaderboard)
- Navigation fluide avec React Router

## Structure du projet
```
front/
├── public/                # Fichiers statiques
├── src/
│   ├── api/               # Appels API
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React
│   │   ├── Tasks/         # Composants liés aux tâches
│   │   ├── Auth/          # Authentification
│   │   ├── Leaderboard/   # Classement
│   │   └── ...
│   ├── App.jsx            # Composant principal
│   └── main.jsx           # Point d'entrée
├── package.json           # Dépendances et scripts
└── ...
```

## Installation
1. Cloner le dépôt :
   ```sh
   git clone <url-du-repo>
   cd Hobbit/front
   ```
2. Installer les dépendances :
   ```sh
   npm install
   ```
3. Lancer le serveur de développement :
   ```sh
   npm run dev
   ```

## Technologies utilisées
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

## Scripts utiles
- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Build de production
- `npm run preview` : Prévisualisation du build

## Contribution
- Killian BELLOUARD (@0Killian)
- Mathéo DELAUNAY (@D-Seonay)
- Claire NGUYEN (@podfleur)
- Sasha WILK (@jojosashaw)
