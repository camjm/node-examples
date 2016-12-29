// Module dependencies.
var express = require('express');
var http = require('http');
var blog = require('./routes/blog');
var mongoose = require('mongoose');

var app = express();

// Configuration
app.configure( function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(require('stylus').middleware({src: __dirname + '/public'}));
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

// Routes
app.get('/', blog.list);
app.get('/blog/new', blog.newBlog);
app.post('/blog/new', blog.postNew);
app.get('/blog/:id', blog.single);
app.post('/blog/addComment', blog.addComment);

// Start
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('mongoose connection successful');
});