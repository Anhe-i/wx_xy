// pages/details/details.js
Page({


  /**
   * 页面的初始数据
   */
  data: {

    obj: {}
  },
  addAssess: function() {
    wx.navigateTo({
      url: '../assess/assess',
    })
  },
  addInvoice: function() {

    wx.navigateTo({
      url: '../../pages/invoice/invoice',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    // console.log(JSON.parse(option.obj))
    var obj1 = JSON.parse(option.obj)
    console.log(obj1)
    this.setData({
      obj: obj1
    })
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