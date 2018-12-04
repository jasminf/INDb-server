var express = require('express');
var router = express.Router();
var axios = require('axios');

const ArtistSearch = require('../../lib/deezer-search');

//artist/search/{QUERY}"
router.post('/artists/', function (req, res) {
    const artistName = req.body.search_query;

    const artistSearch = new ArtistSearch();
    artistSearch.searchArtist(artistName)
        .then((search) => {
            const viewData = {
                title: 'Search Artist',
                data: search
            };
            // return res.json(search);
            res.render('music-views/artist-search', viewData);
        })
        .catch(function (error) {
            console.error("api Error", error);
            res.send(error.message);
        });

    router.post('/user/favArtist',(artistId)=>{

    })
});

module.exports = router;
