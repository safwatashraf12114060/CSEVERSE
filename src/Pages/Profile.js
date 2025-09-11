import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  if (!user) return <h2 style={{ textAlign: "center" }}>⚠️ Please login to view profile</h2>;

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>👤 Profile</h1>
      <p><b>Full Name:</b> {user.fullName}</p>
      <p><b>Email:</b> {user.eduMail}</p>
      <p><b>Contact:</b> {user.contactNo}</p>
      <p><b>Address:</b> {user.address}</p>
      <p><b>ID Number:</b> {user.idNumber}</p>
      <p><b>Semester:</b> {user.semester}</p>
      <p><b>Year:</b> {user.year}</p>

      <button 
        style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "red", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
