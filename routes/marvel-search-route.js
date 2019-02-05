const express = require('express');
const router = express.Router();
const MarvelCharacterSearch = require('../lib/search/marvel-chracter-search');
const MarvelComicSearch = require('../lib/search/marvel-comic-search');

router.get('/character/:searchQuery', (req, res, next)=> {
  const { searchQuery } = req.params;

  const marvelCharacterSearch = new MarvelCharacterSearch();
  marvelCharacterSearch.fetchCharacters(searchQuery)
    .then((search) => {
      res.json({search});
    })
    .catch(next);
});

router.get('/comics/:searchQuery', (req, res, next)=> {
  const { searchQuery } = req.params;

  const marvelComicSearch = new MarvelComicSearch();
  marvelComicSearch.fetchComics(searchQuery)
    .then((search) => {
      res.json({search});
    })
    .catch(next);

});


module.exports = router;





