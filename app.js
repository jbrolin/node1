var http = require("http");
const port = 8081;
http.createServer(requestListener).listen(port);
console.log("server is listening on port ", port);

function requestListener(req, res){   
    res.writeHead(200, {'Content-Type': 'text/plain'});   
    console.log("Request recieved, responding now ...");   
    res.end("Hello"); }
