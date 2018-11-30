var express = require('express');
var router = express.Router();
var comicsListArr = require('./MOCK_DATA');


/* GET comics/view_all */
router.get('/view_all', function (req, res) {
    const viewData = {
        title: 'Marvel Comics!!!!',
        comicsList: comicsListArr,

    };
    res.render('comicss/view_all', viewData);
  
});



// GET comics/view/ID

router.get('/view/:comicId', function (req, res, next) {
    const comicId = req.params.comicId;

    // find by id
    const comic = comicsListArr.find( (comics)=> {
    return comics.id === comicId;
  });;

    const viewData = {
        title: comic.title,
        date: comic.date,
        coverThumb: comic.coverThumb,
        coverFull: comic.coverFull,
        morInfoo: comic.morInfoo,
        wikiData: comic.wikiData
    };


    res.render('comicss/view_one', viewData);
});


module.exports = router;
