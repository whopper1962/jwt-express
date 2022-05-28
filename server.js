const express = require('express');
const jwt = require('jsonwebtoken');

const config = require('./config');

const auth = require('./auth');

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, console.log('Server running...'));

// Register
app.post('/register', (req, res) => {
  const payload = {
    user_name: req.body.user_name,
    email: req.body.email
  };
  const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);
  const body = {
    user_name: req.body.user_name,
    email: req.body.email,
    token: token
  };
  res.status(200).json(body);
});

// Login
app.get('/login', auth, (req, res) => {
  res.status(200).json({
    msg: 'Success!'
  });
});

