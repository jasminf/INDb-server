var express = require('express');
var router = express.Router();
const { List } = require('../models');

router.get('/lists', function (req, res, next) {

  List.findAll({where: {userId: 1}})
    .then((userLists) => {
      console.log('All the lists that hes to that user:',userLists );
      return res.json(userLists);
    })
    .catch(next);
});

module.exports = router;
