var ConfigModel398_Module_Factory = function () {
  var ConfigModel398 = {
    name: 'ConfigModel398',
    typeInfos: [{
        localName: 'Configuration.ServiceApps.WorkManagementService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'configFile',
            required: true,
            attributeName: {
              localPart: 'ConfigFile'
            },
            type: 'attribute'
          }, {
            name: 'pidKeyOWA',
            required: true,
            attributeName: {
              localPart: 'PIDKeyOWA'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.WebAnalyticsService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
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
        localName: 'Configuration.ServiceApps.SecureStoreService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }, {
            name: 'appDomain',
            required: true,
            attributeName: {
              localPart: 'AppDomain'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.EnterpriseSearchService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'contactEmail',
            required: true,
            attributeName: {
              localPart: 'ContactEmail'
            },
            type: 'attribute'
          }, {
            name: 'connectionTimeout',
            required: true,
            attributeName: {
              localPart: 'ConnectionTimeout'
            },
            type: 'attribute'
          }, {
            name: 'acknowledgementTimeout',
            required: true,
            attributeName: {
              localPart: 'AcknowledgementTimeout'
            },
            type: 'attribute'
          }, {
            name: 'proxyType',
            required: true,
            attributeName: {
              localPart: 'ProxyType'
            },
            type: 'attribute'
          }, {
            name: 'ignoreSSLWarnings',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'IgnoreSSLWarnings'
            },
            type: 'attribute'
          }, {
            name: 'internetIdentity',
            required: true,
            attributeName: {
              localPart: 'InternetIdentity'
            },
            type: 'attribute'
          }, {
            name: 'customIndexLocation',
            required: true,
            attributeName: {
              localPart: 'CustomIndexLocation'
            },
            type: 'attribute'
          }, {
            name: 'performanceLevel',
            required: true,
            attributeName: {
              localPart: 'PerformanceLevel'
            },
            type: 'attribute'
          }, {
            name: 'shareName',
            required: true,
            attributeName: {
              localPart: 'ShareName'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.StateService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
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
        localName: 'Configuration.OfficeWebApps.PowerPointService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
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
        localName: 'Configuration.OfficeWebApps.ExcelService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDUser',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDUser'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDPassword',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDPassword'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy',
        typeName: null,
        propertyInfos: [{
            name: 'proxyGroup',
            required: true,
            elementName: {
              localPart: 'ProxyGroup'
            },
            typeInfo: '.Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy.ProxyGroup'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'partitioned',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Partitioned'
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
        localName: 'Configuration.ServiceApps.MachineTranslationService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
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
        localName: 'Configuration.ForeFront',
        typeName: null,
        propertyInfos: [{
            name: 'install',
            required: true,
            attributeName: {
              localPart: 'Install'
            },
            type: 'attribute'
          }, {
            name: 'configFile',
            required: true,
            attributeName: {
              localPart: 'ConfigFile'
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
        localName: 'Configuration.EnterpriseServiceApps.AccessServices',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }]
      }, {
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
        localName: 'Configuration.ServiceApps.UserProfileServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
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
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
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
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.WebApplications.WebApplication.SiteCollections.SiteCollection',
        typeName: null,
        propertyInfos: [{
            name: 'siteUrl',
            required: true,
            attributeName: {
              localPart: 'siteUrl'
            },
            type: 'attribute'
          }, {
            name: 'hostNamedSiteCollection',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'HostNamedSiteCollection'
            },
            type: 'attribute'
          }, {
            name: 'owner',
            required: true,
            attributeName: {
              localPart: 'Owner'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'description',
            required: true,
            attributeName: {
              localPart: 'Description'
            },
            type: 'attribute'
          }, {
            name: 'customDatabase',
            required: true,
            attributeName: {
              localPart: 'CustomDatabase'
            },
            type: 'attribute'
          }, {
            name: 'searchUrl',
            required: true,
            attributeName: {
              localPart: 'SearchUrl'
            },
            type: 'attribute'
          }, {
            name: 'template',
            required: true,
            attributeName: {
              localPart: 'Template'
            },
            type: 'attribute'
          }, {
            name: 'lcid',
            required: true,
            attributeName: {
              localPart: 'LCID'
            },
            type: 'attribute'
          }, {
            name: 'locale',
            required: true,
            attributeName: {
              localPart: 'Locale'
            },
            type: 'attribute'
          }, {
            name: 'time24',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Time24'
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
        localName: 'Configuration.ServiceApps.MachineTranslationService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.WebAnalyticsService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer.ServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
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
        localName: 'Configuration.ServiceApps.PowerPointConversionService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
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
        localName: 'Configuration.EnterpriseServiceApps.AccessService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
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
        localName: 'Configuration.Farm.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication.Proxy.ProxyGroup',
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
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'appSiteSubscriptionName',
            required: true,
            attributeName: {
              localPart: 'AppSiteSubscriptionName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SecureStoreService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.VisioService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDUser',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDUser'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDPassword',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDPassword'
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
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ProjectServer',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'configFile',
            required: true,
            attributeName: {
              localPart: 'ConfigFile'
            },
            type: 'attribute'
          }, {
            name: 'pidKeyProjectServer',
            required: true,
            attributeName: {
              localPart: 'PIDKeyProjectServer'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SPUsageService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
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
        localName: 'Configuration.ServiceApps.SPUsageService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.ManagedMetadataServiceApp.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.SubscriptionSettingsService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.StateService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.WordAutomationService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Install.AutoAdminLogon',
        typeName: null,
        propertyInfos: [{
            name: 'enable',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Enable'
            },
            type: 'attribute'
          }, {
            name: 'password',
            required: true,
            attributeName: {
              localPart: 'Password'
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
        localName: 'Configuration.Farm.ManagedAccounts.ManagedAccount',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'commonName',
            required: true,
            attributeName: {
              localPart: 'CommonName'
            },
            type: 'attribute'
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
        localName: 'Configuration.WebApplications',
        typeName: null,
        propertyInfos: [{
            name: 'webApplication',
            required: true,
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
        localName: 'Configuration.EnterpriseServiceApps.AccessServices.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
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
        localName: 'Configuration.ProjectServer.ServiceApp',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }, {
            name: 'managedPath',
            required: true,
            attributeName: {
              localPart: 'ManagedPath'
            },
            type: 'attribute'
          }, {
            name: 'serviceAccount',
            required: true,
            attributeName: {
              localPart: 'ServiceAccount'
            },
            type: 'attribute'
          }, {
            name: 'serviceAccountPassword',
            required: true,
            attributeName: {
              localPart: 'ServiceAccountPassword'
            },
            type: 'attribute'
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
        localName: 'Configuration.ServiceApps.WordAutomationService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
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
        localName: 'Configuration.ServiceApps.EnterpriseSearchService.EnterpriseSearchServiceApplications.EnterpriseSearchServiceApplication',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'failoverDatabaseServer',
            required: true,
            attributeName: {
              localPart: 'FailoverDatabaseServer'
            },
            type: 'attribute'
          }, {
            name: 'partitioned',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Partitioned'
            },
            type: 'attribute'
          }, {
            name: 'partitions',
            required: true,
            attributeName: {
              localPart: 'Partitions'
            },
            type: 'attribute'
          }, {
            name: 'searchServiceApplicationType',
            required: true,
            attributeName: {
              localPart: 'SearchServiceApplicationType'
            },
            type: 'attribute'
          }, {
            name: 'contentAccessAccount',
            required: true,
            attributeName: {
              localPart: 'ContentAccessAccount'
            },
            type: 'attribute'
          }, {
            name: 'contentAccessAccountPassword',
            required: true,
            attributeName: {
              localPart: 'ContentAccessAccountPassword'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.OfficeWebApps.WordViewingService',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.AppManagementService.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
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
        localName: 'Configuration.EnterpriseServiceApps.ExcelServices',
        typeName: null,
        propertyInfos: [{
            name: 'provision',
            required: true,
            attributeName: {
              localPart: 'Provision'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDUser',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDUser'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDPassword',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDPassword'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.Farm.Account',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'addToLocalAdminsDuringSetup',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'AddToLocalAdminsDuringSetup'
            },
            type: 'attribute'
          }, {
            name: 'leaveInLocalAdmins',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'LeaveInLocalAdmins'
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
        localName: 'Configuration.WebApplications.WebApplication',
        typeName: null,
        propertyInfos: [{
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
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'applicationPool',
            required: true,
            attributeName: {
              localPart: 'applicationPool'
            },
            type: 'attribute'
          }, {
            name: 'url',
            required: true,
            attributeName: {
              localPart: 'url'
            },
            type: 'attribute'
          }, {
            name: 'port',
            required: true,
            attributeName: {
              localPart: 'port'
            },
            type: 'attribute'
          }, {
            name: 'useHostHeader',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'UseHostHeader'
            },
            type: 'attribute'
          }, {
            name: 'addURLToLocalIntranetZone',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'AddURLToLocalIntranetZone'
            },
            type: 'attribute'
          }, {
            name: 'grantCurrentUserFullControl',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'GrantCurrentUserFullControl'
            },
            type: 'attribute'
          }, {
            name: 'useClaims',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'useClaims'
            },
            type: 'attribute'
          }, {
            name: 'useBasicAuthentication',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'useBasicAuthentication'
            },
            type: 'attribute'
          }, {
            name: 'useOnlineWebPartCatalog',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'useOnlineWebPartCatalog'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.UserProfileServiceApp',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }, {
            name: 'mySiteHostLocation',
            required: true,
            attributeName: {
              localPart: 'MySiteHostLocation'
            },
            type: 'attribute'
          }, {
            name: 'mySiteManagedPath',
            required: true,
            attributeName: {
              localPart: 'MySiteManagedPath'
            },
            type: 'attribute'
          }, {
            name: 'enableNetBIOSDomainNames',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'EnableNetBIOSDomainNames'
            },
            type: 'attribute'
          }, {
            name: 'startProfileSync',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'StartProfileSync'
            },
            type: 'attribute'
          }, {
            name: 'createDefaultSyncConnection',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'CreateDefaultSyncConnection'
            },
            type: 'attribute'
          }, {
            name: 'syncConnectionAccount',
            required: true,
            attributeName: {
              localPart: 'SyncConnectionAccount'
            },
            type: 'attribute'
          }, {
            name: 'syncConnectionAccountPassword',
            required: true,
            attributeName: {
              localPart: 'SyncConnectionAccountPassword'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.ServiceApps.BusinessDataConnectivity.Database.DBAlias',
        typeName: null,
        propertyInfos: [{
            name: 'create',
            required: true,
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'Create'
            },
            type: 'attribute'
          }, {
            name: 'dbInstance',
            required: true,
            attributeName: {
              localPart: 'DBInstance'
            },
            type: 'attribute'
          }, {
            name: 'dbPort',
            required: true,
            attributeName: {
              localPart: 'DBPort'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Configuration.EnterpriseServiceApps.PerformancePointService',
        typeName: null,
        propertyInfos: [{
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
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'Name'
            },
            type: 'attribute'
          }, {
            name: 'proxyName',
            required: true,
            attributeName: {
              localPart: 'ProxyName'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDUser',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDUser'
            },
            type: 'attribute'
          }, {
            name: 'unattendedIDPassword',
            required: true,
            attributeName: {
              localPart: 'UnattendedIDPassword'
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
    ConfigModel398: ConfigModel398
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ConfigModel398_Module_Factory);
}
else {
  var ConfigModel398_Module = ConfigModel398_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigModel398 = ConfigModel398_Module.ConfigModel398;
  }
  else {
    var ConfigModel398 = ConfigModel398_Module.ConfigModel398;
  }
}