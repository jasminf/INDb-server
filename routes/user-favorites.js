var express = require('express');
var router = express.Router();


router.get('/:userId', function (req, res) {
    const userId = req.params.userId;
            const viewData = {
                title: 'User favorites:',
            };
            res.render('user-favorites', viewData);
});
module.exports = router;
