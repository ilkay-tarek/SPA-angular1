(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckMessage);

LunchCheckController.$inject = [$scope];

function LunchCheckMessage($scope){
  $scope.meals="";
  $scope.message= "";

  $scope.checkMeals = function (){
    var items = calculateItems($scope.meals);
    if (items == 0)
    {
      $scope.message ="Please enter data first";
    }
    else if (items <= 3)
    {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too Much!";
    }

  };
}

function calculateItems(string){
  var itemsNumbers = 0;
  var items = string.split(',');
  if (items.leghth==1 && items[0]=="") {
    return itemsNumbers;
  }
  else {
    for (var i = 0; i < items.length; i++) {
      if (items[i]!="")
      {
        itemsNumbers++;
      }
    }
    return itemsNumbers;
        }
}

})();
