import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./pages/Projects";
import Sermons from "./pages/Sermons";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sermons" element={<Sermons />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
