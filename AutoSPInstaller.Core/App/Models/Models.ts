/// <reference path="../../typings/tsd.d.ts" />
"use strict";

declare var Jsonix;
declare var ConfigModel;
declare var ConfigModel39951;
declare var ConfigModel3995;
declare var ConfigModel399;
declare var ConfigModel398;
declare var vkbeautify;


//Used by ASPIO Controller
class ManagedAccount {
    username: string;
    password: string;
    commonName: string;
    constructor() {
        this.username = "";
        this.password = "";
        this.commonName = "";
    }
}
class WebApplication {
    name: string;
    type: string;
    applicationPool: string;
    url: string;
    port: string;
    useHostHeader: boolean;
    addURLToLocalIntranetZone: boolean;
    grantCurrentUserFullControl: boolean;
    useClaims: boolean;
    useBasicAuthentication: boolean;
    useOnlineWebPartCatalog: boolean;
    managedPaths: ManagedPaths;
    siteCollections: SiteCollections;
    database: Database;
    constructor() {
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
}
class SiteCollections {
    siteCollection: Array<SiteCollection>;
    constructor() {
        this.siteCollection = new Array<SiteCollection>();
    }
}
class SiteCollection {
    siteUrl: string;
    hostNamedSiteCollection: boolean;
    owner: string;
    name: string;
    description: string;
    customDatabase: string;
    searchUrl: string;
    template: string;
    lcid: string;
    locale: string;
    time24: boolean;
    constructor() {
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
}
class ManagedPaths {
    managedPath: Array<ManagedPath>;
    constructor() {
        this.managedPath = new Array<ManagedPath>();
    }
}
class ManagedPath {
    relativeUrl: string;
    explicit: boolean;
    constructor() {
        this.relativeUrl = "";
        this.explicit = false;
    }
}
class Database {
    name: string;
    server: string;
    dbAlias: DBAlias;
    constructor() {
        this.name = "";
        this.server = "";
        this.dbAlias = new DBAlias();
    }
}
class DBAlias {
    create: boolean;
    dbInstance: string;
    dbPort: string;
    constructor() {
        this.create = false;
        this.dbInstance = "";
        this.dbPort = "";
    }
}

// Used by Provision Directive
class ProvisionModel {
    provision: string;
    servers: Servers;
    constricutor() {
        this.servers = new Servers();
    }
}
class Servers {
    [server: string]: boolean;
}
