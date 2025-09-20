import express from "express";
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// All resource routes require authentication
router.use(requireAuth);

// ✅ Correct route definitions
router.get('/', (req, res) => {
  res.json({ message: 'Get all resources' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get resource ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create resource' });
});

router.patch('/:id', (req, res) => {
  res.json({ message: `Update resource ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete resource ${req.params.id}` });
});

router.get('/my/resources', (req, res) => {
  res.json({ message: 'Get my resources' });
});

router.get('/subject/:subject', (req, res) => {
  res.json({ message: `Get resources by subject ${req.params.subject}` });
});

export default router;