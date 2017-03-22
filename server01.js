#!/usr/bin/env node

const { createServer } = require('http');
const { createReadStream } = require('fs');

const server = createServer();



server.on('request', (req, res) => {
    const file = createReadStream('./index.html');
    file.pipe(res);

});




server.listen(8080);
