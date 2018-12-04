var express = require('express');
var router = express.Router();
var axios = require('axios');

const DeezerApi = require('../../lib/deezer-api.js');

router.get('/:genreId', function (req, res) {
    const genreId = req.params.genreId;

    const apigenre = new DeezerApi();
    apigenre.fetchArtistsGenreById(genreId)
        .then( (artistsData)=> {
            const viewData = {
                  title: 'Music Artist',
                  data: artistsData
                };
            res.render('music-views/artists', viewData);
            // res.json(artistsData);
        })
        .catch( (error)=>{
            console.error(error)
        })
    });


module.exports = router;




