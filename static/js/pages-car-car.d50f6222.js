(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-car-car"],{"0a72":function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,".uni-tag[data-v-27fe9c5e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\npadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;-webkit-border-radius:3px;border-radius:3px;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-27fe9c5e]{-webkit-border-radius:15px;border-radius:15px}.uni-tag--mark[data-v-27fe9c5e]{-webkit-border-top-left-radius:0;border-top-left-radius:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-webkit-border-top-right-radius:15px;border-top-right-radius:15px;-webkit-border-bottom-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-27fe9c5e]{opacity:.5}.uni-tag--small[data-v-27fe9c5e]{height:20px;padding:0 8px;line-height:20px;font-size:12px}.uni-tag--default[data-v-27fe9c5e]{color:#333;font-size:14px}.uni-tag-text--small[data-v-27fe9c5e]{font-size:12px!important}.uni-tag-text[data-v-27fe9c5e]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-27fe9c5e]{color:#007aff!important}.uni-tag-text--success[data-v-27fe9c5e]{color:#4cd964!important}.uni-tag-text--warning[data-v-27fe9c5e]{color:#f0ad4e!important}.uni-tag-text--error[data-v-27fe9c5e]{color:#dd524d!important}.uni-tag--primary[data-v-27fe9c5e]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-27fe9c5e]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-27fe9c5e]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-27fe9c5e]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-27fe9c5e]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-27fe9c5e]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-27fe9c5e]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-27fe9c5e]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-27fe9c5e]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""]),e.exports=t},"2a64":function(e,t,r){"use strict";r("c975"),r("d81d"),r("fb6a"),r("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r("bf9b"),a={data:function(){return{price:[],series_id:[],tempFilePath:"",result:[]}},onLoad:function(e){uni.setNavigationBarTitle({title:e.title}),this.tempFilePath=e.tempFilePath,this.request()},methods:{getDetailUrl:function(e,t){var r="https://youjia.baidu.com";return r+=getApp().globalData.isPhone&&t?"/pages/view/index?name="+e+"&serid="+t:"/view/search?query="+e,"../detail/detail?url="+encodeURIComponent(r)},chooseImage:function(){var e=this;uni.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0],e.request()}})},request:function(){var e=this;this.result=[],this.price=[];var t="https://aip.baidubce.com/rest/2.0/image-classify/v1/car?access_token="+getApp().globalData.access_token;uni.showLoading({title:"识别中",success:function(){(0,i.pathToBase64)(e.tempFilePath).then((function(r){uni.request({url:t,data:{image:encodeURI(r.slice(r.indexOf(",")+1))},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){if(t.data.error_msg)uni.showToast({title:t.data.error_msg,icon:"none"});else if("非车类"!=t.data.result[0].name){e.result=t.data.result.sort((function(e,t){return t.score-e.score}));var r="https://youjia.baidu.com/search/search?token=1_526c1239fc0b0512a2bd13ac6b962f5f&query=";e.series_id=e.price=e.result.map((function(t,i){uni.request({url:r+t.name,success:function(t){var r=t.data.Result.data[0];e.price=e.price.map((function(e,t){return t==i?r.price:e})),e.series_id=e.series_id.map((function(e,t){return t==i?r.series_id:e}))},fail:function(){e.price=e.price.map((function(e,t){return t==i?"暂无报价":e})),e.series_id=e.series_id.map((function(e,t){return t==i?"":e}))}})}))}else uni.showToast({title:"非车类",icon:"none"})},fail:function(){uni.showToast({icon:"none",title:"网络连接失败"})},complete:function(){uni.hideLoading()}})})).catch((function(t){e.tempFilePath="../../static/image/plus.png",console.error(t)}))}})}}};t.default=a},6039:function(e,t,r){"use strict";var i=r("ae16"),a=r.n(i);a.a},"6bd0":function(e,t,r){"use strict";r.r(t);var i=r("a6cc"),a=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},a6cc:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=i},a8f3:function(e,t,r){"use strict";var i;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.text?r("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+e.type,!0===e.disabled||"true"===e.disabled?"uni-tag--disabled":"",!0===e.inverted||"true"===e.inverted?e.type+"-uni-tag--inverted":"",!0===e.circle||"true"===e.circle?"uni-tag--circle":"",!0===e.mark||"true"===e.mark?"uni-tag--mark":"","uni-tag--"+e.size],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}},[r("v-uni-text",{class:["default"===e.type?"uni-tag--default":"uni-tag-text",!0===e.inverted||"true"===e.inverted?"uni-tag-text--"+e.type:"","small"===e.size?"uni-tag-text--small":""]},[e._v(e._s(e.text))])],1):e._e()},o=[]},ae16:function(e,t,r){var i=r("0a72");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("4f06").default;a("cfb16548",i,!0,{sourceMap:!1,shadowMode:!1})},bb61:function(e,t,r){"use strict";r.r(t);var i=r("c661"),a=r("caa4");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);var n,c=r("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"dea9d5e6",null,!1,i["a"],n);t["default"]=d.exports},c661:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var i={uniSection:r("7be2").default,uniList:r("2cdc").default,uniListItem:r("c3c0").default,uniTag:r("d439").default},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"image"},[r("v-uni-image",{attrs:{src:e.tempFilePath,mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1),r("uni-section",{attrs:{title:"识别结果",type:"line"}}),r("uni-list",e._l(e.result,(function(t,i){return r("uni-list-item",{key:i,attrs:{clickable:!0,to:e.getDetailUrl(t.name,e.series_id[i]),showArrow:!0,id:i,title:t.name+t.year,note:"相似度: "+t.score.toFixed(5)}},[r("v-uni-view",{staticClass:"list-footer",attrs:{slot:"footer"},slot:"footer"},[r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.price[i],expression:"!price[index]"}],staticClass:"iconfont icon-loading"}),r("uni-tag",{attrs:{circle:!0,text:e.price[i]}})],1)],1)})),1)],1)},o=[]},caa4:function(e,t,r){"use strict";r.r(t);var i=r("2a64"),a=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},d439:function(e,t,r){"use strict";r.r(t);var i=r("a8f3"),a=r("6bd0");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("6039");var n,c=r("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"27fe9c5e",null,!1,i["a"],n);t["default"]=d.exports}}]);