import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = ({ hideResume }) => {
  return (
    <div className="flex space-x-4 text-blue-700 text-lg">
      <Link
        to={'about'}
        smooth={true}
        duration={1000}
        className="hover:text-red-500 transition duration-300 cursor-pointer"
      >
        About
      </Link>
      <Link
        to={'myWork'}
        smooth={true}
        duration={1000}
        className="hover:text-red-500 transition duration-300 cursor-pointer"
      >
        My Work
      </Link>
      <Link
        to="myProjects"
        smooth={true}
        duration={1000}
        className="hover:text-red-500 transition duration-300 cursor-pointer"
      >
        My Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={1000}
        className="hover:text-red-500 transition duration-300 cursor-pointer"
      >
        Contact
      </Link>
      <button
        onClick={() => hideResume(false)}
        className="hover:text-red-500 transition duration-300 cursor-pointer"
      >
        Resume
      </button>
    </div>
  );
};

export default NavLinks;
