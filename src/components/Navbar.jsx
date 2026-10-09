import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="navbar-logo">
        <img
          src={logo}
          alt="The Bathroom Masters"
        />
      </a>

      <div className="navbar-links">
        <a href="#work">Work</a>
        <a href="#packages">Packages</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="navbar-actions">
        <a
          href="#contact"
          className="navbar-button"
        >
          <span>Start Your Project</span>
          <strong>↗</strong>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;