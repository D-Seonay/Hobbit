import React, { useEffect, useState } from 'react';
import TaskList from './Tasks/TaskList';
import AddTaskButton from './Tasks/AddTaskButton';
import { fetchProfile } from '../api/tasks';

const App = ({ user, }) => {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		fetchProfile(user.access_token).then((data) => {
			setTasks(data);
		});
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<TaskList tasks={tasks} />
			<AddTaskButton onTaskCreate={handleTaskCreate} />
		</div>
	);
};

export default App;
