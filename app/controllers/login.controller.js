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
        url: "http://localhost:5000/api/users/sign_in.json",
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
          console.log("Login successful!", response);
          AuthService.setUser({
            email: $scope.user.email,
            access_token: response.headers("access-token"),
            client: response.headers("client"),
            uid: response.headers("uid"),
          });
          // Redirect the user
        })
        .catch(function (error) {
          console.error("Login failed!", error);
        });
    };
  });
