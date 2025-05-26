import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/authContext';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log out successfully!",
          icon: "success",
          draggable: true
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-pink-500 border-b-4 border-pink-500 pb-1 font-semibold text-lg"
      : "font-semibold text-lg";

  return (
    <div className="shadow-sm">
      <div className="navbar max-w-11/12 mx-auto justify-between items-center px-2">
        {/* Left */}
        <div className="navbar-start flex items-center">
          {/* Dropdown (Hamburger) */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/add-task" className={navLinkClass}>Add Task</NavLink></li>
              <li><NavLink to="/browsetask" className={navLinkClass}>Browse Tasks</NavLink></li>
              <li><NavLink to="/mypostedtasks" className={navLinkClass}>My Posted Task</NavLink></li>
              {/* Theme toggle for mobile only */}
              <li className="lg:hidden">
                <button
                  onClick={toggleTheme}
                  className="btn btn-outline mt-2 flex items-center gap-2 text-pink-500"
                >
                  {theme === 'light' ? <FiMoon /> : <FiSun />}
                  <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-3xl text-pink-500 md:text-5xl font-bold ml-3">
            HireSwift
          </NavLink>
        </div>

        {/* Center - Desktop menu only */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-5 px-1">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/add-task" className={navLinkClass}>Add Task</NavLink></li>
            <li><NavLink to="/browsetask" className={navLinkClass}>Browse Tasks</NavLink></li>
            <li><NavLink to="/mypostedtasks" className={navLinkClass}>My Posted Task</NavLink></li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center space-x-3">
          {/* Profile */}
          {user && (
            <div className="relative group mr-4">
              <img
                className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                src={user.photoURL}
                alt="User Profile"
              />
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2
                bg-amber-400 text-black text-md whitespace-nowrap rounded px-2 py-2 text-sm font-semibold
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              >
                {user.displayName}
              </div>
            </div>
          )}

          {/* Theme Toggle - Desktop only */}
          <button
            onClick={toggleTheme}
            className="btn btn-circle btn-outline p-1 text-xl text-pink-500 hidden lg:inline-flex"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
          </button>

          {/* Login/Logout */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-secondary font-semibold text-lg whitespace-nowrap"
            >
              Log Out
            </button>
          ) : (
            <div className="flex space-x-2">
              <NavLink to="/login">
                <button className="btn btn-secondary font-semibold text-lg whitespace-nowrap px-3 py-1">
                  Log In
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn bg-pink-900/90 text-white hover:bg-pink-500 font-semibold text-lg whitespace-nowrap px-3 py-1">
                  Sign Up
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
