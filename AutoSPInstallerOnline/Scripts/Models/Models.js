/// <reference path="../../typings/tsd.d.ts" />
"use strict";
//Used by ASPIO Controller
var ManagedAccount = (function () {
    function ManagedAccount() {
        this.username = "";
        this.password = "";
        this.commonName = "";
    }
    return ManagedAccount;
})();
var WebApplication = (function () {
    function WebApplication() {
        this.name = "";
        this.type = "";
        this.applicationPool = "";
        this.url = "";
        this.port = "";
        this.useHostHeader = true;
        this.addURLToLocalIntranetZone = true;
        this.grantCurrentUserFullControl = true;
        this.useClaims = true;
        this.useBasicAuthentication = false;
        this.useOnlineWebPartCatalog = false;
        this.managedPaths = new ManagedPaths();
        this.siteCollections = new SiteCollections();
        this.database = new Database();
    }
    return WebApplication;
})();
var SiteCollections = (function () {
    function SiteCollections() {
        this.siteCollection = new Array();
    }
    return SiteCollections;
})();
var SiteCollection = (function () {
    function SiteCollection() {
        this.siteUrl = "";
        this.hostNamedSiteCollection = false;
        this.owner = "";
        this.name = "";
        this.description = "";
        this.customDatabase = "";
        this.searchUrl = "";
        this.template = "";
        this.lcid = "1033";
        this.locale = "en-us";
        this.time24 = false;
    }
    return SiteCollection;
})();
var ManagedPaths = (function () {
    function ManagedPaths() {
        this.managedPath = new Array();
    }
    return ManagedPaths;
})();
var ManagedPath = (function () {
    function ManagedPath() {
        this.relativeUrl = "";
        this.explicit = false;
    }
    return ManagedPath;
})();
var Database = (function () {
    function Database() {
        this.name = "";
        this.server = "";
        this.dbAlias = new DBAlias();
    }
    return Database;
})();
var DBAlias = (function () {
    function DBAlias() {
        this.create = false;
        this.dbInstance = "";
        this.dbPort = "";
    }
    return DBAlias;
})();
// Used by Provision Directive
var ProvisionModel = (function () {
    function ProvisionModel() {
    }
    ProvisionModel.prototype.constricutor = function () {
        this.servers = new Servers();
    };
    return ProvisionModel;
})();
var Servers = (function () {
    function Servers() {
    }
    return Servers;
})();
