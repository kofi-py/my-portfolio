import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="home-header" variants={textVariants}>
        Welcome to Kofi's Portfolio
      </motion.h1>
      <motion.p className="home-subheader" variants={textVariants}>
        Explore my projects.
      </motion.p>
      <motion.div className="home-intro" variants={textVariants}>
        <p>
          Hi, I'm Kofi, a passionate software developer. I specialize in
          building vibrant and dynamic web applications. Have a look around and
          check out my work!
        </p>
      </motion.div>
      <motion.div className="home-highlights" variants={textVariants}>
        <h2>Highlights</h2>
        <ul>
          <li>Expert in JavaScript, React, and Next.js</li>
          <li>Proficient in Python and Django</li>
          <li>Experience with Tailwind CSS and Framer Motion</li>
          <li>Love for creating engaging user experiences</li>
        </ul>
      </motion.div>
      <motion.button className="cta-button" variants={buttonVariants}>
        Contact Me
      </motion.button>
    </motion.div>
  );
};

export default Home;
