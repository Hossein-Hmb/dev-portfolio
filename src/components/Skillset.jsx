import React from "react";
import "../styling/Skillset.css";
import { FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiPostgresql,
  SiPytorch,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";
import { MdLaptop, MdHeadphones, MdSmartphone } from "react-icons/md";
import { GiScooter } from "react-icons/gi";

const skills = [
  { icon: FaReact, name: "React" },
  { icon: FaPython, name: "Python" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiJupyter, name: "Jupyter Notebooks" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: FaGitAlt, name: "Git" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

const tools = [
  { icon: MdLaptop, name: "M2 Macbook Air" },
  { icon: MdHeadphones, name: "Sony WH-1000XM4" },
  { icon: MdSmartphone, name: "Samsung S22" },
  { icon: GiScooter, name: "Apollo City (E-Scooter)" },
];

function Skillset() {
  return (
    <div className="skillset">
      <div className="tools">
        <span>My Gear</span>
        {tools.map((tool) => (
          <div className="tool" key={tool.name}>
            <tool.icon className="tool-icon" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
      <div className="skills">
        <span>My Tools</span>
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <skill.icon className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillset;
