import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <MotionDiv
      className="border rounded-lg overflow-hidden bg-gray-50 shadow-md hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 font-kingKofi">{title}</h3>
        <p className="mb-4">{description}</p>
        <a
          href={link}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
