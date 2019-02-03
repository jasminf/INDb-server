var express = require('express');
var router = express.Router();
const {User} = require('../../models/index');
const {Artist} = require('../../models/index');
const {ArtistReport} = require('../../models/index');
const DeezerApi = require('../../lib/deezer-api.js');
const ArtistStats = require('../../lib/artist-report');

router.post('/save_favorite', function (req, res, next) {
    const deezerArtistId = req.body.artistId;

    User.findOne({where: {id: 2}})
        .then((user) => {

            Artist.findOne({where: {deezerArtistId, userId: user.id}})
                .then( (foundArtist)=> {
                    if (!foundArtist) {

                        const artistApi = new DeezerApi();
                        artistApi.fetchArtistInfo(deezerArtistId)
                            .then((artistInfo) => {
                                //if not found create a new artist
                                createArtistAndReport(user.id, artistInfo)
                                    .then( (createdArtist)=> {
                                        console.log('Artist created', createdArtist.id);
                                        return res.redirect('/search');
                                    })
                                    .catch(console.error);
                            })
                            .catch(function (error) {
                                console.error("api Error", error);
                                next(error);
                            });
                    } else {
                        // artist already exists
                        console.log(`This artist already exist in your favorites list`, foundArtist.id);
                        return res.redirect('/search');
                    }
                })
        })
        .catch(console.error);

});

const createArtistAndReport = (userId, artistInfo)=> {

    const deezerArtistId = artistInfo.id;

    return Artist.create({
        userId,
        deezerArtistId,
        name: artistInfo.name,
        pictureUrl: artistInfo.picture_xl
    })
        .then((createdArtist) => {
            const artistStats = new ArtistStats();
            return artistStats.getStats(deezerArtistId)
                .then((stats) => {
                    return ArtistReport.create({
                        artistId: createdArtist.id,
                        totalAvgDuration: stats.totalAverageDuration,
                        totalAvgRank: stats.totalAverageRank
                    })
                        .then(() => {
                            return createdArtist;
                            // return res.json(stats);
                        })
                })
        })
};

module.exports = router;



