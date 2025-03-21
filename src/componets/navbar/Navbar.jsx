import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav justify-between p-6 h-[106px]">
      <div>
        <Link
          className="text-white text-4xl font-bold no-underline hover:text-white font-['Font Awesome 6 Free']"
          to="/home"
        >
          START FRAMEWORK
        </Link>
      </div>
      <div className="flex text-base font-bold">
        <li className="nav-item">
          <Link className="nav-link text-white hover:text-white" to="/about">
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white hover:text-white"
            to="/portfolio"
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white hover:text-white"
            to="/contact"
          >
            CONTACT
          </Link>
        </li>
      </div>
    </nav>
  );
}

