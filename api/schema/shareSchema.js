var mongoose = require('mongoose');

var ShareSchema = new mongoose.Schema({
	text: String,
	link: String,
	likes: Number
});

var Share = mongoose.model('Share', ShareSchema);

module.exports = Share;