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
	newShare.save(function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
});

router.get('/comments/:id', function(req, res, next) {
	var query = ShareComment.find({ parentPostId: { $eq: req.params.id }});
	query.exec(function(err, comments) {
		if(err) {
			console.log(err);
		} else {
			res.send(comments);
		}
	});
});

router.post('/comments/:id', function(req, res, next) {
	const newComment = new ShareComment({
		parentPostId: req.params.id,
		author: (req.body.author === '') ? "Anonymous" : req.body.author,
		text: req.body.text,
		likes: 0
	});
	newComment.save(function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	})
});

module.exports = router;