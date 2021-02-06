var express = require('express');
var config = require('./config.js');
var Blog = require('./../schema/blogSchema.js');
var moment = require('moment');
var router = express.Router();

router.post('/', function(req, res, next) {
	const newPost = new Blog({
		date: moment().format("MM/DD/YYYY"),
		title: req.body.title,
		byline: req.body.byline,
		body: req.body.body
	});

	newPost.save(function(err, result) {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
		}
	})
});

router.get('/posts', function(req, res, next) {
	Blog.find().exec(function(err, posts) {
		if(err) {
			console.log(err);
			res.status(500);
			res.send("Failure to get posts");
		} else {
			res.send(posts);
		}
	});
});

router.get('/post/:id', function(req, res, next) {
	Blog.find( { _id: { $eq: req.params.id } } ).exec(function(err, posts) {
		if(err) {
			console.log(err);
			res.status(500);
			res.send("Failure to get posts");
		} else {
			res.send(posts);
		}
	});
});

module.exports = router;