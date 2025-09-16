import React from "react";
import NavigationBar from "../Components/NavigationBar";
import "./AboutUs.css";
// Import team member images
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";

export default function AboutUs({ theme, toggleTheme, user, setUser }) {
  return (
    <div className="about-us">
      {/* Navigation Bar */}
      <NavigationBar
        theme={theme}
        toggleTheme={toggleTheme}
        user={user}
        setUser={setUser}
      />

      {/* About Header */}
      <div className="about-header">
        <h1>About <span className="gradient-text">CSEVerse</span></h1>
        <p>
          The one-stop destination where AUST CSE students connect, learn, and excel together!
        </p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-intro">
          <p>
            <strong>CSEVerse</strong> is more than just a website – it's a thriving digital ecosystem designed exclusively for <strong>AUST CSE students</strong>. 
            Born from the vision of creating a unified platform where knowledge meets opportunity, CSEVerse bridges the gap between academic learning and industry excellence.
          </p>
        </div>
        
        {/* Mission and Vision Section */}
        <div className="mission-vision">
          <div className="mission-box">
            <div className="icon-wrapper">
              <span className="mission-icon">🎯</span>
            </div>
            <h3>Our Mission</h3>
            <p>To empower every CSE student at AUST with the resources, connections, and opportunities they need to excel in their academic journey and beyond.</p>
          </div>
          
          <div className="vision-box">
            <div className="icon-wrapper">
              <span className="vision-icon">🚀</span>
            </div>
            <h3>Our Vision</h3>
            <p>To become the premier platform where AUST CSE students transform into industry-ready professionals and innovative tech leaders.</p>
          </div>
        </div>

        {/* What Makes Us Special */}
        <div className="features-highlight">
          <h3 className="features-title">🌟 What Makes Us Special</h3>
          <div className="features-list">
            <div className="feature-point">
              <span className="feature-bullet">✨</span>
              <div className="feature-text">
                <strong>Student-Centric Design</strong> - Built by students, for students
              </div>
            </div>
            <div className="feature-point">
              <span className="feature-bullet">✨</span>
              <div className="feature-text">
                <strong>Real-Time Updates</strong> - Stay ahead with the latest tech trends and opportunities
              </div>
            </div>
            <div className="feature-point">
              <span className="feature-bullet">✨</span>
              <div className="feature-text">
                <strong>Comprehensive Resources</strong> - Everything from notes to career guidance in one place
              </div>
            </div>
            <div className="feature-point">
              <span className="feature-bullet">✨</span>
              <div className="feature-text">
                <strong>Active Community</strong> - Connect with peers, seniors, and industry professionals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="closing-message">
        <p>
          Whether you're a first-year student navigating the basics of programming or a final-year student preparing for your tech career, 
          <strong> CSEVerse</strong> is your trusted companion throughout your entire journey at AUST.
        </p>
        <div className="call-to-action">
          <em>Join us in building the future of CSE education! 🚀</em>
        </div>
      </div>

      {/* About Footer - Team Members */}
      <div className="about-footer">
        <h3>Meet Our Team Members</h3>
        <p>
          The passionate developers behind CSEVerse - dedicated AUST CSE students building solutions for our community.
        </p>
        
        {/* Team Members Grid */}
        <div className="team-members">
          <div className="team-member-card">
            <div className="member-image">
              <img src={member1} alt="Sojib Hasan" />
            </div>
            <div className="member-info">
              <h4 className="member-name">Sojib Hasan</h4>
              <p className="member-id">ID: 20230104129</p>
            </div>
          </div>

          <div className="team-member-card">
            <div className="member-image">
              <img src={member2} alt="Safwat Ashraf Nabil" />
            </div>
            <div className="member-info">
              <h4 className="member-name">Safwat Ashraf Nabil</h4>
              <p className="member-id">ID: 20230104129</p>
            </div>
          </div>

          <div className="team-member-card">
            <div className="member-image">
              <img src={member3} alt="Jawad Al Nasrum Shams" />
            </div>
            <div className="member-info">
              <h4 className="member-name">Jawad Al Nasrum Shams</h4>
              <p className="member-id">ID: 20230104145</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}