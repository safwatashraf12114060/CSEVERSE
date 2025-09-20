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

// Update student profile
export const updateStudentProfile = async (req, res) => {
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
};

// Upload profile picture
export const uploadProfilePicture = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Assuming you're using multer for file uploads
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const profilePicture = req.file.filename; // or req.file.path

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { profilePicture },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({
      message: "Profile picture uploaded successfully",
      student: updatedStudent
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};