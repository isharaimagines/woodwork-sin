import { NavLink } from "react-router-dom";
import "./navbar.css";
import React, { useState } from "react";
import logo from "../assets/img/woodLogo1.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [t, i18next] = useTranslation("global");

  const [isListUnorderedClicked, setListUnorderedClicked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleListUnorderedClick = () => {
    setListUnorderedClicked(!isListUnorderedClicked);
    // Add your logic here to handle the click event and add another class if needed
  };

  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <nav className={scrolled ? "scrolled" : "navbar"}>
      <div className="nav-container">
        <div className="nav-top-bar">
          <NavLink className="navbar-brand">
            <img src={logo} alt="Logo" />
          </NavLink>
          <button
            aria-controls="basic-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            onClick={handleListUnorderedClick}
          >
            <i className="ri-list-unordered"></i>
          </button>
        </div>
        <div
          className={`navbar-collapse ${
            isListUnorderedClicked ? "collosed-down" : ""
          }`}
          id="basic-navbar-nav"
        >
          <div
            className={`navbar-nav ${
              isListUnorderedClicked ? "collosed-down" : ""
            }`}
          >
            <NavLink
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              {t("navbar.Home")}
            </NavLink>
            <NavLink
              to="/service"
              className={
                activeLink === "profile" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("profile")}
            >
              {t("navbar.Services")}
            </NavLink>
            <NavLink
              to="/about"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {t("navbar.About")}
            </NavLink>
          </div>
          <span className="navbar-text">
            <NavLink
              to="/contactus"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              <button className="vvd">
                <span>{t("navbar.Contact")}</span>
              </button>
            </NavLink>
          </span>
          <span className="navbar-text box">
            <NavLink
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              <select
                className="vvd"
                onChange={(e) => handleChangeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="sin">සිංහල</option>
              </select>
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
};
