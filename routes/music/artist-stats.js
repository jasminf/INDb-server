var express = require('express');
var router = express.Router();
var axios = require('axios');

const ArtistReport = require('../../lib/artist-report');

router.get('/:artistId/report', function (req, res) {
    const artistId = req.params.artistId;

    const artistReport = new ArtistReport(artistId);
    artistReport.getStats(artistId)
        .then( (stats)=> {
            return res.json(stats);
            // { totalAverage: 350, albumAverages: {}}‏

        })
        .catch(function (error) {
            console.error("api Error", error);
            res.send(error.message);
        });
});

module.exports = router;
