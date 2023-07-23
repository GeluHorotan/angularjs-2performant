angular
  .module("app")
  .controller(
    "LoginController",
    function ($scope, $http, AuthService, $location) {
      $scope.user = {
        email: "",
        password: "",
      };
      $scope.rememberMe = false;

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
            AuthService.setUser(response.data.user, $scope.rememberMe);
            $location.path("/account");
          })
          .catch(function (error) {
            var errorArray =
              error.data.errors && Array.isArray(error.data.errors)
                ? error.data.errors
                : ["An error occurred"];

            AuthService.setErrors(errorArray);
          });
      };
      $scope.getErrors = function () {
        return AuthService.getErrors();
      };
    }
  );
