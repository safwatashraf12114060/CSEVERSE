import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar({ theme, toggleTheme, user, setUser }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">CSEVerse</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-btn">Home</Link></li>
        <li><Link to="/about" className="nav-btn">About Us</Link></li>
        <li><Link to="/contact" className="nav-btn">Contact Us</Link></li>

        {/* Login / Signup or Profile */}
        {user ? (
          <>
            <li>
              <Link to="/profile">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                  alt="profile" 
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }} 
                />
              </Link>
            </li>
            <li>
              <button className="nav-btn" onClick={() => setUser(null)}>Logout</button>
            </li>
          </>
        ) : (
          location.pathname === "/login" ? (
            <li><Link to="/signup" className="nav-btn login-btn">Signup</Link></li>
          ) : (
            <li><Link to="/login" className="nav-btn login-btn">Login</Link></li>
          )
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
