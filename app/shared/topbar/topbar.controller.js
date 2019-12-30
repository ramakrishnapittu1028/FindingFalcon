(function () {
    'use strict';

    angular.module('FindingFalcone')
    .controller('TopBarController', TopBarController);

    TopBarController.$inject = ['$location', '$scope'];
    function TopBarController($location, $scope) {

        var vm = this;
        (function initController() {
        })();
    }
})();
