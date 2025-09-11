import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ theme, toggleTheme, setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        console.log("Backend response:", data); // Debug line
        console.log("Student data:", data.student); // Debug line
        setMessage("✅ Login successful!");
        setUser(data.student);   // ✅ global user set
        console.log("User set successfully"); // Debug line
        navigate("/");           // ✅ home redirect
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (error) {
      console.error(error);
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
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
          {message && <p>{message}</p>}
          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;