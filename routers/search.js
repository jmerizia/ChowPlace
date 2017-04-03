// Importing express
var express = require('express');


// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/search', function(req, res) {
    // This is the code that renders the template

    if (req.query.auto) {
      yelp.search({
        text: req.query.auto,
        latitude: 40.71,
        longitude: 74.00
      }).then(function (data) {
        res.send(data);
      }).catch(function (err) {
        console.log(err);
        res.send(err);
      });

    } else {
      res.render('search');
    }

});

module.exports = route;
