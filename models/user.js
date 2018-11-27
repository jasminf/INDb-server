

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    getterMethods   : {
      fullName: function()  {
        return this.firstName + ' ' + this.lastName;
      }
    },
  });


  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};