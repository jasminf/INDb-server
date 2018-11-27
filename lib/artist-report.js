const _ = require('lodash');
const DeezerApi = require('./deezer-api.js');


class ArtistReport {

    constructor(artistId) {
        this.api = new DeezerApi();
        this.artistId = artistId;
    }

    getStats() {
        return new Promise((resolve, reject) => {
            this.api.fetchArtistInfoAlbums(this.artistId)
                .then((albumsList) => {
                    const fetchAlbumsPromisesArray = albumsList.map((album) => {
                        const fetchPromise = this.api.fetchAlbumById(album.id);
                        return fetchPromise;
                    });
                    const allFetchPromise = Promise.all(fetchAlbumsPromisesArray);
                    allFetchPromise
                        .then((albumResultsArray) => {
                            const trackAverages = {};
                            const rankAverages = {};
                            let durationSum = 0;
                            let rankSum = 0;
                            albumResultsArray.forEach((album) => {
                                const {id: albumId} = album;
                                const trackData = album.tracks.data.map((track) => {
                                    const trackInfo = {
                                        rank: track.rank,
                                        duration: track.duration
                                    };
                                    return trackInfo;
                                });
                                const tracksDurationSum = _.sumBy(trackData, 'duration');  //Adding all the tracks duration together.
                                const avgAlbumTrackDuration = (tracksDurationSum === 0) ? 0 : tracksDurationSum / trackData.length;  // calculate album track Averages
                                durationSum += tracksDurationSum;
                                trackAverages[albumId] = avgAlbumTrackDuration; // album track Averages

                                const tracksRankSum = _.sumBy(trackData, 'rank');
                                const avgTrackRank = (tracksRankSum === 0) ? 0 : tracksRankSum / trackData.length;
                                rankSum += tracksRankSum;
                                rankAverages[albumId] = avgTrackRank; // album track Averages
                            });
                            const durationAlbumAverages = durationSum / albumsList.length;
                            const rankAlbumAverages = rankSum / albumsList.length;

                            // console.log('In each album, the album track Averages is:', trackAverages);
                            // console.log(' The total time averages of album is:', durationAlbumAverages);
                            resolve({durationAlbumAverages, trackAverages, rankAlbumAverages, rankAverages});
                        })
                        .catch((error) => {
                            console.error("api Error", error);
                            reject(error);
                        })
                })
                .catch(function (error) {
                    console.error("api Error", error);
                    reject(error);
                })
        })
    }
}

module.exports = ArtistReport;


// Lodash: calculate sum
// const durationSum = _.sumBy(albumResultsArray, album => album.duration);
