var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();
var port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Parse POST data as URL encoded data
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Parse POST data as JSON
app.use(bodyParser.json());

app.use('/', routes);


app.listen(port, function () {
    console.log('listening on %d', port);
});