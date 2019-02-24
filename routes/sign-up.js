/**
var express = require('express');
var router = express.Router();
const {User} = require('../models/index');


router.post('/register', function (req, res) {

const {first_name:firstName, last_name:lastName,password,email }=req.body;

    User.create({
        firstName: firstName,
        lastName: lastName,
      password:password,
      email: email

    })
        .then((createdUser) => {// console.log('Created user', {id: createdUser.id, name: createdUser.fullName});
            res.render('sig-up-register', {createdUser})// redirect to URL else.
        })
        .catch(console.error);
});


module.exports = router;
**/