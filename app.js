//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      
      success: res => {
        var that = this;
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid:that.globalData.appid,
              secret:that.globalData.secret,
              js_code:res.code,
              grant_type:"authorization_code"
            },
            success:function(res){
              console.log(res);
              that.globalData.openid=res.data.openid
              wx.request({
                url: that.globalData.path +'frontUserLogin',
                data:{
                  openid: that.globalData.openid
                },
                success:function(res){
                  console.log(res);

                }
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    hasUserInfo: "",
    appid: "wxd358673a51f4a244",
    secret: "88b71869befe2f73ddd6dafb165b5b6f",
    //小新
    // path: "http://192.168.188.48:8081/clothes/"
    //郭登科
    // path:"http://192.168.188.46:8080/house/"
    //郭瑞
    path:"http://192.168.188.23:8080/clothes/"
  }
})