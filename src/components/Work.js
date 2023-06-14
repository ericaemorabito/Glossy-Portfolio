import React from "react";
import { Row, Col } from "react-bootstrap";
import github from "../assets/github-icon.svg";
import "../styles/work.css";

// Images
import soloTravel from "../assets/soloTravel.png";
import tasteMakers from "../assets/tastemakers.png";
import weather from "../assets/weather.png";
import codeQuiz from "../assets/codeQuiz.png";
import code from "../assets/code.jpeg";
import colletta from "../assets/colletta.png";
import vmjs from "../assets/vmjs.png";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

// Projects
const projectData = [
  {
    id: 1,
    title: "Solo Traveler",
    description: "signup, save trips, and chat to other travelers",
    github: "https://github.com/ericaemorabito/Solo_Traveler",
    deployed: "https://solo.herokuapp.com",
    image: soloTravel,
  },
  {
    id: 2,
    title: "Colletta Restaurant",
    description: "recreation of a restaurant's website",
    github: "https://github.com/ericaemorabito/Restaurant_Website.git",
    deployed: "https://ericaemorabito.github.io/Restaurant_Website/",
    image: colletta,
  },
  {
    id: 3,
    title: "VMJS Photography",
    description:
      "showcase Victoria Stewart's photography and connect with future clients",
    github:
      "https://github.com/ericaemorabito/Victoria_Stewart_Photography.git",
    deployed: "https://ericaemorabito.github.io/Victoria_Stewart_Photography",
    image: vmjs,
  },
  {
    id: 5,
    title: "Tastemakers",
    description: "find and save recipes based on your preferences",
    github: "https://github.com/ericaemorabito/taste_makers.git",
    deployed: "https://ericaemorabito.github.io/taste_makers/",
    image: tasteMakers,
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "search and save cities to view the weather",
    github: "https://github.com/ericaemorabito/Weather_Dashboard",
    deployed: "https://ericaemorabito.github.io/Weather_Dashboard/",
    image: weather,
  },
  {
    id: 7,
    title: "Code Quiz",
    description: "quiz your HTML and CSS skills",
    github: "https://github.com/ericaemorabito/Code_Quiz",
    deployed: "https://ericaemorabito.github.io/Code_Quiz/",
    image: codeQuiz,
  },
  {
    id: 8,
    title: "E-commerce API",
    description: "Express and MySQL back end for an e-commerce site",
    github: "https://github.com/ericaemorabito/E-Commerce_Back_End",
    deployed: "",
    image: code,
  },
];

const Work = () => {
  return (
    <div id="work">
      {projectData.map((project) => (
        <div className="project" key={project.title}>
          <div className="project-text-box">
            <div className="project-title-box">
              <p className="blue-text">Full Stack Project</p>
              <p className="subtitle">{project.title}</p>
            </div>
            <div className="details-box">
              <p className="purple-text">{project.description}</p>
            </div>
            <div className="tech-box">
              <p className="text">JavaScript React Bootstrap</p>
            </div>
            <div className="icons-box">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCode} className="blue-icon" />
              </a>
              <a href={project.deployed} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCode} className="blue-icon" />
              </a>
            </div>
          </div>
          <div className="image-box">
            <img src={project.image}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
