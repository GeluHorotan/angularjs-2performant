angular
  .module("app")
  .controller("HeaderController", function ($scope, AuthService) {
    $scope.angularVersion = angular.version.full;
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $scope.navItems = [
      { title: "Home", link: "/" },
      { title: "About", link: "/about" },
      { title: "Careers", link: "/under-construction" },
    ];

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

    // Sidebar
    $scope.showSidebar = false;
    $scope.toggleSidebar = function () {
      $scope.showSidebar = !$scope.showSidebar;
    };
    $scope.closeSidebar = function () {
      if ($scope.showSidebar) {
        $scope.toggleSidebar();
      }
    };
  });
