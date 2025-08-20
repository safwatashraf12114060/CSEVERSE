import React from "react";
import "./HomePage.css";
import ButtonClick from "../Buttons/ButtonClick";

function HomePage({ onLoginClick }) {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">CSEVerse</div>
        <div className="nav-links">
          <ButtonClick>Home</ButtonClick>
          <ButtonClick>About Us</ButtonClick>
          <ButtonClick>Contacts</ButtonClick>
          <ButtonClick type="login" onClick={onLoginClick}>
            Login
          </ButtonClick>
        </div>
      </nav>

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
