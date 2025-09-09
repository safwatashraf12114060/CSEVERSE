import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">CSEVerse</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-btn">Home</Link></li>
        <li><Link to="/about" className="nav-btn">About Us</Link></li>
        <li><Link to="/contact" className="nav-btn">Contact Us</Link></li>

        {/* Login / Signup button */}
        {location.pathname === "/login" ? (
          <li><Link to="/signup" className="nav-btn login-btn">Signup</Link></li>
        ) : (
          <li><Link to="/login" className="nav-btn login-btn">Login</Link></li>
        )}

        {/* Theme button */}
        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
