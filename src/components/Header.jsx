import React from 'react';
import { Link } from 'react-router-dom';
import frontimage from '../assets/front.jpeg';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo and Text */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src={frontimage}
            alt="Kozzy Wellness Logo"
            className="h-20"
          />
          <span className="text-xl font-semibold">Kozzy Wellness</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Join the Waitlist and Sign In Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/signin"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Sign In
          </Link>
          <Link
            to="/waitlist"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
