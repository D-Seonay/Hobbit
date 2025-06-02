import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTask, completeTask } from "../../api/tasks";
import { useAuth } from "react-oidc-context"

const TaskDetailsPage = ({ user, }) => {
	const { id } = useParams(); // Récupérer l'id de la tâche depuis l'URL
	const [task, setTask] = useState(null);
	const navigate = useNavigate();

	console.log(user);

	useEffect(() => fetchTask(user.access_token, id).then((response) => {
		setTask(response);
	}), [id]);

	if (!task) {
		return <p className="text-center text-red-500">Tâche non trouvée !</p>;
	}

	return !task ? (<div>Loading...</div>) : (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{task.name}</h2>
				<p className="text-gray-700 dark:text-gray-300">
					<strong>Description:</strong> {task.description}
				</p>
				<p className="text-gray-700 dark:text-gray-300">
					<strong>Quantity:</strong> {task.quantity}
				</p>
				<p className="text-gray-700 dark:text-gray-300">
					<strong>Unit:</strong> {task.unit}
				</p>
				<p className="text-gray-700 dark:text-gray-300">
					<strong>Frequency:</strong> {task.frequency}
				</p>
				<div className="mt-4 flex space-x-4">
					<button
						onClick={() => navigate(-1)} // Retourner à la liste des tâches
						className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
					>
						Retour
					</button>
					<button
						onClick={() => {
							completeTask(user.access_token, id);
							navigate(-1); // Retour après avoir terminé la tâche
						}}
						className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
					>
						Terminer la tâche
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskDetailsPage;
