angular
  .module("app")
  .controller("HomeController", function ($scope, $interval, AuthService) {
    $scope.currentTime = new Date().toLocaleString();
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $scope.$watch(
      function () {
        return AuthService.isLoggedIn();
      },
      function (newValue, oldValue) {
        if (newValue !== oldValue) {
          $scope.isLoggedIn = newValue;
          updateAccountItem();
        }
      }
    );
    function updateAccountItem() {
      if ($scope.isLoggedIn) {
        $scope.accountItem = { title: "Account", link: "/account" };
      } else {
        $scope.accountItem = { title: "Login", link: "/login" };
      }
    }
    updateAccountItem();

    // Update time every second
    $interval(function () {
      $scope.currentTime = new Date().toLocaleString();
    }, 1000);
  });
