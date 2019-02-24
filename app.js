const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require("express-session");
const { ensureLoggedIn } = require('connect-ensure-login');
// require('./lib/test-db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('cookie-parser')());
app.use(session({ secret: "mUGAl@Xm9wh$#HvpzwT6NXEOv%qkjq",resave:true, saveUninitialized:true}));

app.use(passport.initialize());
app.use(passport.session());

// setup routes
app.use('/auth', require('./routes/auth-router'));
app.use('/', require('./routes/user-router'));

app.use(ensureLoggedIn('/login'));

app.get('/homepage', function(req, res, next) {
  res.json({user: req.user});
});

app.use('/search/book', require('./routes/goodreads-search-route'));
app.use('/search/music', require('./routes/music-search-route'));
app.use('/search/marvel', require('./routes/marvel-search-route'));
app.use('/favorites', require('./routes/favorites-route'));
// app.use('/create-user', require('./routes/sign-up'));
app.use('/user', require('./routes/user-profile-router'));



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
