var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {

    const viewData = {
      title: 'Search Artist'
    };
    res.render('music-views/deezer-search', viewData);
});

router.post('/artists',(artistName)=>{

});

module.exports = router;