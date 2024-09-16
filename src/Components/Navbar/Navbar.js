import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar margin-lr">
        <div className="logo">
          <Link to="/" className="links">
            <h2 className="insignia">Text Utils</h2>
          </Link>
        </div>
        <div className="nav">
          <ul>
            <li className="nav-links">
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/About" className="links">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
