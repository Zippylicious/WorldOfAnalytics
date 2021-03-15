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

app.use('/admin/contact', contactRouter);
app.use('/admin/engagements', engagementsRouter);
app.use('/admin/share', shareRouter);
app.use('/admin/about', aboutRouter);
app.use('/admin/blog', blogRouter);
app.use('/admin/books', bookRouter);
app.use('/admin/user', userRouter);

// Use static built react front-end. DO NOT USE FOR REACT DEVELOPMENT (its static, duh)
//app.use('*', express.static('./public'));

var uri = `mongodb+srv://${config.db.username}:${config.db.password}@db1.3sdoz.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true});

module.exports = app;
