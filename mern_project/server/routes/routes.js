const express = require('express');
const multer = require('multer');
const path = require('path');
const { createResource, getResources, deleteResource } = require('../controllers/resourceController');
const requireAuth = require('../middleware/requireAuth');
const Student = require("../models/Student.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile-pictures/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile-' + req.params.id + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// ✅ Signup (POST)
router.post("/signup", async (req, res) => {
  try {
    const { fullName, contactNo, address, idNumber, semester, year, eduMail, password } = req.body;

    // 🔹 Validation
    if (!fullName || !contactNo || !address || !idNumber || !semester || !year || !eduMail || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 🔹 Duplicate check
    const existingStudent = await Student.findOne({ $or: [{ eduMail }, { idNumber }] });
    if (existingStudent) {
      return res.status(409).json({ error: "Student with this eduMail or ID already exists" });
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      fullName,
      contactNo,
      address,
      idNumber,
      semester,
      year,
      eduMail,
      password: hashedPassword,
    });

    await student.save();
    
    // Generate JWT token
    const token = jwt.sign({ _id: student._id }, process.env.SECRET, { expiresIn: '3d' });
    
    res.status(201).json({ 
      message: "Signup successful", 
      student,
      token 
    });
  } catch (error) {
    console.error("Error saving student:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Login (POST)
router.post("/login", async (req, res) => {
  try {
    const { eduMail, password } = req.body;

    // Check if student exists
    const student = await Student.findOne({ eduMail });
    if (!student) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: student._id }, process.env.SECRET, { expiresIn: '3d' });

    // Success with token
    res.status(200).json({ 
      message: "Login successful", 
      student,
      token 
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Fetch All Students (GET) - Protected route
router.get("/student", requireAuth, async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update Student Profile (PATCH)
router.patch("/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, contactNo, address, semester, year } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { fullName, contactNo, address, semester, year },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      student: updatedStudent
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Upload Profile Picture (PATCH)
router.patch("/:id/profile-picture", requireAuth, upload.single('profilePicture'), async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const profilePicture = `/uploads/profile-pictures/${req.file.filename}`;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { profilePicture },
      { new: true }
    );

    res.status(200).json({
      message: "Profile picture uploaded successfully",
      student: updatedStudent
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Require auth for all resource routes
router.use('/resources', requireAuth);

// Resource routes
router.get('/resources', getResources);
router.post('/resources', createResource);
router.delete('/resources/:id', deleteResource);

module.exports = router;