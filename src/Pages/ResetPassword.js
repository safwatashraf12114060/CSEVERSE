// src/Pages/ResetPassword.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    if (password.length < 6) return setMessage("Password should be at least 6 characters.");
    if (password !== confirm) return setMessage("Passwords do not match.");

    setLoading(true);
    try {
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Password reset successful. Redirecting to login...");
        setTimeout(() => navigate("/login"), 1600);
      } else {
        setMessage(data.message || "Failed to reset password.");
      }
    } catch (err) {
      setMessage("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rp-container">
      <form className="rp-card" onSubmit={submitHandler}>
        <h2>Reset Password</h2>
        <p>Set a new password for your account.</p>

        <label>New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Confirm new password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Password"}
        </button>

        {message && <p className="rp-message">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
