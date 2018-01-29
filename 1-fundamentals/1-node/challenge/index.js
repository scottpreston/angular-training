const express = require('express')
const app = express()

app.get('/hello', function(req, res) {
    res.send('Hello World!')
});

app.get('/ping', function(req, res) {
    res.send('pong')
});

app.use('/public', express.static('public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})