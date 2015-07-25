'use strict';

var services = angular.module('mktouch.services', []);

services.factory('dribbbleFactory', function ($http){

	function load(path, params){
		params = params || {};
		params.callback = "JSON_CALLBACK";
		return $http.jsonp('http://api.dribbble.com'+ path, {params: params});
	}

	return {
		list: function(type, params){
			return load("/shots/" + type, params);
		},
		
		shot: function(id){
			return load("/shots/" + id);
		}		
	}

});

services.factory('formFactory', function ($http, $rootScope){

	function loadJsonForm(scopeForm){
		$http.get('https://api.typeform.com/v0/form/aLCGpu?key=441d95a06f0780613b5ea7304c6c3e290fce6f58&completed=true', {
		}).
		  success(function(data, status, headers, config) {
		  	var myForm  = data;
		  	console.log('myForm ', myForm);
		    $rootScope.$broadcast('get:json:form',{json_form: myForm});
		  }).
		  error(function(data, status, headers, config) {
		    alert('load json error: ' + status);
		  }); 
	};

	function loadQuestion(questions, index){
		var question = JSON.parse(questions[index].question)
		console.log("QUESTION service >>>>>>> ", question);
		$rootScope.$broadcast('get:question',{
				ask: question.ask, 
				type: question.type,
				options: question.options.split(",")});
	};

	return{
		getJsonForm: function(){
			loadJsonForm();
		},

		getQuestion: function(questions, index){
			loadQuestion(questions, index);
		}
	}

	
});