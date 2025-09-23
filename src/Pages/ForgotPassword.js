// src/Pages/ForgotPassword.js
import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!email) return setMessage("Please enter your email.");
    setLoading(true);
    try {
  const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setMessage(data.message || "If that email exists, a reset link has been sent.");
    } catch (err) {
      setMessage("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fp-container">
      <form className="fp-card" onSubmit={submitHandler}>
        <h2>Forgot Password</h2>
        <p>Enter your registered educational email to receive a reset link.</p>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@university.edu"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {message && <p className="fp-message">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
