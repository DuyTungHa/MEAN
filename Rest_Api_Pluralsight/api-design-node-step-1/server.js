// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var fs = require('fs');

var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res){
    res.setHeader('Content-Type','text/html');
    fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
});

app.get('/data', function(req, res){
    res.json(jsonData);
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});

