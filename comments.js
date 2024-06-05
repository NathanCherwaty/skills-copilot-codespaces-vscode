//create a web server
//require a http module
var http = require('http');
//create a server object
var server = http.createServer(function(req, res){
  //write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //write a response
  res.write('Hello World');
  //end the response
  res.end();
});
//listen on port 8000
server.listen(8000);
console.log('Server running on http://