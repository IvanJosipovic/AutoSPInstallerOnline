/// <reference path="../../typings/tsd.d.ts" />
(function () {
"use strict";

class IntegerValidator implements angular.IDirective {
    restrict = "A";
    require = "ngModel";

    link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs, ngModelController: angular.INgModelController) => {
        const INTEGER_REGEXP = /^\-?\d+$/;

        ngModelController.$validators.integer = function (modelValue, viewValue) {
            if (ngModelController.$isEmpty(modelValue)) {
                // consider empty models to be valid
                return true;
            }

            if (INTEGER_REGEXP.test(viewValue)) {
                // it is valid
                return true;
            }

            // it is invalid
            return false;
        };
    }

    static factory(): angular.IDirectiveFactory {
        let directive = () => new IntegerValidator();
        return directive;
    }
}

angular
    .module("ASPIO")
    .directive("integer", IntegerValidator.factory());

})();
