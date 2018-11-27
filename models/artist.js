

module.exports = (sequelize, DataTypes) => {

  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    deezerArtistId: DataTypes.STRING,
    pictureUrl: DataTypes.STRING,
  }, {

  });


  Artist.associate = function(models) {
    const { User, Artist } = models;

    User.hasMany(Artist, {as: 'artists', foreignKey: 'userId'});
    Artist.belongsTo(User, {as: 'artist', foreignKey: 'userId'});
  };

  return Artist;
};