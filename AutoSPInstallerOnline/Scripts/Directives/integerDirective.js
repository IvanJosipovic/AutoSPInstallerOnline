/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var IntegerValidator = (function () {
    function IntegerValidator() {
        this.restrict = "A";
        this.require = "ngModel";
        this.link = function (scope, element, attrs, ngModelController) {
            var INTEGER_REGEXP = /^\-?\d+$/;
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
        };
    }
    IntegerValidator.factory = function () {
        var directive = function () { return new IntegerValidator(); };
        return directive;
    };
    return IntegerValidator;
})();
angular
    .module("ASPIO")
    .directive("integer", IntegerValidator.factory());
