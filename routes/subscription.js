var express = require('express');
var router = express.Router();


module.exports = function() {
  /*
   * The endpoints for subscription
   */
  /* GET Create a subscription. */
  router.get('/create', function(req, res, next) {
    res.send(res);
  });

  /* GET Change a subscription. */
  router.get('/change', function(req, res, next) {
    res.send(res);
  });

  /* GET Cancel a subscription. */
  router.get('/cancel', function(req, res, next) {
    res.send(res);
  });

  /* GET Update status of a subscription. */
  router.get('/status', function(req, res, next) {
    res.send(res);
  });

  return router;
}
