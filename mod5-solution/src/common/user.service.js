(function () {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    UserService.$inject = ['MenuService'];
    function UserService(MenuService) {
      var service = this;
      service.user = {};
      
      service.getFavourite = function (favourite) {
        return MenuService.getMenuItem(favourite).then(function (menuItem) {
          return menuItem;
        });
      }
    
    }
    
    })();
