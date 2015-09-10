/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";

    angular
        .module("ASPIO")
        .service("xmlService", function() {
            this.config = null;
            this.context = new Jsonix.Context([ConfigModel]);

            this.LoadXml = function(xml: string) {
                const unmarshaller = this.context.createUnmarshaller();
                this.config = unmarshaller.unmarshalString(xml);
            };

            this.GetXml = function(): string {
                const marshaller = this.context.createMarshaller();
                return vkbeautify.xml(marshaller.marshalString(this.config));
            };

            this.UpgrdeXml398to399 = function(xml: string): string {
                const context = new Jsonix.Context([ConfigModel398]);
                const unmarshaller = context.createUnmarshaller();
                const marshaller = context.createMarshaller();
                const tempconfig = unmarshaller.unmarshalString(xml); // Schema change Fix
                tempconfig.value.version = "3.99";
                if (tempconfig.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup.name !== undefined) {
                    tempconfig.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup = tempconfig.value.serviceApps.enterpriseSearchService.enterpriseSearchServiceApplications.enterpriseSearchServiceApplication.proxy.proxyGroup.name;
                }
                return marshaller.marshalString(tempconfig);
            };

            this.UpgrdeXml399to3995 = function(xml: string) {
                const context = new Jsonix.Context([ConfigModel399]);
                const unmarshaller = context.createUnmarshaller();
                const marshaller = context.createMarshaller();
                const tempconfig = unmarshaller.unmarshalString(xml); // Schema change Fix
                tempconfig.value.version = "3.99.5";
                if (tempconfig.value.farm.serverRoles === undefined) {
                    tempconfig.value.farm.serverRoles = new Object;
                    tempconfig.value.farm.serverRoles.specialLoad = new Object;
                    tempconfig.value.farm.serverRoles.specialLoad.provision = "false";
                    tempconfig.value.farm.serverRoles.webFrontEnd = new Object;
                    tempconfig.value.farm.serverRoles.webFrontEnd.provision = "false";
                    tempconfig.value.farm.serverRoles.singleServerFarm = new Object;
                    tempconfig.value.farm.serverRoles.singleServerFarm.provision = "false";
                    tempconfig.value.farm.serverRoles.search = new Object;
                    tempconfig.value.farm.serverRoles.search.provision = "false";
                    tempconfig.value.farm.serverRoles.application = new Object;
                    tempconfig.value.farm.serverRoles.application.provision = "false";
                    tempconfig.value.farm.serverRoles.distributedCache = new Object;
                    tempconfig.value.farm.serverRoles.distributedCache.provision = "false";
                }
                return marshaller.marshalString(tempconfig);
            };

            this.UpgrdeXml3995to39951 = function(xml: string) {
                const context = new Jsonix.Context([ConfigModel3995]);
                const unmarshaller = context.createUnmarshaller();
                const tempconfig = unmarshaller.unmarshalString(xml); // Schema change Fix
                tempconfig.value.version = "3.99.51";
                tempconfig.value.farm.serverRoles.custom = new Object;
                tempconfig.value.farm.serverRoles.custom.provision = tempconfig.value.farm.serverRoles.specialLoad.provision;
                this.config = tempconfig;
            };

        });
})();
