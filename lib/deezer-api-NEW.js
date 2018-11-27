
/*
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

    _handleRequestError(error) {
        console.error("Deezer API Error", error);
        throw error;
    }
//method
    fetchAllGenreMusic() {
        return this.client.get('/genre')
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });

    };


    fetchArtistsGenreById(genreId) {
        return this.client.get(`/genre/${genreId}/artists`)
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });
    };


    fetchArtistAlbums(artistId) {
        return this.client.get(`/artist/${artistId}/albums`)
            .then(function (response) {
                return this._handleResponse(response).data;
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });
    }

    fetchArtistById(artistId) {
        return this.client.get(`/artist/${artistId}`)
            .then(function (response) {
                return this._handleResponse(response);
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });
    }


    fetchTracksAlbumById(albumID) {
        return this.client.get(`/album/${albumID}/tracks`)
            .then((response) => {
                return this._handleResponse(response).data;
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });
    };



    fetchAlbumById(albumID) {
        return this.client.get(`/album/${albumID}`)
            .then((response) => {
                return this._handleResponse(response);
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });
    };

    /**
     * // DRY
     _makeRequestWithData(url) {
        return this._makeRequest(url, 'data')
    }

     _makeRequest(url, dataKey = null) {
        return this.client.get(url)
            .then((response) => {
                const responseData = this._handleResponse(response);
                if (dataKey) {
                    return responseData[dataKey];
                } else {
                    return responseData;
                }
            })
            .catch((error)=> {
                this._handleRequestError(error)
            });
    }


     fetchAllGenreMusic() {
        return this._makeRequest('/genre');
    };

}

// let api = new DeezerApi();
//
// let api;
//
// function getInstance() {
//     if(!api){
//         api = new DeezerApi();
//     }
//     return api;
// }

module.exports = DeezerApi;
     */
