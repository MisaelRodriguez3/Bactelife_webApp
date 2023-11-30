import React from "react";
import { Link } from "react-router-dom";
import "./NavStyles.css"; 

export function Nav() {
  

  return (
    <div>
      <nav>
         <Link to='/'><div className="logo-container">
          <img src="/src/image/logo-white.png" alt="Logo" className="logo" />
          </div>
         </Link> 
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/calculate">Calculate Tool</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
