// pages/addAddress/addAddress.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: '',
    status: false
  },  
  //页面加载执行函数
  onLoad: function(options) {
    var data=JSON.parse(options.addressData);
    this.setData({
      receiverAddress: data.receivername
    })
    data.address= '河北, 唐山市, 沛县';
    data.address = data.address.split(",");
    this.setData({
      addressData: data,
      userName: data.receivername,
      userPhone: data.telephone,
      userAddressDetails: data.addressdetails,
      region: data.address
    })
    console.log(this.data.addressData)
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var receiverAddress;
    for (var i = 0; i < e.detail.value.length;i++){
      receiverAddress =receiverAddress+e.detail.value[i];
    }
    this.setData({
      region: e.detail.value,
      status: true,
      receiverAddress: receiverAddress
    })
  },
  //输入框监听
  userName:function(e){
    console.log(e)
    this.setData({
      userName: e.detail.value
    })
  },
  userPhone: function (e) {
    console.log(e);
    this.setData({
      userPhone: e.detail.value
    })
  },
  userAddressDetails:function(e){
    console.log(e);
    this.setData({
      userAddressDetails: e.detail.value
    })
  },
  //提交更改
  onloadAddress:function(){
    var that=this;
    wx.request({
      url: app.globalData.path +'updateUserAddress',
      data: {
        openid:app.globalData.openid,
        addressid: that.data.addressData.id,
        receiverName: that.data.userName,
        receiverTel: that.data.userPhone,
        receiverAddress: that.data.receiverAddress,
        receiverAddressDetails: that.data.userAddressDetails,
        defaultAddress:"y"
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        if(res.data.code==1){
          wx.showToast({
            title: '更改成功',
            icon: 'success',
            image: '',
            duration: 1500,
            mask: true,
            success: function(res) {
              setTimeout(()=>{
                wx.navigateBack({
                  url:'../address/address'
                })
              },1500)
            },
            fail: function(res) {},
            complete: function(res) {},
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }


})