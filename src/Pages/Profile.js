import React from "react";

function Profile({ user }) {
  if (!user) {
    return <h2 style={{ textAlign: "center" }}>⚠️ Please login to view profile</h2>;
  }

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
    </div>
  );
}

export default Profile;