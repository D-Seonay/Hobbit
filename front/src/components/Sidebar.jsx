import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Bouton du profil */}
      <button
        onClick={toggleSidebar}
        className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <img
          src="https://via.placeholder.com/40"
          alt="Profile Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-lg font-semibold">Mon Profil</span>
      </button>

      {/* Barre latérale */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg z-50"
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Menu Profil
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Liens de navigation */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Navigation
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  to="/missions"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Missions
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Paramètres
                </Link>
              </li>
            </ul>
          </section>

          {/* Section Paramètres */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Paramètres
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 dark:text-gray-400 hover:underline">
                Modifier le mot de passe
              </li>
              <li className="text-gray-600 dark:text-gray-400 hover:underline">
                Notifications
              </li>
              <li className="text-gray-600 dark:text-gray-400 hover:underline">
                Préférences
              </li>
            </ul>
          </section>

          {/* Section Historique des missions */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Historique des missions
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-600 dark:text-gray-400 hover:underline">
                Mission 1 : Complétée
              </li>
              <li className="text-gray-600 dark:text-gray-400 hover:underline">
                Mission 2 : En cours
              </li>
              <li className="text-gray-600 dark:text-gray-400 hover:underline">
                Mission 3 : À venir
              </li>
            </ul>
          </section>

          {/* Section Affichage du profil */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Profil
            </h3>
            <div className="mt-2">
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Nom d'utilisateur
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    utilisateur@example.com
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>

      {/* Fond de la sidebar (clique pour fermer) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
