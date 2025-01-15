import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  // Basculer entre le mode clair et sombre
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
