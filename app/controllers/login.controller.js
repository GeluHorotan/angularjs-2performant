// controllers/login.controller.js
angular
  .module("app")
  .controller("LoginController", function ($scope, $http, AuthService) {
    $scope.user = {
      email: "",
      password: "",
    };

    $scope.login = function () {
      $http({
        method: "POST",
        url: "https://api.2performant.com/users/sign_in.json",
        data: {
          user: {
            email: $scope.user.email,
            password: $scope.user.password,
          },
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          // Handle successful login
          console.log("Login successful!", response);
          AuthService.setUser({
            email: $scope.user.email,
            access_token: response.headers("access-token"),
            client: response.headers("client"),
            uid: response.headers("uid"),
            // Add other properties from the response as needed
          });
          // Redirect the user to the desired page after successful login
          // You can use AngularJS's $location service for navigation
          // $location.path("/dashboard");
        })
        .catch(function (error) {
          // Handle login error
          console.error("Login failed!", error);
        });
    };
  });
