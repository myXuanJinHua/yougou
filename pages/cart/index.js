// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adress: {
      userName: '',
      telNumber: '',
      detailInfo: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  // 添加新的收货地址
  handleAdress() {
    wx.chooseAddress({
      success: (res) => {
        // console.log(res)
        this.setData({
          adress: {
            userName: res.userName,
            telNumber: res.telNumber,
            detailInfo: res.provinceName + res.cityName + res.detailInfo
          }
        })
      }
    })
  }
})