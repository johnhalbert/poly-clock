angular.module('poly-clock')

	/**
	 * @ngdoc  controller
	 * @name   scheduleCtrl
	 * @module poly-clock
	 * @description - Controller for schedule page
	 */
	.controller('poly-clock.scheduleCtrl', 
	['$scope', '$location',
	function scheduleCtrl($scope, $location){
		// document.addEventListener('click', function(){
		// 	var wrap = document.getElementById('button-wrap');
		// 	if (wrap.className.indexOf('button-active') !== -1)
		// 		wrap.className = 'button-wrap';
		// 	else
		// 		wrap.className = 'button-wrap button-active';
		// });

		$scope.modal = function(){
			$scope.showModal = true;
		}

		$scope.cancel = function(){
			$scope.showModal = false;
		}
		$scope.save = $scope.cancel;

		$scope.settings = function(){
			$location.path('/settings/schedule');
		}

		$scope.hours = [];
		$scope.minutes = [];
		$scope.periods = ['AM', 'PM'];
		// Populate the hours and minutes arrays
		for (var m = 0, h = 1; h <= 59; h++, m++){
			if (h <= 12)
				$scope.hours.push(h);
			if (m.toString().length < 2)
				$scope.minutes.push('0'+m);
			else
				$scope.minutes.push(m);
		}

		// Handle Left Swipe, go to alarms tab
		$scope.$on('POLY_CLOCK_SWIPE_LEFT', function(){
			$scope.$apply(function(){
				$scope.alarms = true;
			});
		});

		// Handle Right Swipe, go to presets or clock
		$scope.$on('POLY_CLOCK_SWIPE_RIGHT', function(){
			$scope.$apply(function(){
				if ($scope.alarms)
					$scope.alarms = false;
				else
					$location.path('/clock');
			});
		});
	}]);