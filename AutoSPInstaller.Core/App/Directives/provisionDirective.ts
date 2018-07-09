/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    angular
        .module("ASPIO")
        .directive("ngProvision", [function () {
            return {
                restrict: "E",
                scope: {
                    ngModel: "=",
                    servers: "="
                },
                template: "<label class='radio-inline' ng-if='servers.length === 0' uib-tooltip='Provision'>" +
                "<input type='radio' ng-model='model.provision' value='localhost' /> Provision" +
                "</label>" +
                "<label class='radio-inline' ng-if='servers.length > 0' uib-tooltip='Provision on all'>" +
                "<input type='radio' ng-model='model.provision' value='localhost' /> Provision on all" +
                "</label>" +
                "<label class='radio-inline' uib-tooltip='Do not Provision'>" +
                "<input type='radio' ng-model='model.provision' value='false' /> Do not Provision" +
                "</label>" +
                "<br />" +
                "<label class='checkbox-inline' ng-repeat='server in servers' uib-tooltip='Provision on {{ server }}'>" +
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
                            // Assume we are dealing with a list of servers
                            const configServers = $scope.ngModel.replace(/ /g, ",").toUpperCase().split(",");
                            let resetModel = true;
                            let tempValue = "";
                            for (var i = 0, len = configServers.length; i < len; i++) {
                                if ($scope.servers.indexOf(configServers[i]) !== -1) {
                                    $scope.model.servers[configServers[i]] = true;
                                    if (tempValue.length >= 1) {
                                        tempValue += "," + configServers[i];
                                    } else {
                                        tempValue = configServers[i];
                                    }
                                    resetModel = false;
                                }
                            }
                            // Reset the Model if no servers match the current value
                            if (resetModel) {
                                $scope.ngModel = "";
                            } else {
                                // Set the Model to the current list of matched servers. In cause the field had a server not found in server list
                                $scope.ngModel = tempValue;
                            }
                        }
                    }
                    updateControls();

                    // Keep an eye on our list of servers, if it changes unmatched entries should be removed
                    $scope.$watchCollection("servers", function () {
                        updateControls();
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

                    $scope.$watchCollection("model.servers", function (newValue, oldValue) {
                        if (angular.equals(oldValue, newValue)) {
                            return;
                        }

                        // Check if any Servers are Checked, otherwise we wont run
                        var shouldRun = false;
                        for (var i = 0, len = $scope.servers.length; i < len; i++) {
                            if ($scope.model.servers[$scope.servers[i]] === true) {
                                shouldRun = true;
                            }
                        }

                        if (shouldRun) {
                            // All others should be unchecked
                            $scope.model.provision = "";
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
                            $scope.ngModel = tempValue;
                        } else if ($scope.model.provision === "") {
                            // Provision Radio is unchecked, and all Server checkboxes are unchecked
                            $scope.ngModel = "";
                        }
                    });
                }
            };
        }]);
})();
