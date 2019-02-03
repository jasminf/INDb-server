var axios = require('axios');

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
        console.log(response.data);
        return this.handleResponse(response);

          // .GoodreadsResponse.search.results.work.best_book;
      // .search.results.work.best_book
      })
      .catch((error) => {
        this.handleRequestError(error)
      });
  };
}
module.exports = goodreadsApi;