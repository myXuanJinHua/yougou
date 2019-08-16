import request from "../../utils/request.js"

//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    autoplay:true,
    imgUrls: [],
    indicatorDots:true,
    cates:[],
    floors:[]
  },
  onLoad(){
    // 获取轮播图
    request({
      url:"/home/swiperdata",
    }).then(res=>{
      // console.log(res)
      let {message} = res.data
      this.setData({
        imgUrls: message
      })
    })
    // 获取分类图
    request({
      url:"/home/catitems"
    }).then(res=>{
      // console.log`(res)
      let { message } = res.data
      this.setData({
        cates:message
      })
    })
    // 获取楼层图
    request({
      url:"/home/floordata"
    }).then(res=>{
      // console.log(res)
      let {message} =res.data
      this.setData({
        floors:message
      })
    })
  }
})
