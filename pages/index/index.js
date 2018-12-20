//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:'商品展示',
    name:'none',
    array: [{
        img: '../../images/3.png',
        nav: '美发'
      },
      {
        img: '../../images/4.png',
        nav: '酒店'
      },
      {
        img: '../../images/5.png',
        nav: '桑拿'
      }
    ],
    items: [{
      img: '../../images/6.png',
      list: '酒店毛巾20条',
      time: '2018-12-3',
      price: '80'
    }, {
      img: '../../images/7.png',
      list: '床单被罩',
      time: '2018-12-3',
      price: '120'
    },
    ]
  },
  click:function(){
    if(this.data.name == 'none'){
      this.setData({
        name:'block'
      })
    }else{
      this.setData({
        name: 'none'
      })
    }
  },
  addSearch:function(){
    wx.navigateTo({
      url: '../../pages/search/search',
    })
  },

  //事件处理函数
  bindViewTap: function() {

  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh');
    wx.stopPullDownRefresh()
  },
  onLoad: function() {

  },
  getUserInfo: function(e) {}
})