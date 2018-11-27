(function () {
    'use strict';
    
    angular.module('Data')
    .component('items', {
        templateUrl: 'src/menuapp/templates/items.template.html',
        bindings: {
          menu_items: '<'
        }
    })
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['MenuDataService', 'menu_items'];
    function ItemsController(MenuDataService, menu_items) {
        var items = this;
        items.menu_items = menu_items;
    }

})();