import "../styles/header.css";
import logo from '../assets/E.png'

const Header = () => {
  return (
    <header>
      {/* Branding */}
      <div className="brand">
        <a href="#home" id="brand-logo">
          E
        </a>
      </div>

    {/* Nav Items */}
      <ul className="nav">
        <li className="nav-link">
          <a id="about-nav-link" className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-link">
          <a id="work-nav-link" className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-link">
          <a id="contact-nav-link" className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
