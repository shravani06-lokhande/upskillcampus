// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'Account created successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating account', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: `Welcome ${user.email}` });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error });
  }
});

module.exports = router;
