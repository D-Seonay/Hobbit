import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import du composant Link
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center flex-col">
      <h2 className="text-3xl font-bold text-black mb-6 dark:text-gray-200">Task List</h2>
      {tasks.tasks.map((task, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Envelopper la TaskCard dans un Link */}
          <Link to={`/task/${task.task_id}`}>
            <TaskCard task={task} index={index} totalTasks={tasks.length} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;
