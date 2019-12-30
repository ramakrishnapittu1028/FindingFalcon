(function () {
    'use strict';

    angular
        .module('FindingFalcone', ['ngRoute', 'ui.bootstrap', 'ngSanitize'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    function config($routeProvider, $locationProvider, $httpProvider) {

        // use the HTML5 History API & set HTM5 mode true
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/findfalcone', {
                controller: 'FindFalconeController',
                templateUrl: 'components/findfalcone/findfalcone.view.html',
                controllerAs: 'vm'
            })
            .when('/report', {
                controller: 'ReportController',
                templateUrl: 'components/report/report.view.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/findfalcone' });;
    }
})();
