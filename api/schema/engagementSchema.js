var mongoose = require('mongoose');

var EngagementSchema = new mongoose.Schema({
	
});

var Engagement = mongoose.model('Engagement', EngagementSchema);

module.exports = Engagement;