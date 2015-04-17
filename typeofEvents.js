var http = require('http');

var req = http.request(options, function(response){
	response.on("data", function(data){
		console.log("algum dado da resposta", data);
	});

	response.on("end", function(){
		console.log("finaliza o response");
	});

});
req.end();
