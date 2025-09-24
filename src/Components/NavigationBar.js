import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar({ theme, toggleTheme, user, setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log("NavigationBar - Received user:", user); // 🔍 Debug line
  console.log("NavigationBar - User exists?", !!user); // 🔍 Debug line

  const handleLogout = () => {
    setUser(null);     // user state clear
    // Remove all user-related data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/");     // home redirect
  };

  return (
    <nav className="navbar">
      <div className="logo">CSEVerse</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-btn">Home</Link></li>
        <li><Link to="/about" className="nav-btn">About Us</Link></li>
        <li><Link to="/contact" className="nav-btn">Contact Us</Link></li>

        {/* Theme button always same place */}
        <li>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>

        {/* Conditional rendering */}
        {user ? (
          <li className="profile-section">
            <Link to="/profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="profile"
                className="profile-icon"
              />
            </Link>
            <button onClick={handleLogout} className="nav-btn logout-btn">
              Logout
            </button>
          </li>
        ) : location.pathname === "/login" ? (
          <li><Link to="/signup" className="nav-btn login-btn">Signup</Link></li>
        ) : (
          <li><Link to="/login" className="nav-btn login-btn">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;