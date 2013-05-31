var express = require('express');
var app = express();
var http = require('http');
var _ = require('underscore');
var server = require('http').createServer(app)
  , engine = require('ejs-locals');

app.engine('ejs', engine);
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.locals.pretty = true;
});

app.get('/', function(req, res){ res.render('index'); });

/*
var fs = require('fs');
var vapix = require('vapix');

var options = {
	address: 'kzw.dk',
	port: '333',
	username: 'root',
	password: 'np1fumba',	
    resolution: '640x480',
    compression: 30,
    rotation: 0
}

var camera = new vapix.Camera(options);

app.get('/axis', function(req, res){ 

	camera.requestImage(options, function(err, data) {
	    if (err) throw err;

	    fs.writeFile("./public/img/out.jpg", data, function(err) {
	        if (err) throw err;
	    });
	});

});
*/

server.listen(process.env.PORT || 88);