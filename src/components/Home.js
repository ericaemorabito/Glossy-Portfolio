import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div id="home" className="page">

      {/* Welcome Text */}
      <div className="welcome-box">
        <h1 className="subtitle">Erica Morabito</h1>
        <h2 className="title job">Full Stack Web Developer</h2>
      </div>

      {/* Action Button Area */}
      <div className="welcome-box btns-box">
        <button className="action-btn"><FontAwesomeIcon icon={faCode} className="blue-icon"/></button>
        <p className="blue-text action-item">See my work</p>
        <div></div>
        <p className="blue-text">Download Resume</p>
      </div>
    </div>
  );
};

export default Home;
