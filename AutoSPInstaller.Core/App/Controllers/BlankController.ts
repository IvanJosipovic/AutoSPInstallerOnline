/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";

    function BlankController($scope, xmlService) {
        var vm = this;
        function activate() {
            window.onbeforeunload = function (event) {
                // Only warn user if there is a existing Configuration
                if (xmlService.config !== null) {
                    return "Are you sure you want to leave? Any unsaved Farm Configuration will be lost!";
                }
            };
            $scope.$on("$destroy", function () {
                window.onbeforeunload = undefined;
            });
        }
        activate();
    }

    BlankController.$inject = ["$scope", "xmlService"];

    angular
        .module("ASPIO")
        .controller("Blank", BlankController);
})();
