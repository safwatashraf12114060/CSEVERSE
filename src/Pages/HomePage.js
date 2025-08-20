import React, { useState, useEffect } from "react";
import "./HomePage.css";

const slides = [
  { id: 1, text: "📘 Welcome to CSEVerse - A hub for CSE resources" },
  { id: 2, text: "💡 Learn Data Structures & Algorithms easily" },
  { id: 3, text: "📂 Access Notes, PDFs & Question Banks" },
  { id: 4, text: "🚀 Prepare for your career with guidance" }
];

function HomePage({ onHomeClick, onAboutClick, onContactClick, onLoginClick, theme, toggleTheme }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo" onClick={onHomeClick} style={{cursor:"pointer"}}>CSEVerse</div>
        <div className="nav-links">
          <button className="nav-btn" onClick={onHomeClick}>Home</button>
          <button className="nav-btn" onClick={onAboutClick}>About</button>
          <button className="nav-btn" onClick={onContactClick}>Contacts</button>
          <div className="theme-box" onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}</div>
          <button className="login-btn" onClick={onLoginClick}>Login</button>
        </div>
      </nav>

      <div className="slideshow">
        <h2>{slides[current].text}</h2>
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </div>

      <div className="homepage-header">
        <h1>Welcome to CSEVerse</h1>
        <p>Explore comprehensive Computer Science resources including notes, PDFs, and question banks to support your academic journey.</p>
      </div>
    </div>
  );
}

export default HomePage;
