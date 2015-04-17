#!/usr/bin/env node
function agora(){
	dt = Date().slice(16, 24);
	console.log(dt)
}

t = setInterval(agora, 1000);
console.log('digite ctrl + c para terminar a execucao do programa');
