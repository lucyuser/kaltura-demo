var Express = require('express');
var App = Express();
var BodyParser = require('body-parser');

App.set('views', __dirname);
App.set('view engine', 'ejs');

var Kaltura = require('./lucy/kaltura-custom-api.js');

App.set('port', (process.env.PORT || 3000));
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
  extended: true
}));

App.get('/', function(req, res, next) {
  if (!Kaltura.initialized()) {
    res.redirect('/initialize.html');
  } else {
    next();
  }
});

App.post('/setSecrets', function(req, res) {
  if (!Kaltura.initialized()) {
    Kaltura.initialize(req.body, function() {
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

App.get('/', function(req, res) {
  res.redirect('home.html');
});

App.post('/videosAboutKaltura_listMedia', function(req, res) {
  Kaltura.videosAboutKaltura_listMedia(function(err, result) {
    if (err) {
      console.log('Error:' + JSON.stringify(err));
      res.status(401);
      return res.end();
    }
    res.send(JSON.stringify(result));
  });
})
App.post('/videosAboutColumbia_listMedia', function(req, res) {
  Kaltura.videosAboutColumbia_listMedia(req.body.nameLike, function(err, result) {
    if (err) {
      console.log('Error:' + JSON.stringify(err));
      res.status(401);
      return res.end();
    }
    res.send(JSON.stringify(result));
  });
})

App.use(Express.static(__dirname + '/static'));

App.listen(App.get('port'), function() {
  console.log("Node App is running at localhost:" + App.get('port'));
});
