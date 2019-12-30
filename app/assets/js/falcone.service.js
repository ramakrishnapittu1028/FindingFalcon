(function () {
    'use strict';

    angular
        .module('FindingFalcone')
        .factory('FalconeService', FalconeService);

    FalconeService.$inject = ['$http', '$q'];
    function FalconeService($http, $q) {
        var service = {};
        service.getToken = getToken;
        service.getPlanets = getPlanets;
        service.getVehicles = getVehicles;
        service.findFalcone = findFalcone;
        return service;

        function getToken(){
            var def = $q.defer();
            var request = {method: 'POST',
                url: 'https://findfalcone.herokuapp.com/token',
                headers: { 'accept': 'application/json' }};
            $http(request)
            .success(function(response){
                def.resolve(response);
            }).error(function(error){
                def.reject(error);
            });
            return def.promise;
        }

        function getPlanets(){
            var def = $q.defer();
            $http.get('https://findfalcone.herokuapp.com/planets')
            .success(function(response){
                def.resolve(response);
            }).error(function(error){
                def.reject(error);
            });
            return def.promise;
        }

        function getVehicles(){
            var def = $q.defer();
            $http.get('https://findfalcone.herokuapp.com/vehicles')
            .success(function(response){
                def.resolve(response);
            }).error(function(error){
                def.reject(error);
            });
            return def.promise;
        }

        function findFalcone(reqBody){
            var def = $q.defer();
            var request = {method: 'POST',
                url: 'https://findfalcone.herokuapp.com/find',
                headers: { 'Accept': 'application/json', 'Content-type': 'application/json' },
                body: reqBody};
            $http(request)
            .success(function(response){
                def.resolve(response);
            }).error(function(error){
                def.reject(error);
            });
            return def.promise;
        }
    }
})();