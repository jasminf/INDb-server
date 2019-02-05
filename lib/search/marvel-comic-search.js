const MarvelApi = require('../api/marvel-api');
const _ = require('lodash');

const SEARCH_LIMIT = 10;
class MarvelComicSearch {
  
  constructor() {
    this.api = new MarvelApi();
  }
  isValid(comicBookTitle) {
    return !_.isEmpty(comicBookTitle);
  }
  fetchComics(comicBookTitle, limit = SEARCH_LIMIT) {
    return new Promise((resolve, reject) => {
      if (!this.isValid(comicBookTitle)) {
        return resolve({searchResults: []});
      }
      else {
        this.api.fetchComicBookByTitle(comicBookTitle)
          .then((comicBookList) => {
            const searchResults = comicBookList.slice(0, limit).map((comicBookInfo) => {
              return comicBookInfo;
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
module.exports = MarvelComicSearch;
