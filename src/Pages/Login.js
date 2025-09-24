import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ theme, toggleTheme, setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // <-- Add this line
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/students/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eduMail: email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Login successful!");
        setUser(data.student);
        // Save user name, email, and token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.student.fullName || "");
        localStorage.setItem("userEmail", data.student.eduMail || "");
        navigate("/");
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong");
    }
  };

  return (
    <div className={`login-page ${theme}`}>
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
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Show Password Toggle */}
            <div className="show-password-toggle">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                id="showPassword"
              />
              <label htmlFor="showPassword" style={{ margin: 0, cursor: "pointer" }}>
                Show Password
              </label>
            </div>
            <button type="submit" className="login-btn">Login</button>
            <div style={{ marginTop: 8, textAlign: "right" }}>
              <Link to="/forgot-password" style={{ fontSize: 14, color: "#333", textDecoration: "underline" }}>
                Forgot Password?
              </Link>
            </div>
          </form>
          {message && <p>{message}</p>}
          <div className="login-links">
            {/* Removed old anchor, only show sign up link here */}
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;