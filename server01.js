#!/usr/bin/env node

const { createServer } = require('http');
const { readFile } = require('fs');

const server = createServer();

server.on('request', (req, res) => {
  readFile('./index.html', (err, buff) => {
    if (err) {
      res.statusCode = 400;
      console.log(res);
      return res.end('404 Not Found')
    }
    res.end(buff);
  });
});


server.listen(8080);
