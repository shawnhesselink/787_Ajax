(function () {
    'use strict';
    
    angular.module('Data')
    .constant('CategoriesUrl', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('ItemsUrl',  "https://davids-restaurant.herokuapp.com/menu_items.json?category=")
    .service('MenuDataService', MenuDataService);
    

    MenuDataService.$inject = ['$http', 'CategoriesUrl', 'ItemsUrl']
    function MenuDataService($http, CategoriesUrl, ItemsUrl) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (CategoriesUrl)
            })
            .then (function (result) {
                var categories = result.data;
                return categories;
            })
            .catch(function(error) {
                console.log(error);
            });      
        }

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (ItemsUrl + categoryShortName)
            })
            .then (function (result) {
                var items = result.data.menu_items;
                return items;
            }) 
            .catch(function(error) {
                console.log(error);
            });  
        }
    }

})();
    