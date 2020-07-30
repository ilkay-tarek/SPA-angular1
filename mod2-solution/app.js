(function (){
'use strict';

angular.module('ListBuyItems', [])

.controller('ListItemsController', ListItmes)

.controller('BoughtItemController', BuyItems)

.services('ItmesCheckOut', CheckOutItmes);

ListItemsController.$inject=['ItmesCheckOutService'];

function ListItmes('ItmesCheckOutService'){

}

BoughtItemController.$inject=['ItmesCheckOutService'];

function BuyItems(ItmesCheckOutService){

}

function CheckOutItmes(){

}

})();
