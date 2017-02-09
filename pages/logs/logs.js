//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
    wx.request({
      url: 'https://tcp.winksi.com.cn/UserCenter/cp/verifyToken/100',
      data: {"access_token":"CFikA9NZAKfDsF7WllnmlCq1jr9l1T2dhUV8bMH+QUJ9Vvesw\/NOyHdGmnu6w1oup1wuZREDflwYSHsw276Sk55P","token_type":"100","cp_name":"meibu"},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {'Content-Type':"application/json"}, // 设置请求的 header
      success: function(res){
        console.log(res)
            alert("2");
        // success
      },
      fail: function() {
        alert("11");
        // fail
      },
      complete: function() {
        alert("2");
        // complete
      }
    })
  }
})
