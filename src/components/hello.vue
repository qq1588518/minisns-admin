<template >
  <stick-footer-layout>
  <div class="hello" v-title="'hello'">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>快捷连接</h2>
    <ul>
      <li><a href="http://cn.vuejs.org/" target="_blank">vue中文文档</a></li>
      <li><a href="http://element.eleme.io/" target="_blank">饿了么UI</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Template</a></li>
    </ul>
    <h2>生态系统</h2>
    <ul>
      <li><a href="https://github.com/mzabriskie/axios">axios</a></li>
      <li><a href="http://router.vuejs.org/zh-cn/installation.html" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="https://github.com/pagekit/vue-resource" target="_blank">vue-resource</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
  <div slot="footer">
    <p style="text-align: center; line-height: 50px; margin: 0"> make by @lanyue</p>
  </div>
  </stick-footer-layout>
</template>

<script>
import stickFooterLayout from '@/components/stick-footer-layout'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    stickFooterLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
