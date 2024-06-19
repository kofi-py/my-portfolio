import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Sermons from "./pages/Sermons";
import AboutMe from "./components/AboutMe";

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sermons" element={<Sermons />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </Router>
);

export default App;
