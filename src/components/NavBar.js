import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/NavBar.css";
import {
  faHome,
  faUser,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
  <nav className="bg-primary text-white p-4 flex justify-around">
    <NavLink
      to="/"
      exact
      className="hover:bg-white hover:text-primary p-2 rounded transition duration-300"
    >
      <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
    </NavLink>
    <NavLink
      to="/about"
      className="hover:bg-white hover:text-primary p-2 rounded transition duration-300"
    >
      <FontAwesomeIcon icon={faUser} className="mr-2" /> About Me
    </NavLink>
    <NavLink
      to="/projects"
      className="hover:bg-white hover:text-primary p-2 rounded transition duration-300"
    >
      <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> Projects
    </NavLink>
  </nav>
);

export default NavBar;
