var express = require('express');
var router = express.Router();


router.get('/artist', function (req, res, next) {

    const artist = {name: 'primus', id: 3};
    res.json({artist});
});

module.exports = router;
