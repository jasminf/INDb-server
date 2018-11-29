var express = require('express');
var router = express.Router();
var axios = require('axios');

const ArtistSearch = require('../../lib/deezer-search');

//artist/search/{QUERY}"
router.get('/artists/:artistName', function (req, res) {
    const artistName = req.params.artistName;

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
});

module.exports = router;
