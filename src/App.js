import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <div className="App">
      {isLoginPage ? (
        <Login onLogin={() => setIsLoginPage(false)} />
      ) : (
        <HomePage onLoginClick={() => setIsLoginPage(true)} />
      )}
    </div>
  );
}

export default App;
