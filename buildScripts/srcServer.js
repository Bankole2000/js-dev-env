const express = require('express');
const path = require('path');
const open = require('open');

const port = 5000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
  err ? console.log(err): open(`http://localhost:${port}`);
});
