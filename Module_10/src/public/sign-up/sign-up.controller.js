(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['$http', 'ApiPath', 'userDataService'];
    function SignUpController($http, ApiPath, userDataService) {
        var reg = this;

        reg.checkFave = function() {
            var fave = reg.user.fave.toUpperCase();
            reg.menuItem = function (fave) {
                return $http.get(ApiPath + '/menu_items/' + fave + '.json')
                .then(function(response) {
                    reg.badInput = false;
                })
                .catch(function (error) {
                    reg.badInput = true;
                })
            };
        reg.menuItem(fave);
        };

        reg.submit = function() {
            var user = reg.user;
            userDataService.setCustomer(user);
            reg.saved = true;
        }
    }
})();