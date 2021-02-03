var express = require('express');
var config = require('./config.js');
var Share = require('./../schema/shareSchema');
var ShareComment = require('./../schema/shareCommentSchema');
var router = express.Router();

router.get('/', function(req, res, next) {
	var query = Share.find();
	query.exec(function(err, shares) {
		if(err) {
			console.log(err);
		} else {
			res.send(shares);
		}
	});
});

router.post('/', function(req, res, next) {
	const newShare = new Share({
		text: req.body.text,
		link: req.body.link,
		likes: 0
	});
	newShare.save(function (err) {
		console.log(err);
	});
});

module.exports = router;