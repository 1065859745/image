(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-result-result"],{4271:function(t,e,n){"use strict";n.r(e);var i=n("7e8b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4a25":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniSection:n("a9ef").default,uniList:n("23f9").default,uniListItem:n("cace").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"image"},[n("v-uni-image",{attrs:{src:t.tempFilePath,mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"识别结果",type:"line"}}),n("uni-list",t._l(t.result,(function(t,e){return n("uni-list-item",{key:e,attrs:{showArrow:!0,clickable:!0,to:"../detail/detail?url="+encodeURIComponent("https://baike.baidu.com/item/"+(t.keyword||t.name)),note:"相似度: "+(t.score||t.probability),title:t.keyword||t.name}})})),1)],1)},o=[]},"7e8b":function(t,e,n){"use strict";n("c975"),n("fb6a"),n("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("e659"),a=n("5ee6"),o={data:function(){return{tempFilePath:"",apiUrl:"",result:[]}},onLoad:function(t){uni.setNavigationBarTitle({title:t.title}),this.tempFilePath=t.tempFilePath,this.apiUrl=t.apiUrl,this.request()},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0],t.request()}})},request:function(){var t=this;this.result=[];var e="object"===typeof plus?"https://aip.baidubce.com":getApp().globalData.proxy_server;uni.showLoading({title:"识别中",mask:!0,success:function(){(0,i.pathToBase64)(t.tempFilePath).then((function(n){(0,a.base64Compress)(n,(function(n){uni.request({url:e+"/rest/2.0"+t.apiUrl+"?access_token="+getApp().globalData.access_token,data:{image:encodeURI(n.slice(n.indexOf(",")+1))},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){e.data.error_msg||/非/.test(e.data.result[0].name)?uni.showToast({title:e.data.error_msg||e.data.result[0].name,icon:"none"}):t.result=e.data.result.sort((function(t,e){return t.score?e.score-t.score:e.probability-t.probability}))},fail:function(){uni.showToast({title:"网络连接失败",icon:"none"})},complete:function(){uni.hideLoading()}})}))})).catch((function(t){uni.redirectTo({url:"../index/index"})}))}})}}};e.default=o},b1b9:function(t,e,n){"use strict";n.r(e);var i=n("4a25"),a=n("4271");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var u,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"57c7d3b2",null,!1,i["a"],u);e["default"]=s.exports}}]);