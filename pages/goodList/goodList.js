var url = "https://www.xinxinhotel.com/test/good/findList.action";
var page = 1;
var page_size = 20;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;
var testDataList = {
  list: [
    {
      "good_id": "842",
      "good_name": "千里山 海南金煌芒果 3.5斤装 单果约300-450g 自营水果",
"pic_url":"https://m.360buyimg.com/mobilecms/s436x436_jfs/t4927/309/667321627/179666/d6b0d9f9/58e62d46Ndcc0a865.jpg!q70.jpg",
      "good_price":"38.70"
    },
     {
      "good_id": "843",
      "good_name": "千里山 海南金煌芒果 1.5斤装 自营水果",    "pic_url":"https://m.360buyimg.com/mobilecms/s436x436_jfs/t4363/331/3682452819/179666/d6b0d9f9/58e62d5fNfce651cc.jpg!q70.jpg",
      "good_price": "18.90"
    },
    {
      "good_id": "844",
      "good_name": "微果 广西芒果 百色贵妃芒果红金龙芒果 中贵妃芒果 2000g装 单果100-200g","pic_url":"https://m.360buyimg.com/mobilecms/s436x436_jfs/t4552/152/783638979/271221/8fac2f9a/58d4c059N5327b712.jpg!q70.jpg",
      "good_price": "36.80"
    }
  ]
} ;


// 获取数据的方法，具体怎么获取列表数据大家自行发挥  
var GetList = function (that) {
  that.setData({
    hidden: true
  });
  var list = []; 
  // for (var i = 0; i < testDataList.list.length; i++) {
  //   list.push(testDataList.list[i]);
  // }
  // that.setData({
  //   list: list
  // });
  wx.request({
    url: url,
    data: {
      pageNumber: page,
      pageSize: page_size,
      sort: sort,
      is_easy: is_easy,
      lange_id: lange_id,
      pos_id: pos_id,
      unlearn: unlearn
    },
    success: function (res) {
      //console.info(that.data.list);  
      // var list = that.data.rows;
      console.log("total rows = " + res.data.total);
      // console.log("rows = " + res.data.rows);
      for (var i = 0; i < res.data.rows.length; i++) {
        list.push(res.data.rows[i]);
        console.log("row" + i + " = " + res.data.rows[i]);
      }
      console.log("total rows = " + res.data.rows);
      // list.concat(res.data.rows);
      // list.push(res.data.rows[0]);
      list.concat(res.data.rows);
      // console.log("row = " + res.data.rows[0].head_img);
      that.setData({
        list: list
      });
      that.setData({
        hidden: true
      });
    }
  });
}

var utils = require('../../utils/util.js'); 
Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    imagewidth: 0,
    imageheight: 0
  },
  onLoad: function () {
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值  
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  onShow: function () {
    //  在页面展示之后先获取一次数据  
    var that = this;
    GetList(that);
  },
  bindDownLoad: function () {
    //  该方法绑定了页面滑动到底部的事件  
    var that = this;
    page ++;
    GetList(that);
  },
  scroll: function (event) {
    //  该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。  
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    //  该方法绑定了页面滑动到顶部的事件，然后做上拉刷新  
    page = 0;
    this.setData({
      list: [],
      scrollTop: 0
    });
    GetList(this)
  },

  imageLoad: function (e) {
    var imageSize = utils.getOriginalImageSize(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  clickitem:function(event) {
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})  