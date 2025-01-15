import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";


const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  return (
    <nav className="text-white p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
                Hobbit
            </Link>
        </div>
        <div className="mx-auto flex justify-between items-center">
            {/* Menu Normal */}
            <div className="hidden md:flex space-x-6 backdrop-blur-md bg-gray-800 bg-opacity-50 py-4 px-10 rounded-full dark:bg-gray-700">
            <Link to="/" className="text-xl hover:text-yellow-500 transition-all duration-300">
                <FaHome className="inline-block mr-2" /> Home
            </Link>
            <Link to="/learderboard" className="text-xl hover:text-yellow-500 transition-all duration-300">
                <FaRankingStar className="inline-block mr-2" /> Leaderboard
            </Link>
            </div>
            
        </div>
        {/* Theème switcher */}
        <div className="flex items-center space-x-4">
           {/* Bouton Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 ml-4 rounded-full bg-gray-700 dark:bg-yellow-500 hover:bg-gray-600 transition-colors duration-300"
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
        </button>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-700 p-4 space-y-4">
          <Link to="/" className="text-xl hover:text-yellow-500 transition-all duration-300">
            <FaHome className="inline-block mr-2" /> Home
          </Link>
          <Link to="/pokemons" className="text-xl hover:text-yellow-500 transition-all duration-300">
            <TbPokeball className="inline-block mr-2" /> Pokémon
          </Link>
          <Link to="/pokemondle" className="text-xl hover:text-yellow-500 transition-all duration-300">
            Pokédle
            <TbPokeball className="inline-block ml-2" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
