// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['选择省','市','区'],
    status:false
 
  },

  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      status:true
    })
  },
  addAddress(e){
   console.log(e);
  }
 
 
})