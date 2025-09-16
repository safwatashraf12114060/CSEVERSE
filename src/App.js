import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar"; 
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import YearSemesterSelector from './Pages/YearSemesterSelectionPage';
import "./Components/Theme.css";

function App() {
  // Read theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [user, setUser] = useState(null);   // ✅ Global user state
  
  console.log("App component - Current user state:", user); // 🔍 Debug line

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        {/* Navbar সব page এ consistent, user state পাঠানো হচ্ছে */}
        <NavigationBar 
          theme={theme}
          toggleTheme={toggleTheme}
          user={user}
          setUser={setUser}
        />

        <div className="page-content">
          <Routes>
            {/* Public pages */}
            <Route 
              path="/" 
              element={
                <HomePage 
                  theme={theme} 
                  toggleTheme={toggleTheme} 
                  user={user} 
                  setUser={setUser}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutUs 
                  theme={theme} 
                  toggleTheme={toggleTheme} 
                  user={user} 
                  setUser={setUser}
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactUs 
                  theme={theme} 
                  toggleTheme={toggleTheme} 
                  user={user} 
                  setUser={setUser}
                />
              } 
            />

            {/* Authentication pages */}
            <Route 
              path="/login" 
              element={
                <Login 
                  theme={theme}
                  toggleTheme={toggleTheme}
                  setUser={setUser}  // ✅ Login success হলে global user set হবে
                  user={user}       // Navbar ঠিক দেখানোর জন্য
                />
              }
            />
            <Route 
              path="/signup" 
              element={<Signup theme={theme} toggleTheme={toggleTheme} user={user} />}
            />

            {/* Profile page */}
            <Route 
              path="/profile" 
              element={
                <Profile 
                  theme={theme}
                  toggleTheme={toggleTheme}
                  user={user}                      
                  setUser={setUser}
                />
              }
            />
            <Route path="/select-year-semester" element={<YearSemesterSelector />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;