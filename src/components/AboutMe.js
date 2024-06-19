import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const AboutMe = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ padding: "2em", color: "#83c167" }}
  >
    <h1>About Me</h1>
    <p>
      Hi! I'm Kofi, a passionate developer and a committed Christian. I enjoy
      creating vibrant and engaging web experiences. Here, you'll find a
      showcase of my projects and some of my sermons.
    </p>
  </motion.div>
);

export default AboutMe;
