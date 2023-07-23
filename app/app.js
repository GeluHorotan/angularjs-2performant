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
    .when("/careers", {
      templateUrl: "app/views/under-construction.html",
      controller: "UnderConstructionController",
    })

    .otherwise({
      redirectTo: "/404",
    });

  $locationProvider.html5Mode(true);
});

angular.module("app").run(function ($rootScope, $location, AuthService) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if (next.$$route.originalPath === "/login" && AuthService.isLoggedIn()) {
      event.preventDefault();
      $location.path("/account");
    } else if (
      next.$$route.originalPath === "/account" &&
      !AuthService.isLoggedIn()
    ) {
      event.preventDefault();
      $location.path("/login");
    }
  });
});
