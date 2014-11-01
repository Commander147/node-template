var express = require('express');
var server = express(); 	
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

var port = process.env.PORT || 8080;

server.listen(port, function() {
	console.log( 'Express server listening on port %d in %s mode', port, server.settings.env );
});

server.get('/', function (req, res)
{
	console.log("GET Request Recieved");
	res.send(req.body);
});

server.post('/', function (req, res)
{
	console.log("POST Request Recieved");
	res.send(req.body);
});