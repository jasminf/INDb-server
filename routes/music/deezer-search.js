var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
    const viewData = {
      title: 'Search Artist'
    };
    res.render('music-views/deezer-search', viewData);
});


const ArtistSearch = require('../../lib/deezer-search');

router.post('/artists', function (req, res) {
    const artistName = req.body.search_query;

    const artistSearch = new ArtistSearch();
    artistSearch.searchArtist(artistName)
        .then((search) => {
            const viewData = {
                title: 'Search Artist',
                artistSearchResults: search
            };
            res.render('music-views/artist-search', viewData);
        })
        .catch(function (error) {
            console.error("api Error", error);
            res.send(error.message);
        });


});






module.exports = router;