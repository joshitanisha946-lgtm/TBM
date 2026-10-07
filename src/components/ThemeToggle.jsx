import "./ThemeToggle.css";

function ThemeToggle({ isNight, onToggle }) {
  return (
    <button
      type="button"
      className={`theme-toggle ${isNight ? "is-night" : ""}`}
      onClick={onToggle}
      aria-label={
        isNight
          ? "Switch to day mode"
          : "Switch to night mode"
      }
      aria-pressed={isNight}
    >
      <span className="theme-toggle-track">

        <span className="theme-toggle-stars">
          <i />
          <i />
          <i />
        </span>

        <span className="theme-toggle-circle">
          {isNight ? "☾" : "☼"}
        </span>

        <span className="theme-toggle-text">
          {isNight ? "DAY" : "NIGHT"}
        </span>

      </span>
    </button>
  );
}

export default ThemeToggle;