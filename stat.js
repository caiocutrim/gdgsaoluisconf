var fs = require('fs');
var util = require('util');

var mostrar = function (err, stats){
	throw err? err: console.log(util.inspect(stats));
};

fs.stat('stat.js',mostrar);
console.log('ultima linha do script');
