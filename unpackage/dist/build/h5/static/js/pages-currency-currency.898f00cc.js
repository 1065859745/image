(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-currency-currency"],{"0978":function(e,t,r){"use strict";r("c975"),r("fb6a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("e659"),o=r("5ee6"),i={data:function(){return{tempFilePath:"",result:{}}},onLoad:function(e){this.tempFilePath=e.tempFilePath,this.request()},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0],e.request()}})},request:function(){var e=this;this.result={};var t="object"===typeof plus?"https://aip.baidubce.com":getApp().globalData.proxy_server;uni.showLoading({title:"识别中",mask:!0,success:function(){(0,a.pathToBase64)(e.tempFilePath).then((function(r){(0,o.base64Compress)(r,(function(r){uni.request({url:t+"/rest/2.0/image-classify/v1/currency?access_token="+getApp().globalData.access_token,data:{image:encodeURI(r.slice(r.indexOf(",")+1))},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){""==t.data.result.currencyName?uni.showToast({icon:"none",title:"识别失败"}):e.result=t.data.result},fail:function(){uni.showToast({icon:"none",title:"网络连接失败"})},complete:function(){uni.hideLoading()}})}))})).catch((function(e){uni.redirectTo({url:"../index/index"})}))}})}}};t.default=i},"13de":function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,".uni-tag[data-v-27fe9c5e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\npadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;-webkit-border-radius:3px;border-radius:3px;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-27fe9c5e]{-webkit-border-radius:15px;border-radius:15px}.uni-tag--mark[data-v-27fe9c5e]{-webkit-border-top-left-radius:0;border-top-left-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-webkit-border-top-right-radius:15px;border-top-right-radius:15px;-webkit-border-bottom-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-27fe9c5e]{opacity:.5}.uni-tag--small[data-v-27fe9c5e]{height:20px;padding:0 8px;line-height:20px;font-size:12px}.uni-tag--default[data-v-27fe9c5e]{color:#333;font-size:14px}.uni-tag-text--small[data-v-27fe9c5e]{font-size:12px!important}.uni-tag-text[data-v-27fe9c5e]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-27fe9c5e]{color:#007aff!important}.uni-tag-text--success[data-v-27fe9c5e]{color:#4cd964!important}.uni-tag-text--warning[data-v-27fe9c5e]{color:#f0ad4e!important}.uni-tag-text--error[data-v-27fe9c5e]{color:#dd524d!important}.uni-tag--primary[data-v-27fe9c5e]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-27fe9c5e]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-27fe9c5e]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-27fe9c5e]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-27fe9c5e]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-27fe9c5e]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-27fe9c5e]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-27fe9c5e]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-27fe9c5e]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""]),e.exports=t},"71a3":function(e,t,r){"use strict";var a=r("fe85"),o=r.n(a);o.a},8986:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));var a={uniSection:r("a9ef").default,uniList:r("23f9").default,uniListItem:r("cace").default,uniTag:r("ef2f").default},o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"image"},[r("v-uni-image",{attrs:{src:e.tempFilePath,mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1),r("uni-section",{attrs:{title:"识别结果",type:"line"}}),r("uni-list",[r("uni-list-item",{directives:[{name:"show",rawName:"v-show",value:e.result.currencyName,expression:"result.currencyName"}],attrs:{to:"../detail/detail?url="+encodeURIComponent("https://baike.baidu.com/item/"+e.result.currencyName)+"&title=百度百科",title:e.result.currencyName,note:e.result.year}},[r("v-uni-view",{staticClass:"list-footer",attrs:{slot:"footer"},slot:"footer"},[r("uni-tag",{attrs:{circle:!0,text:e.result.currencyDenomination?e.result.currencyDenomination:""}})],1)],1)],1)],1)},i=[]},"8fe4":function(e,t,r){"use strict";r.r(t);var a=r("9bc8"),o=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"92e1":function(e,t,r){"use strict";r.r(t);var a=r("0978"),o=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"9bc8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=a},adf4:function(e,t,r){"use strict";var a;r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.text?r("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+e.type,!0===e.disabled||"true"===e.disabled?"uni-tag--disabled":"",!0===e.inverted||"true"===e.inverted?e.type+"-uni-tag--inverted":"",!0===e.circle||"true"===e.circle?"uni-tag--circle":"",!0===e.mark||"true"===e.mark?"uni-tag--mark":"","uni-tag--"+e.size],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}},[r("v-uni-text",{class:["default"===e.type?"uni-tag--default":"uni-tag-text",!0===e.inverted||"true"===e.inverted?"uni-tag-text--"+e.type:"","small"===e.size?"uni-tag-text--small":""]},[e._v(e._s(e.text))])],1):e._e()},i=[]},e8b6:function(e,t,r){"use strict";r.r(t);var a=r("8986"),o=r("92e1");for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);var n,d=r("f0c5"),c=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"017d8c5e",null,!1,a["a"],n);t["default"]=c.exports},ef2f:function(e,t,r){"use strict";r.r(t);var a=r("adf4"),o=r("8fe4");for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);r("71a3");var n,d=r("f0c5"),c=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"27fe9c5e",null,!1,a["a"],n);t["default"]=c.exports},fe85:function(e,t,r){var a=r("13de");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=r("4f06").default;o("37b1810a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);