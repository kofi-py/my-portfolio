import React from "react";
import { motion } from "framer-motion";

const SermonCard = ({ title, date, link }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    style={{
      backgroundColor: "#ffff00",
      padding: "1em",
      margin: "1em",
      borderRadius: "8px",
    }}
  >
    <h2>{title}</h2>
    <p>{date}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Listen
    </a>
  </motion.div>
);

export default SermonCard;
