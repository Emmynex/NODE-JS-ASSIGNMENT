/*24. URL module 
To parse url strings */
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
var q = url.parse(req.url, true);
res.write(q.href);
res.end();
}).listen(8080);
