var express = require('express');
var router = express.Router();

module.exports = function() {
  /*
   * The endpoints for user
   */
  /* GET Assign a user. */
  router.get('/assign', function(req, res, next) {
    res.send(res);
  });

  /* GET Unassign a user. */
  router.get('/unassign', function(req, res, next) {
    res.send(res);
  });

  return router;
}
