const express = require('express');
const goodreadsApi = require('./goodreads-api');
const _ = require('lodash');

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
            const searchResults = BooksList.slice(0, limit).map((BooksInfo) => {
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
