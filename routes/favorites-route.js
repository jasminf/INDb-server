const express = require('express');
const router = express.Router();
const FavoritesService = require('../services/favorites-service');

router.post('/save/artist', (req, res, next)=> {
  const { deezerArtistId:deezerArtistIdRaw } = req.body;
  const { user } = req;

  if (!deezerArtistIdRaw) {
    res.status(500).json({error: 'Param deezerArtistId is required!'})
  }
  const deezerArtistId = deezerArtistIdRaw.toString();

  const favoriteService = new FavoritesService();
  favoriteService.saveArtist(user.id, deezerArtistId)
    .then( (createdFavorite)=> {
      res.json({favorite: createdFavorite})
    })
    .catch(next);
});

module.exports = router;





