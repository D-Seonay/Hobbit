import React from "react";
import { motion } from "framer-motion";

const TaskCard = ({ task, index, totalTasks }) => {
  // Condition pour appliquer les bordures arrondies en fonction du nombre de tâches
  const borderRadiusClass = () => {
    if (totalTasks === 1) {
      return "rounded-xl"; // Une seule tâche, bordure arrondie sur toute la carte
    }
    if (totalTasks === 2) {
      return index === 0 ? "rounded-t-xl" : "rounded-b-xl"; // 2 tâches, arrondi en haut pour la première et en bas pour la deuxième
    }
    if (index === 0) {
      return "rounded-t-xl"; // Première tâche, arrondi en haut
    }
    if (index === totalTasks - 1) {
      return "rounded-b-xl"; // Dernière tâche, arrondi en bas
    }
    return ""; // Tâches intermédiaires n'ont pas de border-radius
  };

  return (
    <motion.div
      className={`relative max-w-xs w-full p-6 shadow-lg bg-white bg-opacity-20 backdrop-blur-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${borderRadiusClass()} w-[330px] sm:min-w-[450px] md:min-w-[600px]`}
      whileHover={{ scale: 1.05 }} // Effet de zoom lors du survol
      whileTap={{ scale: 0.98 }}  // Légère réduction lors du clic
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {task.name}
      </h2>

      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
        <strong>Quantity:</strong> {task.quantity}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        <strong>Duration:</strong> {task.duration}
      </p>

      <p className="mt-4 text-gray-600 dark:text-gray-400">{task.description}</p>
    </motion.div>
  );
};

export default TaskCard;
