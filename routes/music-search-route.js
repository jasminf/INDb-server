const express = require('express');
const router = express.Router();
const ArtistSearch = require('../lib/search/deezer-artisr-search');
const AlbumSearch = require('../lib/search/deezer-album-search');

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

  const albumSearch = new AlbumSearch();
  albumSearch.searchAlbum(searchQuery)
    .then((search) => {
      res.json({search});
    })
    .catch(next);
    // TODO: add search api for albums
    // https://api.deezer.com/search/album?q=Frizzle
});


module.exports = router;





