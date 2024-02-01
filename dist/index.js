"use strict";var l=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var q=l(function(A,m){
function g(r,a,v,c,t,f,s,o){var i,n,u,e;if(r<=0)return f;for(v<0?i=(1-r)*v:i=0,t<0?n=(1-r)*t:n=0,s<0?u=(1-r)*s:u=0,e=0;e<r;e++)f[u]=o(a[i],c[n]),i+=v,n+=t,u+=s;return f}m.exports=g
});var R=l(function(B,O){
function h(r,a,v,c,t,f,s,o,i,n,u){var e,p,x,y;if(r<=0)return o;for(e=c,p=s,x=n,y=0;y<r;y++)o[x]=u(a[e],t[p]),e+=v,p+=f,x+=i;return o}O.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=q(),k=R();j(b,"ndarray",k);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
