// Helper modules that will be used
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var https = require('https');

// This imports the Router that uses the template engine
var index = require('./routers/index');
var search = require('./routers/search');
var chow = require('./routers/chow');

var app = express();

var port = process.env.PORT || 3000;

var Yelp = require('yelp-api-v3');



yelp = new Yelp({
  app_id: 'HsBhjbvMxB3AJnLDmW9eqQ',
  app_secret: 'rb8WWhT7zU52m8kF36BsuYYd5EpM0bKG1vBoWBVP4SDYTpMBBb8P7i3pdJEOtlUu'
});


if (process.env.PORT) {
  app.use(function (req, res, next) {
    if ( (!req.secure) && (req.get('X-Forwarded-Proto') !== 'https') ) {
      res.redirect('https://' + req.get('Host') + req.url);
    } else {
      next();
    }
  });
}

// Sets the template engine as EJS
app.set('view engine', 'ejs');

// This defines that the 'views' folder contains the templates
app.set('views', path.join(__dirname, '/views'));

// Defines public folder for static files
app.use(express.static(path.join(__dirname, '/public')));

// These options are necessary to
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This bind the Router to the / route
app.use('/', index);
app.use('/', search);
app.use('/', chow);

// Handle 404
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

var server = app.listen(port, function () {
  console.log('Listening on port '+port);
});

if (port == 3000) {
  var livereload = require('livereload');
  var server = livereload.createServer({
    exts: [ 'html', 'ejs', 'css', 'js', 'png', 'ico' ]
  });
  server.watch([
    __dirname + '/views',
    __dirname + '/public',
    __dirname + '/routers'
  ]);
}

module.exports = app;
