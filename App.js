(function(){
	
	angular.module("app",["ngRoute"]);
	angular.module("app").controller("ctrl",function($scope){
		
		$scope.msg = "Hello";
	});
	angular.module("app").config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});
	
	
})();