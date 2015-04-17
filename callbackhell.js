//exemplo usando a stack mean
//o serviço $http do angular é responsável por 
//requisições ajax
$http.get('/contatos', function(contatos){
	exibeContatos(contatos, function(contatos){
		modificaContatos(contatos, function(contatosModificados){
			atualizaContatos(contatosModificados,
				 function(contatos){
					 $scope.mensagem = {
						 texto: "Contatos atualizados com sucesso!"
					 };
				 });
		});
	});
});;
// pareçe que goku deu um kamehamehá no código hueuuejeue
