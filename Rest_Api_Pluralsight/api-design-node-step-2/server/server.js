var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// Returns all lions
app.get('/lions', function(req, res){
    res.status(200).json(lions);
});

// Returns one lion represented by its id
app.get('/lions/:id', function(req, res){
    var lion = _.find(lions, {id: req.params.id});
    res.status(200).json(lion || {});
});

// create and returns a new lion uisng the posted object as the lion
app.post('/lions', function(req, res){
    var lion = req.body;
    id++;
    lion.id = id + '';
    lions.push(lion);
    res.status(201).json(lion);
});

// updates and returns the matching lion with the posted update object
app.put('/lions/:id', function(req, res){
    var update = req.body;
    if (update.id){
        delete update.id;
    }
    var lion = _.findIndex(lions, {id: req.params.id});
    if(!lions[lion]){
        res.send();
    } else{
        res.status(200).json(_.assign(lions[lion], update));
    }
});

// deletes and returns the matching lion
app.delete('/lions/:id', function(req, res){
    var lion = _.findIndex(lions, {id: req.params.id});
    if(!lions[lion]){
        res.send();
    } else{
        lions.splice(lion, 1);
        res.status(200).json(lions[lion]);
    }
});


app.listen(3000);
console.log('on port 3000');
