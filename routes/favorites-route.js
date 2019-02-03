const express = require('express');
const router = express.Router();
const requireUser = require('./require-user');
const FavoritesService = require('../services/favorites-service');

router.post('/save/artist', requireUser, (req, res, next)=> {
  const { deezerArtistId } = req.body;
  const { user } = req;

  if (!deezerArtistId) {
    res.status(500).json({error: 'Param deezerArtistId is required!'})
  }

  const favoriteService = new FavoritesService();
  favoriteService.saveArtist(user.id, deezerArtistId)
    .then( (createdFavorite)=> {
      res.json({favorite: createdFavorite})
    })
    .catch(next);
});


module.exports = router;





