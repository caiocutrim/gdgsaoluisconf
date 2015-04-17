function exibir(){
	var hora = (new Date()).toTimeString().slice(0, 8);
	console.log(hora);
}


setInterval(exibir, 100);
console.log('tecle crtl+c para encerrar');


process.on('SINGINT', function(){
	console.log('SIGINT detectado. Encerrando...');
	process.exit(1);
});
