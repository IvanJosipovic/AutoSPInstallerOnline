var ConfigModel_Module_Factory = function () {
  var ConfigModel = {
    name: 'ConfigModel',
    typeInfos: [{
        localName: 'Configuration.ServiceApps.StateService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.StateService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.CrawlComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            required: true,
            elementName: {
              localPart: 'Type'
            }
          }, {
            name: 'applicationPool',
            required: true,
            elementName: {
              localPart: 'ApplicationPool'
            }
          }, {
            name: 'url',
            required: true,
            elementName: {
              localPart: 'Url'
            }
          }, {
            name: 'port',
            required: true,
            elementName: {
              localPart: 'Port'
            }
          }, {
            name: 'useHostHeader',
            required: true,
            elementName: {
              localPart: 'UseHostHeader'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'addURLToLocalIntranetZone',
            required: true,
            elementName: {
              localPart: 'AddURLToLocalIntranetZone'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'grantCurrentUserFullControl',
            required: true,
            elementName: {
              localPart: 'GrantCurrentUserFullControl'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'useClaims',
            required: true,
            elementName: {
              localPart: 'UseClaims'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'useBasicAuthentication',
            required: true,
            elementName: {
              localPart: 'UseBasicAuthentication'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'useOnlineWebPartCatalog',
            required: true,
            elementName: {
              localPart: 'UseOnlineWebPartCatalog'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.Database'
          }, {
            name: 'managedPaths',
            required: true,
            elementName: {
              localPart: 'ManagedPaths'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.ManagedPaths'
          }, {
            name: 'siteCollections',
            required: true,
            elementName: {
              localPart: 'SiteCollections'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.SiteCollections'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.ExcelServices',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'unattendedIDUser',
            required: true,
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            required: true,
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.StateService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WebAnalyticsService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'reportingDB',
            required: true,
            elementName: {
              localPart: 'ReportingDB'
            }
          }, {
            name: 'stagingDB',
            required: true,
            elementName: {
              localPart: 'StagingDB'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.WebAnalyticsService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.Farm.Services.SMTP',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            required: true,
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.BusinessDataConnectivity.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.ExcelService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'unattendedIDUser',
            required: true,
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            required: true,
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AnalyticsProcessingComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.SecureStoreService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.ManagedPaths',
        typeName: null,
        propertyInfos: [{
            name: 'managedPath',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'ManagedPath'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.ManagedPaths.ManagedPath'
          }]
      }, {
        localName: 'Configuration.AdobePDF',
        typeName: null,
        propertyInfos: [{
            name: 'iFilter',
            required: true,
            elementName: {
              localPart: 'iFilter'
            },
            typeInfo: '.Configuration.AdobePDF.IFilter'
          }, {
            name: 'icon',
            required: true,
            elementName: {
              localPart: 'Icon'
            },
            typeInfo: '.Configuration.AdobePDF.Icon'
          }, {
            name: 'mimeType',
            required: true,
            elementName: {
              localPart: 'MIMEType'
            },
            typeInfo: '.Configuration.AdobePDF.MIMEType'
          }]
      }, {
        localName: 'Configuration.Farm.Services',
        typeName: null,
        propertyInfos: [{
            name: 'sandboxedCodeService',
            required: true,
            elementName: {
              localPart: 'SandboxedCodeService'
            },
            typeInfo: '.Configuration.Farm.Services.SandboxedCodeService'
          }, {
            name: 'claimsToWindowsTokenService',
            required: true,
            elementName: {
              localPart: 'ClaimsToWindowsTokenService'
            },
            typeInfo: '.Configuration.Farm.Services.ClaimsToWindowsTokenService'
          }, {
            name: 'smtp',
            required: true,
            elementName: {
              localPart: 'SMTP'
            },
            typeInfo: '.Configuration.Farm.Services.SMTP'
          }, {
            name: 'outgoingEmail',
            required: true,
            elementName: {
              localPart: 'OutgoingEmail'
            },
            typeInfo: '.Configuration.Farm.Services.OutgoingEmail'
          }, {
            name: 'incomingEmail',
            required: true,
            elementName: {
              localPart: 'IncomingEmail'
            },
            typeInfo: '.Configuration.Farm.Services.IncomingEmail'
          }, {
            name: 'distributedCache',
            required: true,
            elementName: {
              localPart: 'DistributedCache'
            },
            typeInfo: '.Configuration.Farm.Services.DistributedCache'
          }, {
            name: 'workflowTimer',
            required: true,
            elementName: {
              localPart: 'WorkflowTimer'
            },
            typeInfo: '.Configuration.Farm.Services.WorkflowTimer'
          }, {
            name: 'foundationWebApplication',
            required: true,
            elementName: {
              localPart: 'FoundationWebApplication'
            },
            typeInfo: '.Configuration.Farm.Services.FoundationWebApplication'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessServices.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.PowerPointService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.ApplicationWithSearch',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'mySiteHostLocation',
            required: true,
            elementName: {
              localPart: 'MySiteHostLocation'
            }
          }, {
            name: 'mySiteManagedPath',
            required: true,
            elementName: {
              localPart: 'MySiteManagedPath'
            }
          }, {
            name: 'enableNetBIOSDomainNames',
            required: true,
            elementName: {
              localPart: 'EnableNetBIOSDomainNames'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'startProfileSync',
            required: true,
            elementName: {
              localPart: 'StartProfileSync'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'createDefaultSyncConnection',
            required: true,
            elementName: {
              localPart: 'CreateDefaultSyncConnection'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'syncConnectionAccount',
            required: true,
            elementName: {
              localPart: 'SyncConnectionAccount'
            }
          }, {
            name: 'syncConnectionAccountPassword',
            required: true,
            elementName: {
              localPart: 'SyncConnectionAccountPassword'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.UserProfileServiceApp.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.OutgoingEmail',
        typeName: null,
        propertyInfos: [{
            name: 'smtpServer',
            required: true,
            elementName: {
              localPart: 'SMTPServer'
            }
          }, {
            name: 'emailAddress',
            required: true,
            elementName: {
              localPart: 'EmailAddress'
            }
          }, {
            name: 'replyToEmail',
            required: true,
            elementName: {
              localPart: 'ReplyToEmail'
            }
          }, {
            name: 'configure',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Configure'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Logging.UsageLogs',
        typeName: null,
        propertyInfos: [{
            name: 'usageLogDir',
            required: true,
            elementName: {
              localPart: 'UsageLogDir'
            }
          }, {
            name: 'usageLogMaxSpaceGB',
            required: true,
            elementName: {
              localPart: 'UsageLogMaxSpaceGB'
            }
          }, {
            name: 'usageLogCutTime',
            required: true,
            elementName: {
              localPart: 'UsageLogCutTime'
            }
          }, {
            name: 'compress',
            required: true,
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
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            required: true,
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'pidKeyProjectServer',
            required: true,
            elementName: {
              localPart: 'PIDKeyProjectServer'
            }
          }, {
            name: 'serviceApp',
            required: true,
            elementName: {
              localPart: 'ServiceApp'
            },
            typeInfo: '.Configuration.ProjectServer.ServiceApp'
          }, {
            name: 'install',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'managedPath',
            required: true,
            elementName: {
              localPart: 'ManagedPath'
            }
          }, {
            name: 'serviceAccount',
            required: true,
            elementName: {
              localPart: 'ServiceAccount'
            }
          }, {
            name: 'serviceAccountPassword',
            required: true,
            elementName: {
              localPart: 'ServiceAccountPassword'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ProjectServer.ServiceApp.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ManagedAccounts',
        typeName: null,
        propertyInfos: [{
            name: 'managedAccount',
            required: true,
            collection: true,
            elementName: {
              localPart: 'ManagedAccount'
            },
            typeInfo: '.Configuration.Farm.ManagedAccounts.ManagedAccount'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps',
        typeName: null,
        propertyInfos: [{
            name: 'excelServices',
            required: true,
            elementName: {
              localPart: 'ExcelServices'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.ExcelServices'
          }, {
            name: 'visioService',
            required: true,
            elementName: {
              localPart: 'VisioService'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.VisioService'
          }, {
            name: 'accessService',
            required: true,
            elementName: {
              localPart: 'AccessService'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessService'
          }, {
            name: 'accessServices',
            required: true,
            elementName: {
              localPart: 'AccessServices'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessServices'
          }, {
            name: 'performancePointService',
            required: true,
            elementName: {
              localPart: 'PerformancePointService'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.PerformancePointService'
          }]
      }, {
        localName: 'Configuration.Farm.CentralAdmin',
        typeName: null,
        propertyInfos: [{
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            }
          }, {
            name: 'port',
            required: true,
            elementName: {
              localPart: 'Port'
            }
          }, {
            name: 'useSSL',
            required: true,
            elementName: {
              localPart: 'UseSSL'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'provision',
            required: true,
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
            required: true,
            attributeName: {
              localPart: 'relativeUrl'
            },
            type: 'attribute'
          }, {
            name: 'explicit',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'explicit'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.StateService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            required: true,
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'installDir',
            required: true,
            elementName: {
              localPart: 'InstallDir'
            }
          }, {
            name: 'dataDir',
            required: true,
            elementName: {
              localPart: 'DataDir'
            }
          }, {
            name: 'pidKey',
            required: true,
            elementName: {
              localPart: 'PIDKey'
            }
          }, {
            name: 'sku',
            required: true,
            elementName: {
              localPart: 'SKU'
            }
          }, {
            name: 'offlineInstall',
            required: true,
            elementName: {
              localPart: 'OfflineInstall'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'pauseAfterInstall',
            required: true,
            elementName: {
              localPart: 'PauseAfterInstall'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'remoteInstall',
            required: true,
            elementName: {
              localPart: 'RemoteInstall'
            },
            typeInfo: '.Configuration.Install.RemoteInstall'
          }, {
            name: 'autoAdminLogon',
            required: true,
            elementName: {
              localPart: 'AutoAdminLogon'
            },
            typeInfo: '.Configuration.Install.AutoAdminLogon'
          }, {
            name: 'disable',
            required: true,
            elementName: {
              localPart: 'Disable'
            },
            typeInfo: '.Configuration.Install.Disable'
          }, {
            name: 'spVersion',
            required: true,
            attributeName: {
              localPart: 'SPVersion'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install.RemoteInstall',
        typeName: null,
        propertyInfos: [{
            name: 'parallelInstall',
            required: true,
            elementName: {
              localPart: 'ParallelInstall'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'enable',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Enable'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ProjectServer.ServiceApp.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            required: true,
            elementName: {
              localPart: 'Install'
            },
            typeInfo: '.Configuration.Install'
          }, {
            name: 'farm',
            required: true,
            elementName: {
              localPart: 'Farm'
            },
            typeInfo: '.Configuration.Farm'
          }, {
            name: 'webApplications',
            required: true,
            elementName: {
              localPart: 'WebApplications'
            },
            typeInfo: '.Configuration.WebApplications'
          }, {
            name: 'serviceApps',
            required: true,
            elementName: {
              localPart: 'ServiceApps'
            },
            typeInfo: '.Configuration.ServiceApps'
          }, {
            name: 'enterpriseServiceApps',
            required: true,
            elementName: {
              localPart: 'EnterpriseServiceApps'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps'
          }, {
            name: 'officeWebApps',
            required: true,
            elementName: {
              localPart: 'OfficeWebApps'
            },
            typeInfo: '.Configuration.OfficeWebApps'
          }, {
            name: 'projectServer',
            required: true,
            elementName: {
              localPart: 'ProjectServer'
            },
            typeInfo: '.Configuration.ProjectServer'
          }, {
            name: 'adobePDF',
            required: true,
            elementName: {
              localPart: 'AdobePDF'
            },
            typeInfo: '.Configuration.AdobePDF'
          }, {
            name: 'foreFront',
            required: true,
            elementName: {
              localPart: 'ForeFront'
            },
            typeInfo: '.Configuration.ForeFront'
          }, {
            name: 'environment',
            required: true,
            attributeName: {
              localPart: 'Environment'
            },
            type: 'attribute'
          }, {
            name: 'version',
            required: true,
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.MachineTranslationService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
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
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Configure'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WorkManagementService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.SearchQueryAndSiteSettingsComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.ClaimsToWindowsTokenService',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            required: true,
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }, {
            name: 'updateAccount',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'UpdateAccount'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy',
        typeName: null,
        propertyInfos: [{
            name: 'partitioned',
            required: true,
            elementName: {
              localPart: 'Partitioned'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'proxyGroup',
            required: true,
            elementName: {
              localPart: 'ProxyGroup'
            }
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications',
        typeName: null,
        propertyInfos: [{
            name: 'webApplication',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'WebApplication'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication'
          }, {
            name: 'addURLsToHOSTS',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'AddURLsToHOSTS'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.WordViewingService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ForeFront',
        typeName: null,
        propertyInfos: [{
            name: 'configFile',
            required: true,
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'install',
            required: true,
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.BusinessDataConnectivity.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.MachineTranslationService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.MachineTranslationService.Database'
          }, {
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'ConfigFile'
            }
          }, {
            name: 'pidKeyOWA',
            required: true,
            elementName: {
              localPart: 'PIDKeyOWA'
            }
          }, {
            name: 'excelService',
            required: true,
            elementName: {
              localPart: 'ExcelService'
            },
            typeInfo: '.Configuration.OfficeWebApps.ExcelService'
          }, {
            name: 'wordViewingService',
            required: true,
            elementName: {
              localPart: 'WordViewingService'
            },
            typeInfo: '.Configuration.OfficeWebApps.WordViewingService'
          }, {
            name: 'powerPointService',
            required: true,
            elementName: {
              localPart: 'PowerPointService'
            },
            typeInfo: '.Configuration.OfficeWebApps.PowerPointService'
          }, {
            name: 'install',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.VisioService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'unattendedIDUser',
            required: true,
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            required: true,
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.IncomingEmail',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            required: true,
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.WordAutomationService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications',
        typeName: null,
        propertyInfos: [{
            name: 'enterpriseSearchServiceApplication',
            required: true,
            elementName: {
              localPart: 'EnterpriseSearchServiceApplication'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SPUsageService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.SPUsageService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.WebFrontEndWithDistributedCache',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'description',
            required: true,
            elementName: {
              localPart: 'Description'
            }
          }, {
            name: 'hostNamedSiteCollection',
            required: true,
            elementName: {
              localPart: 'HostNamedSiteCollection'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'owner',
            required: true,
            elementName: {
              localPart: 'Owner'
            }
          }, {
            name: 'customDatabase',
            required: true,
            elementName: {
              localPart: 'CustomDatabase'
            }
          }, {
            name: 'searchUrl',
            required: true,
            elementName: {
              localPart: 'SearchUrl'
            }
          }, {
            name: 'template',
            required: true,
            elementName: {
              localPart: 'Template'
            }
          }, {
            name: 'lcid',
            required: true,
            elementName: {
              localPart: 'LCID'
            }
          }, {
            name: 'locale',
            required: true,
            elementName: {
              localPart: 'Locale'
            }
          }, {
            name: 'time24',
            required: true,
            elementName: {
              localPart: 'Time24'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'siteUrl',
            required: true,
            attributeName: {
              localPart: 'siteUrl'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.FoundationWebApplication',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            required: true,
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.AdobePDF.IFilter',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            required: true,
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ObjectCacheAccounts',
        typeName: null,
        propertyInfos: [{
            name: 'superUser',
            required: true,
            elementName: {
              localPart: 'SuperUser'
            }
          }, {
            name: 'superReader',
            required: true,
            elementName: {
              localPart: 'SuperReader'
            }
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.SubscriptionSettingsService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'appSiteSubscriptionName',
            required: true,
            elementName: {
              localPart: 'AppSiteSubscriptionName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.SubscriptionSettingsService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication',
        typeName: null,
        propertyInfos: [{
            name: 'failoverDatabaseServer',
            required: true,
            elementName: {
              localPart: 'FailoverDatabaseServer'
            }
          }, {
            name: 'partitioned',
            required: true,
            elementName: {
              localPart: 'Partitioned'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'partitions',
            required: true,
            elementName: {
              localPart: 'Partitions'
            }
          }, {
            name: 'searchServiceApplicationType',
            required: true,
            elementName: {
              localPart: 'SearchServiceApplicationType'
            }
          }, {
            name: 'contentAccessAccount',
            required: true,
            elementName: {
              localPart: 'ContentAccessAccount'
            }
          }, {
            name: 'contentAccessAccountPassword',
            required: true,
            elementName: {
              localPart: 'ContentAccessAccountPassword'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database'
          }, {
            name: 'applicationPool',
            required: true,
            elementName: {
              localPart: 'ApplicationPool'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ApplicationPool'
          }, {
            name: 'crawlComponent',
            required: true,
            elementName: {
              localPart: 'CrawlComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.CrawlComponent'
          }, {
            name: 'queryComponent',
            required: true,
            elementName: {
              localPart: 'QueryComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.QueryComponent'
          }, {
            name: 'searchQueryAndSiteSettingsComponent',
            required: true,
            elementName: {
              localPart: 'SearchQueryAndSiteSettingsComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.SearchQueryAndSiteSettingsComponent'
          }, {
            name: 'adminComponent',
            required: true,
            elementName: {
              localPart: 'AdminComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent'
          }, {
            name: 'indexComponent',
            required: true,
            elementName: {
              localPart: 'IndexComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.IndexComponent'
          }, {
            name: 'contentProcessingComponent',
            required: true,
            elementName: {
              localPart: 'ContentProcessingComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ContentProcessingComponent'
          }, {
            name: 'analyticsProcessingComponent',
            required: true,
            elementName: {
              localPart: 'AnalyticsProcessingComponent'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AnalyticsProcessingComponent'
          }, {
            name: 'proxy',
            required: true,
            elementName: {
              localPart: 'Proxy'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy'
          }, {
            name: 'searchCenterUrl',
            required: true,
            elementName: {
              localPart: 'SearchCenterUrl'
            }
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.Search',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'AddToLocalAdminsDuringSetup'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'leaveInLocalAdmins',
            required: true,
            elementName: {
              localPart: 'LeaveInLocalAdmins'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'username',
            required: true,
            elementName: {
              localPart: 'Username'
            }
          }, {
            name: 'password',
            required: true,
            elementName: {
              localPart: 'Password'
            }
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'unattendedIDUser',
            required: true,
            elementName: {
              localPart: 'UnattendedIDUser'
            }
          }, {
            name: 'unattendedIDPassword',
            required: true,
            elementName: {
              localPart: 'UnattendedIDPassword'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.PerformancePointService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Logging',
        typeName: null,
        propertyInfos: [{
            name: 'iisLogs',
            required: true,
            elementName: {
              localPart: 'IISLogs'
            },
            typeInfo: '.Configuration.Farm.Logging.IISLogs'
          }, {
            name: 'ulsLogs',
            required: true,
            elementName: {
              localPart: 'ULSLogs'
            },
            typeInfo: '.Configuration.Farm.Logging.ULSLogs'
          }, {
            name: 'usageLogs',
            required: true,
            elementName: {
              localPart: 'UsageLogs'
            },
            typeInfo: '.Configuration.Farm.Logging.UsageLogs'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.SecureStoreService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService',
        typeName: null,
        propertyInfos: [{
            name: 'contactEmail',
            required: true,
            elementName: {
              localPart: 'ContactEmail'
            }
          }, {
            name: 'connectionTimeout',
            required: true,
            elementName: {
              localPart: 'ConnectionTimeout'
            }
          }, {
            name: 'acknowledgementTimeout',
            required: true,
            elementName: {
              localPart: 'AcknowledgementTimeout'
            }
          }, {
            name: 'proxyType',
            required: true,
            elementName: {
              localPart: 'ProxyType'
            }
          }, {
            name: 'ignoreSSLWarnings',
            required: true,
            elementName: {
              localPart: 'IgnoreSSLWarnings'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'internetIdentity',
            required: true,
            elementName: {
              localPart: 'InternetIdentity'
            }
          }, {
            name: 'customIndexLocation',
            required: true,
            elementName: {
              localPart: 'CustomIndexLocation'
            }
          }, {
            name: 'performanceLevel',
            required: true,
            elementName: {
              localPart: 'PerformanceLevel'
            }
          }, {
            name: 'shareName',
            required: true,
            elementName: {
              localPart: 'ShareName'
            }
          }, {
            name: 'enterpriseSearchServiceApplications',
            required: true,
            elementName: {
              localPart: 'EnterpriseSearchServiceApplications'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.PerformancePointService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.IndexComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
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
            required: true,
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.Custom',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ApplicationPool',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp.Database',
        typeName: null,
        propertyInfos: [{
            name: 'profileDB',
            required: true,
            elementName: {
              localPart: 'ProfileDB'
            }
          }, {
            name: 'syncDB',
            required: true,
            elementName: {
              localPart: 'SyncDB'
            }
          }, {
            name: 'socialDB',
            required: true,
            elementName: {
              localPart: 'SocialDB'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.UserProfileServiceApp.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.ContentProcessingComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install.AutoAdminLogon',
        typeName: null,
        propertyInfos: [{
            name: 'password',
            required: true,
            elementName: {
              localPart: 'Password'
            }
          }, {
            name: 'enable',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Enable'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.ManagedMetadataServiceApp.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps',
        typeName: null,
        propertyInfos: [{
            name: 'managedMetadataServiceApp',
            required: true,
            elementName: {
              localPart: 'ManagedMetadataServiceApp'
            },
            typeInfo: '.Configuration.ServiceApps.ManagedMetadataServiceApp'
          }, {
            name: 'userProfileServiceApp',
            required: true,
            elementName: {
              localPart: 'UserProfileServiceApp'
            },
            typeInfo: '.Configuration.ServiceApps.UserProfileServiceApp'
          }, {
            name: 'enterpriseSearchService',
            required: true,
            elementName: {
              localPart: 'EnterpriseSearchService'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService'
          }, {
            name: 'stateService',
            required: true,
            elementName: {
              localPart: 'StateService'
            },
            typeInfo: '.Configuration.ServiceApps.StateService'
          }, {
            name: 'webAnalyticsService',
            required: true,
            elementName: {
              localPart: 'WebAnalyticsService'
            },
            typeInfo: '.Configuration.ServiceApps.WebAnalyticsService'
          }, {
            name: 'spUsageService',
            required: true,
            elementName: {
              localPart: 'SPUsageService'
            },
            typeInfo: '.Configuration.ServiceApps.SPUsageService'
          }, {
            name: 'secureStoreService',
            required: true,
            elementName: {
              localPart: 'SecureStoreService'
            },
            typeInfo: '.Configuration.ServiceApps.SecureStoreService'
          }, {
            name: 'businessDataConnectivity',
            required: true,
            elementName: {
              localPart: 'BusinessDataConnectivity'
            },
            typeInfo: '.Configuration.ServiceApps.BusinessDataConnectivity'
          }, {
            name: 'wordAutomationService',
            required: true,
            elementName: {
              localPart: 'WordAutomationService'
            },
            typeInfo: '.Configuration.ServiceApps.WordAutomationService'
          }, {
            name: 'appManagementService',
            required: true,
            elementName: {
              localPart: 'AppManagementService'
            },
            typeInfo: '.Configuration.ServiceApps.AppManagementService'
          }, {
            name: 'subscriptionSettingsService',
            required: true,
            elementName: {
              localPart: 'SubscriptionSettingsService'
            },
            typeInfo: '.Configuration.ServiceApps.SubscriptionSettingsService'
          }, {
            name: 'workManagementService',
            required: true,
            elementName: {
              localPart: 'WorkManagementService'
            },
            typeInfo: '.Configuration.ServiceApps.WorkManagementService'
          }, {
            name: 'machineTranslationService',
            required: true,
            elementName: {
              localPart: 'MachineTranslationService'
            },
            typeInfo: '.Configuration.ServiceApps.MachineTranslationService'
          }, {
            name: 'powerPointConversionService',
            required: true,
            elementName: {
              localPart: 'PowerPointConversionService'
            },
            typeInfo: '.Configuration.ServiceApps.PowerPointConversionService'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessServices',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessServices.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WebAnalyticsService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.QueryComponent',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.PowerPointConversionService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles',
        typeName: null,
        propertyInfos: [{
            name: 'custom',
            required: true,
            elementName: {
              localPart: 'Custom'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.Custom'
          }, {
            name: 'webFrontEnd',
            required: true,
            elementName: {
              localPart: 'WebFrontEnd'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.WebFrontEnd'
          }, {
            name: 'webFrontEndWithDistributedCache',
            required: true,
            elementName: {
              localPart: 'WebFrontEndWithDistributedCache'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.WebFrontEndWithDistributedCache'
          }, {
            name: 'singleServerFarm',
            required: true,
            elementName: {
              localPart: 'SingleServerFarm'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.SingleServerFarm'
          }, {
            name: 'search',
            required: true,
            elementName: {
              localPart: 'Search'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.Search'
          }, {
            name: 'application',
            required: true,
            elementName: {
              localPart: 'Application'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.Application'
          }, {
            name: 'applicationWithSearch',
            required: true,
            elementName: {
              localPart: 'ApplicationWithSearch'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.ApplicationWithSearch'
          }, {
            name: 'distributedCache',
            required: true,
            elementName: {
              localPart: 'DistributedCache'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.DistributedCache'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SPUsageService.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.SPUsageService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.Farm.Services.DistributedCache',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            required: true,
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.WebFrontEnd',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.SiteCollections',
        typeName: null,
        propertyInfos: [{
            name: 'siteCollection',
            required: true,
            collection: true,
            elementName: {
              localPart: 'SiteCollection'
            },
            typeInfo: '.Configuration.WebApplications.WebApplication.SiteCollections.SiteCollection'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.AccessServices.Database',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.EnterpriseServiceApps.AccessServices.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.Farm.Logging.ULSLogs',
        typeName: null,
        propertyInfos: [{
            name: 'logLocation',
            required: true,
            elementName: {
              localPart: 'LogLocation'
            }
          }, {
            name: 'logDiskSpaceUsageGB',
            required: true,
            elementName: {
              localPart: 'LogDiskSpaceUsageGB'
            }
          }, {
            name: 'daysToKeepLogs',
            required: true,
            elementName: {
              localPart: 'DaysToKeepLogs'
            }
          }, {
            name: 'logCutInterval',
            required: true,
            elementName: {
              localPart: 'LogCutInterval'
            }
          }, {
            name: 'compress',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Compress'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.ManagedMetadataServiceApp.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent',
        typeName: null,
        propertyInfos: [{
            name: 'applicationPool',
            required: true,
            elementName: {
              localPart: 'ApplicationPool'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.AdminComponent.ApplicationPool'
          }, {
            name: 'provision',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.ServiceApps.AppManagementService.Database.DBAlias'
          }]
      }, {
        localName: 'Configuration.ServiceApps.MachineTranslationService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Logging.IISLogs',
        typeName: null,
        propertyInfos: [{
            name: 'path',
            required: true,
            elementName: {
              localPart: 'Path'
            }
          }, {
            name: 'compress',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Compress'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
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
            required: true,
            attributeName: {
              localPart: 'CommonName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'appDomain',
            required: true,
            elementName: {
              localPart: 'AppDomain'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.AppManagementService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WebAnalyticsService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.WebAnalyticsService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'Name'
            }
          }, {
            name: 'proxyName',
            required: true,
            elementName: {
              localPart: 'ProxyName'
            }
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.ServiceApps.WordAutomationService.Database'
          }, {
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'dbInstance',
            required: true,
            elementName: {
              localPart: 'DBInstance'
            }
          }, {
            name: 'dbPort',
            required: true,
            elementName: {
              localPart: 'DBPort'
            }
          }, {
            name: 'create',
            required: true,
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
            required: true,
            elementName: {
              localPart: 'LoopbackCheck'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'unusedServices',
            required: true,
            elementName: {
              localPart: 'UnusedServices'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'ieEnhancedSecurity',
            required: true,
            elementName: {
              localPart: 'IEEnhancedSecurity'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'certificateRevocationListCheck',
            required: true,
            elementName: {
              localPart: 'CertificateRevocationListCheck'
            },
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.SingleServerFarm',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.AdobePDF.MIMEType',
        typeName: null,
        propertyInfos: [{
            name: 'configure',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Configure'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Services.SandboxedCodeService',
        typeName: null,
        propertyInfos: [{
            name: 'start',
            required: true,
            attributeName: {
              localPart: 'Start'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm',
        typeName: null,
        propertyInfos: [{
            name: 'passphrase',
            required: true,
            elementName: {
              localPart: 'Passphrase'
            }
          }, {
            name: 'account',
            required: true,
            elementName: {
              localPart: 'Account'
            },
            typeInfo: '.Configuration.Farm.Account'
          }, {
            name: 'centralAdmin',
            required: true,
            elementName: {
              localPart: 'CentralAdmin'
            },
            typeInfo: '.Configuration.Farm.CentralAdmin'
          }, {
            name: 'database',
            required: true,
            elementName: {
              localPart: 'Database'
            },
            typeInfo: '.Configuration.Farm.Database'
          }, {
            name: 'services',
            required: true,
            elementName: {
              localPart: 'Services'
            },
            typeInfo: '.Configuration.Farm.Services'
          }, {
            name: 'serverRoles',
            required: true,
            elementName: {
              localPart: 'ServerRoles'
            },
            typeInfo: '.Configuration.Farm.ServerRoles'
          }, {
            name: 'managedAccounts',
            required: true,
            elementName: {
              localPart: 'ManagedAccounts'
            },
            typeInfo: '.Configuration.Farm.ManagedAccounts'
          }, {
            name: 'objectCacheAccounts',
            required: true,
            elementName: {
              localPart: 'ObjectCacheAccounts'
            },
            typeInfo: '.Configuration.Farm.ObjectCacheAccounts'
          }, {
            name: 'logging',
            required: true,
            elementName: {
              localPart: 'Logging'
            },
            typeInfo: '.Configuration.Farm.Logging'
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.DistributedCache',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Database',
        typeName: null,
        propertyInfos: [{
            name: 'dbServer',
            required: true,
            elementName: {
              localPart: 'DBServer'
            }
          }, {
            name: 'dbAlias',
            required: true,
            elementName: {
              localPart: 'DBAlias'
            },
            typeInfo: '.Configuration.Farm.Database.DBAlias'
          }, {
            name: 'dbPrefix',
            required: true,
            elementName: {
              localPart: 'DBPrefix'
            }
          }, {
            name: 'configDB',
            required: true,
            elementName: {
              localPart: 'ConfigDB'
            }
          }]
      }, {
        localName: 'Configuration.Farm.ServerRoles.Application',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: '.Configuration',
        elementName: {
          localPart: 'Configuration'
        }
      }]
  };
  return {
    ConfigModel: ConfigModel
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ConfigModel_Module_Factory);
}
else {
  var ConfigModel_Module = ConfigModel_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigModel = ConfigModel_Module.ConfigModel;
  }
  else {
    var ConfigModel = ConfigModel_Module.ConfigModel;
  }
}