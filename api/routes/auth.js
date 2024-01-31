// server/routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Login with Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'https://barka.tn/' }),
  (req, res) => {
    // Successful authentication
    res.redirect('https://barka.tn/');
  }
);

// Check authentication status
router.get('/check', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('Session:', req.session);
    console.log('User Authenticated:', req.isAuthenticated());
    // User is authenticated, send user information
    res.json({ name: req.user.displayName, email: req.user.email });
  } else {
    // User is not authenticated
    res.status(401).json({ error: 'User not authenticated' });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
