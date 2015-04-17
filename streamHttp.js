var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req, res){
	var stream = fs.createReadStream(__dirname +"/data.txt");
	stream.pipe(res);
});

server.listen(3000, function(){
  console.log('server http criado no endereço http://localhost.com:3000');
});
