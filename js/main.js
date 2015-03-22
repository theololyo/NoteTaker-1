(function() {
    "use strict";
    angular.module('noteTaker', ['controllers', 'ngRoute'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "templates/home.html"
                    })
            }])
}());
