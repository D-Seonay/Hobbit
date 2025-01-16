import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdError } from "react-icons/md";


const ErrorCard = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md"
        >
          <div className="flex items-start">
            <div className="mr-4">
            <MdError className="text-red-500 dark:text-red-400" size={24} />

            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Erreur
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {message}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorCard;
