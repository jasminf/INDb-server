var express = require('express');
var router = express.Router();
var axios = require('axios');

let DeezerApi = require('../../lib/deezer-api.js');


router.get('/', function (req, res) {

    let apiartists = new DeezerApi();

    apiartists.fetchAllGenreMusic()

      .then( (genreDta)=> {

          const viewData = {
              title: 'Music genre',
              data: genreDta
          };
          // res.json(genreDta);
          res.render('music-views/music-genre', viewData);
      })

      .catch(function (error) {
          console.error("api Error", error);
          res.send(error.message);
      });


});

module.exports = router;
