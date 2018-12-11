var express = require('express');
var router = express.Router();
const {User} = require('../../models/index');
const {Artist} = require('../../models/index');
const {ArtistReport} = require('../../models/index');
const DeezerApi = require('../../lib/deezer-api.js');
const ArtistStats = require('../../lib/artist-report');

router.post('/save_favorite', function (req, res) {
    const artistId = req.body.artistId;

    const artistApi = new DeezerApi();
    artistApi.fetchArtistInfo(artistId)
        .then((artistInfo) => {
            User.findOne({where: {id: 2}})
                .then((user) => {
                    // Artist.findOne({where: {deezerArtistId: artistId}})
                    // ? console.log(`This artist already exist in your favorites list`) : .then(() => {
                    Artist.create({
                        userId: user.id,
                        name: artistInfo.name,
                        deezerArtistId: artistInfo.id,
                        pictureUrl: artistInfo.picture_xl
                    })
                        .then((createdArtist) => {
                            const artistStats = new ArtistStats();
                            artistStats.getStats(artistId)
                                .then((stats) => {
                                    ArtistReport.create({
                                        artistId: createdArtist.deezerArtistId,
                                        totalAvgDuration: stats.totalAverageDuration,
                                        totalAvgRank: stats.totalAverageRank
                                    })
                                        .then(() => {
                                            return res.redirect('/search');
                                            // return res.json(stats);
                                        })
                                        .catch(console.error);
                                })
                                .catch(console.error);
                        })
                        .catch(console.error);
                })
                .catch(console.error);
        })
        .catch(function (error) {
            console.error("api Error", error);
            res.send(error.message);
        });
});


module.exports = router;



