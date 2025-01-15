import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

const AddTaskButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-10 right-10 p-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-full shadow-lg backdrop-blur-md border-2 border-yellow-600 hover:scale-110 transition-all duration-300"
      whileHover={{ scale: 1.1 }} // Animation au survol
      whileTap={{ scale: 0.95 }}  // Animation au clic
      transition={{ duration: 0.2 }}
    >
      <AiOutlinePlus className="text-3xl" />
    </motion.button>
  );
};

export default AddTaskButton;
