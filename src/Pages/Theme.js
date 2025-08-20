import React from "react";
import "./Theme.css";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
