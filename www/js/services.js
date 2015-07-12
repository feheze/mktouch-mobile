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

	function getForm(){
		$http.get('https://api.typeform.com/v0/form/aLCGpu?key=441d95a06f0780613b5ea7304c6c3e290fce6f58&completed=true', {
		}).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    alert(data);
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    alert(status)
		  });
	};

	return {
		typeFormJson: function(){
			getForm();
		}
	}
});