import React, { useState } from 'react';
import TaskList from './Tasks/TaskList';
import AddTaskButton from './Tasks/AddTaskButton';

const App = () => {
  const [tasks, setTasks] = useState([
    { name: 'Create API Documentation', quantity: '5 endpoints', duration: '2 hours', description: 'Write detailed documentation for the REST API.' },
    { name: 'UI Design', quantity: '4 screens', duration: '3 hours', description: 'Design responsive UI for task management application.' },
    { name: 'Database Setup', quantity: '1 database', duration: '1 hour', description: 'Setup the initial database schema for the project.' },
  ]);

  const addTask = () => {
    // Logique pour ajouter une nouvelle tâche
    const newTask = {
      name: 'New Task',
      quantity: '1 unit',
      duration: '30 minutes',
      description: 'Description of the new task.',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen">
      <TaskList tasks={tasks} />
      <AddTaskButton onClick={addTask} />
    </div>
  );
};

export default App;
