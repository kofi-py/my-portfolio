import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="about-header" variants={sectionVariants}>
        About Me
      </motion.h2>

      <motion.div className="about-section" variants={sectionVariants}>
        <h3 className="about-subheader">Biography</h3>
        <p className="about-content">
          I am Kofi, a passionate software developer with a love for vibrant
          designs and creating impactful projects. My journey in coding started
          a few years ago and I have since developed a deep appreciation for
          building innovative solutions.
        </p>
      </motion.div>

      <motion.div className="about-section" variants={sectionVariants}>
        <h3 className="about-subheader">Skills</h3>
        <ul className="about-content list-disc list-inside">
          <li>JavaScript</li>
          <li>Python, Django, and Flask</li>
          <li>Java, C++, and C#</li>
          <li>Tailwind CSS and Framer Motion</li>
        </ul>
      </motion.div>

      <motion.div className="about-section" variants={sectionVariants}>
        <h3 className="about-subheader">Hobbies & Interests</h3>
        <p className="about-content">
          When I'm not coding, I enjoy playing piano, reading the Bible, and
          spending time outdoors. I also like making custom fonts.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
