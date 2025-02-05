import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todo";
import Loading from "./Loading/Loading";
import Error from "./Error";

const Todos = () => {
  // Utilise useQuery pour récupérer les tâches
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <Loading />;    
  if (isError) return <Error message={error.message} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des tâches</h1>
      <ul className="space-y-4">
        {data.todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <h2 className="font-semibold text-lg">{todo.todo}</h2>
            <p>Status : {todo.completed ? "Terminé" : "En cours"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
