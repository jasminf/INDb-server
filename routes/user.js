var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    const viewData = {
        title: 'User Page'
    };
    res.render('user', viewData);

});

module.exports = router;
