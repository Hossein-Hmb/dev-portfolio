import React from "react";
import "../styling/Projects.css";
import image from "../styling/image.png";

const cardinfo = [
  {
    title: "Web Development",
    description:
      "My web development projects showcase my skills in building responsive and user-friendly websites.",
    image: image,
    url: "https://www.google.com/",
  },
  {
    title: "Youtube Channel",
    description:
      "My YouTube channel features educational videos on various topics, including programming, AI, and personal development.",
    image: image,
    url: "https://www.google.com/",
  },
  {
    title: "AI & Quantum Physics",
    description:
      "I'm passionate about exploring the fascinating worlds of AI and Physics, constantly learning and expanding my knowledge in these fields.",
    image: image,
    url: "https://www.google.com/",
  },
  {
    title: "Skillset",
    description:
      "My skillset includes proficiency in various programming languages, frameworks, and tools, as well as a strong understanding of computer science fundamentals.",
    image: image,
    url: "https://www.google.com/",
  },
];

function Projects() {
  return (
    <div className="card">
      {cardinfo.map((card) => (
        <div className="card-item">
          <img src={card.image} alt={card.title} />
          <span>{card.title}</span>
          <p>{card.description}</p>
          <a href={card.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
