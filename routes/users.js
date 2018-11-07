var express = require('express');
var router = express.Router();
var connection = require("./db.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  database.connect_db(database.con);
  var Members = database.query_table(database.con, 'Member');
  res.json(Members)

  database.con.end()

});


module.exports = router;
