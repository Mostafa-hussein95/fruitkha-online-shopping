import React from 'react'
import { Link } from 'react-router';

export default function Notfound() {
  return <>
  
   <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-lg w-full text-center bg-white p-8 rounded-lg shadow-md">
        {/* Error Number */}
        <div className="text-9xl font-bold text-red-500 animate-bounce">
          404
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mt-4 mb-8">
          Oops! The page you're looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold 
          px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Return to Homepage
        </Link>
      </div>

      {/* Optional: Additional decorative elements */}
      <div className="mt-8 text-gray-500">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
    </div>


  
  </>
}
