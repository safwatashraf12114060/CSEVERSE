import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';

const requireAuth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET);
    
    // Find student
    const student = await Student.findById(decoded._id).select('-password');
    
    if (!student) {
      return res.status(401).json({ error: 'Token is not valid.' });
    }

    // Add student to request object
    req.student = student;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid.' });
  }
};

export default requireAuth;