import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { MdCalculate } from "react-icons/md"
import { FaHome } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import "./NavStyles.css";

export function Nav() {
  const Path = location.pathname;
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <nav>
      <Link to='/'><div className="logo-container">
        <img src="/src/image/logo-white.png" alt="Logo" className="logo" />
      </div>
      </Link>
      <div className={`link-container ${menuVisible ? 'show' : ''}`}>
        <ul className="ul-link">
          <Link to='/'>
            <li className={`links ${Path === '/' ? 'active' : ''}`}>
              <FaHome className="icon" />
              Home
            </li>
          </Link>
          <Link to="/contact">
            <li className={`links ${Path === '/contact' ? 'active' : ''}`}>
              <IoIosContact className="icon" />
              Contact
            </li>
          </Link>

          <Link to="/calculate">
            <li className={`links ${Path === '/calculate' ? 'active' : ''}`}>
              <MdCalculate className="icon" />
              Estimation Tool
            </li>
          </Link>
        </ul>
      </div>
      {menuVisible ? <IoClose className="menu-icon" onClick={toggleMenu} /> : <IoMenu className="menu-icon" onClick={toggleMenu} />}
    </nav >
  );
}
