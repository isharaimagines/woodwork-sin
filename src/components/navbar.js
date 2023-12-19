import { NavLink } from "react-router-dom";
import "./navbar.css";
import React, { useState } from "react";
import logo from "../assets/img/woodLogo1.svg";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="navbar">
      <div className="trapezoid">
        <div className="logo-back">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div onClick={handleClick} className="menubar">
          <i className={`ri-menu-line ${isVisible ? "" : "hidden"}`}></i>
          <i className={`ri-close-fill ${isVisible ? "" : "hidden"}`}></i>
        </div>
        <div className={`list ${isVisible ? "" : "visible"}`}>
          <NavLink to="/" className="expandHome">
            මුල් පිටුව
          </NavLink>
          <NavLink to="/service" className="expandHome">
            සේවාවන්
          </NavLink>
          <NavLink to="/about" className="expandHome">
            අපි ගැන
          </NavLink>
          <NavLink to="/contactus" className="expandHome">
            අපිව අමතන්න
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
