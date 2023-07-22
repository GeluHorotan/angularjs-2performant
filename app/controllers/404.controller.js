angular
  .module("app")
  .controller("404Controller", function ($scope, $location, $interval) {
    $scope.remainingSeconds = 10;

    function countdown() {
      if ($scope.remainingSeconds > 0) {
        $scope.remainingSeconds--;
      } else {
        $location.path("/");
      }
    }
    var timer = $interval(countdown, 1000);

    $scope.$on("$destroy", function () {
      if (timer) {
        $interval.cancel(timer);
      }
    });
  });
