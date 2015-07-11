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

services.factory('formFactory', function ($http){
	var formResponse = $http.get('https://api.typeform.io/v0.3/', {
		"headers": { "x-api-token": "2570a9ab7e442a7ce51eb0c5739ea0f2"}  })
	.success( function (data,status,headers, config){
		console.log("form formResponse", data);
	})
	.error( function (data,status,headers, config) {
		alert("error!");
	});

	return formResponse;
});