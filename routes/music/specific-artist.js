var express = require('express');
var router = express.Router();
var axios = require('axios');
const DeezerApi = require('../../lib/deezer-api.js');
// const ArtistReport = require('../../lib/artist-report');
const ArtistReport = require('../../lib/artist-report');
const {ArtistReports} = require('../../models/index');


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


                    const artistReport = new ArtistReport();
                    artistReport.getStats(artistId)
                        .then((createdReport) =>{
                            ArtistReports.create({
                                id: createdReport.id,
                                artistId: createdReport.artistId,
                                totalAvgDuration: createdReport.totalAvgDuration,
                                totalAvgRank: createdReport.totalAvgDuration
                            })
                                .then((createdReport)=> {
                                    console.log('Created user', {createdReport:createdReport})
                                })
                                .catch(console.error);
                        })
                        .catch();



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

