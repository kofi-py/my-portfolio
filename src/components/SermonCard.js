import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const SermonCard = ({ title, date, description, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(audioSrc);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className="p-5 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 mb-1">{date}</p>
      <p className="text-gray-700 mb-3">{description}</p>
      <button
        onClick={togglePlay}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="mr-2" />
        {isPlaying ? "Pause" : "Play"}
      </button>
    </motion.div>
  );
};

export default SermonCard;
