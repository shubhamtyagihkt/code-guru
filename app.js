var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var defaultRouter = require('./routes/default');
var adminRouter = require('./routes/admin');
var hbs = require('hbs');
var mongoose = require('mongoose');
var {mongo_url} = require('./config');

mongoose.connect(mongo_url, {useUnifiedTopology: true, useNewUrlParser: true })
  .then(success => {
    console.log('MongoDB connected succefully');
  })
  .catch(error => {
    console.log('Error in connecting MongoDB');
  })

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', defaultRouter);
app.use('/admin', adminRouter);

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
