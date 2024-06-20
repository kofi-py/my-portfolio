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

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-primary text-primary mb-4"
        variants={textVariants}
      >
        Welcome to Kofi's Portfolio
      </motion.h1>
      <motion.p
        className="text-xl font-secondary text-secondary shadow-lg p-4 rounded"
        variants={textVariants}
      >
        Explore my projects and sermons.
      </motion.p>
    </motion.div>
  );
};

export default Home;
