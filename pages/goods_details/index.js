import request from "../../utils/request.js"
// pages/goods_details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    message:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    request({
      url:"/goods/detail",
      data: {goods_id:options.goods_id}
    }).then(res=>{
      // console.log(res)
      let {message} =res.data
      this.setData({
        message,
        imgUrls:message.pics
      })
    })
  }
})