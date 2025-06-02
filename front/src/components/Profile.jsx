import React, { useEffect, useState } from 'react';
import TaskList from './Tasks/TaskList';
import AddTaskButton from './Tasks/AddTaskButton';
import { /*fetchProfile,*/ GetBuy1KXPLink } from '../api/tasks';
import { useLocation, useNavigate } from 'react-router-dom';

const App = ({ user, }) => {
	const [profile, setProfile] = useState(null);
	const [redirectUrl, setRedirectUrl] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		//fetchProfile(user.access_token).then((data) => {
		//	setTasks(data);
		//});
	}, []);

	useEffect(() => {
		if (redirectUrl) {
			window.location.href = redirectUrl;
		}
	}, [redirectUrl]);

	const buy1KXP = () => {
		GetBuy1KXPLink(user.access_token).then((data) => {
			setRedirectUrl(data);
		});
	}

	return (
		<button onClick={buy1KXP}>Buy 1KXP</button>
	);
};

export default App;
