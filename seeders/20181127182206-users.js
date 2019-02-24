'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Jasmin',
      lastName: 'Farhi',
      password: '12345',
      email: 'jasmin@email.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {email: 'jasmin@email.com'}, {});
  }
};
