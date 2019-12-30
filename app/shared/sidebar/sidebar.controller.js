(function () {
    'use strict';

    angular.module('FindingFalcone')
    .controller('SideBarController', SideBarController);

    SideBarController.$inject = ['$location', '$scope'];
    function SideBarController($location, $scope) {

        var vm = this;
        (function initController() {
        })();
    }
})();
