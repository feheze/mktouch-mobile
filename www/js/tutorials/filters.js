'use strict';

var filters = angular.module('mktouch.filters', []);

filters.filter('filterDate', function ($filter) {
	return function(value, format){
		if(value){
			value = Date.parse(value);
		}

		return $filter('date')(value, format);
		
	}
});