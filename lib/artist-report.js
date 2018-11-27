const _ = require('lodash');
const DeezerApi = require('./deezer-api.js');

const DURATION_FIELD = 'duration';
const RANK_FIELD = 'rank';


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

    _calcTotalAverage(albums, attribute) {
        const totalSum = _.sumBy(albums, (album)=> {
            const albumTracks = album.tracks.data;
            return _.sumBy(albumTracks, attribute);
        });

        return totalSum / albums.length;
    }

    _calcAvgTrackPerAlbum(albums, attribute) {
        const avgTrackPerAlbum = {};

        albums.forEach((album) => {
            const {id: albumId} = album;
            const albumTracks = album.tracks.data;

            const tracksSum = _.sumBy(albumTracks, attribute);
            const avgTrack = (tracksSum === 0) ? 0 : tracksSum / albumTracks.length;
            avgTrackPerAlbum[albumId] = avgTrack; // album track Averages
        });

        return avgTrackPerAlbum;
    }

    _buildReport(albums) {
        return {
            duration: {
                totalAverage: this._calcTotalAverage(albums, DURATION_FIELD),
                albumAverages: this._calcAvgTrackPerAlbum(albums, DURATION_FIELD),
            },
            rank: {
                totalAverage: this._calcTotalAverage(albums, RANK_FIELD),
                albumAverages: this._calcAvgTrackPerAlbum(albums, RANK_FIELD),
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
