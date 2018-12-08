var express = require('express');
var router = express.Router();
const {Artist} = require('../../models/index');
const {ArtistReport} = require('../../models/index');

router.post('/favorite', function (req, res) {
    const artistId = req.body.artistId;

    Artist.destroy({
        where: {userId: 2, deezerArtistId: artistId},
    })
        .then(() => {
            ArtistReport.destroy({
                where: {artistId: artistId},
            })
                .then(() => {

                    return res.redirect('back');

                })
                .catch(console.error);
        })
        .catch(console.error);
});
module.exports = router;