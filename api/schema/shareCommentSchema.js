var mongoose = require('mongoose');

var ShareCommentSchema = new mongoose.Schema({
	shareId: mongoose.Schema.Types.ObjectId,
	author: String,
	text: String,
	likes: Number,
	date: Date
});

var ShareComment = mongoose.model('ShareComment', ShareCommentSchema);

module.exports = ShareComment;