const app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/index', {
        templateUrl: 'partials/index.html',
        controller: "indexController as idxCtrl"
    })
    .otherwise({
        redirectTo: '/index'
    })
})