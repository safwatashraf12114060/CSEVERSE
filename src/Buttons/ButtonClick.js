// Buttons/ButtonClick.js
import React from "react";
import "./ButtonClick.css";

const ButtonClick = ({ onClick, children, type = "nav" }) => {
  return (
    <button
      className={type === "login" ? "login-btn" : "nav-btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonClick;
