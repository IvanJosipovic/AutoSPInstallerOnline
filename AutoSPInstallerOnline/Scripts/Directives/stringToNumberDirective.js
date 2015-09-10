/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var StringToNumber = (function () {
    function StringToNumber() {
        this.restrict = "A";
        this.require = "ngModel";
        this.link = function (scope, element, attrs, ngModelController) {
            ngModelController.$parsers.push(function (value) {
                if (value === null) {
                    return "";
                }
                return "" + value;
            });
            ngModelController.$formatters.push(function (value) {
                return parseFloat(value);
            });
        };
    }
    StringToNumber.factory = function () {
        var directive = function () { return new StringToNumber(); };
        return directive;
    };
    return StringToNumber;
})();
angular
    .module("ASPIO")
    .directive("stringToNumber", StringToNumber.factory());
