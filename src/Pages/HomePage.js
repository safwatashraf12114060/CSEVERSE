import slide1 from "../assets/Slide 1.jpg";
import slide2 from "../assets/Slide 2.jpg";
import slide3 from "../assets/Slide 3.jpg";
import slide4 from "../assets/Slide 4.png";
import NavigationBar from "../Components/NavigationBar";
import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  { id: 1, text: "Welcome to CSEVerse!", img: slide1 },
  { id: 2, text: "Explore Notes & Resources", img: slide2 },
  { id: 3, text: "Join Our Community", img: slide3 },
  { id: 4, text: "Start Your Journey", img: slide4 }
];

function HomePage({ theme, toggleTheme, user, setUser }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const [showLoginMsg, setShowLoginMsg] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    if (!user) {
      setShowLoginMsg(true);
      setTimeout(() => {
        setShowLoginMsg(false);
        navigate("/login");
      }, 1200);
    }
  };

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <NavigationBar 
        theme={theme}
        toggleTheme={toggleTheme}
        user={user}
        setUser={setUser}
      />

      {/* Slideshow Section */}
      <div className="slideshow">
        <div className="slide">
          <div className="slide-img-wrapper">
            <img
              src={slides[current].img}
              alt={slides[current].text}
              className="slide-img"
            />
          </div>
        </div>
        <div className="slide-text-box">
          {slides[current].text}
        </div>
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

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-header">
          <h1 className="welcome-title">
            <span className="gradient-text">Welcome to CSEVerse</span>
          </h1>
          <p className="welcome-subtitle">
            The one-stop destination where AUST CSE students connect, learn, and excel together!
          </p>
          <p className="welcome-description">
            Unlock everything you need for your CSE journey - from comprehensive study materials 
            and real-time tech updates to exclusive job opportunities and project resources.
          </p>
        </div>

        {/* Only show features-grid after login */}
        {user && (
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h3>Study Resources</h3>
              <p>Notes, PDFs, Question Banks & Solutions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📰</div>
              <h3>CSE Updates</h3>
              <p>Latest tech news, job openings & department announcements</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Project Hub</h3>
              <p>Ideas, code repositories & collaboration opportunities</p>
            </div>
          </div>
        )}

        <div className="welcome-footer">
          <p className="join-text">
            <strong>Join thousands of AUST CSE students accelerating their success!</strong> 🌟
          </p>
          <p className="journey-text">
            <em>Your tech leader journey starts here...</em> 🚀
          </p>
        </div>
      </section>

      <section className="features-showcase">
        <h2>Platform <span className="gradient-text">Features</span></h2>
        
        <div className="features-intro">
          <p>
            Discover the comprehensive suite of tools and resources designed to accelerate your CSE journey. 
            From academic excellence to career preparation, CSEVerse provides everything you need in one unified platform.
          </p>
        </div>
        
        {/* Only show these categories if user is logged in */}
        {user && (
          <div className="features-categories">
            {/* Academic Excellence Category */}
            <div className="feature-category">
              <div className="category-header">
                <div className="category-icon">📚</div>
                <h3>Academic Excellence</h3>
                <p>Master your coursework with our comprehensive academic resources</p>
              </div>
              <div className="category-features">
                <div className="feature-card">
                  <div className="card-icon">📝</div>
                  <h4>Study Materials</h4>
                  <p>Curated notes, PDFs, and study guides for all CSE courses at AUST</p>
                  <div className="feature-tags">
                    <span className="tag">Notes</span>
                    <span className="tag">PDFs</span>
                    <span className="tag">Guides</span>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">❓</div>
                  <h4>Question Banks</h4>
                  <p>Previous year questions, mock tests, and practice problems with solutions</p>
                  <div className="feature-tags">
                    <span className="tag">Past Papers</span>
                    <span className="tag">Solutions</span>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">📊</div>
                  <h4>Grade Tracker</h4>
                  <p>Monitor your academic progress and CGPA with our smart tracking tools</p>
                  <div className="feature-tags">
                    <span className="tag">CGPA</span>
                    <span className="tag">Progress</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Development Category */}
            <div className="feature-category">
              <div className="category-header">
                <div className="category-icon">🚀</div>
                <h3>Career Development</h3>
                <p>Prepare for your tech career with industry-focused resources</p>
              </div>
              <div className="category-features">
                <div className="feature-card">
                  <div className="card-icon">💼</div>
                  <h4>Job Portal</h4>
                  <p>Exclusive job postings, internship opportunities, and career guidance</p>
                  <div className="feature-tags">
                    <span className="tag">Jobs</span>
                    <span className="tag">Internships</span>
                    <span className="tag">Remote</span>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">📈</div>
                  <h4>Skill Development</h4>
                  <p>Coding challenges, technical interview prep, and skill assessments</p>
                  <div className="feature-tags">
                    <span className="tag">Coding</span>
                    <span className="tag">Interviews</span>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="card-icon">🏆</div>
                  <h4>Achievement Hub</h4>
                  <p>Showcase your projects, certifications, and academic achievements</p>
                  <div className="feature-tags">
                    <span className="tag">Portfolio</span>
                    <span className="tag">Certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action: Only show if NOT logged in */}
        {!user && (
          <div className="features-cta">
            <h3>Ready to Explore All Features?</h3>
            <p>Join CSEVerse today and unlock the full potential of your CSE journey at AUST!</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
            {showLoginMsg && (
              <div
                style={{
                  margin: "18px auto 0 auto",
                  maxWidth: 350,
                  background: "#ffeaea",
                  color: "#d32f2f",
                  borderRadius: 8,
                  padding: "12px 0",
                  textAlign: "center",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px #d32f2f22",
                  fontSize: "1rem",
                  zIndex: 10,
                }}
              >
                Please login first!
              </div>
            )}
          </div>
        )}

        {/* Features Stats */}
        <div className="features-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Study Resources</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Active Students</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Job Opportunities</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Community Support</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;