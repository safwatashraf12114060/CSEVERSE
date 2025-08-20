import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CSEVerse</div>
        <div className="nav-links">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">About Us</button>
          <button className="nav-btn">Contacts</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Welcome header */}
      <div className="homepage-header">
        <h1>Welcome to CSEVerse</h1>
        <p>
          Explore comprehensive Computer Science resources including notes, PDFs,
          and question banks to support your academic journey.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
