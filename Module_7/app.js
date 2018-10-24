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
        {name: "pizzas", quantity: 2},
        {name: "burritos", quantity: 3},
        {name: "eggs", quantity: 12},
        {name: "milk", quantity: 1},
        {name: "cereal", quantity: 4}
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
        toBuyItems.splice(index, 1);
        boughtItems.push({name: name, quantity: quantity});       
    }
}

})();