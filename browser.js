// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;function f(e,t,r,o,n,a,i,l){var u,f,c,p;if(e<=0)return a;for(u=r<0?(1-e)*r:0,f=n<0?(1-e)*n:0,c=i<0?(1-e)*i:0,p=0;p<e;p++)a[c]=l(t[u],o[f]),u+=r,f+=n,c+=i;return a}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n,a,i,l,u,f,c){var p,_,d,b;if(e<=0)return l;for(p=o,_=i,d=f,b=0;b<e;b++)l[d]=c(t[p],n[_]),p+=r,_+=a,d+=u;return l}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).smap2=t();
//# sourceMappingURL=browser.js.map
