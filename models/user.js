
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    getterMethods   : {
      fullName: function()  {
        return this.firstName + ' ' + this.lastName;
      }
    },
  });

  User.prototype.validPassword = (password)=> {
    return true; // TODO
  };

  User.associate = function(models) {
    const { User, List } = models;

    User.hasMany(List, {as: 'lists', foreignKey: 'userId'});
    List.belongsTo(User, {as: 'user', foreignKey: 'userId'});
  };

  return User;
};
