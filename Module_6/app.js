(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    $scope.foodList = "";
    $scope.listResponse = "";

    $scope.countFood = function(){
        var foodCount = counter($scope.foodList);
        if (foodCount <= 0) {
            $scope.listResponse = "Please enter data first";
            $scope.myResponse = { 'color': 'red' };
            $scope.myTextBox = { 'border-color': 'red' };
        } else if (foodCount > 3) {
            $scope.listResponse = "Too much!";
            $scope.myResponse = { 'color': 'green' };
            $scope.myTextBox = { 'border-color': 'green' };
            } else {
            $scope.listResponse = "Enjoy!";
            $scope.myResponse = { 'color': 'green' };
            $scope.myTextBox = { 'border-color': 'green' };
        }
    }

    function counter (string) {
        var foodCount = 0;
        var foodArray = string.split(',');
        foodArray.forEach(function(food) {
            if (food.trim().length > 0) {
                foodCount++;
            } 
        }
        )
        return foodCount; 
    }

}

})();