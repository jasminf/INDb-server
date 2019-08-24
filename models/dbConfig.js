
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/app-db-dev', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err)
});

db.once('open', function() {
  console.log('MongoDB connected!')
});