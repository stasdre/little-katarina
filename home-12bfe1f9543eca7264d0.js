!function(e){function t(t){for(var r,c,i=t[0],a=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={3:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/little-katarina/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;u.push(["tjUo",0]),n()}({"6WHc":function(e,t){var n=document.querySelector(".burger"),r=document.querySelector(".header__top");n.addEventListener("click",(function(){r.classList.toggle("header__top_active"),n.classList.toggle("burger_active"),document.body.classList.toggle("lock")}))},M7sc:function(e,t){},fNvQ:function(e,t,n){"use strict";n("07d7"),n("5s+n"),n("ls82");var r=n("k3kC"),o=n.n(r);function u(e,t,n,r,o,u,c){try{var i=e[u](c),a=i.value}catch(e){return void n(e)}i.done?t(a):Promise.resolve(a).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function i(e){u(c,r,o,i,a,"next",e)}function a(e){u(c,r,o,i,a,"throw",e)}i(void 0)}))}}function i(){return(i=c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a;case 2:e.sent?document.body.classList.add("webp"):document.body.classList.add("no-webp");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()},tjUo:function(e,t,n){"use strict";n.r(t);n("g+Lm"),n("fNvQ"),n("6WHc"),n("M7sc"),n("yTHT")},yTHT:function(e,t,n){}});