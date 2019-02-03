var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
  res.render('goodreads-search-books');
});


const booksSearch = require('../lib/goodreads-search');

router.post('/title', function (req, res) {
  const bookTitle = req.body.search_query;

  const bookTitleSearch = new booksSearch();
  bookTitleSearch.fetchBooks(bookTitle)
    .then((search) => {
      res.render('search-books', {search});

    })
    .catch(function (error) {
      console.error("api Error", error);
      res.send(error.message);
    });


});


module.exports = router;





