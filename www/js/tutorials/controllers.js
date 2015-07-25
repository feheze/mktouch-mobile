var mainCtrl = angular.module('mktouch.controller', []);

mainCtrl.controller('MainCtrl', function ($scope) {
	$scope.name = 'mktouch';
});

mainCtrl.controller('ShotsListCtrl', function ($scope, $routeParams, dribbbleFactory){

	var list = $routeParams.list;

	dribbbleFactory.list(list).then(function (data){
		$scope.list = data.data;
	});

	$scope.loadNextPage = function (){
		dribbbleFactory.list(list, {page: $scope.list.page+1}).then(function (data){
			console.log('Load Next Page:', data);
			// $scope.list.page = data.data.page;
		})
	};

});

mainCtrl.controller('ShotsCtrl', function ($scope, $routeParams, dribbbleFactory){

	var id = $routeParams.id;

	dribbbleFactory.shot(id).then(function (data){
		$scope.shot = data.data;
		console.log(data.data);
	});
});

mainCtrl.controller('FormCtrlteste', function (formFactory, $scope){
	$scope.currentQuestion = 0;
	$scope.ask = "";
	var questions = {};
	var question = {};

	formFactory.getJsonForm($scope.myForm);

	$scope.nextQuestion = function(){
		var formIndexLength = questions.length;

		formFactory.getQuestion(questions,$scope.currentQuestion);

		if($scope.currentQuestion+1 === formIndexLength){
			$scope.currentQuestion = 0;
		}else{
			$scope.currentQuestion = $scope.currentQuestion + 1;
		}
	};

	$scope.$on('get:json:form', function (event, data){
		questions = data.json_form.questions;
		console.log('getForm: ', questions);
	});

	$scope.$on('get:question', function (event, data){
		question.ask = data.ask;
		question.type = data.type;
		question.options = data.options;

		$scope.ask = question.ask;
	});

});

