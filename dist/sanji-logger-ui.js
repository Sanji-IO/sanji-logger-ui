!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("angular"),require("toastr")):"function"==typeof define&&define.amd?define(["angular","toastr"],r):"object"==typeof exports?exports.sjLogger=r(require("angular"),require("toastr")):t.sjLogger=r(t.angular,t.toastr)}(this,function(t,r){return function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,r,e){Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=3)}([function(t,r,e){"use strict";function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),u=["$log","toastr"],i=function(){function t(){for(var r=this,e=arguments.length,o=Array(e),u=0;u<e;u++)o[u]=arguments[u];n(this,t),t.$inject.forEach(function(t,e){return r[t]=o[e]})}return o(t,[{key:"error",value:function(t,r,e){this.toastr.error(t,e),this.$log.error("Error: "+t,r)}},{key:"info",value:function(t,r,e){this.toastr.info(t,e),this.$log.info("Info: "+t,r)}},{key:"success",value:function(t,r,e){this.toastr.success(t,e),this.$log.info("Success: "+t,r)}},{key:"warn",value:function(t,r,e){this.toastr.warning(t,e),this.$log.warn("Warning: "+t,r)}},{key:"log",value:function(t){this.$log.log(t)}}]),t}();i.$inject=u,r.a=i},function(r,e){r.exports=t},function(t,e){t.exports=r},function(t,r,e){"use strict";var n=e(1),o=n&&n.__esModule?function(){return n.default}:function(){return n};e.d(o,"a",o);var u=e(2),i=u&&u.__esModule?function(){return u.default}:function(){return u};e.d(i,"a",i);var a=e(0),s=o.a.module("sanji.logger",[]);s.constant("toastr",i.a),s.service("logger",a.a),r.default=s=s.name}])});
