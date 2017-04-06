(function(){

    angular.module('CVApp',['ui.router']);


         angular.module('CVApp').config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/app/partials/home.html',
            contoller:'CVCtrl'
        })

        .state('feedback', {
             url: '/feedback',
            templateUrl: 'js/app/partials/feedback.html',
            contoller:'CVAboutCtrl'
        });
       
});

})();

