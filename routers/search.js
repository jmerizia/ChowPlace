// Importing express
var express = require('express');


// Creating a Router
var route = express.Router();

// Defining a route that binds the GET method
route.get('/search', function(req, res) {
    // This is the code that renders the template

    var auto = req.query.auto;
    var lon = req.query.lon;
    var lat = req.query.lat;

    if (auto) {
      yelp.autocomplete({
        text: auto,
        latitude: lat,
        longitude: lon
      }).then(function (dataJSON) {
        var data = JSON.parse(dataJSON);
        response = [];

        data.terms.forEach(function (term) {
          response.push(term.text);
        });
        data.businesses.forEach(function (business) {
          response.push(business.name);
        });

        data.categories.forEach(function (category) {
          console.log('hi');
          if (category.title != '') {
            response.push(category.title);
          } else {
            response.push(category.alias);
          }
        });
        res.send(JSON.stringify(response));
      }).catch(function (err) {
        res.send(err);
      });

    } else {
      res.render('search');
    }

});

module.exports = route;
