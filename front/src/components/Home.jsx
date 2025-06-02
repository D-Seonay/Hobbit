import React, { useEffect, useState } from 'react';
import TaskList from './Tasks/TaskList';
import AddTaskButton from './Tasks/AddTaskButton';
import { createTask, fetchTasks } from '../api/tasks';

const App = ({ user, }) => {
  const [tasks, setTasks] = useState({tasks: [], current_page: 1, max_page: 1});

  useEffect(() => {
    fetchTasks(user.access_token, 1).then((data) => {
      setTasks(data);
    });
  }, []);

  const handleTaskCreate = (newTask) => {
    createTask(user.access_token, newTask).then((response) => {
      setTasks({tasks: [...tasks, newTask], current_page: tasks.current_page, max_page: tasks.max_page});
    });
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {tasks.tasks.length !== 0 && (
        console.log(tasks),
        <TaskList tasks={tasks} />
      )}
      {tasks.tasks.length === 0 && (  
        <p>Aucune tâche à afficher</p>
      )}

      <AddTaskButton onTaskCreate={handleTaskCreate} />
    </div>
  );
};

export default App;
