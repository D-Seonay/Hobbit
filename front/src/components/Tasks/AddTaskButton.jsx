import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

const AddTaskButton = ({ onTaskCreate }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    quantity: 0,
    unit: '',
    name: '',
    description: '',
    frequency: '',
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'quantity') {
      value = parseInt(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onTaskCreate) {
      onTaskCreate(formData);
    }
    setModalOpen(false); // Fermer le modal après la création
    setFormData({ quantity: '', unit: '', name: '', description: '', frequency: '' }); // Réinitialiser le formulaire
  };

  return (
    <>
      {/* Bouton pour ouvrir le formulaire */}
      <motion.button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-10 right-10 p-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-full shadow-lg backdrop-blur-md border-2 border-yellow-600 hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <AiOutlinePlus className="text-3xl" />
      </motion.button>

      {/* Modal pour le formulaire */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full dark:bg-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Create New Task</h2>
            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm bg-gray-200 p-2 dark:bg-gray-700"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm bg-gray-200 p-2 dark:bg-gray-700"
                />
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm bg-gray-200 p-2 dark:bg-gray-700"
                />
              </div>

              {/* Unit */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Unit</label>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm bg-gray-200 p-2 dark:bg-gray-700"
                />
              </div>
              {/* Frequency */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm bg-gray-200 p-2 dark:bg-gray-700"
                />
              </div>

              {/* Boutons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Save Task
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AddTaskButton;
