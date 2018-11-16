const express = require('express');
const path = require('path');
const request = require('request');
const pipe = require('pipe');
const app = express();

app.get('/', function(req, res) {
  res.send('Welcome to Grant Hughes\' site!');
});

// app.use('/nodejs-quickstart', function(req, res) {
//   console.log('yo');
//   req.pipe(request('http://localhost:4000' + req.url)).pipe(res);
// });

app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT + '...');
