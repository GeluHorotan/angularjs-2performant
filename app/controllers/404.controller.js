angular
  .module("app")
  .controller("404Controller", function ($scope, $location, $timeout) {
    $scope.goHome = function () {
      $location.path("/");
    };

    var timerPromise = $timeout($scope.goHome, 10000);

    $scope.$on("$destroy", function () {
      $timeout.cancel(timerPromise);
    });
  });
