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

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent fullName from starting with a digit
    if (name === "fullName" && /^\d/.test(value)) {
      return; // Do not update state if first character is a digit
    }

    setFormData({
      ...formData,
      [name]: value.trimStart(),
    });
  };

  const validateMobile = (mobile) => {
    const validPrefixes = ["019", "017", "013", "015", "016", "014","018"];
    return (
      validPrefixes.some((prefix) => mobile.startsWith(prefix)) &&
      mobile.length === 11
    );
  };

  const validateEmail = (email) => {
    return email.endsWith("@gmail.com") || email.endsWith("@aust.edu");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateMobile(formData.contactNo)) {
      alert(
        "Mobile number must start with 019, 017, 013, 015, 016, or 014 and be 11 digits long!"
      );
      return;
    }

    if (!validateEmail(formData.eduMail)) {
      alert("Email must end with @gmail.com or @aust.edu!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/students/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            contactNo: formData.contactNo,
            address: formData.address,
            idNumber: formData.idNumber.toUpperCase(),
            semester: formData.semester,
            year: formData.year,
            eduMail: formData.eduMail.toLowerCase(),
            password: formData.password,
          }),
        }
      );

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
            maxLength={30}
            className="form-input"
          />

          {/* Contact Number */}
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={(e) => {
              // Only allow digits 0-9
              const val = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, contactNo: val });
            }}
            required
            pattern="(019|017|013|015|016|014)[0-9]{8}"
            title="Mobile number must start with 019, 017, 013, 015, 016, or 014 and be 11 digits long"
            maxLength={11}
            className="form-input"
          />

          {/* Address */}
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            maxLength={100}
            className="form-input"
          />

          {/* ID Number */}
          <label>ID Number</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={e => {
              // Only allow digits 0-9
              const val = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, idNumber: val });
            }}
            required
            inputMode="numeric"
            pattern="[0-9]*"
            title="Only digits (0–9) allowed"
            maxLength={16}
            className="form-input"
          />

          {/* Year */}
          <label>Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

          {/* Semester */}
          <label>Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
          </select>

          {/* Educational Email */}
          <label>Educational Email</label>
          <input
            type="email"
            name="eduMail"
            value={formData.eduMail}
            onChange={handleChange}
            required
            pattern=".*@(gmail\.com|aust\.edu)$"
            title="Email must end with @gmail.com or @aust.edu"
            className="form-input"
          />

          {/* Password */}
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="form-input"
          />

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="form-input"
          />

          {/* Show Password Toggle */}
          <div style={{ marginTop: "8px" }}>
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
