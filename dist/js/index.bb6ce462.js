(function(n){function t(t){for(var o,c,u=t[0],l=t[1],a=t[2],s=0,d=[];s<u.length;s++)c=u[s],r[c]&&d.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,a||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],o=!0,u=1;u<e.length;u++){var l=e[u];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),n=c(c.s=e[0]))}return n}var o={},r={index:0},i=[];function c(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=o,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)c.d(e,o,function(t){return n[t]}.bind(null,o));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var f=l;i.push([1,"chunk-vendors","chunk-common"]),e()})({1:function(n,t,e){n.exports=e("44eb")},"44eb":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("Head"),e("div",{staticClass:"item"},[n._m(0),e("div",{staticClass:"nav"},[e("ul",[e("li",{on:{click:n.goProducts}},[n._v("产品信息")]),e("li",{on:{click:n.goIntroduction}},[n._v("公司介绍")]),e("li",{on:{click:n.goNews}},[n._v("新闻资讯")]),e("li",{on:{click:n.goExample}},[n._v("项目案例")]),e("li",{on:{click:n.goContact}},[n._v("联系我们")])])])]),e("Footer")],1)},i=[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"banner"},[o("img",{attrs:{src:e("dbf6"),alt:""}})])}],c=(e("6e88"),e("5353"),{data:function(){return{bannerList:["./img/banner.png","./img/banner2.png","./img/banner3.png","./img/banner4.png"]}},mounted:function(){console.log(this.bannerList)},computed:{},methods:{goContact:function(){window.location.href="./contact.html"},goExample:function(){window.location.href="./productExample.html"},goNews:function(){window.location.href="./news.html"},goIntroduction:function(){window.location.href="./introduction.html"},goProducts:function(){window.location.href="./products.html"}},components:{}}),u=c,l=e("2877"),a=Object(l["a"])(u,r,i,!1,null,null,null),f=a.exports;e("dbcc"),e("b7f1"),e("b419");new o["default"]({render:function(n){return n(f)}}).$mount("#app")},dbcc:function(n,t,e){},dbf6:function(n,t,e){n.exports=e.p+"img/banner.0d3fb87f.png"}});
//# sourceMappingURL=index.bb6ce462.js.map