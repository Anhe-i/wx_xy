// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: '1',
        img: '../../images/9.png',
        content: '床单被罩',
        list: '床单被罩床单被罩床单被罩',
        deposit:'10',
        money: '120',
      selected: false,
        num: "1"
      },
      {
        name: '2',
        img: '../../images/9.png',
        content: '床单被罩',
        list: '床单被罩床单被罩床单被罩',
        deposit: '10',
        money: '110',
        selected: false,
        num: "1"
      },
      {
        name: '3',
        img: '../../images/9.png',
        content: '床单被罩',
        list: '床单被罩床单被罩床单被罩',
        deposit: '10',
        money: '100',
        selected: false,
        num: "1"
      },
      {
        name: '4',
        img: '../../images/9.png',
        content: '床单被罩',
        list: '床单被罩床单被罩床单被罩',
        deposit: '10',
        money: '80',
        selected: false,
        num: "1"
      },
      {
        name: '5',
        img: '../../images/9.png',
        content: '床单被罩',
        list: '床单被罩床单被罩床单被罩',
        deposit: '10',
        money: '90',
        selected: false,
        num: "1"
      },
    ],
    price: "0",
    sum: '0',
    select: false,
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    
    // var num = e.detail.value.length
    // console.log(this.data.sum)
    // this.setData({
    //   sum:num
    // })
    // console.log(this.data.sum)
  },
// 减号
  minus: function(id) {
    // 获取绑定自定义属性id 的值  根据其id值判断索引
    var id = parseInt(id.currentTarget.dataset.id)
    // console.log(id)
    var that = this
    // var arr = that.data.items
    var sum = that.data.items[id - 1].num
    var checkbox = this.data.items[id - 1].selected
    var price = Number(this.data.items[id - 1].money)
    var sum = Number(this.data.items[id - 1].num)
    if (checkbox && sum>1) {
      var price1 = Number(this.data.price)
      this.setData({
        price: price1 - price
      })
    }
    if (sum > 1) {
      sum--
      that.setData({
        //ES6字符串拼接
        [`items[${id-1}].num`]: sum
      })

    } else {
      that.setData({
        [`items[${id - 1}].num`]: 1
      })
    }
  },
  // 加号
  add: function(e) {
    var id = parseInt(e.currentTarget.dataset.id)
    // console.log(e)
    var that = this
    // var arr = that.data.items
    var checkbox = this.data.items[id - 1].selected
    var sum = that.data.items[id - 1].num
    var price = Number(this.data.items[id - 1].money)
    var sum = Number(this.data.items[id - 1].num)
    // console.log(sum)
    if(checkbox && sum<100){
      var price1 = Number(this.data.price)
      this.setData({
        price: price1 + price
      })
    }
    if (sum < 100) {
      sum++
      that.setData({
        [`items[${id-1}].num`]: sum
      })
    } else {
      that.setData({
        [`items[${id-1}].num`]: 100
      })
    }
  },
  // 复选按钮
  checked: function(id) {
    var id = parseInt(id.currentTarget.dataset.id)
    var item = this.data.items
    var checkbox = this.data.items[id - 1].selected
    // 获取当前点击商品价格
    var price = Number(this.data.items[id - 1].money)
    // 获取当前点击商品数量
    var sum = Number(this.data.items[id - 1].num)
    checkbox = !checkbox
    this.setData({
      [`items[${id-1}].selected`]: checkbox
    })
    if(checkbox){
      // 当前选择商品的价格合计
      var price1 = Number(this.data.price)
      this.setData({
        price: price1 + sum * price,
        sum: sum
      })
    }else{
      var price1 = Number(this.data.price)
      this.setData({
        price: price1 - sum * price,
      })
    }
    // 定义空数组
    var arr = []
    var cont = 0
    for (let i = 0; i < item.length; i++) {
      // 循环item数组  将数组内复选按钮的状态push进arr空数组
      arr.push(item[i].selected)
    }
    // 遍历arr 数组
    for(var i=0;i<arr.length;i++){
      // 判断数组内如果有一个值为true  cont+1
      if(arr[i]==true){
        cont++
      }
    }
    this.setData({
      sum :cont
    })
    if (arr.indexOf(false) != -1) {
      this.setData({
        select: false,
        
      })
    }else{
      this.setData({
        select: true,
      })
    }
  },

  // 全选反选按钮
  selectAll: function(id) {
    // 获取绑定的自定义属性id 值
    var id = parseInt(id.currentTarget.dataset.id)
    var selectedAll = this.data.select
    var price1 = Number(this.data.price)
    selectedAll = !selectedAll
    this.setData({
      select: selectedAll
    })
    var items = this.data.items 
    var arr1 = []
    var sum_money=0;
    for (var i = 0; i < items.length; i++) {
      var price = Number(this.data.items[i].money)
      var sum = Number(this.data.items[i].num)
      var sum2 = items.length;
      arr1.push(sum)
      if (selectedAll) {
        items[i].selected = selectedAll;
        this.setData({
          [`items[${i}].selected`]: selectedAll,
          sum: sum2
        })
      } else {
        items[i].selected = selectedAll
        this.setData({
          [`items[${i}].selected`]: selectedAll,
          price: 0,
          sum:0
        })
      };
      // console.log(price,sum)
      sum_money +=price*sum;
      // console.log(sum_money)
      if(this.data.select == true){
        this.setData({ price: sum_money })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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