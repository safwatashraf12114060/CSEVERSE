import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    idNumber: {
      type: String,
      required: [true, "ID number is required"],
      unique: true,
    },
    semester: {
      type: String,
      required: [true, "Semester is required"],
    },
    year: {
      type: String,
      required: [true, "Year is required"],
    },
    eduMail: {
      type: String,
      required: [true, "Educational email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
