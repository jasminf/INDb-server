var axios = require('axios');
const convert  = require('xml-js');
const express = require('express');

const goodreadsApiKey = `4KCDbp5HD2vdrW7jWzZ7A`;
// =Enders Game
class goodreadsApi {

  constructor() {
    this.client = axios.create({
    });
  }
  handleResponse(response) {
    const responseData = response.data;
    if (responseData.error) {
      throw responseData.error;
    }
    return responseData || {};
  }
  handleRequestError(error) {
    console.error("goodReads API Error", error);
    throw error;
  }
  fetchBookTitle(bookTitle) {
    return this.client.get(`https://www.goodreads.com/search/index.xml?key=${goodreadsApiKey}&q=${bookTitle}`)
      .then((response) => {
        // console.log(response.data);
        return this.handleResponse(response);

      // .GoodreadsResponse.search.results.work[best_book]
          // .GoodreadsResponse.search.results.work[best_book];
      // GoodreadsResponse.
      })
      .catch((error) => {
        this.handleRequestError(error)
      });
  };
}
// const api = new goodreadsApi();
// api.fetchBookTitle('Dune').then( (bookDataXML)=> {
//   //  console.log(bookDataXML);
//
//   const bookJson = convert.xml2json(bookDataXML,
//     {compact: true, spaces: 4});
//
//   console.log(bookJson)
//
// }).catch(console.error);


module.exports = goodreadsApi;
