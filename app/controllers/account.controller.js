angular
  .module("app")
  .controller(
    "AccountController",
    function ($scope, AuthService, $location, $interval) {
      $scope.user = AuthService.getUser();

      $scope.logout = function () {
        AuthService.logout();
        $location.path("/login");
      };

      function updateDateTime() {
        $scope.currentTime = {
          date: new Date(),
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        };
      }

      updateDateTime();
      $interval(updateDateTime, 1000);
    }
  );
