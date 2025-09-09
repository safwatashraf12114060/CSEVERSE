import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  eduMail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
