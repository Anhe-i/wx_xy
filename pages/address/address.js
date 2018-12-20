// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     isShow:[true,false]
    
  },
  addAddress(){
    wx.navigateTo({
      url: '../../pages/addAddress/addAddress',
    })
  },
  editAddress(){
    wx.navigateTo({
      url: '../../pages/editAddress/editAddress',
    })
  }
  
  
})