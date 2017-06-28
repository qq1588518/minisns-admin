import Vue from 'vue'
const ws = {
  msg: {data: ''},
  init: function () {
    console.log(this)
    var count = 0
    var that = this
    setInterval(function () {
      that.msg.data = count
      Vue.set(that.msg, 'data', {data: [count]})
      console.log(that, count)
      count++
    }, 1000)
  }
}

export default ws
