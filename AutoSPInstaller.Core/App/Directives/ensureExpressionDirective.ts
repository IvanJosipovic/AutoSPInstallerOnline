/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";

    angular
        .module("ASPIO")
        .directive("ensureExpression", ["$parse", function ($parse) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, ele, attrs, ngModelController) {
                    function validate() {
                        const expressionResults = $parse(attrs.ensureExpression)(scope);
                        for (var expressionName in expressionResults) {
                            if (expressionResults.hasOwnProperty(expressionName)) {
                                ngModelController.$setValidity(expressionName, expressionResults[expressionName]);
                            }
                        }
                    }
                    scope.$watch(attrs.ngModel, function () {
                        validate();
                    });
                    if ("ensureWatch" in attrs) {
                        scope.$watch(attrs.ensureWatch, function () {
                            validate();
                        });
                    }
                    if ("ensureWatchDeep" in attrs) {
                        scope.$watch(attrs.ensureWatchDeep, function () {
                            validate();
                        }, true);
                    }
                    if ("ensureWatchCollection" in attrs) {
                        scope.$watchCollection(attrs.ensureWatchCollection, function () {
                            validate();
                        });
                    }
                }
            };
        }]);
})();
