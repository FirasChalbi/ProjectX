const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const carrefourRoutes = require('./routes/carrefour');
const monoprixRoutes = require('./routes/monoprix');
const matchedRoutes = require('./routes/matchedProduct');
const matchedRoutesV2 = require('./routes/matchedProducts');
const search = require('./routes/search');
const listsRoutes = require('./routes/lists');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Firasch:Firasch@cluster0.8fbmhhc.mongodb.net/Stores?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define User model
const User = require('./models/User');

// Passport setup
passport.use(new Strategy({
  clientID: '206715908451-sp66t76rpkg3v79pn96c4rs8h46cv80j.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'https://barkaa-service.onrender.com/auth/google/callback',
},
async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if the user already exists in the database
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // If not, create a new user
      user = await User.create({ googleId: profile.id });
    }

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Authentication routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to the home page
    res.redirect('/');
  });

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Use the lists routes
app.use('/api/lists', listsRoutes);

// Your existing routes
app.use('/api/carrefour/products', carrefourRoutes);
app.use('/api/monoprix/products', monoprixRoutes);
app.use('/api/match-product', matchedRoutes);
app.use('/api/match-products', matchedRoutesV2);
app.use('/api/search', search);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
