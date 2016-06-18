angular.module('poly-clock')

	/**
	 * @ngdoc  controller
	 * @name   alarmCtrl
	 * @module poly-clock
	 * @description - Controller for alarm page
	 */
	.controller('poly-clock.alarmCtrl', 
	['$scope', '$interval',
	function alarmCtrl($scope, $interval){

		// Set the time the alarm was triggered for display
		var time = document.getElementById('pc-active-alarm-time');
		$interval(function(){
			time.innerHTML = new Date().toLocaleTimeString();
		});

		var wake = document.getElementById('pc-alarm-wake-up');
		$interval(function(){
			if (wake.innerHTML !== '&nbsp;')
				wake.innerHTML = '&nbsp;';
			else
				wake.innerHTML = 'Wake Up!';
		}, 500);
	}]);