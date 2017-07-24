<style>
  .ajax-box{
    padding: 15px;
    background: #FFFFFF;
  }
  .ajax-type{
    margin-top: 15px;
    float: right;
  }
  .ajax-input{
    width: 100%;
    box-sizing: border-box;
  }
  .ajax-input-box{
    overflow: auto;
    padding:15px 15px;
  }
  .ajax-sub{
    display: block;
    margin: 0 auto;
  }
</style>
<template>
<div class="m-container" style="margin-top: 100px;max-width: 760px">
  <div class="ajax-box">
    <select class="m-input ajax-type" v-model="type">
      <option value="get">get</option>
      <option value="post">post</option>
    </select>
    <div class="ajax-input-box">

      <input type="text" placeholder="url" v-model="url" class="m-input block-input ajax-input">
    </div>
    <button class="btn btn-info ajax-sub" @click="handleSub">提交</button>
  </div>
  
</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
export default {
  name: 'ajax',
  data () {
    return {
      type: 'get',
      url: ''
    }
  },
  methods: {
    handleSub () {
      if (this.type === 'get') {
        Vue.http.get(this.url).then(res => {
          console.log('res: ', res)
        }).catch(err => {
          console.log('err: ', err)
        })
      } else {
        Vue.http.post(this.url).then(res => {
          console.log('res: ', res)
        }).catch(err => {
          console.log('err: ', err)
        })
      }
    }
  }
}
</script>
