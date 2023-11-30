import React from "react";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { MdCalculate } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import "./NavStyles.css";

export function Nav() {
  const currentPath = location.pathname;

  return (
    <nav>
      <Link to='/'><div className="logo-container">
        <img src="/src/image/logo-white.png" alt="Logo" className="logo" />
      </div>
      </Link>
      <ul>
        <Link to='/'>
          <li className={`${currentPath === '/' ? 'active' : ''}`}>
            <FaHome className="icon" />
            Home
          </li>
        </Link>
        <Link to="/contact">
          <li className={`${currentPath === '/contact' ? 'active' : ''}`}>
            <IoIosContact className="icon" />
            Contact
          </li>
        </Link>

        <Link to="/calculate">
          <li className={`${currentPath === '/calculate' ? 'active' : ''}`}>
            <MdCalculate className="icon" />
            Estimation Tool
          </li>
        </Link>
      </ul>
    </nav >
  );
}
