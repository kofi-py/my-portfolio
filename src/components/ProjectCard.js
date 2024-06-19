import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    style={{
      backgroundColor: "#58c4dd",
      padding: "1em",
      margin: "1em",
      borderRadius: "8px",
    }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Learn more
    </a>
  </motion.div>
);

export default ProjectCard;
