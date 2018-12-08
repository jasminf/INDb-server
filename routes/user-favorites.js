var express = require('express');
var router = express.Router();
const {User} = require('../models/index');
const {Artist} = require('../models/index');
const {ArtistReport} = require('../models/index');

// favorite -> favorites
router.get('/artists', function (req, res) {
    // const deezerArtistId = req.body.artistId;
    // const userId = req.params.userId;

    Artist.findAll({
        where: {userId: 2},
        include: [{model: ArtistReport, as: 'artistReport'}]
    })
        .then((artists) => {
            res.render('user-favorites', {artists: artists})
        })
        .catch(console.error);

});
module.exports = router;


