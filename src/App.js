import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./Components/Theme.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <NavigationBar theme={theme} toggleTheme={toggleTheme} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/about" element={<AboutUs theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/contact" element={<ContactUs theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/login" element={<Login theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/signup" element={<Signup theme={theme} toggleTheme={toggleTheme} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
