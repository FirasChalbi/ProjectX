const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  email: { type: String },
  displayName: { type: String },
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
