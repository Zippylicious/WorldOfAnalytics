var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({

});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;