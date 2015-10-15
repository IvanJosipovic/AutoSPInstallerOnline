/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    function xmlService() {
        this.config = null;
        this.context = new Jsonix.Context([ConfigModel]);
        this.LoadXml = function (xml) {
            var unmarshaller = this.context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
        };
        this.GetXml = function () {
            var marshaller = this.context.createMarshaller();
            return vkbeautify.xml(marshaller.marshalString(this.config));
        };
        // Public Functions
        this.UpgrdeXml398to399 = function (xml) {
            var context = new Jsonix.Context([ConfigModel398]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde398to399();
        };
        this.UpgrdeXml399to3995 = function (xml) {
            var context = new Jsonix.Context([ConfigModel399]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde399to3995();
        };
        this.UpgrdeXml3995to39951 = function (xml) {
            var context = new Jsonix.Context([ConfigModel3995]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde3995to39951();
        };
        // Multi version jumps
        this.UpgrdeXml398to39951 = function (xml) {
            this.UpgrdeXml398to399(xml);
            this.Upgrde399to3995();
            this.Upgrde3995to39951();
        };
        this.UpgrdeXml399to39951 = function (xml) {
            this.UpgrdeXml399to3995(xml);
            this.Upgrde3995to39951();
        };
        // Private Functions
        this.Upgrde398to399 = function () {
            this.config.value.version = "3.99";
            if (this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup.name !== undefined) {
                this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup = this.config.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup.name;
            }
        };
        this.Upgrde399to3995 = function () {
            this.config.value.version = "3.99.5";
            if (this.config.value.farm.serverRoles === undefined) {
                this.config.value.farm.serverRoles = new Object;
                this.config.value.farm.serverRoles.specialLoad = new Object;
                this.config.value.farm.serverRoles.specialLoad.provision = "false";
                this.config.value.farm.serverRoles.webFrontEnd = new Object;
                this.config.value.farm.serverRoles.webFrontEnd.provision = "false";
                this.config.value.farm.serverRoles.singleServerFarm = new Object;
                this.config.value.farm.serverRoles.singleServerFarm.provision = "false";
                this.config.value.farm.serverRoles.search = new Object;
                this.config.value.farm.serverRoles.search.provision = "false";
                this.config.value.farm.serverRoles.application = new Object;
                this.config.value.farm.serverRoles.application.provision = "false";
                this.config.value.farm.serverRoles.distributedCache = new Object;
                this.config.value.farm.serverRoles.distributedCache.provision = "false";
            }
        };
        this.Upgrde3995to39951 = function () {
            this.config.value.version = "3.99.51";
            this.config.value.farm.serverRoles.custom = new Object;
            this.config.value.farm.serverRoles.custom.provision = this.config.value.farm.serverRoles.specialLoad.provision;
        };
    }
    ;
    angular
        .module("ASPIO")
        .service("xmlService", xmlService);
})();
