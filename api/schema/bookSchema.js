var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
	sampleLink: String,
	coverImage: Buffer,
	description: String,
	fromTheAuthor: String,
	inPraiseOf: String,
	buyBookLink: String,
	buyAudiobookLink: String,
	translatedLanguages: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;