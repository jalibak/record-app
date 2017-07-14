var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var api = require('./server/routes/api');

var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log(`App is running on localhost:${port}`));
