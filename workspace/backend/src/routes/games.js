const express = require('express');
const User = require('../models/User');
const auth = require('./auth'); // for middleware

const router = express.Router();

// Get global leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const users = await User.find().sort({ highscore: -1, username: 1 }).limit(50);
    res.json(users.map(u => ({ username: u.username, highscore: u.highscore })));
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user highscore (protected)
router.post('/:username/highscore', async (req, res) => {
  try {
    const { username } = req.params;
    const { score } = req.body;
    
    if (!score || score < 0) {
      return res.status(400).json({ error: 'Valid score required' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (score > user.highscore) {
      user.highscore = score;
      await user.save();
    }

    res.json({ username: user.username, highscore: user.highscore });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;