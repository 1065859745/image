# image
图像识别、植物识别、动物识别、车辆识别、货币识别、菜品识别
# 配置
要正常使用图像识别功能，需要先在 App.vue 页面配置百度图像识别的AK、SK以及部分百度接口的代理（解决跨域问题），nginx代理例子：
```
location /oauth {
  proxy_pass https://aip.baidubce.com;
  more_set_headers "Access-Control-Allow-Origin:*";
}
location /search {
  proxy_pass https://youjia.baidu.com;
  more_set_headers "Access-Control-Allow-Origin:*";
}
location /rest/ {
  proxy_pass https://aip.baidubce.com;
  more_set_headers "Access-Control-Allow-Origin:*";
}
```
需要给nginx添加ngx_headers_more模块，[详情](https://www.cnblogs.com/kenwar/p/8297725.html)
# Hbuild
使用Hbuild打开，可以运行、打包此项目
# 项目预览
- [https://woligiao.top](https://woligiao.top)
- [https://1065859745.github.io/image](https://1065859745.github.io/image)
