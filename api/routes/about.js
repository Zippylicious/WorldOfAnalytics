const express = require('express');
const config = require('./config.js');
const About = require('./../schema/aboutSchema.js');
const withAuth = require('./authentication.js');
const router = express.Router();

router.put('/', withAuth, function(req, res, next) {
	var update = {};
	if(req.body.picture) {
		//update["picture"] = req.body.picture;
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
			//var base64Picture = Buffer.from(result.picture).toString('base64');
			res.status(200);
			res.send({
				picture: "",
				bio: result.bio,
				services: result.services,
				statement: result.statement
			});
		}
	});
});

module.exports = router;