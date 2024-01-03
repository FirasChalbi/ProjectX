// server/routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Login with Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'https://barkaa.netlify.app/' }),
  (req, res) => {
    // Successful authentication
    res.redirect('https://barkaa.netlify.app/');
  }
);

// Check authentication status
router.get('/check', (req, res) => {

    // User is authenticated, send user information
    res.json({ name: req.user.displayName, email: req.user.email });

});
// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
