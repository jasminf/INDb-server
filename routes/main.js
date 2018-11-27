var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

  const viewData = {
        title: 'Maim App',
        linkOne: ' Comics list',
        linkTwo: ' Music list',
        // linkThree: 'list of albums of specific artist'

      };

  res.render('maim', viewData);

});

module.exports = router;
