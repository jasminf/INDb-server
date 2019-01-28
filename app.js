var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require('./lib/test-db');

var main = require('./routes/main');
var signup = require('./routes/sign-up');
var userZone = require('./routes/user');
var userFav = require('./routes/user-favorites');
var comics = require('./routes/comics');
var marvel = require('./routes/marvel-search');

var genre = require('./routes/music/music-genre');
var artists = require('./routes/music/artists');
var specific = require('./routes/music/specific-artist');
var albums = require('./routes/music/album-of-artist');
var stats = require('./routes/music/artist-stats');
var deezerSearch = require('./routes/music/deezer-search');
var saveFav = require('./routes/music/save-to-fav');
var destroyFav = require('./routes/music/destroy-from-fav');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/marvel', marvel);
app.use('/main', main);
app.use('/signup', signup);
app.use('/user', userZone);
app.use('/favorites', userFav);
app.use('/comics', comics);
app.use('/artists', artists);
app.use('/specific', specific);
app.use('/albums', albums);
app.use('/genre', genre);
app.use('/stats', stats);
app.use('/search', deezerSearch);
app.use('/save', saveFav);
app.use('/destroy', destroyFav);

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
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {error: err});
});

const port = 3001;
app.listen(port, ()=> {
  console.log(`App server started on port ${port}`);
});
