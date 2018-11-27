var axios = require('axios');


class DeezerApi {

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.deezer.com',
        });
    }

    _handleResponse(response) {
        const responseData = response.data;
        if (responseData.error) {
            throw responseData.error;
        }
        return responseData || {};
    }

    static _handleRequestError(error) {
        console.error("Deezer API Error", error);
        throw error;
    }


//method
    fetchAllGenreMusic() {
        return this.client.get('/genre')
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error) => {
                DeezerApi._handleRequestError(error)
            });

    };


    fetchArtistsGenreById(genreId) {
        return this.client.get(`/genre/${genreId}/artists`)
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error) => {
                this._handleRequestError(error)
            });
    };


    fetchArtistInfoAlbums(artistId) {
        return this.client.get(`/artist/${artistId}/albums`)
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error) => {
                this._handleRequestError(error)
            });
    }

    fetchArtistSearchByName(artistName) {
        return this.client.get(`/search/artist?q=/${artistName}`)
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error) => {
                this._handleRequestError(error)
            });
    }

    fetchArtistInfo(artistId) {
        return this.client.get(`/artist/${artistId}`)
            .then((response) => {
                return this._handleResponse(response);
            })
            .catch((error) => {
                this._handleRequestError(error)
            });
    }


    fetchAlbumTracksById(albumID) {
        return this.client.get(`/album/${albumID}/tracks`)
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error) => {
                this._handleRequestError(error)
            });
    };


    fetchAlbumById(albumID) {
        return this.client.get(`/album/${albumID}`)
            .then((response) => {
                return this._handleResponse(response);
            })
            .catch((error) => {
                this._handleRequestError(error)
            });
    };

}


module.exports = DeezerApi;

