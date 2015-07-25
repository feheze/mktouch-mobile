'use strict';

var MkFormFactory = angular.module('mktouch.form_factory', []);

MkFormFactory.factory('MkForm', function ($http) {

	var formId = 'aLCGpu'

	function getMkForm (mkForm){
		$http.get('https://api.typeform.com/v0/form/' + formId + '?key=441d95a06f0780613b5ea7304c6c3e290fce6f58&completed=true', {
		}).success(function (data, status, headers, config){
			this.mkForm = data;
		}).error(function (data, status, headers, config){
			alert('erro status: ' + status);
		});	
	};

	function saveLocalMkForm(mkForm){
		mkForm = window.localStorage['form'];
	};

	function getLocalMkForm(mkForm){

	};

	return {
		getMkForm: function(mkForm){
			getMkForm(mkForm);
		},

		saveLocalMkForm: function(mkForm){
			saveLocalMkForm(mkForm);
		},

		getLocalMkForm: function(mkForm){
			getLocalMkForm(mkForm);
		}
	} 
});


