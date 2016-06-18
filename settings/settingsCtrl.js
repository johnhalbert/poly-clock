angular.module('poly-clock')

  /**
   * @ngdoc  controller 
   * @name   settingsCtrl
   * @module poly-clock
   * @description - Controller for settings page
   */
  .controller('poly-clock.settingsCtrl', 
  ['$scope', '$routeParams',
  function settingsCtrl($scope, $routeParams){
    $scope.settings = {
      hourFormats: [
        '12',
        '24'
      ],
      notificationFormat: [
        'Hours',
        'Minutes'
      ],
      hoursMinutes: [],
      snoozeMinutes: []
    }

    for (var i = 0; i <= 59; i++){
      if (i.toString().length < 2)
        $scope.settings.snoozeMinutes.push('0'+i);
      else
        $scope.settings.snoozeMinutes.push(i);
    }

    $scope.$watch('settings.upcomingNotificationFormat', function(newVal, oldVal){
      if (newVal !== oldVal){
        $scope.settings.hoursMinutes = [];
        if (newVal === 'Hours'){
          $scope.settings.hoursMinutes = ['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        } else {
          $scope.settings.hoursMinutes.push('None');
          for (var i = 0; i <= 59; i++){
            if (i.toString().length < 2)
              $scope.settings.hoursMinutes.push('0'+i);
            else
              $scope.settings.hoursMinutes.push(i);
          }
        }
      }
    });
  }]);