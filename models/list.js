
const Type = {
  Artist: 'artist',
  Album: 'album',
};

const DefaultListTitle = {
  [Type.Artist]: 'My favorite artists',
  [Type.Album]: 'My favorite albums',
};

module.exports = (sequelize, DataTypes) => {

  const List = sequelize.define('List', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    isDefault: DataTypes.BOOLEAN,
  });


  List.associate = function(models) {
    const { List, Favorite } = models;

    List.hasMany(Favorite, {as: 'favorites', foreignKey: 'listId'});
    Favorite.belongsTo(List, {as: 'list', foreignKey: 'listId'});
  };

  List.Type = Type;
  List.DefaultListTitle = DefaultListTitle;

  return List;
};