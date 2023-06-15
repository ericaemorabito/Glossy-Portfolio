import React from "react";
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
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Projects
const projectData = [
  {
    id: 1,
    title: "Solo Traveler",
    description:
      "Provides solo travelers a place to connect and plan upcoming trips. Allows users to create a travel profile, save trips, and connect with other solo travelers in chat rooms.",
    github: "https://github.com/ericaemorabito/Solo_Traveler",
    deployed: "https://solo.herokuapp.com",
    image: soloTravel,
    type: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Colletta Restaurant",
    description: "Recreation of Colletta Restaurant's webpage to hone front end development including CSS and React skills.",
    github: "https://github.com/ericaemorabito/Restaurant_Website.git",
    deployed: "https://ericaemorabito.github.io/Restaurant_Website/",
    image: colletta,
    type: "Front End Developer",
  },
  {
    id: 3,
    title: "VMJS Photography",
    description:
      "Portrait photography website showcases work and provides easy booking to connect clients with VMJS Photography.",
    github:
      "https://github.com/ericaemorabito/Victoria_Stewart_Photography.git",
    deployed: "https://ericaemorabito.github.io/Victoria_Stewart_Photography",
    image: vmjs,
    type: "Front End Developer",
  },
  {
    id: 5,
    title: "Tastemakers",
    description: "Website where users can find and save recipes based on their preferences. Integrated YouTube and Spoonacular APIs.",
    github: "https://github.com/ericaemorabito/taste_makers.git",
    deployed: "https://ericaemorabito.github.io/taste_makers/",
    image: tasteMakers,
    type: "Front End Developer",
  },
  // {
  //   id: 6,
  //   title: "Weather Dashboard",
  //   description: "search and save cities to view the weather",
  //   github: "https://github.com/ericaemorabito/Weather_Dashboard",
  //   deployed: "https://ericaemorabito.github.io/Weather_Dashboard/",
  //   image: weather,
  //   type: 'Front End Project'
  // },
  {
    id: 7,
    title: "Code Quiz",
    description: "Quiz created with HTML, CSS, JavaScript to practice local storage and event listener functions.",
    github: "https://github.com/ericaemorabito/Code_Quiz",
    deployed: "https://ericaemorabito.github.io/Code_Quiz/",
    image: codeQuiz,
    type: 'Front End Project'
  },
  // {
  //   id: 8,
  //   title: "E-commerce API",
  //   description: "Express and MySQL back end for an e-commerce site",
  //   github: "https://github.com/ericaemorabito/E-Commerce_Back_End",
  //   deployed: "",
  //   image: code,
  // },
];

const Work = () => {
  return (
    <div id="work">
      {/* <p className="subtitle">Projects</p> */}
      {projectData.map((project) => (
        <div className="project" key={project.title}>
          <div className="project-text-box">
            <div className="project-title-box">
              <p className="blue-text">{project.type}</p>
              <p className="subtitle">{project.title}</p>
            </div>
            <div className="details-box">
              <p className="purple-text">{project.description}</p>
            </div>
            {/* <div className="tech-box">
              <p className="text">JavaScript React Bootstrap</p>
            </div> */}
            <div className="icons-box">
              <a href={project.deployed} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="blue-icon" />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCode} className="blue-icon" />
              </a>
            </div>
          </div>
          <div className="image-box">
          <a href={project.deployed} target="_blank" rel="noreferrer">
            <img
              className="project-image"
              alt={`screenshot of ${project.title}`}
              src={project.image}
            ></img></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
