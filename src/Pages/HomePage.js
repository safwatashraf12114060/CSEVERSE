import React, { useState, useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import "./HomePage.css";

const slides = [
  { id: 1, text: "📘 Placeholder Slide 1" },
  { id: 2, text: "💡 Placeholder Slide 2" },
  { id: 3, text: "📂 Placeholder Slide 3" },
  { id: 4, text: "🚀 Placeholder Slide 4" }
];

function HomePage({ theme, toggleTheme, user, setUser }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="slide">{slides[current].text}</div>
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

      {/* Sections */}
      <section className="section">
        <h2>Welcome to CSEVerse</h2>
        <p>
          Explore comprehensive Computer Science resources including notes, PDFs, and question banks to support your academic journey.
        </p>
      </section>

      <section className="section">
        <h2>About CSEVerse</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </section>

      <section className="section">
        <h2>Features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
