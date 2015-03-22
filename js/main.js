(function() {
    "use strict";
    angular.module('noteTaker', ['mainCtrl', 'ngRoute'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when("/", {
                        templateUrl: "templates/home.html"
                    })
                    .otherwise({
                        redirectTo: "/"
                    })
            }])
}());