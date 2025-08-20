import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [page, setPage] = useState("home"); // "home", "login", "signup", "contact", "about"
  const [theme, setTheme] = useState("light"); // "light" / "dark"

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>
      {/* Home Page */}
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

      {/* Contact Page */}
      {page === "contact" && (
        <ContactUs
          onHomeClick={() => setPage("home")}
          onLoginClick={() => setPage("login")}
        />
      )}

      {/* Login Page */}
      {page === "login" && (
        <Login
          onLogin={() => setPage("home")}
          onSignupClick={() => setPage("signup")}
          onForgotClick={() => setPage("signup")} // demo
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      {/* Signup Page */}
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
