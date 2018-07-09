/// <reference path="../../typings/tsd.d.ts" />
(function () {
"use strict";

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
    }

    static factory(): angular.IDirectiveFactory {
        let directive = () => new FileRead();
        return directive;
    }
}
angular
    .module("ASPIO")
    .directive("onReadFile", FileRead.factory());

})();
