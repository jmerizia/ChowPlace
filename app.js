// Helper modules that will be used
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var https = require('https');

// This imports the Router that uses the template engine
var index = require('./routers/index');
var map = require('./routers/map');
var chat = require('./routers/chat');
var search = require('./routers/search');
var trends = require('./routers/trends');

var app = express();

var port = process.env.PORT || 3000;

var Yelp = require('yelp');



var yelp = new Yelp({
  consumer_key: 'HsBhjbvMxB3AJnLDmW9eqQ',
  consumer_secret: 'rb8WWhT7zU52m8kF36BsuYYd5EpM0bKG1vBoWBVP4SDYTpMBBb8P7i3pdJEOtlUu',
  token: 'bW0hpXM7WeFtskUUvISZ3Ofdz944ETsyH93R46frG0oe4o2wIBiecRybKGATLbmiRL7aGczoK-eiNQC7jPW_qhTY4-Pxckb_sNOWm9lVBDMOZ8APSVqn3RW4zJvhWHYx',
  token_secret: 'token-secret'
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
app.use('/', map);
app.use('/', search);
app.use('/', trends);
app.use('/', chat);

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
