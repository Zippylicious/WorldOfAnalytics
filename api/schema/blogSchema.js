var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
	date: Date,
	title: String,
	byline: String,
	body: String
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;