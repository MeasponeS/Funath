(function(t){function e(e){for(var a,o,l=e[0],r=e[1],c=e[2],m=0,p=[];m<l.length;m++)o=l[m],n[o]&&p.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={exam:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([5,"chunk-vendors","chunk-common"]),s()})({"0321":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Head",{attrs:{activeUrl:"exam",companyName:t.ORGINFO.orgName,info:t.USERINFO,msgCount:t.MSGCOUNT}}),s("div",{staticClass:"wrapper main-body"},[s("div",{staticClass:"content"},[s("div",{staticClass:"examHeader"},[s("div",{class:{active:"opening"==t.status},on:{click:function(e){t.toggleTab("opening")}}},[t._v("开放中")]),s("div",{staticClass:"mid"}),s("div",{class:{active:"notOpened"==t.status},on:{click:function(e){t.toggleTab("notOpened")}}},[t._v("未开放")]),s("div",{staticClass:"mid"}),s("div",{class:{active:"exceed"==t.status},on:{click:function(e){t.toggleTab("exceed")}}},[t._v("已结束")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"opening"==t.status,expression:"status=='opening'"}]},[0!=t.examInfo.opening.list.length?s("div",{staticClass:"courseList"},[s("ul",{staticClass:"examList"},t._l(t.examInfo.opening.list,function(e,a){return s("li",{key:e.id},[s("h1",[t._v(t._s(e.name))]),s("i",[t._v("进行中")]),s("h4",[t._v(t._s(e.testStart)+"至"+t._s(e.testEnd))]),s("h4",[t._v("试题数量："+t._s(e.paperSum)+"道")]),s("h5",[s("em",[t._v("考试时长："+t._s(e.testTime)+"分钟")]),e.userTestStartTime?s("el-button",{attrs:{type:"primary"},on:{click:function(s){t.examDetails(e)}}},[t._v("查看详情")]):s("el-button",{attrs:{type:"primary"},on:{click:function(s){t.enterExam(e)}}},[t._v("进入考场")])],1)])})),t.examInfo.opening.isAllList?t._e():s("el-button",{staticClass:"load-more",staticStyle:{width:"100%","margin-bottom":"10px"},on:{click:function(e){t.loadMore()}}},[t._v("加载更多")])],1):s("EmptyTemplate",{attrs:{msg:"暂无开放中的考试",imgKey:"Exam"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"notOpened"==t.status,expression:"status=='notOpened'"}]},[0!=t.examInfo.notOpened.list.length?s("div",{staticClass:"courseList"},[s("ul",{staticClass:"examList"},t._l(t.examInfo.notOpened.list,function(e,a){return s("li",{key:e.id},[s("h1",[t._v(t._s(e.name))]),s("i",[t._v("未开放")]),s("h4",[t._v(t._s(e.testStart)+"至"+t._s(e.testEnd))]),s("h4",[t._v("试题数量："+t._s(e.paperSum)+"道")]),s("h5",[s("em",[t._v("考试时长："+t._s(e.testTime)+"分钟")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$message("考试时间未到")}}},[t._v("未开放")])],1)])})),t.examInfo.notOpened.isAllList?t._e():s("el-button",{staticClass:"load-more",staticStyle:{width:"100%","margin-bottom":"10px"},on:{click:function(e){t.loadMore()}}},[t._v("加载更多")])],1):s("EmptyTemplate",{attrs:{msg:"暂无未开放的考试",imgKey:"Exam"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"exceed"==t.status,expression:"status=='exceed'"}],staticClass:"exceed"},[0!=t.examInfo.exceed.list.length?s("div",{staticClass:"courseList"},[s("ul",{staticClass:"examList"},t._l(t.examInfo.exceed.list,function(e,a){return s("li",{key:e.id},[s("h1",[t._v(t._s(e.name))]),s("i",{staticClass:"end"},[t._v("已结束")]),s("h4",[t._v(t._s(e.testStart)+"至"+t._s(e.testEnd))]),s("h4",[t._v("试题数量："+t._s(e.paperSum)+"道")]),s("h5",[s("em",[t._v("考试时长："+t._s(e.testTime)+"分钟")]),e.userTestStartTime?s("el-button",{attrs:{type:"primary"},on:{click:function(s){t.examDetails(e)}}},[t._v("查看详情")]):s("el-button",{staticClass:"not",attrs:{type:"primary"}},[t._v("您没有参加这场考试")])],1)])})),t.examInfo.exceed.isAllList?t._e():s("el-button",{staticClass:"load-more",staticStyle:{width:"100%","margin-bottom":"10px"},on:{click:function(e){t.loadMore()}}},[t._v("加载更多")])],1):s("EmptyTemplate",{attrs:{msg:"暂无已过期的考试",imgKey:"Exam"}})],1)])]),s("Footer"),s("ExamRules",{on:{startExam:t.startExam},model:{value:t.examRules,callback:function(e){t.examRules=e},expression:"examRules"}})],1)},i=[],o=s("8afe"),l=s("9541"),r=s("39f0"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exam-rules"},[s("el-dialog",{attrs:{title:"提示",visible:t.value,"custom-class":"exam-rules-dialog","show-close":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.value=e}}},[s("span",{attrs:{slot:"title"},slot:"title"}),s("div",{staticClass:"rules"},[s("h1",{staticClass:"rules-header"},[t._v("考试须知")]),s("div",{staticClass:"rules-content"},[s("h3",[t._v("考场纪律")]),s("p",[t._v("1.考试期间请保持安静，将手机调至静音，不得大声喧哗，不得交头接耳；")]),s("p",[t._v("2.不得携带考题，答案以及任何形式的小抄；")]),s("p",[t._v("3.不得使用手机上网查阅资料、答案等；")]),s("h3",[t._v("注意事项")]),s("p",[t._v("1.点击下方开始考试按钮，系统即开始倒计时（点击后即开始计时，退出再登录不重新计时，请等待监考老师发出开始考试指令后点击开始）；")]),s("p",[t._v(" 2.考试期间，请保持手机网络畅通，否则将影响试题加载和交卷；")]),s("p",[t._v("3.请严格按照格式输入姓名、考场号、医院、科室等信息；")]),s("p",[t._v("4.考场号由医院统一提供，如忘记考场号，请联系监考老师咨询；")]),s("p",[t._v("5.请注意考试时间，超过考试时间将会自动交卷；")]),s("p",[t._v("6.考试期间，如因操作不当导致退出（退出到登录页），可重新进入，继续答题；")]),s("p",[t._v("7.答题完成后，请务必点击上方“交卷”完成考试，否则成绩将无法统计；")]),s("p",[t._v("8.如遇网络不稳定，点击“交卷”异常时，再次“交卷”即可；")])]),s("el-button",{staticClass:"primary-btn btn btnLeft",attrs:{plain:""},on:{click:function(e){t.$emit("input",!1)}}},[t._v("取消")]),s("el-button",{staticClass:"btn btnRight",attrs:{type:"primary"},on:{click:function(e){t.$emit("startExam")}}},[t._v("开始考试")])],1)])],1)},u=[],m={name:"ExamRules",props:{value:Boolean}},p=m,d=(s("db78"),s("2877")),f=Object(d["a"])(p,c,u,!1,null,null,null);f.options.__file="ExamRules.vue";var v=f.exports,x=s("335a"),h=s("3439"),_=s("71b3"),g="examTabStatus",b={name:"app",mixins:[l["a"]],data:function(){return{status:"opening",examRules:!1,examInfo:{opening:{isAllList:!1,maxExamId:null,list:[]},notOpened:{isAllList:!1,maxExamId:null,list:[]},exceed:{isAllList:!1,maxExamId:null,list:[]}},statusTypeVal:{exceed:1,opening:2,notOpened:3},selectExam:{testingId:"",paperId:""}}},created:function(){var t=x["a"].session.get(g);t&&(this.status=t)},methods:{initExam:function(t){var e=this;Object(r["b"])({paperId:this.selectExam.paperId,testingId:this.selectExam.testingId,isGetHistory:-1}).then(function(s){x["a"].set(h["a"].storageExamInfoKey,{examInfo:{testingId:e.selectExam.testingId,paperId:e.selectExam.paperId,testingName:t.hospitalPaper.paperName,paperSum:t.hospitalPaper.paperSum,utpId:t.id,timeLength:60*parseInt(t.hospitalPaper.timeLength),status:-1},topics:s.questions}),setTimeout(function(t){window.location.href="./examDetails.html"},200)}).catch(function(t){})},startExam:function(){var t=this;Object(r["d"])({testingId:this.selectExam.testingId}).then(function(e){t.initExam(e)}).catch(function(t){})},enterExam:function(t){this.selectExam.testingId=t.id,this.selectExam.paperId=t.paperId,this.examRules=!0},examDetails:function(t){1==t.openScore?window.location.href="./examResults.html?testingId=".concat(t.id,"&paperId=").concat(t.paperId):this.$message("成绩未开放")},loadMore:function(){this.getList(this.examInfo[this.status].maxExamId)},toggleTab:function(t){this.status=t,x["a"].session.set(g,t),0==this.examInfo[t].list.length&&0==this.examInfo[t].isAllList&&this.getList()},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s={type:this.statusTypeVal[this.status]};e&&(s.maxExamId=e),Object(r["e"])(s).then(function(e){var s;t.examInfo[t.status].maxExamId=e.maxExamId,t.examInfo[t.status].isAllList=1==e.isAllList,(s=t.examInfo[t.status].list).push.apply(s,Object(o["a"])(e.testList))}).catch(function(t){})}},mounted:function(){this.getList()},beforeDestroy:function(){},components:{ExamRules:v,EmptyTemplate:_["a"]}},y=b,I=Object(d["a"])(y,n,i,!1,null,null,null);I.options.__file="Index.vue";var E=I.exports,w=(s("b966"),s("b7f1"),s("b419"),s("0ad9"));Object(w["g"])()||(window.location.href="./login.html"),new a["default"]({render:function(t){return t(E)}}).$mount("#app")},"31bb":function(t,e,s){},5:function(t,e,s){t.exports=s("0321")},b966:function(t,e,s){},db78:function(t,e,s){"use strict";var a=s("31bb"),n=s.n(a);n.a}});
//# sourceMappingURL=exam.6c8c093a.js.map