'use strict';

const express = require('express');

const PORT = 8080;

const app = express();

const pod_name = process.env.HOSTNAME
app.get('/helloworld', (req, res) => {
  res.send('Hello World from pod: '+pod_name);
});

app.get('/hellomars', (req, res) => {
  res.send('Hello Mars from pod: '+pod_name);
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
