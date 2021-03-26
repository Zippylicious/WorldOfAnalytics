const express = require('express');
const config = require('./config.js');
const Books = require('./../schema/bookSchema');
const withAuth = require('./authentication.js');
const router = express.Router();

router.get('/', function(req, res, next) {
	Books.find().exec(function(err, books) {
		if(err) {
			console.log(err);
			res.status(500);
			res.send("Get Books Failed");
		} else {
			res.send(books);
		}
	})
});

router.post('/', withAuth, function(req, res, next) {
	var newBook = new Books({
		title: req.body.title,
		sampleLink: req.body.sampleLink.replace("embed", "card"),
		coverImage: req.body.coverImage,
		description: req.body.description,
		fromTheAuthor: req.body.fromTheAuthor,
		inPraiseOf: req.body.inPraiseOf,
		buyBookLink: req.body.buyBookLink,
		buyAudiobookLink: req.body.buyAudiobookLink,
		translatedLanguages: req.body.translatedLanguages.replace(/\s+/g, '')
	});

	newBook.save(function(err, result) {
		if(err) {
			console.log(err);
			res.status(500);
			res.send("Post Book Failed");
		} else {
			console.log(result);
			res.status(200);
			res.send(result);
		}
	});
});

module.exports = router;