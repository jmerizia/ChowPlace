// Importing express
var express = require('express');

// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/chat', function(req, res) {
    // This is the code that renders the template
    res.render('chat');
});

module.exports = route;
