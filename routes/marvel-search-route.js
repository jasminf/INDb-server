const express = require('express');
const router = express.Router();

const MarvelSearchRoute = require('../lib/marvel-search');

router.get('/character/:searchQuery', (req, res, next)=> {
  const { searchQuery } = req.params;

  const marvelSearch = new MarvelSearchRoute();
  marvelSearch.fetchCharacters(searchQuery)
    .then((search) => {
      res.json({search});
    })
    .catch(next);
});

router.get('/comics/:searchQuery', (req, res, next)=> {
  const { searchQuery } = req.params;

  // TODO: use Marvel API fetchComicBookByTitle
});


module.exports = router;





