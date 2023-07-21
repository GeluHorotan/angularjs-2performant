angular.module("app").factory("AuthService", function () {
  var user = null;
  return {
    getUser: function () {
      return user;
    },
    setUser: function (userData) {
      user = userData;
    },
    isLoggedIn: function () {
      return user !== null;
    },
    logout: function () {
      user = null;
    },
  };
});
