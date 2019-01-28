const express = require('express');
const MarvelApi = require('./marvel-api');
const _ = require('lodash');

const SEARCH_LIMIT = 10;
class marvelSearch {
  
  constructor() {
    this.api = new MarvelApi();
  }
  isValid(characterName) {
    return !_.isEmpty(characterName);
  }
  fetchCharacters(characterName, limit = SEARCH_LIMIT) {
    return new Promise((resolve, reject) => {
      if (!this.isValid(characterName)) {
        return resolve({searchResults: []});
      }
      else {
        this.api.fetchComicsCharacters(characterName)
          .then((charactersList) => {
            const searchResults = charactersList.slice(0, limit).map((charactersInfo) => {
              return charactersInfo;
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
module.exports = marvelSearch;
