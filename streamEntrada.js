var fs = require('fs');
var Stream = require('stream');

var ws = new Stream;

ws.write = function(buf){
	console.log("buf= " + buf);
};
process.stdin.pipe(ws);
