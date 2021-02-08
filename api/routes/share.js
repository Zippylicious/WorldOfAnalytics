const express = require('express');
const config = require('./config.js');
const Share = require('./../schema/shareSchema');
const ShareComment = require('./../schema/shareCommentSchema');
const withAuth = require('./authentication.js');
const router = express.Router();

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

router.post('/', withAuth, function(req, res, next) {
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
	var query = ShareComment.find({ shareId: { $eq: req.params.id }});
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
		shareId: req.params.id,
		author: (req.body.author === '') ? "Anonymous" : req.body.author,
		text: req.body.text,
		likes: 0
	});
	newComment.save(function (err, result) {
		if (err) {
			console.log(err);
			res.status(500);
			res.send();
		} else {
			console.log(result);
			res.status(200);
			res.send();
		}
	})
});

router.post('/like/:shareId', function(req, res, next) {
	Share.findOneAndUpdate(
		{ _id: req.params.shareId },
		{ $inc: { likes: 1 } },
		{ new: true }
	).exec(function(err, result) {
		if(err) {
			console.log(err);
			res.send(500)
			res.send("Could not like share");
		} else {
			res.status(200);
			res.send();
		}
	})
})

module.exports = router;