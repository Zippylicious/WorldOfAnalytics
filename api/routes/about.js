var express = require('express');
var config = require('./config.js');
var About = require('./../schema/aboutSchema.js');
var router = express.Router();

router.put('/', function(req, res, next) {
	var update = {};
	if(req.body.picture) {
		update["picture"] = req.body.picture;
	}
	if(req.body.bio) {
		update["bio"] = req.body.bio;
	}
	if(req.body.services) {
		update["services"] = req.body.services;
	}
	if(req.body.statement) {
		update["statement"] = req.body.statement;
	}

	About.findOneAndUpdate(null, update, {new: true, upsert: true}).exec( function(err, result) {
		if(err) {
			console.log(err);
			res.status(500);
		} else {
			console.log(result);
			res.status(200);
		}
	});
	res.send("About PUT complete");
});

router.get('/', function(req, res, next) {
	About.findOne().exec( function(err, result) {
		if(err) {
			console.log(err);
			res.status(500);
			res.send("About GET failure");
		} else {
			console.log(result);
			res.status(200);
			res.send(result);
		}
	});
});

module.exports = router;