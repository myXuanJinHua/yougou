import request from "../../utils/request.js"
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 大分类
    cates:[],
    // 
    current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    request({
      url:"/categories"
    }).then(res=>{
      // console.log(res)
      let {message}=res.data
      this.setData({
        cates:message
      })
    })
  },
  handleTap(event){
    // console.log(event)
    let { index } = event.currentTarget.dataset
    this.setData({
      current:index
    })
  }
})