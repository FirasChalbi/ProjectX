const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  // Add additional fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
