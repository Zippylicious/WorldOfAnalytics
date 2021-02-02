var mongoose = require('mongoose');

var EngagementSchema = new mongoose.Schema({
	date: Date,
	event: String,
	eventLink: String,
	registrationLink: String,
	cost: Number,
	isVirtual: Boolean,
	recordingLink: String,
	presentationLink: String,
	isUpcoming: Boolean
});

var Engagement = mongoose.model('Engagements', EngagementSchema);

module.exports = Engagement;