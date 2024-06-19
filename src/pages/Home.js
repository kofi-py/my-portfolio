import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ textAlign: "center", padding: "2em", color: "#fc6255" }}
  >
    <h1>Welcome to Kofi's Portfolio</h1>
    <p>Explore my projects and sermons.</p>
  </motion.div>
);

export default Home;
