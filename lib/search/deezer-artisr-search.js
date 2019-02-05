const express = require('express');
const DeezerApi = require('../api/deezer-api.js');
const _ = require('lodash');

const SEARCH_LIMIT = 5;
class ArtistSearch {
    constructor() {
        this.api = new DeezerApi();
    }
    isValid(artistName) {
        return !_.isEmpty(artistName);
    }
    searchArtist(artistName, limit = SEARCH_LIMIT) {
        return new Promise((resolve, reject) => {
            if (!this.isValid(artistName)) {
                return resolve({searchResults: []});
            }
            else {
                this.api.fetchArtistSearchByName(artistName)
                    .then((artistList) => {
                        const searchResults = artistList.slice(0, limit).map((artistInfo) => {
                            return artistInfo;
                        });
                        resolve(searchResults);
                    })
                    .catch(function (error) {
                        console.error("api Error", error);
                        reject(error);
                    })
            }
        });
    }
}

module.exports = ArtistSearch;