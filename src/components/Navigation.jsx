// components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-red-400 to-red-500 text-white p-4 shadow-md text-white">
      <div className="flex items-center mb-4">
        {/* Logo */}
        <img src="/path/to/your/logo.png" alt="Logo" className="w-10 h-10 mr-2" />

        {/* Heading and Slogan */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            College Projects Portal
          </Link>
          <p className="text-sm">Empowering Ideas, Igniting Innovation</p>
        </div>
      </div>

      <nav className="flex flex-col justify-evenly space-y-4">
        <Link
          to="/"
          className={`text-lg hover:text-gray-400 py-6 px-4 transition duration-300 ${
            isLinkActive('/') ? 'text-gray-700' : ''
          } text-center`}
        >
          Home
        </Link>
        <Link
          to="/admin"
          className={`text-lg hover:text-gray-400 px-4 py-6 transition duration-300 ${
            isLinkActive('/admin') ? 'text-gray-700' : ''
          } text-center`}
        >
          Admin Section
        </Link>
        <Link
          to="/student"
          className={`text-lg hover:text-gray-400 px-4 py-6 transition duration-300 ${
            isLinkActive('/student') ? 'text-gray-700' : ''
          } text-center`}
        >
          Student Section
        </Link>
        <Link
          to="/about"
          className={`text-lg hover:text-gray-400 px-4 py-6 transition duration-300 ${
            isLinkActive('/about') ? 'text-gray-700' : ''
          } text-center`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`text-lg hover:text-gray-400 px-4 py-6 transition duration-300 ${
            isLinkActive('/contact') ? 'text-gray-700' : ''
          } text-center`}
        >
          Contact Us
        </Link>
        <Link
          to="/upload"
          className={`text-lg hover:text-gray-400 px-4 py-6 transition duration-300 ${
            isLinkActive('/upload') ? 'text-gray-700' : ''
          } text-center`}
        >
          Project Upload
        </Link>
        {/* Add other navigation links */}


      </nav>

      <div className="flex-grow"></div>
      <div className="mb-4">
        <p className="text-sm text-gray-300">
          For any doubts or inquiries,{' '}
          <Link to="/contact" className="text-red-500 hover:underline">
            contact us here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Navigation;
