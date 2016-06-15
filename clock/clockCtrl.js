angular.module('poly-clock')

	/**
	 * @ngdoc  controller
	 * @name   clockCtrl
	 * @module poly-clock
	 * @description - Controller for clock page
	 */
	.controller('poly-clock.clockCtrl', 
	['$scope', '$interval',
	function($scope, $interval){
		var date = new Date();
		$scope.time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
		$interval(function(){
			var date = new Date();
			$scope.time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
		}, 500);
	}]);