//authRoute.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');  // Database connection
const router = express.Router();

// Load JWT secret from .env
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// User Registration
router.post('/register', async (req, res) => {
  const { name, username, email, phone_number, password, dob } = req.body;
  
  try {
    // Check if user exists
    const existingUser = await pool.query("SELECT * FROM Users WHERE email = $1 OR username = $2", [email, username]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists with this email or username' });
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user
    const newUser = await pool.query(
      `INSERT INTO Users (name, username, email, phone_number, password, dob)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id, username, email`,
      [name, username, email, phone_number, hashedPassword, dob]
    );

    res.status(201).json({ message: 'User registered successfully', user: newUser.rows[0] });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    const user = await pool.query("SELECT * FROM Users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ user_id: user.rows[0].user_id, username: user.rows[0].username }, JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;