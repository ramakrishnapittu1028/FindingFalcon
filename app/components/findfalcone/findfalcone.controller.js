(function () {
    'use strict';

    angular.module('FindingFalcone')
        .controller('FindFalconeController', FindFalconeController);

    FindFalconeController.$inject = ['$location', '$scope', 'FalconeService', '$sce'];
    function FindFalconeController($location, $scope, FalconeService, $sce) {

        var vm = this;
        vm.onSelectDestination = onSelectDestination;
        vm.findFalcone = findFalcone;

        vm.selectedPlanets = [];
        vm.selectedVehicles = [];
        (function initController() {
            getPlanets();
            getVehicles();
        })();

        function getPlanets() {
            var promise = FalconeService.getPlanets();
            promise.then(function (response) {
                vm.planets = response;
                console.log(response);
            })
                .catch(onError);
        }

        function getVehicles() {
            var promise = FalconeService.getVehicles();
            promise.then(function (response) {
                vm.vehicles = response;
                console.log(response);
            })
                .catch(onError);
        }

        function findFalcone() {
            var token = getToken(function (response) {
                var selectedVehs = vm.selectedVehicles.map(function (veh) {
                    return veh.name;
                });
                var selectedPlanets = vm.selectedPlanets;
                // var selectedPlanets = vm.selectedPlanets.map(function (planet) {
                //     return planet.name;
                // });
                var reqBody = { token: response.token, planet_names: selectedPlanets, vehicle_names: selectedVehs };
                var promise = FalconeService.findFalcone(reqBody);
                promise.then(function (response) {
                    if (response.success) {
                        console.log(response.planet_name);
                    } else {
                        console.log('Find Failed!!!');
                    }
                }).catch(onError);
            });
        }

        function getToken(callback) {
            var promise = FalconeService.getToken();
            promise.then(function (response) {
                callback(response);
            })
                .catch(onError);
        }

        function onSelectDestination(item, val) {
            console.log(item, val);
        }

        function onError(message) {
            console.log(message);
        }
    }
})();
