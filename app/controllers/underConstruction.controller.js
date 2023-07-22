angular
  .module("app")
  .controller(
    "UnderConstructionController",
    function ($scope, $interval, $location) {
      $scope.remainingSeconds = 10;

      function countdown() {
        if ($scope.remainingSeconds === 0) {
          $location.path("/");
        } else {
          $scope.remainingSeconds--;
        }
      }

      var countdownInterval = $interval(countdown, 1000);

      $scope.$on("$destroy", function () {
        if (countdownInterval) {
          $interval.cancel(countdownInterval);
        }
      });
    }
  );
