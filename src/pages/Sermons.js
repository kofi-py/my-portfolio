import React from "react";
import SermonCard from "../components/SermonCard";
import "../styles/Sermons.css";

const sermons = [
  { title: "Sermon 1", date: "January 1, 2023", link: "#" },
  { title: "Sermon 2", date: "February 1, 2023", link: "#" },
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
