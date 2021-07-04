'use strict';

const express = require('express');

const PORT = 8080;

const app = express();

app.get('/hellowworld', (req, res) => {
  res.send('Hello World');
});

app.get('/hellomars', (req, res) => {
  res.send('Hello Mars');
});

app.get('/health', (req, res) => {
  res.status(200).send();
});

app.get('/faultyhealth', (req, res) => {
  res.status(500).send();
});

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
