(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['$http', 'ApiPath', 'userDataService'];
    function MyInfoController($http, ApiPath, userDataService) {
      var customer = this;
      customer.ready = false;
      customer.info = userDataService.getCustomer();
      if (customer.info) {
        var shortName = customer.info.fave.toUpperCase();
        customer.imagePath = (ApiPath + "/images/" + shortName + ".jpg");
        var menuItem = function (shortName) {
          return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
          .then(function(response) {
              customer.info.favorite = response.data;
          })
          .catch(function (error) {
              console.log(error);
          })       
        };
        menuItem(shortName);
        customer.ready = true;
      }
    }
    
    })();