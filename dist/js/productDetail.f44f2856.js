(function(t){function e(e){for(var r,c,o=e[0],l=e[1],s=e[2],f=0,d=[];f<o.length;f++)c=o[f],a[c]&&d.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={productDetail:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var u=l;i.push([4,"chunk-vendors","chunk-common"]),n()})({"2d0c":function(t,e,n){t.exports=n.p+"img/banner.595c4ae7.png"},4:function(t,e,n){t.exports=n("4e8b")},"4e8b":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Head"),n("div",{staticClass:"item"},[t._m(0),n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",[n("a",{attrs:{href:"./index.html"}},[t._v("HOME")])]),n("el-breadcrumb-item",[n("a",{attrs:{href:"./products.html"}},[t._v("产品信息")])]),n("el-breadcrumb-item",[n("a",{attrs:{href:""}},[t._v(t._s(t.info.category))])]),n("el-breadcrumb-item",[t._v(t._s(t.info.name))])],1),n("div",{staticClass:"l_content"},[n("div",{staticClass:"list",domProps:{innerHTML:t._s(t.info.content)}}),n("ul",{staticClass:"box"},[t._m(1),n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.all,function(e){return n("el-collapse-item",{key:e.id,attrs:{title:e.name,name:e.id}},[n("ul",{staticClass:"rightList"},t._l(e.products.data,function(e){return n("li",{key:e.id,on:{click:function(n){return t.goDetail(e.id)}}},[t._v("\n                                   - "+t._s(e.name)+"\n                                ")])}),0)])}),1),t._m(2),t._m(3)],1)])],1),n("Footer")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("img",{attrs:{src:n("2d0c"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"header"},[t._v("\n                        产品信息\n                        "),n("i",{staticClass:"el-icon-back"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"header"},[t._v("\n                        综合样本下载\n                        "),n("i",{staticClass:"el-icon-d-arrow-left"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"imgs"},[r("img",{attrs:{src:n("d901"),alt:""}})])}],c=n("2934"),o={data:function(){return{all:[],activeNames:[],info:{}}},mounted:function(){var t=this,e=window.URlPARAMS.id;this.getDetails(e),Object(c["k"])({}).then(function(e){t.all=e.data}).catch(function(t){})},computed:{},methods:{getDetails:function(t){var e=this;Object(c["i"])({},t).then(function(t){e.info=t}).catch(function(t){})},goDetail:function(t){this.getDetails(t)}},components:{}},l=o,s=n("2877"),u=Object(s["a"])(l,a,i,!1,null,null,null),f=u.exports;n("dcc7"),n("b7f1"),n("b419");new r["default"]({render:function(t){return t(f)}}).$mount("#app")},d901:function(t,e,n){t.exports=n.p+"img/1.4457f0e5.png"},dcc7:function(t,e,n){}});
//# sourceMappingURL=productDetail.f44f2856.js.map