const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true
  },
  players: [{
    name: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      default: 0
    }
  }],
  winner: {
    type: String,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);