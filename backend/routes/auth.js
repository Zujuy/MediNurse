const express = require('express');
const catchErrors = require('../middlewares/catchErrors');
const router = express.Router();
const { 
  signup, 
  logout, 
  login, 
  getProfile } = require('../controllers/auth');
  
const passport = require('passport');

router.post('/login', passport.authenticate('local'), login);

router.post('/signup', signup);

router.get('/logout', logout);

router.get('/profile', getProfile);

module.exports = router;