import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
const NavBar = () => (
  <nav style={{ backgroundColor: "#fc6255", padding: "1em" }}>
    <Link to="/" style={{ margin: "0 1em", color: "#fff" }}>
      Home
    </Link>
    <Link to="/projects" style={{ margin: "0 1em", color: "#fff" }}>
      Projects
    </Link>
    <Link to="/sermons" style={{ margin: "0 1em", color: "#fff" }}>
      Sermons
    </Link>
    <Link to="/about" style={{ margin: "0 1em", color: "#fff" }}>
      About Me
    </Link>
  </nav>
);

export default NavBar;
