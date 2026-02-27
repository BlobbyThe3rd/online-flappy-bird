const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_dev';

router.post('/register', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || username.trim().length < 3) {
      return res.status(400).json({ error: 'Username must be at least 3 characters' });
    }

    const user = await User.findOrCreateUser(username.trim());
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({ error: 'Username required' });
    }

    const user = await User.findOrCreateUser(username.trim());
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;