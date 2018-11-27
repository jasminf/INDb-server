const _ = require('lodash');
const DeezerApi = require('./deezer-api.js');


class ArtistReport {

    constructor() {
        this.api = new DeezerApi();
    }

    _fetchAlbums(artistId) {
        return this.api.fetchArtistInfoAlbums(artistId)
            .then((albums) => {
                const fetchAlbumsPromisesArray = albums.map((album) => {
                    return this.api.fetchAlbumById(album.id);
                });
                return Promise.all(fetchAlbumsPromisesArray);

            })
    }


    _buildReport(albums) {
        const avgDurationTrackPerAlbum = {};
        const avgRankTrackPerAlbum = {};
        let totalDurationSum = 0;
        let totalTankSum = 0;

        albums.forEach((album) => {
            const {id: albumId} = album;
            const albumTracks = album.tracks.data.map((track) => {
                const trackInfo = {
                    rank: track.rank,
                    duration: track.duration
                };
                return trackInfo;
            });

            const tracksDurationSum = _.sumBy(albumTracks, 'duration');  //Adding all the tracks duration together.
            const avgAlbumTrackDuration = (tracksDurationSum === 0) ? 0 : tracksDurationSum / albumTracks.length;  // calculate album track Averages
            totalDurationSum += tracksDurationSum;
            avgDurationTrackPerAlbum[albumId] = avgAlbumTrackDuration; // album track Averages

            const tracksRankSum = _.sumBy(albumTracks, 'rank');
            const avgTrackRank = (tracksRankSum === 0) ? 0 : tracksRankSum / albumTracks.length;
            totalTankSum += tracksRankSum;
            avgRankTrackPerAlbum[albumId] = avgTrackRank; // album track Averages
        });

        const durationTotalAverage = totalDurationSum / albums.length;
        const rankTotalAverage = totalTankSum / albums.length;

        return {
            duration: {
                totalAverage: durationTotalAverage,
                albumAverages: avgDurationTrackPerAlbum,
            },
            rank: {
                totalAverage: rankTotalAverage,
                albumAverages: avgRankTrackPerAlbum,
            }
        };
    }

    getStats(artistId) {
        return new Promise((resolve, reject) => {
            this._fetchAlbums(artistId)
                .then((albums) => {
                    const report = this._buildReport(albums);
                    resolve(report);
                })
                .catch((error) => {
                    console.error("api Error", error);
                    reject(error);
                })
        })
    }

}

module.exports = ArtistReport;


// Lodash: calculate sum
// const durationSum = _.sumBy(albumResultsArray, album => album.duration);
