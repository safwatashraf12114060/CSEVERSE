// src/components/ContactUs.js
import React, { useState } from "react";
import "./ContactUs.css";
import NavigationBar from "../Components/NavigationBar";

function ContactUs({ theme, toggleTheme, user, setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-us">
      {/* Navigation Bar */}
      <NavigationBar 
        theme={theme}
        toggleTheme={toggleTheme}
        user={user}
        setUser={setUser}
      />

      {/* Contact Header */}
      <header className="contact-header">
        <h1>
          <span className="gradient-text">Contact Us</span>
        </h1>
        <p>
          Get in touch with us for any inquiries, support, or collaboration opportunities. 
          We're here to help and would love to hear from you.
        </p>
      </header>

      {/* Contact Content */}
      <div className="contact-content">
        
        {/* Contact Info Grid */}
        <div className="contact-info-grid">
          <div className="info-card">
            <div className="info-icon-wrapper">
              <div className="info-icon">📍</div>
            </div>
            <h3>Our Address</h3>
            <p>141 & 142, Love Road</p>
            <p>Tejgaon Industrial Area</p>
            <p>Dhaka-1208, Bangladesh</p>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <div className="info-icon">📞</div>
            </div>
            <h3>Phone Numbers</h3>
            <p><a href="tel:+8801846810403">01846810403</a></p>
            <p><a href="tel:+8801521777751">01521777751</a></p>
            <p><strong>Fax:</strong> 880-2-8870418</p>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <div className="info-icon">✉️</div>
            </div>
            <h3>Email Address</h3>
            <p>
              <a href="mailto:CSEVerse@gmail.com">CSEVerse@gmail.com</a>
            </p>
            <p>We'll respond within 24 hours</p>
          </div>
        </div>

        {/* Only show these sections if user is logged in */}
        {user && (
          <>
            {/* Contact Form */}
            <div className="contact-form-section">
              <h3>Send us a Message</h3>
              
              {showSuccess && (
                <div className="success-message show">
                  <strong>Message sent successfully!</strong> We'll get back to you soon.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="map-section">
              <h3>Find Us Here</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0966834448995!2d90.39184431536254!3d23.750893094648825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89b8c5b1c15%3A0x8b5a5f8b5d5d5d5d!2sTejgaon%20Industrial%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CSEVerse Location"
                ></iframe>
              </div>
            </div>
          </>
        )}

        {/* Contact Stats */}
        <div className="contact-stats">
          <div className="stat-card">
            <div className="stat-number">24</div>
            <div className="stat-label">Hours Response</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="emergency-contact">
          <h4>
            <span className="emergency-icon">🚨</span>
            Emergency Contact
          </h4>
          <p>For urgent matters outside office hours:</p>
          <p>
            <a href="tel:+8801846810403">Emergency Hotline: 01846810403</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="#" className="social-link facebook" title="Facebook">
            <span>f</span>
          </a>
          <a href="#" className="social-link twitter" title="Twitter">
            <span>𝕏</span>
          </a>
          <a href="#" className="social-link linkedin" title="LinkedIn">
            <span>in</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;