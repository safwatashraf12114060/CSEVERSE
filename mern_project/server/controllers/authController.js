// mern_project/server/controllers/authController.js
import crypto from "crypto";
import bcrypt from "bcryptjs";
import Student from "../models/Student.js";
import sendEmail from "../../utils/sendEmail.js";

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000"; // frontend base

// POST /auth/forgot-password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required." });

    const user = await Student.findOne({ eduMail: email });
    if (!user) {
      // For security, you may respond success anyway.
      return res.status(200).json({ message: "If that email exists, a reset link has been sent." });
    }

    // create token
    const token = crypto.randomBytes(32).toString("hex");
    const expires = Date.now() + 1000 * 60 * 60; // 1 hour

    user.passwordResetToken = token;
    user.passwordResetExpires = new Date(expires);
    try {
      await user.save();
    } catch (dbErr) {
      console.error("DB update failed during forgotPassword:", dbErr);
      return res.status(500).json({ message: "Database update failed. Please try again." });
    }

    const resetLink = `${CLIENT_URL}/reset-password/${token}`;

    const html = `
      <p>Hello ${user.fullName},</p>
      <p>You requested a password reset. Click the link below to set a new password. This link is valid for 1 hour.</p>
      <p><a href="${resetLink}">Reset your password</a></p>
      <p>If you didn't request this, ignore this email.</p>
    `;

    try {
      await sendEmail({ to: user.eduMail, subject: "Password Reset - CSEVERSE", html });
    } catch (mailErr) {
      console.error("Nodemailer/sendEmail failed:", mailErr);
      return res.status(500).json({ message: "Failed to send reset email. Please try again later." });
    }

    return res.status(200).json({ message: "If that email exists, a reset link has been sent." });
  } catch (err) {
    console.error("forgotPassword error:", err);
    return res.status(500).json({ message: "Server error. Try again." });
  }
};

// POST /auth/reset-password/:token
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!token) return res.status(400).json({ message: "Invalid or missing token." });
    if (!password || password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters." });

    const user = await Student.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: new Date() }
    });

    if (!user) return res.status(400).json({ message: "Token is invalid or has expired." });

    // hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // clear reset token
    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    try {
      await user.save();
    } catch (dbErr) {
      console.error("DB update failed during resetPassword:", dbErr);
      return res.status(500).json({ message: "Database update failed. Please try again." });
    }

    // Optionally send confirmation email
    const html = `
      <p>Hello ${user.fullName},</p>
      <p>Your password has been successfully reset. If this wasn't you, contact support.</p>
    `;
    try {
      await sendEmail({ to: user.eduMail, subject: "Password Reset Successful - CSEVERSE", html });
    } catch (mailErr) {
      console.error("Nodemailer/sendEmail failed (reset):", mailErr);
      // Don't block password reset for email failure, but inform user
      return res.status(200).json({ message: "Password reset successful, but confirmation email failed to send." });
    }

    return res.status(200).json({ message: "Password reset successful." });
  } catch (err) {
    console.error("resetPassword error:", err);
    return res.status(500).json({ message: "Server error. Try again." });
  }
};
