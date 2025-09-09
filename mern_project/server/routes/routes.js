import express from "express";
import Student from "../models/Student.js";
import bcrypt from "bcryptjs";

const router = express.Router();

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
    res.status(201).json({ message: "Signup successful", student });
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

    // Success
    res.status(200).json({ message: "Login successful", student });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Fetch All Students (GET)
router.get("/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
