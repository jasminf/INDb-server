'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ArtistReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // ignoreDuplicates: false

      },
      totalAvgDuration: {
        defaultValue: 0.0,
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      totalAvgRank: {
        defaultValue: 0.0,
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ArtistReports');
  }
};