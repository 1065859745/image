(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-car-car"],{"13de":function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,".uni-tag[data-v-27fe9c5e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\npadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;-webkit-border-radius:3px;border-radius:3px;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-27fe9c5e]{-webkit-border-radius:15px;border-radius:15px}.uni-tag--mark[data-v-27fe9c5e]{-webkit-border-top-left-radius:0;border-top-left-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-webkit-border-top-right-radius:15px;border-top-right-radius:15px;-webkit-border-bottom-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-27fe9c5e]{opacity:.5}.uni-tag--small[data-v-27fe9c5e]{height:20px;padding:0 8px;line-height:20px;font-size:12px}.uni-tag--default[data-v-27fe9c5e]{color:#333;font-size:14px}.uni-tag-text--small[data-v-27fe9c5e]{font-size:12px!important}.uni-tag-text[data-v-27fe9c5e]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-27fe9c5e]{color:#007aff!important}.uni-tag-text--success[data-v-27fe9c5e]{color:#4cd964!important}.uni-tag-text--warning[data-v-27fe9c5e]{color:#f0ad4e!important}.uni-tag-text--error[data-v-27fe9c5e]{color:#dd524d!important}.uni-tag--primary[data-v-27fe9c5e]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-27fe9c5e]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-27fe9c5e]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-27fe9c5e]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-27fe9c5e]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-27fe9c5e]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-27fe9c5e]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-27fe9c5e]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-27fe9c5e]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""]),e.exports=t},"1bb8":function(e,t,r){"use strict";r("c975"),r("d81d"),r("fb6a"),r("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r("e659"),a=r("5ee6"),o={data:function(){return{price:[],series_id:[],tempFilePath:"",result:[],isPhone:!1}},onLoad:function(e){var t=this;uni.setNavigationBarTitle({title:e.title}),this.tempFilePath=e.tempFilePath,this.request(),uni.getSystemInfo({success:function(e){t.isPhone=e.windowHeight>e.windowWidth}})},methods:{getDetailUrl:function(e,t){var r="https://youjia.baidu.com";return r+=this.isPhone&&t?"/pages/view/index?name="+e+"&serid="+t:"/view/search?query="+e,"../detail/detail?url="+encodeURIComponent(r)+"&title=有驾"},chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0],e.request()}})},request:function(){var e=this;this.result=[],this.price=[];var t="object"===typeof plus?"https://aip.baidubce.com":getApp().globalData.proxy_server;uni.showLoading({title:"识别中",mask:!0,success:function(){(0,i.pathToBase64)(e.tempFilePath).then((function(r){(0,a.base64Compress)(r,(function(r){uni.request({url:t+"/rest/2.0/image-classify/v1/car?access_token="+getApp().globalData.access_token,data:{image:encodeURI(r.slice(r.indexOf(",")+1))},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){if(t.data.error_msg)uni.showToast({title:t.data.error_msg,icon:"none"});else if("非车类"!=t.data.result[0].name){e.result=t.data.result.sort((function(e,t){return t.score-e.score}));var r="object"===typeof plus?"https://youjia.baidu.com":getApp().globalData.proxy_server;e.series_id=e.price=e.result.map((function(t,i){uni.request({url:r+"/search/search?token=1_526c1239fc0b0512a2bd13ac6b962f5f&query="+t.name,success:function(t){var r=t.data.Result.data[0];e.price=e.price.map((function(e,t){return t==i?r.price:e})),e.series_id=e.series_id.map((function(e,t){return t==i?r.series_id:e}))},fail:function(){e.price=e.price.map((function(e,t){return t==i?"暂无报价":e})),e.series_id=e.series_id.map((function(e,t){return t==i?"":e}))}})}))}else uni.showToast({title:"非车类",icon:"none"})},fail:function(){uni.showToast({icon:"none",title:"网络连接失败"})},complete:function(){uni.hideLoading()}})}))})).catch((function(e){uni.redirectTo({url:"../index/index"})}))}})}}};t.default=o},"2fc3":function(e,t,r){"use strict";r.r(t);var i=r("1bb8"),a=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"71a3":function(e,t,r){"use strict";var i=r("fe85"),a=r.n(i);a.a},"8fe4":function(e,t,r){"use strict";r.r(t);var i=r("9bc8"),a=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"9bc8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=i},adf4:function(e,t,r){"use strict";var i;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.text?r("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+e.type,!0===e.disabled||"true"===e.disabled?"uni-tag--disabled":"",!0===e.inverted||"true"===e.inverted?e.type+"-uni-tag--inverted":"",!0===e.circle||"true"===e.circle?"uni-tag--circle":"",!0===e.mark||"true"===e.mark?"uni-tag--mark":"","uni-tag--"+e.size],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}},[r("v-uni-text",{class:["default"===e.type?"uni-tag--default":"uni-tag-text",!0===e.inverted||"true"===e.inverted?"uni-tag-text--"+e.type:"","small"===e.size?"uni-tag-text--small":""]},[e._v(e._s(e.text))])],1):e._e()},o=[]},afe5:function(e,t,r){"use strict";r.r(t);var i=r("c9e8"),a=r("2fc3");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);var n,c=r("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"2d64b174",null,!1,i["a"],n);t["default"]=d.exports},c9e8:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var i={uniSection:r("a9ef").default,uniList:r("23f9").default,uniListItem:r("cace").default,uniTag:r("ef2f").default},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"resultList",staticStyle:{"min-width":"350px"}},[r("uni-section",{attrs:{title:"识别结果",type:"line"}}),r("uni-list",e._l(e.result,(function(t,i){return r("uni-list-item",{key:i,attrs:{clickable:!0,to:e.getDetailUrl(t.name,e.series_id[i]),showArrow:!0,id:i,title:t.name+t.year,note:"相似度: "+t.score.toFixed(5)}},[r("v-uni-view",{staticClass:"list-footer",attrs:{slot:"footer"},slot:"footer"},[r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.price[i],expression:"!price[index]"}],staticClass:"iconfont icon-loading"}),r("uni-tag",{attrs:{circle:!0,text:e.price[i]}})],1)],1)})),1)],1),r("v-uni-image",{staticClass:"image",attrs:{src:e.tempFilePath,mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1)},o=[]},ef2f:function(e,t,r){"use strict";r.r(t);var i=r("adf4"),a=r("8fe4");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("71a3");var n,c=r("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"27fe9c5e",null,!1,i["a"],n);t["default"]=d.exports},fe85:function(e,t,r){var i=r("13de");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("4f06").default;a("37b1810a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);