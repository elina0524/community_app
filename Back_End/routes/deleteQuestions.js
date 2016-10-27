var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require("../models/userSchema");
var registerUser = require('../api/registerUser');
var router = express.Router()

var jsonParser = bodyParser.json()
// Log user in, assume app is already connected to the database
router.get('/deleteQuestion', jsonParser, function(req, res) {
  if (!req.body) return res.send( ({"status" : "fail",
                                   "data" : "No data sent"}); )
  //parse input from json format
  res.send(registerUser.registerUser(req.body.username, req.body.password))
});
