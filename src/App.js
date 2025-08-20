import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [page, setPage] = useState("home"); // "home", "about", "contact", "login", "signup"
  const [theme, setTheme] = useState("light"); // "light" / "dark"

  // Toggle theme
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`App ${theme}`}>
      {page === "home" && (
        <HomePage
          onHomeClick={() => setPage("home")}
          onAboutClick={() => setPage("about")}
          onContactClick={() => setPage("contact")}
          onLoginClick={() => setPage("login")}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      {page === "about" && (
        <AboutUs
          onHomeClick={() => setPage("home")}
          onContactClick={() => setPage("contact")}
          onLoginClick={() => setPage("login")}
        />
      )}

      {page === "contact" && (
        <ContactUs
          onHomeClick={() => setPage("home")}
          onLoginClick={() => setPage("login")}
        />
      )}

      {page === "login" && (
        <Login
          onLogin={() => setPage("home")}
          onSignupClick={() => setPage("signup")}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      {page === "signup" && (
        <Signup
          onLoginClick={() => setPage("login")}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}

export default App;
