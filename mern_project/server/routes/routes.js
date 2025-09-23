const express = require('express');
const multer = require('multer');
const path = require('path');
const { createResource, getResources, deleteResource } = require('../controllers/resourceController');
const requireAuth = require('../middleware/requireAuth');
const express = require("express");
const router = express.Router();

// Import individual route files
const studentRoutes = require("./studentRoutes");
const resourceRoutes = require("./resourceRoutes");
const authRoutes = require("./authRoutes");   // 🔹 Auth routes (login, signup, forgot-password, etc.)

// Mount the routes
router.use("/students", studentRoutes);       // /api/students
router.use("/resources", resourceRoutes);     // /api/resources
router.use("/auth", authRoutes);             // /api/auth

module.exports = router;

module.exports = router;