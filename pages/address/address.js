// pages/address/address.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: [true, false]

  },

  //页面加载执行函数
  onLoad: function(options) {
    this.getAddress();
  },
  //获取用户地址列表
  getAddress:function(){
    var that = this;
    wx.request({
      url: app.globalData.path + 'selectUserAddress',
      data: {
        openid: app.globalData.openid,
        addressActive: ""

      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        if (res.data.code == 1) {
          that.setData({
            address: res.data.data
          })
          var data = res.data.data
          for (var i = 0; i < data.length; i++) {
            if (data[i].flag == 1) {
              that.setData({
                addressActive: data[i].id
              })
            }
          }
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //点击切换默认地址
  addressClick: function(e) {
    var that=this;
    console.log(e);
    wx.request({
      url: app.globalData.path+'setDefaultAddress',
      data: {
        openid: app.globalData.openid,
        addressid: e.currentTarget.dataset.addressid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        if(res.data.code==1){
          that.setData({
            addressActive: e.currentTarget.dataset.addressid
          })
        }
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    
  },
  addAddress() {
    wx.navigateTo({
      url: '../../pages/addAddress/addAddress',
    })
  },
  editAddress(e) {
    console.log(e)
    var data = JSON.stringify(e.target.dataset.addressdata)
    wx.navigateTo({
      url: '../../pages/editAddress/editAddress?addressData='+data,
    })
  },
  //页面显示执行函数
  onShow:function(){
    this.getAddress();
  }

})