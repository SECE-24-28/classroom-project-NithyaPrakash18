const express = require('express');
const { connect } = require('./db-connect/db');
const User = require('./models/User');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connect();

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running and connected to MongoDB!' });
});

// Create user (POST)
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users (GET)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});