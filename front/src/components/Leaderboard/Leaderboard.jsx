import React from "react";
import { motion } from "framer-motion";

const defaultAvatar = "https://via.placeholder.com/150";

const leaderboardData = [
	{ name: "User 1", level: 35, avatar: "https://picsum.photos/id/65/367/267" },
	{ name: "User 2", level: 33, avatar: "https://picsum.photos/id/64/367/267" },
	{ name: "User 3", level: 31, avatar: "https://picsum.photos/id/63/367/267" },
	{ name: "User 4", level: 30, avatar: "https://picsum.photos/id/73/367/267" },
	{ name: "User 5", level: 29, avatar: "https://picsum.photos/id/82/367/267" },
	{ name: "User 6", level: 28, avatar: "https://picsum.photos/id/84/367/267" },
];

const sortedLeaderboard = leaderboardData.sort((a, b) => b.level - a.level);

const Leaderboard = () => {
	return (
		<div className="min-h-screen flex flex-col items-center p-6">
			<h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-10">
				Leaderboard
			</h1>

			{/* Affichage mobile : 1er utilisateur seul */}
			<div className="lg:hidden w-full flex justify-center mb-10">
				<motion.div
					className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-lg w-40 sm:w-48"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
				>
					<UserCard user={sortedLeaderboard[0]} rank={1} />
				</motion.div>
			</div>

			{/* Podium pour écrans larges */}
			<div className="hidden lg:flex justify-center items-end relative mb-10">
				<motion.div
					className="absolute left-0 lg:-left-40 top-7 transform translate-y-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-lg w-32 sm:w-40"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
				>
					<UserCard user={sortedLeaderboard[1]} rank={2} />
				</motion.div>

				<motion.div
					className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-lg w-40 sm:w-48 lg:w-56 z-10"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
				>
					<UserCard user={sortedLeaderboard[0]} rank={1} />
				</motion.div>

				<motion.div
					className="absolute right-0 lg:-right-40 top-7 transform translate-y-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-lg w-32 sm:w-40"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
				>
					<UserCard user={sortedLeaderboard[2]} rank={3} />
				</motion.div>
			</div>

			{/* Liste des utilisateurs restants */}
			<div className="space-y-4 w-full max-w-3xl">
				{/* Affichage conditionnel des 2e et 3e en mobile */}
				<div className="lg:hidden">
					{sortedLeaderboard.slice(1, 3).map((user, index) => (
						<UserListItem key={index} user={user} rank={index + 2} />
					))}
				</div>

				{/* Liste des utilisateurs à partir du 4e */}
				{sortedLeaderboard.slice(3).map((user, index) => (
					<UserListItem key={index} user={user} rank={index + 4} />
				))}
			</div>
		</div>
	);
};

const UserCard = ({ user, rank }) => (
	<div className="text-center">
		<img
			src={user.avatar || defaultAvatar}
			alt={`${user.name}'s avatar`}
			className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto border-2 border-gray-300 dark:border-gray-500 mb-2 object-cover"
		/>
		<h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
			#{rank} - {user.name}
		</h2>
		<p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">
			Level {user.level}
		</p>
	</div>
);

const UserListItem = ({ user, rank }) => (
	<motion.div
		className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-lg flex items-center w-full"
		whileHover={{ scale: 1.05 }}
		transition={{ duration: 0.3 }}
	>
		<div className="flex items-center space-x-4">
			<img
				src={user.avatar || defaultAvatar}
				alt={`${user.name}'s avatar`}
				className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-500"
			/>
			<div>
				<h2 className="text-lg font-semibold text-gray-900 dark:text-white">
					#{rank} - {user.name}
				</h2>
				<p className="text-sm text-gray-700 dark:text-gray-400">
					Level {user.level}
				</p>
			</div>
		</div>
	</motion.div>
);

export default Leaderboard;
