import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    title: "Bible Essentials - My Very Own Podcast!",
    description:
      "This podcast is meant to help you understand the Bible in a much simpler way. It discusses critical themes in the Bible that all lead up to Jesus Christ, the center of the whole Bible. In season 1, we explore certain themes in the Bible, and in season 2, we explore the many things Jesus did and said. Look out for Season 3, where we will explore Old Testamant Stories!",
    image:
      "https://img.freepik.com/free-photo/holy-bible-with-rays-light-coming-out-ai-generative_123827-23906.jpg",
    link: "https://pastorkofi101.podbean.com",
  },
  {
    title: "He Is With You - A Parody of 'He Lives in You' by Lebo M.",
    description: "This song is one of the many parodies I have made.",
    image:
      "https://media.swncdn.com/cms/CROSSCARDS/24538-isaiah-43-2-1366-x-768.jpg",
    link: "https://youtu.be/GsuOXxyuGX4?si=x3MAQJ5zhqk8AwMC",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
