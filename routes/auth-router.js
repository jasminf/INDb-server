const express = require('express');
const router = express.Router();
const { User } = require('../models/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(  (user)=> {
      done(null, user);
    }).catch( (error)=> {
      done(error, null);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function(email, password, done) {
    User.findOne({where: { email: email }})
      .then( (user)=> {
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch( (error)=> {
        return done(error);
      });
  }
));

router.get('/login', (req, res, next)=> {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/homepage');
    });
  })(req, res, next);
});


module.exports = router;