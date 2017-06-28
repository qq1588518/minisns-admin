<template>
    <div class="box" v-title="'test'">
      <p>{{msg.data}}</p>
      <p>{{msg}}</p>

    </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import ws from './client'
console.log(ws)
window.Vue = Vue
window.msg = {data: {a: 'xxx'}}
export default {
  name: 'test',
  data () {
    return {
      msg: this.ws.msg
      // msg: window.msg
    }
  },
  created () {
    console.log(this.ws)
    this.ws.init()
  }
}
Vue.prototype.ws = ws
</script>

<style lang="less">
// @import '../assets/less/switch.less';
// @import "../assets/less/color.less";
.box{
    margin: 0 atuo;
}
</style>
<style scoped>
body{
    background: red;
}
</style>
