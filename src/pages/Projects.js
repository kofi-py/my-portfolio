import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const projects = [
  { title: "Project 1", description: "Description of project 1", link: "#" },
  { title: "Project 2", description: "Description of project 2", link: "#" },
  // Add more projects here
];

const Projects = () => (
  <div style={{ padding: "2em" }}>
    <h1>My Projects</h1>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default Projects;
