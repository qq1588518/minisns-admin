<style>

.caret{
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.test-btn{
  background: #11BBA6;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 15px;
  margin: 10px;
  outline: none;
  transition: box-shadow .3s ease;
  box-shadow: 0px 0px 0px 0px rgba(0, 117, 133, 0.07);
}
.test-btn:active{
  box-shadow: 0px 0px 0px 5px rgba(0, 117, 133, 0.07);
}
.testactive:active{
  background: red;
}
.testactive:active ~ .m-switch-inner {
  color: blue;
}
</style>
<template>
<div>
  <button class="testactive">
    active
  </button>
  <span class="m-switch-inner">xxxxx</span>
  
  <button class="btn btn-primary" @click="testfun" :class="{'clicked': isClick}">btn-primary</button>
  <button class="btn btn-info" :class="{'clicked': isClick}">btn-info</button>
  <div class="box">
      <button class="btn">default</button>
      <button class="btn btn-info">btn-info</button>
      <button class="btn btn-primary">btn-primary</button>
      <button class="btn btn-success">btn-success</button>
      <button class="btn btn-danger">btn-danger</button>
      <button class="btn btn-warning">btn-warning</button>
  </div>
  <div style="background: #ddd; height: 150px;margin: 10px">
    <div style="width: 200px;height: 100%; background: #ccc"></div>
  </div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>

</div>
</template>

<script type="text/javascript">

export default{
  name: 'home',
  data () {
    return {
      isClick: false
    }
  },
  methods: {
    testfun () {
      this.isClick = true
      setTimeout(() => {
        this.isClick = false
      }, 400)
    }
  }
}
</script>
