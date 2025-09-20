import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['pdf', 'video', 'note', 'link', 'book', 'code']
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Resource', resourceSchema);