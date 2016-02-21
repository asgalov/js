function route(pathname, handler, response){
    if (typeof handler[pathname] === 'function'){
        handler[pathname](response);
    } else{
        console.log("No request handler found for " + pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("No request handler found ");
        response.end();
    }
}

exports.route = route 
