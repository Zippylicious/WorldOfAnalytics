var mongoose = require('mongoose');

var ShareSchema = new mongoose.Schema({
	
});

var Share = mongoose.model('Share', ShareSchema);

module.exports = Share;