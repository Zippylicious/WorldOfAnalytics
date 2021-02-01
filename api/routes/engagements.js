var express = require('express');
var config = require('./config.js');
var engagementSchema = require('./../schema/engagementSchema');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("Engagements GET");
});

router.post('/', function(req, res, next) {
	console.log("Engagements POST");
});

module.exports = router;