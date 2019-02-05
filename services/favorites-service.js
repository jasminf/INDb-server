const { List, Favorite, Artist } = require('../models');

const DeezerApi = require('../lib/api/deezer-api');

class FavoritesService {

  saveArtist(userId, deezerArtistId) {
    return this._findOrCreateArtist(deezerArtistId)
      .then( (artist)=> {
        return this._findOrCreateDefaultList(userId, List.Type.Artist)
          .then( (list)=> {
            return this._saveFavorite(artist.id, list.id, Favorite.Type.Artist)
              .then( (createdFavorite)=> {
                return createdFavorite;
              })
          })
      })
  }

  _findOrCreateArtist(deezerArtistId) {
    return Artist.findOne({where: {deezerArtistId}})
      .then((foundArtist) => {

        if (foundArtist) {
          return foundArtist;
        } else {

          return this._fetchArtistInfoFromDeezer(deezerArtistId)
            .then( (artistInfo)=> {

              const {
                name: artistName,
                picture_xl: pictureUrl
              } = artistInfo;

              return Artist.create({
                deezerArtistId,
                name: artistName,
                pictureUrl
              })
                .then((createdArtist) => {
                  return createdArtist;
                })

            })
        }
      })
  }

  _saveFavorite(relationId, listId, favoriteType) {
    return Favorite
      .findOrCreate({
        where: {listId, relationId, type: favoriteType},
        defaults: { }
      })
      .spread((favorite, created) => {
        return favorite
      });
  }

  _findOrCreateDefaultList(userId, listType) {
    const defaultTitle = List.DefaultListTitle[listType];
    return List
      .findOrCreate({
        where: {isDefault: true, type: listType, userId},
        defaults: { name: defaultTitle }
      })
      .spread((list, created) => {
        return list
      });
  }

  _fetchArtistInfoFromDeezer(deezerArtistId) {
    const deezerApi = new DeezerApi();
    return deezerApi.fetchArtistInfo(deezerArtistId)
      .then((artistInfo) => {
        return artistInfo;
      })
  }

}

module.exports = FavoritesService;