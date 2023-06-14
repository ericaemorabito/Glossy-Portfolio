import "../styles/header.css";
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      {/* Branding */}
      <div className="brand">
        <a href="#home">
          <img src={logo} className="logo"></img>
        </a>
      </div>

    {/* Nav Items */}
      <ul className="nav">
        <li className="nav-link">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-link">
          <a className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-link">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
