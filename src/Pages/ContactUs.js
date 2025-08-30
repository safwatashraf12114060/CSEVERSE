// src/components/ContactUs.js
import React from "react";
import "./ContactUs.css";
import NavigationBar from "../Components/NavigationBar";

function ContactUs({ theme, toggleTheme }) {
  return (
    <div className="contact-container">
      {/* Navigation Bar */}
      <NavigationBar theme={theme} toggleTheme={toggleTheme} />

      {/* Contact Content */}
      <main className="contact-content">
        <h2>Contact Us</h2>

        <div className="info-box">
          <h3>Address</h3>
          <p>141 & 142, Love Road, Tejgaon Industrial Area, Dhaka-1208, Bangladesh</p>
        </div>

        <div className="info-box">
          <h3>Telephone</h3>
          <p>01846810403</p>
          <p>01521777751</p>
        </div>

        <div className="info-box">
          <h3>Fax Number</h3>
          <p>880-2-8870418</p>
        </div>

        <div className="info-box">
          <h3>Email</h3>
          <p>
            <a href="mailto:CSEVerse@gmail.com">CSEVerse@gmail.com</a>
          </p>
        </div>

        {/* Back to Home Button */}
        <button className="back-btn" onClick={() => window.location.href = "/"}>
          Back to Home
        </button>
      </main>
    </div>
  );
}

export default ContactUs;
