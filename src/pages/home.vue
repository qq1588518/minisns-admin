<style>
.my-menu-header{
  line-height: 36px;
  margin: 0 -10px;
  background: #EDF1F2;
  padding: 0 10px;
  font-weight: bold;
  margin-top: -5px;
}
.test-line{
  height: 1px;
  background: #dee3ea;
  margin: 5px -10px;
}
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



</style>
<template>
<div>
  <m-dropdown @command="handleCommand">
    <a href="#" style="display: inline-block; padding: 10px;">dropdown <span class="caret"></span></a>
    <m-dropdown-menu>
      <div class="my-menu-header">这是扩展内容</div>
      <m-dropdown-item>用户中心</m-dropdown-item>
      <m-dropdown-item command="article">文章</m-dropdown-item>
      <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
      <div class="test-line"></div>
      <m-dropdown-item command="exit">退出</m-dropdown-item>
      <m-dropdown-item><router-link :to="{name: 'login'}">login</router-link></m-dropdown-item>
    </m-dropdown-menu>
  </m-dropdown>

  <m-dropdown @command="handleCommand" menu-align="right">
    <a href="#" style="display: inline-block; padding: 10px;">dropdown</a>
    <m-dropdown-menu>
      <div class="my-menu-header">这是扩展内容</div>
      <m-dropdown-item>用户中心</m-dropdown-item>
      <m-dropdown-item command="article" off-click>文章</m-dropdown-item>
      <m-dropdown-item @click.native.stop="test" disabled>收藏</m-dropdown-item>
      <m-dropdown-item command="exit">退出</m-dropdown-item>
      <m-dropdown-item><router-link :to="{name: 'login'}">login</router-link></m-dropdown-item>
    </m-dropdown-menu>
  </m-dropdown>
  <div style="background: #ddd; height: 150px;margin: 10px">
    <div style="width: 200px;height: 100%; background: #ccc"></div>
  </div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>
  <div style="background: #ddd; height: 50px;margin: 10px"></div>
  <h1>1</h1>
  <h1>2</h1>
  <h1>3</h1>
  <h1>4</h1>
  <h1>5</h1>
  <h1>6</h1>
  <h1>7</h1>
  <h1>8</h1>
  <h1>9</h1>
  <h1>10</h1>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>

  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>

  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
  <div class="m-alert">home</div>
</div>
</template>

<script type="text/javascript">
export default{
  name: 'home',
  methods: {
    handleCommand () {
      console.log(arguments)
    }
  }
}
</script>
