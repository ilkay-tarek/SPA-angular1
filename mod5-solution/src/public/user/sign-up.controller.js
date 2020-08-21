(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService'];
  function SignUpController(UserService) {
    var $ctrl = this;

    $ctrl.favouriteInvalid = false;

    $ctrl.user = UserService.user;

    $ctrl.signUp = function () {
     
      var favourite = $ctrl.user.favouriteDish;
      if (favourite && favourite.trim()) {
        favourite = favourite.toUpperCase();
        UserService.getFavourite(favourite).then(function (menuItem) {
          $ctrl.user.favouriteItem = menuItem;
          $ctrl.signupDone = !!menuItem;
          $ctrl.favouriteInvalid = !menuItem;
        });
      }
      else {
        $ctrl.favouriteInvalid = false;
        $ctrl.signupDone = true;
        
      }
    }
  }
})();