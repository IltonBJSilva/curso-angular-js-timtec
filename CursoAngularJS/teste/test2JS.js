angular.module('aplicacao').controller('PrimeiroController', function($scope $filter){
	$scope.nome = 'Ilton Batista';
	var nome = "Aleatorio";

	$scope.iniciado = true;

	$scope.alunos = [{'nome': 'Elian', 'idade': 9},
	                 {'nome': 'Ilton', 'idade': 11},
	                 {'nome': 'João', 'idade': 11},
	                 {'nome': 'Francisco', 'idade': 14},
	                 {'nome': 'Sara', 'idade': 10},
	                 {'nome': 'Andressa', 'idade': 12}];	$scope.hoje = new Date();

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};

	$scope.iniciar = function() {
		$scope.iniciado = true;
	};

	$scope.ordenarPorNome =  function(){
		$scope.ordenadoPorNome = !$scope.ordenadoPorNome;
		$scope.alunos = $filter = ('orderBy')($scope.alunos,'nome', $scope.ordenadoPorNome);
	}
	$scope.ordernarPorIdade = function(){
		$scope.ordenadoPorIdade = !$scope.ordenadoPorIdade;
		$scope.alunos = $filter = ('orderBy')($scope.alunos,'idade',$scope.ordenadoPorIdade);
	}

	$scope.submeter = function() {
		if($scope.form_1.$valid) {
			novo_aluno = {};
			novo_aluno['nome'] = $scope.nome_aluno;
			novo_aluno['idade'] = parseInt($scope.idade_aluno);
			$scope.alunos.push(novo_aluno);
		} else {
			alert("Preencha o formulário corretamente");
		}
	};

});
