/*12. Https module 
To make Node.js act as an HTTPS server.*/
var https = require('https');
https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);