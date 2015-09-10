/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var FileRead = (function () {
    function FileRead() {
        this.restrict = "A";
        this.scope = {
            onReadFile: "&"
        };
        this.link = function (scope, element) {
            element.on("change", function (e) {
                var files = e.target.files;
                var file = files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.$apply(function () {
                        scope.onReadFile({ data: e.target.result });
                    });
                };
                reader.readAsText(file);
            });
        };
    }
    FileRead.factory = function () {
        var directive = function () { return new FileRead(); };
        return directive;
    };
    return FileRead;
})();
angular
    .module("ASPIO")
    .directive("onReadFile", FileRead.factory());
