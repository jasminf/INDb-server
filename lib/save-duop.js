/*
var express = require('express');
var router = express.Router();
const {User} = require('../models/index');
const {Artist} = require('../models/index');
const {ArtistReport} = require('../models/index');
const DeezerApi = require('../lib/deezer-api.js');
const ArtistStats = require('../lib/artist-report');

router.get('/artist/favorite', function (req, res) {
    // const deezerArtistId = req.body.artistId;
    // const userId = req.params.userId;

    const artistApi = new DeezerApi();
    artistApi.fetchArtistInfo(deezerArtistId)
        .then((artistInfo) => {
            User.findOne({where: {id: 2}})
                .then((user) => {
                    Artist.create({
                        userId: user.id,
                        name: artistInfo.name,
                        deezerArtistId: artistInfo.id,
                        pictureUrl: artistInfo.picture_xl
                    })
                        .then((createdArtist) => {
                            const artistStats = new ArtistStats();
                            artistStats.getStats(deezerArtistId)
                                .then((stats) => {
                                    ArtistReport.create({
                                        artistId: createdArtist.id,
                                        totalAvgDuration: stats.totalAverageDuration,
                                        totalAvgRank: stats.totalAverageRank
                                    })
                                        .then((artistReport) => {

                                            // return res.redirect('back')

                                            Artist.findAll({
                                                where: {userId: 2},
                                                include: [{model: ArtistReport, as: 'artistReport'}]
                                            })
                                                .then((artistFav) => {
                                                    console.log('Created user', {
                                                        id: artistFav.id,
                                                        artiststats: artistFav.fullAsosiation
                                                    });
                                                    const artistFavInfo = {
                                                        artistFav: artistFav,
                                                        artistReports: artistReport
                                                    };
                                                    res.render('user-favorites', artistFavInfo)
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
*/