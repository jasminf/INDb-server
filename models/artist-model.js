const mongoose = require('mongoose');

let schema = mongoose.Schema({

  artistName:{
    type :String,
    required: true
  },
  artistId:{
    type :String,
    required: true
  },

});
module.exports = mongoose.model('Artist', schema);