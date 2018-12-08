'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Jasmin',
      lastName: 'Farhi',
      email: 'jasmin@email.com',
        password:'12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {email: 'jasmin@email.com'}, {});
  }
};
