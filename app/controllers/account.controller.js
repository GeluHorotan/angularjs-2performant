angular
  .module("app")
  .controller("AccountController", function ($scope, AuthService, $location) {
    $scope.user = AuthService.getUser();

    $scope.logout = function () {
      AuthService.logout();
      $location.path("/login"); // Redirect to /login view after logout
    };
  });
