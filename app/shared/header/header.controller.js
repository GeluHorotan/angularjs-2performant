angular.module("app").controller("HeaderController", function ($scope) {
  $scope.angularVersion = angular.version.full;

  $scope.navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Careers", link: "/careers" },
  ];

  $scope.accountItem = { title: "Login", link: "/login" };
});
