var express = require('express');
var config = require('./config.js');
var engagementSchema = require('./../schema/engagementSchema');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("Engagements GET");
	console.log(req.body);
});

router.post('/', function(req, res, next) {
	console.log("Engagements POST");
	console.log(req.body);
});

module.exports = router;