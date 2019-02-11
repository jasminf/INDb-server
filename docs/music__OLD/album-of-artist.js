var express = require('express');
var router = express.Router();
var axios = require('axios');

const DeezerApi = require('../../lib/deezer-api.js');
let AlbumReport = require('../../lib/album-class.js');


router.get('/:albumID', function (req, res) {

    const albumID = req.params.albumID;

    const apialbum = new DeezerApi();
    apialbum.fetchAlbumTracksById(albumID)
    //fetchAlbumTracksById
        .then((albumData) => {

            let albumReport = new AlbumReport(albumID);
            albumReport.getStats(albumData);

            // albumReport.getStats().then((stats)=>{});

            const viewData = {
                title: 'Tracks of album',
                numTracks: albumData,
                // duration: albumData.duration
            };
            // res.json(albumData);
            res.render('music-views/albums-artist', viewData);

        })


        .catch(function (error) {
            console.error("api Error", error);
            res.send(error.message);
        });


});


module.exports = router;


