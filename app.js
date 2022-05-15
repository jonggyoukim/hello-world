var http = require('http');
var ip = require("ip");
var ipaddress = ip.address();

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World : " + ipaddress + "\n");
});

server.listen(8080);
