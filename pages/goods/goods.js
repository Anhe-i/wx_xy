// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      { url: '../../images/goods.jpeg' },
      { url: '../../images/goods1.jpeg' },
      { url: '../../images/goods2.jpeg' },
      { url: '../../images/goods3.jpg' }
    ] ,
    current:0,
    autoplay:true
  },
  qian(){
  
    if(  this.data.current >=1){
      this.setData({
        current: this.data.current-1,
        // autoplay:false
      })
      console.log(this.data.current);
      
    }
    if (this.data.current == 0) {
      this.data.current = 4;
    }
  },
  hou(e) {
    
    if (this.data.current<=2) {
      this.setData({
        current: this.data.current + 1,

      })
     console.log(this.data.current);
    }
    if(this.data.current==3){
      this.data.current = -1;
    }
     
  },
  change(e){
    
  }
 
})