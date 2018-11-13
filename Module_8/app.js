(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('MenuUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
}

NarrowItDownController.$inject = ['$scope'];

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowed = this;
    // narrowed.items = [];
   
    narrowed.findItems = function (searchTerm) {
        var found = MenuSearchService.getMatchedMenuItems(searchTerm);

        found.then(function (response) {
            narrowed.items = response;
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    narrowed.removeItem = function (index) {
        narrowed.items.splice(index, 1);
    }

    narrowed.isEmpty = function() {
        if ((narrowed.items) && (narrowed.items.length === 0 )) {
            return true;
        } else {
            return false;
        }
    }
}

MenuSearchService.$inject = ['$http', 'MenuUrl'];
function MenuSearchService($http, MenuUrl) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: (MenuUrl)
        })
        .then (function (result) {
            var items = result.data.menu_items;
            var foundItems = [];
            for (var i = 0; i < items.length; i++) {
                var description = items[i].description;
                if (description.toLowerCase().indexOf(searchTerm) !== -1) {
                    foundItems[foundItems.length] = items[i];
                }
            }
            return foundItems;
        })
        .catch(function(error) {
            console.log("that didn't work");
        });      
    }
}

})();