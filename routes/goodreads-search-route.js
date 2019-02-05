var express = require('express');
var router = express.Router();
const booksSearch = require('../lib/search/goodreads-search');


router.get('/title/:searchQuery', (req, res, next)=> {
  const { searchQuery } = req.params;

  const bookTitleSearch = new booksSearch();
  bookTitleSearch.fetchBooks(searchQuery)
    .then((search) => {
      res.json({search});
      console.log(search);
    })
    .catch(next);
});


module.exports = router;





