// pages/display/display.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      {
        img: '../../images/7.png',
        list: '床单被罩',
        time: '2018-12-3',
        price: '120'
      },
      {
        img: '../../images/7.png',
        list: '床单被罩',
        time: '2018-12-3',
        price: '120'
      },
      {
        img: '../../images/7.png',
        list: '床单被罩',
        time: '2018-12-3',
        price: '120'
      }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  display(){
    wx.navigateTo({
      url: '../../pages/goods/goods',
    })
  },
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})