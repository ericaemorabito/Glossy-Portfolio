import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div id="about">
      <div className="about-text-area">
        <p className="title">About</p>
        <p className="text" id="about-text">
          Experienced <span className="blue-text">full stack web developer</span> creating impactful web
          applications. Collaborative and results driven working in teams of
          engineers to create <span className="blue-text">MERN</span>MERN stack applications. Let's connect and discuss
          how I can contribute to your organization's web development needs.
        </p>
      </div>

      <div className="tech-stack-area">
        {/* <p className="subtitle">Skills</p> */}
        <FontAwesomeIcon icon={faCode} className="blue-icon" />
        <FontAwesomeIcon icon={faCode} className="blue-icon" />
        <FontAwesomeIcon icon={faCode} className="blue-icon" />
        <FontAwesomeIcon icon={faCode} className="blue-icon" />
        <FontAwesomeIcon icon={faCode} className="blue-icon" />
        <FontAwesomeIcon icon={faCode} className="blue-icon" />
      </div>
    </div>
  );
};

export default About;
