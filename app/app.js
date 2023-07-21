// Initialize the AngularJS module
var app = angular.module("app", ["ngRoute"]);

// Configure the routing
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/views/home.html",
      controller: "HomeController",
    })

    .otherwise({ redirectTo: "/" });

  $locationProvider.html5Mode(true);
});
