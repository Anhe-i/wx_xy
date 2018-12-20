// pages/refund/refund.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit(e){
     console.log(e.detail);
     var userName = e.detail.value.userName; //用户名
     var userPhone = e.detail.value.userPhone; //电话号码
     var userAddress = e.detail.value.userAddress; //地址
     var contractNumber = e.detail.value.contractNumber; //合同单号
     var userId = e.detail.value.userId; //身份证号
       
     if(userName == '' || userPhone == '' || userAddress == '' || contractNumber == '' || userId == ''){
       wx.showModal({
         title: '提示',
         content: '请输入完整信息'
       })
     }else{
        if(userPhone.length !== 11){
          wx.showModal({
            title: '提示',
            content: '请输入正确的手机号码！'
          })
          return;
        }

       wx.navigateTo({
         url: '../../pages/refundSuccess/refundSuccess',
       })
      
     }
    
  
  }
})