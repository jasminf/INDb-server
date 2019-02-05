const express = require('express');
const DeezerApi = require('../api/deezer-api.js');
const _ = require('lodash');

const SEARCH_LIMIT = 5;
class AlbumSearch {
    constructor() {
        this.api = new DeezerApi();
    }
    isValid(artistName) {
        return !_.isEmpty(artistName);
    }
    searchAlbum(albumName, limit = SEARCH_LIMIT) {
        return new Promise((resolve, reject) => {
            if (!this.isValid(albumName)) {
                return resolve({searchResults: []});
            }
            else {
                this.api.fetchAlbumSearchByName(albumName)
                    .then((albumList) => {
                        const searchResults = albumList.slice(0, limit).map((albumInfo) => {
                            return albumInfo;
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

module.exports = AlbumSearch;