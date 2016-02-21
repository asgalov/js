var http = require("http");
var url = require("url");
console.log("hello world!");

function start(route, handler){

    function onRequest(request, response){
        console.log("response received!");
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname, handler, response);
    }

    http.createServer(onRequest).listen(8000);

    console.log("server just started!");
}

exports.start = start
