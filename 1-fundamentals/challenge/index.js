const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let tweetsList = [];

app.post('/tweet', function(req, res) {
    var json = req.body;
    tweetsList.push(json.message);
    res.json({status:"success"});
});

app.get('/tweets', function(req, res) {
    res.json(tweetsList);
});

app.use('/public', express.static('public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});