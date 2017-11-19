const Youtube = require("youtube-api")
    , fs = require("fs")
    , readJson = require("r-json")
    , express = require('express')

var app = express()

const CREDENTIALS = readJson(`${__dirname}/client_secret.json`);

let oauth = Youtube.authenticate({
    type: "oauth"
  , client_id: CREDENTIALS.installed.client_id
  , client_secret: CREDENTIALS.installed.client_secret
  , redirect_url: CREDENTIALS.installed.redirect_uris[0]
});

app.get('/oauth2url', function(req, res) {
  return res.status(200).json({
    success: true,
    url: oauth.generateAuthUrl({
        access_type: "offline"
      , scope: ["https://www.googleapis.com/auth/youtube.upload"]
    })
  });
})

module.exports = app;
