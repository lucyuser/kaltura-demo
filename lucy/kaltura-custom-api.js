var Client = require('./.././kaltura/kaltura-raw-api.js');

var Secrets = null;
exports.initialize = function(secrets, callback) {
  if (Client.initialize) {
    Client.initialize(secrets, callback);
  } else {
    Secrets = secrets;
    callback();
  }
}
exports.initialized = function() {
  return Client.initialize ? Client.initialized() : Secrets !== null;
}

exports.videosAboutKaltura_listMedia = function(callback) {
  var params = {
    'nameLike': 'Kaltura',
  };
  for (var secret in Secrets) {
    params[secret] = Secrets[secret];
  }
  return Client.listMedia(params, callback);}
exports.videosAboutColumbia_listMedia = function(nameLike, callback) {
  var params = {
    'orderBy': '+createdAt',
    'nameLike': nameLike || "Columbia",
  };
  for (var secret in Secrets) {
    params[secret] = Secrets[secret];
  }
  return Client.listMedia(params, callback);}

