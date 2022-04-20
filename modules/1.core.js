const http = require("http")

http.createServer(function(request, response){
    console.log(request.url)
   
    if(request.url =="/") {
        response.end("Welcome to http module")
    } else if (request.url =="/user") {
        response.end("Welcome to user API")
    } else {
        response.end("Please contact administrator")
    }
}).listen(8000)