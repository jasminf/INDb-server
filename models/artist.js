
module.exports = (sequelize, DataTypes) => {

  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    deezerArtistId: DataTypes.STRING,
    pictureUrl: DataTypes.STRING,
  });

  Artist.associate = function(models) {
    const { Favorite, Artist } = models;

    Artist.hasMany(Favorite, {as: 'favorites', foreignKey: 'relationId'});
    Favorite.belongsTo(Artist, {as: 'artist', foreignKey: 'relationId'});
  };

  return Artist;
};