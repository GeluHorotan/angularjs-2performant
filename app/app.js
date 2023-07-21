// Initialize the AngularJS module
var app = angular.module("app", ["ngRoute"]);

// Configure the routing
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/views/home.html",
      controller: "HomeController",
    })
    .when("/login", {
      templateUrl: "app/views/login.html",
    })
    .when("/account", {
      templateUrl: "app/views/account.html",
      controller: "AccountController",
    })
    .when("/under-construction", {
      templateUrl: "views/under-construction.html",
    })

    .otherwise({
      redirectTo: "/under-construction", // Redirect to the under-construction page if URL doesn't match any defined route
    });

  $locationProvider.html5Mode(true);
});
