const express = require('express');
const DeezerApi = require('./deezer-api.js');

const SEARCH_LIMIT = 5;


class ArtistSearch {

    constructor() {
        this.api = new DeezerApi();
    }



    /**
     * TODO: Add validation here
     * return promise with empty array when search query is invalid
     */
    searchArtist(artistName, limit = SEARCH_LIMIT) {
            let invalidQuery = [];
            if (artistName === ``) {
                return invalidQuery;
            }

        else {
            return new Promise((resolve, reject) => {
                this.api.fetchArtistSearchByName(artistName)
                    .then((artistList) => {
                        const searchResults = artistList.slice(0, limit).map((artistInfo) => {

                            const artistSearch = {
                                artistName: artistInfo.name,
                                artistId: artistInfo.id
                            };
                            return artistSearch;
                        });
                        resolve(searchResults);
                    })
                    .catch(function (error) {
                        console.error("api Error", error);
                        reject(error);
                    })
            })
        }

    }
}

module.exports = ArtistSearch;