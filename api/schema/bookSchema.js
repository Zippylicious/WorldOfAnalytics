var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
	
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;