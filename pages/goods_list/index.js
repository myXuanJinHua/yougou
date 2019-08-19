import request from "../../utils/request.js"
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 关键字
    name: '',
    current: 0,
    pagenum: 1,
    pagesize: 10,
    // 商品列表数据
    goods: [],
    // 触底事件的开关
    isMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let {
      name,
      cid
    } = options
    // console.log(name,cid)
    this.setData({
      name: name
    })
    request({
      url: "/goods/search",
      data: {
        query: name,
        pagenum: this.data.pagenum,
        pagesize: this.data.pagesize
      }
    }).then(res => {
      // console.log(res)
      let newGoods = res.data.message.goods.map(v => {
        v.goods_price = v.goods_price.toFixed(2)
        return v
      })
      this.setData({
        goods: newGoods
      })
    })
  },
  handTap(event) {
    // console.log(event)
    let {
      index
    } = event.currentTarget.dataset
    this.setData({
      current: index
    })
  },
  // 触底事件,当滑动页面到最底部时触发
  onReachBottom() {
    if (!this.data.isMore) {
     return
    }
    this.setData({
      pagenum: this.data.pagenum + 1
    })
    request({
      url: "/goods/search",
      data: {
        query: this.data.name,
        pagenum: this.data.pagenum,
        pagesize: this.data.pagesize
      }
    }).then(res => {
      // console.log(res)
      if(res.data.message.goods.length<10){
        this.setData({
          isMore:false
        })
      }
      let newGoods = res.data.message.goods.map(v => {
        v.goods_price = v.goods_price.toFixed(2)
        return v
      })
      this.setData({
        goods: [...this.data.goods,...newGoods]
      })
    })
  }
})