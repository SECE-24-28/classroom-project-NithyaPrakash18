const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory storage (replace with database later)
let users = [
  { id: 1, firstName: 'John', email: 'john@example.com' },
  { id: 2, firstName: 'Jane', email: 'jane@example.com' }
];

// POST route for user signup
app.post('/api/v1/User/userSignup', (req, res) => {
  const { firstName, email } = req.body;
  const newUser = { id: users.length + 1, firstName, email };
  users.push(newUser);
  res.status(200).json({ message: 'User created successfully', user: newUser });
});

// GET route to fetch all users
app.get('/api/v1/User', (req, res) => {
  console.log('GET /api/v1/User called - returning users:', users);
  res.status(200).json(users);
});

// GET route to fetch all users (alternative endpoint)
app.get('/api/v1/User/getUsers', (req, res) => {
  res.status(200).json(users);
});

app.listen(21000, () => {
  console.log('Server running on http://localhost:21000');
});