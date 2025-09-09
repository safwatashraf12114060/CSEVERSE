import Student from "../models/Student.js";
import bcrypt from "bcryptjs";

// GET all students
export const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST new student
export const newStudent = async (req, res) => {
  try {
    const { fullName, contactNo, address, idNumber, semester, year, eduMail, password } = req.body;

    // 🔹 Validation
    if (!fullName || !contactNo || !address || !idNumber || !semester || !year || !eduMail || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 🔹 Duplicate check
    const existingStudent = await Student.findOne({
      $or: [{ eduMail }, { idNumber }]
    });

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
      password: hashedPassword
    });

    await student.save();
    res.status(201).json({ message: "Signup successful!", student });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};
