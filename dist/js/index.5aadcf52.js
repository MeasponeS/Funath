(function(t){function n(n){for(var e,r,a=n[0],s=n[1],l=n[2],d=0,f=[];d<a.length;d++)r=a[d],c[r]&&f.push(c[r][0]),c[r]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);u&&u(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,n=0;n<o.length;n++){for(var i=o[n],e=!0,a=1;a<i.length;a++){var s=i[a];0!==c[s]&&(e=!1)}e&&(o.splice(n--,1),t=r(r.s=i[0]))}return t}var e={},c={index:0},o=[];function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,n,i){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(i,e,function(n){return t[n]}.bind(null,e));return i},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=s;o.push([1,"chunk-vendors","chunk-common"]),i()})({1:function(t,n,i){t.exports=i("44eb")},"44eb":function(t,n,i){"use strict";i.r(n);i("cadf"),i("551c"),i("f751"),i("097d");var e=i("a026"),c=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("Head"),i("div",{staticClass:"item"},[i("div",{staticClass:"bannerList"},[i("el-carousel",{attrs:{interval:3e4,trigger:"click",arrow:"never","indicator-position":t.bannerList.length>1?"":"none"}},t._l(t.bannerList,function(t,n){return i("el-carousel-item",{key:n},[i("a",{attrs:{href:t.link}},[i("img",{attrs:{src:t.image_url,alt:""}})])])}),1)],1),i("div",{staticClass:"nav"},[i("ul",[i("li",{on:{click:function(n){return t.goProducts("")}}},[t._v("产品信息")]),i("li",{on:{click:function(n){return t.goIntroduction("","")}}},[t._v("公司介绍")]),i("li",{on:{click:function(n){return t.goNews("")}}},[t._v("新闻资讯")]),i("li",{on:{click:t.goExample}},[t._v("项目案例")]),i("li",{on:{click:t.goContact}},[t._v("联系我们")])])]),i("div",{staticClass:"center"},[i("ul",{staticClass:"pics"},t._l(t.p_list,function(n,e){return i("li",{key:n.id,on:{mouseenter:function(i){return t.showExtra(e,n)},mouseleave:t.hideExtra,click:function(i){return t.goProducts(e,n.name)}}},[parseInt(e/2)?t._e():i("div",{staticClass:"left"},[i("img",{attrs:{src:n.products.data[0].main_image_url,alt:""}})]),t.activePic!=e?i("div",{staticClass:"right"},[i("img",{style:{width:n.icon.width,height:n.icon.height},attrs:{src:n.icon.url,alt:""}}),i("h3",[t._v(t._s(n.en_name))]),i("span",[t._v(t._s(n.name))])]):i("div",{staticClass:"right extra"},t._l(t.extraList,function(n){return i("span",{key:n.id},[t._v("\n                            "+t._s(n)+"\n                        ")])}),0),parseInt(e/2)?i("div",{staticClass:"left"},[i("img",{attrs:{src:n.products.data[0].main_image_url,alt:""}})]):t._e()])}),0),i("el-button",{on:{click:function(n){return t.goProducts("")}}},[t._v("查看更多")])],1),i("div",{staticClass:"middleBanner"},[i("img",{attrs:{src:t.middleBanner.image_url,alt:""}}),t._m(0),i("div",{staticClass:"body"},[i("ul",[i("li",{on:{click:function(n){return t.goIntroduction("one")}}},[t._v("孚纳森哲学")]),i("li",{on:{click:function(n){return t.goIntroduction("two")}}},[t._v("合作伙伴")]),i("li",{on:{click:function(n){return t.goIntroduction("three")}}},[t._v("社会责任")])])])]),i("div",{staticClass:"news"},[t._m(1),i("div",{staticClass:"body"},[i("ul",t._l(t.newList,function(n){return i("li",{on:{click:function(i){return t.goNews(n.id)}}},[i("span",[t._v(t._s(n.created_at.trim().split(/\s+/)[0]))]),i("p",[t._v(t._s(n.title))])])}),0),i("el-button",{on:{click:function(n){return t.goNews("")}}},[t._v("查看更多")]),t.newList[0]?i("div",{on:{click:function(n){return t.goNews(t.newList[0].id)}}},[i("div",{staticClass:"imgs"},[i("img",{attrs:{src:t.newList[0].image,alt:""}})]),i("div",{staticClass:"imgIntro"},[t._v("- "+t._s(t.newList[0].title))])]):t._e()],1)]),i("div",{staticClass:"big"},[t.list.length>4?i("div",{staticClass:"left",on:{click:function(n){return t.moveLeft(300,1)}}},[i("i",{staticClass:"el-icon-arrow-left"})]):t._e(),t.list.length>4?i("div",{staticClass:"right",on:{click:function(n){return t.moveRight(300,-1)}}},[i("i",{staticClass:"el-icon-arrow-right"})]):t._e(),i("div",{staticClass:"ul"},[i("ul",{staticClass:"bottom",style:t.containerStyle},t._l(t.list,function(n,e){return n.thumb1?i("li",{key:e,on:{click:function(i){return t.goDetails(n.id)}}},[i("span",[t._v(t._s(n.title))]),i("div",{staticClass:"imgs"},[i("img",{attrs:{src:n.thumb1,alt:""}})]),i("div",{staticClass:"wrap"})]):t._e()}),0)])])]),i("Backtop"),i("Footer")],1)},o=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"header"},[i("h3",[t._v("COMPANY PROFILE")]),i("span",[t._v("公司介绍")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"header"},[i("h3",[t._v("NEWS")]),i("span",[t._v("新闻资讯")])])}],r=(i("7f7f"),i("ac6a"),i("c1d6")),a=i("2934"),s={data:function(){return{bannerList:[],middleBanner:"",list:[],activeName:"",p_list:[],activePic:10,extraList:[],newList:[],distance:0,currentIndex:0}},created:function(){var t=this,n=new Date,i=n.getFullYear();Object(a["b"])({position:"0,1"}).then(function(n){n.data.forEach(function(n){0==n.position?t.bannerList.push(n):t.middleBanner=n})}).catch(function(t){}),Object(a["e"])({category_id:""}).then(function(n){n.data.forEach(function(n,i){i<14&&t.list.push(n)})}).catch(function(t){}),Object(a["k"])({limit:4,page:1}).then(function(n){t.p_list=n.data,t.p_list=t.p_list.slice(0,4)}).catch(function(t){}),Object(a["m"])({year:i}).then(function(n){t.newList=n.data})},mounted:function(){},methods:{goContact:function(){window.location.href="./contact.html"},goExample:function(){window.location.href="./productExample.html"},goNews:function(t){window.location.href="./news.html?id="+t},goIntroduction:function(t){window.location.href="./introduction.html?type="+t},goProducts:function(t,n){window.location.href="./products.html?name="+n+"&index="+t},goDetails:function(t){window.location.href="./productExample.html?id="+t},moveLeft:function(t,n){console.log(this.distance),this.distance<0&&this.distance>300*-(this.list.length-4+1)?this.distance+=t*n:this.distance+=0},moveRight:function(t,n){300*this.list.length-Math.abs(this.distance)>1200?this.distance+=t*n:this.distance+=0},showExtra:function(t,n){var i=[];this.activePic=t,n.products.data.forEach(function(t,n){n<3&&i.push(t.name)}),this.extraList=i},hideExtra:function(){this.activePic=10}},computed:{containerStyle:function(){return{transform:"translate3d(".concat(this.distance,"px, 0, 0)")}}},components:{Backtop:r["a"]}},l=s,u=i("2877"),d=Object(u["a"])(l,c,o,!1,null,null,null),f=d.exports;i("dbcc"),i("4800"),i("b7f1"),i("b419");new e["default"]({render:function(t){return t(f)}}).$mount("#app")},4800:function(t,n,i){},dbcc:function(t,n,i){}});
//# sourceMappingURL=index.5aadcf52.js.map