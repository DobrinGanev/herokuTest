var express = require('express');
var router = express.Router();

module.exports = function() {
  /*
   * The endpoints for addon
   */
  /* GET Assign a bind. */
  router.get('/bind', function(req, res, next) {
    res.send(res);
  });

  return router;
}
