(function(){

    angular.module('CVApp').controller('CVCtrl',['$scope','CVDataService',function($scope,CVDataService){
     

         CVDataService.getData().then(function(result) {  
            $scope.data = result; 
             });    

    }]);


})();