// Importing express
var express = require('express');

// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/chow', function(req, res) {
    // This is the code that renders the template
    var q = req.query.q;
    var lat = req.query.lat;
    var lon = req.query.lon;

    if (q) {
      yelp.search({
        term: q,
        latitude: lat,
        longitude: lon,
        limit: 10
      }).then(function (dataJSON) {

        res.send(dataJSON);

      }).catch(function (err) {
        res.send(err);
      });

    } else {
      res.render('404');
    }
});

module.exports = route;
