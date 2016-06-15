angular.module('poly-clock')

	/**
	 * @ngdoc  config
	 * @name   routeConfig
	 * @module poly-clock
	 * @description - Routes for poly-clock app
	 */
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'clock/clock.html',
				controller:  'poly-clock.clockCtrl'
			})
			.when('/alarm/:alarmID', {
				templateUrl: 'alarm/alarm.html',
				controller:  'poly-clock.alarmCtrl'
			})
			.when('/schedule', {
				templateUrl: 'schedule/schedule.html',
				controller:  'poly-clock.scheduleCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});