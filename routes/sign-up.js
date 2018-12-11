var express = require('express');
var router = express.Router();
const {User} = require('../models/index');

router.get('/', function (req, res) {

    const viewData = {
        title: 'Sign-Up'
    };
    res.render('Sign-up', viewData);
});


router.post('/register', function (req, res) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const userMail = req.body.email;
    const userPassword = req.body.password;

    User.create({

        firstName: firstName,
        lastName: lastName,
        email: userMail,
        password:userPassword
    })
        .then((createdUser) => {
            // console.log('Created user', {id: createdUser.id, name: createdUser.fullName});
            res.render('sig-up-register', {createdUser})
            // redirect to URL else.
        })

        .catch(console.error);
});


module.exports = router;