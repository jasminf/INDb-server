const express = require('express');
const goodreadsApi = require('../api/goodreads-api');

const _ = require('lodash');
const convert  = require('xml-js');

const SEARCH_LIMIT = 10;
class booksSearch {
  constructor() {
    this.api = new goodreadsApi();
  }
  isValid(bookTitle) {
    return !_.isEmpty(bookTitle);
  }
  fetchBooks(bookTitle, limit = SEARCH_LIMIT) {
    return new Promise((resolve, reject) => {
      if (!this.isValid(bookTitle)) {
        return resolve({searchResults: []});
      }
      else {
        this.api.fetchBookTitle(bookTitle)
          .then((BooksList) => {
            // const bookJson = convert.xml2json(BooksList, {compact: true, spaces: 4});
            // console.log(bookJson.GoodreadsResponse);
            // .GoodreadsResponse.search.results.work[best_book]
            const searchResults = bookJson.slice(0, limit).map((BooksInfo) => {
              return BooksInfo;
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
module.exports = booksSearch;
