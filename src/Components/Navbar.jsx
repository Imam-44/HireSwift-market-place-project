import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const handleLogOut = () => {
    console.log('log out');
    logOut()
      .then(() => {
        Swal.fire({
          title: "log out successfully!",
          icon: "success",
          draggable: true
        })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              });
          })
      })
  }
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
                <li className='font-semibold text-lg'> <Link>Home</Link></li>
                <li className='font-semibold text-lg'>  <Link to='/add-task'>Add Task</Link></li>
                <li className='font-semibold text-lg'> <Link to='/browsetask'>Browse Tasks</Link></li>
                <li className='font-semibold text-lg'><Link to='/mypostedtasks'>My Posted Task</Link></li>
              </ul>
            </div>
            <Link to='/' className="text-3xl md:text-5xl font-bold">HireSwift</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className='font-semibold text-lg'> <Link>Home</Link></li>
              <li className='font-semibold text-lg'>  <Link to='/add-task'>Add Task</Link></li>
              <li className='font-semibold text-lg'> <Link to='/browsetask'>Browse Tasks</Link></li>
              <li className='font-semibold text-lg'><Link to='/mypostedtasks'>My Posted Task</Link></li>

            </ul>
          </div>
          <div className="navbar-end">
            {user ? <Link to='/signup'>
              <button onClick={handleLogOut} className='btn btn-secondary font-semibold text-lg'>Log Out</button>
            </Link> : <Link to='/signup'>
              <button className='btn btn-secondary font-semibold text-lg'>Log In</button>
            </Link>}

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;