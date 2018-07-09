/// <reference path="../../typings/tsd.d.ts" />
(function () {
"use strict";

class StringToNumber implements angular.IDirective {
    restrict = "A";
    require = "ngModel";

    link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs, ngModelController: angular.INgModelController) => {
        ngModelController.$parsers.push(function (value) {
            if (value === null) {
                return "";
            }
            return "" + value;
        });
        ngModelController.$formatters.push(function (value) {
            return parseFloat(value);
        });
    }

    static factory(): angular.IDirectiveFactory {
        let directive = () => new StringToNumber();
        return directive;
    }
}

angular
    .module("ASPIO")
    .directive("stringToNumber", StringToNumber.factory());
})();
