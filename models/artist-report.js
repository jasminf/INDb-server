

module.exports = (sequelize, DataTypes) => {

  const ArtistReport = sequelize.define('ArtistReport', {
    totalAvgDuration: DataTypes.DECIMAL,
    totalAvgRank: DataTypes.DECIMAL,
  }, {
      getterMethods   : {
          fullName: function()  {
              return this.totalAvgDuration + ' ' + this.artistId;
          }
      },
  });


  ArtistReport.associate = function(models) {
    // associations can be defined here
    const { Artist, ArtistReport } = models;

    Artist.hasOne(ArtistReport, {as: 'artistReport', foreignKey: 'artistId'});
    ArtistReport.belongsTo(Artist, {as: 'artist', foreignKey: 'artistId'});
  };

  return ArtistReport;
};