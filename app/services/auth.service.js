angular.module("app").factory("AuthService", function () {
  var userState = {
    user: null,
    rememberMe: false,
  };
  var errors = [];

  function saveUserState() {
    var storage = userState.rememberMe ? localStorage : sessionStorage;
    storage.setItem("userState", JSON.stringify(userState));
  }

  function loadUserState() {
    var savedUserState = JSON.parse(localStorage.getItem("userState"));
    if (!savedUserState) {
      savedUserState = JSON.parse(sessionStorage.getItem("userState"));
    }
    if (savedUserState) {
      userState = savedUserState;
    }
  }

  // Load the user state when AuthService is initialized
  loadUserState();

  function clearUserState() {
    localStorage.removeItem("userState");
    sessionStorage.removeItem("userState");
    userState = {
      user: null,
      rememberMe: false,
    };
  }

  return {
    getUser: function () {
      return userState.user;
    },
    setUser: function (userData, shouldRemember) {
      userState.user = userData;
      userState.rememberMe = shouldRemember;
      saveUserState();
    },
    isLoggedIn: function () {
      return userState.user !== null;
    },
    logout: function () {
      userState.user = null;
      clearUserState();
    },
    getErrors: function () {
      return errors;
    },
    setErrors: function (errorArr) {
      errors = errorArr;
    },
    clearErrors: function () {
      errors = [];
    },
    loadState: loadUserState,
    clearState: clearUserState,
  };
});
