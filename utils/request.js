/**
 * 封装一个类似于axios的请求工具库
 * 
 * axios例子:
 * 
 * 1.设置基准路径:
 * axios.defaults.baseURL=""
 * 
 * 2.发起请求,返回的是promise
 * axios({参数}).then().catch()
 * 
 * 3.监听错误
 * axios.onError(回调函数)
 * 
 * 封装思路:
 * 采用单例的封装模式
 */

// 传入的参数不是对象的时候就
const request = function(obj = {}) {
  // 判断url不为空
  if (!obj.url) {
    throw new Error('请输入url地址');
    return
  }

  if(obj.url.search(/^http/)==-1){
    obj.url = request.defaults.baseURL + obj.url
  }
 
  return new Promise((resolve, reject) => {
    wx.request({
      ...obj,
      success(res) {
        resolve(res)
      },
      complete(res) {
       request.errors.forEach(fn=>{
         fn(res)
       })
      }
    })
  })
};

/**
 * request的默认属性
 */
request.defaults = {
  // 基准路径
  baseURL: ""
};

//保存错误函数
request.errors = [];

/**
 * 接收错误的触发函数
 * 
 * @参数:callback | 传入的错误函数
 */
request.onError = function(callback) {
  request.errors.push(callback)
}

export default request