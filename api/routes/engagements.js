var express = require('express');
var moment = require('moment');
var config = require('./config.js');
var Engagement = require('./../schema/engagementSchema');
var router = express.Router();

router.get('/past', function(req, res, next) {
	var query = Engagement.find({ date: {$lt: moment()} });
	query.exec(function(err, pastEngagements) {
		if(err) {
			console.log(err);
		} else {
			res.send(pastEngagements);
		}
	});
});

router.get('/upcoming', function(req, res, next) {
	console.log("UPCOMING Engagements GET");
	var query = Engagement.find({ date: {$gte: moment()} });
	query.exec(function(err, upcomingEngagements) {
		if(err) {
			console.log(err);
		} else {
			res.send(upcomingEngagements);
		}
	});
});

router.post('/', function(req, res, next) {
	var date = req.body.date + " " + req.body.time + ":00";
	const newEngagement = new Engagement({
		date: date,
		event: req.body.event,
		eventLink: req.body.eventLink,
		registrationLink: req.body.registrationLink,
		cost: req.body.cost,
		isVirtual: req.body.isVirtual,
		recordingLink: req.body.recordingLink,
		presentationLink: req.body.presentationLink
	});
	newEngagement.save(function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
});

module.exports = router;