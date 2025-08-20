/*import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    address: "",
    idNumber: "",
    semester: "",
    year: "",
    eduMail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNavigation = (page) => {
    window.location.href = `/${page}`;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Signup successful! Redirecting to login page...");
    window.location.href = "/login";
  };

  const handleLoginRedirect = () => {
    window.location.href = "/login";
  };

  return (
    <div className="signup-container">
    
      {/* Navbar *//*}
      <nav className="navbar">
        <div className="logo">CSEVerse</div>
        <div className="nav-links">
          <button onClick={() => handleNavigation("home")}>Home</button>
          <button onClick={() => handleNavigation("about")}>About</button>
          <button onClick={() => handleNavigation("contact")}>Contact</button>
          <button onClick={() => handleNavigation("login")}>Login</button>
        </div>
      </nav>

      {/* Signup Form *//*}
      <div className="form-wrapper">
        <h2>Create your account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Contact Number</label>
          <input
            type="text"
            name="contactNo"
            placeholder="Enter your contact number"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>ID Number</label>
          <input
            type="text"
            name="idNumber"
            placeholder="Enter your ID number"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />

          <label>Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          >
            <option value="">Select your semester</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
          </select>

          <label>Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select your year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

          <label>Educational Email</label>
          <input
            type="email"
            name="eduMail"
            placeholder="Enter your educational email"
            value={formData.eduMail}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-redirect">
          Already have an account?{" "}
          <span onClick={handleLoginRedirect}>Login</span>
        </p>
      </div>
    </div>
  );
}
*/