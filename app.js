console.log('1meew');

const express = require('express');
const path = require('path');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('./models/dbConfig');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setup routes

app.use('/', require('./routes/user-router'));
// app.use('/search/book', require('./routes/goodreads-search-route'));
app.use('/search/music', require('./routes/music-search-route'));
// app.use('/search/marvel', require('./routes/marvel-search-route'));
// app.use('/favorites', require('./routes/favorites-route'));
// // app.use('/create-user', require('./routes/sign-up'));
// app.use('/user', require('./routes/user-profile-router'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render('error', {error: err});
});

const port = 3001;
app.listen(port, ()=> {
  console.log(`App server started on port ${port}`);
});

