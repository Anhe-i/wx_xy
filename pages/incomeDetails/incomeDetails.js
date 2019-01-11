// pages/incomeDetails/incomeDetails.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0
  },
  //页面加载执行函数
  onLoad:function(){
    var that=this;
    wx.request({
      url: app.globalData.path+'userAddMoneyList',
      data: {
        openid:app.globalData.openid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        if(res.data.code==1){
          for(var i=0;i<res.data.data.length;i++){
            res.data.data[i].createtime = res.data.data[i].createtime.substr(0,10)
          }
          that.setData({
            earn: res.data.data
          })
        }
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  change(){
   this.setData({
     status:0
   })
  },
  change1() {
    var that = this;
    wx.request({
      url: app.globalData.path + 'userReduceMoneyList',
      data: {
        openid: app.globalData.openid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res);
        if (res.data.code == 1) {
          for (var i = 0; i < res.data.data.length; i++) {
            res.data.data[i].createtime = res.data.data[i].createtime.substr(0, 10)
          }
          that.setData({
            expenditure: res.data.data,
            status: 1

          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    
  }

  

  
})