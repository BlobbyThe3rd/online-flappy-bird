const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  highscore: { 
    type: Number, 
    default: 0 
  }
}, { timestamps: true });

userSchema.statics.findOrCreateUser = async function(username) {
  let user = await this.findOne({ username });
  if (!user) {
    user = new this({ username });
    await user.save();
  }
  return user;
};

module.exports = mongoose.model('User', userSchema);