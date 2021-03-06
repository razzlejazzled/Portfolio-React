import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./componentStyles/NavTabs.css"

function NavTabs() {
  const location = useLocation();

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
    <ul className="navbar-nav mr-auto">
      <li className="btn-dark nav-item">
        <h4>R.J. Gassner</h4>
      </li>
      <li className="nav-item btn-dark">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      
      <li className="nav-item btn-dark">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item btn-dark">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>
    </div>
  );
}

export default NavTabs;
