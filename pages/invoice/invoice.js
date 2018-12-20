// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staus:0,
    isChecked1: false,
    isChecked2: false,
    isChecked3: true,
    isChecked4: false,
    status :0,
    beizi: '../../images/beizi.jpg',
    ddbh: '订单编号: ',
    kpje: '开票金额: ',
    ddbh_1: '12345678',
    kpje_1: '￥120',
    shou:'ccc'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //点击电子发票
  serviceSelection1: function (e) {
    console.log(e)
    this.setData({
      staus:0
    })
  },
  //点击纸质发票
  serviceSelection2: function (a) {
    console.log(a)
    this.setData({
      staus: 1
    })
  },
  // 点击企业
  serviceSelection3: function (a) {
    console.log(a)
    this.setData({
      isChecked4: true,
      isChecked3: false
    })
  },
  //点击个人单位
  serviceSelection4: function (a) {
    console.log(a)
    this.setData({
      isChecked3: true,
      isChecked4: false
    })
  },
  //点击下拉双箭头
  serviceSelection5: function () {
    var status = this.data.status
    if(status == 0){
      this.setData({
        status:1
      })
    }else{
      this.setData({
        status: 0
      })
    }
  },
  // 提交申请
  default:function(){
    wx.navigateTo({
      url: '../../pages/invoice_submit/invoice_submit',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})