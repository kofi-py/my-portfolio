import React from "react";
import SermonCard from "../components/SermonCard";
import "../styles/Sermons.css";

const sermons = [
  {
    title: "The Lord, My Strength",
    date: "March 28, 2021",
    audioSrc: "../sermon-audio/the-lord-my-strength.mp3",
  },
  {
    title: "Faith Without Your Agenda",
    date: "February ‎14, ‎2024",
    audioSrc: "",
  },
  { title: "Your Faith Has Made You Whole", date: "May 15, 2024", link: "#" },
  {
    title: "Why Wait? The Spiritual Significance and Benefits of Patience",
    date: "June ‎15, ‎2024",
    audioSrc: "#",
  },
  // Add more sermons here
];

const Sermons = () => (
  <div style={{ padding: "2em" }}>
    <h1>My Sermons</h1>
    {sermons.map((sermon, index) => (
      <SermonCard key={index} {...sermon} />
    ))}
  </div>
);

export default Sermons;
