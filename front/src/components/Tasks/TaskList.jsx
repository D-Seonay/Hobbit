import React from "react";
import { motion } from "framer-motion";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-wrap items-center flex-col">
      {tasks.map((task, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Final state
          exit={{ opacity: 0, y: -20 }} // Exit state
          transition={{ duration: 0.5, delay: index * 0.1 }} // Transition timing
        >
          <TaskCard task={task} index={index} totalTasks={tasks.length} />
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;
