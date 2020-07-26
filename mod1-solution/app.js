(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckMessage);

LunchCheckController.$inject = [$scope, $filter];

function LunchCheckMessage($scope, $filter){
  $scope.meals="";
  $scope.message= "";

  $scope.checkMeals = function (){
    var msg = $scope.meals.split(",");

    if (msg.length <=3)  {
      if (msg.length == 1 && msg[0] == "" )
      {
        $scope.message ="Please enter data first";
      }
      else {
        $scope.message = "Enjoy!";
      }

    }

    else {
      $scope.message = "Too Much!";
    }
  };




}



})();
