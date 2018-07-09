/// <reference path="../typings/tsd.d.ts" />
(function () {
    "use strict";

    angular
        .module("ASPIO")
        .config(["$tooltipProvider", function($tooltipProvider) {
                $tooltipProvider.options({ appendToBody: true, popupDelay: 500 });
            }
        ])
        .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    title: "Home - AutoSPInstaller Online",
                    description: "New AutoSPInstaller Configuration Interface. Assists with PowerShell based deployments of SharePoint 2010 and 2013.",
                    templateUrl: "Partials/_homePartial.html",
                    controller: "Blank"
                })
                .when("/FarmConfiguration", {
                    title: "Farm Configuration - AutoSPInstaller Online",
                    description: "Farm Configuration interface, replacement for AutoSPInstallerGUI",
                    templateUrl: "Partials/_ASPIOPartial.html",
                    controller: "FarmConfiguration"
                })
                .when("/Guide", {
                    description: "Guide on how to use AutoSPInstaller",
                    title: "Guide - AutoSPInstaller Online",
                    templateUrl: "Partials/_guidePartial.html",
                    controller: "Blank"
                })
                .when("/Download", {
                    description: "Download the latest version of AutoSPInstaller",
                    title: "Download - AutoSPInstaller Online",
                    templateUrl: "Partials/_downloadPartial.html",
                    controller: "Blank"
                })
                .when("/Privacy", {
                    description: "Terms of Service and Privacy Policy",
                    title: "ToS & Privacy - AutoSPInstaller Online",
                    templateUrl: "Partials/_privacyPartial.html",
                    controller: "Blank"
                })
                .when("/Contact", {
                    description: "Contact Information",
                    title: "Contact - AutoSPInstaller Online",
                    templateUrl: "Partials/_contactPartial.html",
                    controller: "Blank"
                })
                .when("/News", {
                    description: "AutoSPIntaller related news",
                    title: "News - AutoSPInstaller Online",
                    templateUrl: "Partials/_newsPartial.html",
                    controller: "Blank"
                })
                .when("/FAQ", {
                    description: "Frequently Asked Questions",
                    title: "FAQ - AutoSPInstaller Online",
                    templateUrl: "Partials/_faqPartial.html",
                    controller: "Blank"
                })
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $locationProvider.hashPrefix("!");
        }])
        .run(["$location", "$rootScope", function($location, $rootScope) {
                $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
                    if (current.hasOwnProperty("$$route")) {
                        $rootScope.title = current.$$route.title;
                        $rootScope.description = current.$$route.description;
                    }
                });
            }
        ]);
})();
