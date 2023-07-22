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
      controller: "LoginController",
    })
    .when("/account", {
      templateUrl: "app/views/account.html",
      controller: "AccountController",
    })
    .when("/under-construction", {
      templateUrl: "views/under-construction.html",
    })
    .when("/404", {
      templateUrl: "app/views/404.html",
      controller: "404Controller",
    })

    .otherwise({
      redirectTo: "/404",
    });

  $locationProvider.html5Mode(true);
});
