import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <>
      <div className=" shadow-sm  bg-base-100">
        <div className='navbar max-w-11/12 mx-auto'>
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>Home</li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="text-3xl md:text-5xl font-bold">HireSwift</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className='font-semibold text-lg'> <Link>Home</Link></li>
              <li className='font-semibold text-lg'>  <Link>Add Task</Link></li>
              <li className='font-semibold text-lg'> <Link>Browse Tasks</Link></li>
              <li className='font-semibold text-lg'><Link>My Posted Task</Link></li>

            </ul>
          </div>
          <div className="navbar-end">
            <button className='btn btn-secondary font-semibold text-lg'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;