#!/usr/bin/env node

const { createServer } = require('http');
const { readFile } = require('fs');

const server = createServer();

server.on('request', (req, res) => {
  readFile('./index.html', (err, buff) => {
    res.end(buff);
  });
});


server.listen(8080);
