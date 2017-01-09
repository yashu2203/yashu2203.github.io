(function(){

    angular.module('CVApp',['ui.router']);


         angular.module('CVApp').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/app/partials/home.html',
            contoller:'CVCtrl'
        })

        .state('about', {
             url: '/about',
            templateUrl: 'js/app/partials/about.html',
            contoller:'CVAboutCtrl'
        });
        
});

})();