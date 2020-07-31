(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuy)

.controller('AlreadyBoughtController', AlreadyBought)

.service('ShoppingListCheckOffService', CheckOutItmesService);

ToBuy.$inject=['ShoppingListCheckOffService'];

function ToBuy(ShoppingListCheckOffService){
  var buy = this;

  buy.buyItems = ShoppingListCheckOffService.getBuyItems();

  buy.moveToBought = function(itemindex)
  {
    ShoppingListCheckOffService.moveToBought(itemindex);
  };
}

AlreadyBought.$inject=['ShoppingListCheckOffService'];

function AlreadyBought(ShoppingListCheckOffService){
var bought = this;
bought.boughtItems=ShoppingListCheckOffService.getBoughtItems();

}

function CheckOutItmesService(){
  var service = this;

  var buyItems = [{name: "Milk",quantity: "2"},
 {name: "Donuts",quantity: "200"},
 {name: "Cookies",quantity: "300"},
 {name: "Chocolate",quantity: "5"},
 {name: "Ice-cream",quantity: "7"}];

 var boughtitems = [];

 service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function (){
    return boughtitems;
  };

  service.moveToBought = function(itemindex)
  {
    var tempitem = buyItems[itemindex];
    buyItems.splice(itemindex, 1);
    boughtitems.push(tempitem);
  };

}

})();
