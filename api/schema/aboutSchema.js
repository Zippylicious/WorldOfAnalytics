var mongoose = require('mongoose');

var AboutSchema = new mongoose.Schema({
	picture: Buffer,
	bio: String,
	statement: String,
	services: String
});

var About = mongoose.model('About', AboutSchema);

module.exports = About;