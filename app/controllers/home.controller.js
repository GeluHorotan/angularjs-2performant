angular
  .module("myApp")
  .controller("HomeController", function ($scope, $interval) {
    $scope.currentTime = new Date().toLocaleString();

    // Update time every second
    $interval(function () {
      $scope.currentTime = new Date().toLocaleString();
    }, 1000);
  });
