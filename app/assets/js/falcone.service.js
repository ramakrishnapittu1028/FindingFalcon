(function () {
    'use strict';

    angular
        .module('FindingFalcone')
        .factory('FalconeService', FalconeService);

    FalconeService.$inject = ['$http', 'APIURL'];
    function FalconeService($http, APIURL) {
        var service = {};
        service.getToken = getToken;
        service.getPlanets = getPlanets;
        service.getVehicles = getVehicles;
        service.findFalcone = findFalcone;
        return service;

        function getToken(){
            var request = {method: 'POST',
                url: 'https://findfalcone.herokuapp.com/token',
                headers: { 'accept': 'application/json' }};
            return $http.post(request);
        }

        function getPlanets(){
            return $http.get('https://findfalcone.herokuapp.com/planets');
        }

        function getVehicles(){
            return $http.get('https://findfalcone.herokuapp.com/vehicles');
        }

        function findFalcone(reqBody){
            var request = {method: 'POST',
                url: 'https://findfalcone.herokuapp.com/find',
                headers: { 'accept': 'application/json', 'content-type': 'application/json' }};
            return $http.post(request, reqBody);
        }
    }
})();