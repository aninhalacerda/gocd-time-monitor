const compression = require('compression')
const express = require('express');
const requestProxy = require('express-http-proxy');
const url = require('url');

var app = express();
app.use(compression({threshold: 0}));

app.get("/", function (req, res, next) {
    res.send("Hello, GoCD Time keeper is a WIP");
});

app.use(express.static('public'));

app.listen(3030, function () {
    console.log('GoCD Time keeper listening on port 3030...');
});