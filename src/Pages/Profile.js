import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ theme, toggleTheme, user, setUser }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    address: "",
    semester: "",
    year: ""
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        contactNo: user.contactNo || "",
        address: user.address || "",
        semester: user.semester || "",
        year: user.year || ""
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/students/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.student);
        setIsEditing(false);
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = async () => {
    if (!profilePicture) return;

    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    try {
      const response = await fetch(`/api/students/${user._id}/profile-picture`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.student);
        setProfilePicture(null);
        alert("Profile picture updated successfully!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return <h2 style={{ textAlign: "center" }}>⚠️ Please login to view profile</h2>;

  return (
    <div className={`profile-page ${theme}`}>
      <div className="profile-container">
        <h1>Your Profile</h1>
        
        {/* Profile Picture Section */}
        <div className="profile-picture-section">
          <div className="profile-image-container">
            <img 
              src={previewImage || user?.profilePicture || "/default-avatar.png"} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          
          <div className="image-upload-controls">
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <label htmlFor="profilePicture" className="upload-btn">
              Choose Image
            </label>
            {profilePicture && (
              <button onClick={handleImageUpload} className="save-image-btn">
                Upload Picture
              </button>
            )}
          </div>
        </div>

        {/* Profile Info Section */}
        {!isEditing ? (
          <div className="profile-info">
            <div className="info-item">
              <label>Full Name:</label>
              <span>{user?.fullName}</span>
            </div>
            <div className="info-item">
              <label>Contact No:</label>
              <span>{user?.contactNo}</span>
            </div>
            <div className="info-item">
              <label>Address:</label>
              <span>{user?.address}</span>
            </div>
            <div className="info-item">
              <label>ID Number:</label>
              <span>{user?.idNumber}</span>
            </div>
            <div className="info-item">
              <label>Semester:</label>
              <span>{user?.semester}</span>
            </div>
            <div className="info-item">
              <label>Year:</label>
              <span>{user?.year}</span>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <span>{user?.eduMail}</span>
            </div>
            
            <div className="action-buttons">
              <button 
                onClick={() => setIsEditing(true)} 
                className="edit-btn"
              >
                Edit Profile
              </button>
              <button 
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Contact No:</label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Semester:</label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Year:</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="save-btn">
                Save Changes
              </button>
              <button 
                type="button" 
                onClick={() => setIsEditing(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;