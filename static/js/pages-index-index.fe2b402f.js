(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2663:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column",height:"100vh"}},[n("v-uni-view",{staticClass:"status-bar"}),n("v-uni-view",{staticClass:"footer"},[e._l(e.list,(function(t,i){return n("v-uni-view",{key:i,staticClass:"content"},[n("v-uni-view",{staticClass:"iconfont",class:t.font,style:{fontSize:"82px"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseImage(t.name,t.goPage,t.apiUrl)}}}),e._v(e._s(t.name))],1)})),n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticStyle:{height:"72px"},attrs:{src:i("c007"),mode:"heightFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo.apply(void 0,arguments)}}}),e._v("百度识图")],1)],2)],1)},o=[]},"3ac0":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".status-bar[data-v-2084d96e]{background-color:#2f94ff;height:0}.footer[data-v-2084d96e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}.content[data-v-2084d96e]{min-width:96px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:10px 16px}",""]),e.exports=t},"83b4":function(e,t,i){"use strict";i.r(t);var n=i("e3d8"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},a67d:function(e,t,i){"use strict";i.r(t);var n=i("2663"),a=i("83b4");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("ae7d");var c,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"2084d96e",null,!1,n["a"],c);t["default"]=s.exports},ae7d:function(e,t,i){"use strict";var n=i("f678"),a=i.n(n);a.a},c007:function(e,t,i){e.exports=i.p+"static/img/baidushitu.6ca3718a.png"},e3d8:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){var e=[{font:"icon-image",name:"图像识别",goPage:"result",apiUrl:"/image-classify/v2/advanced_general"},{font:"icon-animal",name:"动物识别",goPage:"result",apiUrl:"/image-classify/v1/animal"},{font:"icon-plant",name:"植物识别",goPage:"result",apiUrl:"/image-classify/v1/plant"},{font:"icon-cheliang",name:"车辆识别",goPage:"car"},{font:"icon-huobi",name:"货币识别",goPage:"currency"},{font:"icon-dish",name:"菜品识别",goPage:"dish"}];return{list:e}},methods:{chooseImage:function(e,t,i){uni.chooseImage({count:1,success:function(n){uni.navigateTo({url:"/pages/"+t+"/"+t+"?tempFilePath="+n.tempFilePaths[0]+"&title="+e+"&apiUrl="+i})}})},navigateTo:function(){uni.navigateTo({url:"../baidushitu/baidushitu"})}}};t.default=n},f678:function(e,t,i){var n=i("3ac0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("ca138c52",n,!0,{sourceMap:!1,shadowMode:!1})}}]);