import express from "express";
import Student from "../models/student.js";

const router = express.Router();

// ✅ Signup (POST)
router.post("/signup", async (req, res) => {
  try {
    const { fullName, contactNo, address, idNumber, semester, year, eduMail, password } = req.body;
    
    const newStudent = new Student({
      fullName,
      contactNo,
      address,
      idNumber,
      semester,
      year,
      eduMail,
      password,
    });
    
    await newStudent.save();
    res.status(201).json({ message: "Signup successful", student: newStudent });
  } catch (error) {
    console.error("Error saving student:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Fetch All Students (GET)
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;