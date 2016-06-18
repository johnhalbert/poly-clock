angular.module('poly-clock')

  /**
   * @ngdoc  config
   * @name   gestureConfig
   * @module poly-clock
   * @description - Configures gesture/swipe controls
   */
  .run(function gestureConfig($rootScope){
    var startX,                 // Starting X Coordinate
        startY,                 // Starting Y Coordinate
        startTime,              // When the touch event started
        minimumTime     = 200,  // Minimum time that must pass for swipe to be valid
        minimumMovement = 150;  // Swipes must cover at least this distance to be valid

    // Get information about the touch event as it starts
    angular.element(document).on('touchstart', function(touchEvent){
      startX = touchEvent.changedTouches[0].pageX;  // Record the start x coord
      startY = touchEvent.changedTouches[0].pageY;  // Record the start y coord
      startTime = new Date().getTime();             // Record the start time
    });

    // Get information about the touch event after it ends to determine what
    // direction the swipe was, and whether it qualifies for event triggering
    angular.element(document).on('touchend', function(touchEvent){
      // Determine horizontal movement
      var actualMovementX = touchEvent.changedTouches[0].pageX - startX;
      // Determine vertical movement
      var actualMovementY = touchEvent.changedTouches[0].pageY - startY;
      // Determine elapsed time
      var actualTime = new Date().getTime() - startTime;
      // Determine which direction the swipe was made and handle left & right
      // swipes
      detectSwipeDirection({
        movementX: actualMovementX, 
        movementY: actualMovementY, 
        elapsedTime: actualTime
      });
    });

    /**
     * @ngdoc  function
     * @name   detectSwipeDirection
     * @module poly-clock
     * @parent gestureConfig
     * @description - Determines in what direction a swipe has been made
     */
    function detectSwipeDirection(swipe){
      // If the swipe covered more distance horizontally than vertically, and
      // was in a positive horizontal direction, it was a right swipe        
      if (Math.abs(swipe.movementX) > Math.abs(swipe.movementY) && swipe.movementX > 0)
        rightSwipe();
      // Otherwise, if it was greater horizontal than vertical but in a
      // negative direction, it was a left swipe
      else if (Math.abs(swipe.movementX) > Math.abs(swipe.movementY) && swipe.movementX < 0)
        leftSwipe();
      // Otherwise, if it was greater vertical than horizontal and horizontal
      // and vertical movement was in a negative direction, it was an up swipe
      else if (Math.abs(swipe.movementX) < Math.abs(swipe.movementY) && swipe.movementY < 0)
        upSwipe();
    }

    /**
     * @ngdoc  function
     * @name   rightSwipe
     * @module poly-clock
     * @parent gestureConfig
     * @description - Called when right swipe happens, handles event
     *                broadcast for right swipes
     */
    function rightSwipe(){
      $rootScope.$broadcast('POLY_CLOCK_SWIPE_RIGHT');
    }
    /**
     * @ngdoc  function
     * @name   leftSwipe
     * @module poly-clock
     * @parent gestureConfig
     * @descriptoin - Called when left swipe happens, handles event broadcast
     *                for left swipes
     */
    function leftSwipe(){
      $rootScope.$broadcast('POLY_CLOCK_SWIPE_LEFT');
    }

    /**
     * @ngdoc  function
     * @name   upSwipe
     * @module poly-clock
     * @parent gestureConfig
     * @description - Called when up swipe happens, handles event broadcast for
     *                up swipes
     */
    function upSwipe(){
      $rootScope.$broadcast('POLY_CLOCK_SWIPE_UP');
    }
  });