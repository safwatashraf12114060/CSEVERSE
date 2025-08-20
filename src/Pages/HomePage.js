import React, { useState, useEffect } from "react";
import "./HomePage.css";

const slides = [
  { id: 1, text: "📘 Welcome to CSEVerse - A hub for CSE resources" },
  { id: 2, text: "💡 Learn Data Structures & Algorithms easily" },
  { id: 3, text: "📂 Access Notes, PDFs & Question Banks" },
  { id: 4, text: "🚀 Prepare for your career with guidance" }
];

function HomePage({ onHomeClick, onAboutClick, onContactClick, onLoginClick }) {
  const [current, setCurrent] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Auto slideshow every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" onClick={onHomeClick} style={{cursor: "pointer"}}>CSEVerse</div>
        <div className="nav-links">
          <button className="nav-btn" onClick={onHomeClick}>Home</button>
          <button className="nav-btn" onClick={onAboutClick}>About Us</button>
          <button className="nav-btn" onClick={onContactClick}>Contacts</button>
          <div className="theme-box" onClick={toggleTheme}>
            {isDark ? "🌙" : "☀️"}
          </div>
          <button className="login-btn" onClick={onLoginClick}>
            Login
          </button>
        </div>
      </nav>

      {/* Slideshow */}
      <div className="slideshow">
        <div className="slide-content">
          <h2>{slides[current].text}</h2>
        </div>
        <div className="indicators">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="homepage-header">
        <h1>Welcome to CSEVerse</h1>
        <p>
          Explore comprehensive Computer Science resources including notes, PDFs,
          and question banks to support your academic journey.
        </p>
      </div>

      {/* Features Section */}
      <div className="section">
        <h2>Features</h2>
        <p>
          - Learn Data Structures & Algorithms with interactive content
          <br />
          - Access notes, PDFs, and question banks
          <br />
          - Track your learning progress and achievements
        </p>
      </div>

      {/* About Section */}
      <div className="section">
        <h2>About CSEVerse</h2>
        <p>
          CSEVerse is a comprehensive platform designed for Computer Science
          students. Our mission is to provide high-quality resources and
          guidance to help students excel academically and professionally...
          <span className="read-more">Read More</span>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
