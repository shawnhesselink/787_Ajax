(function () {
    'use strict';
    
    angular.module('Data')
    .component('categories', {
        templateUrl: 'src/menuapp/templates/categories.template.html',
        bindings: {
          cats: '<'
        }
    })
    .controller('CategoriesController', CategoriesController);
    
    CategoriesController.$inject = ['MenuDataService', 'cats'];
    function CategoriesController(MenuDataService, cats) {
        var categories = this;
        categories.cats = cats;
    }

})();