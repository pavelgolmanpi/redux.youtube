var axios = require('axios');
var express = require('express');
var router = express.Router();

if (!process.env.REDUX_YOUTUBE_SAMPLE_API_KEY) {
  console.error('ERROR!: Please set REDUX_YOUTUBE_SAMPLE_API_KEY before running the app. \n run: export REDUX_YOUTUBE_SAMPLE_API_KEY=<some secret string> to set. ')
  process.exit();
}

router.get('/popular', function(req, res) {
  const API_KEY = process.env.REDUX_YOUTUBE_SAMPLE_API_KEY;

  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=50&chart=mostPopular&key=${API_KEY}`)
    .then(function (response) {
      return res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/video/:id', function(req, res) {
  const API_KEY = process.env.REDUX_YOUTUBE_SAMPLE_API_KEY;

  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=50&id=${req.params.id}&key=${API_KEY}`)
    .then(function (response) {
      if(!response.data.items.length){
        return res.status(404).json({
          message: 'Video not found'
        });
      }
      return res.json(response.data.items[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/search', function(req, res) {
  const API_KEY = process.env.REDUX_YOUTUBE_SAMPLE_API_KEY;

  const search = req.query.q;

  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${API_KEY}&q=${search}`)
    .then(function (response) {
      return res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get('/comments/:id', function(req, res) {
  const API_KEY = process.env.REDUX_YOUTUBE_SAMPLE_API_KEY;

  axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=${req.params.id}&key=${API_KEY}`)
    .then(function (response) {
      if(!response.data.items.length){
        return res.status(404).json({
          message: 'Video not found'
        });
      }
      return res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
