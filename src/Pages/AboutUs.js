import React from "react";
import NavigationBar from "../Components/NavigationBar";
import "./AboutUs.css";
import teamImage from "../assets/team.jpg"; // ধরলাম ছবির জন্য placeholder

export default function AboutUs({ theme, toggleTheme }) {
  return (
    <div className={`about-us ${theme}`}>
      {/* NavigationBar with theme */}
      <NavigationBar theme={theme} toggleTheme={toggleTheme} />

      {/* About Header */}
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to CSEVERSE! We are a passionate team committed to building
          innovative web solutions.
        </p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide top-quality software solutions and
            learning platforms for students and developers around the world.
          </p>

          <h2>Our Vision</h2>
          <p>
            We aim to become a leading platform for technology education and
            community-driven projects.
          </p>
        </div>

        <div className="about-image">
          <img src={teamImage} alt="Our Team" />
        </div>
      </div>

      {/* About Footer */}
      <div className="about-footer">
        <h3>Meet the Team</h3>
        <p>
          Our team consists of skilled developers, designers, and content
          creators who strive for excellence.
        </p>
      </div>
    </div>
  );
}
