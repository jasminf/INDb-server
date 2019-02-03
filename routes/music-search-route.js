const express = require('express');
const router = express.Router();

const ArtistSearch = require('../lib/deezer-search');

router.get('/artist/:searchQuery', (req, res, next)=> {
    const { searchQuery } = req.params;

    const artistSearch = new ArtistSearch();
    artistSearch.searchArtist(searchQuery)
        .then((search) => {
            res.json({search});
        })
        .catch(next);
});

router.get('/album/:searchQuery', (req, res, next)=> {
    const { searchQuery } = req.params;

    // TODO: add search api for albums
    // https://api.deezer.com/search/album?q=Frizzle
});


module.exports = router;





