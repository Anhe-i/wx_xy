// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

   
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  questionDetail(){
    wx.navigateTo({
      url: '../../pages/selfCenter/selfCenter',
    })
  }
})