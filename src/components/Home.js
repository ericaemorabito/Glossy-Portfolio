import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div id="home" className="page">
      <div className="welcome-box">
        <h1 id="name" className="subtitle">Erica Morabito</h1>
        <h2 className="title job">Full Stack Web Developer</h2>

        {/* Action Button Area */}
        <div className="btn-box">
          <a href="#work">
          <button className="action-btn">
            <FontAwesomeIcon icon={faCode} className="welcome-icon" />
          </button>
          </a>
          <a href="#work" id="see-work">
            See my work
          </a>
          <a href="#" id="download-resume">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
