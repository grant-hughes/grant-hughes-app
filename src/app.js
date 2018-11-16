const express = require('express');
const path = require('path');
var request = require('request');
var pipe = require('pipe');

process.env.PORT = 80;

const app = express();

app.get('/', function(req, res) {
  res.send('Welcome to Grant Hughes\' site!);
});

app.use('/nodejs-quickstart', function(req, res) {
  req.pipe(request('http://localhost:4000' + req.url)).pipe(res);
});

app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT + '...');
