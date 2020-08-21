(function () {
    "use strict";
  
    angular.module('data')
    .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http', 'ApiBaseUrl', 'ApiCategoriesPath', 'ApiItemsPath'];
    function MenuDataService($http, ApiBaseUrl, ApiCategoriesPath, ApiItemsPath) {
      var service = this;

      //return a promise containing categories
      service.getAllCategories = function () {
        return $http({
          method: "GET",
          url: ApiBaseUrl + ApiCategoriesPath
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
        });
      };

    //return a promise containing items by categories
      service.getItemsForCategory = function (categoryShortName) {
        return $http({
          method: "GET",
          url: ApiBaseUrl + ApiItemsPath,
          params: {category: categoryShortName}
        })
        .then( (response) => {
          jQuery( "#"+categoryShortName ).focus();
          return response.data.menu_items;
        })
        .catch( (error) => {
        });
      };
    }
  
  })();