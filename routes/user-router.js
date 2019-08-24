const express = require('express');
const router = express.Router();
// const dbConfig = require('../models/user-model');
const User = require('../models/user-model');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/app-db-dev', {useNewUrlParser: true});
// let db = mongoose.connection;


router.get('/register', (req, res, next) => {
  User.find({firstName: 'Butters' },console.log('meow42'));

  // res.render('Sign-up');
});

router.post('/register', (req, res, next) => {

  // const user = new User();
  // user.firstName = req.body.firstName;
  // user.lastName = req.body.lastName;
  // user.email = req.body.email;
  // user.password = req.body.password;
  // user.favouritePet = req.body.favouritePet;

  const {firstName, lastName, email, password, favouritePet} = req.body;

  // const {user: {firstName, lastName}, billing: {info: {cc}, email}} = req.body;
  // const cc2 = req.body.billing.info.cc;

  const userData = {firstName, lastName, email, password, favouritePet};

  User.create(userData, (err, newUser) => {
      if (err) {
        console.log('err');
      }
      else {
        console.log('meow');
        res.json({user: newUser})
      }
    });
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;