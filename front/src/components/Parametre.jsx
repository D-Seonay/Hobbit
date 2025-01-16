import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";


const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Paramètres
      </h1>
      <div className="space-y-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Modifier le mot de passe
          </h2>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            Modifier
          </button>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Notifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Gérer vos préférences de notifications.
          </p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 ml-4 rounded-full dark:bg-yellow-500 transition-colors duration-300"
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
