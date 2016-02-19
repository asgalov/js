var http = require("http");
var url = require("url");
console.log("hello world!");

function start(route){
    function onRequest(request, response){
        console.log("response received!");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8000);
    console.log("server just started!");
}

exports.start = start
