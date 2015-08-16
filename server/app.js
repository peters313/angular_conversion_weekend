var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var path = require('path');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular_conversion');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
