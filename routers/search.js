// Importing express
var express = require('express');

// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/search', function(req, res) {
    // This is the code that renders the template
    yelp.search({tmer: 'food', location: 'Montreal'})
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
    res.render('search');
});

module.exports = route;
