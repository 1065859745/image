(function(e){function n(n){for(var r,o,s=n[0],c=n[1],u=n[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},a={index:0},i=[];function o(e){return s.p+"static/js/"+({"pages-baidushitu-baidushitu":"pages-baidushitu-baidushitu","pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result":"pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result","pages-car-car":"pages-car-car","pages-currency-currency":"pages-currency-currency","pages-dish-dish":"pages-dish-dish","pages-result-result":"pages-result-result","pages-detail-detail":"pages-detail-detail","pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-baidushitu-baidushitu":"672b4675","pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result":"62cc6baf","pages-car-car":"953bce36","pages-currency-currency":"3c6bec89","pages-dish-dish":"449fed61","pages-result-result":"b45acc54","pages-detail-detail":"bc77ebe9","pages-index-index":"347ddb67"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var u=new Error;i=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,t[1](u)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var f=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("2d9e")},"02e9":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={globalData:{access_token:"",proxy_server:"https://woligiao.top"},onLaunch:function(){var e="Ag4enwGKhicwyrZjdHW8G3BLmYam9stj",n="rIsHLARsSbUUa9XpiCyHx3KL",t="object"===typeof plus?"https://aip.baidubce.com":getApp().globalData.proxy_server,r=t+"/oauth/2.0/token?grant_type=client_credentials&client_id="+n+"&client_secret="+e;uni.request({url:r,success:function(e){getApp().globalData.access_token=e.data.access_token}})},onShow:function(){},onHide:function(){}};n.default=r},"1d9f":function(e,n,t){"use strict";var r=t("cd3d"),a=t.n(r);a.a},"2d9e":function(e,n,t){"use strict";var r=t("4ea4"),a=r(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("ab03"),t("1c31");var i=r(t("e143")),o=r(t("4576"));i.default.config.productionTip=!1,o.default.mpType="app";var s=new i.default((0,a.default)({},o.default));s.$mount()},4576:function(e,n,t){"use strict";t.r(n);var r=t("d66f"),a=t("84c8");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("1d9f");var o,s=t("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=c.exports},"566d":function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,'@font-face{font-family:iconfont;src:url(/static/iconfont/iconfont.eot?t=1603679296975); /* IE9 */src:url(/static/iconfont/iconfont.eot?t=1603679296975#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"),url(/static/iconfont/iconfont.woff?t=1603679296975) format("woff"),url(/static/iconfont/iconfont.ttf?t=1603679296975) format("truetype"),url(/static/iconfont/iconfont.svg?t=1603679296975#iconfont) format("svg") /* iOS 4.1- */}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-loading:before{content:"\\e601"}.icon-setting:before{content:"\\e66e"}.icon-dish:before{content:"\\e669"}.icon-plus:before{content:"\\e61e"}.icon-logo:before{content:"\\e624"}.icon-plant:before{content:"\\e606"}.icon-huobi:before{content:"\\e60d"}.icon-animal:before{content:"\\e602"}.icon-wode:before{content:"\\e658"}.icon-fengge:before{content:"\\e623"}.icon-dongman:before{content:"\\e638"}.icon-cheliang:before{content:"\\e629"}.icon-texiao:before{content:"\\e694"}.icon-image:before{content:"\\e600"}.icon-shuiguoshucai:before{content:"\\e7b0"}\r\n\r\n/* 解决头条小程序组件内引入字体不生效的问题 */\n.image{-webkit-box-flex:2;-webkit-flex:2;flex:2;margin-top:10px;min-width:38vh}.container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.resultList{min-width:45vh;-webkit-box-flex:3;-webkit-flex:3;flex:3}.list-footer{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.icon-loading{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),e.exports=n},"84c8":function(e,n,t){"use strict";t.r(n);var r=t("02e9"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},ab03:function(e,n,t){"use strict";(function(e){var n=t("4ea4"),r=n(t("e143"));e["____8540DDB____"]=!0,delete e["____8540DDB____"],e.__uniConfig={globalStyle:{navigationBarBackgroundColor:"#fff",navigationBarTextStyle:"black"}},e.__uniConfig.compilerVersion="2.9.8",e.__uniConfig.router={mode:"history",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,r.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("a67d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-result-result",(function(e){var n={component:Promise.all([t.e("pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result"),t.e("pages-result-result")]).then(function(){return e(t("b1b9"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-currency-currency",(function(e){var n={component:Promise.all([t.e("pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result"),t.e("pages-currency-currency")]).then(function(){return e(t("e8b6"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-dish-dish",(function(e){var n={component:Promise.all([t.e("pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result"),t.e("pages-dish-dish")]).then(function(){return e(t("368f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-car-car",(function(e){var n={component:Promise.all([t.e("pages-car-car~pages-currency-currency~pages-dish-dish~pages-result-result"),t.e("pages-car-car")]).then(function(){return e(t("afe5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-detail-detail",(function(e){var n={component:t.e("pages-detail-detail").then(function(){return e(t("d1e0"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-baidushitu-baidushitu",(function(e){var n={component:t.e("pages-baidushitu-baidushitu").then(function(){return e(t("4f4a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1,titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/result/result",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{enablePullDownRefresh:!1})},[e("pages-result-result",{slot:"page"})])}},meta:{name:"pages-result-result",isNVue:!1,pagePath:"pages/result/result",windowTop:44}},{path:"/pages/currency/currency",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"货币识别",enablePullDownRefresh:!1})},[e("pages-currency-currency",{slot:"page"})])}},meta:{name:"pages-currency-currency",isNVue:!1,pagePath:"pages/currency/currency",windowTop:44}},{path:"/pages/dish/dish",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"菜品识别",enablePullDownRefresh:!1})},[e("pages-dish-dish",{slot:"page"})])}},meta:{name:"pages-dish-dish",isNVue:!1,pagePath:"pages/dish/dish",windowTop:44}},{path:"/pages/car/car",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-car-car",{slot:"page"})])}},meta:{name:"pages-car-car",isNVue:!1,pagePath:"pages/car/car",windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/baidushitu/baidushitu",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"百度识图",enablePullDownRefresh:!1})},[e("pages-baidushitu-baidushitu",{slot:"page"})])}},meta:{name:"pages-baidushitu-baidushitu",isNVue:!1,pagePath:"pages/baidushitu/baidushitu",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},cd3d:function(e,n,t){var r=t("566d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=t("4f06").default;a("f7a837b2",r,!0,{sourceMap:!1,shadowMode:!1})},d66f:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[]}});