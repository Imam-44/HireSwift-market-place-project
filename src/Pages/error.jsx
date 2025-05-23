import React from 'react';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="relative bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-pink-100 rounded-full p-4 shadow-lg">
          <MdErrorOutline className="text-pink-600 text-5xl" />
        </div>

        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 mt-8">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Page not found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn’t exist. It might have been moved or deleted.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          ⬅️ Back to Home
        </Link>

        <div className="absolute -z-10 blur-3xl opacity-20 w-64 h-64 bg-pink-400 rounded-full top-10 left-10"></div>
        <div className="absolute -z-10 blur-3xl opacity-20 w-64 h-64 bg-pink-300 rounded-full bottom-10 right-10"></div>
      </div>
    </div>
  );
};

export default Error;
