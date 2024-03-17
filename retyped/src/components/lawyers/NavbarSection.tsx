import React from "react";
import { Link } from "react-router-dom";

/**
 * Navigation Header Component
 */
const NavbarSection: React.FC = () => {
  return (
    <div className="container">
      <div className="navbar">
        <nav
          className="flex flex-row justify-between align-middle my-2"
          role="navigation"
        >
          <div className="text-lg font-bold my-auto">Logo</div>
          <div className="flex flex-row align-middle my-auto justify-evenly gap-3">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <Link to="/login" className="alternative-btn">
            Log In
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavbarSection;
