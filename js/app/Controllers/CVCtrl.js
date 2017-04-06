(function(){
    angular.module('CVApp').controller('CVCtrl',['$scope','CVDataService','$state',function($scope,CVDataService,$state){
         CVDataService.getCVData().then(function(result) {  
            $scope.data = result; 
             });  

              $scope.goToFeedback = function(){
                    $state.go("feedback");
        }
  
    }]);

       
})();