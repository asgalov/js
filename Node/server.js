var http = require("http");
console.log("hello world!");

function start(){
    function onRequest(request, response){
        console.log("response received!");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8000);
    console.log("server just started!");
}

exports.start = start
