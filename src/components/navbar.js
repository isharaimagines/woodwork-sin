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
          <NavLink to="/woodwork-sin/home" className="expandHome">
            HOME
          </NavLink>
          <NavLink to="/woodwork-sin/service" className="expandHome">
            SERVICES
          </NavLink>
          <NavLink to="/woodwork-sin/about" className="expandHome">
            ABOUT
          </NavLink>
          <NavLink to="/woodwork-sin/contactus" className="expandHome">
            CONTACT US
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
