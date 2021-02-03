var mongoose = require('mongoose');

var ShareCommentSchema = new mongoose.Schema({
	parentPostId: Number,
	author: String,
	text: String,
	likes: Number,
});

var ShareComment = mongoose.model('ShareComment', ShareCommentSchema);

module.exports = ShareComment;