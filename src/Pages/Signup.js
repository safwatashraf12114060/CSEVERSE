import React, { useState } from "react";
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
      [e.target.name]: e.target.value.trimStart(), // 🔹 leading space remove
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // 🔹 Correct backend port (usually 5000 for MERN)
      const response = await fetch("http://localhost:5000/api/students/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          contactNo: formData.contactNo,
          address: formData.address,
          idNumber: formData.idNumber.toUpperCase(), // 🔹 match backend uppercase
          semester: formData.semester,
          year: formData.year,
          eduMail: formData.eduMail.toLowerCase(), // 🔹 match backend lowercase
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Redirecting to login page...");
        window.location.href = "/login";
      } else {
        alert(data.error || "Signup failed!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h2>Create your account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          {/* Full Name */}
          <label>Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />

          {/* Contact Number */}
          <label>Contact Number</label>
          <input 
            type="text" 
            name="contactNo" 
            value={formData.contactNo} 
            onChange={handleChange} 
            required 
            pattern="[0-9]{10,15}" // 🔹 basic number validation
            title="Enter a valid contact number"
          />

          {/* Address */}
          <label>Address</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />

          {/* ID Number */}
          <label>ID Number</label>
          <input 
            type="text" 
            name="idNumber" 
            value={formData.idNumber} 
            onChange={handleChange} 
            required 
          />

          {/* Semester */}
          <label>Semester</label>
          <select 
            name="semester" 
            value={formData.semester} 
            onChange={handleChange} 
            required
          >
            <option value="">Select</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
          </select>

          {/* Year */}
          <label>Year</label>
          <select 
            name="year" 
            value={formData.year} 
            onChange={handleChange} 
            required
          >
            <option value="">Select</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

          {/* Educational Email */}
          <label>Educational Email</label>
          <input 
            type="email" 
            name="eduMail" 
            value={formData.eduMail} 
            onChange={handleChange} 
            required 
          />

          {/* Password */}
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            minLength={6} // 🔹 minimum password length
          />

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
