/// <reference path="../typings/tsd.d.ts" />
/* jshint -W097 */
"use strict";
var app = angular.module("customDirectives", []);

class ProvisionModel {
    provision: string;
    servers: Servers;
    constricutor() {
        this.servers = new Servers();
    }
}
class Servers {
    [server: string]: boolean;
}

app.directive("ngProvision", [function () {
    return {
        restrict: "E",
        scope: {
            ngModel: "=",
            servers: "="
        },
        template: "<label class='radio-inline' ng-if='servers.length === 0' tooltip='Provision'>" +
        "<input type='radio' ng-model='model.provision' value='localhost' /> Provision" +
        "</label>" +
        "<label class='radio-inline' ng-if='servers.length > 0' tooltip='Provision on all'>" +
        "<input type='radio' ng-model='model.provision' value='localhost' /> Provision on all" +
        "</label>" +
        "<label class='radio-inline' tooltip='Do not Provision'>" +
        "<input type='radio' ng-model='model.provision' value='false' /> Do not Provision" +
        "</label>" +
        "<br />" +
        "<label class='checkbox-inline' ng-repeat='server in servers' tooltip='Provision on {{ server }}'>" +
        "<input type='checkbox' ng-model='model.servers[server]' /> {{ server }}" +
        "</label>",
        controller: function ($scope) {
            // replace true with localhost as script doesn't work without it
            if ($scope.ngModel !== undefined && $scope.ngModel.toLowerCase() === "true") {
                $scope.ngModel = "localhost";
            }

            // Grab current values from the provision fields and it to the servers collection
            // Ignore if it equals any of the following keywords
            if ($scope.ngModel !== undefined && $scope.ngModel.toLowerCase() !== "false" && $scope.ngModel.toLowerCase() !== "localhost" && $scope.ngModel.toLowerCase() !== "") {
                var serversArray = $scope.ngModel.replace(/ /g, ",").toUpperCase().split(",");
                for (var i = 0, len = serversArray.length; i < len; i++) {
                    if ($scope.servers.indexOf(serversArray[i]) === -1) {
                        $scope.servers.push(serversArray[i]);
                    }
                }
            }

            // define model
            var model = new ProvisionModel();
            model.servers = new Servers();
            for (var i2 = 0, len2 = $scope.servers.length; i2 < len2; i2++) {
                model.servers[<string>$scope.servers[i2]] = false;
            }
            $scope.model = model;

            // Sets the Controls values based on current value
            function updateControls() {
                if ($scope.ngModel === undefined) {
                    return;
                }
                if ($scope.ngModel.toLowerCase() === "localhost" || $scope.ngModel.toLowerCase() === "false") {
                    $scope.model.provision = $scope.ngModel.toLowerCase();
                } else {
                    const configServers = $scope.ngModel.replace(/ /g, ",").toUpperCase().split(",");
                    let tempValue = "";
                    for (var i = 0, len = configServers.length; i < len; i++) {
                        if ($scope.servers.indexOf(configServers[i]) !== -1) {
                            $scope.model.servers[configServers[i]] = true;
                            if (tempValue.length >= 1) {
                                tempValue += "," + configServers[i];
                            } else {
                                tempValue = configServers[i];
                            }
                        }
                    }
                    // Reset the Model if no servers match the current value
                    if (tempValue === "") {
                        $scope.ngModel = "";
                    } else {
                        // Set the Model to the current list of matched servers. In case the field had a server not found in server list
                        $scope.ngModel = tempValue;
                    }
                }
            }
            updateControls();

            // Keep an eye on our list of servers, if it changes unmatched entries should be removed
            $scope.$watchCollection("servers", function () {
                updateControls();
            });

            $scope.$watchCollection("model.servers", function (newValue, oldValue) {
                if (angular.equals(oldValue, newValue)) {
                    return;
                }

                let tempValue = "";
                for (var i2 = 0, len2 = $scope.servers.length; i2 < len2; i2++) {
                    if ($scope.model.servers[$scope.servers[i2]] === true) {
                        if (tempValue.length >= 1) {
                            tempValue += "," + $scope.servers[i2];
                        } else {
                            tempValue = $scope.servers[i2];
                        }
                    }
                }

                if (tempValue !== "") {
                    $scope.ngModel = tempValue;
                    $scope.model.provision = "";
                } else if ($scope.model.provision !== "false") {
                    $scope.ngModel = "";
                }
            });

            $scope.$watch("model.provision", function (newValue, oldValue) {
                if (newValue === oldValue || newValue === "") {
                    return;
                }
                $scope.ngModel = $scope.model.provision;
                // All others should be unchecked
                for (var i = 0, len = $scope.servers.length; i < len; i++) {
                    $scope.model.servers[$scope.servers[i]] = false;
                }
            });
        }
    };
}]);

app.directive("ensureExpression", ["$parse", function ($parse) {
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

//From http://stackoverflow.com/questions/29498918/how-to-wait-for-a-callback-to-be-executed-inside-a-angularjs-directive-unit-test
interface IFileReadScope extends angular.IScope {
    onReadFile(data: any): void;
}

class FileRead implements angular.IDirective {
    restrict = "A";
    scope = {
        onReadFile: "&"
    };

    link = (scope: IFileReadScope, element: angular.IAugmentedJQuery) => {
        element.on("change", (e: Event) => {
            let files: FileList = (<HTMLInputElement> e.target).files;
            let file: File = files[0];
            let reader = new FileReader();

            reader.onload = (e: Event) => {
                scope.$apply(() => {
                    scope.onReadFile({ data: (<FileReader> e.target).result });
                });
            };

            reader.readAsText(file);
        });
    };

    static factory(): angular.IDirectiveFactory {
        let directive = () => new FileRead();
        return directive;
    }
}
app.directive("onReadFile", FileRead.factory());

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
    };

    static factory(): angular.IDirectiveFactory {
        let directive = () => new IntegerValidator();
        return directive;
    }
}
app.directive("integer", IntegerValidator.factory());

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
    };

    static factory(): angular.IDirectiveFactory {
        let directive = () => new StringToNumber();
        return directive;
    }
}
app.directive("stringToNumber", StringToNumber.factory());
