import React, { useState } from "react";
import { Link } from "react-router-dom";   // Link যোগ
import NavigationBar from "../Components/NavigationBar";
import "./Login.css";

function Login({ theme, toggleTheme }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={`login-page ${theme}`}>
      <NavigationBar theme={theme} toggleTheme={toggleTheme} />
      <div className="login-container">
        <div className="login-box">
          <h1>Welcome Back!</h1>
          <p>Log in to your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="login-links">
            <a href="#">Forgot Password?</a>
            {/* এখানে Link ব্যবহার করে /signup এ পাঠানো হবে */}
            <p>
              Don’t have an account?{" "}
              <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
