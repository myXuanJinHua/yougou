import request from "./utils/request.js"

//app.js
App({
  // 项目运行的时候就会触发,只执行一次
  onLaunch: function () {
    // 初始化request基准路径
    request.defaults.baseURL ="https://api.zbztb.cn/api/public/v1";
    // 错误拦截
  }
})