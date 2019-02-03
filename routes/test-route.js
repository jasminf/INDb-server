var express = require('express');
var router = express.Router();

const {User, List, Favorite, Artist} = require('../models');

router.get('/test_read', function (req, res, next) {

    User.findOne({
      where: {id: 1},
      include: [{model: List, as: 'lists', where: {isDefault: true}, include:
          [{model: Favorite, as: 'favorites', where: {type: Favorite.Type.Artist}, include:
              [{model: Artist, as: 'artist'}]
          }]
      }]
    }).then((user) => {

      const { lists } = user;
      const { favorites } = lists[0];

      const result = {
        user: {
          firstName: user.firstName,
        }
      };

      return res.json(result);


    }).catch(next)


});



router.get('/test_write', function (req, res, next) {

  Artist.findOne({where: {deezerArtistId: '4056'}}).then((artist) => {

    User.findOne({}).then((user) => {

      List.create({
        userId: user.id,
        name: 'Top 5 artists!',
        type: List.Type.Artist,
        isDefault: !true,
      }).then((createdList) => {

        Favorite.create({
          type: Favorite.Type.Artist,
          listId: createdList.id,
          relationId: artist.id,
        }).then((createdFavorite) => {

          return res.json({createdList, createdFavorite, artist});
        }).catch(next);


      }).catch(next)

    }).catch(next)
  }).catch(next)
});

module.exports = router;
