(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dish-dish"],{"023b":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a}));var a={uniSection:r("7be2").default,uniList:r("2cdc").default,uniListItem:r("c3c0").default,uniTag:r("d439").default},o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"image"},[r("v-uni-image",{attrs:{src:t.tempFilePath,mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}})],1),r("uni-section",{attrs:{title:"识别结果",type:"line"}}),r("uni-list",t._l(t.result,(function(t,e){return r("uni-list-item",{key:e,attrs:{to:"../detail/detail?url="+encodeURIComponent("http://baike.baidu.com/item/"+t.name),title:t.name,note:"相似度: "+t.probability,showArrow:!0,clickable:!0}},[r("v-uni-view",{staticClass:"list-footer",attrs:{slot:"footer"},slot:"footer"},[r("uni-tag",{attrs:{circle:!0,text:t.calorie+" 卡路里"}})],1)],1)})),1)],1)},i=[]},"0a72":function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,".uni-tag[data-v-27fe9c5e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\npadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;-webkit-border-radius:3px;border-radius:3px;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-27fe9c5e]{-webkit-border-radius:15px;border-radius:15px}.uni-tag--mark[data-v-27fe9c5e]{-webkit-border-top-left-radius:0;border-top-left-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-webkit-border-top-right-radius:15px;border-top-right-radius:15px;-webkit-border-bottom-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-27fe9c5e]{opacity:.5}.uni-tag--small[data-v-27fe9c5e]{height:20px;padding:0 8px;line-height:20px;font-size:12px}.uni-tag--default[data-v-27fe9c5e]{color:#333;font-size:14px}.uni-tag-text--small[data-v-27fe9c5e]{font-size:12px!important}.uni-tag-text[data-v-27fe9c5e]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-27fe9c5e]{color:#007aff!important}.uni-tag-text--success[data-v-27fe9c5e]{color:#4cd964!important}.uni-tag-text--warning[data-v-27fe9c5e]{color:#f0ad4e!important}.uni-tag-text--error[data-v-27fe9c5e]{color:#dd524d!important}.uni-tag--primary[data-v-27fe9c5e]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-27fe9c5e]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-27fe9c5e]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-27fe9c5e]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-27fe9c5e]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-27fe9c5e]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-27fe9c5e]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-27fe9c5e]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-27fe9c5e]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""]),t.exports=e},"1b73":function(t,e,r){"use strict";r.r(e);var a=r("4a31"),o=r.n(a);for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"4a31":function(t,e,r){"use strict";r("c975"),r("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r("bf9b"),o={data:function(){return{tempFilePath:"",result:[]}},onLoad:function(t){this.tempFilePath=t.tempFilePath,this.request()},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0],t.request()}})},request:function(){var t=this;this.result=[];var e="object"===typeof plus?"https://aip.baidubce.com":getApp().globalData.proxy_server;uni.showLoading({title:"识别中",mask:!0,success:function(){(0,a.pathToBase64)(t.tempFilePath).then((function(r){uni.request({url:e+"/rest/2.0/image-classify/v2/dish?access_token="+getApp().globalData.access_token,data:{image:encodeURI(r.slice(r.indexOf(",")+1))},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){"非菜"==e.data.result[0].name?uni.showToast({icon:"none",title:"不是菜品"}):t.result=e.data.result},fail:function(){uni.showToast({icon:"none",title:"网络连接失败"})},complete:function(){uni.hideLoading()}})})).catch((function(e){t.tempFilePath="../../static/image/plus.png",console.error(e)}))}})}}};e.default=o},6039:function(t,e,r){"use strict";var a=r("ae16"),o=r.n(a);o.a},"6bd0":function(t,e,r){"use strict";r.r(e);var a=r("a6cc"),o=r.n(a);for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},a6cc:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=a},a8f3:function(t,e,r){"use strict";var a;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.text?r("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+t.type,!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.inverted||"true"===t.inverted?t.type+"-uni-tag--inverted":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[r("v-uni-text",{class:["default"===t.type?"uni-tag--default":"uni-tag-text",!0===t.inverted||"true"===t.inverted?"uni-tag-text--"+t.type:"","small"===t.size?"uni-tag-text--small":""]},[t._v(t._s(t.text))])],1):t._e()},i=[]},ae16:function(t,e,r){var a=r("0a72");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r("4f06").default;o("cfb16548",a,!0,{sourceMap:!1,shadowMode:!1})},d439:function(t,e,r){"use strict";r.r(e);var a=r("a8f3"),o=r("6bd0");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("6039");var n,d=r("f0c5"),c=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"27fe9c5e",null,!1,a["a"],n);e["default"]=c.exports},f7c1:function(t,e,r){"use strict";r.r(e);var a=r("023b"),o=r("1b73");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var n,d=r("f0c5"),c=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"7d824970",null,!1,a["a"],n);e["default"]=c.exports}}]);