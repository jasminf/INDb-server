
const Type = {
  Artist: 'artist',
  Album: 'album',
};

module.exports = (sequelize, DataTypes) => {

  const Favorite = sequelize.define('Favorite', {
    type: DataTypes.STRING,
  });

  Favorite.associate = function(models) {

  };

  Favorite.Type = Type;

  return Favorite;
};