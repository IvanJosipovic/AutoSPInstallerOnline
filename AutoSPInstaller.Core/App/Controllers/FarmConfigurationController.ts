/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";

    angular
        .module("ASPIO")
        .controller("FarmConfiguration", ["$scope", "xmlService", function ($scope, xmlService) {
            window.onbeforeunload = function (event) {
                // Only warn user if there is a existing Configuration
                if (xmlService.config !== null) {
                    return "Are you sure you want to leave? Any unsaved Farm Configuration will be lost!";
                }
            };

            $scope.$on("$destroy", function () {
                window.onbeforeunload = undefined;
            });

            $scope.config = xmlService.config;

            $scope.loadXML = function (xml: string) {
                try {
                    // Try to Upgrade XML to Current Version
                    if (xml.indexOf("Version='3.99.60'") !== -1 || xml.indexOf("Version=\"3.99.60\"") !== -1) {
                        xmlService.LoadXml(xml);
                    } else if (xml.indexOf("Version='3.99.51'") !== -1 || xml.indexOf("Version=\"3.99.51\"") !== -1) {
                        xmlService.UpgrdeXml39951to39960(xml);
                        alert("Your XML Schema was upgraded from 3.99.51 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    } else if (xml.indexOf("Version='3.99.5'") !== -1 || xml.indexOf("Version=\"3.99.5\"") !== -1) {
                        xmlService.UpgrdeXml3995toLatest(xml);
                        alert("Your XML Schema was upgraded from 3.99.5 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    } else if (xml.indexOf("Version='3.99'") !== -1 || xml.indexOf("Version=\"3.99\"") !== -1) {
                        xmlService.UpgrdeXml399toLatest(xml);
                        alert("Your XML Schema was upgraded from 3.99 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    } else if (xml.indexOf("Version='3.98'") !== -1 || xml.indexOf("Version=\"3.98\"") !== -1) {
                        xmlService.UpgrdeXml398toLatest(xml);
                        alert("Your XML Schema was upgraded from 3.98 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    } else {
                        alert("This XML Version is not supported. We only support the XML version 3.98 and later. Please download the latest version of AutoSPInstaller or manually update the XML to reflect the new changes.");
                        return;
                    }

                    $scope.config = xmlService.config;

                    // Initialize Managed Account Array
                    if (!$scope.config.value.farm.managedAccounts.managedAccount) {
                        $scope.config.value.farm.managedAccounts.managedAccount = [];
                    }

                    // Initialize Web App Array
                    if (!$scope.config.value.webApplications.webApplication) {
                        $scope.config.value.webApplications.webApplication = [];
                    }

                    // Fix WebApp Managed Paths and Site Collection Arrays
                    for (var i = 0, len = $scope.config.value.webApplications.webApplication.length; i < len; i++) {
                        if (!$scope.config.value.webApplications.webApplication[i].managedPaths.managedPath) {
                            $scope.config.value.webApplications.webApplication[i].managedPaths.managedPath = [];
                        }
                        if (!$scope.config.value.webApplications.webApplication[i].siteCollections.siteCollection) {
                            $scope.config.value.webApplications.webApplication[i].siteCollections.siteCollection = [];
                        }
                    }
                } catch (err) {
                    alert("There is an issue with the XML. Please check that its a valid XML and that it is at least version 3.98. Error: " + err.message);
                    return;
                }
                $scope.setView("Servers");
            };

            $scope.loadTemplate = function () {
                $scope.loadXML("<Configuration Environment='Dev' Version='3.99.60'><Install SPVersion='2019'><ConfigFile>config-AutoSPInstaller.xml</ConfigFile><InstallDir></InstallDir><DataDir></DataDir><PIDKey></PIDKey><SKU>Enterprise</SKU><OfflineInstall>false</OfflineInstall><PauseAfterInstall>false</PauseAfterInstall><RemoteInstall Enable='false'><ParallelInstall>false</ParallelInstall></RemoteInstall><AutoAdminLogon Enable='false'><Password></Password></AutoAdminLogon><Disable><LoopbackCheck>true</LoopbackCheck><UnusedServices>true</UnusedServices><IEEnhancedSecurity>true</IEEnhancedSecurity><CertificateRevocationListCheck>false</CertificateRevocationListCheck></Disable></Install><Farm><Passphrase></Passphrase><Account><AddToLocalAdminsDuringSetup>true</AddToLocalAdminsDuringSetup><LeaveInLocalAdmins>false</LeaveInLocalAdmins><Username>CONTOSO\\SP_Farm</Username><Password></Password></Account><CentralAdmin Provision='localhost'><Database>Content_CentralAdmin</Database><Port>2019</Port><UseSSL>true</UseSSL></CentralAdmin><Database><DBServer></DBServer><DBAlias Create='true'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias><DBPrefix>AutoSPInstaller</DBPrefix><ConfigDB>Config</ConfigDB></Database><Services><SandboxedCodeService Start='false'/><ClaimsToWindowsTokenService Start='false' UpdateAccount='false'/><SMTP Install='false'/><OutgoingEmail Configure='false'><SMTPServer></SMTPServer><EmailAddress></EmailAddress><ReplyToEmail></ReplyToEmail></OutgoingEmail><IncomingEmail Start='localhost'/><DistributedCache Start='localhost'/><WorkflowTimer Start='localhost'/><FoundationWebApplication Start='localhost'/></Services><ServerRoles><Custom Provision='localhost'/><WebFrontEnd Provision='false'/><WebFrontEndWithDistributedCache Provision='false'/><SingleServerFarm Provision='false'/><Search Provision='false'/><Application Provision='false'/><ApplicationWithSearch Provision='false'/><DistributedCache Provision='false'/></ServerRoles><ManagedAccounts><ManagedAccount CommonName='spservice'><Username>CONTOSO\\SP_Services</Username><Password></Password></ManagedAccount><ManagedAccount CommonName='Portal'><Username>CONTOSO\\SP_PortalAppPool</Username><Password></Password></ManagedAccount><ManagedAccount CommonName='MySiteHost'><Username>CONTOSO\\SP_ProfilesAppPool</Username><Password></Password></ManagedAccount><ManagedAccount CommonName='SearchService'><Username>CONTOSO\\SP_SearchService</Username><Password></Password></ManagedAccount></ManagedAccounts><ObjectCacheAccounts><SuperUser>CONTOSO\\SP_CacheSuperUser</SuperUser><SuperReader>CONTOSO\\SP_CacheSuperReader</SuperReader></ObjectCacheAccounts><Logging><IISLogs Compress='true'><Path></Path></IISLogs><ULSLogs Compress='true'><LogLocation></LogLocation><LogDiskSpaceUsageGB></LogDiskSpaceUsageGB><DaysToKeepLogs></DaysToKeepLogs><LogCutInterval></LogCutInterval></ULSLogs><UsageLogs Compress='true'><UsageLogDir></UsageLogDir><UsageLogMaxSpaceGB></UsageLogMaxSpaceGB><UsageLogCutTime></UsageLogCutTime></UsageLogs></Logging></Farm><WebApplications AddURLsToHOSTS='true'><WebApplication Name='Portal Home'><Type>Portal</Type><ApplicationPool>portal.contoso.com</ApplicationPool><Url>http://portal.contoso.com</Url><Port>80</Port><UseHostHeader>false</UseHostHeader><AddURLToLocalIntranetZone>true</AddURLToLocalIntranetZone><GrantCurrentUserFullControl>true</GrantCurrentUserFullControl><UseClaims>true</UseClaims><UseBasicAuthentication>false</UseBasicAuthentication><UseOnlineWebPartCatalog>false</UseOnlineWebPartCatalog><Database><Name>Content_Portal</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database><ManagedPaths><ManagedPath relativeUrl='help' explicit='true'/></ManagedPaths><SiteCollections><SiteCollection siteUrl='http://portal.contoso.com'><Name>Portal Home</Name><Description>Portal Home Site</Description><HostNamedSiteCollection>false</HostNamedSiteCollection><Owner></Owner><CustomDatabase></CustomDatabase><SearchUrl>http://portal.contoso.com/search</SearchUrl><Template>SITEPAGEPUBLISHING#0</Template><LCID>1033</LCID><Locale>en-us</Locale><Time24>false</Time24></SiteCollection></SiteCollections></WebApplication><WebApplication Name='MySite Host'><Type>MySiteHost</Type><ApplicationPool>mysites.contoso.com</ApplicationPool><Url>http://mysites.contoso.com</Url><Port>80</Port><UseHostHeader>true</UseHostHeader><AddURLToLocalIntranetZone>true</AddURLToLocalIntranetZone><GrantCurrentUserFullControl>true</GrantCurrentUserFullControl><UseClaims>true</UseClaims><UseBasicAuthentication>false</UseBasicAuthentication><UseOnlineWebPartCatalog>false</UseOnlineWebPartCatalog><Database><Name>Content_MySites</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database><ManagedPaths><ManagedPath relativeUrl='personal' explicit='false'/></ManagedPaths><SiteCollections><SiteCollection siteUrl='http://mysites.contoso.com'><Name>My Site Host</Name><Description>My Site Host</Description><HostNamedSiteCollection>false</HostNamedSiteCollection><Owner></Owner><CustomDatabase></CustomDatabase><SearchUrl>http://portal.contoso.com/search</SearchUrl><Template>SPSMSITEHOST#0</Template><LCID>1033</LCID><Locale>en-us</Locale><Time24>false</Time24></SiteCollection></SiteCollections></WebApplication></WebApplications><ServiceApps><ManagedMetadataServiceApp Provision='localhost'><Name>Managed Metadata Service</Name><ProxyName>Managed Metadata Service</ProxyName><Database><Name>Metadata</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></ManagedMetadataServiceApp><UserProfileServiceApp Provision='localhost'><Name>User Profile Service Application</Name><ProxyName>User Profile Service Application</ProxyName><MySiteHostLocation></MySiteHostLocation><MySiteManagedPath>personal</MySiteManagedPath><EnableNetBIOSDomainNames>false</EnableNetBIOSDomainNames><StartProfileSync>true</StartProfileSync><CreateDefaultSyncConnection>false</CreateDefaultSyncConnection><SyncConnectionAccount>CONTOSO\\SP_ProfileSync</SyncConnectionAccount><SyncConnectionAccountPassword></SyncConnectionAccountPassword><Database><ProfileDB>Profile</ProfileDB><SyncDB>Profile_Sync</SyncDB><SocialDB>Profile_Social</SocialDB><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></UserProfileServiceApp><EnterpriseSearchService Provision='localhost'><ContactEmail></ContactEmail><ConnectionTimeout>60</ConnectionTimeout><AcknowledgementTimeout>60</AcknowledgementTimeout><ProxyType>Default</ProxyType><IgnoreSSLWarnings>true</IgnoreSSLWarnings><InternetIdentity>Mozilla/4.0 (compatible; MSIE 4.01; Windows NT; MS Search 6.0 Robot)</InternetIdentity><CustomIndexLocation></CustomIndexLocation><PerformanceLevel>PartlyReduced</PerformanceLevel><ShareName>SearchIndex</ShareName><EnterpriseSearchServiceApplications><EnterpriseSearchServiceApplication Name='Search Service Application'><FailoverDatabaseServer></FailoverDatabaseServer><Partitioned>false</Partitioned><Partitions>1</Partitions><SearchServiceApplicationType>Regular</SearchServiceApplicationType><ContentAccessAccount>CONTOSO\\SP_SearchContent</ContentAccessAccount><ContentAccessAccountPassword></ContentAccessAccountPassword><Database><Name>Search</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database><ApplicationPool Name='SharePoint Search Application Pool'/><CrawlComponent Provision='localhost'/><QueryComponent Provision='localhost'/><SearchQueryAndSiteSettingsComponent Provision='localhost'/><AdminComponent Provision='localhost'><ApplicationPool Name='SharePoint Search Application Pool'/></AdminComponent><IndexComponent Provision='localhost'/><ContentProcessingComponent Provision='localhost'/><AnalyticsProcessingComponent Provision='localhost'/><Proxy Name='Search Service Application'><Partitioned>false</Partitioned><ProxyGroup>Default</ProxyGroup></Proxy><SearchCenterUrl></SearchCenterUrl></EnterpriseSearchServiceApplication></EnterpriseSearchServiceApplications></EnterpriseSearchService><StateService Provision='localhost'><Name>State Service</Name><ProxyName>State Service</ProxyName><Database><Name>StateService</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></StateService><WebAnalyticsService Provision='localhost'><Name>Web Analytics Service Application</Name><Database><ReportingDB>WebAnalyticsReporting</ReportingDB><StagingDB>WebAnalyticsStaging</StagingDB><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></WebAnalyticsService><SPUsageService Provision='localhost'><Name>Usage and Health Data Collection</Name><Database><Name>UsageAndHealth</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></SPUsageService><SecureStoreService Provision='localhost'><Name>Secure Store Service</Name><ProxyName>Secure Store Service</ProxyName><Database><Name>SecureStore</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></SecureStoreService><BusinessDataConnectivity Provision='false'><Name>Business Data Connectivity Service</Name><ProxyName>Business Data Connectivity Service</ProxyName><Database><Name>BusinessDataCatalog</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></BusinessDataConnectivity><WordAutomationService Provision='false'><Name>Word Automation Services</Name><ProxyName>Word Automation Services</ProxyName><Database><Name>WordAutomation</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></WordAutomationService><AppManagementService Provision='localhost'><Name>App Management Service</Name><ProxyName>App Management Service</ProxyName><AppDomain>apps.contoso.com</AppDomain><Database><Name>AppManagement</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></AppManagementService><SubscriptionSettingsService Provision='localhost'><Name>Subscription Settings Service</Name><AppSiteSubscriptionName>app</AppSiteSubscriptionName><Database><Name>SubscriptionSettings</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></SubscriptionSettingsService><WorkManagementService Provision='localhost'><Name>Work Management Service Application</Name><ProxyName>Work Management Service Application</ProxyName></WorkManagementService><MachineTranslationService Provision='localhost'><Name>Machine Translation Service</Name><ProxyName>Machine Translation Service</ProxyName><Database><Name>TranslationService</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></MachineTranslationService><PowerPointConversionService Provision='localhost'><Name>PowerPoint Conversion Service Application</Name><ProxyName>PowerPoint Conversion Service Application</ProxyName></PowerPointConversionService></ServiceApps><EnterpriseServiceApps><ExcelServices Provision='false'><Name>Excel Services Application</Name><UnattendedIDUser>CONTOSO\\SP_ExcelUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword></ExcelServices><VisioService Provision='false'><Name>Visio Graphics Service</Name><ProxyName>Visio Graphics Service</ProxyName><UnattendedIDUser>CONTOSO\\SP_VisioUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword></VisioService><AccessService Provision='false'><Name>Access 2010 Service</Name><ProxyName>Access 2010 Service</ProxyName></AccessService><AccessServices Provision='false'><Name>Access Services</Name><ProxyName>Access Services</ProxyName><Database><Name>AccessServices</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></AccessServices><PerformancePointService Provision='false'><Name>PerformancePoint Service</Name><ProxyName>PerformancePoint Service</ProxyName><UnattendedIDUser>CONTOSO\\SP_PerfPointUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword><Database><Name>PerformancePoint</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></PerformancePointService></EnterpriseServiceApps><OfficeWebApps Install='false'><ConfigFile>config-OWA-2010.xml</ConfigFile><PIDKeyOWA></PIDKeyOWA><ExcelService Provision='false'><Name>Excel Web App</Name><ProxyName>Excel Web App</ProxyName><UnattendedIDUser>CONTOSO\\SP_ExcelUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword></ExcelService><WordViewingService Provision='false'><Name>Word Viewing Service</Name><ProxyName>Word Viewing Service</ProxyName></WordViewingService><PowerPointService Provision='false'><Name>PowerPoint Service Application</Name><ProxyName>PowerPoint Service Application</ProxyName></PowerPointService></OfficeWebApps><ProjectServer Install='false'><ConfigFile>config-ProjectServer2013.xml</ConfigFile><PIDKeyProjectServer></PIDKeyProjectServer><ServiceApp Provision='localhost'><Name>Project Server Service Application</Name><ProxyName>Project Server Service Application</ProxyName><ManagedPath>PWA</ManagedPath><ServiceAccount>CONTOSO\\SP_ProjectServer</ServiceAccount><ServiceAccountPassword></ServiceAccountPassword><Database><Name>ProjectServer</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></ServiceApp></ProjectServer><AdobePDF><iFilter Install='false'/><Icon Configure='true'/><MIMEType Configure='true'/></AdobePDF><ForeFront Install='false'><ConfigFile>answerfile-ForeFront-2010.xml</ConfigFile></ForeFront></Configuration>");
            };

            $scope.view = "Servers";

            $scope.setView = function (view: string) {
                if (view === "Review") {
                    try {
                        $scope.output = xmlService.GetXml();
                    } catch (err) {
                        alert("An error has occurred, please contact us below with steps on how to reproduce the issue. Error: " + err.message);
                        return;
                    }
                }

                $scope.view = view;
            };

            $scope.clearConfig = function () {
                if (confirm("Are you sure you want to clear the current configuration?")) {
                    $scope.config = null;
                    $scope.serversArray = [];
                }
            };

            // Server Section (move this to directive?)
            $scope.selectedServer = "";
            $scope.serversArray = [];
            $scope.addServer = function (server: string) {
                if (!server || server.toUpperCase() === "LOCALHOST") {
                    return;
                }

                server = server.toUpperCase().trim();

                if ($scope.serversArray.indexOf(server) === -1) {
                    $scope.serversArray.push(server);
                    $scope.newServer = "";
                }
            };
            $scope.removeServer = function () {
                if (this.serversArray.indexOf(this.selectedServer) > -1) {
                    this.serversArray.splice(this.serversArray.indexOf(this.selectedServer), 1);
                    if (this.serversArray.length > 0) {
                        this.selectedServer = this.serversArray[0];
                    }
                }
            };
            $scope.$watchCollection("serversArray", function () {
                if ($scope.serversArray.length > 0) {
                    $scope.selectedServer = $scope.serversArray[0];
                }
            });

            // Add/Remove Components
            $scope.addManagedAccount = function () {
                const managedAccount = new ManagedAccount();
                this.config.value.farm.managedAccounts.managedAccount.push(managedAccount);
            };
            $scope.removeManagedAccount = function (index: number) {
                this.config.value.farm.managedAccounts.managedAccount.splice(index, 1);
            };

            $scope.addWebApp = function () {
                const webApp = new WebApplication();
                webApp.name = "New" + this.config.value.webApplications.webApplication.length;

                this.config.value.webApplications.webApplication.push(webApp);
            };
            $scope.removeWebApp = function (index: number) {
                this.config.value.webApplications.webApplication.splice(index, 1);
            };

            $scope.addSiteCollection = function (siteCollections: Array<SiteCollection>, webAppUrl: string) {
                const siteCollection = new SiteCollection();
                siteCollection.siteUrl = webAppUrl + "/sites/NewSite" + siteCollections.length;

                siteCollections.push(siteCollection);
            };
            $scope.removeSiteCollection = function (siteCollections: Array<SiteCollection>, index: number) {
                siteCollections.splice(index, 1);
            };

            $scope.addManagedPath = function (managedPaths: Array<ManagedPath>) {
                const managedPath = new ManagedPath();
                managedPaths.push(managedPath);
            };
            $scope.removeManagedPath = function (managedPaths: Array<ManagedPath>, index: number) {
                managedPaths.splice(index, 1);
            };

            // Custom Validators
            $scope.validateminroles = function () {
                var serversArray = [];
                var valid = true;

                // validate that each server is only selected once.
                function validateSingleUse(provisionField: string) {
                    if (provisionField !== undefined && provisionField !== null && provisionField !== "" && provisionField.toLowerCase() !== "false") {
                        const tempArray = provisionField.replace(/ /g, ",").toUpperCase().split(",");
                        for (var i = 0, len = tempArray.length; i < len; i++) {
                            if (serversArray.indexOf(tempArray[i]) === -1) {
                                if (serversArray.length === 0 || (serversArray.length !== 0 && tempArray[i] !== "LOCALHOST" && serversArray.indexOf("LOCALHOST") === -1)) {
                                    serversArray.push(tempArray[i]);
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        }
                    }
                    return true;
                }

                valid = validateSingleUse(this.config.value.farm.serverRoles.webFrontEnd.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.webFrontEndWithDistributedCache.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.application.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.applicationWithSearch.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.distributedCache.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.search.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.custom.provision);
                if (!valid) {
                    return false;
                }
                valid = validateSingleUse(this.config.value.farm.serverRoles.singleServerFarm.provision);
                if (!valid) {
                    return false;
                }

                // Validate that each server is used once.
                if (serversArray.length === 0 || serversArray.indexOf("LOCALHOST") === -1 && serversArray.length !== $scope.serversArray.length) {
                    valid = false;
                }

                return valid;
            };
            $scope.validateManagedAccounts = function () {
                if (this.config.value.farm.managedAccounts.managedAccount.length === 0) {
                    return false;
                }

                if (this.config.value.serviceApps.enterpriseSearchService.provision !== "false") {
                    let isFoundSearch = false;
                    for (var i = 0, len = this.config.value.farm.managedAccounts.managedAccount.length; i < len; i++) {
                        if (this.config.value.farm.managedAccounts.managedAccount[i].commonName !== undefined && this.config.value.farm.managedAccounts.managedAccount[i].commonName.toLowerCase() === "searchservice") {
                            isFoundSearch = true;
                        }
                    }
                    if (isFoundSearch === false) {
                        return false;
                    }
                }

                var isFound = false;
                for (var i2 = 0, len2 = this.config.value.farm.managedAccounts.managedAccount.length; i2 < len2; i2++) {
                    if (this.config.value.farm.managedAccounts.managedAccount[i2].commonName !== undefined && this.config.value.farm.managedAccounts.managedAccount[i2].commonName.toLowerCase() === "spservice") {
                        isFound = true;
                    }
                }
                return isFound;
            };
            $scope.validateWebAppType = function (webAppType: string) {
                var isFound = false;
                for (var i = 0, len = this.config.value.farm.managedAccounts.managedAccount.length; i < len; i++) {
                    if (this.config.value.farm.managedAccounts.managedAccount[i].commonName === webAppType) {
                        isFound = true;
                    }
                }
                return isFound;
            };
            $scope.validateWebTemplate = function (template: string, webTemplates) {
                if (template === null) {
                    return true;
                }

                var isFound = false;
                if (webTemplates[template] !== undefined) {
                    isFound = true;
                }
                return isFound;
            };
            $scope.validatePassword = function (password: string) {
                if (password === undefined) {
                    return;
                }
                const anUpperCase = /[A-Z]/;
                const aLowerCase = /[a-z]/;
                const aNumber = /[0-9]/;
                const aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
                if (password.length < 9) {
                    return false;
                }

                var numUpper = 0;
                var numLower = 0;
                var numNums = 0;
                var numSpecials = 0;
                for (let i = 0; i < password.length; i++) {
                    if (anUpperCase.test(password[i])) {
                        numUpper++;
                    } else if (aLowerCase.test(password[i])) {
                        numLower++;
                    } else if (aNumber.test(password[i])) {
                        numNums++;
                    } else if (aSpecial.test(password[i])) {
                        numSpecials++;
                    }
                }

                var result = 0;
                if (numUpper >= 1) {
                    result++;
                }
                if (numLower >= 1) {
                    result++;
                }
                if (numNums >= 1) {
                    result++;
                }
                if (numSpecials >= 1) {
                    result++;
                }

                if (result >= 3) {
                    return true;
                }
                return false;
            };

            // Web Template Selections
            $scope.webTemplates2010 = {
                "OFFILE#0": "(obsolete) Records Center - OFFILE#0",
                "ACCSRV#0": "Access Services Site - ACCSRV#0",
                "ACCSRV#1": "Assets Web Database - ACCSRV#1",
                "MPS#0": "Basic Meeting Workspace - MPS#0",
                "SRCHCENTERLITE#0": "Basic Search Center - SRCHCENTERLITE#0",
                "SRCHCENTERLITE#1": "Basic Search Center - SRCHCENTERLITE#1",
                "MPS#1": "Blank Meeting Workspace - MPS#1",
                "STS#1": "Blank Site - STS#1",
                "BLOG#0": "Blog - BLOG#0",
                "BICenterSite#0": "Business Intelligence Center - BICenterSite#0",
                "CENTRALADMIN#0": "Central Admin Site - CENTRALADMIN#0",
                "ACCSRV#3": "Charitable Contributions Web Database - ACCSRV#3",
                "SPSPORTAL#0": "Collaboration Portal - SPSPORTAL#0",
                "SPSCOMMU#0": "Community area template - SPSCOMMU#0",
                "ACCSRV#4": "Contacts Web Database - ACCSRV#4",
                "SPSTOC#0": "Contents area Template - SPSTOC#0",
                "MPS#2": "Decision Meeting Workspace - MPS#2",
                "BDR#0": "Document Center - BDR#0",
                "STS#2": "Document Workspace - STS#2",
                "SRCHCEN#0": "Enterprise Search Center - SRCHCEN#0",
                "ENTERWIKI#0": "Enterprise Wiki - ENTERWIKI#0",
                "SRCHCENTERFAST#0": "FAST Search Center - SRCHCENTERFAST#0",
                "GLOBAL#0": "Global template - GLOBAL#0",
                "SGS#0": "Group Work Site - SGS#0",
                "ACCSRV#6": "Issues Web Database - ACCSRV#6",
                "AXSITEDEF#0": "Microsoft Dynamics Enterprise Portal - AXSITEDEF#0",
                "AXSITEDEF#1": "Microsoft Dynamics Public - AXSITEDEF#1",
                "PWS#0": "Microsoft Project Site - PWS#0",
                "MPS#4": "Multipage Meeting Workspace - MPS#4",
                "SPSMSITEHOST#0": "My Site Host - SPSMSITEHOST#0",
                "SPSNHOME#0": "News Site - SPSNHOME#0",
                "SPSNEWS#0": "News Site - SPSNEWS#0",
                "PPSMASite#0": "PerformancePoint - PPSMASite#0",
                "SPSMSITE#0": "Personalization Site - SPSMSITE#0",
                "BLANKINTERNET#1": "Press Releases Site - BLANKINTERNET#1",
                "PROFILES#0": "Profiles - PROFILES#0",
                "PWA#0": "Project Web App Site - PWA#0",
                "ACCSRV#5": "Projects Web Database - ACCSRV#5",
                "BLANKINTERNETCONTAINER#0": "Publishing Portal - BLANKINTERNETCONTAINER#0",
                "CMSPUBLISHING#0": "Publishing Site - CMSPUBLISHING#0",
                "BLANKINTERNET#0": "Publishing Site - BLANKINTERNET#0",
                "BLANKINTERNET#2": "Publishing Site with Workflow - BLANKINTERNET#2",
                "OFFILE#1": "Records Center - OFFILE#1",
                "SPSREPORTCENTER#0": "Report Center - SPSREPORTCENTER#0",
                "OSRV#0": "Shared Services Administration Site - OSRV#0",
                "SPSPERS#0": "SharePoint Portal Server Personal Space - SPSPERS#0",
                "SPS#0": "SharePoint Portal Server Site - SPS#0",
                "SPSSITES#0": "Site Directory - SPSSITES#0",
                "MPS#3": "Social Meeting Workspace - MPS#3",
                "STS#0": "Team Site - STS#0",
                "TENANTADMIN#0": "Tenant Admin Site - TENANTADMIN#0",
                "SPSTOPIC#0": "Topic area template - SPSTOPIC#0",
                "visprus#0": "Visio Process Repository - visprus#0",
                "WIKI#0": "Wiki Site - WIKI#0"
            };
            $scope.webTemplates2013 = {
                "OFFILE#0": "(obsolete) Records Center - OFFILE#0",
                "DOCMARKETPLACESITE#0": "Academic Library - DOCMARKETPLACESITE#0",
                "ACCSRV#0": "Access Services Site - ACCSRV#0",
                "ACCSVC#1": "Access Services Site - ACCSVC#1",
                "ACCSVC#0": "Access Services Site Internal - ACCSVC#0",
                "APPCATALOG#0": "App Catalog Site - APPCATALOG#0",
                "APP#0": "App Template - APP#0",
                "MPS#0": "Basic Meeting Workspace - MPS#0",
                "SRCHCENTERLITE#1": "Basic Search Center - SRCHCENTERLITE#1",
                "SRCHCENTERLITE#0": "Basic Search Center - SRCHCENTERLITE#0",
                "MPS#1": "Blank Meeting Workspace - MPS#1",
                "STS#1": "Blank Site - STS#1",
                "BLOG#0": "Blog - BLOG#0",
                "BICenterSite#0": "Business Intelligence Center - BICenterSite#0",
                "CENTRALADMIN#0": "Central Admin Site - CENTRALADMIN#0",
                "SPSPORTAL#0": "Collaboration Portal - SPSPORTAL#0",
                "SPSCOMMU#0": "Community area template - SPSCOMMU#0",
                "COMMUNITYPORTAL#0": "Community Portal - COMMUNITYPORTAL#0",
                "COMMUNITY#0": "Community Site - COMMUNITY#0",
                "SPSTOC#0": "Contents area Template - SPSTOC#0",
                "MPS#2": "Decision Meeting Workspace - MPS#2",
                "DEV#0": "Developer Site - DEV#0",
                "BDR#0": "Document Center - BDR#0",
                "STS#2": "Document Workspace - STS#2",
                "EDISC#1": "eDiscovery Case - EDISC#1",
                "EDISC#0": "eDiscovery Center - EDISC#0",
                "SPSPERS#5": "Empty SharePoint Portal Server Personal Space - SPSPERS#5",
                "SRCHCEN#0": "Enterprise Search Center - SRCHCEN#0",
                "ENTERWIKI#0": "Enterprise Wiki - ENTERWIKI#0",
                "GLOBAL#0": "Global template - GLOBAL#0",
                "SGS#0": "Group Work Site - SGS#0",
                "PWS#0": "Microsoft Project Site - PWS#0",
                "MPS#4": "Multipage Meeting Workspace - MPS#4",
                "SPSMSITEHOST#0": "My Site Host - SPSMSITEHOST#0",
                "SPSNEWS#0": "News Site - SPSNEWS#0",
                "SPSNHOME#0": "News Site - SPSNHOME#0",
                "PPSMASite#0": "PerformancePoint - PPSMASite#0",
                "SPSMSITE#0": "Personalization Site - SPSMSITE#0",
                "PowerPivot#0": "PowerPivot Site - PowerPivot#0",
                "BLANKINTERNET#1": "Press Releases Site - BLANKINTERNET#1",
                "PRODUCTCATALOG#0": "Product Catalog - PRODUCTCATALOG#0",
                "PROFILES#0": "Profiles - PROFILES#0",
                "PROJECTSITE#0": "Project Site - PROJECTSITE#0",
                "PWA#0": "Project Web App Site - PWA#0",
                "BLANKINTERNETCONTAINER#0": "Publishing Portal - BLANKINTERNETCONTAINER#0",
                "BLANKINTERNET#0": "Publishing Site - BLANKINTERNET#0",
                "CMSPUBLISHING#0": "Publishing Site - CMSPUBLISHING#0",
                "BLANKINTERNET#2": "Publishing Site with Workflow - BLANKINTERNET#2",
                "OFFILE#1": "Records Center - OFFILE#1",
                "SPSREPORTCENTER#0": "Report Center - SPSREPORTCENTER#0",
                "OSRV#0": "Shared Services Administration Site - OSRV#0",
                "SPSPERS#0": "SharePoint Portal Server Personal Space - SPSPERS#0",
                "SPS#0": "SharePoint Portal Server Site - SPS#0",
                "SPSSITES#0": "Site Directory - SPSSITES#0",
                "MPS#3": "Social Meeting Workspace - MPS#3",
                "SPSPERS#4": "Social Only SharePoint Portal Server Personal Space - SPSPERS#4",
                "SPSPERS#2": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#2",
                "SPSPERS#3": "Storage Only SharePoint Portal Server Personal Space - SPSPERS#3",
                "STS#0": "Team Site - STS#0",
                "TENANTADMIN#0": "Tenant Admin Site - TENANTADMIN#0",
                "SPSTOPIC#0": "Topic area template - SPSTOPIC#0",
                "visprus#0": "Visio Process Repository - visprus#0",
                "WIKI#0": "Wiki Site - WIKI#0"
            };
            $scope.webTemplates2016 = {
                "ACCSRV#0": "Access Services Site - ACCSRV#0",
                "ACCSVC#0": "Access Services Site Internal - ACCSVC#0",
                "ACCSVC#1": "Access Services Site - ACCSVC#1",
                "APP#0": "App Template - APP#0",
                "APPCATALOG#0": "App Catalog Site - APPCATALOG#0",
                "BDR#0": "Document Center - BDR#0",
                "BICenterSite#0": "Business Intelligence Center - BICenterSite#0",
                "BLANKINTERNET#0": "Publishing Site - BLANKINTERNET#0",
                "BLANKINTERNET#1": "Press Releases Site - BLANKINTERNET#1",
                "BLANKINTERNET#2": "Publishing Site with Workflow - BLANKINTERNET#2",
                "BLANKINTERNETCONTAINER#0": "Publishing Portal - BLANKINTERNETCONTAINER#0",
                "BLOG#0": "Blog - BLOG#0",
                "CENTRALADMIN#0": "Central Admin Site - CENTRALADMIN#0",
                "CMSPUBLISHING#0": "Publishing Site - CMSPUBLISHING#0",
                "COMMUNITY#0": "Community Site - COMMUNITY#0",
                "COMMUNITYPORTAL#0": "Community Portal - COMMUNITYPORTAL#0",
                "DEV#0": "Developer Site - DEV#0",
                "EDISC#0": "eDiscovery Center - EDISC#0",
                "EDISC#1": "eDiscovery Case - EDISC#1",
                "ENTERWIKI#0": "Enterprise Wiki - ENTERWIKI#0",
                "GLOBAL#0": "Global template - GLOBAL#0",
                "GROUP#0": "Group - GROUP#0",
                "MPS#0": "Basic Meeting Workspace - MPS#0",
                "MPS#1": "Blank Meeting Workspace - MPS#1",
                "MPS#2": "Decision Meeting Workspace - MPS#2",
                "MPS#3": "Social Meeting Workspace - MPS#3",
                "MPS#4": "Multipage Meeting Workspace - MPS#4",
                "OFFILE#0": "(obsolete) Records Center - OFFILE#0",
                "OFFILE#1": "Records Center - OFFILE#1",
                "OSRV#0": "Shared Services Administration Site - OSRV#0",
                "POINTPUBLISHINGHUB#0": "PointPublishing Hub - POINTPUBLISHINGHUB#0",
                "POINTPUBLISHINGPERSONAL#0": "PointPublishing Personal - POINTPUBLISHINGPERSONAL#0",
                "POINTPUBLISHINGTOPIC#0": "PointPublishing Topic - POINTPUBLISHINGTOPIC#0",
                "POLICYCTR#0": "Compliance Policy Center - POLICYCTR#0",
                "PPSMASite#0": "PerformancePoint - PPSMASite#0",
                "PRODUCTCATALOG#0": "Product Catalog - PRODUCTCATALOG#0",
                "PROFILES#0": "Profiles - PROFILES#0",
                "PROJECTSITE#0": "Project Site - PROJECTSITE#0",
                "PWA#0": "Project Web App Site - PWA#0",
                "PWS#0": "Microsoft Project Site - PWS#0",
                "SGS#0": "Group Work Site - SGS#0",
                "SPS#0": "SharePoint Portal Server Site - SPS#0",
                "SPSCOMMU#0": "Community area template - SPSCOMMU#0",
                "SPSMSITE#0": "Personalization Site - SPSMSITE#0",
                "SPSMSITEHOST#0": "My Site Host - SPSMSITEHOST#0",
                "SPSNEWS#0": "News Site - SPSNEWS#0",
                "SPSNHOME#0": "News Site - SPSNHOME#0",
                "SPSPERS#0": "SharePoint Portal Server Personal Space - SPSPERS#0",
                "SPSPERS#10": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#10",
                "SPSPERS#2": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#2",
                "SPSPERS#3": "Storage Only SharePoint Portal Server Personal Space - SPSPERS#3",
                "SPSPERS#4": "Social Only SharePoint Portal Server Personal Space - SPSPERS#4",
                "SPSPERS#5": "Empty SharePoint Portal Server Personal Space - SPSPERS#5",
                "SPSPERS#6": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#6",
                "SPSPERS#7": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#7",
                "SPSPERS#8": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#8",
                "SPSPERS#9": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#9",
                "SPSPORTAL#0": "Collaboration Portal - SPSPORTAL#0",
                "SPSREPORTCENTER#0": "Report Center - SPSREPORTCENTER#0",
                "SPSSITES#0": "Site Directory - SPSSITES#0",
                "SPSTOC#0": "Contents area Template - SPSTOC#0",
                "SPSTOPIC#0": "Topic area template - SPSTOPIC#0",
                "SRCHCEN#0": "Enterprise Search Center - SRCHCEN#0",
                "SRCHCENTERLITE#0": "Basic Search Center - SRCHCENTERLITE#0",
                "SRCHCENTERLITE#1": "Basic Search Center - SRCHCENTERLITE#1",
                "STS#0": "Team Site - STS#0",
                "STS#1": "Blank Site - STS#1",
                "STS#2": "Document Workspace - STS#2",
                "TBH#0": "In-Place Hold Policy Center - TBH#0",
                "TENANTADMIN#0": "Tenant Admin Site - TENANTADMIN#0",
                "visprus#0": "Visio Process Repository - visprus#0",
                "WIKI#0": "Wiki Site - WIKI#0",
            };
            $scope.webTemplates2019 = {
                "ACCSRV#0": "Access Services Site - ACCSRV#0",
                "ACCSVC#0": "Access Services Site Internal - ACCSVC#0",
                "ACCSVC#1": "Access Services Site - ACCSVC#1",
                "APP#0": "App Template - APP#0",
                "APPCATALOG#0": "App Catalog Site - APPCATALOG#0",
                "BDR#0": "Document Center - BDR#0",
                "BICenterSite#0": "Business Intelligence Center - BICenterSite#0",
                "BLANKINTERNET#0": "Publishing Site - BLANKINTERNET#0",
                "BLANKINTERNET#1": "Press Releases Site - BLANKINTERNET#1",
                "BLANKINTERNET#2": "Publishing Site with Workflow - BLANKINTERNET#2",
                "BLANKINTERNETCONTAINER#0": "Publishing Portal - BLANKINTERNETCONTAINER#0",
                "BLOG#0": "Blog - BLOG#0",
                "CENTRALADMIN#0": "Central Admin Site - CENTRALADMIN#0",
                "CMSPUBLISHING#0": "Publishing Site - CMSPUBLISHING#0",
                "COMMUNITY#0": "Community Site - COMMUNITY#0",
                "COMMUNITYPORTAL#0": "Community Portal - COMMUNITYPORTAL#0",
                "DEV#0": "Developer Site - DEV#0",
                "EDISC#0": "eDiscovery Center - EDISC#0",
                "EDISC#1": "eDiscovery Case - EDISC#1",
                "ENTERWIKI#0": "Enterprise Wiki - ENTERWIKI#0",
                "GLOBAL#0": "Global template - GLOBAL#0",
                "GROUP#0": "Group - GROUP#0",
                "MPS#0": "Basic Meeting Workspace - MPS#0",
                "MPS#1": "Blank Meeting Workspace - MPS#1",
                "MPS#2": "Decision Meeting Workspace - MPS#2",
                "MPS#3": "Social Meeting Workspace - MPS#3",
                "MPS#4": "Multipage Meeting Workspace - MPS#4",
                "OFFILE#0": "(obsolete) Records Center - OFFILE#0",
                "OFFILE#1": "Records Center - OFFILE#1",
                "OSRV#0": "Shared Services Administration Site - OSRV#0",
                "POINTPUBLISHINGHUB#0": "PointPublishing Hub - POINTPUBLISHINGHUB#0",
                "POINTPUBLISHINGPERSONAL#0": "PointPublishing Personal - POINTPUBLISHINGPERSONAL#0",
                "POINTPUBLISHINGTOPIC#0": "PointPublishing Topic - POINTPUBLISHINGTOPIC#0",
                "POLICYCTR#0": "Compliance Policy Center - POLICYCTR#0",
                "PPSMASite#0": "PerformancePoint - PPSMASite#0",
                "PRODUCTCATALOG#0": "Product Catalog - PRODUCTCATALOG#0",
                "PROFILES#0": "Profiles - PROFILES#0",
                "PROJECTSITE#0": "Project Site - PROJECTSITE#0",
                "PWA#0": "Project Web App Site - PWA#0",
                "PWS#0": "Microsoft Project Site - PWS#0",
                "SGS#0": "Group Work Site - SGS#0",
                "SPS#0": "SharePoint Portal Server Site - SPS#0",
                "SPSCOMMU#0": "Community area template - SPSCOMMU#0",
                "SPSMSITE#0": "Personalization Site - SPSMSITE#0",
                "SPSMSITEHOST#0": "My Site Host - SPSMSITEHOST#0",
                "SPSNEWS#0": "News Site - SPSNEWS#0",
                "SPSNHOME#0": "News Site - SPSNHOME#0",
                "SPSPERS#0": "SharePoint Portal Server Personal Space - SPSPERS#0",
                "SPSPERS#2": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#2",
                "SPSPERS#3": "Storage Only SharePoint Portal Server Personal Space - SPSPERS#3",
                "SPSPERS#4": "Social Only SharePoint Portal Server Personal Space - SPSPERS#4",
                "SPSPERS#5": "Empty SharePoint Portal Server Personal Space - SPSPERS#5",
                "SPSPERS#6": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#6",
                "SPSPERS#7": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#7",
                "SPSPERS#8": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#8",
                "SPSPERS#9": "Storage And Social SharePoint Portal Server Personal Space - SPSPERS#9",
                "SPSPORTAL#0": "Collaboration Portal - SPSPORTAL#0",
                "SPSREPORTCENTER#0": "Report Center - SPSREPORTCENTER#0",
                "SPSSITES#0": "Site Directory - SPSSITES#0",
                "SPSTOC#0": "Contents area Template - SPSTOC#0",
                "SPSTOPIC#0": "Topic area template - SPSTOPIC#0",
                "SRCHCEN#0": "Enterprise Search Center - SRCHCEN#0",
                "SRCHCENTERLITE#0": "Basic Search Center - SRCHCENTERLITE#0",
                "SRCHCENTERLITE#1": "Basic Search Center - SRCHCENTERLITE#1",
                "STS#0": "Team Site - STS#0",
                "STS#1": "Blank Site - STS#1",
                "STS#2": "Document Workspace - STS#2",
                "TBH#0": "In-Place Hold Policy Center - TBH#0",
                "TENANTADMIN#0": "Tenant Admin Site - TENANTADMIN#0",
                "visprus#0": "Visio Process Repository - visprus#0",
                "WIKI#0": "Wiki Site - WIKI#0",
                "SPSPERS#10": "OneDrive personal site - SPSPERS#10",
                "STS#3": "Team site (modern only) - STS#3",
                "SITEPAGEPUBLISHING#0": "Communication site - SITEPAGEPUBLISHING#0"
            };
        }]);
})();