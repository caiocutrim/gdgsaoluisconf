//mesmo exemplo de crud assíncrono com o serviço $http do angular
//usando promisses
var promisse = $http.get('/contatos');

promisse
  .then(exibeContatos)
	.then(modificaContatos)
	.then(atualizaContatos)
	.then(function(contatos) {
		$scope.mensagem = {texto:"Atualizado com sucesso!"};
	})
	.catch(erro){
		console.log(erro.status);
		console.log(erro.statusText);
	};
			
