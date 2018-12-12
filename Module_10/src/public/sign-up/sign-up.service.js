(function() {
"use strict";

angular.module('public')
.service('userDataService', function() {

    var service = this;
    var customer;

    service.setCustomer = function(user) {
        customer = user;
    };

    service.getCustomer = function() {
        return customer;
    };
})


})();