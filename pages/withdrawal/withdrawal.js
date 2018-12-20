// pages/withdrawal/withdrawal.js
Page({

   data:{

   },
   withdrawal(e){
     console.log(e.detail)
     if(e.detail.value.cash == ''){
       wx.showModal({
         title: '提示',
         content: '请输入提现金额',
       })

     }else{
       wx.navigateTo({
         url: '../../pages/waiting/waiting',
       })
     }
    
   }

   
  

   

 
})