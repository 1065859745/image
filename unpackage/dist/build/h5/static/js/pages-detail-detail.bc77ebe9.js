(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{4488:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{src:""}},onLoad:function(t){uni.setNavigationBarTitle({title:t.title}),this.src=t.url?decodeURIComponent(t.url):getApp().globalData.isPhone?"https://graph.baidu.com/view/home":"https://graph.baidu.com/pcpage/index?tpl_from=pc"},methods:{}};e.default=r},cf74:function(t,e,n){"use strict";n.r(e);var r=n("4488"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},d1e0:function(t,e,n){"use strict";n.r(e);var r=n("f6fe"),u=n("cf74");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);var a,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"d2c5d90e",null,!1,r["a"],a);e["default"]=o.exports},f6fe:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-web-view",{attrs:{src:t.src}})],1)},i=[]}}]);