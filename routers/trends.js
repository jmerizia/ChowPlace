// Importing express
var express = require('express');

// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/trends', function(req, res) {
    // This is the code that renders the template
    res.render('trends');
});

module.exports = route;
