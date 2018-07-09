/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,X,w){'use strict';function I(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.7/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Za(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:G(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(x(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(J(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(mc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)ta.call(b,d)&&a.call(c,b[d],d,b);return b}function nc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function oc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function pc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var h=a[e];if(C(h)||x(h))for(var g=Object.keys(h),l=0,k=g.length;l<k;l++){var n=g[l],p=h[n];c&&C(p)?ea(p)?b[n]=new Date(p.valueOf()):Oa(p)?
b[n]=new RegExp(p):(C(b[n])||(b[n]=J(p)?[]:{}),Mb(b[n],[p],!0)):b[n]=p}}pc(b,d);return b}function P(b){return Mb(b,ua.call(arguments,1),!1)}function Vd(b){return Mb(b,ua.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return P(Object.create(b),a)}function y(){}function $a(b){return b}function qa(b){return function(){return b}}function qc(b){return x(b.toString)&&b.toString!==Object.prototype.toString}function v(b){return"undefined"===typeof b}function A(b){return"undefined"!==
typeof b}function C(b){return null!==b&&"object"===typeof b}function mc(b){return null!==b&&"object"===typeof b&&!rc(b)}function G(b){return"string"===typeof b}function V(b){return"number"===typeof b}function ea(b){return"[object Date]"===va.call(b)}function x(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===va.call(b)}function Za(b){return b&&b.window===b}function ab(b){return b&&b.$evalAsync&&b.$watch}function bb(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||
b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function wa(b){return F(b.nodeName||b[0]&&b[0].nodeName)}function cb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function ha(b,a,c,d){if(Za(b)||ab(b))throw Ea("cpws");if(tc.test(va.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];C(b)&&(c.push(b),d.push(a));var e;if(J(b))for(e=a.length=0;e<b.length;e++)a.push(ha(b[e],null,c,d));else{var f=a.$$hashKey;J(a)?
a.length=0:m(a,function(b,c){delete a[c]});if(mc(b))for(e in b)a[e]=ha(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=ha(b[e],null,c,d));else for(e in b)ta.call(b,e)&&(a[e]=ha(b[e],null,c,d));pc(a,f)}}else if(a=b,C(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(J(b))return ha(b,[],c,d);if(tc.test(va.call(b)))a=new b.constructor(b);else if(ea(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
b.lastIndex;else if(x(b.cloneNode))a=b.cloneNode(!0);else return e=Object.create(rc(b)),ha(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ja(b,a){if(J(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(C(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<
c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if(ab(b)||ab(a)||Za(b)||Za(a)||J(a)||ea(a)||Oa(a))return!1;c=fa();for(d in b)if("$"!==d.charAt(0)&&!x(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c)&&"$"!==d.charAt(0)&&A(a[d])&&!x(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(ua.call(a,c))}function uc(b,a){var c=2<arguments.length?ua.call(arguments,2):[];
return!x(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,db(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=w:Za(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":ab(a)&&(c="$SCOPE");return c}function eb(b,a){if("undefined"===typeof b)return w;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function vc(b){return G(b)?JSON.parse(b):b}function wc(b,
a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function xa(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===Pa?F(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(d){return F(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}
function yc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=xc(e),A(e)&&(f=A(f)?xc(f):!0,ta.call(a,e)?J(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){J(b)?m(b,function(b){a.push(la(d,!0)+(!0===b?"":"="+la(b,!0)))}):a.push(la(d,!0)+(!0===b?"":"="+la(b,!0)))});return a.length?a.join("&"):""}function ob(b){return la(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function la(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,G(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":",
"\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){C(c)||(c={});c=P({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===X?"document":xa(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=fb(a,c.strictDi);d.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");da.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};x(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function $d(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}
function ae(b){b=da.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Bc){var a=pb();(ra=v(a)?Q.jQuery:a?Q[a]:w)&&ra.fn.on?(B=ra,P(ra.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=
ra._data(f,"events"))&&d.$destroy&&ra(f).triggerHandler("$destroy");b(a)}):B=R;da.element=B;Bc=!0}}function qb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&J(b)&&(b=b[b.length-1]);qb(x(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&
x(b)?uc(e,b):b}function rb(b){for(var a=b[0],c=b[b.length-1],d,e=1;a!==c&&(a=a.nextSibling);e++)if(d||b[e]!==a)d||(d=B(ua.call(b,0,e))),d.push(a);return d||b}function fa(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=I("$injector"),d=I("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||I;return a(b,"module",function(){var b={};return function(f,h,g){if("hasOwnProperty"===f)throw d("badname","module");h&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,
c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return E}}function b(a,c){return function(b,e){e&&x(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return E}}if(!h)throw c("nomod",f);var d=[],e=[],r=[],t=a("$injector","invoke","push",e),E={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:h,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:t,run:function(a){r.push(a);return this}};g&&t(g);return E})}})}function ee(b){P(b,{bootstrap:zc,copy:ha,extend:P,merge:Vd,equals:ka,element:B,forEach:m,injector:fb,noop:y,bind:uc,toJson:eb,fromJson:vc,identity:$a,isUndefined:v,isDefined:A,isString:G,isFunction:x,isObject:C,isNumber:V,isElement:sc,isArray:J,
version:fe,isDate:ea,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:I,$$csp:Fa,reloadWithDebugInfo:$d});Rb=de(Q);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Dc).directive({a:he,input:Ec,textarea:Ec,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Jc);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
$filter:Kc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function gb(b){return b.replace(Af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Bf,"Moz$1")}function Lc(b){b=b.nodeType;
return b===pa||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Cf.exec(b)||["",""])[1].toLowerCase();d=ma[d]||ma._default;c.innerHTML=d[1]+b.replace(Df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;G(b)&&(b=T(b),
a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=Ef.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Ub(b){return b.cloneNode(!0)}function ub(b,a){a||vb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)vb(c[d])}function Oc(b,a,c,d){if(A(d))throw Tb("offargs");var e=(d=wb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(A(c)){var d=e[a];cb(d||[],c);if(d&&0<
d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function vb(b,a){var c=b.ng339,d=c&&hb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Oc(b)),delete hb[c],b.ng339=w))}function wb(b,a){var c=b.ng339,c=c&&hb[c];a&&!c&&(b.ng339=c=++Ff,c=hb[c]={events:{},data:{},handle:w});return c}function Vb(b,a,c){if(Lc(b)){var d=A(c),e=!d&&a&&!C(a),f=!a;b=(b=wb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
if(e)return b&&b[a];P(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if(A(c=B.data(b,a[d])))return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(ub(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Wb(b,a){a||ub(b);var c=b.parentNode;c&&c.removeChild(b)}function Gf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Rc(b,a){var c=Bb[a.toLowerCase()];return c&&Sc[wa(b)]&&c}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],h=f?f.length:0;if(h){if(v(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();g&&g.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<h&&(f=ja(f));for(var l=0;l<h;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function xf(){this.$get=function(){return P(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(b,a){function c(a){return function(b,c){if(C(b))m(b,oc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(x(b)||J(b))b=r.instantiate(b);
if(!b.$get)throw Ha("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=E.invoke(b,this);if(v(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function h(a){qb(v(a)||J(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{G(a)?(c=Rb(a),b=b.concat(h(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):
x(a)?b.push(r.invoke(a)):J(a)?b.push(r.invoke(a)):Sa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=
f,f=null);var h=[],k=fb.$$annotate(b,a,g),l,r,p;r=0;for(l=k.length;r<l;r++){p=k[r];if("string"!==typeof p)throw Ha("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}J(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((J(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return C(a)||x(a)?a:d},get:d,annotate:fb.$$annotate,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Ua([],!0),p={$provide:{provider:c(d),
factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=E.invoke(d,c);return E.invoke(b,null,{$delegate:a})}}}},r=p.$injector=g(p,function(a,b){da.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),t={},E=t.$injector=g(t,function(a,b){var c=r.get(a+"Provider",b);
return E.invoke(c.$get,c,w,a)});m(h(b),function(a){a&&E.invoke(a)});return E}function Qe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=h.yOffset;x(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,
a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function h(a){a=G(a)?a:c.hash();var b;a?(b=g.getElementById(a))?f(b):(b=e(g.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Gf(function(){d.$evalAsync(h)})});return h}]}function ib(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;J(b)&&(b=b.join(" "));J(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){G(b)&&(b=b.split(" "));var a=fa();m(b,function(b){b.length&&
(a[b]=!0)});return a}function Ia(b){return C(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(E--,0===E)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(){ia=null;h();g()}function h(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=v(u)?null:u;ka(u,L)&&(u=L);L=u}function g(){if(z!==l.url()||q!==u)z=l.url(),q=u,m(O,function(a){a(l.url(),u)})}var l=this,k=b.location,n=b.history,p=b.setTimeout,r=b.clearTimeout,t={};l.isMock=!1;var E=0,K=[];l.$$completeOutstandingRequest=
e;l.$$incOutstandingRequestCount=function(){E++};l.notifyWhenNoOutstandingRequests=function(a){0===E?a():K.push(a)};var u,q,z=k.href,N=a.find("base"),ia=null;h();q=u;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=q===e;if(z===a&&(!d.history||f))return l;var g=z&&Ja(z)===Ja(a);z=a;q=e;if(!d.history||g&&f){if(!g||ia)ia=a;c?k.replace(a):g?(c=k,e=a.indexOf("#"),e=-1===e?"":a.substr(e),c.hash=e):k.href=a;k.href!==a&&(ia=a)}else n[c?"replaceState":
"pushState"](e,"",a),h(),q=u;return l}return ia||k.href.replace(/%27/g,"'")};l.state=function(){return u};var O=[],H=!1,L=null;l.onUrlChange=function(a){if(!H){if(d.history)B(b).on("popstate",f);B(b).on("hashchange",f);H=!0}O.push(a);return a};l.$$applicationDestroyed=function(){B(b).off("hashchange popstate",f)};l.$$checkUrlChange=g;l.baseHref=function(){var a=N.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;E++;c=p(function(){delete t[c];e(a)},b||0);
t[c]=!0;return c};l.defer.cancel=function(a){return t[a]?(delete t[a],r(a),e(y),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=p&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var h=0,g=P({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,r=null;return a[b]=
{put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||h++;l[a]=b;h>k&&this.remove(r.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];h--},removeAll:function(){l={};h=0;n={};p=r=null},destroy:function(){n=g=l=null;delete a[b]},info:function(){return P({},g,{size:h})}}}var a={};b.info=function(){var b=
{};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function rf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||
b!==F(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Ta(a,"directive");G(a)?(d(a),qb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);x(h)?h={compile:qa(h)}:
!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,r=h.name,n={isolateScope:null,bindToController:null};C(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));C(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(C(n.bindToController)){var S=l.controller,E=l.controllerAs;if(!S)throw ga("noctrl",
r);var ca;a:if(E&&G(E))ca=E;else{if(G(S)){var m=Vc.exec(S);if(m){ca=m[3];break a}}ca=void 0}if(!ca)throw ga("noident",r);}var s=k.$$bindings=n;C(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(w){d(w)}});return f}])),e[a].push(f)):m(a,oc(r));return this};this.aHrefSanitizationWhitelist=function(b){return A(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a.imgSrcSanitizationWhitelist(b),
this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return A(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,q,z,N,ia,O,H){function L(a,b){try{a.addClass(b)}catch(c){}}function W(a,b,c,d,e){a instanceof B||(a=B(a));m(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=
S(a,b,a,c,d,e);W.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Xb(g,B("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);W.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,
b,c,d,e,f){function g(a,c,d,e){var f,k,l,r,n,t,O;if(q)for(O=Array(c.length),r=0;r<h.length;r+=3)f=h[r],O[f]=c[f];else O=c;r=0;for(n=h.length;r<n;)if(k=O[h[r++]],c=h[r++],f=h[r++],c){if(c.scope){if(l=a.$new(),W.$$addScopeInfo(B(k),l),t=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",t)}else l=a;t=c.transcludeOnThisElement?ba(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ba(a,b):null;c(f,l,k,d,t,c)}else f&&f(a,k.childNodes,w,e)}for(var h=[],k,l,r,n,q,t=0;t<a.length;t++){k=new Z;
l=ca(a[t],[],k,0===t?d:w,e);(f=l.length?D(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&W.$$addScopeClass(k.$$element);k=f&&f.terminal||!(r=a[t].childNodes)||!r.length?null:S(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(t,f,k),n=!0,q=q||f;f=null}return n?g:null}function ba(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ca(a,b,c,d,e){var g=
c.$attr,k;switch(a.nodeType){case pa:na(b,ya(wa(a)),"E",d,e);for(var l,r,n,q=a.attributes,t=0,O=q&&q.length;t<O;t++){var K=!1,H=!1;l=q[t];k=l.name;r=T(l.value);l=ya(k);if(n=ja.test(l))k=k.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=l.replace(/(Start|End)$/,"");I(S)&&l===S+"Start"&&(K=k,H=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=ya(k.toLowerCase());g[l]=k;if(n||!c.hasOwnProperty(l))c[l]=r,Rc(a,l)&&(c[l]=!0);V(a,b,r,l,n);na(b,l,"A",d,e,K,H)}a=
a.className;C(a)&&(a=a.animVal);if(G(a)&&""!==a)for(;k=h.exec(a);)l=ya(k[2]),na(b,l,"C",d,e)&&(c[l]=T(k[3])),a=a.substr(k.index+k[0].length);break;case Pa:if(11===Wa)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);Ka(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=ya(k[1]),na(b,l,"M",d,e)&&(c[l]=T(k[2]))}catch(E){}}b.sort(M);return b}function za(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",
b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=za(e[0],b,c);return a(d,e,f,g,h)}}function D(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=D.require;a.directiveName=y;if(u===D||D.$$isolateScope)a=$(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=D.require;b.directiveName=y;if(u===D||D.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}
function t(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ga("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=t(a,b[g],c,d);return e||null}function O(a,b,c,d,e,f){var g=fa(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=k.controller;"@"==r&&(r=b[k.name]);l=q(r,
l,!0,k.controllerAs);g[k.name]=l;ia||a.data("$"+k.name+"Controller",l.instance)}return g}function K(a,c,e,f,g,l){function r(a,b,c){var d;ab(a)||(c=b,b=a,a=w);ia&&(d=ca);c||(c=ia?N.parent():N);return g(a,b,d,c,za)}var n,q,H,E,ca,z,N;b===e?(f=d,N=d.$$element):(N=B(e),f=new Z(N,d));u&&(E=c.$new(!0));g&&(z=r,z.$$boundTransclude=g);ba&&(ca=O(N,f,z,ba,E,c));u&&(W.$$addScopeInfo(N,E,!0,!(L&&(L===u||L===u.$$originalDirective))),W.$$addScopeClass(N,!0),E.$$isolateBindings=u.$$isolateBindings,Y(c,f,E,E.$$isolateBindings,
u,E));if(ca){var Va=u||S,m;Va&&ca[Va.name]&&(q=Va.$$bindings.bindToController,(H=ca[Va.name])&&H.identifier&&q&&(m=H,l.$$destroyBindings=Y(c,f,H.instance,q,Va)));for(n in ca){H=ca[n];var D=H();D!==H.instance&&(H.instance=D,N.data("$"+n+"Controller",D),H===m&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,D,q,Va)))}}n=0;for(l=h.length;n<l;n++)q=h[n],aa(q,q.isolateScope?E:c,N,f,q.require&&t(q.directiveName,q.require,N,ca),z);var za=c;u&&(u.template||null===u.templateUrl)&&(za=E);a&&a(za,e.childNodes,
w,g);for(n=k.length-1;0<=n;n--)q=k[n],aa(q,q.isolateScope?E:c,N,f,q.require&&t(q.directiveName,q.require,N,ca),z)}r=r||{};for(var H=-Number.MAX_VALUE,S=r.newScopeDirective,ba=r.controllerDirectives,u=r.newIsolateScopeDirective,L=r.templateDirective,z=r.nonTlbTranscludeDirective,N=!1,m=!1,ia=r.hasElementTranscludeDirective,v=d.$$element=B(b),D,y,M,Ka=e,na,I=0,F=a.length;I<F;I++){D=a[I];var P=D.$$start,R=D.$$end;P&&(v=za(b,P,R));M=w;if(H>D.priority)break;if(M=D.scope)D.templateUrl||(C(M)?(Q("new/isolated scope",
u||S,D,v),u=D):Q("new/isolated scope",u,D,v)),S=S||D;y=D.name;!D.templateUrl&&D.controller&&(M=D.controller,ba=ba||fa(),Q("'"+y+"' controller",ba[y],D,v),ba[y]=D);if(M=D.transclude)N=!0,D.$$tlb||(Q("transclusion",z,D,v),z=D),"element"==M?(ia=!0,H=D.priority,M=v,v=d.$$element=B(X.createComment(" "+y+": "+d[y]+" ")),b=v[0],U(f,ua.call(M,0),b),Ka=W(M,e,H,g&&g.name,{nonTlbTranscludeDirective:z})):(M=B(Ub(b)).contents(),v.empty(),Ka=W(M,e));if(D.template)if(m=!0,Q("template",L,D,v),L=D,M=x(D.template)?
D.template(v,d):D.template,M=ha(M),D.replace){g=D;M=Sb.test(M)?Xc(Xb(D.templateNamespace,T(M))):[];b=M[0];if(1!=M.length||b.nodeType!==pa)throw ga("tplrt",y,"");U(f,v,b);F={$attr:{}};M=ca(b,[],F);var Lf=a.splice(I+1,a.length-(I+1));u&&A(M);a=a.concat(M).concat(Lf);Yc(d,F);F=a.length}else v.html(M);if(D.templateUrl)m=!0,Q("template",L,D,v),L=D,D.replace&&(g=D),K=Mf(a.splice(I,a.length-I),v,d,f,N&&Ka,h,k,{controllerDirectives:ba,newScopeDirective:S!==D&&S,newIsolateScopeDirective:u,templateDirective:L,
nonTlbTranscludeDirective:z}),F=a.length;else if(D.compile)try{na=D.compile(v,d,Ka),x(na)?n(null,na,P,R):na&&n(na.pre,na.post,P,R)}catch(V){c(V,xa(v))}D.terminal&&(K.terminal=!0,H=Math.max(H,D.priority))}K.scope=S&&!0===S.scope;K.transcludeOnThisElement=N;K.templateOnThisElement=m;K.transclude=Ka;r.hasElementTranscludeDirective=ia;return K}function A(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function na(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;
d=a.get(d+"Directive");for(var q=0,t=d.length;q<t;q++)try{n=d[q],(v(g)||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Nb(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(H){c(H)}}return h}function I(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Yc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==
f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Mf(a,b,c,e,f,g,h,k){var l=[],r,n,q=b[0],t=a.shift(),H=Nb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),O=x(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,E=t.templateNamespace;b.empty();d(O).then(function(d){var K,u;d=ha(d);if(t.replace){d=Sb.test(d)?Xc(Xb(E,T(d))):
[];K=d[0];if(1!=d.length||K.nodeType!==pa)throw ga("tplrt",t.name,O);d={$attr:{}};U(e,b,K);var z=ca(K,[],d);C(t.scope)&&A(z);a=z.concat(a);Yc(c,d)}else K=q,b.html(d);a.unshift(H);r=D(a,K,c,f,b,t,g,h,k);m(e,function(a,c){a==K&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var N=l.shift(),W=l.shift(),z=b[0];if(!d.$$destroyed){if(u!==q){var za=u.className;k.hasElementTranscludeDirective&&t.replace||(z=Ub(K));U(N,B(u),z);L(B(z),za)}u=r.transcludeOnThisElement?ba(d,r.transclude,
W):W;r(n,d,z,e,u,r)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(r.transcludeOnThisElement&&(a=ba(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function M(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function Ka(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&W.$$addBindingClass(a);return function(a,c){var e=c.parent();b||W.$$addBindingClass(e);W.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return ia.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return ia.RESOURCE_URL}function V(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var l=b(d,!0,h,f);if(l){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",xa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=fa());if(k.test(e))throw ga("nodomevents");var r=g[e];r!==d&&(l=r&&b(r,!0,h,f),d=r);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,
a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);B.hasData(d)&&(B(c).data(B(d).data()),ra?(Qb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function $(a,
b){return P(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function Y(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,r,n,q,K;switch(e.mode){case "@":l||ta.call(c,k)||(d[g]=c[k]=void 0);c.$observe(k,function(a){G(a)&&(d[g]=a)});c.$$observers[k].$$scope=a;G(c[k])&&(d[g]=b(c[k])(a));break;case "=":if(!ta.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;n=u(c[k]);K=n.literal?ka:function(a,b){return a===b||a!==a&&b!==
b};q=n.assign||function(){r=d[g]=n(a);throw ga("nonassign",c[k],f.name);};r=d[g]=n(a);l=function(b){K(b,d[g])||(K(b,r)?q(a,b=d[g]):d[g]=b);return r=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,n.literal);h=h||[];h.push(l);break;case "&":n=c.hasOwnProperty(k)?u(c[k]):y;if(n===y&&l)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:y;return g&&e!==y?(g.$on("$destroy",e),y):e}var Z=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Z.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zc(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=Zc(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=$c[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=
b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,"-"));f=wa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var r=2*l,f=f+H(T(g[r]),!0),f=f+(" "+T(g[r+1]));g=T(g[2*l]).split(/\s/);f+=H(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||v(b)?this.$$element.removeAttr(e):
this.$$element.attr(e,b));(a=this.$$observers)&&m(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=fa()),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||v(c[a])||b(c[a])});return function(){cb(e,b)}}};var da=b.startSymbol(),ea=b.endSymbol(),ha="{{"==da||"}}"==ea?$a:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ea)},ja=/^ngAttr[A-Z]/;W.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||
[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;W.$$addBindingClass=n?function(a){L(a,"ng-binding")}:y;W.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;W.$$addScopeClass=n?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:y;return W}]}function ya(b){return gb(b.replace(Wc,""))}function Zc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?
" ":"")+h}return c}function Xc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Nf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");C(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!C(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,h,g,l){var k,n,p;g=!0===g;l&&G(l)&&(p=l);if(G(f)){l=f.match(Vc);if(!l)throw Of("ctrlfmt",f);
n=l[1];p=p||l[3];f=b.hasOwnProperty(n)?b[n]:Cc(h.$scope,n,!0)||(a?Cc(d,n,!0):w);Sa(f,n,!0)}if(g)return g=(J(f)?f[f.length-1]:f).prototype,k=Object.create(g||null),p&&e(h,p,k,n||f.name),P(function(){var a=c.invoke(f,k,h,n);a!==k&&(C(a)||x(a))&&(k=a,p&&e(h,p,k,n||f.name));return k},{instance:k,identifier:p});k=c.instantiate(f,h,n);p&&e(h,p,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return B(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,
arguments)}}]}function Yb(b){return C(b)?ea(b)?b.toISOString():eb(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];nc(b,function(b,d){null===b||v(b)||(J(b)?m(b,function(b,c){a.push(la(d)+"="+la(Yb(b)))}):a.push(la(d)+"="+la(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||v(b)||(J(b)?m(b,function(b,c){a(b,e+"["+(C(b)?c:"")+"]")}):C(b)&&!ea(b)?nc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(la(e)+
"="+la(Yb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(G(b)){var c=b.replace(Pf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(ad))||(d=(d=c.match(Qf))&&Rf[d[0]].test(c));d&&(b=vc(c))}}return b}function bd(b){var a=fa(),c;G(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=F(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):C(b)&&m(b,function(b,c){var f=F(c),h=T(b);f&&(a[f]=a[f]?a[f]+", "+h:h)});return a}function cd(b){var a;
return function(c){a||(a=bd(b));return c?(c=a[F(c)],void 0===c&&(c=null),c):a}}function dd(b,a,c,d){if(x(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return C(a)&&"[object File]"!==va.call(a)&&"[object Blob]"!==va.call(a)&&"[object FormData]"!==va.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja($b),put:ja($b),patch:ja($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return A(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return A(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,h,g,l,k){function n(a){function d(a){var b=P({},a);b.data=a.data?dd(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,
d={};m(a,function(a,e){x(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!da.isObject(a))throw I("$http")("badreq",a);var f=P({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=P({},a.headers),f,g,h,c=P({},c.common,c[F(a.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ja(a))}(a);f.method=sb(f.method);f.paramSerializer=G(f.paramSerializer)?k.get(f.paramSerializer):
f.paramSerializer;var g=[function(a){var c=a.headers,e=dd(a.data,cd(c),w,a.transformRequest);v(e)&&m(c,function(a,b){"content-type"===F(b)&&delete c[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return p(a,e).then(d,d)},w],h=l.when(f);for(m(E,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Sa(a,
"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=ed("success"),h.error=ed("error"));return h}function p(c,d){function h(b,c,d,e){function f(){k(c,b,d,e)}L&&(200<=b&&300>b?L.put(ba,[b,c,bd(d),e]):L.remove(ba));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function k(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:cd(d),config:c,statusText:e})}
function p(a){k(a.data,a.status,ja(a.headers()),a.statusText)}function E(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var O=l.defer(),H=O.promise,L,m,S=c.headers,ba=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);H.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(L=C(c.cache)?c.cache:C(b.cache)?b.cache:t);L&&(m=L.get(ba),A(m)?m&&x(m.then)?m.then(p,p):J(m)?k(m[1],m[0],ja(m[2]),m[3]):k(m,200,{},"OK"):L.put(ba,H));v(m)&&((m=
fd(c.url)?f()[c.xsrfCookieName||b.xsrfCookieName]:w)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,ba,d,h,S,c.timeout,c.withCredentials,c.responseType));return H}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var t=h("$http");b.paramSerializer=G(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var E=[];m(d,function(a){E.unshift(G(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(P({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function gf(){this.$get=function(){return function(){return new Q.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(b,a,c,d){return Sf(b,d,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),
n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var h=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,h="error"===a.type?404:200);c&&c(h,t)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,g,l,k,n,p,r,t){function E(){q&&q();z&&z.abort()}function K(a,d,e,f,g){A(s)&&c.cancel(s);q=z=null;a(d,
e,f,g);b.$$completeOutstandingRequest(y)}b.$$incOutstandingRequestCount();g=g||b.url();if("jsonp"==F(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var q=f(g.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){K(k,a,d[u].data,"",b);d[u]=y})}else{var z=a(e,g);z.open(e,g,!0);m(n,function(a,b){A(a)&&z.setRequestHeader(b,a)});z.onload=function(){var a=z.statusText||"",b="response"in z?z.response:z.responseText,c=1223===z.status?204:z.status;0===c&&(c=
b?200:"file"==Aa(g).protocol?404:0);K(k,c,b,z.getAllResponseHeaders(),a)};e=function(){K(k,-1,null,null,"")};z.onerror=e;z.onabort=e;r&&(z.withCredentials=!0);if(t)try{z.responseType=t}catch(N){if("json"!==t)throw N;}z.send(v(l)?null:l)}if(0<p)var s=c(E,p);else p&&x(p.then)&&p.then(E)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+
a}function h(c){return c.replace(n,b).replace(p,a)}function g(f,g,n,p){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(p&&!A(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}c=a}return c}catch(g){d(La.interr(f,g))}}p=!!p;for(var q,m,N=0,s=[],O=[],H=f.length,L=[],W=[];N<H;)if(-1!=(q=f.indexOf(b,N))&&-1!=(m=f.indexOf(a,q+l)))N!==q&&L.push(h(f.substring(N,q))),N=f.substring(q+l,m),s.push(N),O.push(c(N,u)),N=m+k,W.push(L.length),
L.push("");else{N!==H&&L.push(h(f.substring(N)));break}n&&1<L.length&&La.throwNoconcat(f);if(!g||s.length){var S=function(a){for(var b=0,c=s.length;b<c;b++){if(p&&v(a[b]))return;L[W[b]]=a[b]}return L.join("")};return P(function(a){var b=0,c=s.length,e=Array(c);try{for(;b<c;b++)e[b]=O[b](a);return S(e)}catch(g){d(La.interr(f,g))}},{exp:f,expressions:s,$$watchDelegate:function(a,b){var c;return a.$watchGroup(O,function(d,e){var f=S(d);x(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,
n=new RegExp(b.replace(/./g,f),"g"),p=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,g,l,k){var n=4<arguments.length,p=n?ua.call(arguments,4):[],r=a.setInterval,t=a.clearInterval,E=0,K=A(k)&&!k,u=(K?d:c).defer(),q=u.promise;l=A(l)?l:0;q.then(null,null,n?function(){e.apply(null,p)}:e);q.$$intervalId=r(function(){u.notify(E++);0<l&&E>=l&&(u.resolve(E),
t(q.$$intervalId),delete f[q.$$intervalId]);K||b.$apply()},g);f[q.$$intervalId]=u;return q}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);return b.join("/")}function gd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function hd(b,a){var c="/"!==b.charAt(0);
c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function sa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";gd(b,this);this.$$parse=function(b){var c=sa(a,
b);if(!G(c))throw Db("ipthprfx",b,a);hd(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;A(f=sa(b,d))?(h=f,h=A(f=sa(c,f))?a+(sa("/",f)||f):b+h):A(f=sa(a,d))?h=a+f:a==d+"/"&&(h=a);h&&this.$$parse(h);return!!h}}function cc(b,a,c){gd(b,this);
this.$$parse=function(d){var e=sa(b,d)||sa(a,d),f;v(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",v(e)&&(b=d,this.replace())):(f=sa(c,e),v(f)&&(f=e));hd(f,this);d=this.$$path;var e=b,h=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));h.exec(f)||(d=(f=h.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=
function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function id(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;b==Ja(d)?f=d:(h=sa(a,d))?f=b+c+h:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function jd(b,
a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function hf(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return A(a)?(b=a,this):b};this.html5Mode=function(b){return bb(b)?(a.enabled=b,this):C(b)?(bb(b.enabled)&&(a.enabled=b.enabled),bb(b.requireBase)&&(a.requireBase=b.requireBase),bb(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,
d,e,f,h){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?bc:id}else r=Ja(p),n=cc;var t=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,t,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();
var E=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");C(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Aa(g.animVal).href);E.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),h.angular["ff-684208-preventDefault"]=
!0))}});Cb(k.absUrl())!=Cb(p)&&d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){v(sa(t,a))?h.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(K=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),h=k.$$replace,r=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(K||r)K=!1,
c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(r&&g(b,h,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function jf(){var b=!0,a=this;this.debugEnabled=function(a){return A(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=
a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Xa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
b||"__proto__"===b)throw Z("isecfld",a);return b}function kd(b,a){b+="";if(!G(b))throw Z("iseccst",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw Z("isecfn",a);if(b.window===b)throw Z("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Z("isecdom",a);if(b===Object)throw Z("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw Z("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw Z("isecff",a);}}function md(b,a){if(b&&(b===(0).constructor||b===(!1).constructor||
b==="".constructor||b==={}.constructor||b===[].constructor||b===Function.constructor))throw Z("isecaf",a);}function Xf(b,a){return"undefined"!==typeof b?b:a}function nd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case s.Program:c=!0;m(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case s.Literal:b.constant=!0;b.toWatch=[];break;case s.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=
b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case s.Identifier:b.constant=
!1;b.toWatch=[b];break;case s.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case s.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;
b.toWatch=[b];break;case s.ArrayExpression:c=!0;d=[];m(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case s.ObjectExpression:c=!0;d=[];m(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case s.ThisExpression:b.constant=!1,b.toWatch=[]}}function od(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:w}}
function pd(b){return b.type===s.Identifier||b.type===s.MemberExpression}function qd(b){if(1===b.body.length&&pd(b.body[0].expression))return{type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===s.Literal||b.body[0].expression.type===s.ArrayExpression||b.body[0].expression.type===s.ObjectExpression)}function sd(b,a){this.astBuilder=b;this.$filter=a}function td(b,
a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return x(b.valueOf)?b.valueOf():Yf.call(b)}function kf(){var b=fa(),a=fa();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var k=d,g=g[0];return a.$watch(function(a){var b=g(a);d(b,k)||(h=e(a,w,w,[b]),k=b&&dc(b));return h},b,c,f)}for(var l=[],n=[],p=0,
m=g.length;p<m;p++)l[p]=d,n[p]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!d(k,l[c])))n[c]=k,l[c]=k&&dc(k)}b&&(h=e(a,w,w,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;x(b)&&b.apply(this,arguments);A(a)&&d.$$postDigest(function(){A(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){A(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;x(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function g(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){x(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return A(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=
a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},p={csp:k,expensiveChecks:!0};return function(d,k,E){var m,u,q;switch(typeof d){case "string":q=d=d.trim();var s=E?a:b;m=s[q];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),E=E?p:n,m=new ec(E),m=(new fc(m,c,E)).parse(d),m.constant?m.$$watchDelegate=g:u?m.$$watchDelegate=m.literal?h:f:m.inputs&&(m.$$watchDelegate=e),s[q]=m);return l(m,k);case "function":return l(d,k);default:return y}}}]}function mf(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return ud(function(a){b.$evalAsync(a)},a)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(b,a){return ud(function(a){b.defer(a)},a)}]}function ud(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=w;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{x(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function h(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var g=I("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(v(a)&&v(b)&&v(c))return this;var d=new h;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,
a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(h.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(C(b)||x(b))d=b&&b.then;x(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],
this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(x(b)?b(c):c)}catch(h){a(h)}}})}});
var l=function(a,b){var c=new h;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{x(c)&&(d=c())}catch(e){return l(e,!1)}return d&&x(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new h;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!x(a))throw g("norslvr",a);if(!(this instanceof t))return new t(a);var b=new h;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new h};
p.reject=function(a){var b=new h;b.reject(a);return b.promise};p.when=n;p.resolve=n;p.all=function(a){var b=new h,c=0,d=J(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function wf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,
e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function lf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=I("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=
["$injector","$exceptionHandler","$parse","$browser",function(f,h,g,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(q.$$phase)throw c("inprog",q.$$phase);q.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=
a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function E(){}function s(){for(;w.length;)try{w.shift()()}catch(a){h(a)}e=null}function u(){null===e&&(e=l.defer(function(){q.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=
d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var h=this,k=h.$$watchers,l={fn:b,last:E,get:f,exp:e||a,eq:!!c};d=null;x(b)||(l.fn=y);k||(k=h.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=cb(k,l)&&r(h,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;
if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(C(e))if(Da(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],
g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},t=0,l++);a=0;for(b in e)ta.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),p=[],r={},q=!0,t=0;return this.$watch(n,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(Da(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h=
{},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var b,f,g,k,n,r,t=a,m,u=[],D,v;p("$digest");l.$$checkUrlChange();this===q&&null!==e&&(l.defer.cancel(e),s());d=null;do{r=!1;for(m=this;z.length;){try{v=z.shift(),v.scope.$eval(v.expression,v.locals)}catch(w){h(w)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(g=b.last)&&!(b.eq?ka(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))r=!0,d=b,b.last=b.eq?ha(f,null):f,b.fn(f,g===E?f:g,m),5>
t&&(D=4-t,u[D]||(u[D]=[]),u[D].push({msg:x(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:g}));else if(b===d){r=!1;break a}}catch(y){h(y)}if(!(k=m.$$watchersCount&&m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||z.length)&&!t--)throw q.$$phase=null,c("infdig",a,u);}while(r||z.length);for(q.$$phase=null;N.length;)try{N.shift()()}catch(A){h(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this===q&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=y;this.$on=
this.$watch=this.$watchGroup=function(){return y};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){q.$$phase||z.length||l.defer(function(){z.length&&q.$digest()});z.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){N.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{q.$$phase=null}}catch(b){h(b)}finally{try{q.$digest()}catch(c){throw h(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,g={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},
k=db([g],arguments,1),l,n;do{d=e.$$listeners[a]||c;g.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(p){h(p)}else d.splice(l,1),l--,n--;if(f)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=db([e],arguments,1),g,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,f)}catch(l){h(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var q=new n,z=q.$$asyncQueue=[],N=q.$$postDigestQueue=[],w=q.$$applyAsyncQueue=[];return q}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return A(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=vd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function wd(b){var a=[];A(b)&&m(b,function(b){a.push(Zf(b))});
return a}function pf(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=wd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?fd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var h=e(),g={};g[oa.HTML]=e(h);g[oa.CSS]=e(h);g[oa.URL]=e(h);g[oa.JS]=e(h);g[oa.RESOURCE_URL]=e(g[oa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||v(b)||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||v(e)||""===e)return e;var h=g.hasOwnProperty(c)?g[c]:null;if(h&&e instanceof
h)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var h=Aa(e.toString()),p,r,t=!1;p=0;for(r=b.length;p<r;p++)if(d(b[p],h)){t=!0;break}if(t)for(p=0,r=a.length;p<r;p++)if(d(a[p],h)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function of(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Wa)throw Ca("iequirks");var d=ja(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=$a);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,h=d.trustAs;m(oa,function(a,b){var c=F(b);d[gb("parse_as_"+c)]=function(b){return e(a,b)};d[gb("get_trusted_"+c)]=function(b){return f(a,b)};d[gb("trust_as_"+
c)]=function(b){return h(a,b)}});return d}]}function qf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(F((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h,g=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=g.exec(p)){h=k[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!d||k&&n||(k=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Wa)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:h,transitions:k,animations:n,android:d}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,h){e.totalPendingRequests++;G(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var g=a.defaults&&a.defaults.transformResponse;
J(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(f,{cache:b,transformResponse:g})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,a.data);return a.data},function(a){if(!h)throw ga("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var h=[];m(a,function(a){var d=
da.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(d)&&h.push(a):-1!=d.indexOf(b)&&h.push(a)})});return h},findModels:function(a,b,c){for(var h=["ng-","data-ng-","ng\\:"],g=0;g<h.length;++g){var l=a.querySelectorAll("["+h[g]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function uf(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){x(f)||(k=l,l=f,f=y);var n=ua.call(arguments,3),p=A(k)&&!k,r=(p?d:c).defer(),t=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete h[t.$$timeoutId]}p||b.$apply()},l);t.$$timeoutId=m;h[m]=r;return t}var h={};f.cancel=function(b){return b&&b.$$timeoutId in h?(h[b.$$timeoutId].reject("canceled"),delete h[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}
function Aa(b){Wa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function fd(b){b=G(b)?Aa(b):b;return b.protocol===xd.protocol&&b.host===xd.host}function vf(){this.$get=qa(Q)}function yd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}
var c=b[0]||{},d={},e="";return function(){var b,h,g,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},g=0;g<b.length;g++)h=b[g],l=h.indexOf("="),0<l&&(k=a(h.substring(0,l)),v(d[k])&&(d[k]=a(h.substring(l+1))));return d}}function zf(){this.$get=yd}function Kc(b){function a(c,d){if(C(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",zd);a("date",Ad);
a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Bd);a("orderBy",Cd);a("uppercase",dg)}function $f(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw I("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=C(b)&&"$"in b;!0===a?a=ka:x(a)||(a=function(a,b){if(v(a))return!1;if(null===
a||null===b)return a===b;if(C(b)||C(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!C(e)?Ma(e,b.$,a,!1):Ma(e,b,a,c)}}function Ma(b,a,c,d,e){var f=gc(b),h=gc(a);if("string"===h&&"!"===a.charAt(0))return!Ma(b,a.substring(1),c,d);if(J(b))return b.some(function(b){return Ma(b,a,c,d)});switch(f){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&Ma(b[g],a,c,!0))return!0;return e?!1:Ma(b,a,c,!1)}if("object"===h){for(g in a)if(e=a[g],!x(e)&&!v(e)&&
(f="$"===g,!Ma(f?b:b[g],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===b?"null":typeof b}function zd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Dd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Bd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Dd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dd(b,
a,c,d,e){if(C(b))return"";var f=0>b;b=Math.abs(b);var h=Infinity===b;if(!h&&!isFinite(b))return"";var g=b+"",l="",k=!1,n=[];h&&(l="\u221e");if(!h&&-1!==g.indexOf("e")){var p=g.match(/([\d\.]+)e(-?)(\d+)/);p&&"-"==p[2]&&p[3]>e+1?b=0:(l=g,k=!0)}if(h||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l),l=l.replace(hc,d));else{h=(g.split(hc)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var h=(""+b).split(hc),g=h[0],h=h[1]||"",p=0,
r=a.lgSize,t=a.gSize;if(g.length>=r+t)for(p=g.length-r,k=0;k<p;k++)0===(p-k)%t&&0!==k&&(l+=c),l+=g.charAt(k);for(k=p;k<g.length;k++)0===(g.length-k)%r&&0!==k&&(l+=c),l+=g.charAt(k);for(;h.length<e;)h+="0";e&&"0"!==e&&(l+=d+h.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function aa(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<
c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=sb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function Ad(b){function a(a){var b;if(b=
a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),h=Y(b[9]+b[11]));g.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;h=Y(b[5]||0)-h;g=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var h="",g=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=
fg.test(c)?Y(c):a(c));V(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(g=db(g,k,1),e=g.pop()):(g.push(e),e=null);var n=c.getTimezoneOffset();f&&(n=wc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(g,function(a){l=hg[a];h+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return h}}function ag(){return function(b,a){v(a)&&(a=2);return eb(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;
V(b)&&(b=b.toString());if(!J(b)&&!G(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Cd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,g=$a;if(x(a))g=a;else if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(g=b(a),g.constant))var l=g(),g=function(a){return a[l]}}return{get:g,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}return function(b,e,f){if(!Da(b))return b;J(e)||(e=[e]);0===e.length&&(e=["+"]);var h=a(e,f);h.push({get:function(){return{}},descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:h.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(qc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});
b.sort(function(a,b){for(var c=0,d=0,e=h.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],t=0;c.type===f.type?c.value!==f.value&&(t=c.value<f.value?-1:1):t=c.type<f.type?-1:1;if(c=t*h[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Na(b){x(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,h=[];f.$error={};f.$$success={};f.$pending=w;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=
!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){m(h,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(h,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});
m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});cb(h,a);a.$$parentForm=Ib};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(cb(d,c),0===d.length&&delete a[b])},$animate:d});f.$setDirty=function(){d.removeClass(b,Ya);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){d.setClass(b,Ya,Jb+" ng-submitted");f.$dirty=
!1;f.$pristine=!0;f.$submitted=!1;m(h,function(a){a.$setPristine()})};f.$setUntouched=function(){m(h,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var h=F(a[0].type);if(!e.android){var g=!1;a.on("compositionstart",function(a){g=!0});a.on("compositionend",function(){g=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),
k=null);if(!g){var e=a.val();b=b&&b.type;"password"===h||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?
"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(G(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,h,g,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return A(a)&&!ea(a)?c(a)||w:a}Id(e,f,h,g);jb(e,f,h,g,l,k);var t=g&&g.$options&&g.$options.timezone,m;g.$$parserName=b;g.$parsers.push(function(b){return g.$isEmpty(b)?null:a.test(b)?(b=c(b,m),t&&(b=Ob(b,t)),b):w});g.$formatters.push(function(a){if(a&&!ea(a))throw lb("datefmt",a);if(p(a))return(m=a)&&t&&(m=Ob(m,t,!0)),
n("date")(a,d,t);m=null;return""});if(A(h.min)||h.ngMin){var s;g.$validators.min=function(a){return!p(a)||v(s)||c(a)>=s};h.$observe("min",function(a){s=r(a);g.$validate()})}if(A(h.max)||h.ngMax){var u;g.$validators.max=function(a){return!p(a)||v(u)||c(a)<=u};h.$observe("max",function(a){u=r(a);g.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=C(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?w:b})}function Jd(b,a,c,d,e){if(A(d)){b=
b(d);if(!b.constant)throw lb("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(m(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):C(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,h,g){function l(a,b){var c=h.data("$classCounts")||fa(),
d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});h.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=l(k,1);g.$addClass(m)}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(h,m);k&&k.length&&c.removeClass(h,k)}}n=ja(b)}var n;f.$watch(g[b],k,!0);g.$observe("class",function(a){k(f.$eval(g[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var h=c&1;if(h!==(d&1)){var k=
e(f.$eval(g[b]));h===a?(h=l(k,1),g.$addClass(h)):(h=l(k,-1),g.$removeClass(h))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},h=b.set,g=b.unset,l=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){v(e)?(d.$pending||(d.$pending={}),h(d.$pending,b,f)):(d.$pending&&g(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=w));bb(e)?
e?(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),g(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=w,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?w:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);d.$$parentForm.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,F=function(b){return G(b)?b.toLowerCase():b},ta=Object.prototype.hasOwnProperty,
sb=function(b){return G(b)?b.toUpperCase():b},Wa,B,ra,ua=[].slice,Nf=[].splice,kg=[].push,va=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=I("ng"),da=Q.angular||(Q.angular={}),Rb,nb=0;Wa=X.documentMode;y.$inject=[];$a.$inject=[];var J=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return G(b)?b.trim():b},vd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!A(Fa.rules)){var b=
X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},pb=function(){if(A(pb.name_))return pb.name_;var b,a,c=Qa.length,d,e;for(a=0;a<c;++a)if(d=Qa[a],b=X.querySelector("["+d.replace(":","\\:")+"jq]")){e=
b.getAttribute(d+"jq");break}return pb.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Bc=!1,Qb,pa=1,Pa=3,fe={full:"1.4.7",major:1,minor:4,dot:7,codeName:"dark-luminescence"};R.expando="ng339";var hb=R.cache={},Ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=I("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ma={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option;ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead;ma.th=ma.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(Q).on("load",a))},
toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Bb={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[F(b)]=b});var Sc={};m("input select option textarea button form details".split(" "),function(b){Sc[b]=!0});var $c={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
m({data:Vb,removeData:vb,hasData:function(b){for(var a in hb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});m({data:Vb,inheritedData:Ab,scope:function(b){return B.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=gb(a);if(A(c))b.style[a]=c;else return b.style[a]},
attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=F(a),Bb[d])if(A(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:w;else if(A(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?w:b},prop:function(b,a,c){if(A(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),
val:function(b,a){if(v(a)){if(b.multiple&&"select"===wa(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;ub(b,!0);b.innerHTML=a},empty:Qc},function(b,a){R.prototype[a]=function(a,d){var e,f,h=this.length;if(b!==Qc&&v(2==b.length&&b!==xb&&b!==Pc?a:d)){if(C(a)){for(e=0;e<h;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;h=v(e)?Math.min(h,1):h;
for(f=0;f<h;f++){var g=b(this[f],a,d);e=e?e+g:g}return e}for(e=0;e<h;e++)b(this[e],a,d);return this}});m({removeData:vb,on:function a(c,d,e,f){if(A(f))throw Tb("onargs");if(Lc(c)){var h=wb(c,!0);f=h.events;var g=h.handle;g||(g=h.handle=Hf(c,f));for(var h=0<=d.indexOf(" ")?d.split(" "):[d],l=h.length;l--;){d=h[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||g(a,d)}):"$destroy"!==d&&c.addEventListener(d,g,!1),
k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ub(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,h=c.length;f<h;f++){var g=c[f];e.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=
d;v(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,h=c.type||c,g=wb(a);if(g=(g=g&&g.events)&&g[h])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:y,type:h,target:a},c.type&&(e=P(e,c)),c=ja(g),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var h,g=0,l=this.length;g<l;g++)v(h)?(h=a(this[g],c,e,f),A(h)&&(h=B(h))):Nc(h,a(this[g],c,e,f));return A(h)?h:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,
c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var yf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=I("$injector");fb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw G(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,
"");c=c.match(Uc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else J(a)?(c=a.length-1,Sa(a[c],"fn"),e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=I("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=y;d.chain=y;d.prototype={end:y,cancel:y,resume:y,pause:y,complete:y,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",
function(d,e){function f(a,c,d){var e=!1;c&&(c=G(c)?c.split(" "):J(c)?c:[],m(c,function(c){c&&(e=!0,a[c]=d)}));return e}function h(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",h="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:h+=(h.length?" ":"")+c)});m(c,function(a){f&&zb(a,f);h&&yb(a,h)});a.remove(c)}});c.length=0}return{enabled:y,on:y,off:y,pin:y,push:function(g,l,k,n){n&&n();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(l=k.addClass,
n=k.removeClass,k=a.get(g)||{},l=f(k,l,!0),n=f(k,n,!1),l||n)a.put(g,k),c.push(g),1===c.length&&e.$$postDigest(h);return new d}}}]},Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,h,g,l){h=h&&B(h);g=g&&B(g);h=h||g.parent();c(f,h,g);return a.push(f,"enter",Ia(l))},move:function(f,h,g,l){h=h&&B(h);g=g&&B(g);
h=h||g.parent();c(f,h,g);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,g){g=Ia(g);g.addClass=ib(g.addclass,e);return a.push(c,"addClass",g)},removeClass:function(c,e,g){g=Ia(g);g.removeClass=ib(g.removeClass,e);return a.push(c,"removeClass",g)},setClass:function(c,e,g,l){l=Ia(l);l.addClass=ib(l.addClass,e);l.removeClass=ib(l.removeClass,g);return a.push(c,"setClass",l)},animate:function(c,e,g,l,k){k=Ia(k);k.from=k.from?
P(k.from,e):e;k.to=k.to?P(k.to,g):g;k.tempClasses=ib(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)}};return function(c,f){function h(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);g||l.done();g=!0});return l}f.cleanupStyles&&(f.from=f.to=null);f.from&&(c.css(f.from),f.from=null);var g,l=new d;return{start:h,end:h}}}]},ga=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Of=I("$controller"),
Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?!c.nodeType&&c instanceof B&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},ad="application/json",$b={"Content-Type":ad+";charset=utf-8"},Qf=/^\[|^\{(?!\{)/,Rf={"[":/]$/,"{":/}$/},Pf=/^\)\]\}',?\n/,og=I("$http"),ed=function(a){return function(){throw og("legacy",a);}},La=da.$interpolateMinErr=I("$interpolate");La.throwNoconcat=function(a){throw La("noconcat",a);};La.interr=function(a,c){return La("interr",
a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=I("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:jd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||V(a))a=a.toString(),this.$$search=yc(a);else if(C(a))a=ha(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:jd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([id,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=
function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");this.$$state=v(c)?null:c;return this}});var Z=I("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=fa();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=A(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Z("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=
this.text.charAt(this.index),e=e+h;if(f)"u"===h?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[h]||h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var s=function(a,c){this.lexer=a;this.options=c};s.Program="Program";s.ExpressionStatement=
"ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";
s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:c.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=ha(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},
this.consume(")")):"["===c.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());
while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
c={type:s.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,c){throw Z("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw Z("ueoe",this.text);var c=this.expect(a);
c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw Z("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var h=a.text;if(h===c||h===d||h===e||h===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},
"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:w},"this":{type:s.ThisExpression}}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",h;this.stage="assign";if(h=qd(e))this.state.computing="assign",f=this.nextId(),this.recurse(h,f),this.return_(f),f="fn.assign="+this.generateFunction("assign",
"s,v,l");h=od(e.body);d.stage="inputs";m(h,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",f))(this.$filter,Xa,Ba,ld,kd,md,Xf,nd,a);this.state=this.stage=w;f.literal=rd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,h){var g,l,k=this,n,p;e=e||y;if(!h&&A(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,
function(c,d){k.recurse(c.expression,w,w,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case s.Literal:p=this.escape(a.value);this.assign(c,p);e(p);break;case s.UnaryExpression:this.recurse(a.argument,w,w,function(a){l=a});p=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,p);e(p);break;case s.BinaryExpression:this.recurse(a.left,w,w,function(a){g=a});this.recurse(a.right,w,w,function(a){l=a});p="+"===a.operator?this.plus(g,l):"-"===a.operator?this.ifDefined(g,
0)+a.operator+this.ifDefined(l,0):"("+g+")"+a.operator+"("+l+")";this.assign(c,p);e(p);break;case s.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",
a.name)+"?l:s"),d.computed=!1,d.name=a.name);Xa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||
this.nextId();c=c||this.nextId();k.recurse(a.object,g,w,function(){k.if_(k.notNull(g),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.getStringValue(l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(g,l)),k.lazyAssign(k.computedMember(g,l),"{}")),p=k.ensureSafeObject(k.computedMember(g,l)),k.assign(c,p),d&&(d.computed=!0,d.name=l);else{Xa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),
"{}"));p=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))p=k.ensureSafeObject(p);k.assign(c,p);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case s.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),p=l+"("+n.join(",")+")",k.assign(c,p),e(c)):(l=k.nextId(),g={},n=[],k.recurse(a.callee,l,g,function(){k.if_(k.notNull(l),
function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),p=k.member(g.context,g.name,g.computed)+"("+n.join(",")+")"):p=l+"("+n.join(",")+")";p=k.ensureSafeObject(p);k.assign(c,p)},function(){k.assign(c,"undefined")});e(c)}));break;case s.AssignmentExpression:l=this.nextId();g={};if(!pd(a.left))throw Z("lval");this.recurse(a.left,w,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);p=k.member(g.context,g.name,g.computed)+a.operator+l;k.assign(c,p);e(c||p)})},1);break;case s.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(a)})});p="["+n.join(",")+"]";this.assign(c,p);e(p);break;case s.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),w,function(c){n.push(k.escape(a.key.type===
s.Identifier?a.key.name:""+a.key.value)+":"+c)})});p="{"+n.join(",")+"}";this.assign(c,p);e(p);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,
c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+
a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,c,d,e,f,h){var g=this;return function(){g.recurse(a,c,d,e,f,h)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Z("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
td.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,h;if(f=qd(e))h=this.recurse(f);f=od(e.body);var g;f&&(g=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;g.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};h&&(f.assign=function(a,c,d){return h(a,d,c)});g&&(f.inputs=
g);f.literal=rd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,h=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case s.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case s.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return Xa(a.name,h.expression),h.identifier(a.name,h.expensiveChecks||Fb(a.name),c,d,h.expression);case s.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Xa(a.property.name,h.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,h.expression):this.nonComputedMember(e,f,
h.expensiveChecks,c,d,h.expression);case s.CallExpression:return g=[],m(a.arguments,function(a){g.push(h.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,h){for(var r=[],m=0;m<g.length;++m)r.push(g[m](a,d,e,h));a=f.apply(w,r,h);return c?{context:w,name:w,value:a}:a}:function(a,d,e,p){var r=f(a,d,e,p),m;if(null!=r.value){Ba(r.context,h.expression);ld(r.value,h.expression);m=[];for(var s=0;s<g.length;++s)m.push(Ba(g[s](a,d,e,p),
h.expression));m=Ba(r.value.apply(r.context,m),h.expression)}return c?{value:m}:m};case s.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,g,p){var r=e(a,d,g,p);a=f(a,d,g,p);Ba(r.value,h.expression);md(r.context);r.context[r.name]=a;return c?{value:a}:a};case s.ArrayExpression:return g=[],m(a.elements,function(a){g.push(h.recurse(a))}),function(a,d,e,f){for(var h=[],m=0;m<g.length;++m)h.push(g[m](a,d,e,f));return c?{value:h}:h};case s.ObjectExpression:return g=
[],m(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:h.recurse(a.value)})}),function(a,d,e,f){for(var h={},m=0;m<g.length;++m)h[g[m].key]=g[m].value(a,d,e,f);return c?{value:h}:h};case s.ThisExpression:return function(a){return c?{value:a}:a};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,h){d=a(d,e,f,h);d=A(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,
f,h){d=a(d,e,f,h);d=A(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,h){d=!a(d,e,f,h);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=nd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=(A(l)?l:0)-(A(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)*c(e,f,h,g);return d?{value:e}:e}},"binary/":function(a,c,
d){return function(e,f,h,g){e=a(e,f,h,g)/c(e,f,h,g);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)%c(e,f,h,g);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)===c(e,f,h,g);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)!==c(e,f,h,g);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)==c(e,f,h,g);return d?{value:e}:e}},"binary!=":function(a,c,
d){return function(e,f,h,g){e=a(e,f,h,g)!=c(e,f,h,g);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<c(e,f,h,g);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>c(e,f,h,g);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<=c(e,f,h,g);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>=c(e,f,h,g);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,
f,h,g){e=a(e,f,h,g)&&c(e,f,h,g);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)||c(e,f,h,g);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,h,g,l){f=a(f,h,g,l)?c(f,h,g,l):d(f,h,g,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:w,name:w,value:a}:a}},identifier:function(a,c,d,e,f){return function(h,g,l,k){h=g&&a in g?g:h;e&&1!==e&&h&&!h[a]&&(h[a]={});g=h?h[a]:w;c&&Ba(g,f);return d?{context:h,name:a,value:g}:
g}},computedMember:function(a,c,d,e,f){return function(h,g,l,k){var n=a(h,g,l,k),p,m;null!=n&&(p=c(h,g,l,k),p=kd(p),Xa(p,f),e&&1!==e&&n&&!n[p]&&(n[p]={}),m=n[p],Ba(m,f));return d?{context:n,name:p,value:m}:m}},nonComputedMember:function(a,c,d,e,f,h){return function(g,l,k,n){g=a(g,l,k,n);f&&1!==f&&g&&!g[c]&&(g[c]={});l=null!=g?g[c]:w;(d||Fb(c))&&Ba(l,h);return e?{context:g,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,h){return h?h[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=
a;this.$filter=c;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new td(this.ast,c):new sd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};fa();fa();var Yf=Object.prototype.valueOf,Ca=I("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=I("$compile"),$=X.createElement("a"),xd=Aa(Q.location.href);yd.$inject=["$document"];Kc.$inject=["$provide"];zd.$inject=["$locale"];Bd.$inject=
["$locale"];var hc=".",hg={yyyy:aa("FullYear",4),yy:aa("FullYear",2,0,!0),y:aa("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=
a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;Ad.$inject=["$locale"];var cg=qa(F),dg=qa(sb);Cd.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===
va.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),tb={};m(Bb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=ya("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});tb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m($c,function(a,c){tb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=ya("ng-"+a);tb[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===va.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(c){c?(f.$set(g,c),Wa&&h&&e.prop(h,f[g])):"href"===a&&f.$set(g,null)})}}}});var Ib={$addControl:y,$$renameControl:function(a,c){a.$name=c},$removeControl:y,$setValidity:y,
$setDirty:y,$setPristine:y,$setSubmitted:y};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||y}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Gd,compile:function(d,h){d.addClass(Ya).addClass(mb);var g=h.name?"name":a&&h.ngForm?"ngForm":!1;return{pre:function(a,d,f,h){var m=h[0];if(!("action"in f)){var t=function(c){a.$apply(function(){m.$commitViewValue();
m.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",t,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",t,!1)},0,!1)})}(h[1]||m.$$parentForm).$addControl(m);var s=g?e(m.$name):y;g&&(s(a,m),f.$observe(g,function(c){m.$name!==c&&(s(a,w),m.$$parentForm.$$renameControl(m,c),s=e(m.$name),s(a,m))}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);s(a,w);P(m,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e)},date:kb("date",
Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ea(a))return a;if(G(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],h=d=0,g=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),h=c.getMinutes(),g=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,h,g,l)}}return NaN},"yyyy-Www"),
month:kb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){Id(a,c,d,e);jb(a,c,d,e,f,h);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):w});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw lb("numfmt",a);a=a.toString()}return a});if(A(d.min)||d.ngMin){var g;e.$validators.min=function(a){return e.$isEmpty(a)||v(g)||a>=g};d.$observe("min",function(a){A(a)&&!V(a)&&(a=parseFloat(a,10));g=V(a)&&!isNaN(a)?a:w;e.$validate()})}if(A(d.max)||
d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){A(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:w;e.$validate()})}},url:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,
d,e){v(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,h,g,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,
k)});e.$parsers.push(function(a){return a?k:n})},hidden:y,button:y,submit:y,reset:y,file:y},Ec=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,h,g,l){l[0]&&(Td[F(g.type)]||Td.text)(f,h,g,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=v(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,h){d=a(f.attr(h.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];h.$observe("ngBindTemplate",function(a){f.textContent=v(a)?"":a})}}}}],oe=["$sce","$parse",
"$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var h=c(f.ngBindHtml),g=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(g,function(){e.html(a.getTrustedHtml(h(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=kc("",!0),se=kc("Odd",0),re=kc("Even",1),te=Na({compile:function(a,c){c.$set("ngCloak",
w);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Jc={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,h){var g=d(h[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){g(c,{$event:d})};
wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,l,k;c.$watch(e.ngIf,function(c){c?l||h(function(c,f){l=f;c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),g&&(k=rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll",
"$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(e,f){var h=f.ngInclude||f.src,g=f.onload||"",l=f.autoscroll;return function(e,f,m,r,t){var s=0,v,u,q,z=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);q&&(d.leave(q).then(function(){u=null}),u=q,q=null)};e.$watch(h,function(h){var m=function(){!A(l)||l&&!e.$eval(l)||c()},p=++s;h?(a(h,!0).then(function(a){if(p===s){var c=e.$new();r.template=a;a=t(c,function(a){z();
d.enter(a,null,f).then(m)});v=c;q=a;v.$emit("$includeContentLoaded",h);e.$eval(g)}},function(){p===s&&(z(),e.$emit("$includeContentError",h))}),e.$emit("$includeContentRequested",h)):(z(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Na({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,g=h?T(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&m(a.split(g),function(a){a&&c.push(h?T(a):a)});return c}});e.$formatters.push(function(a){return J(a)?a.join(f):w});e.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",Kd="ng-invalid",Ya="ng-pristine",Jb="ng-dirty",Md=
"ng-pending",lb=I("ngModel"),xg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,h,g,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=w;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
w;this.$name=n(d.name||"",!1)(a);this.$$parentForm=Ib;var p=f(d.ngModel),r=p.assign,t=p,s=r,K=null,u,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);x(d)&&(d=c(a));return d};s=function(a,c){x(p(a))?g(a,{$$$p:q.$modelValue}):r(a,q.$modelValue)}}else if(!p.assign)throw lb("nonassign",d.ngModel,xa(e));};this.$render=y;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var z=0;Hd({ctrl:this,$element:e,
set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},$animate:h});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;h.removeClass(e,Jb);h.addClass(e,Ya)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;h.removeClass(e,Ya);h.addClass(e,Jb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;h.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;h.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=
function(){g.cancel(K);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!V(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,c=q.$valid,d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(f){e||c===f||(q.$modelValue=f?a:w,q.$modelValue!==d&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(q.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?
!0:(m(q.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(q.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!x(k.then))throw lb("$asyncValidators",k);g(h,w);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},y):h(!0)}function g(a,c){l===z&&q.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=q.$$parserName||"parse";if(v(u))g(a,null);else return u||(m(q.$validators,function(a,c){g(c,null)}),m(q.$asyncValidators,
function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(K);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=q.$$lastCommittedViewValue;if(u=v(c)?w:!0)for(var d=0;d<q.$parsers.length;d++)if(c=q.$parsers[d](c),v(c)){u=!1;break}V(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=t(a));
var e=q.$modelValue,f=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=c;f&&(q.$modelValue=c,q.$modelValue!==e&&q.$$writeModelToScope());q.$$runValidators(c,q.$$lastCommittedViewValue,function(a){f||(q.$modelValue=a?c:w,q.$modelValue!==e&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);m(q.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(c)};
this.$$debounceViewValueCommit=function(c){var d=0,e=q.$options;e&&A(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));g.cancel(K);d?K=g(function(){q.$commitViewValue()},d):l.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==q.$modelValue&&(q.$modelValue===q.$modelValue||c===c)){q.$modelValue=q.$$rawModelValue=c;u=w;for(var d=q.$formatters,e=d.length,f=c;e--;)f=d[e](f);q.$viewValue!==f&&(q.$viewValue=
q.$$lastCommittedViewValue=f,q.$render(),q.$$runValidators(c,f,y))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Ya).addClass("ng-untouched").addClass(mb);return{pre:function(a,c,f,h){var g=h[0];c=h[1]||g.$$parentForm;g.$$setOptions(h[2]&&h[2].$options);c.$addControl(g);f.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},
post:function(c,e,f,h){var g=h[0];if(g.$options&&g.$options.updateOn)e.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){g.$touched||(a.$$phase?c.$evalAsync(g.$setTouched):c.$apply(g.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=ha(a.$eval(c.ngModelOptions));A(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Na({terminal:!0,priority:1E3}),zg=I("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=
d;this.group=e;this.disabled=g}function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,xa(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var v=m[9];d=c(m[2]?m[1]:r);var w=a&&c(a)||d,u=v&&c(v),q=v?function(a,c){return u(e,c)}:function(a){return Ga(a)},z=function(a,c){return q(a,x(a,c))},y=c(m[2]||m[1]),A=c(m[3]||""),O=c(m[4]||""),H=c(m[8]),B={},x=s?function(a,c){B[s]=c;B[r]=a;return B}:
function(a){B[r]=a;return B};return{trackBy:v,getTrackByValue:z,getWatchables:c(H,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=x(a[h],h),h=q(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=O(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=H(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var p=d===g?m:g[m],r=x(d[p],p),s=w(e,r),p=q(s,r),t=y(e,r),u=A(e,r),r=O(e,r),s=new f(p,s,t,u,r);a.push(s);c[p]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[z(a)]},
getViewValueFromOption:function(a){return v?da.copy(a.viewValue):a.viewValue}}}}}var e=X.createElement("option"),f=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,g,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.label!==c.label&&(c.label=a.label,c.textContent=a.label);a.value!==c.value&&(c.value=a.selectValue)}function p(a,c,d,e){c&&F(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=
a.nextSibling,Wb(a),a=c}function s(a){var c=q&&q[0],d=H&&H[0];if(c||d)for(;a&&(a===c||a===d||c&&8===c.nodeType);)a=a.nextSibling;return a}function v(){var a=x&&u.readValue();x=C.getOptions();var c={},d=g[0].firstChild;O&&g.prepend(q);d=s(d);x.items.forEach(function(a){var h,k;a.group?(h=c[a.group],h||(h=p(g[0],d,"optgroup",f),d=h.nextSibling,h.label=a.group,h=c[a.group]={groupElement:h,currentOptionElement:h.firstChild}),k=p(h.groupElement,h.currentOptionElement,"option",e),n(a,k),h.currentOptionElement=
k.nextSibling):(k=p(g[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);w.$render();if(!w.$isEmpty(a)){var h=u.readValue();(C.trackBy?ka(a,h):a===h)||(w.$setViewValue(h),w.$render())}}var w=k[1];if(w){var u=k[0];k=l.multiple;for(var q,z=0,y=g.children(),A=y.length;z<A;z++)if(""===y[z].value){q=y.eq(z);break}var O=!!q,H=B(e.cloneNode(!1));H.val("?");var x,C=d(l.ngOptions,g,c);k?(w.$isEmpty=function(a){return!a||0===a.length},u.writeValue=
function(a){x.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=x.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],c=[];m(a,function(a){(a=x.selectValueMap[a])&&!a.disabled&&c.push(x.getViewValueFromOption(a))});return c},C.trackBy&&c.$watchCollection(function(){if(J(w.$viewValue))return w.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){w.$render()})):(u.writeValue=function(a){var c=x.getOptionFromViewValue(a);
c&&!c.disabled?g[0].value!==c.selectValue&&(H.remove(),O||q.remove(),g[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||O?(H.remove(),O||g.prepend(q),g.val(""),q.prop("selected",!0),q.attr("selected",!0)):(O||q.remove(),g.prepend(H),g.val("?"),H.prop("selected",!0),H.attr("selected",!0))},u.readValue=function(){var a=x.selectValueMap[g.val()];return a&&!a.disabled?(O||q.remove(),H.remove(),x.getViewValueFromOption(a)):null},C.trackBy&&c.$watch(function(){return C.getTrackByValue(w.$viewValue)},
function(){w.$render()}));O?(q.remove(),a(q)(c),q.removeClass("ng-scope")):q=B(e.cloneNode(!1));v();c.$watchCollection(C.getWatchables,v)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(h,g,l){function k(a){g.text(a||"")}var n=l.count,p=l.$attr.when&&g.attr(l.$attr.when),r=l.offset||0,s=h.$eval(p)||{},w={},A=c.startSymbol(),u=c.endSymbol(),q=A+n+"-"+r+u,z=da.noop,x;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+F(d[2]),s[d]=g.attr(l.$attr[c]))});
m(s,function(a,d){w[d]=c(a.replace(e,q))});h.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===x||f&&V(x)&&isNaN(x)||(z(),f=w[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+p),z=y,k()):z=h.$watch(f,k),x=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=I("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,h){var g=h.ngRepeat,l=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",g);var n=k[1],p=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3]||k[1],y=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var u,q,z,A,x={$id:Ga};s?u=a(s):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,h,k,n){u&&(q=function(c,d,e){y&&(x[y]=c);x[v]=d;x.$index=e;return u(a,x)});var s=fa();a.$watchCollection(p,function(h){var k,p,t=f[0],u,x=fa(),C,G,J,M,I,F,L;r&&(a[r]=h);if(Da(h))I=h,p=q||z;else for(L in p=q||A,I=[],h)ta.call(h,L)&&"$"!==L.charAt(0)&&I.push(L);C=I.length;L=Array(C);for(k=0;k<C;k++)if(G=h===I?k:I[k],J=h[G],M=p(G,J,k),s[M])F=s[M],delete s[M],x[M]=F,L[k]=F;else{if(x[M])throw m(L,
function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",g,M,J);L[k]={id:M,scope:w,clone:w};x[M]=!0}for(u in s){F=s[u];M=rb(F.clone);c.leave(M);if(M[0].parentNode)for(k=0,p=M.length;k<p;k++)M[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<C;k++)if(G=h===I?k:I[k],J=h[G],F=L[k],F.scope){u=t;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);F.clone[0]!=u&&c.move(rb(F.clone),null,B(t));t=F.clone[F.clone.length-1];e(F.scope,k,v,J,y,G,C)}else n(function(a,d){F.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,B(t));t=f;F.clone=a;x[F.id]=F;e(F.scope,k,v,J,y,G,C)});s=x})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Na(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h=[],g=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=rb(g[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}g.length=0;k.length=0;(h=f.cases["!"+
c]||f.cases["?"])&&m(h,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Na({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:y,$render:y},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=B(X.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=y});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=w)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var h=e[0];h.ngModelCtrl=f;f.$render=function(){h.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(h.readValue())})});
if(d.multiple){h.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};h.writeValue=function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected=A(d.get(a.value))})};var g,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(c,d){if(A(d.value))var e=a(d.value,
!0);else{var f=a(c.text(),!0);f||d.$set("value",c.text())}return function(a,c,d){function k(a){p.addOption(a,c);p.ngModelCtrl.$render();c[0].hasAttribute("selected")&&(c[0].selected=!0)}var m=c.parent(),p=m.data("$selectController")||m.parent().data("$selectController");if(p&&p.ngModelCtrl){if(e){var r;d.$observe("value",function(a){A(r)&&p.removeOption(r);r=a;k(a)})}else f?a.$watch(f,function(a,c){d.$set("value",a);c!==a&&p.removeOption(c);k(a)}):k(d.value);c.on("$destroy",function(){p.removeOption(d.value);
p.ngModelCtrl.$render()})}}}}}],le=qa({restrict:"E",terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,h=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",
h,a,xa(c));f=a||w;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||v(f)||f.test(c)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});
e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(da),da.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,h=e;w===h&&(h=Math.min(c(a),3));Math.pow(10,h);return 1==f&&0==h?"one":"other"}})}]),B(X).ready(function(){Zd(X,zc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z,h,A){'use strict';function m(h){return["$animate",function(r){return{restrict:"AE",transclude:"element",terminal:!0,require:"^^ngMessages",link:function(n,f,a,g,l){var c=f[0],p,h=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var k=function(b){p=b?v(b)?b:b.split(/[\s,]+/):null;g.reRender()};a?(k(n.$eval(a)),n.$watchCollection(a,k)):k(h);var e,q;g.register(c,q={test:function(b){var a=p;b=a?v(a)?0<=a.indexOf(b):a.hasOwnProperty(b):void 0;return b},attach:function(){e||l(n,function(b){r.enter(b,
null,f);e=b;var a=e.$$attachId=g.getAttachId();e.on("$destroy",function(){e&&e.$$attachId===a&&(g.deregister(c),q.detach())})})},detach:function(){if(e){var b=e;e=null;r.leave(b)}}})}}}]}var v=h.isArray,w=h.forEach,x=h.isString,y=h.element;h.module("ngMessages",[]).directive("ngMessages",["$animate",function(h){function r(f,a){return x(a)&&0===a.length||n(f.$eval(a))}function n(f){return x(f)?f.length:!!f}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(f,
a,g){function l(b,a){for(var d=a,f=[];d&&d!==b;){var c=d.$$ngMessageNode;if(c&&c.length)return k[c];d.childNodes.length&&-1==f.indexOf(d)?(f.push(d),d=d.childNodes[d.childNodes.length-1]):d=d.previousSibling||d.parentNode}}var c=this,p=0,m=0;this.getAttachId=function(){return m++};var k=this.messages={},e,q;this.render=function(b){b=b||{};e=!1;q=b;for(var p=r(a,g.ngMessagesMultiple)||r(a,g.multiple),d=[],k={},s=c.head,l=!1,m=0;null!=s;){m++;var t=s.message,u=!1;l||w(b,function(a,b){!u&&n(a)&&t.test(b)&&
!k[b]&&(u=k[b]=!0,t.attach())});u?l=!p:d.push(t);s=s.next}w(d,function(b){b.detach()});d.length!==m?h.setClass(f,"ng-active","ng-inactive"):h.setClass(f,"ng-inactive","ng-active")};a.$watchCollection(g.ngMessages||g["for"],c.render);this.reRender=function(){e||(e=!0,a.$evalAsync(function(){e&&q&&c.render(q)}))};this.register=function(b,a){var d=p.toString();k[d]={message:a};var e=f[0],g=k[d];c.head?(e=l(e,b))?(g.next=e.next,e.next=g):(g.next=c.head,c.head=g):c.head=g;b.$$ngMessageNode=d;p++;c.reRender()};
this.deregister=function(b){var a=b.$$ngMessageNode;delete b.$$ngMessageNode;var d=k[a];(b=l(f[0],b))?b.next=d.next:c.head=d.next;delete k[a];c.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(h,m,n){return{restrict:"AE",require:"^^ngMessages",link:function(f,a,g){var l=g.ngMessagesInclude||g.src;h(l).then(function(c){n(c)(f,function(c){a.after(c);c=y(m[0].createComment(" ngMessagesInclude: "+l+" "));a.after(c);a.remove()})})}}}]).directive("ngMessage",
m("AE")).directive("ngMessageExp",m("A"))})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.2 - 2015-10-13
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start().done(g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start().done(i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{removeClass:"in",to:{height:"0"}}).start().done(k):a.removeClass(f,"in",{to:{height:"0"}}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),angular.extend(this,c("UibAccordionController",{$scope:a,$attrs:b}))}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$timeout",function(a,b,c){a.closeable=!!b.close,angular.isDefined(b.dismissOnTimeout)&&c(function(){a.close()},parseInt(b.dismissOnTimeout,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),angular.extend(this,c("UibAlertController",{$scope:a,$attrs:b}))}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",["$document",function(a){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(b,c,d,e){function f(){return h(d.btnCheckboxTrue,!0)}function g(){return h(d.btnCheckboxFalse,!1)}function h(a,c){return angular.isDefined(a)?b.$eval(a):c}var i=e[0],j=e[1];c.find("input").css({display:"none"}),j.$render=function(){c.toggleClass(i.activeClass,angular.equals(j.$modelValue,f()))},c.on(i.toggleEvent,function(){d.disabled||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})}),c.on("keypress",function(e){d.disabled||32!==e.which||a[0].activeElement!==c[0]||b.$apply(function(){j.$setViewValue(c.hasClass(i.activeClass)?g():f()),j.$render()})})}}}]),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),angular.extend(this,a("UibButtonsController"))}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),angular.extend(this,c("UibCarouselController",{$scope:a,$element:b}))}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),this.fixTimeZone(c),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(b,d,1),g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(e,f,1),this.fixTimeZone(b),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(g+f,0,1),this.fixTimeZone(b),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){
function m(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(a,b,c,d,e,f,g,h,i){i||e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var j=this,k={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){j[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){j[d]=a?new Date(a):null,j.refreshView()}):j[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){j[d]=angular.isDefined(c)?c:b[d],a[d]=j[d],("minMode"==d&&j.modes.indexOf(a.datepickerMode)<j.modes.indexOf(j[d])||"maxMode"==d&&j.modes.indexOf(a.datepickerMode)>j.modes.indexOf(j[d]))&&(a.datepickerMode=j[d])}):(j[d]=g[d]||null,a[d]=j[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(k.$isEmpty(k.$modelValue)||k.$invalid)&&(j.activeDate=a,j.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===j.compare(b.date,j.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){k=a,k.$render=function(){j.render()}},this.render=function(){if(k.$viewValue){var a=new Date(k.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=k.$viewValue?new Date(k.$viewValue):null;k.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=k.$viewValue?new Date(k.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===j.minMode){var c=k.$viewValue?new Date(k.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),k.$setViewValue(c),k.$render()}else j.activeDate=b,a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=j.activeDate.getFullYear()+a*(j.step.years||0),c=j.activeDate.getMonth()+a*(j.step.months||0);j.activeDate.setFullYear(b,c,1),j.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===j.maxMode&&1===b||a.datepickerMode===j.minMode&&-1===b||(a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var l=function(){j.element[0].focus()};a.$on("uib:datepicker.focus",l),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),j.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(j.isDisabled(j.activeDate))return;a.select(j.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(j.handleKeyDown(c,b),j.refreshView()):a.toggleMode("up"===c?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest","$log","$dropdownSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m){m||l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");var n,o,p=this,q=a.$new(),r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(o=d(c.isOpen),s=o.assign,a.$watch(o,function(a){q.isOpen=!!a})),u=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.uibKeyboardNav),u&&p.dropdownMenu&&(i.find("body").append(p.dropdownMenu),b.on("$destroy",function(){p.dropdownMenu.remove()}))},this.toggle=function(a){return q.isOpen=arguments.length?!!a:!q.isOpen},this.isOpen=function(){return q.isOpen},q.getToggleElement=function(){return p.toggleElement},q.getAutoClose=function(){return c.autoClose||"always"},q.getElement=function(){return b},q.isKeynavEnabled=function(){return v},q.focusDropdownEntry=function(a){var c=p.dropdownMenu?angular.element(p.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(p.selectedOption)?p.selectedOption=p.selectedOption===c.length-1?p.selectedOption:p.selectedOption+1:p.selectedOption=0;break;case 38:angular.isNumber(p.selectedOption)?p.selectedOption=0===p.selectedOption?0:p.selectedOption-1:p.selectedOption=c.length-1}c[p.selectedOption].focus()},q.getDropdownElement=function(){return p.dropdownMenu},q.focusToggleElement=function(){p.toggleElement&&p.toggleElement[0].focus()},q.$watch("isOpen",function(c,d){if(u&&p.dropdownMenu){var e=h.positionElements(b,p.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},l=p.dropdownMenu.hasClass("dropdown-menu-right");l?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),p.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,r).then(function(){angular.isDefined(c)&&c!==d&&t(a,{open:!!c})}),c)p.dropdownMenuTemplateUrl&&k(p.dropdownMenuTemplateUrl).then(function(a){n=q.$new(),j(a.trim())(n,function(a){var b=a;p.dropdownMenu.replaceWith(b),p.dropdownMenu=b})}),q.focusToggleElement(),f.open(q);else{if(p.dropdownMenuTemplateUrl){n&&n.$destroy();var m=angular.element('<ul class="dropdown-menu"></ul>');p.dropdownMenu.replaceWith(m),p.dropdownMenu=m}f.close(q),p.selectedOption=null}angular.isFunction(s)&&s(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==q.getAutoClose()&&(q.isOpen=!1)});var w=a.$on("$destroy",function(){q.$destroy()});q.$on("$destroy",w)}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelectorAll("[autofocus]");a.length?a[0].focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(b){function e(){return p}var j=d.defer(),l=d.defer(),m=d.defer(),n={result:j.promise,opened:l.promise,rendered:m.promise,close:function(a){return g.close(n,a)},dismiss:function(a){return g.dismiss(n,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var o,p=d.all([h(b)].concat(i(b.resolve)));return o=k=d.all([k]).then(e,e).then(function(a){var d=(b.scope||c).$new();d.$close=n.close,d.$dismiss=n.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var e,h={},i=1;b.controller&&(h.$scope=d,h.$modalInstance=n,angular.forEach(b.resolve,function(b,c){h[c]=a[i++]}),e=f(b.controller,h),b.controllerAs&&(b.bindToController&&angular.extend(e,d),d[b.controllerAs]=e)),g.open(n,{scope:d,deferred:j,renderDeferred:m,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),l.resolve(!0)},function(a){l.reject(a),j.reject(a)})["finally"](function(){k===o&&(k=null)}),n},j}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelectorAll("[autofocus]");a.length?a[0].focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){
l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$log","$paginationSuppressWarning",function(a,b,c,d,e){e||d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");var f=this,g={$setViewValue:angular.noop},h=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d,e){g=d,this.config=e,g.$render=function(){f.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){f.itemsPerPage=parseInt(b,10),a.totalPages=f.calculateTotalPages()}):this.itemsPerPage=e.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=f.calculateTotalPages()}),a.$watch("totalPages",function(b){h(a.$parent,b),a.page>b?a.selectPage(b):g.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(g.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),g.$setViewValue(b),g.$render())},a.getText=function(b){return a[b+"Text"]||f.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){J.isOpen?q():m()}function m(){(!I||a.$eval(d[k+"Enable"]))&&(v(),J.popupDelay?D||(D=g(r,J.popupDelay,!1)):r())}function q(){J.popupCloseDelay?E=g(s,J.popupCloseDelay,!1):s()}function r(){return D&&(g.cancel(D),D=null),E&&(g.cancel(E),E=null),C&&(g.cancel(C),C=null),J.content?(t(),void J.$evalAsync(function(){J.isOpen=!0,w(!0),O()})):angular.noop}function s(){J&&(D&&(g.cancel(D),D=null),F&&(g.cancel(F),F=null),J.$evalAsync(function(){J.isOpen=!1,w(!1),J.animation?C||(C=g(u,150,!1)):u()}))}function t(){A||(B=J.$new(),A=c(B,function(a){G?h.find("body").append(a):b.after(a)}),x())}function u(){y(),C=null,A&&(A.remove(),A=null),B&&(B.$destroy(),B=null)}function v(){J.title=d[k+"Title"],M?J.content=M(a):J.content=d[e],J.popupClass=d[k+"Class"],J.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);J.popupDelay=isNaN(b)?o.popupDelay:b,J.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function w(b){L&&angular.isFunction(L.assign)&&L.assign(a,b)}function x(){N.length=0,M?(N.push(a.$watch(M,function(a){J.content=a,!a&&J.isOpen&&s()})),N.push(B.$watch(function(){K||(K=!0,B.$$postDigest(function(){K=!1,J&&J.isOpen&&O()}))}))):N.push(d.$observe(e,function(a){J.content=a,!a&&J.isOpen?s():O()})),N.push(d.$observe(k+"Title",function(a){J.title=a,J.isOpen&&O()})),N.push(d.$observe(k+"Placement",function(a){J.placement=a?a:o.placement,J.isOpen&&O()}))}function y(){N.length&&(angular.forEach(N,function(a){a()}),N.length=0)}function z(){var a=d[k+"Trigger"];P(),H=p(a),"none"!==H.show&&H.show.forEach(function(a,c){a===H.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),H.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var A,B,C,D,E,F,G=angular.isDefined(o.appendToBody)?o.appendToBody:!1,H=p(void 0),I=angular.isDefined(d[k+"Enable"]),J=a.$new(!0),K=!1,L=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,M=o.useContentExp?l(d[e]):!1,N=[],O=function(){A&&A.html()&&(F||(F=g(function(){A.css({top:0,left:0});var a=i.positionElements(b,A,J.placement,G);a.top+="px",a.left+="px",a.visibility="visible",A.css(a),F=null},0,!1)))};J.origScope=a,J.isOpen=!1,n.add(J,{close:s}),J.contentExp=function(){return J.content},d.$observe("disabled",function(a){D&&a&&(g.cancel(D),D=null),a&&J.isOpen&&s()}),L&&a.$watch(L,function(a){!a===J.isOpen&&j()});var P=function(){H.show.forEach(function(a){b.unbind(a,m)}),H.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};z();var Q=a.$eval(d[k+"Animation"]);J.animation=angular.isDefined(Q)?!!Q:o.animation;var R=a.$eval(d[k+"AppendToBody"]);G=angular.isDefined(R)?R:G,G&&a.$on("$locationChangeSuccess",function(){J.isOpen&&s()}),a.$on("$destroy",function(){g.cancel(C),g.cancel(D),g.cancel(E),g.cancel(F),P(),u(),n.remove(J),J=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){var a=d.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","uibProgressConfig","$log","$progressSuppressWarning",function(a,b,c,d,e){e||d.warn("ProgressController is now deprecated. Use UibProgressController instead.");var f=this,g=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,d){g||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=d&&angular.isDefined(d.title)?d.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=f.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,f.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){f.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),angular.extend(this,c("UibRatingController",{$scope:a,$attrs:b}))}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),angular.extend(this,b("UibTabsetController",{$scope:a}))}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===r[1]&&(b+=12)),b):void 0}function i(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function k(a){l(),q.$setViewValue(new Date(p)),m(a)}function l(){q.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function m(b){var c=p.getHours(),d=p.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:j(c),"m"!==b&&(a.minutes=j(d)),a.meridian=p.getHours()<12?r[0]:r[1]}function n(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function o(a){p=n(p,a),k()}var p=new Date,q={$setViewValue:angular.noop},r=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){q=b,q.$render=this.render,q.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;h&&this.setupMousewheelEvents(e,f);var i=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;i&&this.setupArrowkeyEvents(e,f),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f)};var s=g.hourStep;c.hourStep&&a.$parent.$watch(d(c.hourStep),function(a){s=parseInt(a,10)});var t=g.minuteStep;c.minuteStep&&a.$parent.$watch(d(c.minuteStep),function(a){t=parseInt(a,10)});var u;a.$parent.$watch(d(c.min),function(a){var b=new Date(a);u=isNaN(b)?void 0:b});var v;a.$parent.$watch(d(c.max),function(a){var b=new Date(a);v=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=n(p,60*s);return a>v||p>a&&u>a},a.noDecrementHours=function(){var a=n(p,60*-s);return u>a||a>p&&a>v},a.noIncrementMinutes=function(){var a=n(p,t);return a>v||p>a&&u>a},a.noDecrementMinutes=function(){var a=n(p,-t);return u>a||a>p&&a>v},a.noToggleMeridian=function(){return p.getHours()<13?n(p,720)>v:n(p,-720)<u},a.showMeridian=g.showMeridian,
c.showMeridian&&a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,q.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(p.setHours(c),k())}else m()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){q.$setViewValue(null),q.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=h(),b=i();angular.isDefined(a)&&angular.isDefined(b)?(p.setHours(a),u>p||p>v?d(!0):k("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=j(a.hours)})}),a.updateMinutes=function(){var a=i(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(p.setMinutes(a),u>p||p>v?d(void 0,!0):k("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=j(a.minutes)})})},this.render=function(){var b=q.$viewValue;isNaN(b)?(q.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(p=b),u>p||p>v?(q.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):l(),m())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*s)},a.decrementHours=function(){a.noDecrementHours()||o(60*-s)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(t)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(-t)},a.toggleMeridian=function(){a.noToggleMeridian()||o(720*(p.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$element","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e,f){f||e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),angular.extend(this,d("UibTimepickerController",{$scope:a,$element:b,$attrs:c}))}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(){K.moveInProgress||(K.moveInProgress=!0,K.$digest()),S&&g.cancel(S),S=g(function(){K.matches.length&&n(),K.moveInProgress=!1},r)}function n(){K.position=C?k.offset(b):k.position(b),K.position.top+=b.prop("offsetHeight")}var o,p,q=[9,13,27,38,40],r=200,s=a.$eval(c.typeaheadMinLength);s||0===s||(s=1);var t,u,v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1,x=e(c.typeaheadLoading).assign||angular.noop,y=e(c.typeaheadOnSelect),z=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,A=e(c.typeaheadNoResults).assign||angular.noop,B=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,C=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,D=c.typeaheadAppendToElementId||!1,E=a.$eval(c.typeaheadFocusFirst)!==!1,F=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,G=e(c.ngModel),H=e(c.ngModel+"($$$p)"),I=function(b,c){return angular.isFunction(G(a))&&p&&p.$options&&p.$options.getterSetter?H(b,{$$$p:c}):G.assign(b,c)},J=l.parse(c.uibTypeahead),K=a.$new(),L=a.$on("$destroy",function(){K.$destroy()});K.$on("$destroy",L);var M="typeahead-"+K.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var N=angular.element("<div uib-typeahead-popup></div>");N.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(c.typeaheadTemplateUrl)&&N.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&N.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var O=function(){K.matches=[],K.activeIdx=-1,b.attr("aria-expanded",!1)},P=function(a){return M+"-option-"+a};K.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",P(a))});var Q=function(a,b){return K.matches.length>b&&a?a.toUpperCase()===K.matches[b].label.toUpperCase():!1},R=function(c){var d={$viewValue:c};x(a,!0),A(a,!1),f.when(J.source(a,d)).then(function(e){var f=c===o.$viewValue;if(f&&t)if(e&&e.length>0){K.activeIdx=E?0:-1,A(a,!1),K.matches.length=0;for(var g=0;g<e.length;g++)d[J.itemName]=e[g],K.matches.push({id:P(g),label:J.viewMapper(K,d),model:e[g]});K.query=c,n(),b.attr("aria-expanded",!0),F&&1===K.matches.length&&Q(c,0)&&K.select(0)}else O(),A(a,!0);f&&x(a,!1)},function(){O(),x(a,!1),A(a,!0)})};C&&(angular.element(i).bind("resize",m),h.find("body").bind("scroll",m));var S;K.moveInProgress=!1,K.query=void 0;var T,U=function(a){T=g(function(){R(a)},v)},V=function(){T&&g.cancel(T)};O(),K.select=function(d){var e,f,h={};u=!0,h[J.itemName]=f=K.matches[d].model,e=J.modelMapper(a,h),I(a,e),o.$setValidity("editable",!0),o.$setValidity("parse",!0),y(a,{$item:f,$model:e,$label:J.viewMapper(a,h)}),O(),K.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.bind("keydown",function(a){if(0!==K.matches.length&&-1!==q.indexOf(a.which)){if(-1===K.activeIdx&&(9===a.which||13===a.which))return O(),void K.$digest();a.preventDefault(),40===a.which?(K.activeIdx=(K.activeIdx+1)%K.matches.length,K.$digest()):38===a.which?(K.activeIdx=(K.activeIdx>0?K.activeIdx:K.matches.length)-1,K.$digest()):13===a.which||9===a.which?K.$apply(function(){K.select(K.activeIdx)}):27===a.which&&(a.stopPropagation(),O(),K.$digest())}}),b.bind("blur",function(){z&&K.matches.length&&-1!==K.activeIdx&&!u&&(u=!0,K.$apply(function(){K.select(K.activeIdx)})),t=!1,u=!1});var W=function(a){b[0]!==a.target&&3!==a.which&&0!==K.matches.length&&(O(),j.$$phase||K.$digest())};h.bind("click",W),a.$on("$destroy",function(){h.unbind("click",W),(C||D)&&X.remove(),N.remove()});var X=d(N)(K);C?h.find("body").append(X):D!==!1?angular.element(h[0].getElementById(D)).append(X):b.after(X),this.init=function(b,c){o=b,p=c,o.$parsers.unshift(function(b){return t=!0,0===s||b&&b.length>=s?v>0?(V(),U(b)):R(b):(x(a,!1),V(),O()),w?b:b?void o.$setValidity("editable",!1):(o.$setValidity("editable",!0),null)}),o.$formatters.push(function(b){var c,d,e={};return w||o.$setValidity("editable",!0),B?(e.$model=b,B(a,e)):(e[J.itemName]=b,c=J.viewMapper(a,e),e[J.itemName]=void 0,d=J.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n');
}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
var _jsonix_factory = function(_jsonix_xmldom, _jsonix_xmlhttprequest, _jsonix_fs)
{
	// Complete Jsonix script is included below 
var Jsonix={singleFile:true};
Jsonix.Util={};
Jsonix.Util.extend=function(f,g){f=f||{};
if(g){for(var h in g){var e=g[h];
if(e!==undefined){f[h]=e
}}sourceIsEvt=typeof window!=="undefined"&&window!==null&&typeof window.Event==="function"&&g instanceof window.Event;
if(!sourceIsEvt&&g.hasOwnProperty&&g.hasOwnProperty("toString")){f.toString=g.toString
}}return f
};
Jsonix.Class=function(){var n=function(){this.initialize.apply(this,arguments)
};
var p={};
var k=function(){};
var l,i,o;
for(var m=0,j=arguments.length;
m<j;
++m){o=arguments[m];
if(typeof o=="function"){if(m===0&&j>1){i=o.prototype.initialize;
o.prototype.initialize=k;
p=new o();
if(i===undefined){delete o.prototype.initialize
}else{o.prototype.initialize=i
}}l=o.prototype
}else{l=o
}Jsonix.Util.extend(p,l)
}n.prototype=p;
return n
};
Jsonix.XML={XMLNS_NS:"http://www.w3.org/2000/xmlns/",XMLNS_P:"xmlns"};
Jsonix.DOM={isDomImplementationAvailable:function(){if(typeof _jsonix_xmldom!=="undefined"){return true
}else{if(typeof document!=="undefined"&&Jsonix.Util.Type.exists(document.implementation)&&Jsonix.Util.Type.isFunction(document.implementation.createDocument)){return true
}else{return false
}}},createDocument:function(){if(typeof _jsonix_xmldom!=="undefined"){return new (_jsonix_xmldom.DOMImplementation)().createDocument()
}else{if(typeof document!=="undefined"&&Jsonix.Util.Type.exists(document.implementation)&&Jsonix.Util.Type.isFunction(document.implementation.createDocument)){return document.implementation.createDocument("","",null)
}else{if(typeof ActiveXObject!=="undefined"){return new ActiveXObject("MSXML2.DOMDocument")
}else{throw new Error("Error created the DOM document.")
}}}},serialize:function(b){Jsonix.Util.Ensure.ensureExists(b);
if(typeof _jsonix_xmldom!=="undefined"){return(new (_jsonix_xmldom).XMLSerializer()).serializeToString(b)
}else{if(Jsonix.Util.Type.exists(XMLSerializer)){return(new XMLSerializer()).serializeToString(b)
}else{if(Jsonix.Util.Type.exists(b.xml)){return b.xml
}else{throw new Error("Could not serialize the node, neither XMLSerializer nor the [xml] property were found.")
}}}},parse:function(g){Jsonix.Util.Ensure.ensureExists(g);
if(typeof _jsonix_xmldom!=="undefined"){return(new (_jsonix_xmldom).DOMParser()).parseFromString(g,"application/xml")
}else{if(typeof DOMParser!="undefined"){return(new DOMParser()).parseFromString(g,"application/xml")
}else{if(typeof ActiveXObject!="undefined"){var h=Jsonix.DOM.createDocument("","");
h.loadXML(g);
return h
}else{var f="data:text/xml;charset=utf-8,"+encodeURIComponent(g);
var e=new XMLHttpRequest();
e.open("GET",f,false);
if(e.overrideMimeType){e.overrideMimeType("text/xml")
}e.send(null);
return e.responseXML
}}}},load:function(e,g,f){var h=Jsonix.Request.INSTANCE;
h.issue(e,function(a){var b;
if(Jsonix.Util.Type.exists(a.responseXML)&&Jsonix.Util.Type.exists(a.responseXML.documentElement)){b=a.responseXML
}else{if(Jsonix.Util.Type.isString(a.responseText)){b=Jsonix.DOM.parse(a.responseText)
}else{throw new Error("Response does not have valid [responseXML] or [responseText].")
}}g(b)
},function(a){throw new Error("Could not retrieve XML from URL ["+e+"].")
},f)
},xlinkFixRequired:null,isXlinkFixRequired:function(){if(Jsonix.DOM.xlinkFixRequired===null){if(typeof navigator==="undefined"){Jsonix.DOM.xlinkFixRequired=false
}else{if(!!navigator.userAgent&&(/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))){var f=Jsonix.DOM.createDocument();
var d=f.createElement("test");
d.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","urn:test");
f.appendChild(d);
var e=Jsonix.DOM.serialize(f);
Jsonix.DOM.xlinkFixRequired=(e.indexOf("xmlns:xlink")===-1)
}else{Jsonix.DOM.xlinkFixRequired=false
}}}return Jsonix.DOM.xlinkFixRequired
}};
Jsonix.Request=Jsonix.Class({factories:[function(){return new XMLHttpRequest()
},function(){return new ActiveXObject("Msxml2.XMLHTTP")
},function(){return new ActiveXObject("Msxml2.XMLHTTP.6.0")
},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")
},function(){return new ActiveXObject("Microsoft.XMLHTTP")
},function(){if(typeof _jsonix_xmlhttprequest!=="undefined"){var b=_jsonix_xmlhttprequest.XMLHttpRequest;
return new b()
}else{return null
}}],initialize:function(){},issue:function(y,q,x,n){Jsonix.Util.Ensure.ensureString(y);
if(Jsonix.Util.Type.exists(q)){Jsonix.Util.Ensure.ensureFunction(q)
}else{q=function(){}
}if(Jsonix.Util.Type.exists(x)){Jsonix.Util.Ensure.ensureFunction(x)
}else{x=function(){}
}if(Jsonix.Util.Type.exists(n)){Jsonix.Util.Ensure.ensureObject(n)
}else{n={}
}var w=this.createTransport();
var z=Jsonix.Util.Type.isString(n.method)?n.method:"GET";
var v=Jsonix.Util.Type.isBoolean(n.async)?n.async:true;
var p=Jsonix.Util.Type.isString(n.proxy)?n.proxy:Jsonix.Request.PROXY;
var u=Jsonix.Util.Type.isString(n.user)?n.user:null;
var o=Jsonix.Util.Type.isString(n.password)?n.password:null;
if(Jsonix.Util.Type.isString(p)&&(y.indexOf("http")===0)){y=p+encodeURIComponent(y)
}if(Jsonix.Util.Type.isString(u)){w.open(z,y,v,u,o)
}else{w.open(z,y,v)
}if(Jsonix.Util.Type.isObject(n.headers)){for(var s in n.headers){if(n.headers.hasOwnProperty(s)){w.setRequestHeader(s,n.headers[s])
}}}var t=Jsonix.Util.Type.exists(n.data)?n.data:null;
if(!v){w.send(t);
this.handleTransport(w,q,x)
}else{var r=this;
if(typeof window!=="undefined"){w.onreadystatechange=function(){r.handleTransport(w,q,x)
};
window.setTimeout(function(){w.send(t)
},0)
}else{w.onreadystatechange=function(){r.handleTransport(w,q,x)
};
w.send(t)
}}return w
},handleTransport:function(f,d,e){if(f.readyState==4){if(!f.status||(f.status>=200&&f.status<300)){d(f)
}if(f.status&&(f.status<200||f.status>=300)){e(f)
}}},createTransport:function(){for(var f=0,e=this.factories.length;
f<e;
f++){try{var g=this.factories[f]();
if(g!==null){return g
}}catch(h){}}throw new Error("Could not create XML HTTP transport.")
},CLASS_NAME:"Jsonix.Request"});
Jsonix.Request.INSTANCE=new Jsonix.Request();
Jsonix.Request.PROXY=null;
Jsonix.Schema={};
Jsonix.Model={};
Jsonix.Util.Type={exists:function(b){return(typeof b!=="undefined"&&b!==null)
},isUndefined:function(b){return typeof b==="undefined"
},isString:function(b){return typeof b==="string"
},isBoolean:function(b){return typeof b==="boolean"
},isObject:function(b){return typeof b==="object"
},isFunction:function(b){return typeof b==="function"
},isNumber:function(b){return(typeof b==="number")&&!isNaN(b)
},isNumberOrNaN:function(b){return(b===+b)||(Object.prototype.toString.call(b)==="[object Number]")
},isNaN:function(b){return Jsonix.Util.Type.isNumberOrNaN(b)&&isNaN(b)
},isArray:function(b){return !!(b&&b.concat&&b.unshift&&!b.callee)
},isDate:function(b){return !!(b&&b.getTimezoneOffset&&b.setUTCFullYear)
},isRegExp:function(b){return !!(b&&b.test&&b.exec&&(b.ignoreCase||b.ignoreCase===false))
},isNode:function(b){return(typeof Node==="object"||typeof Node==="function")?(b instanceof Node):(b&&(typeof b==="object")&&(typeof b.nodeType==="number")&&(typeof b.nodeName==="string"))
},isEqual:function(u,w,A){var a=Jsonix.Util.Type.isFunction(A);
var y=function(g,e,m){var i=slice.call(arguments);
var h=i.length<=1;
var f=h?0:i[0];
var d=h?i[0]:i[1];
var j=i[2]||1;
var k=Math.max(Math.ceil((d-f)/j),0);
var c=0;
var l=new Array(k);
while(c<k){l[c++]=f;
f+=j
}return l
};
var x=Object.keys||function(e){if(Jsonix.Util.Type.isArray(e)){return y(0,e.length)
}var c=[];
for(var d in e){if(e.hasOwnProperty(d)){c[c.length]=d
}}return c
};
if(u===w){return true
}if(Jsonix.Util.Type.isNaN(u)&&Jsonix.Util.Type.isNaN(w)){return true
}var C=typeof u;
var E=typeof w;
if(C!=E){if(a){A("Types differ ["+C+"], ["+E+"].")
}return false
}if(u==w){return true
}if((!u&&w)||(u&&!w)){if(a){A("One is falsy, the other is truthy.")
}return false
}if(Jsonix.Util.Type.isDate(u)&&Jsonix.Util.Type.isDate(w)){return u.getTime()===w.getTime()
}if(Jsonix.Util.Type.isNaN(u)&&Jsonix.Util.Type.isNaN(w)){return false
}if(Jsonix.Util.Type.isRegExp(u)&&Jsonix.Util.Type.isRegExp(w)){return u.source===w.source&&u.global===w.global&&u.ignoreCase===w.ignoreCase&&u.multiline===w.multiline
}if(Jsonix.Util.Type.isNode(u)&&Jsonix.Util.Type.isNode(w)){var b=Jsonix.DOM.serialize(u);
var z=Jsonix.DOM.serialize(w);
if(b!==z){if(a){A("Nodes differ.");
A("A="+b);
A("B="+z)
}return false
}else{return true
}}if(C!=="object"){return false
}if(Jsonix.Util.Type.isArray(u)&&(u.length!==w.length)){if(a){A("Lengths differ.");
A("A.length="+u.length);
A("B.length="+w.length)
}return false
}var s=x(u);
var v=x(w);
if(s.length!==v.length){if(a){A("Different number of properties ["+s.length+"], ["+v.length+"].")
}for(var D=0;
D<s.length;
D++){if(a){A("A ["+s[D]+"]="+u[s[D]])
}}for(var F=0;
F<v.length;
F++){if(a){A("B ["+v[F]+"]="+w[v[F]])
}}return false
}for(var B=0;
B<s.length;
B++){var t=s[B];
if(!(t in w)||!Jsonix.Util.Type.isEqual(u[t],w[t],A)){if(a){A("One of the properties differ.");
A("Key: ["+t+"].");
A("Left: ["+u[t]+"].");
A("Right: ["+w[t]+"].")
}return false
}}return true
},cloneObject:function(e,f){f=f||{};
for(var d in e){if(e.hasOwnProperty(d)){f[d]=e[d]
}}return f
},defaultValue:function(){var i=arguments;
if(i.length===0){return undefined
}else{var g=i[i.length-1];
var f=typeof g;
for(var j=0;
j<i.length-1;
j++){var h=i[j];
if(typeof h===f){return h
}}return g
}}};
Jsonix.Util.NumberUtils={isInteger:function(b){return Jsonix.Util.Type.isNumber(b)&&((b%1)===0)
}};
Jsonix.Util.StringUtils={trim:(!!String.prototype.trim)?function(b){Jsonix.Util.Ensure.ensureString(b);
return b.trim()
}:function(b){Jsonix.Util.Ensure.ensureString(b);
return b.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
},isEmpty:function(h){var c=h.length;
if(!c){return true
}for(var f=0;
f<c;
f++){var g=h[f];
if(g===" "){}else{if(g>"\u000D"&&g<"\u0085"){return false
}else{if(g<"\u00A0"){if(g<"\u0009"){return false
}else{if(g>"\u0085"){return false
}}}else{if(g>"\u00A0"){if(g<"\u2028"){if(g<"\u180E"){if(g<"\u1680"){return false
}else{if(g>"\u1680"){return false
}}}else{if(g>"\u180E"){if(g<"\u2000"){return false
}else{if(g>"\u200A"){return false
}}}}}else{if(g>"\u2029"){if(g<"\u205F"){if(g<"\u202F"){return false
}else{if(g>"\u202F"){return false
}}}else{if(g>"\u205F"){if(g<"\u3000"){return false
}else{if(g>"\u3000"){return false
}}}}}}}}}}}return true
},isNotBlank:function(b){return Jsonix.Util.Type.isString(b)&&!Jsonix.Util.StringUtils.isEmpty(b)
},whitespaceCharacters:"\u0009\u000A\u000B\u000C\u000D \u0085\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000",whitespaceCharactersMap:{"\u0009":true,"\u000A":true,"\u000B":true,"\u000C":true,"\u000D":true," ":true,"\u0085":true,"\u00A0":true,"\u1680":true,"\u180E":true,"\u2000":true,"\u2001":true,"\u2002":true,"\u2003":true,"\u2004":true,"\u2005":true,"\u2006":true,"\u2007":true,"\u2008":true,"\u2009":true,"\u200A":true,"\u2028":true,"\u2029":true,"\u202F":true,"\u205F":true,"\u3000":true},splitBySeparatorChars:function(n,u){Jsonix.Util.Ensure.ensureString(n);
Jsonix.Util.Ensure.ensureString(u);
var p=n.length;
if(p===0){return[]
}if(u.length===1){return n.split(u)
}else{var o=[];
var t=1;
var r=0;
var v=0;
var q=false;
var s=false;
var m=-1;
var i=false;
while(r<p){if(u.indexOf(n.charAt(r))>=0){if(q||i){s=true;
if(t++==m){r=p;
s=false
}o.push(n.substring(v,r));
q=false
}v=++r;
continue
}s=false;
q=true;
r++
}if(q||(i&&s)){o.push(n.substring(v,r))
}return o
}}};
Jsonix.Util.Ensure={ensureBoolean:function(b){if(!Jsonix.Util.Type.isBoolean(b)){throw new Error("Argument ["+b+"] must be a boolean.")
}},ensureString:function(b){if(!Jsonix.Util.Type.isString(b)){throw new Error("Argument ["+b+"] must be a string.")
}},ensureNumber:function(b){if(!Jsonix.Util.Type.isNumber(b)){throw new Error("Argument ["+b+"] must be a number.")
}},ensureNumberOrNaN:function(b){if(!Jsonix.Util.Type.isNumberOrNaN(b)){throw new Error("Argument ["+b+"] must be a number or NaN.")
}},ensureInteger:function(b){if(!Jsonix.Util.Type.isNumber(b)){throw new Error("Argument must be an integer, but it is not a number.")
}else{if(!Jsonix.Util.NumberUtils.isInteger(b)){throw new Error("Argument ["+b+"] must be an integer.")
}}},ensureDate:function(b){if(!(b instanceof Date)){throw new Error("Argument ["+b+"] must be a date.")
}},ensureObject:function(b){if(!Jsonix.Util.Type.isObject(b)){throw new Error("Argument ["+b+"] must be an object.")
}},ensureArray:function(b){if(!Jsonix.Util.Type.isArray(b)){throw new Error("Argument ["+b+"] must be an array.")
}},ensureFunction:function(b){if(!Jsonix.Util.Type.isFunction(b)){throw new Error("Argument ["+b+"] must be a function.")
}},ensureExists:function(b){if(!Jsonix.Util.Type.exists(b)){throw new Error("Argument ["+b+"] does not exist.")
}}};
Jsonix.XML.QName=Jsonix.Class({key:null,namespaceURI:null,localPart:null,prefix:null,string:null,initialize:function(n,j,r){var q;
var o;
var m;
var k;
var l;
if(!Jsonix.Util.Type.exists(j)){q="";
o=n;
m=""
}else{if(!Jsonix.Util.Type.exists(r)){q=Jsonix.Util.Type.exists(n)?n:"";
o=j;
var p=j.indexOf(":");
if(p>0&&p<j.length){m=j.substring(0,p);
o=j.substring(p+1)
}else{m="";
o=j
}}else{q=Jsonix.Util.Type.exists(n)?n:"";
o=j;
m=Jsonix.Util.Type.exists(r)?r:""
}}this.namespaceURI=q;
this.localPart=o;
this.prefix=m;
this.key=(q!==""?("{"+q+"}"):"")+o;
this.string=(q!==""?("{"+q+"}"):"")+(m!==""?(m+":"):"")+o
},toString:function(){return this.string
},toCanonicalString:function(c){var d=c?c.getPrefix(this.namespaceURI,this.prefix):this.prefix;
return this.prefix+(this.prefix===""?"":":")+this.localPart
},clone:function(){return new Jsonix.XML.QName(this.namespaceURI,this.localPart,this.prefix)
},equals:function(b){if(!b){return false
}else{return(this.namespaceURI==b.namespaceURI)&&(this.localPart==b.localPart)
}},CLASS_NAME:"Jsonix.XML.QName"});
Jsonix.XML.QName.fromString=function(n,r,m){var t=n.indexOf("{");
var l=n.lastIndexOf("}");
var s;
var k;
if((t===0)&&(l>0)&&(l<n.length)){s=n.substring(1,l);
k=n.substring(l+1)
}else{s=null;
k=n
}var q=k.indexOf(":");
var o;
var p;
if(q>0&&q<k.length){o=k.substring(0,q);
p=k.substring(q+1)
}else{o="";
p=k
}if(s===null){if(o===""&&Jsonix.Util.Type.isString(m)){s=m
}else{if(r){s=r.getNamespaceURI(o)
}}}if(!Jsonix.Util.Type.isString(s)){s=m||""
}return new Jsonix.XML.QName(s,p,o)
};
Jsonix.XML.QName.fromObject=function(h){Jsonix.Util.Ensure.ensureObject(h);
if(h instanceof Jsonix.XML.QName||(Jsonix.Util.Type.isString(h.CLASS_NAME)&&h.CLASS_NAME==="Jsonix.XML.QName")){return h
}var f=h.localPart||h.lp||null;
Jsonix.Util.Ensure.ensureString(f);
var e=h.namespaceURI||h.ns||"";
var g=h.prefix||h.p||"";
return new Jsonix.XML.QName(e,f,g)
};
Jsonix.XML.QName.fromObjectOrString=function(f,d,e){if(Jsonix.Util.Type.isString(f)){return Jsonix.XML.QName.fromString(f,d,e)
}else{return Jsonix.XML.QName.fromObject(f)
}};
Jsonix.XML.QName.key=function(f,e){Jsonix.Util.Ensure.ensureString(e);
if(f){var d=e.indexOf(":");
if(d>0&&d<e.length){localName=e.substring(d+1)
}else{localName=e
}return"{"+f+"}"+localName
}else{return e
}};
Jsonix.XML.Calendar=Jsonix.Class({year:NaN,month:NaN,day:NaN,hour:NaN,minute:NaN,second:NaN,fractionalSecond:NaN,timezone:NaN,date:null,initialize:function(f){Jsonix.Util.Ensure.ensureObject(f);
if(Jsonix.Util.Type.exists(f.year)){Jsonix.Util.Ensure.ensureInteger(f.year);
Jsonix.XML.Calendar.validateYear(f.year);
this.year=f.year
}else{this.year=NaN
}if(Jsonix.Util.Type.exists(f.month)){Jsonix.Util.Ensure.ensureInteger(f.month);
Jsonix.XML.Calendar.validateMonth(f.month);
this.month=f.month
}else{this.month=NaN
}if(Jsonix.Util.Type.exists(f.day)){Jsonix.Util.Ensure.ensureInteger(f.day);
if(Jsonix.Util.NumberUtils.isInteger(f.year)&&Jsonix.Util.NumberUtils.isInteger(f.month)){Jsonix.XML.Calendar.validateYearMonthDay(f.year,f.month,f.day)
}else{if(Jsonix.Util.NumberUtils.isInteger(f.month)){Jsonix.XML.Calendar.validateMonthDay(f.month,f.day)
}else{Jsonix.XML.Calendar.validateDay(f.day)
}}this.day=f.day
}else{this.day=NaN
}if(Jsonix.Util.Type.exists(f.hour)){Jsonix.Util.Ensure.ensureInteger(f.hour);
Jsonix.XML.Calendar.validateHour(f.hour);
this.hour=f.hour
}else{this.hour=NaN
}if(Jsonix.Util.Type.exists(f.minute)){Jsonix.Util.Ensure.ensureInteger(f.minute);
Jsonix.XML.Calendar.validateMinute(f.minute);
this.minute=f.minute
}else{this.minute=NaN
}if(Jsonix.Util.Type.exists(f.second)){Jsonix.Util.Ensure.ensureInteger(f.second);
Jsonix.XML.Calendar.validateSecond(f.second);
this.second=f.second
}else{this.second=NaN
}if(Jsonix.Util.Type.exists(f.fractionalSecond)){Jsonix.Util.Ensure.ensureNumber(f.fractionalSecond);
Jsonix.XML.Calendar.validateFractionalSecond(f.fractionalSecond);
this.fractionalSecond=f.fractionalSecond
}else{this.fractionalSecond=NaN
}if(Jsonix.Util.Type.exists(f.timezone)){if(Jsonix.Util.Type.isNaN(f.timezone)){this.timezone=NaN
}else{Jsonix.Util.Ensure.ensureInteger(f.timezone);
Jsonix.XML.Calendar.validateTimezone(f.timezone);
this.timezone=f.timezone
}}else{this.timezone=NaN
}var d=new Date(0);
d.setUTCFullYear(this.year||1970);
d.setUTCMonth(this.month-1||0);
d.setUTCDate(this.day||1);
d.setUTCHours(this.hour||0);
d.setUTCMinutes(this.minute||0);
d.setUTCSeconds(this.second||0);
d.setUTCMilliseconds((this.fractionalSecond||0)*1000);
var e=-60000*(this.timezone||0);
this.date=new Date(d.getTime()+e)
},CLASS_NAME:"Jsonix.XML.Calendar"});
Jsonix.XML.Calendar.MIN_TIMEZONE=-14*60;
Jsonix.XML.Calendar.MAX_TIMEZONE=14*60;
Jsonix.XML.Calendar.DAYS_IN_MONTH=[31,29,31,30,31,30,31,31,30,31,30,31];
Jsonix.XML.Calendar.fromObject=function(b){Jsonix.Util.Ensure.ensureObject(b);
if(Jsonix.Util.Type.isString(b.CLASS_NAME)&&b.CLASS_NAME==="Jsonix.XML.Calendar"){return b
}return new Jsonix.XML.Calendar(b)
};
Jsonix.XML.Calendar.validateYear=function(b){if(b===0){throw new Error("Invalid year ["+b+"]. Year must not be [0].")
}};
Jsonix.XML.Calendar.validateMonth=function(b){if(b<1||b>12){throw new Error("Invalid month ["+b+"]. Month must be in range [1, 12].")
}};
Jsonix.XML.Calendar.validateDay=function(b){if(b<1||b>31){throw new Error("Invalid day ["+b+"]. Day must be in range [1, 31].")
}};
Jsonix.XML.Calendar.validateMonthDay=function(f,d){Jsonix.XML.Calendar.validateMonth(f);
var e=Jsonix.XML.Calendar.DAYS_IN_MONTH[f-1];
if(d<1||d>Jsonix.XML.Calendar.DAYS_IN_MONTH[f-1]){throw new Error("Invalid day ["+d+"]. Day must be in range [1, "+e+"].")
}};
Jsonix.XML.Calendar.validateYearMonthDay=function(d,f,e){Jsonix.XML.Calendar.validateYear(d);
Jsonix.XML.Calendar.validateMonthDay(f,e)
};
Jsonix.XML.Calendar.validateHour=function(b){if(b<0||b>23){throw new Error("Invalid hour ["+b+"]. Hour must be in range [0, 23].")
}};
Jsonix.XML.Calendar.validateMinute=function(b){if(b<0||b>59){throw new Error("Invalid minute ["+b+"]. Minute must be in range [0, 59].")
}};
Jsonix.XML.Calendar.validateSecond=function(b){if(b<0||b>59){throw new Error("Invalid second ["+b+"]. Second must be in range [0, 59].")
}};
Jsonix.XML.Calendar.validateFractionalSecond=function(b){if(b<0||b>59){throw new Error("Invalid fractional second ["+b+"]. Fractional second must be in range [0, 1).")
}};
Jsonix.XML.Calendar.validateTimezone=function(b){if(b<Jsonix.XML.Calendar.MIN_TIMEZONE||b>Jsonix.XML.Calendar.MAX_TIMEZONE){throw new Error("Invalid timezone ["+b+"]. Timezone must not be in range ["+Jsonix.XML.Calendar.MIN_TIMEZONE+", "+Jsonix.XML.Calendar.MAX_TIMEZONE+"].")
}};
Jsonix.XML.Input=Jsonix.Class({root:null,node:null,attributes:null,eventType:null,pns:null,initialize:function(c){Jsonix.Util.Ensure.ensureExists(c);
this.root=c;
var d={"":""};
d[Jsonix.XML.XMLNS_P]=Jsonix.XML.XMLNS_NS;
this.pns=[d]
},hasNext:function(){if(this.node===null){return true
}else{if(this.node===this.root){var b=this.node.nodeType;
if(b===9&&this.eventType===8){return false
}else{if(b===1&&this.eventType===2){return false
}else{return true
}}}else{return true
}}},next:function(){if(this.eventType===null){return this.enter(this.root)
}if(this.eventType===7){var d=this.node.documentElement;
if(d){return this.enter(d)
}else{return this.leave(this.node)
}}else{if(this.eventType===1){var f=this.node.firstChild;
if(f){return this.enter(f)
}else{return this.leave(this.node)
}}else{if(this.eventType===2){var e=this.node.nextSibling;
if(e){return this.enter(e)
}else{return this.leave(this.node)
}}else{return this.leave(this.node)
}}}},enter:function(f){var e=f.nodeType;
this.node=f;
this.attributes=null;
if(e===1){this.eventType=1;
this.pushNS(f);
return this.eventType
}else{if(e===2){this.eventType=10;
return this.eventType
}else{if(e===3){var d=f.nodeValue;
if(Jsonix.Util.StringUtils.isEmpty(d)){this.eventType=6
}else{this.eventType=4
}return this.eventType
}else{if(e===4){this.eventType=12;
return this.eventType
}else{if(e===5){this.eventType=9;
return this.eventType
}else{if(e===6){this.eventType=15;
return this.eventType
}else{if(e===7){this.eventType=3;
return this.eventType
}else{if(e===8){this.eventType=5;
return this.eventType
}else{if(e===9){this.eventType=7;
return this.eventType
}else{if(e===10){this.eventType=12;
return this.eventType
}else{if(e===12){this.eventType=14;
return this.eventType
}else{throw new Error("Node type ["+e+"] is not supported.")
}}}}}}}}}}}},leave:function(h){if(h.nodeType===9){if(this.eventType==8){throw new Error("Invalid state.")
}else{this.node=h;
this.attributes=null;
this.eventType=8;
return this.eventType
}}else{if(h.nodeType===1){if(this.eventType==2){var g=h.nextSibling;
if(g){return this.enter(g)
}}else{this.node=h;
this.attributes=null;
this.eventType=2;
this.popNS();
return this.eventType
}}}var e=h.nextSibling;
if(e){return this.enter(e)
}else{var f=h.parentNode;
this.node=f;
this.attributes=null;
if(f.nodeType===9){this.eventType=8
}else{this.eventType=2
}return this.eventType
}},getName:function(){var b=this.node;
if(Jsonix.Util.Type.isString(b.nodeName)){if(Jsonix.Util.Type.isString(b.namespaceURI)){return new Jsonix.XML.QName(b.namespaceURI,b.nodeName)
}else{return new Jsonix.XML.QName(b.nodeName)
}}else{return null
}},getNameKey:function(){var b=this.node;
if(Jsonix.Util.Type.isString(b.nodeName)){return Jsonix.XML.QName.key(b.namespaceURI,b.nodeName)
}else{return null
}},getText:function(){return this.node.nodeValue
},nextTag:function(){var b=this.next();
while(b===7||b===4||b===12||b===6||b===3||b===5){b=this.next()
}if(b!==1&&b!==2){throw new Error("Expected start or end tag.")
}return b
},skipElement:function(){if(this.eventType!==Jsonix.XML.Input.START_ELEMENT){throw new Error("Parser must be on START_ELEMENT to skip element.")
}var d=1;
var c;
do{c=this.nextTag();
d+=(c===Jsonix.XML.Input.START_ELEMENT)?1:-1
}while(d>0);
return c
},getElementText:function(){if(this.eventType!=1){throw new Error("Parser must be on START_ELEMENT to read next text.")
}var c=this.next();
var d="";
while(c!==2){if(c===4||c===12||c===6||c===9){d=d+this.getText()
}else{if(c===3||c===5){}else{if(c===8){throw new Error("Unexpected end of document when reading element text content.")
}else{if(c===1){throw new Error("Element text content may not contain START_ELEMENT.")
}else{throw new Error("Unexpected event type ["+c+"].")
}}}}c=this.next()
}return d
},retrieveElement:function(){var b;
if(this.eventType===1){b=this.node
}else{if(this.eventType===10){b=this.node.parentNode
}else{throw new Error("Element can only be retrieved for START_ELEMENT or ATTRIBUTE nodes.")
}}return b
},retrieveAttributes:function(){var b;
if(this.attributes){b=this.attributes
}else{if(this.eventType===1){b=this.node.attributes;
this.attributes=b
}else{if(this.eventType===10){b=this.node.parentNode.attributes;
this.attributes=b
}else{throw new Error("Attributes can only be retrieved for START_ELEMENT or ATTRIBUTE nodes.")
}}}return b
},getAttributeCount:function(){var b=this.retrieveAttributes();
return b.length
},getAttributeName:function(d){var e=this.retrieveAttributes();
if(d<0||d>=e.length){throw new Error("Invalid attribute index ["+d+"].")
}var f=e[d];
if(Jsonix.Util.Type.isString(f.namespaceURI)){return new Jsonix.XML.QName(f.namespaceURI,f.nodeName)
}else{return new Jsonix.XML.QName(f.nodeName)
}},getAttributeNameKey:function(d){var e=this.retrieveAttributes();
if(d<0||d>=e.length){throw new Error("Invalid attribute index ["+d+"].")
}var f=e[d];
return Jsonix.XML.QName.key(f.namespaceURI,f.nodeName)
},getAttributeValue:function(d){var e=this.retrieveAttributes();
if(d<0||d>=e.length){throw new Error("Invalid attribute index ["+d+"].")
}var f=e[d];
return f.value
},getAttributeValueNS:null,getAttributeValueNSViaElement:function(d,e){var f=this.retrieveElement();
return f.getAttributeNS(d,e)
},getAttributeValueNSViaAttribute:function(d,e){var f=this.getAttributeNodeNS(d,e);
if(Jsonix.Util.Type.exists(f)){return f.nodeValue
}else{return null
}},getAttributeNodeNS:null,getAttributeNodeNSViaElement:function(d,e){var f=this.retrieveElement();
return f.getAttributeNodeNS(d,e)
},getAttributeNodeNSViaAttributes:function(o,p){var l=null;
var i=this.retrieveAttributes();
var m,k;
for(var n=0,j=i.length;
n<j;
++n){m=i[n];
if(m.namespaceURI===o){k=(m.prefix)?(m.prefix+":"+p):p;
if(k===m.nodeName){l=m;
break
}}}return l
},getElement:function(){if(this.eventType===1||this.eventType===2){this.eventType=2;
return this.node
}else{throw new Error("Parser must be on START_ELEMENT or END_ELEMENT to return current element.")
}},pushNS:function(x){var n=this.pns.length-1;
var t=this.pns[n];
var q=Jsonix.Util.Type.isObject(t)?n:t;
this.pns.push(q);
n++;
var w=true;
if(x.attributes){var u=x.attributes;
var p=u.length;
if(p>0){for(var v=0;
v<p;
v++){var y=u[v];
var s=y.nodeName;
var z=null;
var r=null;
var o=false;
if(s==="xmlns"){z="";
r=y.value;
o=true
}else{if(s.substring(0,6)==="xmlns:"){z=s.substring(6);
r=y.value;
o=true
}}if(o){if(w){q=Jsonix.Util.Type.cloneObject(this.pns[q],{});
this.pns[n]=q;
w=false
}q[z]=r
}}}}},popNS:function(){this.pns.pop()
},getNamespaceURI:function(d){var e=this.pns.length-1;
var f=this.pns[e];
f=Jsonix.Util.Type.isObject(f)?f:this.pns[f];
return f[d]
},CLASS_NAME:"Jsonix.XML.Input"});
Jsonix.XML.Input.prototype.getAttributeValueNS=(Jsonix.DOM.isDomImplementationAvailable())?Jsonix.XML.Input.prototype.getAttributeValueNSViaElement:Jsonix.XML.Input.prototype.getAttributeValueNSViaAttribute;
Jsonix.XML.Input.prototype.getAttributeNodeNS=(Jsonix.DOM.isDomImplementationAvailable())?Jsonix.XML.Input.prototype.getAttributeNodeNSViaElement:Jsonix.XML.Input.prototype.getAttributeNodeNSViaAttributes;
Jsonix.XML.Input.START_ELEMENT=1;
Jsonix.XML.Input.END_ELEMENT=2;
Jsonix.XML.Input.PROCESSING_INSTRUCTION=3;
Jsonix.XML.Input.CHARACTERS=4;
Jsonix.XML.Input.COMMENT=5;
Jsonix.XML.Input.SPACE=6;
Jsonix.XML.Input.START_DOCUMENT=7;
Jsonix.XML.Input.END_DOCUMENT=8;
Jsonix.XML.Input.ENTITY_REFERENCE=9;
Jsonix.XML.Input.ATTRIBUTE=10;
Jsonix.XML.Input.DTD=11;
Jsonix.XML.Input.CDATA=12;
Jsonix.XML.Input.NAMESPACE=13;
Jsonix.XML.Input.NOTATION_DECLARATION=14;
Jsonix.XML.Input.ENTITY_DECLARATION=15;
Jsonix.XML.Output=Jsonix.Class({document:null,documentElement:null,node:null,nodes:null,nsp:null,pns:null,namespacePrefixIndex:0,xmldom:null,initialize:function(e){if(typeof ActiveXObject!=="undefined"){this.xmldom=new ActiveXObject("Microsoft.XMLDOM")
}else{this.xmldom=null
}this.nodes=[];
var f={"":""};
f[Jsonix.XML.XMLNS_NS]=Jsonix.XML.XMLNS_P;
if(Jsonix.Util.Type.isObject(e)){if(Jsonix.Util.Type.isObject(e.namespacePrefixes)){Jsonix.Util.Type.cloneObject(e.namespacePrefixes,f)
}}this.nsp=[f];
var d={"":""};
d[Jsonix.XML.XMLNS_P]=Jsonix.XML.XMLNS_NS;
this.pns=[d]
},destroy:function(){this.xmldom=null
},writeStartDocument:function(){var b=Jsonix.DOM.createDocument();
this.document=b;
return this.push(b)
},writeEndDocument:function(){return this.pop()
},writeStartElement:function(p){Jsonix.Util.Ensure.ensureObject(p);
var j=p.localPart||p.lp||null;
Jsonix.Util.Ensure.ensureString(j);
var n=p.namespaceURI||p.ns||null;
var i=Jsonix.Util.Type.isString(n)?n:"";
var k=p.prefix||p.p;
var m=this.getPrefix(i,k);
var l=(!m?j:m+":"+j);
var o;
if(Jsonix.Util.Type.isFunction(this.document.createElementNS)){o=this.document.createElementNS(i,l)
}else{if(this.xmldom){o=this.xmldom.createNode(1,l,i)
}else{throw new Error("Could not create an element node.")
}}this.peek().appendChild(o);
this.push(o);
this.declareNamespace(i,m);
if(this.documentElement===null){this.documentElement=o;
this.declareNamespaces()
}return o
},writeEndElement:function(){return this.pop()
},writeCharacters:function(c){var d;
if(Jsonix.Util.Type.isFunction(this.document.createTextNode)){d=this.document.createTextNode(c)
}else{if(this.xmldom){d=this.xmldom.createTextNode(c)
}else{throw new Error("Could not create a text node.")
}}this.peek().appendChild(d);
return d
},writeAttribute:function(t,k){Jsonix.Util.Ensure.ensureString(k);
Jsonix.Util.Ensure.ensureObject(t);
var n=t.localPart||t.lp||null;
Jsonix.Util.Ensure.ensureString(n);
var l=t.namespaceURI||t.ns||null;
var q=Jsonix.Util.Type.isString(l)?l:"";
var s=t.prefix||t.p||null;
var m=this.getPrefix(q,s);
var o=(!m?n:m+":"+n);
var p=this.peek();
if(q===""){p.setAttribute(o,k)
}else{if(p.setAttributeNS){p.setAttributeNS(q,o,k)
}else{if(this.xmldom){var r=this.document.createNode(2,o,q);
r.nodeValue=k;
p.setAttributeNode(r)
}else{if(q===Jsonix.XML.XMLNS_NS){p.setAttribute(o,k)
}else{throw new Error("The [setAttributeNS] method is not implemented")
}}}this.declareNamespace(q,m)
}},writeNode:function(c){var d;
if(Jsonix.Util.Type.exists(this.document.importNode)){d=this.document.importNode(c,true)
}else{d=c
}this.peek().appendChild(d);
return d
},push:function(b){this.nodes.push(b);
this.pushNS();
return b
},peek:function(){return this.nodes[this.nodes.length-1]
},pop:function(){this.popNS();
var b=this.nodes.pop();
return b
},pushNS:function(){var k=this.nsp.length-1;
var g=this.pns.length-1;
var h=this.nsp[k];
var j=this.pns[g];
var l=Jsonix.Util.Type.isObject(h)?k:h;
var i=Jsonix.Util.Type.isObject(j)?g:j;
this.nsp.push(l);
this.pns.push(i)
},popNS:function(){this.nsp.pop();
this.pns.pop()
},declareNamespaces:function(){var f=this.nsp.length-1;
var h=this.nsp[f];
h=Jsonix.Util.Type.isNumber(h)?this.nsp[h]:h;
var e,g;
for(e in h){if(h.hasOwnProperty(e)){g=h[e];
this.declareNamespace(e,g)
}}},declareNamespace:function(j,i){var f=this.pns.length-1;
var h=this.pns[f];
var g;
if(Jsonix.Util.Type.isNumber(h)){g=true;
h=this.pns[h]
}else{g=false
}if(h[i]!==j){if(i===""){this.writeAttribute({lp:Jsonix.XML.XMLNS_P},j)
}else{this.writeAttribute({ns:Jsonix.XML.XMLNS_NS,lp:i,p:Jsonix.XML.XMLNS_P},j)
}if(g){h=Jsonix.Util.Type.cloneObject(h,{});
this.pns[f]=h
}h[i]=j
}},getPrefix:function(j,i){var g=this.nsp.length-1;
var k=this.nsp[g];
var h;
if(Jsonix.Util.Type.isNumber(k)){h=true;
k=this.nsp[k]
}else{h=false
}if(Jsonix.Util.Type.isString(i)){var l=k[j];
if(i===l){}else{if(h){k=Jsonix.Util.Type.cloneObject(k,{});
this.nsp[g]=k
}k[j]=i
}}else{i=k[j];
if(!Jsonix.Util.Type.exists(i)){i="p"+(this.namespacePrefixIndex++);
if(h){k=Jsonix.Util.Type.cloneObject(k,{});
this.nsp[g]=k
}k[j]=i
}}return i
},getNamespaceURI:function(d){var e=this.pns.length-1;
var f=this.pns[e];
f=Jsonix.Util.Type.isObject(f)?f:this.pns[f];
return f[d]
},CLASS_NAME:"Jsonix.XML.Output"});
Jsonix.Mapping={};
Jsonix.Mapping.Style=Jsonix.Class({marshaller:null,unmarshaller:null,module:null,elementInfo:null,classInfo:null,enumLeafInfo:null,anyAttributePropertyInfo:null,anyElementPropertyInfo:null,attributePropertyInfo:null,elementMapPropertyInfo:null,elementPropertyInfo:null,elementsPropertyInfo:null,elementRefPropertyInfo:null,elementRefsPropertyInfo:null,valuePropertyInfo:null,initialize:function(){},CLASS_NAME:"Jsonix.Mapping.Style"});
Jsonix.Mapping.Style.STYLES={};
Jsonix.Mapping.Styled=Jsonix.Class({mappingStyle:null,initialize:function(d){if(Jsonix.Util.Type.exists(d)){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.isString(d.mappingStyle)){var c=Jsonix.Mapping.Style.STYLES[d.mappingStyle];
if(!c){throw new Error("Mapping style ["+d.mappingStyle+"] is not known.")
}this.mappingStyle=c
}else{if(Jsonix.Util.Type.isObject(d.mappingStyle)){this.mappingStyle=d.mappingStyle
}}}if(!this.mappingStyle){this.mappingStyle=Jsonix.Mapping.Style.STYLES.standard
}},CLASS_NAME:"Jsonix.Mapping.Styled"});
Jsonix.Binding={};
Jsonix.Binding.Marshalls={};
Jsonix.Binding.Marshalls.Element=Jsonix.Class({marshalElement:function(o,u,t,l){var q=this.convertToTypedNamedValue(o,u,t,l);
var p=q.typeInfo;
var v=undefined;
if(u.supportXsiType&&Jsonix.Util.Type.exists(q.value)){var r=u.getTypeInfoByValue(q.value);
if(r&&r.typeName){v=r
}}var m=v||p;
if(m){t.writeStartElement(q.name);
if(v&&p!==v){var n=v.typeName;
var s=Jsonix.Schema.XSD.QName.INSTANCE.print(n,u,t,l);
t.writeAttribute(Jsonix.Schema.XSI.TYPE_QNAME,s)
}if(Jsonix.Util.Type.exists(q.value)){m.marshal(q.value,u,t,l)
}t.writeEndElement()
}else{throw new Error("Element ["+q.name.key+"] is not known in this context, could not determine its type.")
}},getTypeInfoByElementName:function(f,e,g){var h=e.getElementInfo(f,g);
if(Jsonix.Util.Type.exists(h)){return h.typeInfo
}else{return undefined
}}});
Jsonix.Binding.Marshalls.Element.AsElementRef=Jsonix.Class({convertToTypedNamedValue:function(i,f,g,j){Jsonix.Util.Ensure.ensureObject(i);
var h=this.convertToNamedValue(i,f,g,j);
return{name:h.name,value:h.value,typeInfo:this.getTypeInfoByElementName(h.name,f,j)}
},convertToNamedValue:function(j,m,h,l){var n;
var k;
if(Jsonix.Util.Type.exists(j.name)&&!Jsonix.Util.Type.isUndefined(j.value)){n=Jsonix.XML.QName.fromObjectOrString(j.name,m);
k=Jsonix.Util.Type.exists(j.value)?j.value:null;
return{name:n,value:k}
}else{for(var i in j){if(j.hasOwnProperty(i)){n=Jsonix.XML.QName.fromObjectOrString(i,m);
k=j[i];
return{name:n,value:k}
}}}throw new Error("Invalid element value ["+j+"]. Element values must either have {name:'myElementName', value: elementValue} or {myElementName:elementValue} structure.")
}});
Jsonix.Binding.Unmarshalls={};
Jsonix.Binding.Unmarshalls.WrapperElement=Jsonix.Class({mixed:false,unmarshalWrapperElement:function(f,g,j,h){var i=g.next();
while(i!==Jsonix.XML.Input.END_ELEMENT){if(i===Jsonix.XML.Input.START_ELEMENT){this.unmarshalElement(f,g,j,h)
}else{if(this.mixed&&(i===Jsonix.XML.Input.CHARACTERS||i===Jsonix.XML.Input.CDATA||i===Jsonix.XML.Input.ENTITY_REFERENCE)){h(g.getText())
}else{if(i===Jsonix.XML.Input.SPACE||i===Jsonix.XML.Input.COMMENT||i===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+i+"].")
}}}i=g.next()
}}});
Jsonix.Binding.Unmarshalls.Element=Jsonix.Class({allowTypedObject:true,allowDom:false,unmarshalElement:function(q,o,j,l){if(o.eventType!=1){throw new Error("Parser must be on START_ELEMENT to read next element.")
}var k=this.getTypeInfoByInputElement(q,o,j);
var r=o.getName();
var p;
if(this.allowTypedObject){if(Jsonix.Util.Type.exists(k)){var n=k.unmarshal(q,o,j);
var m={name:r,value:n,typeInfo:k};
p=this.convertFromTypedNamedValue(m,q,o,j)
}else{if(this.allowDom){p=o.getElement()
}else{throw new Error("Element ["+r.toString()+"] could not be unmarshalled as is not known in this context and the property does not allow DOM content.")
}}}else{if(this.allowDom){p=o.getElement()
}else{throw new Error("Element ["+r.toString()+"] could not be unmarshalled as the property neither allows typed objects nor DOM as content. This is a sign of invalid mappings, do not use [allowTypedObject : false] and [allowDom : false] at the same time.")
}}l(p)
},getTypeInfoByInputElement:function(n,p,m){var i=null;
if(n.supportXsiType){var j=p.getAttributeValueNS(Jsonix.Schema.XSI.NAMESPACE_URI,Jsonix.Schema.XSI.TYPE);
if(Jsonix.Util.StringUtils.isNotBlank(j)){var k=Jsonix.Schema.XSD.QName.INSTANCE.parse(j,n,p,m);
i=n.getTypeInfoByTypeNameKey(k.key)
}}var o=p.getName();
var l=i?i:this.getTypeInfoByElementName(o,n,m);
return l
},getTypeInfoByElementName:function(f,e,g){var h=e.getElementInfo(f,g);
if(Jsonix.Util.Type.exists(h)){return h.typeInfo
}else{return undefined
}}});
Jsonix.Binding.Unmarshalls.Element.AsElementRef=Jsonix.Class({convertFromTypedNamedValue:function(g,e,f,h){return{name:g.name,value:g.value}
}});
Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef=Jsonix.Class({convertFromTypedNamedValue:function(i,l,g,k){var h=i.name.toCanonicalString(l);
var j={};
j[h]=i.value;
return j
}});
Jsonix.Binding.Marshaller=Jsonix.Class(Jsonix.Binding.Marshalls.Element,Jsonix.Binding.Marshalls.Element.AsElementRef,{context:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
this.context=b
},marshalString:function(e){var d=this.marshalDocument(e);
var f=Jsonix.DOM.serialize(d);
return f
},marshalDocument:function(d){var e=new Jsonix.XML.Output({namespacePrefixes:this.context.namespacePrefixes});
var f=e.writeStartDocument();
this.marshalElement(d,this.context,e,undefined);
e.writeEndDocument();
return f
},CLASS_NAME:"Jsonix.Binding.Marshaller"});
Jsonix.Binding.Marshaller.Simplified=Jsonix.Class(Jsonix.Binding.Marshaller,{CLASS_NAME:"Jsonix.Binding.Marshaller.Simplified"});
Jsonix.Binding.Unmarshaller=Jsonix.Class(Jsonix.Binding.Unmarshalls.Element,Jsonix.Binding.Unmarshalls.Element.AsElementRef,{context:null,allowTypedObject:true,allowDom:false,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
this.context=b
},unmarshalString:function(c){Jsonix.Util.Ensure.ensureString(c);
var d=Jsonix.DOM.parse(c);
return this.unmarshalDocument(d)
},unmarshalURL:function(d,f,e){Jsonix.Util.Ensure.ensureString(d);
Jsonix.Util.Ensure.ensureFunction(f);
if(Jsonix.Util.Type.exists(e)){Jsonix.Util.Ensure.ensureObject(e)
}that=this;
Jsonix.DOM.load(d,function(a){f(that.unmarshalDocument(a))
},e)
},unmarshalFile:function(g,h,e){if(typeof _jsonix_fs==="undefined"){throw new Error("File unmarshalling is only available in environments which support file systems.")
}Jsonix.Util.Ensure.ensureString(g);
Jsonix.Util.Ensure.ensureFunction(h);
if(Jsonix.Util.Type.exists(e)){Jsonix.Util.Ensure.ensureObject(e)
}that=this;
var f=_jsonix_fs;
f.readFile(g,e,function(d,c){if(d){throw d
}else{var a=c.toString();
var b=Jsonix.DOM.parse(a);
h(that.unmarshalDocument(b))
}})
},unmarshalDocument:function(i,j){var f=new Jsonix.XML.Input(i);
var g=null;
var h=function(a){g=a
};
f.nextTag();
this.unmarshalElement(this.context,f,j,h);
return g
},CLASS_NAME:"Jsonix.Binding.Unmarshaller"});
Jsonix.Binding.Unmarshaller.Simplified=Jsonix.Class(Jsonix.Binding.Unmarshaller,Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef,{CLASS_NAME:"Jsonix.Binding.Unmarshaller.Simplified"});
Jsonix.Model.TypeInfo=Jsonix.Class({name:null,baseTypeInfo:null,initialize:function(){},isBasedOn:function(c){var d=this;
while(d){if(c===d){return true
}d=d.baseTypeInfo
}return false
},CLASS_NAME:"Jsonix.Model.TypeInfo"});
Jsonix.Model.ClassInfo=Jsonix.Class(Jsonix.Model.TypeInfo,Jsonix.Mapping.Styled,{name:null,localName:null,typeName:null,instanceFactory:null,properties:null,propertiesMap:null,structure:null,targetNamespace:"",defaultElementNamespaceURI:"",defaultAttributeNamespaceURI:"",built:false,initialize:function(w,m){Jsonix.Model.TypeInfo.prototype.initialize.apply(this,[]);
Jsonix.Mapping.Styled.prototype.initialize.apply(this,[m]);
Jsonix.Util.Ensure.ensureObject(w);
var v=w.name||w.n||undefined;
Jsonix.Util.Ensure.ensureString(v);
this.name=v;
var q=w.localName||w.ln||null;
this.localName=q;
var r=w.defaultElementNamespaceURI||w.dens||w.targetNamespace||w.tns||"";
this.defaultElementNamespaceURI=r;
var n=w.targetNamespace||w.tns||w.defaultElementNamespaceURI||w.dens||this.defaultElementNamespaceURI;
this.targetNamespace=n;
var p=w.defaultAttributeNamespaceURI||w.dans||"";
this.defaultAttributeNamespaceURI=p;
var u=w.baseTypeInfo||w.bti||null;
this.baseTypeInfo=u;
var t=w.instanceFactory||w.inF||undefined;
if(Jsonix.Util.Type.exists(t)){Jsonix.Util.Ensure.ensureFunction(t);
this.instanceFactory=t
}var o=w.typeName||w.tn||undefined;
if(Jsonix.Util.Type.exists(o)){if(Jsonix.Util.Type.isString(o)){this.typeName=new Jsonix.XML.QName(this.targetNamespace,o)
}else{this.typeName=Jsonix.XML.QName.fromObject(o)
}}else{if(Jsonix.Util.Type.exists(q)){this.typeName=new Jsonix.XML.QName(n,q)
}}this.properties=[];
this.propertiesMap={};
var x=w.propertyInfos||w.ps||[];
Jsonix.Util.Ensure.ensureArray(x);
for(var s=0;
s<x.length;
s++){this.p(x[s])
}},getPropertyInfoByName:function(b){return this.propertiesMap[b]
},destroy:function(){},build:function(i,j){if(!this.built){this.baseTypeInfo=i.resolveTypeInfo(this.baseTypeInfo,j);
if(Jsonix.Util.Type.exists(this.baseTypeInfo)){this.baseTypeInfo.build(i,j)
}for(var f=0;
f<this.properties.length;
f++){var h=this.properties[f];
h.build(i,j)
}var g={elements:null,attributes:{},anyAttribute:null,value:null,any:null};
this.buildStructure(i,g);
this.structure=g
}},buildStructure:function(h,f){if(Jsonix.Util.Type.exists(this.baseTypeInfo)){this.baseTypeInfo.buildStructure(h,f)
}for(var e=0;
e<this.properties.length;
e++){var g=this.properties[e];
g.buildStructure(h,f)
}},unmarshal:function(B,w){this.build(B);
var p;
if(this.instanceFactory){p=new this.instanceFactory()
}else{p={TYPE_NAME:this.name}
}if(w.eventType!==1){throw new Error("Parser must be on START_ELEMENT to read a class info.")
}if(Jsonix.Util.Type.exists(this.structure.attributes)){var D=w.getAttributeCount();
if(D!==0){for(var z=0;
z<D;
z++){var u=w.getAttributeNameKey(z);
if(Jsonix.Util.Type.exists(this.structure.attributes[u])){var A=w.getAttributeValue(z);
if(Jsonix.Util.Type.isString(A)){var C=this.structure.attributes[u];
this.unmarshalPropertyValue(B,w,C,p,A)
}}}}}if(Jsonix.Util.Type.exists(this.structure.anyAttribute)){var y=this.structure.anyAttribute;
this.unmarshalProperty(B,w,y,p)
}if(Jsonix.Util.Type.exists(this.structure.elements)){var v=w.next();
while(v!==Jsonix.XML.Input.END_ELEMENT){if(v===Jsonix.XML.Input.START_ELEMENT){var q=w.getNameKey();
if(Jsonix.Util.Type.exists(this.structure.elements[q])){var r=this.structure.elements[q];
this.unmarshalProperty(B,w,r,p)
}else{if(Jsonix.Util.Type.exists(this.structure.any)){var s=this.structure.any;
this.unmarshalProperty(B,w,s,p)
}else{v=w.skipElement()
}}}else{if((v===Jsonix.XML.Input.CHARACTERS||v===Jsonix.XML.Input.CDATA||v===Jsonix.XML.Input.ENTITY_REFERENCE)){if(Jsonix.Util.Type.exists(this.structure.mixed)){var x=this.structure.mixed;
this.unmarshalProperty(B,w,x,p)
}}else{if(v===Jsonix.XML.Input.SPACE||v===Jsonix.XML.Input.COMMENT||v===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+v+"].")
}}}v=w.next()
}}else{if(Jsonix.Util.Type.exists(this.structure.value)){var t=this.structure.value;
this.unmarshalProperty(B,w,t,p)
}else{w.nextTag()
}}if(w.eventType!==2){throw new Error("Illegal state: must be END_ELEMENT.")
}return p
},unmarshalProperty:function(i,j,h,g){var f=h.unmarshal(i,j,this);
h.setProperty(g,f)
},unmarshalPropertyValue:function(k,l,i,h,j){var g=i.unmarshalValue(j,k,l,this);
i.setProperty(h,g)
},marshal:function(l,q,p,k){if(this.isMarshallable(l,q,k)){if(Jsonix.Util.Type.exists(this.baseTypeInfo)){this.baseTypeInfo.marshal(l,q,p)
}for(var n=0;
n<this.properties.length;
n++){var m=this.properties[n];
var o=l[m.name];
if(Jsonix.Util.Type.exists(o)){m.marshal(o,q,p,this)
}}}else{if(this.structure.value){var j=this.structure.value;
j.marshal(l,q,p,this)
}else{if(this.properties.length===1){var r=this.properties[0];
r.marshal(l,q,p,this)
}else{throw new Error("The passed value ["+l+"] is not an object and there is no single suitable property to marshal it.")
}}}},isMarshallable:function(f,e,d){return this.isInstance(f,e,d)||(Jsonix.Util.Type.isObject(f)&&!Jsonix.Util.Type.isArray(f))
},isInstance:function(f,e,d){if(this.instanceFactory){return f instanceof this.instanceFactory
}else{return Jsonix.Util.Type.isObject(f)&&Jsonix.Util.Type.isString(f.TYPE_NAME)&&f.TYPE_NAME===this.name
}},b:function(b){Jsonix.Util.Ensure.ensureObject(b);
this.baseTypeInfo=b;
return this
},ps:function(){return this
},p:function(e){Jsonix.Util.Ensure.ensureObject(e);
if(e instanceof Jsonix.Model.PropertyInfo){this.addProperty(e)
}else{e=Jsonix.Util.Type.cloneObject(e);
var f=e.type||e.t||"element";
if(Jsonix.Util.Type.isFunction(this.propertyInfoCreators[f])){var d=this.propertyInfoCreators[f];
d.call(this,e)
}else{throw new Error("Unknown property info type ["+f+"].")
}}},aa:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.anyAttributePropertyInfo(b,{mappingStyle:this.mappingStyle}))
},ae:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.anyElementPropertyInfo(b,{mappingStyle:this.mappingStyle}))
},a:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.attributePropertyInfo(b,{mappingStyle:this.mappingStyle}))
},em:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.elementMapPropertyInfo(b,{mappingStyle:this.mappingStyle}))
},e:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.elementPropertyInfo(b,{mappingStyle:this.mappingStyle}))
},es:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.elementsPropertyInfo(b,{mappingStyle:this.mappingStyle}))
},er:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.elementRefPropertyInfo(b,{mappingStyle:this.mappingStyle}))
},ers:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.elementRefsPropertyInfo(b,{mappingStyle:this.mappingStyle}))
},v:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new this.mappingStyle.valuePropertyInfo(b,{mappingStyle:this.mappingStyle}))
},addDefaultNamespaces:function(b){if(Jsonix.Util.Type.isObject(b)){if(!Jsonix.Util.Type.isString(b.defaultElementNamespaceURI)){b.defaultElementNamespaceURI=this.defaultElementNamespaceURI
}if(!Jsonix.Util.Type.isString(b.defaultAttributeNamespaceURI)){b.defaultAttributeNamespaceURI=this.defaultAttributeNamespaceURI
}}},addProperty:function(b){this.properties.push(b);
this.propertiesMap[b.name]=b;
return this
},CLASS_NAME:"Jsonix.Model.ClassInfo"});
Jsonix.Model.ClassInfo.prototype.propertyInfoCreators={aa:Jsonix.Model.ClassInfo.prototype.aa,anyAttribute:Jsonix.Model.ClassInfo.prototype.aa,ae:Jsonix.Model.ClassInfo.prototype.ae,anyElement:Jsonix.Model.ClassInfo.prototype.ae,a:Jsonix.Model.ClassInfo.prototype.a,attribute:Jsonix.Model.ClassInfo.prototype.a,em:Jsonix.Model.ClassInfo.prototype.em,elementMap:Jsonix.Model.ClassInfo.prototype.em,e:Jsonix.Model.ClassInfo.prototype.e,element:Jsonix.Model.ClassInfo.prototype.e,es:Jsonix.Model.ClassInfo.prototype.es,elements:Jsonix.Model.ClassInfo.prototype.es,er:Jsonix.Model.ClassInfo.prototype.er,elementRef:Jsonix.Model.ClassInfo.prototype.er,ers:Jsonix.Model.ClassInfo.prototype.ers,elementRefs:Jsonix.Model.ClassInfo.prototype.ers,v:Jsonix.Model.ClassInfo.prototype.v,value:Jsonix.Model.ClassInfo.prototype.v};
Jsonix.Model.EnumLeafInfo=Jsonix.Class(Jsonix.Model.TypeInfo,{name:null,baseTypeInfo:"String",entries:null,keys:null,values:null,built:false,initialize:function(f){Jsonix.Model.TypeInfo.prototype.initialize.apply(this,[]);
Jsonix.Util.Ensure.ensureObject(f);
var g=f.name||f.n||undefined;
Jsonix.Util.Ensure.ensureString(g);
this.name=g;
var e=f.baseTypeInfo||f.bti||"String";
this.baseTypeInfo=e;
var h=f.values||f.vs||undefined;
Jsonix.Util.Ensure.ensureExists(h);
if(!(Jsonix.Util.Type.isObject(h)||Jsonix.Util.Type.isArray(h))){throw new Error("Enum values must be either an array or an object.")
}else{this.entries=h
}},build:function(r,q){if(!this.built){this.baseTypeInfo=r.resolveTypeInfo(this.baseTypeInfo,q);
this.baseTypeInfo.build(r,q);
var n=this.entries;
var p={};
var j=[];
var k=[];
var o=0;
var l;
var m;
if(Jsonix.Util.Type.isArray(n)){for(o=0;
o<n.length;
o++){m=n[o];
if(Jsonix.Util.Type.isString(m)){l=m;
if(!(Jsonix.Util.Type.isFunction(this.baseTypeInfo.parse))){throw new Error("Enum value is provided as string but the base type ["+this.baseTypeInfo.name+"] of the enum info ["+this.name+"] does not implement the parse method.")
}m=this.baseTypeInfo.parse(m,r,null,this)
}else{if(this.baseTypeInfo.isInstance(m,r,this)){if(!(Jsonix.Util.Type.isFunction(this.baseTypeInfo.print))){throw new Error("The base type ["+this.baseTypeInfo.name+"] of the enum info ["+this.name+"] does not implement the print method, unable to produce the enum key as string.")
}l=this.baseTypeInfo.print(m,r,null,this)
}else{throw new Error("Enum value ["+m+"] is not an instance of the enum base type ["+this.baseTypeInfo.name+"].")
}}p[l]=m;
j[o]=l;
k[o]=m
}}else{if(Jsonix.Util.Type.isObject(n)){for(l in n){if(n.hasOwnProperty(l)){m=n[l];
if(Jsonix.Util.Type.isString(m)){if(!(Jsonix.Util.Type.isFunction(this.baseTypeInfo.parse))){throw new Error("Enum value is provided as string but the base type ["+this.baseTypeInfo.name+"] of the enum info ["+this.name+"] does not implement the parse method.")
}m=this.baseTypeInfo.parse(m,r,null,this)
}else{if(!this.baseTypeInfo.isInstance(m,r,this)){throw new Error("Enum value ["+m+"] is not an instance of the enum base type ["+this.baseTypeInfo.name+"].")
}}p[l]=m;
j[o]=l;
k[o]=m;
o++
}}}else{throw new Error("Enum values must be either an array or an object.")
}}this.entries=p;
this.keys=j;
this.values=k;
this.built=true
}},unmarshal:function(e,f,h){var g=f.getElementText();
return this.parse(g,e,f,h)
},marshal:function(g,e,f,h){if(Jsonix.Util.Type.exists(g)){f.writeCharacters(this.reprint(g,e,f,h))
}},reprint:function(g,e,f,h){if(Jsonix.Util.Type.isString(g)&&!this.isInstance(g,e,h)){return this.print(this.parse(g,e,null,h),e,f,h)
}else{return this.print(g,e,f,h)
}},print:function(h,j,g,i){for(var f=0;
f<this.values.length;
f++){if(this.values[f]===h){return this.keys[f]
}}throw new Error("Value ["+h+"] is invalid for the enum type ["+this.name+"].")
},parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
if(this.entries.hasOwnProperty(g)){return this.entries[g]
}else{throw new Error("Value ["+g+"] is invalid for the enum type ["+this.name+"].")
}},isInstance:function(g,e,h){for(var f=0;
f<this.values.length;
f++){if(this.values[f]===g){return true
}}return false
},CLASS_NAME:"Jsonix.Model.EnumLeafInfo"});
Jsonix.Model.ElementInfo=Jsonix.Class({elementName:null,typeInfo:null,substitutionHead:null,scope:null,built:false,initialize:function(g){Jsonix.Util.Ensure.ensureObject(g);
var j=g.defaultElementNamespaceURI||g.dens||"";
this.defaultElementNamespaceURI=j;
var h=g.elementName||g.en||undefined;
if(Jsonix.Util.Type.isObject(h)){this.elementName=Jsonix.XML.QName.fromObject(h)
}else{Jsonix.Util.Ensure.ensureString(h);
this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,h)
}var k=g.typeInfo||g.ti||"String";
this.typeInfo=k;
var l=g.substitutionHead||g.sh||null;
this.substitutionHead=l;
var i=g.scope||g.sc||null;
this.scope=i
},build:function(c,d){if(!this.built){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d);
this.scope=c.resolveTypeInfo(this.scope,d);
this.built=true
}},CLASS_NAME:"Jsonix.Model.ElementInfo"});
Jsonix.Model.PropertyInfo=Jsonix.Class({name:null,collection:false,targetNamespace:"",defaultElementNamespaceURI:"",defaultAttributeNamespaceURI:"",built:false,initialize:function(r){Jsonix.Util.Ensure.ensureObject(r);
var p=r.name||r.n||undefined;
Jsonix.Util.Ensure.ensureString(p);
this.name=p;
var m=r.defaultElementNamespaceURI||r.dens||r.targetNamespace||r.tns||"";
this.defaultElementNamespaceURI=m;
var j=r.targetNamespace||r.tns||r.defaultElementNamespaceURI||r.dens||this.defaultElementNamespaceURI;
this.targetNamespace=j;
var k=r.defaultAttributeNamespaceURI||r.dans||"";
this.defaultAttributeNamespaceURI=k;
var o=r.collection||r.col||false;
this.collection=o;
var n=r.required||r.rq||false;
this.required=n;
if(this.collection){var l;
if(Jsonix.Util.Type.isNumber(r.minOccurs)){l=r.minOccurs
}else{if(Jsonix.Util.Type.isNumber(r.mno)){l=r.mno
}else{l=1
}}this.minOccurs=l;
var q;
if(Jsonix.Util.Type.isNumber(r.maxOccurs)){q=r.maxOccurs
}else{if(Jsonix.Util.Type.isNumber(r.mxo)){q=r.mxo
}else{q=null
}}this.maxOccurs=q
}},build:function(c,d){if(!this.built){this.doBuild(c,d);
this.built=true
}},doBuild:function(c,d){throw new Error("Abstract method [doBuild].")
},buildStructure:function(c,d){throw new Error("Abstract method [buildStructure].")
},setProperty:function(d,f){if(Jsonix.Util.Type.exists(f)){if(this.collection){Jsonix.Util.Ensure.ensureArray(f,"Collection property requires an array value.");
if(!Jsonix.Util.Type.exists(d[this.name])){d[this.name]=[]
}for(var e=0;
e<f.length;
e++){d[this.name].push(f[e])
}}else{d[this.name]=f
}}},CLASS_NAME:"Jsonix.Model.PropertyInfo"});
Jsonix.Model.AnyAttributePropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[b])
},unmarshal:function(m,p,l){var n=p.getAttributeCount();
if(n===0){return null
}else{var j={};
for(var o=0;
o<n;
o++){var k=p.getAttributeValue(o);
if(Jsonix.Util.Type.isString(k)){var i=this.convertFromAttributeName(p.getAttributeName(o),m,p,l);
j[i]=k
}}return j
}},marshal:function(j,l,n,k){if(!Jsonix.Util.Type.isObject(j)){return
}for(var h in j){if(j.hasOwnProperty(h)){var i=j[h];
if(Jsonix.Util.Type.isString(i)){var m=this.convertToAttributeName(h,l,n,k);
n.writeAttribute(m,i)
}}}},convertFromAttributeName:function(e,h,f,g){return e.key
},convertToAttributeName:function(e,h,f,g){return Jsonix.XML.QName.fromObjectOrString(e,h)
},doBuild:function(c,d){},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
d.anyAttribute=this
},CLASS_NAME:"Jsonix.Model.AnyAttributePropertyInfo"});
Jsonix.Model.AnyAttributePropertyInfo.Simplified=Jsonix.Class(Jsonix.Model.AnyAttributePropertyInfo,{convertFromAttributeName:function(e,h,f,g){return e.toCanonicalString(h)
}});
Jsonix.Model.SingleTypePropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{typeInfo:"String",initialize:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[d]);
var c=d.typeInfo||d.ti||"String";
this.typeInfo=c
},doBuild:function(c,d){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d)
},unmarshalValue:function(g,e,f,h){return this.parse(g,e,f,h)
},parse:function(g,e,f,h){return this.typeInfo.parse(g,e,f,h)
},print:function(g,e,f,h){return this.typeInfo.reprint(g,e,f,h)
},CLASS_NAME:"Jsonix.Model.SingleTypePropertyInfo"});
Jsonix.Model.AttributePropertyInfo=Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo,{attributeName:null,initialize:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this,[d]);
var c=d.attributeName||d.an||undefined;
if(Jsonix.Util.Type.isObject(c)){this.attributeName=Jsonix.XML.QName.fromObject(c)
}else{if(Jsonix.Util.Type.isString(c)){this.attributeName=new Jsonix.XML.QName(this.defaultAttributeNamespaceURI,c)
}else{this.attributeName=new Jsonix.XML.QName(this.defaultAttributeNamespaceURI,this.name)
}}},unmarshal:function(m,p,k){var n=p.getAttributeCount();
var j=null;
for(var o=0;
o<n;
o++){var i=p.getAttributeNameKey(o);
if(this.attributeName.key===i){var l=p.getAttributeValue(o);
if(Jsonix.Util.Type.isString(l)){j=this.unmarshalValue(l,m,p,k)
}}}return j
},marshal:function(g,e,f,h){if(Jsonix.Util.Type.exists(g)){f.writeAttribute(this.attributeName,this.print(g,e,f,h))
}},buildStructure:function(f,e){Jsonix.Util.Ensure.ensureObject(e);
Jsonix.Util.Ensure.ensureObject(e.attributes);
var d=this.attributeName.key;
e.attributes[d]=this
},CLASS_NAME:"Jsonix.Model.AttributePropertyInfo"});
Jsonix.Model.ValuePropertyInfo=Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo,{initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this,[b])
},unmarshal:function(e,f,h){var g=f.getElementText();
return this.unmarshalValue(g,e,f,h)
},marshal:function(g,e,f,h){if(!Jsonix.Util.Type.exists(g)){return
}f.writeCharacters(this.print(g,e,f,h))
},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.elements)){throw new Error("The structure already defines element mappings, it cannot define a value property.")
}else{d.value=this
}},CLASS_NAME:"Jsonix.Model.ValuePropertyInfo"});
Jsonix.Model.AbstractElementsPropertyInfo=Jsonix.Class(Jsonix.Binding.Unmarshalls.Element,Jsonix.Binding.Unmarshalls.WrapperElement,Jsonix.Model.PropertyInfo,{wrapperElementName:null,allowDom:false,allowTypedObject:true,mixed:false,initialize:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[c]);
var d=c.wrapperElementName||c.wen||undefined;
if(Jsonix.Util.Type.isObject(d)){this.wrapperElementName=Jsonix.XML.QName.fromObject(d)
}else{if(Jsonix.Util.Type.isString(d)){this.wrapperElementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,d)
}else{this.wrapperElementName=null
}}},unmarshal:function(l,g,k){var h=null;
var j=this;
var i=function(a){if(j.collection){if(h===null){h=[]
}h.push(a)
}else{if(h===null){h=a
}else{throw new Error("Value already set.")
}}};
if(Jsonix.Util.Type.exists(this.wrapperElementName)){this.unmarshalWrapperElement(l,g,k,i)
}else{this.unmarshalElement(l,g,k,i)
}return h
},marshal:function(i,l,h,k){if(!Jsonix.Util.Type.exists(i)){return
}if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeStartElement(this.wrapperElementName)
}if(!this.collection){this.marshalElement(i,l,h,k)
}else{Jsonix.Util.Ensure.ensureArray(i);
for(var g=0;
g<i.length;
g++){var j=i[g];
this.marshalElement(j,l,h,k)
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeEndElement()
}},convertFromTypedNamedValue:function(g,e,f,h){return g.value
},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.value)){throw new Error("The structure already defines a value property.")
}else{if(!Jsonix.Util.Type.exists(d.elements)){d.elements={}
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){d.elements[this.wrapperElementName.key]=this
}else{this.buildStructureElements(c,d)
}},buildStructureElements:function(c,d){throw new Error("Abstract method [buildStructureElements].")
},CLASS_NAME:"Jsonix.Model.AbstractElementsPropertyInfo"});
Jsonix.Model.ElementPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo,Jsonix.Binding.Marshalls.Element,{typeInfo:"String",elementName:null,initialize:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this,[d]);
var f=d.typeInfo||d.ti||"String";
if(Jsonix.Util.Type.isObject(f)){this.typeInfo=f
}else{Jsonix.Util.Ensure.ensureString(f);
this.typeInfo=f
}var e=d.elementName||d.en||undefined;
if(Jsonix.Util.Type.isObject(e)){this.elementName=Jsonix.XML.QName.fromObject(e)
}else{if(Jsonix.Util.Type.isString(e)){this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,e)
}else{this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,this.name)
}}},getTypeInfoByElementName:function(e,d,f){return this.typeInfo
},convertToTypedNamedValue:function(g,e,f,h){return{name:this.elementName,value:g,typeInfo:this.typeInfo}
},doBuild:function(c,d){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d)
},buildStructureElements:function(c,d){d.elements[this.elementName.key]=this
},CLASS_NAME:"Jsonix.Model.ElementPropertyInfo"});
Jsonix.Model.ElementsPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo,Jsonix.Binding.Marshalls.Element,{elementTypeInfos:null,elementTypeInfosMap:null,initialize:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this,[d]);
var f=d.elementTypeInfos||d.etis||[];
Jsonix.Util.Ensure.ensureArray(f);
this.elementTypeInfos=[];
for(var e=0;
e<f.length;
e++){this.elementTypeInfos[e]=Jsonix.Util.Type.cloneObject(f[e])
}},getTypeInfoByElementName:function(e,d,f){return this.elementTypeInfosMap[e.key]
},convertToTypedNamedValue:function(q,v,u,o){for(var s=0;
s<this.elementTypeInfos.length;
s++){var r=this.elementTypeInfos[s];
var p=r.typeInfo;
if(p.isInstance(q,v,o)){var n=r.elementName;
return{name:n,value:q,typeInfo:p}
}}if(v.supportXsiType){var w=v.getTypeInfoByValue(q);
if(w&&w.typeName){for(var t=0;
t<this.elementTypeInfos.length;
t++){var z=this.elementTypeInfos[t];
var x=z.typeInfo;
if(w.isBasedOn(x)){var y=z.elementName;
return{name:y,value:q,typeInfo:x}
}}}}throw new Error("Could not find an element with type info supporting the value ["+q+"].")
},doBuild:function(k,l){this.elementTypeInfosMap={};
var i,j;
for(var g=0;
g<this.elementTypeInfos.length;
g++){var h=this.elementTypeInfos[g];
Jsonix.Util.Ensure.ensureObject(h);
i=h.typeInfo||h.ti||"String";
h.typeInfo=k.resolveTypeInfo(i,l);
j=h.elementName||h.en||undefined;
h.elementName=Jsonix.XML.QName.fromObjectOrString(j,k,this.defaultElementNamespaceURI);
this.elementTypeInfosMap[h.elementName.key]=h.typeInfo
}},buildStructureElements:function(g,f){for(var h=0;
h<this.elementTypeInfos.length;
h++){var e=this.elementTypeInfos[h];
f.elements[e.elementName.key]=this
}},CLASS_NAME:"Jsonix.Model.ElementsPropertyInfo"});
Jsonix.Model.ElementMapPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo,{elementName:null,key:null,value:null,entryTypeInfo:null,initialize:function(g){Jsonix.Util.Ensure.ensureObject(g);
Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this,[g]);
var e=g.key||g.k||undefined;
Jsonix.Util.Ensure.ensureObject(e);
var f=g.value||g.v||undefined;
Jsonix.Util.Ensure.ensureObject(f);
var h=g.elementName||g.en||undefined;
if(Jsonix.Util.Type.isObject(h)){this.elementName=Jsonix.XML.QName.fromObject(h)
}else{if(Jsonix.Util.Type.isString(h)){this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,h)
}else{this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,this.name)
}}this.entryTypeInfo=new Jsonix.Model.ClassInfo({name:"Map<"+e.name+","+f.name+">",propertyInfos:[e,f]})
},unmarshal:function(l,g,k){var h=null;
var j=this;
var i=function(a){if(Jsonix.Util.Type.exists(a)){Jsonix.Util.Ensure.ensureObject(a,"Map property requires an object.");
if(!Jsonix.Util.Type.exists(h)){h={}
}for(var c in a){if(a.hasOwnProperty(c)){var b=a[c];
if(j.collection){if(!Jsonix.Util.Type.exists(h[c])){h[c]=[]
}h[c].push(b)
}else{if(!Jsonix.Util.Type.exists(h[c])){h[c]=b
}else{throw new Error("Value was already set.")
}}}}}};
if(Jsonix.Util.Type.exists(this.wrapperElementName)){this.unmarshalWrapperElement(l,g,k,i)
}else{this.unmarshalElement(l,g,k,i)
}return h
},getTypeInfoByInputElement:function(d,e,f){return this.entryTypeInfo
},convertFromTypedNamedValue:function(i,l,g,k){var j=i.value;
var h={};
if(Jsonix.Util.Type.isString(j[this.key.name])){h[j[this.key.name]]=j[this.value.name]
}return h
},marshal:function(g,e,f,h){if(!Jsonix.Util.Type.exists(g)){return
}if(Jsonix.Util.Type.exists(this.wrapperElementName)){f.writeStartElement(this.wrapperElementName)
}this.marshalElement(g,e,f,h);
if(Jsonix.Util.Type.exists(this.wrapperElementName)){f.writeEndElement()
}},marshalElement:function(l,r,q,j){if(!!l){for(var m in l){if(l.hasOwnProperty(m)){var p=l[m];
if(!this.collection){var o={};
o[this.key.name]=m;
o[this.value.name]=p;
q.writeStartElement(this.elementName);
this.entryTypeInfo.marshal(o,r,q,j);
q.writeEndElement()
}else{for(var n=0;
n<p.length;
n++){var k={};
k[this.key.name]=m;
k[this.value.name]=p[n];
q.writeStartElement(this.elementName);
this.entryTypeInfo.marshal(k,r,q,j);
q.writeEndElement()
}}}}}},doBuild:function(c,d){this.entryTypeInfo.build(c,d);
this.key=this.entryTypeInfo.properties[0];
this.value=this.entryTypeInfo.properties[1]
},buildStructureElements:function(c,d){d.elements[this.elementName.key]=this
},setProperty:function(l,j){if(Jsonix.Util.Type.exists(j)){Jsonix.Util.Ensure.ensureObject(j,"Map property requires an object.");
if(!Jsonix.Util.Type.exists(l[this.name])){l[this.name]={}
}var i=l[this.name];
for(var g in j){if(j.hasOwnProperty(g)){var k=j[g];
if(this.collection){if(!Jsonix.Util.Type.exists(i[g])){i[g]=[]
}for(var h=0;
h<k.length;
h++){i[g].push(k[h])
}}else{i[g]=k
}}}}},CLASS_NAME:"Jsonix.Model.ElementMapPropertyInfo"});
Jsonix.Model.AbstractElementRefsPropertyInfo=Jsonix.Class(Jsonix.Binding.Marshalls.Element,Jsonix.Binding.Marshalls.Element.AsElementRef,Jsonix.Binding.Unmarshalls.Element,Jsonix.Binding.Unmarshalls.WrapperElement,Jsonix.Binding.Unmarshalls.Element.AsElementRef,Jsonix.Model.PropertyInfo,{wrapperElementName:null,allowDom:true,allowTypedObject:true,mixed:true,initialize:function(f){Jsonix.Util.Ensure.ensureObject(f,"Mapping must be an object.");
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[f]);
var g=f.wrapperElementName||f.wen||undefined;
if(Jsonix.Util.Type.isObject(g)){this.wrapperElementName=Jsonix.XML.QName.fromObject(g)
}else{if(Jsonix.Util.Type.isString(g)){this.wrapperElementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,g)
}else{this.wrapperElementName=null
}}var h=Jsonix.Util.Type.defaultValue(f.allowDom,f.dom,true);
var j=Jsonix.Util.Type.defaultValue(f.allowTypedObject,f.typed,true);
var i=Jsonix.Util.Type.defaultValue(f.mixed,f.mx,true);
this.allowDom=h;
this.allowTypedObject=j;
this.mixed=i
},unmarshal:function(n,h,m){var i=null;
var l=this;
var j=function(a){if(l.collection){if(i===null){i=[]
}i.push(a)
}else{if(i===null){i=a
}else{throw new Error("Value already set.")
}}};
var k=h.eventType;
if(k===Jsonix.XML.Input.START_ELEMENT){if(Jsonix.Util.Type.exists(this.wrapperElementName)){this.unmarshalWrapperElement(n,h,m,j)
}else{this.unmarshalElement(n,h,m,j)
}}else{if(this.mixed&&(k===Jsonix.XML.Input.CHARACTERS||k===Jsonix.XML.Input.CDATA||k===Jsonix.XML.Input.ENTITY_REFERENCE)){j(h.getText())
}else{if(k===Jsonix.XML.Input.SPACE||k===Jsonix.XML.Input.COMMENT||k===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+k+"].")
}}}return i
},marshal:function(i,l,h,k){if(Jsonix.Util.Type.exists(i)){if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeStartElement(this.wrapperElementName)
}if(!this.collection){this.marshalItem(i,l,h,k)
}else{Jsonix.Util.Ensure.ensureArray(i,"Collection property requires an array value.");
for(var g=0;
g<i.length;
g++){var j=i[g];
this.marshalItem(j,l,h,k)
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeEndElement()
}}},marshalItem:function(g,e,f,h){if(Jsonix.Util.Type.isString(g)){if(!this.mixed){throw new Error("Property is not mixed, can't handle string values.")
}else{f.writeCharacters(g)
}}else{if(this.allowDom&&Jsonix.Util.Type.exists(g.nodeType)){f.writeNode(g)
}else{if(Jsonix.Util.Type.isObject(g)){this.marshalElement(g,e,f,h)
}else{if(this.mixed){throw new Error("Unsupported content type, either objects or strings are supported.")
}else{throw new Error("Unsupported content type, only objects are supported.")
}}}}},getTypeInfoByElementName:function(g,f,i){var j=this.getPropertyElementTypeInfo(g,f);
if(Jsonix.Util.Type.exists(j)){return j.typeInfo
}else{var h=f.getElementInfo(g,i);
if(Jsonix.Util.Type.exists(h)){return h.typeInfo
}else{return undefined
}}},getPropertyElementTypeInfo:function(d,c){throw new Error("Abstract method [getPropertyElementTypeInfo].")
},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.value)){throw new Error("The structure already defines a value property.")
}else{if(!Jsonix.Util.Type.exists(d.elements)){d.elements={}
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){d.elements[this.wrapperElementName.key]=this
}else{this.buildStructureElements(c,d)
}if((this.allowDom||this.allowTypedObject)){d.any=this
}if(this.mixed&&!Jsonix.Util.Type.exists(this.wrapperElementName)){d.mixed=this
}},buildStructureElements:function(c,d){throw new Error("Abstract method [buildStructureElements].")
},buildStructureElementTypeInfos:function(k,h,g){h.elements[g.elementName.key]=this;
var l=k.getSubstitutionMembers(g.elementName);
if(Jsonix.Util.Type.isArray(l)){for(var i=0;
i<l.length;
i++){var j=l[i];
this.buildStructureElementTypeInfos(k,h,j)
}}},CLASS_NAME:"Jsonix.Model.AbstractElementRefsPropertyInfo"});
Jsonix.Model.ElementRefPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementRefsPropertyInfo,{typeInfo:"String",elementName:null,initialize:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize.apply(this,[d]);
var f=d.typeInfo||d.ti||"String";
if(Jsonix.Util.Type.isObject(f)){this.typeInfo=f
}else{Jsonix.Util.Ensure.ensureString(f);
this.typeInfo=f
}var e=d.elementName||d.en||undefined;
if(Jsonix.Util.Type.isObject(e)){this.elementName=Jsonix.XML.QName.fromObject(e)
}else{if(Jsonix.Util.Type.isString(e)){this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,e)
}else{this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,this.name)
}}},getPropertyElementTypeInfo:function(e,f){var d=Jsonix.XML.QName.fromObjectOrString(e,f);
if(d.key===this.elementName.key){return this
}else{return null
}},doBuild:function(c,d){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d)
},buildStructureElements:function(c,d){this.buildStructureElementTypeInfos(c,d,this)
},CLASS_NAME:"Jsonix.Model.ElementRefPropertyInfo"});
Jsonix.Model.ElementRefPropertyInfo.Simplified=Jsonix.Class(Jsonix.Model.ElementRefPropertyInfo,Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef,{CLASS_NAME:"Jsonix.Model.ElementRefPropertyInfo.Simplified"});
Jsonix.Model.ElementRefsPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementRefsPropertyInfo,{elementTypeInfos:null,elementTypeInfosMap:null,initialize:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize.apply(this,[d]);
var f=d.elementTypeInfos||d.etis||[];
Jsonix.Util.Ensure.ensureArray(f);
this.elementTypeInfos=[];
for(var e=0;
e<f.length;
e++){this.elementTypeInfos[e]=Jsonix.Util.Type.cloneObject(f[e])
}},getPropertyElementTypeInfo:function(f,h){var e=Jsonix.XML.QName.fromObjectOrString(f,h);
var g=this.elementTypeInfosMap[e.key];
if(Jsonix.Util.Type.exists(g)){return{elementName:e,typeInfo:g}
}else{return null
}},doBuild:function(k,l){this.elementTypeInfosMap={};
var i,j;
for(var g=0;
g<this.elementTypeInfos.length;
g++){var h=this.elementTypeInfos[g];
Jsonix.Util.Ensure.ensureObject(h);
i=h.typeInfo||h.ti||"String";
h.typeInfo=k.resolveTypeInfo(i,l);
j=h.elementName||h.en||undefined;
h.elementName=Jsonix.XML.QName.fromObjectOrString(j,k,this.defaultElementNamespaceURI);
this.elementTypeInfosMap[h.elementName.key]=h.typeInfo
}},buildStructureElements:function(g,f){for(var h=0;
h<this.elementTypeInfos.length;
h++){var e=this.elementTypeInfos[h];
this.buildStructureElementTypeInfos(g,f,e)
}},CLASS_NAME:"Jsonix.Model.ElementRefsPropertyInfo"});
Jsonix.Model.ElementRefsPropertyInfo.Simplified=Jsonix.Class(Jsonix.Model.ElementRefsPropertyInfo,Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef,{CLASS_NAME:"Jsonix.Model.ElementRefsPropertyInfo.Simplified"});
Jsonix.Model.AnyElementPropertyInfo=Jsonix.Class(Jsonix.Binding.Marshalls.Element,Jsonix.Binding.Marshalls.Element.AsElementRef,Jsonix.Binding.Unmarshalls.Element,Jsonix.Binding.Unmarshalls.Element.AsElementRef,Jsonix.Model.PropertyInfo,{allowDom:true,allowTypedObject:true,mixed:true,initialize:function(f){Jsonix.Util.Ensure.ensureObject(f);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[f]);
var g=Jsonix.Util.Type.defaultValue(f.allowDom,f.dom,true);
var e=Jsonix.Util.Type.defaultValue(f.allowTypedObject,f.typed,true);
var h=Jsonix.Util.Type.defaultValue(f.mixed,f.mx,true);
this.allowDom=g;
this.allowTypedObject=e;
this.mixed=h
},unmarshal:function(n,h,m){var i=null;
var l=this;
var j=function(a){if(l.collection){if(i===null){i=[]
}i.push(a)
}else{if(i===null){i=a
}else{throw new Error("Value already set.")
}}};
var k=h.eventType;
if(k===Jsonix.XML.Input.START_ELEMENT){this.unmarshalElement(n,h,m,j)
}else{if(this.mixed&&(k===Jsonix.XML.Input.CHARACTERS||k===Jsonix.XML.Input.CDATA||k===Jsonix.XML.Input.ENTITY_REFERENCE)){j(h.getText())
}else{if(this.mixed&&(k===Jsonix.XML.Input.SPACE)){}else{if(k===Jsonix.XML.Input.COMMENT||k===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+k+"].")
}}}}return i
},marshal:function(h,j,g,i){if(!Jsonix.Util.Type.exists(h)){return
}if(!this.collection){this.marshalItem(h,j,g,i)
}else{Jsonix.Util.Ensure.ensureArray(h);
for(var f=0;
f<h.length;
f++){this.marshalItem(h[f],j,g,i)
}}},marshalItem:function(g,e,f,h){if(this.mixed&&Jsonix.Util.Type.isString(g)){f.writeCharacters(g)
}else{if(this.allowDom&&Jsonix.Util.Type.exists(g.nodeType)){f.writeNode(g)
}else{if(this.allowTypedObject){this.marshalElement(g,e,f,h)
}}}},doBuild:function(c,d){},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.value)){throw new Error("The structure already defines a value property.")
}else{if(!Jsonix.Util.Type.exists(d.elements)){d.elements={}
}}if((this.allowDom||this.allowTypedObject)){d.any=this
}if(this.mixed){d.mixed=this
}},CLASS_NAME:"Jsonix.Model.AnyElementPropertyInfo"});
Jsonix.Model.AnyElementPropertyInfo.Simplified=Jsonix.Class(Jsonix.Model.AnyElementPropertyInfo,Jsonix.Binding.Unmarshalls.Element.AsSimplifiedElementRef,{CLASS_NAME:"Jsonix.Model.AnyElementPropertyInfo.Simplified"});
Jsonix.Model.Module=Jsonix.Class(Jsonix.Mapping.Styled,{name:null,typeInfos:null,elementInfos:null,targetNamespace:"",defaultElementNamespaceURI:"",defaultAttributeNamespaceURI:"",initialize:function(r,j){Jsonix.Mapping.Styled.prototype.initialize.apply(this,[j]);
this.typeInfos=[];
this.elementInfos=[];
if(typeof r!=="undefined"){Jsonix.Util.Ensure.ensureObject(r);
var q=r.name||r.n||null;
this.name=q;
var n=r.defaultElementNamespaceURI||r.dens||r.targetNamespace||r.tns||"";
this.defaultElementNamespaceURI=n;
var k=r.targetNamespace||r.tns||r.defaultElementNamespaceURI||r.dens||this.defaultElementNamespaceURI;
this.targetNamespace=k;
var l=r.defaultAttributeNamespaceURI||r.dans||"";
this.defaultAttributeNamespaceURI=l;
var m=r.typeInfos||r.tis||[];
this.initializeTypeInfos(m);
for(var p in r){if(r.hasOwnProperty(p)){if(r[p] instanceof this.mappingStyle.classInfo){this.typeInfos.push(r[p])
}}}var o=r.elementInfos||r.eis||[];
this.initializeElementInfos(o)
}},initializeTypeInfos:function(f){Jsonix.Util.Ensure.ensureArray(f);
var h,e,g;
for(h=0;
h<f.length;
h++){e=f[h];
g=this.createTypeInfo(e);
this.typeInfos.push(g)
}},initializeElementInfos:function(h){Jsonix.Util.Ensure.ensureArray(h);
var e,f,g;
for(e=0;
e<h.length;
e++){f=h[e];
g=this.createElementInfo(f);
this.elementInfos.push(g)
}},createTypeInfo:function(f){Jsonix.Util.Ensure.ensureObject(f);
var g;
if(f instanceof Jsonix.Model.TypeInfo){g=f
}else{f=Jsonix.Util.Type.cloneObject(f);
var e=f.type||f.t||"classInfo";
if(Jsonix.Util.Type.isFunction(this.typeInfoCreators[e])){var h=this.typeInfoCreators[e];
g=h.call(this,f)
}else{throw new Error("Unknown type info type ["+e+"].")
}}return g
},initializeNames:function(e){var d=e.localName||e.ln||null;
e.localName=d;
var f=e.name||e.n||null;
e.name=f;
if(Jsonix.Util.Type.isString(e.name)){if(e.name.length>0&&e.name.charAt(0)==="."&&Jsonix.Util.Type.isString(this.name)){e.name=this.name+e.name
}}else{if(Jsonix.Util.Type.isString(d)){if(Jsonix.Util.Type.isString(this.name)){e.name=this.name+"."+d
}else{e.name=d
}}else{throw new Error("Neither [name/n] nor [localName/ln] was provided for the class info.")
}}},createClassInfo:function(f){Jsonix.Util.Ensure.ensureObject(f);
var j=f.defaultElementNamespaceURI||f.dens||this.defaultElementNamespaceURI;
f.defaultElementNamespaceURI=j;
var g=f.targetNamespace||f.tns||this.targetNamespace;
f.targetNamespace=g;
var h=f.defaultAttributeNamespaceURI||f.dans||this.defaultAttributeNamespaceURI;
f.defaultAttributeNamespaceURI=h;
this.initializeNames(f);
var i=new this.mappingStyle.classInfo(f,{mappingStyle:this.mappingStyle});
return i
},createEnumLeafInfo:function(d){Jsonix.Util.Ensure.ensureObject(d);
this.initializeNames(d);
var c=new this.mappingStyle.enumLeafInfo(d,{mappingStyle:this.mappingStyle});
return c
},createList:function(e){Jsonix.Util.Ensure.ensureObject(e);
var g=e.baseTypeInfo||e.typeInfo||e.bti||e.ti||"String";
var f=e.typeName||e.tn||null;
if(Jsonix.Util.Type.exists(f)){if(Jsonix.Util.Type.isString(f)){f=new Jsonix.XML.QName(this.targetNamespace,f)
}else{f=Jsonix.XML.QName.fromObject(f)
}}var h=e.separator||e.sep||" ";
Jsonix.Util.Ensure.ensureExists(g);
return new Jsonix.Schema.XSD.List(g,f,h)
},createElementInfo:function(g){Jsonix.Util.Ensure.ensureObject(g);
g=Jsonix.Util.Type.cloneObject(g);
var i=g.defaultElementNamespaceURI||g.dens||this.defaultElementNamespaceURI;
g.defaultElementNamespaceURI=i;
var h=g.elementName||g.en||undefined;
Jsonix.Util.Ensure.ensureExists(h);
var j=g.typeInfo||g.ti||"String";
Jsonix.Util.Ensure.ensureExists(j);
g.typeInfo=j;
if(Jsonix.Util.Type.isObject(h)){g.elementName=Jsonix.XML.QName.fromObject(h)
}else{if(Jsonix.Util.Type.isString(h)){g.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,h)
}else{throw new Error("Element info ["+g+"] must provide an element name.")
}}var l=g.substitutionHead||g.sh||null;
if(Jsonix.Util.Type.exists(l)){if(Jsonix.Util.Type.isObject(l)){g.substitutionHead=Jsonix.XML.QName.fromObject(l)
}else{Jsonix.Util.Ensure.ensureString(l);
g.substitutionHead=new Jsonix.XML.QName(this.defaultElementNamespaceURI,l)
}}var k=new this.mappingStyle.elementInfo(g,{mappingStyle:this.mappingStyle});
return k
},registerTypeInfos:function(d){for(var e=0;
e<this.typeInfos.length;
e++){var f=this.typeInfos[e];
d.registerTypeInfo(f,this)
}},buildTypeInfos:function(d){for(var e=0;
e<this.typeInfos.length;
e++){var f=this.typeInfos[e];
f.build(d,this)
}},registerElementInfos:function(d){for(var e=0;
e<this.elementInfos.length;
e++){var f=this.elementInfos[e];
d.registerElementInfo(f,this)
}},buildElementInfos:function(d){for(var e=0;
e<this.elementInfos.length;
e++){var f=this.elementInfos[e];
f.build(d,this)
}},cs:function(){return this
},es:function(){return this
},CLASS_NAME:"Jsonix.Model.Module"});
Jsonix.Model.Module.prototype.typeInfoCreators={classInfo:Jsonix.Model.Module.prototype.createClassInfo,c:Jsonix.Model.Module.prototype.createClassInfo,enumInfo:Jsonix.Model.Module.prototype.createEnumLeafInfo,"enum":Jsonix.Model.Module.prototype.createEnumLeafInfo,list:Jsonix.Model.Module.prototype.createList,l:Jsonix.Model.Module.prototype.createList};
Jsonix.Mapping.Style.Standard=Jsonix.Class(Jsonix.Mapping.Style,{marshaller:Jsonix.Binding.Marshaller,unmarshaller:Jsonix.Binding.Unmarshaller,module:Jsonix.Model.Module,elementInfo:Jsonix.Model.ElementInfo,classInfo:Jsonix.Model.ClassInfo,enumLeafInfo:Jsonix.Model.EnumLeafInfo,anyAttributePropertyInfo:Jsonix.Model.AnyAttributePropertyInfo,anyElementPropertyInfo:Jsonix.Model.AnyElementPropertyInfo,attributePropertyInfo:Jsonix.Model.AttributePropertyInfo,elementMapPropertyInfo:Jsonix.Model.ElementMapPropertyInfo,elementPropertyInfo:Jsonix.Model.ElementPropertyInfo,elementsPropertyInfo:Jsonix.Model.ElementsPropertyInfo,elementRefPropertyInfo:Jsonix.Model.ElementRefPropertyInfo,elementRefsPropertyInfo:Jsonix.Model.ElementRefsPropertyInfo,valuePropertyInfo:Jsonix.Model.ValuePropertyInfo,initialize:function(){Jsonix.Mapping.Style.prototype.initialize.apply(this)
},CLASS_NAME:"Jsonix.Mapping.Style.Standard"});
Jsonix.Mapping.Style.STYLES.standard=new Jsonix.Mapping.Style.Standard();
Jsonix.Mapping.Style.Simplified=Jsonix.Class(Jsonix.Mapping.Style,{marshaller:Jsonix.Binding.Marshaller.Simplified,unmarshaller:Jsonix.Binding.Unmarshaller.Simplified,module:Jsonix.Model.Module,elementInfo:Jsonix.Model.ElementInfo,classInfo:Jsonix.Model.ClassInfo,enumLeafInfo:Jsonix.Model.EnumLeafInfo,anyAttributePropertyInfo:Jsonix.Model.AnyAttributePropertyInfo.Simplified,anyElementPropertyInfo:Jsonix.Model.AnyElementPropertyInfo.Simplified,attributePropertyInfo:Jsonix.Model.AttributePropertyInfo,elementMapPropertyInfo:Jsonix.Model.ElementMapPropertyInfo,elementPropertyInfo:Jsonix.Model.ElementPropertyInfo,elementsPropertyInfo:Jsonix.Model.ElementsPropertyInfo,elementRefPropertyInfo:Jsonix.Model.ElementRefPropertyInfo.Simplified,elementRefsPropertyInfo:Jsonix.Model.ElementRefsPropertyInfo.Simplified,valuePropertyInfo:Jsonix.Model.ValuePropertyInfo,initialize:function(){Jsonix.Mapping.Style.prototype.initialize.apply(this)
},CLASS_NAME:"Jsonix.Mapping.Style.Simplified"});
Jsonix.Mapping.Style.STYLES.simplified=new Jsonix.Mapping.Style.Simplified();
Jsonix.Schema.XSD={};
Jsonix.Schema.XSD.NAMESPACE_URI="http://www.w3.org/2001/XMLSchema";
Jsonix.Schema.XSD.PREFIX="xsd";
Jsonix.Schema.XSD.qname=function(b){Jsonix.Util.Ensure.ensureString(b);
return new Jsonix.XML.QName(Jsonix.Schema.XSD.NAMESPACE_URI,b,Jsonix.Schema.XSD.PREFIX)
};
Jsonix.Schema.XSD.AnyType=Jsonix.Class(Jsonix.Model.ClassInfo,{typeName:Jsonix.Schema.XSD.qname("anyType"),initialize:function(){Jsonix.Model.ClassInfo.prototype.initialize.call(this,{name:"AnyType",propertyInfos:[{type:"anyAttribute",name:"attributes"},{type:"anyElement",name:"content",collection:true}]})
},CLASS_NAME:"Jsonix.Schema.XSD.AnyType"});
Jsonix.Schema.XSD.AnyType.INSTANCE=new Jsonix.Schema.XSD.AnyType();
Jsonix.Schema.XSD.AnySimpleType=Jsonix.Class(Jsonix.Model.TypeInfo,{name:"AnySimpleType",typeName:Jsonix.Schema.XSD.qname("anySimpleType"),initialize:function(){Jsonix.Model.TypeInfo.prototype.initialize.apply(this,[])
},print:function(g,e,f,h){return g
},parse:function(g,e,f,h){return g
},isInstance:function(f,e,d){return true
},reprint:function(g,e,f,h){if(Jsonix.Util.Type.isString(g)&&!this.isInstance(g,e,h)){return this.print(this.parse(g,e,null,h),e,f,h)
}else{return this.print(g,e,f,h)
}},unmarshal:function(e,f,h){var g=f.getElementText();
if(Jsonix.Util.StringUtils.isNotBlank(g)){return this.parse(g,e,f,h)
}else{return null
}},marshal:function(g,e,f,h){if(Jsonix.Util.Type.exists(g)){f.writeCharacters(this.reprint(g,e,f,h))
}},build:function(c,d){},CLASS_NAME:"Jsonix.Schema.XSD.AnySimpleType"});
Jsonix.Schema.XSD.AnySimpleType.INSTANCE=new Jsonix.Schema.XSD.AnySimpleType();
Jsonix.Schema.XSD.List=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:null,typeName:null,typeInfo:null,separator:" ",trimmedSeparator:Jsonix.Util.StringUtils.whitespaceCharacters,simpleType:true,built:false,initialize:function(e,f,h){Jsonix.Util.Ensure.ensureExists(e);
this.typeInfo=e;
if(!Jsonix.Util.Type.exists(this.name)){this.name=e.name+"*"
}if(Jsonix.Util.Type.exists(f)){this.typeName=f
}if(Jsonix.Util.Type.isString(h)){this.separator=h
}else{this.separator=" "
}var g=Jsonix.Util.StringUtils.trim(this.separator);
if(g.length===0){this.trimmedSeparator=Jsonix.Util.StringUtils.whitespaceCharacters
}else{this.trimmedSeparator=g
}},build:function(c,d){if(!this.built){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d);
this.built=true
}},print:function(i,k,g,j){if(!Jsonix.Util.Type.exists(i)){return null
}Jsonix.Util.Ensure.ensureArray(i);
var h="";
for(var l=0;
l<i.length;
l++){if(l>0){h=h+this.separator
}h=h+this.typeInfo.reprint(i[l],k,g,j)
}return h
},parse:function(j,l,n,k){Jsonix.Util.Ensure.ensureString(j);
var h=Jsonix.Util.StringUtils.splitBySeparatorChars(j,this.trimmedSeparator);
var i=[];
for(var m=0;
m<h.length;
m++){i.push(this.typeInfo.parse(Jsonix.Util.StringUtils.trim(h[m]),l,n,k))
}return i
},CLASS_NAME:"Jsonix.Schema.XSD.List"});
Jsonix.Schema.XSD.String=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"String",typeName:Jsonix.Schema.XSD.qname("string"),unmarshal:function(e,f,h){var g=f.getElementText();
return this.parse(g,e,f,h)
},print:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
return g
},parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
return g
},isInstance:function(f,e,d){return Jsonix.Util.Type.isString(f)
},CLASS_NAME:"Jsonix.Schema.XSD.String"});
Jsonix.Schema.XSD.String.INSTANCE=new Jsonix.Schema.XSD.String();
Jsonix.Schema.XSD.String.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE);
Jsonix.Schema.XSD.Strings=Jsonix.Class(Jsonix.Schema.XSD.List,{name:"Strings",initialize:function(){Jsonix.Schema.XSD.List.prototype.initialize.apply(this,[Jsonix.Schema.XSD.String.INSTANCE,Jsonix.Schema.XSD.qname("strings")," "])
},CLASS_NAME:"Jsonix.Schema.XSD.Strings"});
Jsonix.Schema.XSD.Strings.INSTANCE=new Jsonix.Schema.XSD.Strings();
Jsonix.Schema.XSD.NormalizedString=Jsonix.Class(Jsonix.Schema.XSD.String,{name:"NormalizedString",typeName:Jsonix.Schema.XSD.qname("normalizedString"),CLASS_NAME:"Jsonix.Schema.XSD.NormalizedString"});
Jsonix.Schema.XSD.NormalizedString.INSTANCE=new Jsonix.Schema.XSD.NormalizedString();
Jsonix.Schema.XSD.NormalizedString.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NormalizedString.INSTANCE);
Jsonix.Schema.XSD.Token=Jsonix.Class(Jsonix.Schema.XSD.NormalizedString,{name:"Token",typeName:Jsonix.Schema.XSD.qname("token"),CLASS_NAME:"Jsonix.Schema.XSD.Token"});
Jsonix.Schema.XSD.Token.INSTANCE=new Jsonix.Schema.XSD.Token();
Jsonix.Schema.XSD.Token.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Token.INSTANCE);
Jsonix.Schema.XSD.Language=Jsonix.Class(Jsonix.Schema.XSD.Token,{name:"Language",typeName:Jsonix.Schema.XSD.qname("language"),CLASS_NAME:"Jsonix.Schema.XSD.Language"});
Jsonix.Schema.XSD.Language.INSTANCE=new Jsonix.Schema.XSD.Language();
Jsonix.Schema.XSD.Language.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Language.INSTANCE);
Jsonix.Schema.XSD.Name=Jsonix.Class(Jsonix.Schema.XSD.Token,{name:"Name",typeName:Jsonix.Schema.XSD.qname("Name"),CLASS_NAME:"Jsonix.Schema.XSD.Name"});
Jsonix.Schema.XSD.Name.INSTANCE=new Jsonix.Schema.XSD.Name();
Jsonix.Schema.XSD.Name.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Name.INSTANCE);
Jsonix.Schema.XSD.NCName=Jsonix.Class(Jsonix.Schema.XSD.Name,{name:"NCName",typeName:Jsonix.Schema.XSD.qname("NCName"),CLASS_NAME:"Jsonix.Schema.XSD.NCName"});
Jsonix.Schema.XSD.NCName.INSTANCE=new Jsonix.Schema.XSD.NCName();
Jsonix.Schema.XSD.NCName.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NCName.INSTANCE);
Jsonix.Schema.XSD.NMToken=Jsonix.Class(Jsonix.Schema.XSD.Token,{name:"NMToken",typeName:Jsonix.Schema.XSD.qname("NMTOKEN"),CLASS_NAME:"Jsonix.Schema.XSD.NMToken"});
Jsonix.Schema.XSD.NMToken.INSTANCE=new Jsonix.Schema.XSD.NMToken();
Jsonix.Schema.XSD.NMTokens=Jsonix.Class(Jsonix.Schema.XSD.List,{name:"NMTokens",initialize:function(){Jsonix.Schema.XSD.List.prototype.initialize.apply(this,[Jsonix.Schema.XSD.NMToken.INSTANCE,Jsonix.Schema.XSD.qname("NMTOKEN")," "])
},CLASS_NAME:"Jsonix.Schema.XSD.NMTokens"});
Jsonix.Schema.XSD.NMTokens.INSTANCE=new Jsonix.Schema.XSD.NMTokens();
Jsonix.Schema.XSD.Boolean=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Boolean",typeName:Jsonix.Schema.XSD.qname("boolean"),print:function(g,e,f,h){Jsonix.Util.Ensure.ensureBoolean(g);
return g?"true":"false"
},parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
if(g==="true"||g==="1"){return true
}else{if(g==="false"||g==="0"){return false
}else{throw new Error("Either [true], [1], [0] or [false] expected as boolean value.")
}}},isInstance:function(f,e,d){return Jsonix.Util.Type.isBoolean(f)
},CLASS_NAME:"Jsonix.Schema.XSD.Boolean"});
Jsonix.Schema.XSD.Boolean.INSTANCE=new Jsonix.Schema.XSD.Boolean();
Jsonix.Schema.XSD.Boolean.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Boolean.INSTANCE);
Jsonix.Schema.XSD.Base64Binary=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Base64Binary",typeName:Jsonix.Schema.XSD.qname("base64Binary"),charToByte:{},byteToChar:[],initialize:function(){Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
for(var h=0;
h<f.length;
h++){var e=f.charAt(h);
var g=f.charCodeAt(h);
this.byteToChar[h]=e;
this.charToByte[e]=h
}},print:function(g,e,f,h){Jsonix.Util.Ensure.ensureArray(g);
return this.encode(g)
},parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
return this.decode(g)
},encode:function(s){var w="";
var i;
var j;
var o;
var p;
var q;
var r;
var t;
var u=0;
var v=0;
var x=s.length;
for(u=0;
u<x;
u+=3){i=s[u]&255;
p=this.byteToChar[i>>2];
if(u+1<x){j=s[u+1]&255;
q=this.byteToChar[((i&3)<<4)|(j>>4)];
if(u+2<x){o=s[u+2]&255;
r=this.byteToChar[((j&15)<<2)|(o>>6)];
t=this.byteToChar[o&63]
}else{r=this.byteToChar[(j&15)<<2];
t="="
}}else{q=this.byteToChar[(i&3)<<4];
r="=";
t="="
}w=w+p+q+r+t
}return w
},decode:function(j){input=j.replace(/[^A-Za-z0-9\+\/\=]/g,"");
var x=(input.length/4)*3;
if(input.charAt(input.length-1)==="="){x--
}if(input.charAt(input.length-2)==="="){x--
}var t=new Array(x);
var i;
var o;
var p;
var q;
var r;
var s;
var u;
var v=0;
var w=0;
for(v=0;
v<x;
v+=3){q=this.charToByte[input.charAt(w++)];
r=this.charToByte[input.charAt(w++)];
s=this.charToByte[input.charAt(w++)];
u=this.charToByte[input.charAt(w++)];
i=(q<<2)|(r>>4);
o=((r&15)<<4)|(s>>2);
p=((s&3)<<6)|u;
t[v]=i;
if(s!=64){t[v+1]=o
}if(u!=64){t[v+2]=p
}}return t
},isInstance:function(f,e,d){return Jsonix.Util.Type.isArray(f)
},CLASS_NAME:"Jsonix.Schema.XSD.Base64Binary"});
Jsonix.Schema.XSD.Base64Binary.INSTANCE=new Jsonix.Schema.XSD.Base64Binary();
Jsonix.Schema.XSD.Base64Binary.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Base64Binary.INSTANCE);
Jsonix.Schema.XSD.HexBinary=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"HexBinary",typeName:Jsonix.Schema.XSD.qname("hexBinary"),charToQuartet:{},byteToDuplet:[],initialize:function(){Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
var d="0123456789ABCDEF";
var f=d.toLowerCase();
var e;
for(e=0;
e<16;
e++){this.charToQuartet[d.charAt(e)]=e;
if(e>=10){this.charToQuartet[f.charAt(e)]=e
}}for(e=0;
e<256;
e++){this.byteToDuplet[e]=d[e>>4]+d[e&15]
}},print:function(g,e,f,h){Jsonix.Util.Ensure.ensureArray(g);
return this.encode(g)
},parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
return this.decode(g)
},encode:function(f){var e="";
for(var d=0;
d<f.length;
d++){e=e+this.byteToDuplet[f[d]&255]
}return e
},decode:function(j){var i=j.replace(/[^A-Fa-f0-9]/g,"");
var l=i.length>>1;
var n=new Array(l);
for(var h=0;
h<l;
h++){var k=i.charAt(2*h);
var m=i.charAt(2*h+1);
n[h]=this.charToQuartet[k]<<4|this.charToQuartet[m]
}return n
},isInstance:function(f,e,d){return Jsonix.Util.Type.isArray(f)
},CLASS_NAME:"Jsonix.Schema.XSD.HexBinary"});
Jsonix.Schema.XSD.HexBinary.INSTANCE=new Jsonix.Schema.XSD.HexBinary();
Jsonix.Schema.XSD.HexBinary.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.HexBinary.INSTANCE);
Jsonix.Schema.XSD.Number=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Number",typeName:Jsonix.Schema.XSD.qname("number"),print:function(i,f,g,j){Jsonix.Util.Ensure.ensureNumberOrNaN(i);
if(Jsonix.Util.Type.isNaN(i)){return"NaN"
}else{if(i===Infinity){return"INF"
}else{if(i===-Infinity){return"-INF"
}else{var h=String(i);
return h
}}}},parse:function(h,f,g,j){Jsonix.Util.Ensure.ensureString(h);
if(h==="-INF"){return -Infinity
}else{if(h==="INF"){return Infinity
}else{if(h==="NaN"){return NaN
}else{var i=Number(h);
Jsonix.Util.Ensure.ensureNumber(i);
return i
}}}},isInstance:function(f,e,d){return Jsonix.Util.Type.isNumberOrNaN(f)
},CLASS_NAME:"Jsonix.Schema.XSD.Number"});
Jsonix.Schema.XSD.Number.INSTANCE=new Jsonix.Schema.XSD.Number();
Jsonix.Schema.XSD.Number.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Number.INSTANCE);
Jsonix.Schema.XSD.Float=Jsonix.Class(Jsonix.Schema.XSD.Number,{name:"Float",typeName:Jsonix.Schema.XSD.qname("float"),isInstance:function(f,e,d){return Jsonix.Util.Type.isNaN(f)||f===-Infinity||f===Infinity||(Jsonix.Util.Type.isNumber(f)&&f>=this.MIN_VALUE&&f<=this.MAX_VALUE)
},MIN_VALUE:-3.4028235e+38,MAX_VALUE:3.4028235e+38,CLASS_NAME:"Jsonix.Schema.XSD.Float"});
Jsonix.Schema.XSD.Float.INSTANCE=new Jsonix.Schema.XSD.Float();
Jsonix.Schema.XSD.Float.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Float.INSTANCE);
Jsonix.Schema.XSD.Decimal=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Decimal",typeName:Jsonix.Schema.XSD.qname("decimal"),print:function(i,f,g,j){Jsonix.Util.Ensure.ensureNumber(i);
var h=String(i);
return h
},parse:function(h,f,g,j){Jsonix.Util.Ensure.ensureString(h);
var i=Number(h);
Jsonix.Util.Ensure.ensureNumber(i);
return i
},isInstance:function(f,e,d){return Jsonix.Util.Type.isNumber(f)
},CLASS_NAME:"Jsonix.Schema.XSD.Decimal"});
Jsonix.Schema.XSD.Decimal.INSTANCE=new Jsonix.Schema.XSD.Decimal();
Jsonix.Schema.XSD.Decimal.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Decimal.INSTANCE);
Jsonix.Schema.XSD.Integer=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Integer",typeName:Jsonix.Schema.XSD.qname("integer"),print:function(i,f,g,j){Jsonix.Util.Ensure.ensureInteger(i);
var h=String(i);
return h
},parse:function(h,f,g,j){Jsonix.Util.Ensure.ensureString(h);
var i=Number(h);
Jsonix.Util.Ensure.ensureInteger(i);
return i
},isInstance:function(f,e,d){return Jsonix.Util.NumberUtils.isInteger(f)&&f>=this.MIN_VALUE&&f<=this.MAX_VALUE
},MIN_VALUE:-9223372036854776000,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.Integer"});
Jsonix.Schema.XSD.Integer.INSTANCE=new Jsonix.Schema.XSD.Integer();
Jsonix.Schema.XSD.Integer.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Integer.INSTANCE);
Jsonix.Schema.XSD.NonPositiveInteger=Jsonix.Class(Jsonix.Schema.XSD.Integer,{name:"NonPositiveInteger",typeName:Jsonix.Schema.XSD.qname("nonPositiveInteger"),MIN_VALUE:-9223372036854776000,MAX_VALUE:0,CLASS_NAME:"Jsonix.Schema.XSD.NonPositiveInteger"});
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE=new Jsonix.Schema.XSD.NonPositiveInteger();
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE);
Jsonix.Schema.XSD.NegativeInteger=Jsonix.Class(Jsonix.Schema.XSD.NonPositiveInteger,{name:"NegativeInteger",typeName:Jsonix.Schema.XSD.qname("negativeInteger"),MIN_VALUE:-9223372036854776000,MAX_VALUE:-1,CLASS_NAME:"Jsonix.Schema.XSD.NegativeInteger"});
Jsonix.Schema.XSD.NegativeInteger.INSTANCE=new Jsonix.Schema.XSD.NegativeInteger();
Jsonix.Schema.XSD.NegativeInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NegativeInteger.INSTANCE);
Jsonix.Schema.XSD.Long=Jsonix.Class(Jsonix.Schema.XSD.Integer,{name:"Long",typeName:Jsonix.Schema.XSD.qname("long"),MIN_VALUE:-9223372036854776000,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.Long"});
Jsonix.Schema.XSD.Long.INSTANCE=new Jsonix.Schema.XSD.Long();
Jsonix.Schema.XSD.Long.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Long.INSTANCE);
Jsonix.Schema.XSD.Int=Jsonix.Class(Jsonix.Schema.XSD.Long,{name:"Int",typeName:Jsonix.Schema.XSD.qname("int"),MIN_VALUE:-2147483648,MAX_VALUE:2147483647,CLASS_NAME:"Jsonix.Schema.XSD.Int"});
Jsonix.Schema.XSD.Int.INSTANCE=new Jsonix.Schema.XSD.Int();
Jsonix.Schema.XSD.Int.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Int.INSTANCE);
Jsonix.Schema.XSD.Short=Jsonix.Class(Jsonix.Schema.XSD.Int,{name:"Short",typeName:Jsonix.Schema.XSD.qname("short"),MIN_VALUE:-32768,MAX_VALUE:32767,CLASS_NAME:"Jsonix.Schema.XSD.Short"});
Jsonix.Schema.XSD.Short.INSTANCE=new Jsonix.Schema.XSD.Short();
Jsonix.Schema.XSD.Short.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Short.INSTANCE);
Jsonix.Schema.XSD.Byte=Jsonix.Class(Jsonix.Schema.XSD.Short,{name:"Byte",typeName:Jsonix.Schema.XSD.qname("byte"),MIN_VALUE:-128,MAX_VALUE:127,CLASS_NAME:"Jsonix.Schema.XSD.Byte"});
Jsonix.Schema.XSD.Byte.INSTANCE=new Jsonix.Schema.XSD.Byte();
Jsonix.Schema.XSD.Byte.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Byte.INSTANCE);
Jsonix.Schema.XSD.NonNegativeInteger=Jsonix.Class(Jsonix.Schema.XSD.Integer,{name:"NonNegativeInteger",typeName:Jsonix.Schema.XSD.qname("nonNegativeInteger"),MIN_VALUE:0,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.NonNegativeInteger"});
Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE=new Jsonix.Schema.XSD.NonNegativeInteger();
Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE);
Jsonix.Schema.XSD.UnsignedLong=Jsonix.Class(Jsonix.Schema.XSD.NonNegativeInteger,{name:"UnsignedLong",typeName:Jsonix.Schema.XSD.qname("unsignedLong"),MIN_VALUE:0,MAX_VALUE:18446744073709552000,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedLong"});
Jsonix.Schema.XSD.UnsignedLong.INSTANCE=new Jsonix.Schema.XSD.UnsignedLong();
Jsonix.Schema.XSD.UnsignedLong.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedLong.INSTANCE);
Jsonix.Schema.XSD.UnsignedInt=Jsonix.Class(Jsonix.Schema.XSD.UnsignedLong,{name:"UnsignedInt",typeName:Jsonix.Schema.XSD.qname("unsignedInt"),MIN_VALUE:0,MAX_VALUE:4294967295,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedInt"});
Jsonix.Schema.XSD.UnsignedInt.INSTANCE=new Jsonix.Schema.XSD.UnsignedInt();
Jsonix.Schema.XSD.UnsignedInt.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedInt.INSTANCE);
Jsonix.Schema.XSD.UnsignedShort=Jsonix.Class(Jsonix.Schema.XSD.UnsignedInt,{name:"UnsignedShort",typeName:Jsonix.Schema.XSD.qname("unsignedShort"),MIN_VALUE:0,MAX_VALUE:65535,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedShort"});
Jsonix.Schema.XSD.UnsignedShort.INSTANCE=new Jsonix.Schema.XSD.UnsignedShort();
Jsonix.Schema.XSD.UnsignedShort.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedShort.INSTANCE);
Jsonix.Schema.XSD.UnsignedByte=Jsonix.Class(Jsonix.Schema.XSD.UnsignedShort,{name:"UnsignedByte",typeName:Jsonix.Schema.XSD.qname("unsignedByte"),MIN_VALUE:0,MAX_VALUE:255,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedByte"});
Jsonix.Schema.XSD.UnsignedByte.INSTANCE=new Jsonix.Schema.XSD.UnsignedByte();
Jsonix.Schema.XSD.UnsignedByte.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedByte.INSTANCE);
Jsonix.Schema.XSD.PositiveInteger=Jsonix.Class(Jsonix.Schema.XSD.NonNegativeInteger,{name:"PositiveInteger",typeName:Jsonix.Schema.XSD.qname("positiveInteger"),MIN_VALUE:1,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.PositiveInteger"});
Jsonix.Schema.XSD.PositiveInteger.INSTANCE=new Jsonix.Schema.XSD.PositiveInteger();
Jsonix.Schema.XSD.PositiveInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.PositiveInteger.INSTANCE);
Jsonix.Schema.XSD.Double=Jsonix.Class(Jsonix.Schema.XSD.Number,{name:"Double",typeName:Jsonix.Schema.XSD.qname("double"),isInstance:function(f,e,d){return Jsonix.Util.Type.isNaN(f)||f===-Infinity||f===Infinity||(Jsonix.Util.Type.isNumber(f)&&f>=this.MIN_VALUE&&f<=this.MAX_VALUE)
},MIN_VALUE:-1.7976931348623157e+308,MAX_VALUE:1.7976931348623157e+308,CLASS_NAME:"Jsonix.Schema.XSD.Double"});
Jsonix.Schema.XSD.Double.INSTANCE=new Jsonix.Schema.XSD.Double();
Jsonix.Schema.XSD.Double.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE);
Jsonix.Schema.XSD.AnyURI=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"AnyURI",typeName:Jsonix.Schema.XSD.qname("anyURI"),print:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
return g
},parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
return g
},isInstance:function(f,e,d){return Jsonix.Util.Type.isString(f)
},CLASS_NAME:"Jsonix.Schema.XSD.AnyURI"});
Jsonix.Schema.XSD.AnyURI.INSTANCE=new Jsonix.Schema.XSD.AnyURI();
Jsonix.Schema.XSD.AnyURI.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.AnyURI.INSTANCE);
Jsonix.Schema.XSD.QName=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"QName",typeName:Jsonix.Schema.XSD.qname("QName"),print:function(j,n,h,m){var k=Jsonix.XML.QName.fromObject(j);
var l;
var i=k.localPart;
if(h){l=h.getPrefix(k.namespaceURI,k.prefix||null);
h.declareNamespace(k.namespaceURI,l)
}else{l=k.prefix
}return !l?i:(l+":"+i)
},parse:function(k,r,l,j){Jsonix.Util.Ensure.ensureString(k);
k=Jsonix.Util.StringUtils.trim(k);
var m;
var n;
var p=k.indexOf(":");
if(p===-1){m="";
n=k
}else{if(p>0&&p<(k.length-1)){m=k.substring(0,p);
n=k.substring(p+1)
}else{throw new Error("Invalid QName ["+k+"].")
}}var o=l||r||null;
if(!o){return k
}else{var q=o.getNamespaceURI(m);
if(Jsonix.Util.Type.isString(q)){return new Jsonix.XML.QName(q,n,m)
}else{throw new Error("Prefix ["+m+"] of the QName ["+k+"] is not bound in this context.")
}}},isInstance:function(f,e,d){return(f instanceof Jsonix.XML.QName)||(Jsonix.Util.Type.isObject(f)&&Jsonix.Util.Type.isString(f.localPart||f.lp))
},CLASS_NAME:"Jsonix.Schema.XSD.QName"});
Jsonix.Schema.XSD.QName.INSTANCE=new Jsonix.Schema.XSD.QName();
Jsonix.Schema.XSD.QName.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.QName.INSTANCE);
Jsonix.Schema.XSD.Calendar=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Calendar",typeName:Jsonix.Schema.XSD.qname("calendar"),parse:function(g,e,f,h){Jsonix.Util.Ensure.ensureString(g);
if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN+"$"))){return this.parseDateTime(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.DATE_PATTERN+"$"))){return this.parseDate(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.TIME_PATTERN+"$"))){return this.parseTime(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN+"$"))){return this.parseGYearMonth(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN+"$"))){return this.parseGYear(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN+"$"))){return this.parseGMonthDay(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN+"$"))){return this.parseGMonth(g,e,f,h)
}else{if(g.match(new RegExp("^"+Jsonix.Schema.XSD.Calendar.GDAY_PATTERN+"$"))){return this.parseGDay(g,e,f,h)
}else{throw new Error("Value ["+g+"] does not match xs:dateTime, xs:date, xs:time, xs:gYearMonth, xs:gYear, xs:gMonthDay, xs:gMonth or xs:gDay patterns.")
}}}}}}}}},parseGYearMonth:function(j,n,i,m){var l=new RegExp("^"+Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN+"$");
var h=j.match(l);
if(h!==null){var k={year:parseInt(h[1],10),month:parseInt(h[5],10),timezone:this.parseTimezoneString(h[7])};
return new Jsonix.XML.Calendar(k)
}throw new Error("Value ["+j+"] does not match the xs:gYearMonth pattern.")
},parseGYear:function(j,n,i,m){var l=new RegExp("^"+Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN+"$");
var h=j.match(l);
if(h!==null){var k={year:parseInt(h[1],10),timezone:this.parseTimezoneString(h[5])};
return new Jsonix.XML.Calendar(k)
}throw new Error("Value ["+j+"] does not match the xs:gYear pattern.")
},parseGMonthDay:function(j,n,i,m){var k=new RegExp("^"+Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN+"$");
var h=j.match(k);
if(h!==null){var l={month:parseInt(h[2],10),day:parseInt(h[3],10),timezone:this.parseTimezoneString(h[5])};
return new Jsonix.XML.Calendar(l)
}throw new Error("Value ["+j+"] does not match the xs:gMonthDay pattern.")
},parseGMonth:function(k,n,i,m){var j=new RegExp("^"+Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN+"$");
var h=k.match(j);
if(h!==null){var l={month:parseInt(h[2],10),timezone:this.parseTimezoneString(h[3])};
return new Jsonix.XML.Calendar(l)
}throw new Error("Value ["+k+"] does not match the xs:gMonth pattern.")
},parseGDay:function(j,n,i,m){var l=new RegExp("^"+Jsonix.Schema.XSD.Calendar.GDAY_PATTERN+"$");
var h=j.match(l);
if(h!==null){var k={day:parseInt(h[2],10),timezone:this.parseTimezoneString(h[3])};
return new Jsonix.XML.Calendar(k)
}throw new Error("Value ["+j+"] does not match the xs:gDay pattern.")
},parseDateTime:function(j,n,i,m){Jsonix.Util.Ensure.ensureString(j);
var k=new RegExp("^"+Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN+"$");
var h=j.match(k);
if(h!==null){var l={year:parseInt(h[1],10),month:parseInt(h[5],10),day:parseInt(h[7],10),hour:parseInt(h[9],10),minute:parseInt(h[10],10),second:parseInt(h[11],10),fractionalSecond:(h[12]?parseFloat(h[12]):0),timezone:this.parseTimezoneString(h[14])};
return new Jsonix.XML.Calendar(l)
}throw new Error("Value ["+value+"] does not match the xs:date pattern.")
},parseDate:function(j,n,i,m){Jsonix.Util.Ensure.ensureString(j);
var k=new RegExp("^"+Jsonix.Schema.XSD.Calendar.DATE_PATTERN+"$");
var h=j.match(k);
if(h!==null){var l={year:parseInt(h[1],10),month:parseInt(h[5],10),day:parseInt(h[7],10),timezone:this.parseTimezoneString(h[9])};
return new Jsonix.XML.Calendar(l)
}throw new Error("Value ["+value+"] does not match the xs:date pattern.")
},parseTime:function(j,n,i,m){Jsonix.Util.Ensure.ensureString(j);
var k=new RegExp("^"+Jsonix.Schema.XSD.Calendar.TIME_PATTERN+"$");
var h=j.match(k);
if(h!==null){var l={hour:parseInt(h[1],10),minute:parseInt(h[2],10),second:parseInt(h[3],10),fractionalSecond:(h[4]?parseFloat(h[4]):0),timezone:this.parseTimezoneString(h[6])};
return new Jsonix.XML.Calendar(l)
}throw new Error("Value ["+value+"] does not match the xs:time pattern.")
},parseTimezoneString:function(i){if(!Jsonix.Util.Type.isString(i)){return NaN
}else{if(i===""){return NaN
}else{if(i==="Z"){return 0
}else{if(i==="+14:00"){return 14*60
}else{if(i==="-14:00"){return -14*60
}else{var j=new RegExp("^"+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+"$");
var l=i.match(j);
if(l!==null){var g=l[1]==="+"?1:-1;
var h=parseInt(l[4],10);
var k=parseInt(l[5],10);
return g*(h*60+k)
}throw new Error("Value ["+value+"] does not match the timezone pattern.")
}}}}}},print:function(g,e,f,h){Jsonix.Util.Ensure.ensureObject(g);
if(Jsonix.Util.NumberUtils.isInteger(g.year)&&Jsonix.Util.NumberUtils.isInteger(g.month)&&Jsonix.Util.NumberUtils.isInteger(g.day)&&Jsonix.Util.NumberUtils.isInteger(g.hour)&&Jsonix.Util.NumberUtils.isInteger(g.minute)&&Jsonix.Util.NumberUtils.isInteger(g.second)){return this.printDateTime(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.year)&&Jsonix.Util.NumberUtils.isInteger(g.month)&&Jsonix.Util.NumberUtils.isInteger(g.day)){return this.printDate(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.hour)&&Jsonix.Util.NumberUtils.isInteger(g.minute)&&Jsonix.Util.NumberUtils.isInteger(g.second)){return this.printTime(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.year)&&Jsonix.Util.NumberUtils.isInteger(g.month)){return this.printGYearMonth(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.month)&&Jsonix.Util.NumberUtils.isInteger(g.day)){return this.printGMonthDay(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.year)){return this.printGYear(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.month)){return this.printGMonth(g)
}else{if(Jsonix.Util.NumberUtils.isInteger(g.day)){return this.printGDay(g)
}else{throw new Error("Value ["+g+"] is not recognized as dateTime, date or time.")
}}}}}}}}},printDateTime:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureInteger(c.year);
Jsonix.Util.Ensure.ensureInteger(c.month);
Jsonix.Util.Ensure.ensureInteger(c.day);
Jsonix.Util.Ensure.ensureInteger(c.hour);
Jsonix.Util.Ensure.ensureInteger(c.minute);
Jsonix.Util.Ensure.ensureNumber(c.second);
if(Jsonix.Util.Type.exists(c.fractionalString)){Jsonix.Util.Ensure.ensureNumber(c.fractionalString)
}if(Jsonix.Util.Type.exists(c.timezone)&&!Jsonix.Util.Type.isNaN(c.timezone)){Jsonix.Util.Ensure.ensureInteger(c.timezone)
}var d=this.printDateString(c);
d=d+"T";
d=d+this.printTimeString(c);
if(Jsonix.Util.Type.exists(c.timezone)){d=d+this.printTimezoneString(c.timezone)
}return d
},printDate:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureNumber(c.year);
Jsonix.Util.Ensure.ensureNumber(c.month);
Jsonix.Util.Ensure.ensureNumber(c.day);
if(Jsonix.Util.Type.exists(c.timezone)&&!Jsonix.Util.Type.isNaN(c.timezone)){Jsonix.Util.Ensure.ensureInteger(c.timezone)
}var d=this.printDateString(c);
if(Jsonix.Util.Type.exists(c.timezone)){d=d+this.printTimezoneString(c.timezone)
}return d
},printTime:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureNumber(c.hour);
Jsonix.Util.Ensure.ensureNumber(c.minute);
Jsonix.Util.Ensure.ensureNumber(c.second);
if(Jsonix.Util.Type.exists(c.fractionalString)){Jsonix.Util.Ensure.ensureNumber(c.fractionalString)
}if(Jsonix.Util.Type.exists(c.timezone)&&!Jsonix.Util.Type.isNaN(c.timezone)){Jsonix.Util.Ensure.ensureInteger(c.timezone)
}var d=this.printTimeString(c);
if(Jsonix.Util.Type.exists(c.timezone)){d=d+this.printTimezoneString(c.timezone)
}return d
},printDateString:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Util.Ensure.ensureInteger(b.year);
Jsonix.Util.Ensure.ensureInteger(b.month);
Jsonix.Util.Ensure.ensureInteger(b.day);
return(b.year<0?("-"+this.printYear(-b.year)):this.printYear(b.year))+"-"+this.printMonth(b.month)+"-"+this.printDay(b.day)
},printTimeString:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureInteger(c.hour);
Jsonix.Util.Ensure.ensureInteger(c.minute);
Jsonix.Util.Ensure.ensureInteger(c.second);
if(Jsonix.Util.Type.exists(c.fractionalSecond)){Jsonix.Util.Ensure.ensureNumber(c.fractionalSecond)
}var d=this.printHour(c.hour);
d=d+":";
d=d+this.printMinute(c.minute);
d=d+":";
d=d+this.printSecond(c.second);
if(Jsonix.Util.Type.exists(c.fractionalSecond)){d=d+this.printFractionalSecond(c.fractionalSecond)
}return d
},printTimezoneString:function(j){if(!Jsonix.Util.Type.exists(j)||Jsonix.Util.Type.isNaN(j)){return""
}else{Jsonix.Util.Ensure.ensureInteger(j);
var l=j<0?-1:(j>0?1:0);
var k=j*l;
var i=k%60;
var g=Math.floor(k/60);
var h;
if(l===0){return"Z"
}else{if(l>0){h="+"
}else{if(l<0){h="-"
}}h=h+this.printHour(g);
h=h+":";
h=h+this.printMinute(i);
return h
}}},printGDay:function(i,l,g,k){Jsonix.Util.Ensure.ensureObject(i);
var h=undefined;
var j=undefined;
if(i instanceof Date){h=i.getDate()
}else{Jsonix.Util.Ensure.ensureInteger(i.day);
h=i.day;
j=i.timezone
}Jsonix.XML.Calendar.validateDay(h);
Jsonix.XML.Calendar.validateTimezone(j);
return"---"+this.printDay(h)+this.printTimezoneString(j)
},printGMonth:function(j,g,h,l){Jsonix.Util.Ensure.ensureObject(j);
var i=undefined;
var k=undefined;
if(j instanceof Date){i=j.getMonth()+1
}else{Jsonix.Util.Ensure.ensureInteger(j.month);
i=j.month;
k=j.timezone
}Jsonix.XML.Calendar.validateMonth(i);
Jsonix.XML.Calendar.validateTimezone(k);
return"--"+this.printMonth(i)+this.printTimezoneString(k)
},printGMonthDay:function(k,n,h,m){Jsonix.Util.Ensure.ensureObject(k);
var j=undefined;
var i=undefined;
var l=undefined;
if(k instanceof Date){j=k.getMonth()+1;
i=k.getDate()
}else{Jsonix.Util.Ensure.ensureInteger(k.month);
Jsonix.Util.Ensure.ensureInteger(k.day);
j=k.month;
i=k.day;
l=k.timezone
}Jsonix.XML.Calendar.validateMonthDay(j,i);
Jsonix.XML.Calendar.validateTimezone(l);
return"--"+this.printMonth(j)+"-"+this.printDay(i)+this.printTimezoneString(l)
},printGYear:function(i,g,h,k){Jsonix.Util.Ensure.ensureObject(i);
var l=undefined;
var j=undefined;
if(i instanceof Date){l=i.getFullYear()
}else{Jsonix.Util.Ensure.ensureInteger(i.year);
l=i.year;
j=i.timezone
}Jsonix.XML.Calendar.validateYear(l);
Jsonix.XML.Calendar.validateTimezone(j);
return this.printSignedYear(l)+this.printTimezoneString(j)
},printGYearMonth:function(k,h,i,m){Jsonix.Util.Ensure.ensureObject(k);
var n=undefined;
var j=undefined;
var l=undefined;
if(k instanceof Date){n=k.getFullYear();
j=k.getMonth()+1
}else{Jsonix.Util.Ensure.ensureInteger(k.year);
n=k.year;
j=k.month;
l=k.timezone
}Jsonix.XML.Calendar.validateYear(n);
Jsonix.XML.Calendar.validateMonth(j);
Jsonix.XML.Calendar.validateTimezone(l);
return this.printSignedYear(n)+"-"+this.printMonth(j)+this.printTimezoneString(l)
},printSignedYear:function(b){return b<0?("-"+this.printYear(b*-1)):(this.printYear(b))
},printYear:function(b){return this.printInteger(b,4)
},printMonth:function(b){return this.printInteger(b,2)
},printDay:function(b){return this.printInteger(b,2)
},printHour:function(b){return this.printInteger(b,2)
},printMinute:function(b){return this.printInteger(b,2)
},printSecond:function(b){return this.printInteger(b,2)
},printFractionalSecond:function(f){Jsonix.Util.Ensure.ensureNumber(f);
if(f<0||f>=1){throw new Error("Fractional second ["+f+"] must be between 0 and 1.")
}else{if(f===0){return""
}else{var e=String(f);
var d=e.indexOf(".");
if(d<0){return""
}else{return e.substring(d)
}}}},printInteger:function(g,h){Jsonix.Util.Ensure.ensureInteger(g);
Jsonix.Util.Ensure.ensureInteger(h);
if(h<=0){throw new Error("Length ["+g+"] must be positive.")
}if(g<0){throw new Error("Value ["+g+"] must not be negative.")
}var f=String(g);
for(var e=f.length;
e<h;
e++){f="0"+f
}return f
},isInstance:function(f,e,d){return Jsonix.Util.Type.isObject(f)&&((Jsonix.Util.NumberUtils.isInteger(f.year)&&Jsonix.Util.NumberUtils.isInteger(f.month)&&Jsonix.Util.NumberUtils.isInteger(f.day))||(Jsonix.Util.NumberUtils.isInteger(f.hour)&&Jsonix.Util.NumberUtils.isInteger(f.minute)&&Jsonix.Util.NumberUtils.isInteger(f.second)))
},CLASS_NAME:"Jsonix.Schema.XSD.Calendar"});
Jsonix.Schema.XSD.Calendar.YEAR_PATTERN="-?([1-9][0-9]*)?((?!(0000))[0-9]{4})";
Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN="Z|([\\-\\+])(((0[0-9]|1[0-3]):([0-5][0-9]))|(14:00))";
Jsonix.Schema.XSD.Calendar.MONTH_PATTERN="(0[1-9]|1[0-2])";
Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN="\\-\\-"+Jsonix.Schema.XSD.Calendar.MONTH_PATTERN;
Jsonix.Schema.XSD.Calendar.DAY_PATTERN="(0[1-9]|[12][0-9]|3[01])";
Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN="\\-\\-\\-"+Jsonix.Schema.XSD.Calendar.DAY_PATTERN;
Jsonix.Schema.XSD.Calendar.GYEAR_PATTERN="("+Jsonix.Schema.XSD.Calendar.YEAR_PATTERN+")("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.GMONTH_PATTERN="("+Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN+")("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.GDAY_PATTERN="("+Jsonix.Schema.XSD.Calendar.SINGLE_DAY_PATTERN+")("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.GYEAR_MONTH_PATTERN="("+Jsonix.Schema.XSD.Calendar.YEAR_PATTERN+")-("+Jsonix.Schema.XSD.Calendar.DAY_PATTERN+")("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.GMONTH_DAY_PATTERN="("+Jsonix.Schema.XSD.Calendar.SINGLE_MONTH_PATTERN+")-("+Jsonix.Schema.XSD.Calendar.DAY_PATTERN+")("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN="("+Jsonix.Schema.XSD.Calendar.YEAR_PATTERN+")-("+Jsonix.Schema.XSD.Calendar.MONTH_PATTERN+")-("+Jsonix.Schema.XSD.Calendar.DAY_PATTERN+")";
Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN="([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(\\.([0-9]+))?";
Jsonix.Schema.XSD.Calendar.TIME_PATTERN=Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN+"("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.DATE_PATTERN=Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN+"("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.DATETIME_PATTERN=Jsonix.Schema.XSD.Calendar.DATE_PART_PATTERN+"T"+Jsonix.Schema.XSD.Calendar.TIME_PART_PATTERN+"("+Jsonix.Schema.XSD.Calendar.TIMEZONE_PATTERN+")?";
Jsonix.Schema.XSD.Calendar.INSTANCE=new Jsonix.Schema.XSD.Calendar();
Jsonix.Schema.XSD.Calendar.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Calendar.INSTANCE);
Jsonix.Schema.XSD.Duration=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Duration",typeName:Jsonix.Schema.XSD.qname("duration"),isInstance:function(f,e,d){return Jsonix.Util.Type.isObject(f)&&((Jsonix.Util.Type.exists(f.sign)?(f.sign===-1||f.sign===1):true)(Jsonix.Util.NumberUtils.isInteger(f.years)&&f.years>=0)||(Jsonix.Util.NumberUtils.isInteger(f.months)&&f.months>=0)||(Jsonix.Util.NumberUtils.isInteger(f.days)&&f.days>=0)||(Jsonix.Util.NumberUtils.isInteger(f.hours)&&f.hours>=0)||(Jsonix.Util.NumberUtils.isInteger(f.minutes)&&f.minutes>=0)||(Jsonix.Util.Type.isNumber(f.seconds)&&f.seconds>=0))
},validate:function(h){Jsonix.Util.Ensure.ensureObject(h);
if(Jsonix.Util.Type.exists(h.sign)){if(!(h.sign===1||h.sign===-1)){throw new Error("Sign of the duration ["+h.sign+"] must be either [1] or [-1].")
}}var e=true;
var g=function(b,a){if(Jsonix.Util.Type.exists(b)){if(!(Jsonix.Util.NumberUtils.isInteger(b)&&b>=0)){throw new Error(a.replace("{0}",b))
}else{return true
}}else{return false
}};
var f=function(b,a){if(Jsonix.Util.Type.exists(b)){if(!(Jsonix.Util.Type.isNumber(b)&&b>=0)){throw new Error(a.replace("{0}",b))
}else{return true
}}else{return false
}};
e=e&&!g(h.years,"Number of years [{0}] must be an unsigned integer.");
e=e&&!g(h.months,"Number of months [{0}] must be an unsigned integer.");
e=e&&!g(h.days,"Number of days [{0}] must be an unsigned integer.");
e=e&&!g(h.hours,"Number of hours [{0}] must be an unsigned integer.");
e=e&&!g(h.minutes,"Number of minutes [{0}] must be an unsigned integer.");
e=e&&!f(h.seconds,"Number of seconds [{0}] must be an unsigned number.");
if(e){throw new Error("At least one of the components (years, months, days, hours, minutes, seconds) must be set.")
}},print:function(h,j,f,i){this.validate(h);
var g="";
if(h.sign===-1){g+="-"
}g+="P";
if(h.years){g+=(h.years+"Y")
}if(h.months){g+=(h.months+"M")
}if(h.days){g+=(h.days+"D")
}if(h.hours||h.minutes||h.seconds){g+="T";
if(h.hours){g+=(h.hours+"H")
}if(h.minutes){g+=(h.minutes+"M")
}if(h.seconds){g+=(h.seconds+"S")
}}return g
},parse:function(m,p,j,o){var k=new RegExp("^"+Jsonix.Schema.XSD.Duration.PATTERN+"$");
var i=m.match(k);
if(i!==null){var n=true;
var l={};
if(i[1]){l.sign=-1
}if(i[3]){l.years=parseInt(i[3],10);
n=false
}if(i[5]){l.months=parseInt(i[5],10);
n=false
}if(i[7]){l.days=parseInt(i[7],10);
n=false
}if(i[10]){l.hours=parseInt(i[10],10);
n=false
}if(i[12]){l.minutes=parseInt(i[12],10);
n=false
}if(i[14]){l.seconds=Number(i[14]);
n=false
}return l
}else{throw new Error("Value ["+m+"] does not match the duration pattern.")
}},CLASS_NAME:"Jsonix.Schema.XSD.Duration"});
Jsonix.Schema.XSD.Duration.PATTERN="(-)?P(([0-9]+)Y)?(([0-9]+)M)?(([0-9]+)D)?(T(([0-9]+)H)?(([0-9]+)M)?(([0-9]+(\\.[0-9]+)?)S)?)?";
Jsonix.Schema.XSD.Duration.INSTANCE=new Jsonix.Schema.XSD.Duration();
Jsonix.Schema.XSD.Duration.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Duration.INSTANCE);
Jsonix.Schema.XSD.DateTime=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"DateTime",typeName:Jsonix.Schema.XSD.qname("dateTime"),parse:function(g,e,f,h){return this.parseDateTime(g)
},print:function(g,e,f,h){return this.printDateTime(g)
},CLASS_NAME:"Jsonix.Schema.XSD.DateTime"});
Jsonix.Schema.XSD.DateTime.INSTANCE=new Jsonix.Schema.XSD.DateTime();
Jsonix.Schema.XSD.DateTime.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTime.INSTANCE);
Jsonix.Schema.XSD.DateTimeAsDate=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"DateTimeAsDate",typeName:Jsonix.Schema.XSD.qname("dateTime"),parse:function(n,t,o,l){var q=this.parseDateTime(n);
var s=new Date();
s.setFullYear(q.year);
s.setMonth(q.month-1);
s.setDate(q.day);
s.setHours(q.hour);
s.setMinutes(q.minute);
s.setSeconds(q.second);
if(Jsonix.Util.Type.isNumber(q.fractionalSecond)){s.setMilliseconds(Math.floor(1000*q.fractionalSecond))
}var p;
var r;
var m=-s.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(q.timezone)){p=q.timezone;
r=false
}else{p=m;
r=true
}var k=new Date(s.getTime()+(60000*(-p+m)));
if(r){k.originalTimezone=null
}else{k.originalTimezone=q.timezone
}return k
},print:function(k,o,i,n){Jsonix.Util.Ensure.ensureDate(k);
var m;
var l=-k.getTimezoneOffset();
var p;
if(k.originalTimezone===null){return this.printDateTime(new Jsonix.XML.Calendar({year:k.getFullYear(),month:k.getMonth()+1,day:k.getDate(),hour:k.getHours(),minute:k.getMinutes(),second:k.getSeconds(),fractionalSecond:(k.getMilliseconds()/1000)}))
}else{if(Jsonix.Util.NumberUtils.isInteger(k.originalTimezone)){m=k.originalTimezone;
p=new Date(k.getTime()-(60000*(-m+l)))
}else{m=l;
p=k
}var j=this.printDateTime(new Jsonix.XML.Calendar({year:p.getFullYear(),month:p.getMonth()+1,day:p.getDate(),hour:p.getHours(),minute:p.getMinutes(),second:p.getSeconds(),fractionalSecond:(p.getMilliseconds()/1000),timezone:m}));
return j
}},isInstance:function(f,e,d){return Jsonix.Util.Type.isDate(f)
},CLASS_NAME:"Jsonix.Schema.XSD.DateTimeAsDate"});
Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE=new Jsonix.Schema.XSD.DateTimeAsDate();
Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE);
Jsonix.Schema.XSD.Time=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"Time",typeName:Jsonix.Schema.XSD.qname("time"),parse:function(g,e,f,h){return this.parseTime(g)
},print:function(g,e,f,h){return this.printTime(g)
},CLASS_NAME:"Jsonix.Schema.XSD.Time"});
Jsonix.Schema.XSD.Time.INSTANCE=new Jsonix.Schema.XSD.Time();
Jsonix.Schema.XSD.Time.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Time.INSTANCE);
Jsonix.Schema.XSD.TimeAsDate=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"TimeAsDate",typeName:Jsonix.Schema.XSD.qname("time"),parse:function(n,t,o,l){var q=this.parseTime(n);
var s=new Date();
s.setFullYear(1970);
s.setMonth(0);
s.setDate(1);
s.setHours(q.hour);
s.setMinutes(q.minute);
s.setSeconds(q.second);
if(Jsonix.Util.Type.isNumber(q.fractionalSecond)){s.setMilliseconds(Math.floor(1000*q.fractionalSecond))
}var p;
var r;
var m=-s.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(q.timezone)){p=q.timezone;
r=false
}else{p=m;
r=true
}var k=new Date(s.getTime()+(60000*(-p+m)));
if(r){k.originalTimezone=null
}else{k.originalTimezone=p
}return k
},print:function(n,u,s,l){Jsonix.Util.Ensure.ensureDate(n);
var r=n.getTime();
if(r<=-86400000&&r>=86400000){throw new Error("Invalid time ["+n+"].")
}if(n.originalTimezone===null){return this.printTime(new Jsonix.XML.Calendar({hour:n.getHours(),minute:n.getMinutes(),second:n.getSeconds(),fractionalSecond:(n.getMilliseconds()/1000)}))
}else{var t;
var p;
var m=-n.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(n.originalTimezone)){p=n.originalTimezone;
t=new Date(n.getTime()-(60000*(-p+m)))
}else{p=m;
t=n
}var o=t.getTime();
if(o>=(-m*60000)){return this.printTime(new Jsonix.XML.Calendar({hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),fractionalSecond:(t.getMilliseconds()/1000),timezone:p}))
}else{var q=Math.ceil(-o/3600000);
var v=t.getSeconds()+t.getMinutes()*60+t.getHours()*3600+q*3600-p*60;
return this.printTime(new Jsonix.XML.Calendar({hour:v%86400,minute:v%3600,second:v%60,fractionalSecond:(t.getMilliseconds()/1000),timezone:q*60}))
}}},isInstance:function(f,e,d){return Jsonix.Util.Type.isDate(f)&&f.getTime()>-86400000&&f.getTime()<86400000
},CLASS_NAME:"Jsonix.Schema.XSD.TimeAsDate"});
Jsonix.Schema.XSD.TimeAsDate.INSTANCE=new Jsonix.Schema.XSD.TimeAsDate();
Jsonix.Schema.XSD.TimeAsDate.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.TimeAsDate.INSTANCE);
Jsonix.Schema.XSD.Date=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"Date",typeName:Jsonix.Schema.XSD.qname("date"),parse:function(g,e,f,h){return this.parseDate(g)
},print:function(g,e,f,h){return this.printDate(g)
},CLASS_NAME:"Jsonix.Schema.XSD.Date"});
Jsonix.Schema.XSD.Date.INSTANCE=new Jsonix.Schema.XSD.Date();
Jsonix.Schema.XSD.Date.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Date.INSTANCE);
Jsonix.Schema.XSD.DateAsDate=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"DateAsDate",typeName:Jsonix.Schema.XSD.qname("date"),parse:function(n,t,o,l){var q=this.parseDate(n);
var s=new Date();
s.setFullYear(q.year);
s.setMonth(q.month-1);
s.setDate(q.day);
s.setHours(0);
s.setMinutes(0);
s.setSeconds(0);
s.setMilliseconds(0);
if(Jsonix.Util.Type.isNumber(q.fractionalSecond)){s.setMilliseconds(Math.floor(1000*q.fractionalSecond))
}var p;
var r;
var m=-s.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(q.timezone)){p=q.timezone;
r=false
}else{p=m;
r=true
}var k=new Date(s.getTime()+(60000*(-p+m)));
if(r){k.originalTimezone=null
}else{k.originalTimezone=p
}return k
},print:function(l,r,p,j){Jsonix.Util.Ensure.ensureDate(l);
var o=new Date(l.getTime());
o.setHours(0);
o.setMinutes(0);
o.setSeconds(0);
o.setMilliseconds(0);
if(l.originalTimezone===null){return this.printDate(new Jsonix.XML.Calendar({year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate()}))
}else{if(Jsonix.Util.NumberUtils.isInteger(l.originalTimezone)){var q=new Date(l.getTime()-(60000*(-l.originalTimezone-l.getTimezoneOffset())));
return this.printDate(new Jsonix.XML.Calendar({year:q.getFullYear(),month:q.getMonth()+1,day:q.getDate(),timezone:l.originalTimezone}))
}else{var k=-l.getTime()+o.getTime();
if(k===0){return this.printDate(new Jsonix.XML.Calendar({year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate()}))
}else{var n=k-(60000*l.getTimezoneOffset());
if(n>=-43200000){return this.printDate(new Jsonix.XML.Calendar({year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate(),timezone:Math.floor(n/60000)}))
}else{var m=new Date(l.getTime()+86400000);
return this.printDate(new Jsonix.XML.Calendar({year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),timezone:(Math.floor(n/60000)+1440)}))
}}}}},isInstance:function(f,e,d){return Jsonix.Util.Type.isDate(f)
},CLASS_NAME:"Jsonix.Schema.XSD.DateAsDate"});
Jsonix.Schema.XSD.DateAsDate.INSTANCE=new Jsonix.Schema.XSD.DateAsDate();
Jsonix.Schema.XSD.DateAsDate.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateAsDate.INSTANCE);
Jsonix.Schema.XSD.GYearMonth=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"GYearMonth",typeName:Jsonix.Schema.XSD.qname("gYearMonth"),CLASS_NAME:"Jsonix.Schema.XSD.GYearMonth",parse:function(g,e,f,h){return this.parseGYearMonth(g,e,f,h)
},print:function(g,e,f,h){return this.printGYearMonth(g,e,f,h)
}});
Jsonix.Schema.XSD.GYearMonth.INSTANCE=new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);
Jsonix.Schema.XSD.GYear=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"GYear",typeName:Jsonix.Schema.XSD.qname("gYear"),CLASS_NAME:"Jsonix.Schema.XSD.GYear",parse:function(g,e,f,h){return this.parseGYear(g,e,f,h)
},print:function(g,e,f,h){return this.printGYear(g,e,f,h)
}});
Jsonix.Schema.XSD.GYear.INSTANCE=new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);
Jsonix.Schema.XSD.GMonthDay=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"GMonthDay",typeName:Jsonix.Schema.XSD.qname("gMonthDay"),CLASS_NAME:"Jsonix.Schema.XSD.GMonthDay",parse:function(g,e,f,h){return this.parseGMonthDay(g,e,f,h)
},print:function(g,e,f,h){return this.printGMonthDay(g,e,f,h)
}});
Jsonix.Schema.XSD.GMonthDay.INSTANCE=new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);
Jsonix.Schema.XSD.GDay=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"GDay",typeName:Jsonix.Schema.XSD.qname("gDay"),CLASS_NAME:"Jsonix.Schema.XSD.GDay",parse:function(g,e,f,h){return this.parseGDay(g,e,f,h)
},print:function(g,e,f,h){return this.printGDay(g,e,f,h)
}});
Jsonix.Schema.XSD.GDay.INSTANCE=new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);
Jsonix.Schema.XSD.GMonth=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"GMonth",typeName:Jsonix.Schema.XSD.qname("gMonth"),CLASS_NAME:"Jsonix.Schema.XSD.GMonth",parse:function(g,e,f,h){return this.parseGMonth(g,e,f,h)
},print:function(g,e,f,h){return this.printGMonth(g,e,f,h)
}});
Jsonix.Schema.XSD.GMonth.INSTANCE=new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);
Jsonix.Schema.XSD.ID=Jsonix.Class(Jsonix.Schema.XSD.String,{name:"ID",typeName:Jsonix.Schema.XSD.qname("ID"),CLASS_NAME:"Jsonix.Schema.XSD.ID"});
Jsonix.Schema.XSD.ID.INSTANCE=new Jsonix.Schema.XSD.ID();
Jsonix.Schema.XSD.ID.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.ID.INSTANCE);
Jsonix.Schema.XSD.IDREF=Jsonix.Class(Jsonix.Schema.XSD.String,{name:"IDREF",typeName:Jsonix.Schema.XSD.qname("IDREF"),CLASS_NAME:"Jsonix.Schema.XSD.IDREF"});
Jsonix.Schema.XSD.IDREF.INSTANCE=new Jsonix.Schema.XSD.IDREF();
Jsonix.Schema.XSD.IDREF.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.IDREF.INSTANCE);
Jsonix.Schema.XSD.IDREFS=Jsonix.Class(Jsonix.Schema.XSD.List,{name:"IDREFS",initialize:function(){Jsonix.Schema.XSD.List.prototype.initialize.apply(this,[Jsonix.Schema.XSD.IDREF.INSTANCE,Jsonix.Schema.XSD.qname("IDREFS")," "])
},CLASS_NAME:"Jsonix.Schema.XSD.IDREFS"});
Jsonix.Schema.XSD.IDREFS.INSTANCE=new Jsonix.Schema.XSD.IDREFS();
Jsonix.Schema.XSI={};
Jsonix.Schema.XSI.NAMESPACE_URI="http://www.w3.org/2001/XMLSchema-instance";
Jsonix.Schema.XSI.PREFIX="xsi";
Jsonix.Schema.XSI.TYPE="type";
Jsonix.Schema.XSI.NIL="nil";
Jsonix.Schema.XSI.qname=function(b){Jsonix.Util.Ensure.ensureString(b);
return new Jsonix.XML.QName(Jsonix.Schema.XSI.NAMESPACE_URI,b,Jsonix.Schema.XSI.PREFIX)
};
Jsonix.Schema.XSI.TYPE_QNAME=Jsonix.Schema.XSI.qname(Jsonix.Schema.XSI.TYPE);
Jsonix.Context=Jsonix.Class(Jsonix.Mapping.Styled,{modules:[],typeInfos:null,typeNameKeyToTypeInfo:null,elementInfos:null,options:null,substitutionMembersMap:null,scopedElementInfosMap:null,supportXsiType:true,initialize:function(i,l){Jsonix.Mapping.Styled.prototype.initialize.apply(this,[l]);
this.modules=[];
this.elementInfos=[];
this.typeInfos={};
this.typeNameKeyToTypeInfo={};
this.registerBuiltinTypeInfos();
this.namespacePrefixes={};
this.prefixNamespaces={};
this.substitutionMembersMap={};
this.scopedElementInfosMap={};
if(Jsonix.Util.Type.exists(l)){Jsonix.Util.Ensure.ensureObject(l);
if(Jsonix.Util.Type.isObject(l.namespacePrefixes)){this.namespacePrefixes=Jsonix.Util.Type.cloneObject(l.namespacePrefixes,{})
}if(Jsonix.Util.Type.isBoolean(l.supportXsiType)){this.supportXsiType=l.supportXsiType
}}for(var j in this.namespacePrefixes){if(this.namespacePrefixes.hasOwnProperty(j)){p=this.namespacePrefixes[j];
this.prefixNamespaces[p]=j
}}if(Jsonix.Util.Type.exists(i)){Jsonix.Util.Ensure.ensureArray(i);
var g,h,k;
for(g=0;
g<i.length;
g++){h=i[g];
k=this.createModule(h);
this.modules[g]=k
}}this.processModules()
},createModule:function(d){var c;
if(d instanceof this.mappingStyle.module){c=d
}else{d=Jsonix.Util.Type.cloneObject(d);
c=new this.mappingStyle.module(d,{mappingStyle:this.mappingStyle})
}return c
},registerBuiltinTypeInfos:function(){for(var b=0;
b<this.builtinTypeInfos.length;
b++){this.registerTypeInfo(this.builtinTypeInfos[b])
}},processModules:function(){var d,c;
for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.registerTypeInfos(this)
}for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.buildTypeInfos(this)
}for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.registerElementInfos(this)
}for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.buildElementInfos(this)
}},registerTypeInfo:function(d){Jsonix.Util.Ensure.ensureObject(d);
var c=d.name||d.n||null;
Jsonix.Util.Ensure.ensureString(c);
this.typeInfos[c]=d;
if(d.typeName&&d.typeName.key){this.typeNameKeyToTypeInfo[d.typeName.key]=d
}},resolveTypeInfo:function(f,j){if(!Jsonix.Util.Type.exists(f)){return null
}else{if(f instanceof Jsonix.Model.TypeInfo){return f
}else{if(Jsonix.Util.Type.isString(f)){var g;
if(f.length>0&&f.charAt(0)==="."){var h=j.name||j.n||undefined;
Jsonix.Util.Ensure.ensureObject(j,"Type info mapping can only be resolved if module is provided.");
Jsonix.Util.Ensure.ensureString(h,"Type info mapping can only be resolved if module name is provided.");
g=h+f
}else{g=f
}if(!this.typeInfos[g]){throw new Error("Type info ["+g+"] is not known in this context.")
}else{return this.typeInfos[g]
}}else{Jsonix.Util.Ensure.ensureObject(j,"Type info mapping can only be resolved if module is provided.");
var i=j.createTypeInfo(f);
i.build(this,j);
return i
}}}},registerElementInfo:function(k,m){Jsonix.Util.Ensure.ensureObject(k);
this.elementInfos.push(k);
if(Jsonix.Util.Type.exists(k.substitutionHead)){var n=k.substitutionHead;
var l=n.key;
var h=this.substitutionMembersMap[l];
if(!Jsonix.Util.Type.isArray(h)){h=[];
this.substitutionMembersMap[l]=h
}h.push(k)
}var i;
if(Jsonix.Util.Type.exists(k.scope)){i=this.resolveTypeInfo(k.scope,m).name
}else{i="##global"
}var j=this.scopedElementInfosMap[i];
if(!Jsonix.Util.Type.isObject(j)){j={};
this.scopedElementInfosMap[i]=j
}j[k.elementName.key]=k
},getTypeInfoByValue:function(f){if(!Jsonix.Util.Type.exists(f)){return undefined
}if(Jsonix.Util.Type.isObject(f)){var d=f.TYPE_NAME;
if(Jsonix.Util.Type.isString(d)){var e=this.getTypeInfoByName(d);
if(e){return e
}}}return undefined
},getTypeInfoByName:function(b){return this.typeInfos[b]
},getTypeInfoByTypeName:function(c){var d=Jsonix.XML.QName.fromObjectOrString(c,this);
return this.typeNameKeyToTypeInfo[d.key]
},getTypeInfoByTypeNameKey:function(b){return this.typeNameKeyToTypeInfo[b]
},getElementInfo:function(o,m){if(Jsonix.Util.Type.exists(m)){var j=m.name;
var k=this.scopedElementInfosMap[j];
if(Jsonix.Util.Type.exists(k)){var n=k[o.key];
if(Jsonix.Util.Type.exists(n)){return n
}}}var l="##global";
var q=this.scopedElementInfosMap[l];
if(Jsonix.Util.Type.exists(q)){var i=q[o.key];
if(Jsonix.Util.Type.exists(i)){return i
}}return null
},getSubstitutionMembers:function(b){return this.substitutionMembersMap[Jsonix.XML.QName.fromObject(b).key]
},createMarshaller:function(){return new this.mappingStyle.marshaller(this)
},createUnmarshaller:function(){return new this.mappingStyle.unmarshaller(this)
},getNamespaceURI:function(b){Jsonix.Util.Ensure.ensureString(b);
return this.prefixNamespaces[b]
},getPrefix:function(e,d){Jsonix.Util.Ensure.ensureString(e);
var f=this.namespacePrefixes[e];
if(Jsonix.Util.Type.isString(f)){return f
}else{return d
}},builtinTypeInfos:[Jsonix.Schema.XSD.AnyType.INSTANCE,Jsonix.Schema.XSD.AnySimpleType.INSTANCE,Jsonix.Schema.XSD.AnyURI.INSTANCE,Jsonix.Schema.XSD.Base64Binary.INSTANCE,Jsonix.Schema.XSD.Boolean.INSTANCE,Jsonix.Schema.XSD.Byte.INSTANCE,Jsonix.Schema.XSD.Calendar.INSTANCE,Jsonix.Schema.XSD.DateAsDate.INSTANCE,Jsonix.Schema.XSD.Date.INSTANCE,Jsonix.Schema.XSD.DateTimeAsDate.INSTANCE,Jsonix.Schema.XSD.DateTime.INSTANCE,Jsonix.Schema.XSD.Decimal.INSTANCE,Jsonix.Schema.XSD.Double.INSTANCE,Jsonix.Schema.XSD.Duration.INSTANCE,Jsonix.Schema.XSD.Float.INSTANCE,Jsonix.Schema.XSD.GDay.INSTANCE,Jsonix.Schema.XSD.GMonth.INSTANCE,Jsonix.Schema.XSD.GMonthDay.INSTANCE,Jsonix.Schema.XSD.GYear.INSTANCE,Jsonix.Schema.XSD.GYearMonth.INSTANCE,Jsonix.Schema.XSD.HexBinary.INSTANCE,Jsonix.Schema.XSD.ID.INSTANCE,Jsonix.Schema.XSD.IDREF.INSTANCE,Jsonix.Schema.XSD.IDREFS.INSTANCE,Jsonix.Schema.XSD.Int.INSTANCE,Jsonix.Schema.XSD.Integer.INSTANCE,Jsonix.Schema.XSD.Language.INSTANCE,Jsonix.Schema.XSD.Long.INSTANCE,Jsonix.Schema.XSD.Name.INSTANCE,Jsonix.Schema.XSD.NCName.INSTANCE,Jsonix.Schema.XSD.NegativeInteger.INSTANCE,Jsonix.Schema.XSD.NMToken.INSTANCE,Jsonix.Schema.XSD.NMTokens.INSTANCE,Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE,Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE,Jsonix.Schema.XSD.NormalizedString.INSTANCE,Jsonix.Schema.XSD.Number.INSTANCE,Jsonix.Schema.XSD.PositiveInteger.INSTANCE,Jsonix.Schema.XSD.QName.INSTANCE,Jsonix.Schema.XSD.Short.INSTANCE,Jsonix.Schema.XSD.String.INSTANCE,Jsonix.Schema.XSD.Strings.INSTANCE,Jsonix.Schema.XSD.TimeAsDate.INSTANCE,Jsonix.Schema.XSD.Time.INSTANCE,Jsonix.Schema.XSD.Token.INSTANCE,Jsonix.Schema.XSD.UnsignedByte.INSTANCE,Jsonix.Schema.XSD.UnsignedInt.INSTANCE,Jsonix.Schema.XSD.UnsignedLong.INSTANCE,Jsonix.Schema.XSD.UnsignedShort.INSTANCE],CLASS_NAME:"Jsonix.Context"});
	// Complete Jsonix script is included above
	return { Jsonix: Jsonix };
};

// If the require function exists ...
if (typeof require === 'function') {
	// ... but the define function does not exists
	if (typeof define !== 'function') {
		// Load the define function via amdefine
		var define = require('amdefine')(module);
		// If we're not in browser
		if (typeof window === 'undefined')
		{
			// Require xmldom, xmlhttprequest and fs
			define(["xmldom", "xmlhttprequest", "fs"], _jsonix_factory);
		}
		else
		{
			// We're probably in browser, maybe browserify
			// Do not require xmldom, xmlhttprequest as they'r provided by the browser
			// Do not require fs since file system is not available anyway
			define([], _jsonix_factory);
		}
	}
	else {
		// Otherwise assume we're in the browser/RequireJS environment
		// Load the module without xmldom and xmlhttprequests dependencies
		define([], _jsonix_factory);
	}
}
// If the require function does not exists, we're not in Node.js and therefore in browser environment
else
{
	// Just call the factory and set Jsonix as global.
	var Jsonix = _jsonix_factory().Jsonix;
}

/**
* vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
*  
* Version - 0.99.00.1.beta
* Copyright (c) 2012 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/vkbeautify/
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*   Pretty print
*
*        vkbeautify.xml(text [,indent_pattern]);
*        vkbeautify.json(text [,indent_pattern]);
*        vkbeautify.css(text [,indent_pattern]);
*        vkbeautify.sql(text [,indent_pattern]);
*
*        @text - String; text to beatufy;
*        @indent_pattern - Integer | String;
*                Integer:  number of white spaces;
*                String:   character string to visualize indentation ( can also be a set of white spaces )
*   Minify
*
*        vkbeautify.xmlmin(text [,preserve_comments]);
*        vkbeautify.jsonmin(text);
*        vkbeautify.cssmin(text [,preserve_comments]);
*        vkbeautify.sqlmin(text);
*
*        @text - String; text to minify;
*        @preserve_comments - Bool; [optional];
*                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
*
*   Examples:
*        vkbeautify.xml(text); // pretty print XML
*        vkbeautify.json(text, 4 ); // pretty print JSON
*        vkbeautify.css(text, '. . . .'); // pretty print CSS
*        vkbeautify.sql(text, '----'); // pretty print SQL
*
*        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
*        vkbeautify.jsonmin(text);// minify JSON
*        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
*        vkbeautify.sqlmin(text);// minify SQL
*
*/

(function() {

function createShiftArr(step) {

	var space = '    ';
	
	if ( isNaN(parseInt(step)) ) {  // argument is string
		space = step;
	} else { // argument is integer
		switch(step) {
			case 1: space = ' '; break;
			case 2: space = '  '; break;
			case 3: space = '   '; break;
			case 4: space = '    '; break;
			case 5: space = '     '; break;
			case 6: space = '      '; break;
			case 7: space = '       '; break;
			case 8: space = '        '; break;
			case 9: space = '         '; break;
			case 10: space = '          '; break;
			case 11: space = '           '; break;
			case 12: space = '            '; break;
		}
	}

	var shift = ['\n']; // array of shifts
	for(var ix=0;ix<100;ix++){
		shift.push(shift[ix]+space); 
	}
	return shift;
}

function vkbeautify(){
	this.step = '    '; // 4 spaces
	this.shift = createShiftArr(this.step);
}

vkbeautify.prototype.xml = function(text,step) {

	var ar = text.replace(/>\s*</g,"><")
				 .replace(/</g,"~::~<")
				 .replace(/\s*xmlns:/g,"~::~xmlns:")
				 .replace(/\s*xmlns=/g,"~::~xmlns=")
				 .split('~::~'),
		len = ar.length,
		inComment = false,
		deep = 0,
		str = '',
		ix,
		shift = step ? createShiftArr(step) : this.shift;

		for(ix=0;ix<len;ix++) {
			// start comment or <![CDATA[...]]> or <!DOCTYPE //
			if(ar[ix].search(/<!/) > -1) { 
				str += shift[deep]+ar[ix];
				inComment = true; 
				// end comment  or <![CDATA[...]]> //
				if(ar[ix].search(/-->/) > -1 || ar[ix].search(/]>/) > -1 || ar[ix].search(/!DOCTYPE/) > -1 ) {
					inComment = false; 
				}
			} else 
			// end comment  or <![CDATA[...]]> //
			if(ar[ix].search(/-->/) > -1 || ar[ix].search(/]>/) > -1) {
				str += ar[ix];
				inComment = false; 
			} else 
			// <elm></elm> //
			if( /^<\w/.exec(ar[ix-1]) && /^<\/\w/.exec(ar[ix]) &&
					// This comparison will eventually compare an array with a single string item to another string
					// so we voluntarily use '=='
				/^<[\w:\-\.,]+/.exec(ar[ix-1]) == /^<\/[\w:\-\.,]+/.exec(ar[ix])[0].replace('/','')) { // jshint ignore:line
				str += ar[ix];
				if(!inComment) {
					deep--;
				}
			} else
			 // <elm> //
			if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) === -1 && ar[ix].search(/\/>/) === -1 ) {
				str = !inComment ? str += shift[deep++]+ar[ix] : str += ar[ix];
			} else 
			 // <elm>...</elm> //
			if(ar[ix].search(/<\w/) > -1 && ar[ix].search(/<\//) > -1) {
				str = !inComment ? str += shift[deep]+ar[ix] : str += ar[ix];
			} else 
			// </elm> //
			if(ar[ix].search(/<\//) > -1) { 
				str = !inComment ? str += shift[--deep]+ar[ix] : str += ar[ix];
			} else 
			// <elm/> //
			if(ar[ix].search(/\/>/) > -1 ) { 
				str = !inComment ? str += shift[deep]+ar[ix] : str += ar[ix];
			} else 
			// <? xml ... ?> //
			if(ar[ix].search(/<\?/) > -1) { 
				str += shift[deep]+ar[ix];
			} else 
			// xmlns //
			if( ar[ix].search(/xmlns:/) > -1  || ar[ix].search(/xmlns=/) > -1) {
				str += shift[deep]+ar[ix];
			} 
			
			else {
				str += ar[ix];
			}
		}

	return  (str.charAt(0) === '\n') ? str.slice(1) : str;
};

vkbeautify.prototype.json = function(text,step) {

	step = step ? step : this.step;
	
	if (typeof JSON === 'undefined' ) return text;
	
	if ( typeof text === "string" ) return JSON.stringify(JSON.parse(text), null, step);
	if ( typeof text === "object" ) return JSON.stringify(text, null, step);
		
	return text; // text is not string nor object
};

vkbeautify.prototype.css = function(text, step) {

	var ar = text.replace(/\s+/g,' ')
				.replace(/{/g,"{~::~")
				.replace(/}/g,"~::~}~::~")
				.replace(/;/g,";~::~")
				.replace(/\/\*/g,"~::~/*")
				.replace(/\*\//g,"*/~::~")
				.replace(/~::~\s*~::~/g,"~::~")
				.split('~::~'),
		len = ar.length,
		deep = 0,
		str = '',
		ix,
		shift = step ? createShiftArr(step) : this.shift;
		
		for(ix=0;ix<len;ix++) {

			if( /{/.exec(ar[ix]))  {
				str += shift[deep++]+ar[ix];
			} else 
			if( /}/.exec(ar[ix]))  {
				str += shift[--deep]+ar[ix];
			} else
			if( /\*\\/.exec(ar[ix]))  { 
				str += shift[deep]+ar[ix];
			}
			else {
				str += shift[deep]+ar[ix];
			}
		}
		return str.replace(/^\n+/,'');
};

//----------------------------------------------------------------------------

function isSubquery(str, parenthesisLevel) {
	return  parenthesisLevel - (str.replace(/\(/g,'').length - str.replace(/\)/g,'').length );
}

function split_sql(str, tab) {

	return str.replace(/\s+/g," ")

				.replace(/ AND /ig,"~::~"+tab+tab+"AND ")
				.replace(/ BETWEEN /ig,"~::~"+tab+"BETWEEN ")
				.replace(/ CASE /ig,"~::~"+tab+"CASE ")
				.replace(/ ELSE /ig,"~::~"+tab+"ELSE ")
				.replace(/ END /ig,"~::~"+tab+"END ")
				.replace(/ FROM /ig,"~::~FROM ")
				.replace(/ GROUP\s+BY/ig,"~::~GROUP BY ")
				.replace(/ HAVING /ig,"~::~HAVING ")
				//.replace(/ SET /ig," SET~::~")
				.replace(/ IN /ig," IN ")
				
				.replace(/ JOIN /ig,"~::~JOIN ")
				.replace(/ CROSS~::~+JOIN /ig,"~::~CROSS JOIN ")
				.replace(/ INNER~::~+JOIN /ig,"~::~INNER JOIN ")
				.replace(/ LEFT~::~+JOIN /ig,"~::~LEFT JOIN ")
				.replace(/ RIGHT~::~+JOIN /ig,"~::~RIGHT JOIN ")
				
				.replace(/ ON /ig,"~::~"+tab+"ON ")
				.replace(/ OR /ig,"~::~"+tab+tab+"OR ")
				.replace(/ ORDER\s+BY/ig,"~::~ORDER BY ")
				.replace(/ OVER /ig,"~::~"+tab+"OVER ")

				.replace(/\(\s*SELECT /ig,"~::~(SELECT ")
				.replace(/\)\s*SELECT /ig,")~::~SELECT ")
				
				.replace(/ THEN /ig," THEN~::~"+tab+"")
				.replace(/ UNION /ig,"~::~UNION~::~")
				.replace(/ USING /ig,"~::~USING ")
				.replace(/ WHEN /ig,"~::~"+tab+"WHEN ")
				.replace(/ WHERE /ig,"~::~WHERE ")
				.replace(/ WITH /ig,"~::~WITH ")
				
				//.replace(/,\s*\(/ig,",~::~( ")
				//.replace(/,/ig,",~::~"+tab+tab+"")

				.replace(/ ALL /ig," ALL ")
				.replace(/ AS /ig," AS ")
				.replace(/ ASC /ig," ASC ")	
				.replace(/ DESC /ig," DESC ")	
				.replace(/ DISTINCT /ig," DISTINCT ")
				.replace(/ EXISTS /ig," EXISTS ")
				.replace(/ NOT /ig," NOT ")
				.replace(/ NULL /ig," NULL ")
				.replace(/ LIKE /ig," LIKE ")
				.replace(/\s*SELECT /ig,"SELECT ")
				.replace(/\s*UPDATE /ig,"UPDATE ")
				.replace(/ SET /ig," SET ")
							
				.replace(/~::~+/g,"~::~")
				.split('~::~');
}

vkbeautify.prototype.sql = function(text,step) {

	var ar_by_quote = text.replace(/\s+/g," ")
							.replace(/'/ig,"~::~\'")
							.split('~::~'),
		len = ar_by_quote.length,
		ar = [],
		deep = 0,
		tab = this.step,//+this.step,
		// inComment = true,
		// inQuote = false,
		parenthesisLevel = 0,
		str = '',
		ix,
		shift = step ? createShiftArr(step) : this.shift;
	for(ix=0;ix<len;ix++) {
			if(ix%2) {
				ar = ar.concat(ar_by_quote[ix]);
			} else {
				ar = ar.concat(split_sql(ar_by_quote[ix], tab) );
			}
		}
		
		len = ar.length;
		for(ix=0;ix<len;ix++) {
			
			parenthesisLevel = isSubquery(ar[ix], parenthesisLevel);
			
			if( /\s*\s*SELECT\s*/.exec(ar[ix]))  {
				ar[ix] = ar[ix].replace(/,/g,",\n"+tab+tab+"");
			} 
			
			if( /\s*\s*SET\s*/.exec(ar[ix]))  {
				ar[ix] = ar[ix].replace(/,/g,",\n"+tab+tab+"");
			} 
			
			if( /\s*\(\s*SELECT\s*/.exec(ar[ix]))  {
				deep++;
				str += shift[deep]+ar[ix];
			} else 
			if( /'/.exec(ar[ix]) )  {
				if(parenthesisLevel<1 && deep) {
					deep--;
				}
				str += ar[ix];
			}
			else  { 
				str += shift[deep]+ar[ix];
				if(parenthesisLevel<1 && deep) {
					deep--;
				}
			} 
			// var junk = 0;
		}

		str = str.replace(/^\n+/,'').replace(/\n+/g,"\n");
		return str;
};


vkbeautify.prototype.xmlmin = function(text, preserveComments) {

	var str = preserveComments ? text
							   : text.replace(/<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/g,"")
									 .replace(/[ \r\n\t]+xmlns/g, ' xmlns');
	return  str.replace(/>\s*</g,"><");
};

vkbeautify.prototype.jsonmin = function(text) {

	if (typeof JSON === 'undefined' ) return text; 
	
	return JSON.stringify(JSON.parse(text), null, 0); 
				
};

vkbeautify.prototype.cssmin = function(text, preserveComments) {
	
	var str = preserveComments ? text
							   : text.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"") ;

	return str.replace(/\s+/g,' ')
			  .replace(/{\s+/g,"{")
			  .replace(/}\s+/g,"}")
			  .replace(/;\s+/g,";")
			  .replace(/\/\*\s+/g,"/*")
			  .replace(/\*\/\s+/g,"*/");
};

vkbeautify.prototype.sqlmin = function(text) {
	return text.replace(/\s+/g," ").replace(/\s+\(/,"(").replace(/\s+\)/,")");
};

window.vkbeautify = new vkbeautify();

})();


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
var ConfigModel399_Module_Factory = function () {
  var ConfigModel399 = {
    name: 'ConfigModel399',
    typeInfos: [{
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
      }],
    elementInfos: [{
        typeInfo: '.Configuration',
        elementName: {
          localPart: 'Configuration'
        }
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
var ConfigModel3995_Module_Factory = function () {
  var ConfigModel3995 = {
    name: 'ConfigModel3995',
    typeInfos: [{
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
        localName: 'Configuration.Farm.ServerRoles.SpecialLoad',
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
        localName: 'Configuration.Farm.ServerRoles',
        typeName: null,
        propertyInfos: [{
            name: 'specialLoad',
            required: true,
            elementName: {
              localPart: 'SpecialLoad'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.SpecialLoad'
          }, {
            name: 'webFrontEnd',
            required: true,
            elementName: {
              localPart: 'WebFrontEnd'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.WebFrontEnd'
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
            name: 'distributedCache',
            required: true,
            elementName: {
              localPart: 'DistributedCache'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.DistributedCache'
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
      }],
    elementInfos: [{
        typeInfo: '.Configuration',
        elementName: {
          localPart: 'Configuration'
        }
      }]
  };
  return {
    ConfigModel3995: ConfigModel3995
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ConfigModel3995_Module_Factory);
}
else {
  var ConfigModel3995_Module = ConfigModel3995_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigModel3995 = ConfigModel3995_Module.ConfigModel3995;
  }
  else {
    var ConfigModel3995 = ConfigModel3995_Module.ConfigModel3995;
  }
}
var ConfigModel39951_Module_Factory = function () {
  var ConfigModel39951 = {
    name: 'ConfigModel39951',
    typeInfos: [{
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
            name: 'distributedCache',
            required: true,
            elementName: {
              localPart: 'DistributedCache'
            },
            typeInfo: '.Configuration.Farm.ServerRoles.DistributedCache'
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
      }],
    elementInfos: [{
        typeInfo: '.Configuration',
        elementName: {
          localPart: 'Configuration'
        }
      }]
  };
  return {
    ConfigModel39951: ConfigModel39951
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ConfigModel39951_Module_Factory);
}
else {
  var ConfigModel39951_Module = ConfigModel39951_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ConfigModel39951 = ConfigModel39951_Module.ConfigModel39951;
  }
  else {
    var ConfigModel39951 = ConfigModel39951_Module.ConfigModel39951;
  }
}
/// <reference path="../../typings/tsd.d.ts" />
"use strict";
/// <reference path="../typings/tsd.d.ts" />
(function () {
    "use strict";
    angular
        .module("ASPIO", ["ngRoute", "ngMessages", "ui.bootstrap"]);
})();
/// <reference path="../typings/tsd.d.ts" />
(function () {
    "use strict";
    angular
        .module("ASPIO")
        .config(["$tooltipProvider", function ($tooltipProvider) {
            $tooltipProvider.options({ appendToBody: true, popupDelay: 500 });
        }
    ])
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                title: "Home - AutoSPInstaller Online",
                description: "New AutoSPInstaller Configuration Interface. Assists with PowerShell based deployments of SharePoint 2010 and 2013.",
                templateUrl: "Partials/_homePartial.html",
                controller: "Blank"
            })
                .when("/FarmConfiguration", {
                title: "Farm Configuration - AutoSPInstaller Online",
                description: "Farm Configuration interface, replacement for AutoSPInstallerGUI",
                templateUrl: "Partials/_ASPIOPartial.html",
                controller: "FarmConfiguration"
            })
                .when("/Guide", {
                description: "Guide on how to use AutoSPInstaller",
                title: "Guide - AutoSPInstaller Online",
                templateUrl: "Partials/_guidePartial.html",
                controller: "Blank"
            })
                .when("/Download", {
                description: "Download the latest version of AutoSPInstaller",
                title: "Download - AutoSPInstaller Online",
                templateUrl: "Partials/_downloadPartial.html",
                controller: "Blank"
            })
                .when("/Privacy", {
                description: "Terms of Service and Privacy Policy",
                title: "ToS & Privacy - AutoSPInstaller Online",
                templateUrl: "Partials/_privacyPartial.html",
                controller: "Blank"
            })
                .when("/Contact", {
                description: "Contact Information",
                title: "Contact - AutoSPInstaller Online",
                templateUrl: "Partials/_contactPartial.html",
                controller: "Blank"
            })
                .when("/News", {
                description: "AutoSPIntaller related news",
                title: "News - AutoSPInstaller Online",
                templateUrl: "Partials/_newsPartial.html",
                controller: "Blank"
            })
                .when("/FAQ", {
                description: "Frequently Asked Questions",
                title: "FAQ - AutoSPInstaller Online",
                templateUrl: "Partials/_faqPartial.html",
                controller: "Blank"
            })
                .otherwise({
                redirectTo: "/"
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $locationProvider.hashPrefix("!");
        }])
        .run(["$location", "$rootScope", function ($location, $rootScope) {
            $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
                if (current.hasOwnProperty("$$route")) {
                    $rootScope.title = current.$$route.title;
                    $rootScope.description = current.$$route.description;
                }
            });
        }
    ]);
})();
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    function BlankController($scope, xmlService) {
        var vm = this;
        function activate() {
            window.onbeforeunload = function (event) {
                // Only warn user if there is a existing Configuration
                if (xmlService.config !== null) {
                    return "Are you sure you want to leave? Any unsaved Farm Configuration will be lost!";
                }
            };
            $scope.$on("$destroy", function () {
                window.onbeforeunload = undefined;
            });
        }
        activate();
    }
    BlankController.$inject = ["$scope", "xmlService"];
    angular
        .module("ASPIO")
        .controller("Blank", BlankController);
})();
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
            $scope.loadXML = function (xml) {
                try {
                    // Try to Upgrade XML to Current Version
                    if (xml.indexOf("Version='3.99.60'") !== -1 || xml.indexOf("Version=\"3.99.60\"") !== -1) {
                        xmlService.LoadXml(xml);
                    }
                    else if (xml.indexOf("Version='3.99.51'") !== -1 || xml.indexOf("Version=\"3.99.51\"") !== -1) {
                        xmlService.UpgrdeXml39951to39960(xml);
                        alert("Your XML Schema was upgraded from 3.99.51 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    }
                    else if (xml.indexOf("Version='3.99.5'") !== -1 || xml.indexOf("Version=\"3.99.5\"") !== -1) {
                        xmlService.UpgrdeXml3995toLatest(xml);
                        alert("Your XML Schema was upgraded from 3.99.5 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    }
                    else if (xml.indexOf("Version='3.99'") !== -1 || xml.indexOf("Version=\"3.99\"") !== -1) {
                        xmlService.UpgrdeXml399toLatest(xml);
                        alert("Your XML Schema was upgraded from 3.99 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    }
                    else if (xml.indexOf("Version='3.98'") !== -1 || xml.indexOf("Version=\"3.98\"") !== -1) {
                        xmlService.UpgrdeXml398toLatest(xml);
                        alert("Your XML Schema was upgraded from 3.98 to 3.99.60. Please download the latest version of AutoSPInstaller in order to use this configuration.");
                    }
                    else {
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
                }
                catch (err) {
                    alert("There is an issue with the XML. Please check that its a valid XML and that it is at least version 3.98. Error: " + err.message);
                    return;
                }
                $scope.setView("Servers");
            };
            $scope.loadTemplate = function () {
                $scope.loadXML("<Configuration Environment='Dev' Version='3.99.60'><Install SPVersion='2019'><ConfigFile>config-AutoSPInstaller.xml</ConfigFile><InstallDir></InstallDir><DataDir></DataDir><PIDKey></PIDKey><SKU>Enterprise</SKU><OfflineInstall>false</OfflineInstall><PauseAfterInstall>false</PauseAfterInstall><RemoteInstall Enable='false'><ParallelInstall>false</ParallelInstall></RemoteInstall><AutoAdminLogon Enable='false'><Password></Password></AutoAdminLogon><Disable><LoopbackCheck>true</LoopbackCheck><UnusedServices>true</UnusedServices><IEEnhancedSecurity>true</IEEnhancedSecurity><CertificateRevocationListCheck>false</CertificateRevocationListCheck></Disable></Install><Farm><Passphrase></Passphrase><Account><AddToLocalAdminsDuringSetup>true</AddToLocalAdminsDuringSetup><LeaveInLocalAdmins>false</LeaveInLocalAdmins><Username>CONTOSO\\SP_Farm</Username><Password></Password></Account><CentralAdmin Provision='localhost'><Database>Content_CentralAdmin</Database><Port>2019</Port><UseSSL>true</UseSSL></CentralAdmin><Database><DBServer></DBServer><DBAlias Create='true'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias><DBPrefix>AutoSPInstaller</DBPrefix><ConfigDB>Config</ConfigDB></Database><Services><SandboxedCodeService Start='false'/><ClaimsToWindowsTokenService Start='false' UpdateAccount='false'/><SMTP Install='false'/><OutgoingEmail Configure='false'><SMTPServer></SMTPServer><EmailAddress></EmailAddress><ReplyToEmail></ReplyToEmail></OutgoingEmail><IncomingEmail Start='localhost'/><DistributedCache Start='localhost'/><WorkflowTimer Start='localhost'/><FoundationWebApplication Start='localhost'/></Services><ServerRoles><Custom Provision='localhost'/><WebFrontEnd Provision='false'/><WebFrontEndWithDistributedCache Provision='false'/><SingleServerFarm Provision='false'/><Search Provision='false'/><Application Provision='false'/><ApplicationWithSearch Provision='false'/><DistributedCache Provision='false'/></ServerRoles><ManagedAccounts><ManagedAccount CommonName='spservice'><Username>CONTOSO\\SP_Services</Username><Password></Password></ManagedAccount><ManagedAccount CommonName='Portal'><Username>CONTOSO\\SP_PortalAppPool</Username><Password></Password></ManagedAccount><ManagedAccount CommonName='MySiteHost'><Username>CONTOSO\\SP_ProfilesAppPool</Username><Password></Password></ManagedAccount><ManagedAccount CommonName='SearchService'><Username>CONTOSO\\SP_SearchService</Username><Password></Password></ManagedAccount></ManagedAccounts><ObjectCacheAccounts><SuperUser>CONTOSO\\SP_CacheSuperUser</SuperUser><SuperReader>CONTOSO\\SP_CacheSuperReader</SuperReader></ObjectCacheAccounts><Logging><IISLogs Compress='true'><Path></Path></IISLogs><ULSLogs Compress='true'><LogLocation></LogLocation><LogDiskSpaceUsageGB></LogDiskSpaceUsageGB><DaysToKeepLogs></DaysToKeepLogs><LogCutInterval></LogCutInterval></ULSLogs><UsageLogs Compress='true'><UsageLogDir></UsageLogDir><UsageLogMaxSpaceGB></UsageLogMaxSpaceGB><UsageLogCutTime></UsageLogCutTime></UsageLogs></Logging></Farm><WebApplications AddURLsToHOSTS='true'><WebApplication Name='Portal Home'><Type>Portal</Type><ApplicationPool>portal.contoso.com</ApplicationPool><Url>http://portal.contoso.com</Url><Port>80</Port><UseHostHeader>false</UseHostHeader><AddURLToLocalIntranetZone>true</AddURLToLocalIntranetZone><GrantCurrentUserFullControl>true</GrantCurrentUserFullControl><UseClaims>true</UseClaims><UseBasicAuthentication>false</UseBasicAuthentication><UseOnlineWebPartCatalog>false</UseOnlineWebPartCatalog><Database><Name>Content_Portal</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database><ManagedPaths><ManagedPath relativeUrl='help' explicit='true'/></ManagedPaths><SiteCollections><SiteCollection siteUrl='http://portal.contoso.com'><Name>Portal Home</Name><Description>Portal Home Site</Description><HostNamedSiteCollection>false</HostNamedSiteCollection><Owner></Owner><CustomDatabase></CustomDatabase><SearchUrl>http://portal.contoso.com/search</SearchUrl><Template>SITEPAGEPUBLISHING#0</Template><LCID>1033</LCID><Locale>en-us</Locale><Time24>false</Time24></SiteCollection></SiteCollections></WebApplication><WebApplication Name='MySite Host'><Type>MySiteHost</Type><ApplicationPool>mysites.contoso.com</ApplicationPool><Url>http://mysites.contoso.com</Url><Port>80</Port><UseHostHeader>true</UseHostHeader><AddURLToLocalIntranetZone>true</AddURLToLocalIntranetZone><GrantCurrentUserFullControl>true</GrantCurrentUserFullControl><UseClaims>true</UseClaims><UseBasicAuthentication>false</UseBasicAuthentication><UseOnlineWebPartCatalog>false</UseOnlineWebPartCatalog><Database><Name>Content_MySites</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database><ManagedPaths><ManagedPath relativeUrl='personal' explicit='false'/></ManagedPaths><SiteCollections><SiteCollection siteUrl='http://mysites.contoso.com'><Name>My Site Host</Name><Description>My Site Host</Description><HostNamedSiteCollection>false</HostNamedSiteCollection><Owner></Owner><CustomDatabase></CustomDatabase><SearchUrl>http://portal.contoso.com/search</SearchUrl><Template>SPSMSITEHOST#0</Template><LCID>1033</LCID><Locale>en-us</Locale><Time24>false</Time24></SiteCollection></SiteCollections></WebApplication></WebApplications><ServiceApps><ManagedMetadataServiceApp Provision='localhost'><Name>Managed Metadata Service</Name><ProxyName>Managed Metadata Service</ProxyName><Database><Name>Metadata</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></ManagedMetadataServiceApp><UserProfileServiceApp Provision='localhost'><Name>User Profile Service Application</Name><ProxyName>User Profile Service Application</ProxyName><MySiteHostLocation></MySiteHostLocation><MySiteManagedPath>personal</MySiteManagedPath><EnableNetBIOSDomainNames>false</EnableNetBIOSDomainNames><StartProfileSync>true</StartProfileSync><CreateDefaultSyncConnection>false</CreateDefaultSyncConnection><SyncConnectionAccount>CONTOSO\\SP_ProfileSync</SyncConnectionAccount><SyncConnectionAccountPassword></SyncConnectionAccountPassword><Database><ProfileDB>Profile</ProfileDB><SyncDB>Profile_Sync</SyncDB><SocialDB>Profile_Social</SocialDB><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></UserProfileServiceApp><EnterpriseSearchService Provision='localhost'><ContactEmail></ContactEmail><ConnectionTimeout>60</ConnectionTimeout><AcknowledgementTimeout>60</AcknowledgementTimeout><ProxyType>Default</ProxyType><IgnoreSSLWarnings>true</IgnoreSSLWarnings><InternetIdentity>Mozilla/4.0 (compatible; MSIE 4.01; Windows NT; MS Search 6.0 Robot)</InternetIdentity><CustomIndexLocation></CustomIndexLocation><PerformanceLevel>PartlyReduced</PerformanceLevel><ShareName>SearchIndex</ShareName><EnterpriseSearchServiceApplications><EnterpriseSearchServiceApplication Name='Search Service Application'><FailoverDatabaseServer></FailoverDatabaseServer><Partitioned>false</Partitioned><Partitions>1</Partitions><SearchServiceApplicationType>Regular</SearchServiceApplicationType><ContentAccessAccount>CONTOSO\\SP_SearchContent</ContentAccessAccount><ContentAccessAccountPassword></ContentAccessAccountPassword><Database><Name>Search</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database><ApplicationPool Name='SharePoint Search Application Pool'/><CrawlComponent Provision='localhost'/><QueryComponent Provision='localhost'/><SearchQueryAndSiteSettingsComponent Provision='localhost'/><AdminComponent Provision='localhost'><ApplicationPool Name='SharePoint Search Application Pool'/></AdminComponent><IndexComponent Provision='localhost'/><ContentProcessingComponent Provision='localhost'/><AnalyticsProcessingComponent Provision='localhost'/><Proxy Name='Search Service Application'><Partitioned>false</Partitioned><ProxyGroup>Default</ProxyGroup></Proxy><SearchCenterUrl></SearchCenterUrl></EnterpriseSearchServiceApplication></EnterpriseSearchServiceApplications></EnterpriseSearchService><StateService Provision='localhost'><Name>State Service</Name><ProxyName>State Service</ProxyName><Database><Name>StateService</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></StateService><WebAnalyticsService Provision='localhost'><Name>Web Analytics Service Application</Name><Database><ReportingDB>WebAnalyticsReporting</ReportingDB><StagingDB>WebAnalyticsStaging</StagingDB><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></WebAnalyticsService><SPUsageService Provision='localhost'><Name>Usage and Health Data Collection</Name><Database><Name>UsageAndHealth</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></SPUsageService><SecureStoreService Provision='localhost'><Name>Secure Store Service</Name><ProxyName>Secure Store Service</ProxyName><Database><Name>SecureStore</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></SecureStoreService><BusinessDataConnectivity Provision='false'><Name>Business Data Connectivity Service</Name><ProxyName>Business Data Connectivity Service</ProxyName><Database><Name>BusinessDataCatalog</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></BusinessDataConnectivity><WordAutomationService Provision='false'><Name>Word Automation Services</Name><ProxyName>Word Automation Services</ProxyName><Database><Name>WordAutomation</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></WordAutomationService><AppManagementService Provision='localhost'><Name>App Management Service</Name><ProxyName>App Management Service</ProxyName><AppDomain>apps.contoso.com</AppDomain><Database><Name>AppManagement</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></AppManagementService><SubscriptionSettingsService Provision='localhost'><Name>Subscription Settings Service</Name><AppSiteSubscriptionName>app</AppSiteSubscriptionName><Database><Name>SubscriptionSettings</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></SubscriptionSettingsService><WorkManagementService Provision='localhost'><Name>Work Management Service Application</Name><ProxyName>Work Management Service Application</ProxyName></WorkManagementService><MachineTranslationService Provision='localhost'><Name>Machine Translation Service</Name><ProxyName>Machine Translation Service</ProxyName><Database><Name>TranslationService</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></MachineTranslationService><PowerPointConversionService Provision='localhost'><Name>PowerPoint Conversion Service Application</Name><ProxyName>PowerPoint Conversion Service Application</ProxyName></PowerPointConversionService></ServiceApps><EnterpriseServiceApps><ExcelServices Provision='false'><Name>Excel Services Application</Name><UnattendedIDUser>CONTOSO\\SP_ExcelUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword></ExcelServices><VisioService Provision='false'><Name>Visio Graphics Service</Name><ProxyName>Visio Graphics Service</ProxyName><UnattendedIDUser>CONTOSO\\SP_VisioUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword></VisioService><AccessService Provision='false'><Name>Access 2010 Service</Name><ProxyName>Access 2010 Service</ProxyName></AccessService><AccessServices Provision='false'><Name>Access Services</Name><ProxyName>Access Services</ProxyName><Database><Name>AccessServices</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></AccessServices><PerformancePointService Provision='false'><Name>PerformancePoint Service</Name><ProxyName>PerformancePoint Service</ProxyName><UnattendedIDUser>CONTOSO\\SP_PerfPointUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword><Database><Name>PerformancePoint</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></PerformancePointService></EnterpriseServiceApps><OfficeWebApps Install='false'><ConfigFile>config-OWA-2010.xml</ConfigFile><PIDKeyOWA></PIDKeyOWA><ExcelService Provision='false'><Name>Excel Web App</Name><ProxyName>Excel Web App</ProxyName><UnattendedIDUser>CONTOSO\\SP_ExcelUser</UnattendedIDUser><UnattendedIDPassword></UnattendedIDPassword></ExcelService><WordViewingService Provision='false'><Name>Word Viewing Service</Name><ProxyName>Word Viewing Service</ProxyName></WordViewingService><PowerPointService Provision='false'><Name>PowerPoint Service Application</Name><ProxyName>PowerPoint Service Application</ProxyName></PowerPointService></OfficeWebApps><ProjectServer Install='false'><ConfigFile>config-ProjectServer2013.xml</ConfigFile><PIDKeyProjectServer></PIDKeyProjectServer><ServiceApp Provision='localhost'><Name>Project Server Service Application</Name><ProxyName>Project Server Service Application</ProxyName><ManagedPath>PWA</ManagedPath><ServiceAccount>CONTOSO\\SP_ProjectServer</ServiceAccount><ServiceAccountPassword></ServiceAccountPassword><Database><Name>ProjectServer</Name><DBServer></DBServer><DBAlias Create='false'><DBInstance>SERVER\\INSTANCE</DBInstance><DBPort></DBPort></DBAlias></Database></ServiceApp></ProjectServer><AdobePDF><iFilter Install='false'/><Icon Configure='true'/><MIMEType Configure='true'/></AdobePDF><ForeFront Install='false'><ConfigFile>answerfile-ForeFront-2010.xml</ConfigFile></ForeFront></Configuration>");
            };
            $scope.view = "Servers";
            $scope.setView = function (view) {
                if (view === "Review") {
                    try {
                        $scope.output = xmlService.GetXml();
                    }
                    catch (err) {
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
            $scope.addServer = function (server) {
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
                var managedAccount = new ManagedAccount();
                this.config.value.farm.managedAccounts.managedAccount.push(managedAccount);
            };
            $scope.removeManagedAccount = function (index) {
                this.config.value.farm.managedAccounts.managedAccount.splice(index, 1);
            };
            $scope.addWebApp = function () {
                var webApp = new WebApplication();
                webApp.name = "New" + this.config.value.webApplications.webApplication.length;
                this.config.value.webApplications.webApplication.push(webApp);
            };
            $scope.removeWebApp = function (index) {
                this.config.value.webApplications.webApplication.splice(index, 1);
            };
            $scope.addSiteCollection = function (siteCollections, webAppUrl) {
                var siteCollection = new SiteCollection();
                siteCollection.siteUrl = webAppUrl + "/sites/NewSite" + siteCollections.length;
                siteCollections.push(siteCollection);
            };
            $scope.removeSiteCollection = function (siteCollections, index) {
                siteCollections.splice(index, 1);
            };
            $scope.addManagedPath = function (managedPaths) {
                var managedPath = new ManagedPath();
                managedPaths.push(managedPath);
            };
            $scope.removeManagedPath = function (managedPaths, index) {
                managedPaths.splice(index, 1);
            };
            // Custom Validators
            $scope.validateminroles = function () {
                var serversArray = [];
                var valid = true;
                // validate that each server is only selected once.
                function validateSingleUse(provisionField) {
                    if (provisionField !== undefined && provisionField !== null && provisionField !== "" && provisionField.toLowerCase() !== "false") {
                        var tempArray = provisionField.replace(/ /g, ",").toUpperCase().split(",");
                        for (var i = 0, len = tempArray.length; i < len; i++) {
                            if (serversArray.indexOf(tempArray[i]) === -1) {
                                if (serversArray.length === 0 || (serversArray.length !== 0 && tempArray[i] !== "LOCALHOST" && serversArray.indexOf("LOCALHOST") === -1)) {
                                    serversArray.push(tempArray[i]);
                                }
                                else {
                                    return false;
                                }
                            }
                            else {
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
                    var isFoundSearch = false;
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
            $scope.validateWebAppType = function (webAppType) {
                var isFound = false;
                for (var i = 0, len = this.config.value.farm.managedAccounts.managedAccount.length; i < len; i++) {
                    if (this.config.value.farm.managedAccounts.managedAccount[i].commonName === webAppType) {
                        isFound = true;
                    }
                }
                return isFound;
            };
            $scope.validateWebTemplate = function (template, webTemplates) {
                if (template === null) {
                    return true;
                }
                var isFound = false;
                if (webTemplates[template] !== undefined) {
                    isFound = true;
                }
                return isFound;
            };
            $scope.validatePassword = function (password) {
                if (password === undefined) {
                    return;
                }
                var anUpperCase = /[A-Z]/;
                var aLowerCase = /[a-z]/;
                var aNumber = /[0-9]/;
                var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
                if (password.length < 9) {
                    return false;
                }
                var numUpper = 0;
                var numLower = 0;
                var numNums = 0;
                var numSpecials = 0;
                for (var i = 0; i < password.length; i++) {
                    if (anUpperCase.test(password[i])) {
                        numUpper++;
                    }
                    else if (aLowerCase.test(password[i])) {
                        numLower++;
                    }
                    else if (aNumber.test(password[i])) {
                        numNums++;
                    }
                    else if (aSpecial.test(password[i])) {
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
        }]);
})();
//Used by ASPIO Controller
var ManagedAccount = /** @class */ (function () {
    function ManagedAccount() {
        this.username = "";
        this.password = "";
        this.commonName = "";
    }
    return ManagedAccount;
}());
var WebApplication = /** @class */ (function () {
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
}());
var SiteCollections = /** @class */ (function () {
    function SiteCollections() {
        this.siteCollection = new Array();
    }
    return SiteCollections;
}());
var SiteCollection = /** @class */ (function () {
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
}());
var ManagedPaths = /** @class */ (function () {
    function ManagedPaths() {
        this.managedPath = new Array();
    }
    return ManagedPaths;
}());
var ManagedPath = /** @class */ (function () {
    function ManagedPath() {
        this.relativeUrl = "";
        this.explicit = false;
    }
    return ManagedPath;
}());
var Database = /** @class */ (function () {
    function Database() {
        this.name = "";
        this.server = "";
        this.dbAlias = new DBAlias();
    }
    return Database;
}());
var DBAlias = /** @class */ (function () {
    function DBAlias() {
        this.create = false;
        this.dbInstance = "";
        this.dbPort = "";
    }
    return DBAlias;
}());
// Used by Provision Directive
var ProvisionModel = /** @class */ (function () {
    function ProvisionModel() {
    }
    ProvisionModel.prototype.constricutor = function () {
        this.servers = new Servers();
    };
    return ProvisionModel;
}());
var Servers = /** @class */ (function () {
    function Servers() {
    }
    return Servers;
}());
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    angular
        .module("ASPIO")
        .directive("ensureExpression", ["$parse", function ($parse) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, ele, attrs, ngModelController) {
                    function validate() {
                        var expressionResults = $parse(attrs.ensureExpression)(scope);
                        for (var expressionName in expressionResults) {
                            if (expressionResults.hasOwnProperty(expressionName)) {
                                ngModelController.$setValidity(expressionName, expressionResults[expressionName]);
                            }
                        }
                    }
                    scope.$watch(attrs.ngModel, function () {
                        validate();
                    });
                    if ("ensureWatch" in attrs) {
                        scope.$watch(attrs.ensureWatch, function () {
                            validate();
                        });
                    }
                    if ("ensureWatchDeep" in attrs) {
                        scope.$watch(attrs.ensureWatchDeep, function () {
                            validate();
                        }, true);
                    }
                    if ("ensureWatchCollection" in attrs) {
                        scope.$watchCollection(attrs.ensureWatchCollection, function () {
                            validate();
                        });
                    }
                }
            };
        }]);
})();
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    var IntegerValidator = /** @class */ (function () {
        function IntegerValidator() {
            this.restrict = "A";
            this.require = "ngModel";
            this.link = function (scope, element, attrs, ngModelController) {
                var INTEGER_REGEXP = /^\-?\d+$/;
                ngModelController.$validators.integer = function (modelValue, viewValue) {
                    if (ngModelController.$isEmpty(modelValue)) {
                        // consider empty models to be valid
                        return true;
                    }
                    if (INTEGER_REGEXP.test(viewValue)) {
                        // it is valid
                        return true;
                    }
                    // it is invalid
                    return false;
                };
            };
        }
        IntegerValidator.factory = function () {
            var directive = function () { return new IntegerValidator(); };
            return directive;
        };
        return IntegerValidator;
    }());
    angular
        .module("ASPIO")
        .directive("integer", IntegerValidator.factory());
})();
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    var FileRead = /** @class */ (function () {
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
    }());
    angular
        .module("ASPIO")
        .directive("onReadFile", FileRead.factory());
})();
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    angular
        .module("ASPIO")
        .directive("ngProvision", [function () {
            return {
                restrict: "E",
                scope: {
                    ngModel: "=",
                    servers: "="
                },
                template: "<label class='radio-inline' ng-if='servers.length === 0' uib-tooltip='Provision'>" +
                    "<input type='radio' ng-model='model.provision' value='localhost' /> Provision" +
                    "</label>" +
                    "<label class='radio-inline' ng-if='servers.length > 0' uib-tooltip='Provision on all'>" +
                    "<input type='radio' ng-model='model.provision' value='localhost' /> Provision on all" +
                    "</label>" +
                    "<label class='radio-inline' uib-tooltip='Do not Provision'>" +
                    "<input type='radio' ng-model='model.provision' value='false' /> Do not Provision" +
                    "</label>" +
                    "<br />" +
                    "<label class='checkbox-inline' ng-repeat='server in servers' uib-tooltip='Provision on {{ server }}'>" +
                    "<input type='checkbox' ng-model='model.servers[server]' /> {{ server }}" +
                    "</label>",
                controller: function ($scope) {
                    // replace true with localhost as script doesn't work without it
                    if ($scope.ngModel !== undefined && $scope.ngModel.toLowerCase() === "true") {
                        $scope.ngModel = "localhost";
                    }
                    // Grab current values from the provision fields and it to the servers collection
                    // Ignore if it equals any of the following keywords
                    if ($scope.ngModel !== undefined && $scope.ngModel.toLowerCase() !== "false" && $scope.ngModel.toLowerCase() !== "localhost" && $scope.ngModel.toLowerCase() !== "") {
                        var serversArray = $scope.ngModel.replace(/ /g, ",").toUpperCase().split(",");
                        for (var i = 0, len = serversArray.length; i < len; i++) {
                            if ($scope.servers.indexOf(serversArray[i]) === -1) {
                                $scope.servers.push(serversArray[i]);
                            }
                        }
                    }
                    // define model
                    var model = new ProvisionModel();
                    model.servers = new Servers();
                    for (var i2 = 0, len2 = $scope.servers.length; i2 < len2; i2++) {
                        model.servers[$scope.servers[i2]] = false;
                    }
                    $scope.model = model;
                    // Sets the Controls values based on current value
                    function updateControls() {
                        if ($scope.ngModel === undefined) {
                            return;
                        }
                        if ($scope.ngModel.toLowerCase() === "localhost" || $scope.ngModel.toLowerCase() === "false") {
                            $scope.model.provision = $scope.ngModel.toLowerCase();
                        }
                        else {
                            // Assume we are dealing with a list of servers
                            var configServers = $scope.ngModel.replace(/ /g, ",").toUpperCase().split(",");
                            var resetModel = true;
                            var tempValue = "";
                            for (var i = 0, len = configServers.length; i < len; i++) {
                                if ($scope.servers.indexOf(configServers[i]) !== -1) {
                                    $scope.model.servers[configServers[i]] = true;
                                    if (tempValue.length >= 1) {
                                        tempValue += "," + configServers[i];
                                    }
                                    else {
                                        tempValue = configServers[i];
                                    }
                                    resetModel = false;
                                }
                            }
                            // Reset the Model if no servers match the current value
                            if (resetModel) {
                                $scope.ngModel = "";
                            }
                            else {
                                // Set the Model to the current list of matched servers. In cause the field had a server not found in server list
                                $scope.ngModel = tempValue;
                            }
                        }
                    }
                    updateControls();
                    // Keep an eye on our list of servers, if it changes unmatched entries should be removed
                    $scope.$watchCollection("servers", function () {
                        updateControls();
                    });
                    $scope.$watch("model.provision", function (newValue, oldValue) {
                        if (newValue === oldValue || newValue === "") {
                            return;
                        }
                        $scope.ngModel = $scope.model.provision;
                        // All others should be unchecked
                        for (var i = 0, len = $scope.servers.length; i < len; i++) {
                            $scope.model.servers[$scope.servers[i]] = false;
                        }
                    });
                    $scope.$watchCollection("model.servers", function (newValue, oldValue) {
                        if (angular.equals(oldValue, newValue)) {
                            return;
                        }
                        // Check if any Servers are Checked, otherwise we wont run
                        var shouldRun = false;
                        for (var i = 0, len = $scope.servers.length; i < len; i++) {
                            if ($scope.model.servers[$scope.servers[i]] === true) {
                                shouldRun = true;
                            }
                        }
                        if (shouldRun) {
                            // All others should be unchecked
                            $scope.model.provision = "";
                            var tempValue = "";
                            for (var i2 = 0, len2 = $scope.servers.length; i2 < len2; i2++) {
                                if ($scope.model.servers[$scope.servers[i2]] === true) {
                                    if (tempValue.length >= 1) {
                                        tempValue += "," + $scope.servers[i2];
                                    }
                                    else {
                                        tempValue = $scope.servers[i2];
                                    }
                                }
                            }
                            $scope.ngModel = tempValue;
                        }
                        else if ($scope.model.provision === "") {
                            // Provision Radio is unchecked, and all Server checkboxes are unchecked
                            $scope.ngModel = "";
                        }
                    });
                }
            };
        }]);
})();
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    var StringToNumber = /** @class */ (function () {
        function StringToNumber() {
            this.restrict = "A";
            this.require = "ngModel";
            this.link = function (scope, element, attrs, ngModelController) {
                ngModelController.$parsers.push(function (value) {
                    if (value === null) {
                        return "";
                    }
                    return "" + value;
                });
                ngModelController.$formatters.push(function (value) {
                    return parseFloat(value);
                });
            };
        }
        StringToNumber.factory = function () {
            var directive = function () { return new StringToNumber(); };
            return directive;
        };
        return StringToNumber;
    }());
    angular
        .module("ASPIO")
        .directive("stringToNumber", StringToNumber.factory());
})();
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
        this.UpgrdeXml39951to39960 = function (xml) {
            var context = new Jsonix.Context([ConfigModel39951]);
            var unmarshaller = context.createUnmarshaller();
            this.config = unmarshaller.unmarshalString(xml);
            this.Upgrde39951to39960();
        };
        // Multi version jumps
        this.UpgrdeXml398toLatest = function (xml) {
            this.UpgrdeXml398to399(xml);
            this.Upgrde399to3995();
            this.Upgrde3995to39951();
            this.Upgrde39951to39960();
        };
        this.UpgrdeXml399toLatest = function (xml) {
            this.UpgrdeXml399to3995(xml);
            this.Upgrde3995to39951();
            this.Upgrde39951to39960();
        };
        this.UpgrdeXml3995toLatest = function (xml) {
            this.UpgrdeXml3995to39951(xml);
            this.Upgrde3995to39951();
            this.Upgrde39951to39960();
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
        this.Upgrde39951to39960 = function () {
            this.config.value.version = "3.99.60";
            this.config.value.farm.serverRoles.webFrontEndWithDistributedCache = new Object;
            this.config.value.farm.serverRoles.webFrontEndWithDistributedCache.provision = "false";
            this.config.value.farm.serverRoles.applicationWithSearch = new Object;
            this.config.value.farm.serverRoles.applicationWithSearch.provision = "false";
        };
    }
    angular
        .module("ASPIO")
        .service("xmlService", xmlService);
})();
