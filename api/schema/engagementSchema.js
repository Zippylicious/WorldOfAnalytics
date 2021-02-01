var mongoose = require('mongoose');

var EngagementSchema = new mongoose.Schema({
	date: Date,
	event: String,
	eventLink: String,
	registrationLink: String,
	cost: Number,
	inPerson: Boolean,
	isUpcoming: Boolean
});

var Engagement = mongoose.model('Engagement', EngagementSchema);

module.exports = Engagement;