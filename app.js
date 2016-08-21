var express = require('express');
var path = require('path');
var logger = require('morgan');
var qs = require('querystring');
var appDirect = require('./appdirect-express')
var port = process.env.PORT || 8080;
var app = express();
app.use(logger('dev'));
var appDirectConfig = require('./app-direct.config')
appDirectConfig.use_mocks = true;
app.use(appDirect(app, appDirectConfig));

/**
 * Catch 404 and forward to error handler
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
module.exports = app;
