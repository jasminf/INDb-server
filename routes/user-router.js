const express = require('express');
const router = express.Router();
const {User} = require('../models/index');

router.get('/register', (req, res, next)=> {
  res.render('Sign-up');
});

router.post('/register', (req, res, next)=> {
  const {first_name:firstName, last_name:lastName,password,email }=req.body;

  User.create({
    firstName: firstName,
    lastName: lastName,
    password:password,
    email: email
  })
    .then((createdUser) => {
      res.render('sig-up-register', {createdUser})
    })
    .catch(console.error);

});

router.get('/login', (req, res, next)=> {
  res.render('login');
});

router.get('/logout', function(req, res, next){
    req.logout();
    res.redirect('/');
});

module.exports = router;