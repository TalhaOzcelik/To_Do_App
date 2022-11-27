var express = require('express');
var router = express.Router();
var mysql=require('mysql');


var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'Users'
});



router.post('/', function(req, res, next) {
  res.send({message='Halal olsun dayı oğlı'});
});

module.exports = router;
