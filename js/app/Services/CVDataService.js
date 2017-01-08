(function(){

angular.module('CVApp').service('CVDataService',["$http","$q",function($http,$q) {
          
            this.getData = function () {
                 var deferred = $q.defer(); 
                 
                      $http.get("/js/app/api/data.json")
                    .then(function(response) {
                      deferred.resolve(response.data);
                    });          
                  return deferred.promise;
}            

}]);


})();