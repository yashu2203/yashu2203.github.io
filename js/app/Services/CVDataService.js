(function(){

angular.module('CVApp').service('CVDataService',["$http","$q",function($http,$q) {
          
            this.getCVData = function () {
                 var deferred = $q.defer(); 
                 
                      $http.get("/js/app/api/cvdata.json")
                    .then(function(response) {
                      deferred.resolve(response.data);
                    });          
                  return deferred.promise;
}            

}]);

})();