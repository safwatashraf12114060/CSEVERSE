import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [page, setPage] = useState("home"); // "home", "login", "signup"
  const [theme, setTheme] = useState("light"); // "light" / "dark"

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>
      {page === "home" && (
        <HomePage
          onLoginClick={() => setPage("login")}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
      {page === "login" && (
        <Login
          onLogin={() => setPage("home")}
          onSignupClick={() => setPage("signup")}
          onForgotClick={() => setPage("signup")} // demo
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
