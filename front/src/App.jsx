import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Parametre from "./components/Parametre";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error";
import { useAuth } from "react-oidc-context";
import TaskBoard from "./components/Tasks/TaskBoard";
import TaskDetailsPage from "./components/Tasks/TaskDetailsPage";



const App = () => {
	const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	const auth = useAuth();

	switch (auth.activeNavigator) {
		case "signinSilent":
			return <div>Signing you in...</div>;
		case "signoutRedirect":
			return <div>Signing you out...</div>;
	}

	if (auth.isLoading) {
		return <Loading />;
	}

	if (auth.error) {
		return <Error message={auth.error.message} />;
	}
	if (auth.isAuthenticated) {
		return (
			<main
				className={`min-h-screen ${darkMode
					? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
					: "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-900"
					} transition-colors duration-300`}
			>

				<Router>
					<Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleSidebar={toggleSidebar} />

					<div className="container mx-auto">
						<Routes>
							<Route path="/" element={<Home user={auth.user} />} />
							<Route path="/profile" element={<Profile user={auth.user} />} />
							<Route path="/task/:id" element={<TaskDetailsPage user={auth.user} />} />
							<Route path="/taskboard" element={<TaskBoard />} />
							<Route path="/leaderboard" element={<Leaderboard />} />
							<Route path="/missions" element={<h1>Historique des missions</h1>} />
							<Route path="/settings" element={<Parametre />} />
						</Routes>
					</div>
				</Router>
			</main>
		);
	}
	return <button className="text-white" onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default App;
