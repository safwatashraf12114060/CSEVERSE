import mongoose from "mongoose";

const studentschema = new mongoose.Schema(
    {
        name : {type: String, required: true},
        email: {type: String, required: true, unique: true}
    }
);

const Student = mongoose.model('Student',studentschema);

export default Student;