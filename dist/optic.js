/*!
 * 
 *         optic.js - v0.1.0
 *         A Javascript library for computer vision in the browser
 *         https://github.com/drewmcmillan/optic#readme
 *         
 *         Made by Drew McMillan - https://drew.mx
 *         Under MIT License
 *       
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.optic=t():e.optic=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(t){o(this,e),this.el=document.getElementById(t),this.init()}return u(e,[{key:"init",value:function(){console.log("👁👁 init()")}},{key:"getElement",value:function(){return this.el}}]),e}();t.default=i}]).default});