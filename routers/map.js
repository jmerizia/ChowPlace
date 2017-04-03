// Importing express
var express = require('express');

// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/map', function(req, res) {
    // This is the code that renders the template
    res.render('map');
});

module.exports = route;
