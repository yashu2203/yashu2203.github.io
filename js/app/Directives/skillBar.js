(function(){

angular.module('CVApp').directive("skillLevel", function() {
    return {
       
        scope: {
            level: '@',
            name:'@'
        },
         template : '<p>{{name}}</p><span class="progress-bg"><span class="progress-bar" style="width:{{level}}%;">{{level}}%</span></span>',
    };
});

})();