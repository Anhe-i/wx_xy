//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    payment: 0,
    delivery: 0,
    shouhuo: 0,
    assess: 0,
    status: 0,
    menu: 0,
    menu1: 1,
    menu2: 1,
    menu3: 1,
    kong: 0,
    details: 0,
    active:0,
    active1:1,
    active2:1,
    active3:1,
    // 未付款数据
    obj: {
      id: '1',
      img: '../../images/8.png',
      title: '床单被罩',
      deposit:'押金:120元',
      price: '120',
      font: '床单被罩床单被罩床单被罩',
      time: '2018-12-2',
      num: '1',
      number: "123456"
    },
    // 待收货数据
    shou: [
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
    ],
    // 待评价数据
    assess_con: [{
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
      deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
    ],
    // 待发货数据
    arr: [{
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
      deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
    ],
    // 已完成订单数据
    items: [{
        id: '1',
        img: '../../images/8.png',
        title: '床单被罩',
      deposit: '押金:120元',
        price: '120',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '2',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '90',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '3',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '80',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '4',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '100',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      },
      {
        id: '5',
        img: '../../images/8.png',
        title: '床单被罩',
        deposit: '押金:120元',
        price: '110',
        font: '床单被罩床单被罩床单被罩',
        time: '2018-12-2',
        num: '1',
        number: "123456",
      }
    ]
  },
  // 待评价部分跳转评价页面
  addAssess: function() {
    wx.navigateTo({
      url: '../../pages/assess/assess',
    })
  },
  //已完成和未完成订单 tab切换事件
  change: function() {
    this.setData({
      status: 0
    })
  },
  change1: function() {
    this.setData({
      status: 1
    })
  },
  // 未完成订单部分未付款切换
  change2: function() {
    var payment = this.data.payment
    //console.log(payment)
    if (payment == 0) {
      this.setData({
        kong: 1,
        menu: 1,
        menu1: 1,
        menu2: 1,
        menu3: 1,
        active: 0,
        active1: 1,
        active2: 1,
        active3: 1,
      })
    }else{
      this.setData({
        kong:0,
        menu: 0,
        menu1: 1,
        menu2: 1,
        menu3: 1,
        active: 0,
        active1: 1,
        active2: 1,
        active3: 1,
      })
    }
  },
  // 未完成订单部分待发货切换
  change3: function() {
    var arr = this.data.arr.length
    if (arr == 0) {
      this.setData({
        kong: 1,
        menu: 1,
        menu1: 1,
        menu2: 1,
        menu3: 1,
        active: 1,
        active1: 0,
        active2: 1,
        active3: 1,
      })
    } else {
      this.setData({
        kong: 0,
        menu: 1,
        menu1: 0,
        menu2: 1,
        menu3: 1,
        active: 1,
        active1: 0,
        active2: 1,
        active3: 1,
      })
    }
  },
  // 未完成订单部分待收货切换
  change4: function() {
    var arr = this.data.shou.length
    if (arr == 0) {
      this.setData({
        kong: 1,
        menu: 1,
        menu1: 1,
        menu2: 1,
        menu3: 1,
        active: 1,
        active1: 1,
        active2: 0,
        active3: 1,
      })
    } else {
      this.setData({
        kong: 0,
        menu: 1,
        menu1: 1,
        menu2: 0,
        menu3: 1,
        active: 1,
        active1: 1,
        active2: 0,
        active3: 1,
      })
    }
  },
  // 查看物流跳转
  addLogistics:function(){
    wx.navigateTo({
      url: '../../pages/logistics/logistics',
    })
  },
  // 未完成订单部分待评价切换
  change5: function() {
    var arr = this.data.assess_con.length
    if(arr == 0 ){
      this.setData({
        kong:1,
        menu: 1,
        menu1: 1,
        menu2: 1,
        menu3: 1,
        active: 1,
        active1: 1,
        active2: 1,
        active3: 0,
      })
    }else{
      this.setData({
        kong:0,
        menu: 1,
        menu1: 1,
        menu2: 1,
        menu3: 0,
        active: 1,
        active1: 1,
        active2: 1,
        active3: 0,
      })
    }
    
  },
  // 跳转 付款页面
  addPayment: function(id) {
    var id = JSON.stringify(id.currentTarget.dataset.id)
    // console.log(id)
    wx.navigateTo({
      url: '../../pages/payment/payment?object=' + id,
    })
  },
  // 已完成订单跳转详情页
  addDetails: function(id) {

    var id = JSON.stringify(id.currentTarget.dataset.id)
    console.log(id)
    wx.navigateTo({
      url: "../../pages/details/details?obj=" + id
    })
  },
  // 定义未付款,待发货,待收货,待评价 数量值
  payment: function() {
    // 未付款
    var obj = this.data.obj
    // 待发货
    var arr1 = this.data.arr.length
    // 待收货
    var arr2= this.data.shou.length
    // 待评价
    var arr3 = this.data.assess_con.length
    if (obj) {
      this.setData({
        payment: 1
      })
    } else {
      this.setData({
        payment: 0 
      })
    }
    this.setData({
      delivery: arr1,
      shouhuo: arr2,
      assess: arr3
    })
  },
  // 待发货
  // fahuo: function() {
    
    // this.setData({
  //     delivery: arr
  //   })
  // },
  // 待收货
  // shouhuo: function() {
  //   var arr = this.data.shou.length
  //   this.setData({
  //     shouhuo: arr
  //   })
  // },
  // 待评价
  // assess: function() {
  //   var arr = this.data.assess_con.length
  //   this.setData({
  //     assess: arr
  //   })
  // },
  kong: function() {
    var payment = this.data.payment
    console.log(payment)
    if (payment == 0) {
      this.setData({
        kong: 1,
        menu: 1
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh');
    wx.stopPullDownRefresh()
  },
  onLoad: function() {
    this.payment()
    // this.fahuo()
    // this.shouhuo()
    // this.assess()
    this.kong()
  },
  getUserInfo: function(e) {}
})