var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
  res.render('comicss/marvel-search-characters');
});


const marvelSearch = require('../lib/marvel-search');

router.post('/character', function (req, res) {
  const characterName = req.body.search_query;

  const characterSearch = new marvelSearch();
  characterSearch.fetchCharacters(characterName)
    .then((search) => {
      res.render('comicss/search-characters', {search});
    })
    .catch(function (error) {
      console.error("api Error", error);
      res.send(error.message);
    });


});


module.exports = router;





