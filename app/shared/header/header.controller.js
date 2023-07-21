angular
  .module("app")
  .controller("HeaderController", function ($scope, AuthService) {
    $scope.angularVersion = angular.version.full;
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $scope.navItems = [
      { title: "Home", link: "/" },
      { title: "About", link: "/about" },
      { title: "Careers", link: "/careers" },
    ];
    console.log($scope.isLoggedIn);
    if ($scope.isLoggedIn) {
      $scope.accountItem = { title: "Account", link: "/account" };
    } else {
      $scope.accountItem = { title: "Login", link: "/login" };
    }
  });
