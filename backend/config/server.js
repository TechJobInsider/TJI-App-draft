const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const pool = require('./db');  // Import the database connection
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Test database connection
pool.connect((err, client, release) => {
    if (err) {
      console.error('Error acquiring client', err.stack);
    } else {
      console.log('Database connected successfully');
      release();
    }
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });