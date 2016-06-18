angular.module('poly-clock')

	/**
	 * @ngdoc  controller
	 * @name   clockCtrl
	 * @module poly-clock
	 * @description - Controller for clock page
	 */
	.controller('poly-clock.clockCtrl', 
	['$scope', '$interval', '$location',
	function clocklCtrl($scope, $interval, $location){
		// Sets digital clock as visible/invisible
		$scope.digital = true;
		// Sets the analog clock as visible/invisible
		$scope.analog = false;

		$scope.sleep = function(){
			$scope.sleepNow = true;
		}

		$scope.startSleep = function(){
			$scope.sleepNow = false;
		}

		$scope.settings = function(){
			$location.path('/settings/clock');
		}

		$scope.sleeping = {
			hours: [],
			minutes: []
		}

		for (var m = 0, h = 1; m <= 59; m++, h++){
			if (h <= 12)
				$scope.sleeping.hours.push(h);
			if (m.toString().length < 2)
				$scope.sleeping.minutes.push('0'+m);
			else
				$scope.sleeping.minutes.push(m);
		}

		// Updates time on the clock every half second
		$interval(function(){
			if ($scope.digital)
				$scope.time = updateDigitalTime();
			if ($scope.analog)
				$scope.time = updateAnalogTime();
		});

		// Handle Left Swipe and send user to schedule
		$scope.$on('POLY_CLOCK_SWIPE_LEFT', function()
		{
			$location.path('/schedule');
		});

		/** 
		 * @ngdoc  function
		 * @name   updateTime
		 * @module poly-clock
		 * @parent clockCtrl
		 * @description - Returns properly formatted time string for digital clock
		 * @returns {string} - The time string in locale specific format
		 */
		function updateDigitalTime(){
			return new Date().toLocaleTimeString();
		}
	}]);