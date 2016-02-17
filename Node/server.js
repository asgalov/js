var http = require("http");
console.log("hello world!");

function start(){
    http.createServer(function(request, response){
        console.log("response received!");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(8000);
    console.log("server just started!");
}
