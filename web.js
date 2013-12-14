var express = require('express');
var fs = require('fs');
var logfmt = require('logfmt');
var app = express();
var index = fs.readFileSync('html/index.html');
var favicon = fs.readFileSync('html/favicon.ico');
var icon = fs.readFileSync('html/icon.png');

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

app.get('/favicon.ico', function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/x-ico'});
    res.end(favicon);
});

app.get('/icon.png', function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(icon);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});

