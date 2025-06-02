const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const parseScheduleExpression = (schedule) => {
	const type = schedule.split("(")[0];
	const value = schedule.split("(")[1].split(")")[0];

	if (type === "rate") {
		const unit = value.split(" ")[1];
		const value = value.split(" ")[0];
		return {
			type: "rate",
			value: value,
			unit: unit
		};
	} else {
		console.error("Unknown schedule type: " + type);
	}
}

export const createScheduleExpression = (value, unit) => {
	return `rate(${value} ${unit})`;
}

export const fetchProfile = async (accessToken) => {
	const response = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + accessToken
		},
	});

	if (!response.ok) {
		throw new Error("Erreur lors du chargement du profil");
	}

	return response.json();
}

export const GetBuy1KXPLink = async (accessToken) => {
	const response = await fetch(`${API_BASE_URL}/api/v1/stripe/checkout/create`,
		{
			redirect: "manual",
			method: "POST",
			mode: "cors",
			headers: {
				"Authorization": "Bearer " + accessToken
			},
			body: JSON.stringify({
				successUrl: "https://hobbit-one.vercel.app/success",
				cancelUrl: "https://hobbit-one.vercel.app/cancel"
			})
		}
	);
	console.log();
	return (await response.json()).url;
}

// result:
// {
//     "tasks": [
//         {
//             "task_id": "xxxxxxxxxxxxxxxx-xxxx-xxxx-xxxxxxxx",
//             "quantity": 1,
//             "unit": "none"|"distance"|"reps"|"time",
//             "name": "name",
//             "description": "description",
//             "frequency": "rate(x unit)",
//             "experience_gained": 100,
//             "is_public": false,
//             "user_id": "xxxxxxxxxxxxxxxx-xxxx-xxxx-xxxxxxxx"
//         }
//     ]|null,
//     current_page: 1,
//     max_page: 1
// }
export const fetchTasks = async (accessToken, page, filter) => {
	let query = `?page=${page}`;
	if (filter) {
		if (filter.name) {
			query += `&name=${filter.name}`;
		}
		if (filter.description) {
			query += `&description=${filter.description}`;
		}
		if (filter.categories) {
			query += `&categories=${filter.categories.join(",")}`;
		}
		if (filter.completed) {
			query += `&completed=${filter.completed}`;
		}
		if (filter.completionTimeMin) {
			query += `&completionTimeMin=${filter.completionTimeMin}`;
		}
		if (filter.completionTimeMax) {
			query += `&completionTimeMax=${filter.completionTimeMax}`;
		}
		if (filter.sort) {
			query += `&sort=${filter.sort}`;
		}
	}
	const response = await fetch(`${API_BASE_URL}/api/v1/tasks${query}`,
		{
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + accessToken
			},
		}
	);
	if (!response.ok) {
		throw new Error("Erreur lors du chargement des tâches");
	}
	return response.json();
};

// result:
// {}
export const createTask = async (accessToken, task) => {
	const response = await fetch(`${API_BASE_URL}/api/v1/tasks`, {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + accessToken
		},
		body: JSON.stringify(task)
	});
	if (!response.ok) {
		throw new Error("Erreur lors de la creation de la tâche");
	}
	return response.json();
};

// result:
// {
//     "task_id": "xxxxxxxxxxxxxxxx-xxxx-xxxx-xxxxxxxx",
//     "quantity": 1,
//     "unit": "none"|"distance"|"reps"|"time",
//     "name": "name",
//     "description": "description",
//     "frequency": "rate(x unit)",
//     "experience_gained": 100,
//     "is_public": false,
//     "user_id": "xxxxxxxxxxxxxxxx-xxxx-xxxx-xxxxxxxx"
// }
export const fetchTask = async (accessToken, taskId) => {
	const response = await fetch(`${API_BASE_URL}/api/v1/tasks/${taskId}`, {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + accessToken
		},
	});
	if (!response.ok) {
		throw new Error("Erreur lors du chargement de la tâche");
	}
	return response.json();
}

// result:
// {}
export const updateTask = async (accessToken, taskId, task) => {
	const response = await fetch(`${API_BASE_URL}/api/v1/tasks/${taskId}`, {
		method: "PUT",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + accessToken
		},
		body: JSON.stringify(task)
	});
	if (!response.ok) {
		throw new Error("Erreur lors de la modification de la tâche");
	}
	return response.json();
};

// result:
// {}
export const completeTask = async (accessToken, taskId) => {
	const response = await fetch(`${API_BASE_URL}/api/v1/tasks/${taskId}/complete`, {
		method: "PUT",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + accessToken
		},
	});
	if (!response.ok) {
		throw new Error("Erreur lors de la modification de la tâche");
	}
	return response.json();
}
