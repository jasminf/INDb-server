var express = require('express');
var router = express.Router();
var axios = require('axios');
const DeezerApi = require('../../lib/deezer-api.js');
// const ArtistReport = require('../../lib/artist-report');


router.get('/:artistId/', function (req, res) {
    const artistId = req.params.artistId;

    const apialbum = new DeezerApi();
    apialbum.fetchArtistInfoAlbums(artistId)

        .then((dataMus) => {

            const viewDataAlbumss = {
                title: 'artist and albums',
                dataAlb: dataMus,
            };


            const apiaartist = new DeezerApi();
            apiaartist.fetchArtistInfo(artistId)

                .then((dataArtist) => {

                    const viewDataArtist = {
                        title: ' Artist!!!',
                        dataAr: dataArtist,

                    };

                    res.render('music-views/specific-artist', ({
                        dataAlb: dataMus,
                        dataAr: dataArtist
                    }));

                    // res.json({
                    //     dataAlb: dataMus,
                    //     dataAr: dataArtist,
                    // });

                })
        })


        .catch(function (error) {
            console.error("api Error", error);
            res.send(error.message);
        });

    //
    // const apiduration = new ArtistReport(artistId);
    // apiduration.artistReportFunc();


});

module.exports = router;

