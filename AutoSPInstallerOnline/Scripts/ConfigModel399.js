var ConfigModel399_Module_Factory = function () {
  var ConfigModel399 = {
    name: 'ConfigModel399',
    typeInfos: [{
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.SearchQueryAndSiteSettingsComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.AppManagementService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.AdobePDF.IFilter',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            elementName: {
              localPart: 'Install'
            },
            typeInfo: '.Configuration.Install'
          }, {
            name: 'farm',
            elementName: {
              localPart: 'Farm'
            },
            typeInfo: '.Configuration.Farm'
          }, {
            name: 'webApplications',
            elementName: {
              localPart: 'WebApplications'
            },
            typeInfo: '.Configuration.WebApplications'
          }, {
            name: 'serviceApps',
            elementName: {
              localPart: 'ServiceApps'
            },
            typeInfo: '.Configuration.ServiceApps'
          }, {
            name: 'enterpriseServiceApps',
            elementName: {
              localPart: 'EnterpriseServiceApps'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps'
          }, {
            name: 'officeWebApps',
            elementName: {
              localPart: 'OfficeWebApps'
            },
            typeInfo: '.Configuration.OfficeWebApps'
          }, {
            name: 'projectServer',
            elementName: {
              localPart: 'ProjectServer'
            },
            typeInfo: '.Configuration.ProjectServer'
          }, {
            name: 'adobePDF',
            elementName: {
              localPart: 'AdobePDF'
            },
            typeInfo: '.Configuration.AdobePDF'
          }, {
            name: 'foreFront',
            elementName: {
              localPart: 'ForeFront'
            },
            typeInfo: '.Configuration.ForeFront'
          }, {
            name: 'environment',
            attributeName: {
              localPart: 'Environment'
            },
            type: 'attribute'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.AdobePDF.MIMEType',
        typeName: null,
        propertyInfos: [{
            name: 'configure',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Configure'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.ManagedMetadataServiceApp.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SPUsageService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.SecureStoreService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm',
        typeName: null,
        propertyInfos: [{
            name: 'passphrase',
            elementName: {
              localPart: 'Passphrase'
            }
          }, {
            name: 'account',
            elementName: {
              localPart: 'Account'
            },
            typeInfo: '.Configuration.Farm.Account'
          }, {
            name: 'centralAdmin',
            elementName: {
              localPart: 'CentralAdmin'
            },
            typeInfo: '.Configuration.Farm.CentralAdmin'
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.Farm.Database'
          }, {
            name: 'services',
            elementName: {
              localPart: 'Services'
            },
            typeInfo: '.Configuration.Farm.Services'
          }, {
            name: 'managedAccounts',
            elementName: {
              localPart: 'ManagedAccounts'
            },
            typeInfo: '.Configuration.Farm.ManagedAccounts'
          }, {
            name: 'objectCacheAccounts',
            elementName: {
              localPart: 'ObjectCacheAccounts'
            },
            typeInfo: '.Configuration.Farm.ObjectCacheAccounts'
          }, {
            name: 'logging',
            elementName: {
              localPart: 'Logging'
            },
            typeInfo: '.Configuration.Farm.Logging'
          }]
      }, {
        localName: 'Configuration.Farm.Database',
        typeName: null,
        propertyInfos: [{
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.Farm.Database.DBAlias'
          }, {
            name: 'dbPrefix',
            elementName: {
              localPart: 'DBPrefix'
            }
          }, {
            name: 'configDB',
            elementName: {
              localPart: 'ConfigDB'
            }
          }]
      }, {
        localName: 'Configuration.Farm.ManagedAccounts',
        typeName: null,
        propertyInfos: [{
            name: 'managedAccount',
            collection: true,
            elementName: {
              localPart: 'ManagedAccount'
            },
            typeInfo: '.Configuration.Farm.ManagedAccounts.ManagedAccount'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp.Database',
        typeName: null,
        propertyInfos: [{
            name: 'profileDB',
            elementName: {
              localPart: 'ProfileDB'
            }
          }, {
            name: 'syncDB',
            elementName: {
              localPart: 'SyncDB'
            }
          }, {
            name: 'socialDB',
            elementName: {
              localPart: 'SocialDB'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.UserProfileServiceApp.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'unattendedIDUser',
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.PerformancePointService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ContentProcessingComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'pidKeyOWA',
            elementName: {
              localPart: 'PIDKeyOWA'
            }
          }, {
            name: 'excelService',
            elementName: {
              localPart: 'ExcelService'
            },
            typeInfo: '.Configuration.OfficeWebApps.ExcelService'
          }, {
            name: 'wordViewingService',
            elementName: {
              localPart: 'WordViewingService'
            },
            typeInfo: '.Configuration.OfficeWebApps.WordViewingService'
          }, {
            name: 'powerPointService',
            elementName: {
              localPart: 'PowerPointService'
            },
            typeInfo: '.Configuration.OfficeWebApps.PowerPointService'
          }, {
            name: 'install',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.WordAutomationService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService',
        typeName: null,
        propertyInfos: [{
            name: 'contactEmail',
            elementName: {
              localPart: 'ContactEmail'
            }
          }, {
            name: 'connectionTimeout',
            elementName: {
              localPart: 'ConnectionTimeout'
            }
          }, {
            name: 'acknowledgementTimeout',
            elementName: {
              localPart: 'AcknowledgementTimeout'
            }
          }, {
            name: 'proxyType',
            elementName: {
              localPart: 'ProxyType'
            }
          }, {
            name: 'ignoreSSLWarnings',
            elementName: {
              localPart: 'IgnoreSSLWarnings'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'internetIdentity',
            elementName: {
              localPart: 'InternetIdentity'
            }
          }, {
            name: 'customIndexLocation',
            elementName: {
              localPart: 'CustomIndexLocation'
            }
          }, {
            name: 'performanceLevel',
            elementName: {
              localPart: 'PerformanceLevel'
            }
          }, {
            name: 'shareName',
            elementName: {
              localPart: 'ShareName'
            }
          }, {
            name: 'enterpriseSearchServiceApplications',
            elementName: {
              localPart: 'EnterpriseSearchServiceApplications'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.BusinessDataConnectivity.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'managedPath',
            elementName: {
              localPart: 'ManagedPath'
            }
          }, {
            name: 'serviceAccount',
            elementName: {
              localPart: 'ServiceAccount'
            }
          }, {
            name: 'serviceAccountPassword',
            elementName: {
              localPart: 'ServiceAccountPassword'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ProjectServer.ServiceApp.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ObjectCacheAccounts',
        typeName: null,
        propertyInfos: [{
            name: 'superUser',
            elementName: {
              localPart: 'SuperUser'
            }
          }, {
            name: 'superReader',
            elementName: {
              localPart: 'SuperReader'
            }
          }]
      }, {
        localName: 'Configuration.ServiceApps.WebAnalyticsService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.WebAnalyticsService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.AdobePDF',
        typeName: null,
        propertyInfos: [{
            name: 'iFilter',
            elementName: {
              localPart: 'iFilter'
            },
            typeInfo: '.Configuration.AdobePDF.IFilter'
          }, {
            name: 'icon',
            elementName: {
              localPart: 'Icon'
            },
            typeInfo: '.Configuration.AdobePDF.Icon'
          }, {
            name: 'mimeType',
            elementName: {
              localPart: 'MIMEType'
            },
            typeInfo: '.Configuration.AdobePDF.MIMEType'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.ExcelServices',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'unattendedIDUser',
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessServices',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessServices.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Account',
        typeName: null,
        propertyInfos: [{
            name: 'addToLocalAdminsDuringSetup',
            elementName: {
              localPart: 'AddToLocalAdminsDuringSetup'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'leaveInLocalAdmins',
            elementName: {
              localPart: 'LeaveInLocalAdmins'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'username',
            elementName: {
              localPart: 'Username'
            }
          }, {
            name: 'password',
            elementName: {
              localPart: 'Password'
            }
          }]
      }, {
        localName: 'Configuration.Farm.Services',
        typeName: null,
        propertyInfos: [{
            name: 'sandboxedCodeService',
            elementName: {
              localPart: 'SandboxedCodeService'
            },
            typeInfo: '.Configuration.Farm.Services.SandboxedCodeService'
          }, {
            name: 'claimsToWindowsTokenService',
            elementName: {
              localPart: 'ClaimsToWindowsTokenService'
            },
            typeInfo: '.Configuration.Farm.Services.ClaimsToWindowsTokenService'
          }, {
            name: 'smtp',
            elementName: {
              localPart: 'SMTP'
            },
            typeInfo: '.Configuration.Farm.Services.SMTP'
          }, {
            name: 'outgoingEmail',
            elementName: {
              localPart: 'OutgoingEmail'
            },
            typeInfo: '.Configuration.Farm.Services.OutgoingEmail'
          }, {
            name: 'incomingEmail',
            elementName: {
              localPart: 'IncomingEmail'
            },
            typeInfo: '.Configuration.Farm.Services.IncomingEmail'
          }, {
            name: 'distributedCache',
            elementName: {
              localPart: 'DistributedCache'
            },
            typeInfo: '.Configuration.Farm.Services.DistributedCache'
          }, {
            name: 'workflowTimer',
            elementName: {
              localPart: 'WorkflowTimer'
            },
            typeInfo: '.Configuration.Farm.Services.WorkflowTimer'
          }, {
            name: 'foundationWebApplication',
            elementName: {
              localPart: 'FoundationWebApplication'
            },
            typeInfo: '.Configuration.Farm.Services.FoundationWebApplication'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.ManagedPaths',
        typeName: null,
        propertyInfos: [{
            name: 'managedPath',
            collection: true,
            elementName: {
              localPart: 'ManagedPath'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.ManagedPaths.ManagedPath'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication',
        typeName: null,
        propertyInfos: [{
            name: 'failoverDatabaseServer',
            elementName: {
              localPart: 'FailoverDatabaseServer'
            }
          }, {
            name: 'partitioned',
            elementName: {
              localPart: 'Partitioned'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'partitions',
            elementName: {
              localPart: 'Partitions'
            }
          }, {
            name: 'searchServiceApplicationType',
            elementName: {
              localPart: 'SearchServiceApplicationType'
            }
          }, {
            name: 'contentAccessAccount',
            elementName: {
              localPart: 'ContentAccessAccount'
            }
          }, {
            name: 'contentAccessAccountPassword',
            elementName: {
              localPart: 'ContentAccessAccountPassword'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database'
          }, {
            name: 'applicationPool',
            elementName: {
              localPart: 'ApplicationPool'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ApplicationPool'
          }, {
            name: 'crawlComponent',
            elementName: {
              localPart: 'CrawlComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.CrawlComponent'
          }, {
            name: 'queryComponent',
            elementName: {
              localPart: 'QueryComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.QueryComponent'
          }, {
            name: 'searchQueryAndSiteSettingsComponent',
            elementName: {
              localPart: 'SearchQueryAndSiteSettingsComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.SearchQueryAndSiteSettingsComponent'
          }, {
            name: 'adminComponent',
            elementName: {
              localPart: 'AdminComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent'
          }, {
            name: 'indexComponent',
            elementName: {
              localPart: 'IndexComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.IndexComponent'
          }, {
            name: 'contentProcessingComponent',
            elementName: {
              localPart: 'ContentProcessingComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ContentProcessingComponent'
          }, {
            name: 'analyticsProcessingComponent',
            elementName: {
              localPart: 'AnalyticsProcessingComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AnalyticsProcessingComponent'
          }, {
            name: 'proxy',
            elementName: {
              localPart: 'Proxy'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy'
          }, {
            name: 'searchCenterUrl',
            elementName: {
              localPart: 'SearchCenterUrl'
            }
          }, {
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.Farm.Services.IncomingEmail',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.QueryComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.ManagedMetadataServiceApp.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.VisioService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'unattendedIDUser',
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.FoundationWebApplication',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent',
        typeName: null,
        propertyInfos: [{
            name: 'applicationPool',
            elementName: {
              localPart: 'ApplicationPool'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent.ApplicationPool'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.WorkflowTimer',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'appSiteSubscriptionName',
            elementName: {
              localPart: 'AppSiteSubscriptionName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.SubscriptionSettingsService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'appDomain',
            elementName: {
              localPart: 'AppDomain'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.AppManagementService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'pidKeyProjectServer',
            elementName: {
              localPart: 'PIDKeyProjectServer'
            }
          }, {
            name: 'serviceApp',
            elementName: {
              localPart: 'ServiceApp'
            },
            typeInfo: '.Configuration.ProjectServer.ServiceApp'
          }, {
            name: 'install',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'mySiteHostLocation',
            elementName: {
              localPart: 'MySiteHostLocation'
            }
          }, {
            name: 'mySiteManagedPath',
            elementName: {
              localPart: 'MySiteManagedPath'
            }
          }, {
            name: 'enableNetBIOSDomainNames',
            elementName: {
              localPart: 'EnableNetBIOSDomainNames'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'startProfileSync',
            elementName: {
              localPart: 'StartProfileSync'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'createDefaultSyncConnection',
            elementName: {
              localPart: 'CreateDefaultSyncConnection'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'syncConnectionAccount',
            elementName: {
              localPart: 'SyncConnectionAccount'
            }
          }, {
            name: 'syncConnectionAccountPassword',
            elementName: {
              localPart: 'SyncConnectionAccountPassword'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.UserProfileServiceApp.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ManagedAccounts.ManagedAccount',
        typeName: null,
        propertyInfos: [{
            name: 'username',
            elementName: {
              localPart: 'Username'
            }
          }, {
            name: 'password',
            elementName: {
              localPart: 'Password'
            }
          }, {
            name: 'commonName',
            attributeName: {
              localPart: 'CommonName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.CentralAdmin',
        typeName: null,
        propertyInfos: [{
            name: 'database',
            elementName: {
              localPart: 'Database'
            }
          }, {
            name: 'port',
            elementName: {
              localPart: 'Port'
            }
          }, {
            name: 'useSSL',
            elementName: {
              localPart: 'UseSSL'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps',
        typeName: null,
        propertyInfos: [{
            name: 'managedMetadataServiceApp',
            elementName: {
              localPart: 'ManagedMetadataServiceApp'
            },
            typeInfo: '.Configuration.ServiceApps.ManagedMetadataServiceApp'
          }, {
            name: 'userProfileServiceApp',
            elementName: {
              localPart: 'UserProfileServiceApp'
            },
            typeInfo: '.Configuration.ServiceApps.UserProfileServiceApp'
          }, {
            name: 'enterpriseSearchService',
            elementName: {
              localPart: 'EnterpriseSearchService'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService'
          }, {
            name: 'stateService',
            elementName: {
              localPart: 'StateService'
            },
            typeInfo: '.Configuration.ServiceApps.StateService'
          }, {
            name: 'webAnalyticsService',
            elementName: {
              localPart: 'WebAnalyticsService'
            },
            typeInfo: '.Configuration.ServiceApps.WebAnalyticsService'
          }, {
            name: 'spUsageService',
            elementName: {
              localPart: 'SPUsageService'
            },
            typeInfo: '.Configuration.ServiceApps.SPUsageService'
          }, {
            name: 'secureStoreService',
            elementName: {
              localPart: 'SecureStoreService'
            },
            typeInfo: '.Configuration.ServiceApps.SecureStoreService'
          }, {
            name: 'businessDataConnectivity',
            elementName: {
              localPart: 'BusinessDataConnectivity'
            },
            typeInfo: '.Configuration.ServiceApps.BusinessDataConnectivity'
          }, {
            name: 'wordAutomationService',
            elementName: {
              localPart: 'WordAutomationService'
            },
            typeInfo: '.Configuration.ServiceApps.WordAutomationService'
          }, {
            name: 'appManagementService',
            elementName: {
              localPart: 'AppManagementService'
            },
            typeInfo: '.Configuration.ServiceApps.AppManagementService'
          }, {
            name: 'subscriptionSettingsService',
            elementName: {
              localPart: 'SubscriptionSettingsService'
            },
            typeInfo: '.Configuration.ServiceApps.SubscriptionSettingsService'
          }, {
            name: 'workManagementService',
            elementName: {
              localPart: 'WorkManagementService'
            },
            typeInfo: '.Configuration.ServiceApps.WorkManagementService'
          }, {
            name: 'machineTranslationService',
            elementName: {
              localPart: 'MachineTranslationService'
            },
            typeInfo: '.Configuration.ServiceApps.MachineTranslationService'
          }, {
            name: 'powerPointConversionService',
            elementName: {
              localPart: 'PowerPointConversionService'
            },
            typeInfo: '.Configuration.ServiceApps.PowerPointConversionService'
          }]
      }, {
        localName: 'Configuration.Install.AutoAdminLogon',
        typeName: null,
        propertyInfos: [{
            name: 'password',
            elementName: {
              localPart: 'Password'
            }
          }, {
            name: 'enable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Enable'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.SMTP',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.MachineTranslationService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.MachineTranslationService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.PowerPointConversionService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.MachineTranslationService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.ClaimsToWindowsTokenService',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }, {
            name: 'updateAccount',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'UpdateAccount'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.WordAutomationService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.SiteCollections',
        typeName: null,
        propertyInfos: [{
            name: 'siteCollection',
            collection: true,
            elementName: {
              localPart: 'SiteCollection'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.SiteCollections.SiteCollection'
          }]
      }, {
        localName: 'Configuration.ServiceApps.StateService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.StateService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SPUsageService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.SPUsageService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.PowerPointService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AnalyticsProcessingComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.SiteCollections.SiteCollection',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'description',
            elementName: {
              localPart: 'Description'
            }
          }, {
            name: 'hostNamedSiteCollection',
            elementName: {
              localPart: 'HostNamedSiteCollection'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'owner',
            elementName: {
              localPart: 'Owner'
            }
          }, {
            name: 'customDatabase',
            elementName: {
              localPart: 'CustomDatabase'
            }
          }, {
            name: 'searchUrl',
            elementName: {
              localPart: 'SearchUrl'
            }
          }, {
            name: 'template',
            elementName: {
              localPart: 'Template'
            }
          }, {
            name: 'lcid',
            elementName: {
              localPart: 'LCID'
            }
          }, {
            name: 'locale',
            elementName: {
              localPart: 'Locale'
            }
          }, {
            name: 'time24',
            elementName: {
              localPart: 'Time24'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'siteUrl',
            attributeName: {
              localPart: 'siteUrl'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications',
        typeName: null,
        propertyInfos: [{
            name: 'enterpriseSearchServiceApplication',
            elementName: {
              localPart: 'EnterpriseSearchServiceApplication'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.SecureStoreService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications',
        typeName: null,
        propertyInfos: [{
            name: 'webApplication',
            collection: true,
            elementName: {
              localPart: 'WebApplication'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication'
          }, {
            name: 'addURLsToHOSTS',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'AddURLsToHOSTS'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.BusinessDataConnectivity.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SPUsageService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.SPUsageService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.MachineTranslationService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.MachineTranslationService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.AdobePDF.Icon',
        typeName: null,
        propertyInfos: [{
            name: 'configure',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Configure'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.IndexComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install.RemoteInstall',
        typeName: null,
        propertyInfos: [{
            name: 'parallelInstall',
            elementName: {
              localPart: 'ParallelInstall'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'enable',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Enable'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessServices.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessServices.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ApplicationPool',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.WordViewingService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.OutgoingEmail',
        typeName: null,
        propertyInfos: [{
            name: 'smtpServer',
            elementName: {
              localPart: 'SMTPServer'
            }
          }, {
            name: 'emailAddress',
            elementName: {
              localPart: 'EmailAddress'
            }
          }, {
            name: 'replyToEmail',
            elementName: {
              localPart: 'ReplyToEmail'
            }
          }, {
            name: 'configure',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Configure'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'installDir',
            elementName: {
              localPart: 'InstallDir'
            }
          }, {
            name: 'dataDir',
            elementName: {
              localPart: 'DataDir'
            }
          }, {
            name: 'pidKey',
            elementName: {
              localPart: 'PIDKey'
            }
          }, {
            name: 'sku',
            elementName: {
              localPart: 'SKU'
            }
          }, {
            name: 'offlineInstall',
            elementName: {
              localPart: 'OfflineInstall'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'pauseAfterInstall',
            elementName: {
              localPart: 'PauseAfterInstall'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'remoteInstall',
            elementName: {
              localPart: 'RemoteInstall'
            },
            typeInfo: '.Configuration.Install.RemoteInstall'
          }, {
            name: 'autoAdminLogon',
            elementName: {
              localPart: 'AutoAdminLogon'
            },
            typeInfo: '.Configuration.Install.AutoAdminLogon'
          }, {
            name: 'disable',
            elementName: {
              localPart: 'Disable'
            },
            typeInfo: '.Configuration.Install.Disable'
          }, {
            name: 'spVersion',
            attributeName: {
              localPart: 'SPVersion'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ProjectServer.ServiceApp.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.CrawlComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.ManagedPaths.ManagedPath',
        typeName: null,
        propertyInfos: [{
            name: 'relativeUrl',
            attributeName: {
              localPart: 'relativeUrl'
            },
            type: 'attribute'
          }, {
            name: 'explicit',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'explicit'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.ExcelService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'unattendedIDUser',
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.StateService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.StateService.Database'
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps',
        typeName: null,
        propertyInfos: [{
            name: 'excelServices',
            elementName: {
              localPart: 'ExcelServices'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.ExcelServices'
          }, {
            name: 'visioService',
            elementName: {
              localPart: 'VisioService'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.VisioService'
          }, {
            name: 'accessService',
            elementName: {
              localPart: 'AccessService'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessService'
          }, {
            name: 'accessServices',
            elementName: {
              localPart: 'AccessServices'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessServices'
          }, {
            name: 'performancePointService',
            elementName: {
              localPart: 'PerformancePointService'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.PerformancePointService'
          }]
      }, {
        localName: 'Configuration.ForeFront',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'install',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.PerformancePointService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.StateService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.SandboxedCodeService',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WebAnalyticsService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WorkManagementService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessServices.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install.Disable',
        typeName: null,
        propertyInfos: [{
            name: 'loopbackCheck',
            elementName: {
              localPart: 'LoopbackCheck'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'unusedServices',
            elementName: {
              localPart: 'UnusedServices'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'ieEnhancedSecurity',
            elementName: {
              localPart: 'IEEnhancedSecurity'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'certificateRevocationListCheck',
            elementName: {
              localPart: 'CertificateRevocationListCheck'
            },
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'Configuration.Farm.Logging',
        typeName: null,
        propertyInfos: [{
            name: 'iisLogs',
            elementName: {
              localPart: 'IISLogs'
            },
            typeInfo: '.Configuration.Farm.Logging.IISLogs'
          }, {
            name: 'ulsLogs',
            elementName: {
              localPart: 'ULSLogs'
            },
            typeInfo: '.Configuration.Farm.Logging.ULSLogs'
          }, {
            name: 'usageLogs',
            elementName: {
              localPart: 'UsageLogs'
            },
            typeInfo: '.Configuration.Farm.Logging.UsageLogs'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Logging.IISLogs',
        typeName: null,
        propertyInfos: [{
            name: 'path',
            elementName: {
              localPart: 'Path'
            }
          }, {
            name: 'compress',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Compress'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent.ApplicationPool',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WebAnalyticsService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'reportingDB',
            elementName: {
              localPart: 'ReportingDB'
            }
          }, {
            name: 'stagingDB',
            elementName: {
              localPart: 'StagingDB'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.WebAnalyticsService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy',
        typeName: null,
        propertyInfos: [{
            name: 'partitioned',
            elementName: {
              localPart: 'Partitioned'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'proxyGroup',
            elementName: {
              localPart: 'ProxyGroup'
            }
          }, {
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.DistributedCache',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            elementName: {
              localPart: 'Type'
            }
          }, {
            name: 'applicationPool',
            elementName: {
              localPart: 'ApplicationPool'
            }
          }, {
            name: 'url',
            elementName: {
              localPart: 'Url'
            }
          }, {
            name: 'port',
            elementName: {
              localPart: 'Port'
            }
          }, {
            name: 'useHostHeader',
            elementName: {
              localPart: 'UseHostHeader'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'addURLToLocalIntranetZone',
            elementName: {
              localPart: 'AddURLToLocalIntranetZone'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'grantCurrentUserFullControl',
            elementName: {
              localPart: 'GrantCurrentUserFullControl'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'useClaims',
            elementName: {
              localPart: 'UseClaims'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'useBasicAuthentication',
            elementName: {
              localPart: 'UseBasicAuthentication'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'useOnlineWebPartCatalog',
            elementName: {
              localPart: 'UseOnlineWebPartCatalog'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'database',
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.Database'
          }, {
            name: 'managedPaths',
            elementName: {
              localPart: 'ManagedPaths'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.ManagedPaths'
          }, {
            name: 'siteCollections',
            elementName: {
              localPart: 'SiteCollections'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.SiteCollections'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Logging.ULSLogs',
        typeName: null,
        propertyInfos: [{
            name: 'logLocation',
            elementName: {
              localPart: 'LogLocation'
            }
          }, {
            name: 'logDiskSpaceUsageGB',
            elementName: {
              localPart: 'LogDiskSpaceUsageGB'
            }
          }, {
            name: 'daysToKeepLogs',
            elementName: {
              localPart: 'DaysToKeepLogs'
            }
          }, {
            name: 'logCutInterval',
            elementName: {
              localPart: 'LogCutInterval'
            }
          }, {
            name: 'compress',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Compress'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Logging.UsageLogs',
        typeName: null,
        propertyInfos: [{
            name: 'usageLogDir',
            elementName: {
              localPart: 'UsageLogDir'
            }
          }, {
            name: 'usageLogMaxSpaceGB',
            elementName: {
              localPart: 'UsageLogMaxSpaceGB'
            }
          }, {
            name: 'usageLogCutTime',
            elementName: {
              localPart: 'UsageLogCutTime'
            }
          }, {
            name: 'compress',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Compress'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.SubscriptionSettingsService.Database.DBAlias'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'Configuration'
        },
        typeInfo: '.Configuration'
      }]
  };
  return {
    ConfigModel399: ConfigModel399
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ConfigModel399_Module_Factory);
}
else {
  var ConfigModel399_Module = ConfigModel399_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigModel399 = ConfigModel399_Module.ConfigModel399;
  }
  else {
    var ConfigModel399 = ConfigModel399_Module.ConfigModel399;
  }
}