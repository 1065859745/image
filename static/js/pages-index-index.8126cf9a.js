(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1e51":function(t,e,i){"use strict";var n=i("e5be"),a=i.n(n);a.a},"3f81":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){var t=[{font:"icon-image",name:"图像识别",goPage:"result",apiUrl:"/image-classify/v2/advanced_general"},{font:"icon-animal",name:"动物识别",goPage:"result",apiUrl:"/image-classify/v1/animal"},{font:"icon-plant",name:"植物识别",goPage:"result",apiUrl:"/image-classify/v1/plant"},{font:"icon-cheliang",name:"车辆识别",goPage:"car"},{font:"icon-huobi",name:"货币识别",goPage:"currency"},{font:"icon-dish",name:"菜品识别",goPage:"dish"}];return{list:t}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.windowHeight=e.windowHeight-e.statusBarHeight-.08*e.windowHeight+"px",getApp().globalData.isPhone=e.windowHeight>e.windowWidth},fail:function(){t.windowHeight="100%"}})},methods:{chooseImage:function(t,e,i){uni.chooseImage({count:1,success:function(n){uni.navigateTo({url:"/pages/"+e+"/"+e+"?tempFilePath="+n.tempFilePaths[0]+"&title="+t+"&apiUrl="+i})}})},navigateTo:function(){uni.navigateTo({url:"../baidushitu/baidushitu"})}}};e.default=n},"4fe1":function(t,e,i){"use strict";i.r(e);var n=i("b4f0"),a=i("e520");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1e51");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"71a7aa16",null,!1,n["a"],c);e["default"]=r.exports},a08c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".status-bar[data-v-71a7aa16]{background-color:#007aff;height:0}.footer[data-v-71a7aa16]{padding:3vh 8vw 4vh 8vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content[data-v-71a7aa16]{min-width:33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?32?%;color:#777;font-size:%?28?%}",""]),t.exports=e},b4f0:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"status-bar"}),n("v-uni-view",{staticClass:"footer",style:{height:t.windowHeight}},[t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseImage(e.name,e.goPage,e.apiUrl)}}},[n("v-uni-view",{staticClass:"iconfont",class:e.font,style:{fontSize:"72px"}}),t._v(t._s(e.name))],1)})),n("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{height:"72px"},attrs:{src:i("f624"),mode:"heightFix"}}),t._v("百度识图")],1)],2)],1)},o=[]},e520:function(t,e,i){"use strict";i.r(e);var n=i("3f81"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e5be:function(t,e,i){var n=i("a08c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("676a1592",n,!0,{sourceMap:!1,shadowMode:!1})},f624:function(t,e,i){t.exports=i.p+"static/img/baidushitu.6ca3718a.png"}}]);