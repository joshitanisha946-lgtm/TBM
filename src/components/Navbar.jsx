import "./Navbar.css";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

function Navbar({ isNight, onToggleTheme }) {
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
        <ThemeToggle
          isNight={isNight}
          onToggle={onToggleTheme}
        />

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