<template>
<div class="box text-center">
    <h2 style="font-size: 2rem">{{data.count}}</h2>
    <input type="button" class="btn btn-info" value="reduce(-)" @click="handleReduce">
    <input type="button" class="btn" value="reset(0)" @click="handleReset">
    <input type="button" class="btn btn-success" value="add(+)" @click="handleAdd">
</div>
</template>
<style type="text/css" scoped>
.box{
    margin: 0 auto;
    margin-top: 100px;
}
</style>
<script type="text/javascript">
import {mapState, mapActions} from 'vuex'
export default {
  name: 'vuex-demo',
  data () {
    return {
      // count: 0
    }
  },
  computed: {
    ...mapState({
      data: ({demo}) => demo.data
    })
    // count () {
    //   // return this.$store.state.count
    // }
  },
  methods: {
    ...mapActions(['updateDemoCount']),
    handleAdd () {
      // this.count++
      let res = this.updateDemoCount(this.data.count + 1)
      console.log(res)
      res.then(e => {
        console.log('===', e)
      }).catch(err => {
        console.log('err:', err)
      })
    },
    handleReduce () {
      this.updateDemoCount(this.data.count - 1).then(function () {
        console.log('action then: ', arguments)
      })
    },
    handleReset () {
      this.updateDemoCount(0)
    }
  }
}
</script>
