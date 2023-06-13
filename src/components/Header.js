import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="brand">
        <a href="#home">
          {/* <img src={logo} className="logo"></img> */}
        </a>
        <a href="#home">
          <p id="brand-title" className="nav-link">
            Erica Morabito
          </p>
        </a>
      </div>

      <ul className="nav">
        <li className="nav-link">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>

        <li className="nav-link">
          <a className="nav-link" href="/create">
            <button id="create-nav-btn" className="button">
              Work
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
