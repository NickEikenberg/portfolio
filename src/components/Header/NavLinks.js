import React from 'react';

const NavLinks = () => {
  return (
    <div className="flex space-x-4 text-blue-700 text-lg">
      <a href="/" className="hover:text-red-500 transition duration-300">
        About
      </a>
      <a href="/" className="hover:text-red-500 transition duration-300">
        My Work
      </a>
      <a href="/" className="hover:text-red-500 transition duration-300">
        My Projects
      </a>
      <a href="/" className="hover:text-red-500 transition duration-300">
        Contact
      </a>
      <a href="/" className="hover:text-red-500 transition duration-300">
        Resume
      </a>
    </div>
  );
};

export default NavLinks;
