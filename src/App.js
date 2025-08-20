import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <HomePage onLoginClick={() => setPage("login")} />}
      {page === "login" && (
        <Login
          onLogin={() => setPage("home")}
          onSignupClick={() => setPage("signup")}
          onForgotClick={() => setPage("signup")} // For demo, Forgot → Signup
        />
      )}
      {page === "signup" && <Signup />}
    </div>
  );
}

export default App;
