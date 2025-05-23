import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-pink-600 mb-6">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-700 mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been removed or you typed the wrong URL.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
