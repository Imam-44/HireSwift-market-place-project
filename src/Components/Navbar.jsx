import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
    <div className="shadow-sm bg-pink-100">
      <div className='navbar max-w-11/12 mx-auto'>
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/add-task" className={navLinkClass}>Add Task</NavLink></li>
              <li><NavLink to="/browsetask" className={navLinkClass}>Browse Tasks</NavLink></li>
              <li><NavLink to="/mypostedtasks" className={navLinkClass}>My Posted Task</NavLink></li>
            </ul>
          </div>
          <NavLink to="/" className="text-3xl text-pink-500 md:text-5xl font-bold">HireSwift</NavLink>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-5 menu-horizontal px-1">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/add-task" className={navLinkClass}>Add Task</NavLink></li>
            <li><NavLink to="/browsetask" className={navLinkClass}>Browse Tasks</NavLink></li>
            <li><NavLink to="/mypostedtasks" className={navLinkClass}>My Posted Task</NavLink></li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <div className='mr-5'>
            {user && (
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2
                  bg-amber-400 text-black text-md whitespace-nowrap rounded px-2 py-2 text-sm font-semibold
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {user.displayName}
                </div>
              </div>
            )}
          </div>

          {user ? (
            <button onClick={handleLogOut} className='btn btn-secondary font-semibold text-lg'>
              Log Out
            </button>
          ) : (
            <>
              <NavLink to='/login'>
                <button className='btn btn-secondary hover:bg-pink-700 font-semibold text-lg mr-5'>Log In</button>
              </NavLink>
              <NavLink to='/signup'>
                <button className='btn bg-pink-200 hover:bg-pink-400 font-semibold text-lg'>Sign Up</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
