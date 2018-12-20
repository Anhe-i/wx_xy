// pages/selfCenter/selfCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  myDeposit(){
    wx.navigateTo({
      url: '../../pages/myDeposit/myDeposit',
    })
  },
  // 地址管理
  address(){
    wx.navigateTo({
      url: '../../pages/address/address',
    })
  },

  // 收入明细
  incomeDetails() {
    wx.navigateTo({
      url: '../../pages/incomeDetails/incomeDetails',
    })
  },
  withdrawal(){
    wx.navigateTo({
      url: '../../pages/withdrawal/withdrawal',
    })
  },
  rebate(){
    wx.navigateTo({
      url: '../../pages/rebate/rebate',
    })
  },
  myAgent(){
    wx.navigateTo({
      url: '../../pages/myAgent/myAgent',
    })
  },
  aboutUs(){
    wx.navigateTo({
      url: '../../pages/aboutUs/aboutUs',
    })
  },
  myCode(){
    wx.navigateTo({
      url: '../../pages/myCode/myCode',
    })
  },
  question(){
    wx.navigateTo({
      url: '../../pages/question/question',
    })
  },
  contact(){
    wx.navigateTo({
      url: '../../pages/contact/contact',
    })
  }
  
})