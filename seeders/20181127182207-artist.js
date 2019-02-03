'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', [{
      name: 'Primus',
      deezerArtistId: '4056',
      pictureUrl: 'https://e-cdns-images.dzcdn.net/images/artist/2a24798db533086cacaf37a8585ccfe7/1000x1000-000000-80-0-0.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', {deezerArtistId: '4056'}, {});
  }
};
