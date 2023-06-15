import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div id="about">
      <div className="about-text-area">
        <p className="title">About</p>
        <p className="text" id="about-text">
          Experienced{" "}
          <span className="blue-text">full stack web developer</span> with
          expertise in a range of technologies and frameworks. Proficient in
          both <span className="blue-text"> front-end and back-end</span> development, with a focus
          on the<span className="blue-text"> MERN</span> stack. Experience
          developing
          <span className="blue-text"> responsive</span> and
          <span className="blue-text"> user friendly</span> web applications.
          Strong <span className="blue-text"> problem solving </span>skills and
          a <span className="blue-text"> collaborative</span> mindset.
        </p>
      </div>

      <div className="tech-stack-area">
        {/* <p className="subtitle">Skills</p> */}
        <ul id="skills-list">
          <li className="blue-text tech-skill">JavaScript</li>
          <li className="blue-text tech-skill">Node </li>
          <li className="blue-text tech-skill">React</li>
          <li className="blue-text tech-skill">HTML</li>
          <li className="blue-text tech-skill">CSS</li>
          <li className="blue-text tech-skill">Sass</li>
          <li className="blue-text tech-skill">Git</li>
          <li className="blue-text tech-skill">MongoDB</li>
          <li className="blue-text tech-skill">MySQL</li>
          <li className="blue-text tech-skill">GraphQL</li>
          <li className="blue-text tech-skill">Redux</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
