import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-links-area" className="col">
        <a
          href="https://github.com/ericaemorabito"
          target="_blank"
          className="text-dark"
        >
          <li className="text">Github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/erica-morabito/"
          target="_blank"
          className="text-dark"
        >
          <li className="text">LinkedIn</li>
        </a>
        <a href="#" target="_blank" className="text-dark">
          <li className="text">Resume</li>
        </a>
        <a
          href="mailto:ericaemorabito@gmail.com"
          target="_blank"
          className="text-dark"
        >
          <li className="text">Email</li>
        </a>
      </div>
    </div>
  );
};

export default Footer;
