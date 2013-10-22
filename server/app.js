// dependencies
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var http = require('http');
var path = require('path');

// settings
var settings = {
	'static' 	: '/../web/',
	'db' 		: 'mongodb://localhost/launch'	
}

// initialize & configure the app
var app = express();
app.configure(function() {
	app.use(express.logger());
	app.use(express.favicon());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname + settings.static));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	app.use(app.router);			
});

// connect to the database
mongoose.connect(settings.db)

// db schema (sample below)
var LaunchUserSchema = new Schema({
	email: {type: String, trim: true, required:true, unique:true},
	created_at : {type: Date, default: Date.now},
});
var LaunchUser = mongoose.model('LaunchUser', LaunchUserSchema);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// request handlers and routes
app.get('/', routes.index);
app.get('/users', user.list);
app.use(function (req,res){res.end('404 - Page not found');});

// Start the server
app.listen(3000);