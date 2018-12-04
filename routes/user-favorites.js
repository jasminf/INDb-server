var express = require('express');
var router = express.Router();
const {User} = require('../models/index');
const {Artist} = require('../models/index');
const {ArtistReport} = require('../models/index');
const DeezerApi = require('../lib/deezer-api.js');
const ArtistStats = require('../lib/artist-report');

router.post('/artist/save_favorite/', function (req, res) {
    const artistId = req.body.artistId;
    // const userId = req.params.userId;

    const artistApi = new DeezerApi();
    artistApi.fetchArtistInfo(artistId)
        .then((artistInfo) => {
            User.findOne({where: {id: 2}})
                .then((user) => {
                    Artist.create({
                        userId: user.id,
                        name: artistInfo.name,
                        deezerArtistId: artistInfo.id,
                        pictureUrl: artistInfo.picture_xl
                    })
                        .then(() => {
                            const artistStats = new ArtistStats();
                            artistStats.getStats(artistId)
                                .then((createdArtistReports) => {
                                    ArtistReport.create({
                                        artistId: artistInfo.id,
                                        id: createdArtistReports.id,
                                        totalAvgDuration: createdArtistReports.totalAverageDuration,
                                        totalAvgRank: createdArtistReports.totalAverageRank
                                    })
                                        .then((createdArtistReports) => {
                                            Artist.findAll({where: {userId: 2}})
                                                .then((artistFav) => {
                                                    const artistFavInfo = {
                                                        artistFav: artistFav,
                                                        createdArtistReports: createdArtistReports,
                                                    };
                                                    res.render('user-favorites',artistFavInfo)
                                                })
                                                .catch(console.error);
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

// {include:[artist-report]}
