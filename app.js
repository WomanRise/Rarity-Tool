const appRoot = require('app-root-path');
const config = require(appRoot + '/config/config.js');
var createError = require('http-errors');
var express = require('express');
const fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var punksRouter = require('./routes/punks');

// ... existing requires
const incrementVisitorCount = require('./visitorCounter');

var app = express();



// ✨ Allow this site to be embedded in any iframe
app.use((req, res, next) => {
  // Remove any existing X-Frame-Options header
  res.removeHeader('X-Frame-Options');
  // Allow any origin to frame this content (for more control, replace '*' with specific domains)
  res.setHeader('Content-Security-Policy', "frame-ancestors *");
  // Older browsers fallback
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  res.on('finish', () => {
    console.log(`REQUEST : ${req.originalUrl}`);
    if (res.statusCode === 200) {
      const visitCount = incrementVisitorCount();
      console.log(`Visitor count: ${visitCount} REQUEST : ${req.originalUrl}`);
    }
  });
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.app_name = config.app_name;
app.locals.ga_code = config.ga;
app.locals.collection_contract_address = config.collection_contract_address;
app.locals.collection_name = config.collection_name;
app.locals.collection_id_from = config.collection_id_from;
app.locals.content_image_is_video = config.content_image_is_video;
app.locals.content_image_frame = config.content_image_frame;
app.locals.item_path_name = config.item_path_name;
app.locals.use_wallet = config.use_wallet;

app.use('/', indexRouter);
app.use('/'+config.item_path_name, punksRouter);

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
