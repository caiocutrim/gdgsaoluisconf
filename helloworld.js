var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {"Content-type":"text/html"});
	res.write('<h1> A data de hoje é'+ Date() + '</h1>');
	res.end();
	
});


server.listen(3000, function(){
	console.log('server http at address http://localhost:3000');
});
