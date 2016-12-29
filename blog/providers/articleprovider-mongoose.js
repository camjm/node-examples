var mongoose = require('mongoose');
var post = require('../models/post.js');

ArticleProvider = function(connection) {
	mongoose.connect(connection);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('mongoose connection successful');
	});
};

ArticleProvider.prototype.getCollection = function(callback) {

};

ArticleProvider.prototype.findAll = function(callback) {

};

ArticleProvider.prototype.findById = function(callback) {

};

ArticleProvider.prototype.save = function(post, callback) {
	for(var i = 0; i < articles.length; i++) {

	}
};

ArticleProvider.prototype.addCommentToArticle = function(callback) {

};