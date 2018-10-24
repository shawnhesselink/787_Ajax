(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckoffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['$scope'];
ToBuyController.$inject = ['ShoppingListCheckoffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
    }
}

AlreadyBoughtController.$inject = ['$scope'];
AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
    var service = this;

    var toBuyItems = [
        {name: "frozen pizzas", pricePerItem: 5, quantity: 2},
        {name: "frozen burritos", pricePerItem: 3, quantity: 3},
        {name: "boxes of K-cups", pricePerItem: 10, quantity: 2},
        {name: "gallons of milk", pricePerItem: 2, quantity: 1},
        {name: "boxes of cereal", pricePerItem: 3, quantity: 4}
    ];

    var boughtItems = [];


    service.getToBuyItems = function () {
        return toBuyItems;
    }

    service.getBoughtItems = function () {
        return boughtItems;
    }

    service.buyItem = function (index) {
        var name = toBuyItems[index].name;
        var quantity = toBuyItems[index].quantity;
        var pricePerItem = toBuyItems[index].pricePerItem;
        toBuyItems.splice(index, 1);
        boughtItems.push({name: name, pricePerItem: pricePerItem, quantity: quantity});       
    }
}

})();