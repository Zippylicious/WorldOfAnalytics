var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('./routes/config');

var contactRouter = require('./routes/contact');
var engagementsRouter = require('./routes/engagements');
var shareRouter = require('./routes/share');
var aboutRouter = require('./routes/about');
var blogRouter = require('./routes/blog');
var bookRouter = require('./routes/books');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/contact', contactRouter);
app.use('/engagements', engagementsRouter);
app.use('/share', shareRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/books', bookRouter);
app.use('/user', userRouter);

// Use static built react front-end. DO NOT USE FOR REACT DEVELOPMENT (its static, duh)
//app.use('*', express.static('./public'));

var uri = `mongodb+srv://${config.db.username}:${config.db.password}@db1.3sdoz.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
