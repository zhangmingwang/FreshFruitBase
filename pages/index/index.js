//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 1000,
    duration: 1000,
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度 
  },
  //进入芒果种类列表页面
  bindManggoTap: function() {
   console.log("点击了芒果")
   wx.navigateTo({
     url: '../goodList/goodList',
     success: function(res){
       // success
     },
     fail: function(res) {
      console.log("fail = " + res.data)
     },
     complete: function(res) {
       // complete
     }
   })
  },

   //进入百香果页面
  bindPassionFruitTap: function() {
   console.log("点击了百香果")
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  bannerClick: function(event) {
    console.log(event)
  }
})
