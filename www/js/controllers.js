var mainCtrl = angular.module('mktouch.controller', []);

mainCtrl.controller('MainCtrl', function ($scope) {
	$scope.name = 'mktouch';
});

mainCtrl.controller('ShotsListCtrl', function ($scope, $routeParams, dribbbleFactory){

	var list = $routeParams.list;

	dribbbleFactory.list(list).then(function (data){
		$scope.list = data.data;
		console.log('data from server:', data.data);
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

mainCtrl.controller('FormCtrl', function (formFactory, $scope){

	$scope.name = 'mktouch';

	$scope.formTeste = function(){
		formFactory.formResponse;
	};
});
